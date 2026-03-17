import Link from "next/link";

import { contactDetails, siteContent } from "@/lib/data";

export function SiteFooter() {
  const content = siteContent.footer;

  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="container-shell space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 text-sm leading-7 text-slate-600">
          <p className="font-semibold text-ink">{content.noteTitle}</p>
          <p className="mt-2">{content.noteCopy}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {contactDetails.advisor} | Finanzberater bei {contactDetails.company}
          </p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p>
              Telefon {contactDetails.phone} | {contactDetails.email}
            </p>
            <div className="flex gap-4">
              <Link href="/impressum" className="transition hover:text-brand-700">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition hover:text-brand-700">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
