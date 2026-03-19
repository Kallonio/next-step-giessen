import Link from "next/link";

import { contactDetails, legalDetails } from "@/lib/data";

export const metadata = {
  title: "Impressum | Next Step Giessen",
  description: "Impressum der Website Next Step Giessen.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-shell">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <Link href="/" className="text-sm font-semibold text-brand-700">
            Zurueck zur Startseite
          </Link>

          <h1
            className="mt-6 text-4xl font-semibold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Impressum
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-ink">Angaben gemaess Paragraf 5 TMG</h2>
              <p className="mt-3">
                {contactDetails.advisor}
                <br />
                Finanzberater bei {contactDetails.company}
                <br />
                {legalDetails.postalAddressLine1}
                <br />
                {legalDetails.postalAddressLine2}
                <br />
                E-Mail: {contactDetails.email}
                <br />
                Telefon: {contactDetails.phone}
              </p>
              <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-amber-900">
                Vor dem finalen Go-live bitte die Platzhalter zur postalischen Anschrift und die
                berufsrechtlichen Pflichtangaben noch mit deinen echten Daten ersetzen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Verantwortlich fuer den Inhalt</h2>
              <p className="mt-3">
                {contactDetails.advisor}
                <br />
                {contactDetails.company}
                <br />
                {legalDetails.postalAddressLine1}
                <br />
                {legalDetails.postalAddressLine2}
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Hinweis zur Taetigkeit</h2>
              <p className="mt-3">
                Diese Website informiert ueber Seminar- und Workshopformate rund um Karriere,
                Finanzen und Berufseinstieg. Transparenz ist ausdruecklich Teil des Konzepts:{" "}
                {contactDetails.advisor} ist Finanzberater bei {contactDetails.company}.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Berufsrechtliche Angaben</h2>
              <p className="mt-3">{legalDetails.professionalInfo}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">Online-Auftritt</h2>
              <p className="mt-3">Website: {legalDetails.websiteDomain}</p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
