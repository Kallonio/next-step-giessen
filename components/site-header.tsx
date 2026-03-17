"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Menu, Phone, X } from "lucide-react";

import { contactDetails, siteContent } from "@/lib/data";

const navItems = [
  { label: "Start", href: "/" },
  { label: "Seminare", href: "/seminare" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Häufige Fragen", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/60 bg-slate-50/75 backdrop-blur-xl"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-ink">{siteContent.brand.name}</p>
            <p className="text-xs text-slate-500">{siteContent.brand.tagline}</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-brand-700 ${
                pathname === item.href ? "text-brand-700" : "text-slate-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
            className="secondary-button px-4 py-2"
          >
            <Phone className="mr-2 h-4 w-4" />
            {contactDetails.phone}
          </a>
          <Link href="/kontakt" className="primary-button px-4 py-2">
            <Mail className="mr-2 h-4 w-4" />
            Kontakt aufnehmen
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="container-shell pb-5 lg:hidden">
          <div className="glass-panel p-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 grid gap-3">
              <a
                href={`tel:${contactDetails.phone.replaceAll(" ", "")}`}
                className="secondary-button w-full"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="mr-2 h-4 w-4" />
                {contactDetails.phone}
              </a>
              <Link href="/kontakt" className="primary-button w-full" onClick={() => setIsOpen(false)}>
                <Mail className="mr-2 h-4 w-4" />
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </motion.header>
  );
}
