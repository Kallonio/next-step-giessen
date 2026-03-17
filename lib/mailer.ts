import { Resend } from "resend";

import type { ContactFormValues } from "@/lib/validation";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }

  return value;
}

export async function sendContactMail(data: ContactFormValues) {
  const resend = new Resend(getRequiredEnv("RESEND_API_KEY"));
  const to = process.env.CONTACT_TO_EMAIL ?? "karl-philip.duebel@mlp.de";
  const from =
    process.env.CONTACT_FROM_EMAIL ??
    "Karl-Philip Duebel <kontakt@mail.next-step-giessen.de>";
  const timestamp = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(new Date());

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `Neue Seminaranfrage: ${data.subject}`,
    html: `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
        <h2 style="margin-bottom:16px;">Neue Anfrage über die Website</h2>
        <table style="border-collapse:collapse;width:100%;max-width:680px;">
          <tbody>
            <tr><td style="padding:8px 0;font-weight:700;">Name</td><td style="padding:8px 0;">${escapeHtml(data.fullName)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">E-Mail</td><td style="padding:8px 0;">${escapeHtml(data.email)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Telefon</td><td style="padding:8px 0;">${escapeHtml(data.phone)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Thema</td><td style="padding:8px 0;">${escapeHtml(data.subject)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Seminarinteresse</td><td style="padding:8px 0;">${escapeHtml(data.interest)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:700;">Zeitpunkt</td><td style="padding:8px 0;">${escapeHtml(timestamp)}</td></tr>
          </tbody>
        </table>
        <div style="margin-top:24px;padding:16px;border:1px solid #e2e8f0;border-radius:12px;background:#f8fafc;">
          <p style="margin:0 0 8px;font-weight:700;">Nachricht</p>
          <p style="margin:0;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }

  const confirmationEnabled = process.env.CONTACT_CONFIRMATION_ENABLED === "true";

  if (confirmationEnabled) {
    const confirmation = await resend.emails.send({
      from,
      to: [data.email],
      subject: "Vielen Dank für deine Anfrage",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a">
          <p>Hallo ${escapeHtml(data.fullName)},</p>
          <p>vielen Dank für deine Nachricht. Die Anfrage ist erfolgreich eingegangen.</p>
          <p>Ich melde mich so schnell wie möglich bei dir zurück.</p>
          <p>Beste Grüße<br />Karl-Philip Dübel</p>
        </div>
      `,
    });

    if (confirmation.error) {
      throw new Error(confirmation.error.message);
    }
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
