import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CircleHelp, Mail, UserRound } from "lucide-react";

const overviewItems = [
  {
    title: "Seminare",
    copy: "Sechs Formate, die dich in Karriere und Finanzfragen wirklich weiterbringen.",
    href: "/seminare",
    variant: "primary" as const,
  },
  {
    title: "Über mich",
    copy: "Kurz und professionell eingeordnet, wer hinter den Formaten steht und wie die Zusammenarbeit aussieht.",
    href: "/ueber-mich",
    icon: UserRound,
    variant: "teal" as const,
    badge: "Persönlich",
  },
  {
    title: "Häufige Fragen",
    copy: "Oft gestellte Fragen, einfach beantwortet.",
    href: "/faq",
    icon: CircleHelp,
    variant: "blue" as const,
    badge: "Transparent",
  },
  {
    title: "Kontakt",
    copy: "Direkt Seminarinteresse melden, Rückfragen stellen oder unverbindlich ein Gespräch anfragen.",
    href: "/kontakt",
    icon: Mail,
    variant: "slate" as const,
    badge: "Direkt",
  },
];

function SeminarVisual() {
  return (
    <div className="relative hidden min-h-[260px] min-w-[360px] overflow-hidden rounded-[2rem] border border-white/40 shadow-[0_36px_100px_-44px_rgba(30,64,175,0.45)] lg:block">
      <Image
        src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1400"
        alt="Moderne Seminar- und Arbeitssituation mit Fokus auf Orientierung und Austausch."
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.02)_0%,rgba(15,23,42,0.22)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(15,23,42,0)_0%,rgba(15,23,42,0.22)_100%)]" />
    </div>
  );
}

export function HomeOverview() {
  return (
    <section className="pb-20 pt-6 sm:pb-24">
      <div className="container-shell">
        <div className="grid gap-6 lg:grid-cols-3">
          {overviewItems.map((item) => {
            const isPrimary = item.variant === "primary";
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative overflow-hidden rounded-[2rem] border transition duration-300 hover:-translate-y-1 ${
                  isPrimary
                    ? "border-[#b7cff3] bg-[linear-gradient(135deg,#edf5ff_0%,#d7e5f8_42%,#c1d6f3_100%)] p-7 shadow-[0_32px_100px_-40px_rgba(30,64,175,0.58)] lg:col-span-3"
                    : item.variant === "teal"
                      ? "border-[#c7d0ff] bg-[linear-gradient(180deg,#f7f8ff_0%,#dfe4ff_100%)] p-6 shadow-[0_24px_75px_-36px_rgba(79,70,229,0.34)]"
                      : item.variant === "blue"
                        ? "border-[#c8dafc] bg-[linear-gradient(180deg,#f8fbff_0%,#dbe9fd_100%)] p-6 shadow-[0_24px_75px_-36px_rgba(37,99,235,0.38)]"
                        : "border-[#d3dcec] bg-[linear-gradient(180deg,#ffffff_0%,#e4ebf5_100%)] p-6 shadow-[0_24px_75px_-36px_rgba(51,65,85,0.32)]"
                }`}
              >
                <div className="section-sheen absolute inset-0 opacity-75">
                  {isPrimary ? (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.45),transparent_34%)]" />
                  ) : item.variant === "teal" ? (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.58),transparent_30%),linear-gradient(135deg,transparent_0%,rgba(99,102,241,0.09)_100%)]" />
                  ) : item.variant === "blue" ? (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_30%),linear-gradient(135deg,transparent_0%,rgba(37,99,235,0.08)_100%)]" />
                  ) : (
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.55),transparent_30%),linear-gradient(135deg,transparent_0%,rgba(71,85,105,0.08)_100%)]" />
                  )}
                </div>

                {isPrimary ? (
                  <div className="relative z-10 flex h-full flex-col gap-8 lg:flex-row lg:items-stretch lg:justify-between">
                    <div className="max-w-3xl rounded-[1.7rem] border border-white/55 bg-white/56 p-6 backdrop-blur-md lg:max-w-[36rem] lg:p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-white/60 bg-white/65 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 backdrop-blur">
                          Überblick
                        </span>
                        <span className="inline-flex items-center rounded-full border border-emerald-200/80 bg-emerald-50/85 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 backdrop-blur">
                          kostenfrei
                        </span>
                      </div>
                      <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl lg:text-[3rem] lg:leading-[1.02]">
                        {item.title}
                      </h2>
                      <p className="mt-3 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">{item.copy}</p>
                      <div className="mt-6 h-px w-full bg-[linear-gradient(90deg,rgba(37,99,235,0.2),rgba(37,99,235,0))]" />
                      <span className="mt-8 inline-flex items-center text-sm font-semibold text-brand-700">
                        Zur Seite
                        <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                      </span>
                    </div>

                    <SeminarVisual />
                  </div>
                ) : (
                  <div className="relative z-10 flex min-h-[265px] flex-col">
                    <div
                      className={`absolute right-5 top-5 h-20 w-20 rounded-full blur-2xl ${
                        item.variant === "teal"
                          ? "bg-indigo-200/60"
                          : item.variant === "blue"
                            ? "bg-brand-200/60"
                            : "bg-slate-200/70"
                      }`}
                    />
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 shadow-[0_12px_32px_-18px_rgba(30,64,175,0.45)] backdrop-blur ${
                          item.variant === "teal"
                            ? "text-indigo-700"
                            : item.variant === "blue"
                              ? "text-brand-700"
                              : "text-slate-700"
                        }`}
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${
                          item.variant === "teal"
                            ? "bg-indigo-100 text-indigo-700"
                            : item.variant === "blue"
                              ? "bg-brand-100 text-brand-700"
                              : "bg-slate-200 text-slate-700"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div
                      className={`mt-6 h-1.5 w-20 rounded-full ${
                        item.variant === "teal"
                          ? "bg-indigo-500"
                          : item.variant === "blue"
                            ? "bg-brand-500"
                            : "bg-slate-500"
                      }`}
                    />

                    <h2 className="mt-5 text-2xl font-semibold text-ink">{item.title}</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.copy}</p>
                    <div
                      className={`mt-5 h-px w-full ${
                        item.variant === "teal"
                          ? "bg-indigo-200/90"
                          : item.variant === "blue"
                            ? "bg-brand-200/90"
                            : "bg-slate-200/90"
                      }`}
                    />
                    <span className="mt-auto inline-flex items-center pt-6 text-sm font-semibold text-brand-700">
                      Zur Seite
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
