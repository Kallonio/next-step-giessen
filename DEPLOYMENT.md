# Livegang-Checkliste

## Rechtliches vervollständigen

- In [app/impressum/page.tsx](C:/Users/kdueb/OneDrive/Dokumente/New%20project/app/impressum/page.tsx) die vollständige ladungsfähige Anschrift ergänzen.
- In [app/impressum/page.tsx](C:/Users/kdueb/OneDrive/Dokumente/New%20project/app/impressum/page.tsx) alle berufsrechtlichen Pflichtangaben ergänzen.
- In [app/datenschutz/page.tsx](C:/Users/kdueb/OneDrive/Dokumente/New%20project/app/datenschutz/page.tsx) die vollständige Anschrift ergänzen.
- In [app/datenschutz/page.tsx](C:/Users/kdueb/OneDrive/Dokumente/New%20project/app/datenschutz/page.tsx) den tatsächlichen Hosting-Anbieter ergänzen.

## Umgebungsvariablen setzen

In `.env.local` oder im Hosting-Dashboard:

```env
RESEND_API_KEY=
CONTACT_FROM_EMAIL=Karl-Philip Duebel <kontakt@mail.next-step-giessen.de>
CONTACT_TO_EMAIL=karl-philip.duebel@mlp.de
CONTACT_CONFIRMATION_ENABLED=false
```

## Domain und E-Mail

- Resend-Domain `mail.next-step-giessen.de` muss verifiziert bleiben.
- DNS-Einträge für Domain und Mail-Subdomain müssen aktiv sein.
- Absenderadresse in `CONTACT_FROM_EMAIL` muss zu der verifizierten Resend-Domain passen.

## Build lokal prüfen

```bash
npm run build
npm run start
```

## Deployment

Empfohlener Weg:

- Projekt bei Vercel importieren
- Domain `next-step-giessen.de` verbinden
- Umgebungsvariablen im Vercel-Dashboard setzen
- Produktionsdeployment auslösen

## End-to-End-Test nach Livegang

- Startseite laden
- Seminarseite öffnen
- Kontaktformular absenden
- Eingang der Mail an `karl-philip.duebel@mlp.de` prüfen
- Impressum und Datenschutz öffnen
