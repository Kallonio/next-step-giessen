import Link from "next/link";

import { contactDetails } from "@/lib/data";

export const metadata = {
  title: "Datenschutz | Next Step Gießen",
  description: "Datenschutzhinweise für die Website Next Step Gießen.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="container-shell">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
          <Link href="/" className="text-sm font-semibold text-brand-700">
            Zurück zur Startseite
          </Link>

          <h1
            className="mt-6 text-4xl font-semibold tracking-tight text-ink"
            style={{ fontFamily: "var(--font-display), serif" }}
          >
            Datenschutzerklärung
          </h1>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-ink">1. Verantwortlicher</h2>
              <p className="mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                <br />
                {contactDetails.advisor}
                <br />
                {contactDetails.company}
                <br />
                E-Mail: {contactDetails.email}
                <br />
                Telefon: {contactDetails.phone}
              </p>
              <p className="mt-4 rounded-2xl bg-amber-50 px-4 py-3 text-amber-900">
                Vor dem Livegang bitte die vollständige postalische Anschrift und gegebenenfalls
                weitere Pflichtangaben ergänzen.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">2. Zweck der Verarbeitung</h2>
              <p className="mt-3">
                Personenbezogene Daten werden über diese Website verarbeitet, um Anfragen zu
                Seminaren, Workshops, Rückfragen oder unverbindlichen Kontaktaufnahmen zu bearbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">3. Kontaktformular</h2>
              <p className="mt-3">
                Wenn du das Kontaktformular nutzt, werden die von dir eingegebenen Daten verarbeitet,
                um deine Anfrage entgegenzunehmen, zu prüfen und per E-Mail an {contactDetails.email}{" "}
                weiterzuleiten.
              </p>
              <p className="mt-3">
                Verarbeitet werden insbesondere Name, E-Mail-Adresse, Telefonnummer, Thema,
                Seminarinteresse und deine Nachricht.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">4. Rechtsgrundlage</h2>
              <p className="mt-3">
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, soweit es um
                die Bearbeitung konkreter Anfragen geht, sowie gegebenenfalls auf Grundlage von Art.
                6 Abs. 1 lit. f DSGVO im berechtigten Interesse an einer effizienten Kommunikation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">5. E-Mail-Versand und technische Verarbeitung</h2>
              <p className="mt-3">
                Kontaktanfragen werden serverseitig verarbeitet und über den E-Mail-Dienst Resend an
                die hinterlegte Empfängeradresse versendet. Dabei können technisch erforderliche
                Verarbeitungen durch Hosting- und E-Mail-Dienstleister stattfinden.
              </p>
              <p className="mt-3">
                Vor dem produktiven Einsatz sollten der konkret verwendete Hosting-Anbieter sowie
                Resend als eingesetzter E-Mail-Dienst in dieser Erklärung namentlich ergänzt und
                rechtlich geprüft werden.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">6. Speicherdauer</h2>
              <p className="mt-3">
                Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Bearbeitung der
                Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-ink">7. Deine Rechte</h2>
              <p className="mt-3">
                Du hast im Rahmen der gesetzlichen Vorgaben insbesondere das Recht auf Auskunft,
                Berichtigung, Löschung, Einschränkung der Verarbeitung sowie auf Widerspruch gegen die
                Verarbeitung deiner personenbezogenen Daten.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
