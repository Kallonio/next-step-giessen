import { NextRequest, NextResponse } from "next/server";

import { sendContactMail } from "@/lib/mailer";
import { contactSchema } from "@/lib/validation";

export const runtime = "nodejs";

type RateLimitEntry = {
  count: number;
  expiresAt: number;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;

const globalStore = globalThis as typeof globalThis & {
  __contactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore = globalStore.__contactRateLimit ?? new Map<string, RateLimitEntry>();

globalStore.__contactRateLimit = rateLimitStore;

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (!consumeRateLimit(ip)) {
      return NextResponse.json(
        {
          message:
            "Es wurden gerade zu viele Anfragen gesendet. Bitte versuche es in einigen Minuten erneut.",
        },
        { status: 429 },
      );
    }

    const body = await request.json();

    if (typeof body?.company === "string" && body.company.trim().length > 0) {
      return NextResponse.json({ message: "Anfrage empfangen." }, { status: 200 });
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          message: "Bitte prüfe deine Angaben.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    await sendContactMail(parsed.data);

    return NextResponse.json(
      {
        message:
          "Vielen Dank. Deine Anfrage wurde erfolgreich versendet. Karl-Philip Dübel meldet sich zeitnah zurück.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("contact_form_error", error);

    return NextResponse.json(
      {
        message:
          "Der Versand konnte aktuell nicht abgeschlossen werden. Bitte versuche es später erneut oder melde dich direkt per E-Mail.",
      },
      { status: 500 },
    );
  }
}

function consumeRateLimit(key: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(key);

  if (!existing || existing.expiresAt < now) {
    rateLimitStore.set(key, {
      count: 1,
      expiresAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return false;
  }

  existing.count += 1;
  rateLimitStore.set(key, existing);
  return true;
}
