"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Clock3 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { seminars, siteAssets, siteContent } from "@/lib/data";

export function SeminarGrid() {
  const content = siteContent.seminars;
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (title: string) => {
    setExpandedCards((current) => ({
      ...current,
      [title]: !current[title],
    }));
  };

  return (
    <section id="seminare" className="py-8 sm:py-12">
      <div className="container-shell">
        <SectionHeading eyebrow={content.eyebrow} title={content.title} copy={content.copy} />

        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {seminars.map((seminar, index) => {
            const Icon = seminar.icon;
            const image = siteAssets.seminarImages[seminar.title];
            const isExpanded = expandedCards[seminar.title] ?? false;

            return (
              <motion.article
                key={seminar.title}
                className="glass-panel group overflow-hidden p-6 sm:p-8"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div className="mb-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-100">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1400}
                    height={900}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-ink">{seminar.title}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600">{seminar.hook}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2 text-brand-700">
                    <Clock3 className="h-4 w-4" />
                    <p className="text-sm font-semibold">{content.formatLabel}</p>
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{seminar.format}</p>
                </div>

                {isExpanded ? (
                  <ul className="mt-4 grid gap-3">
                    {seminar.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6 flex items-center justify-between gap-4">
                  <Link
                    href={`/kontakt?interesse=${encodeURIComponent(seminar.title)}`}
                    className="inline-flex items-center text-sm font-semibold text-brand-700 transition group-hover:text-brand-800"
                  >
                    {content.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => toggleCard(seminar.title)}
                    className="inline-flex items-center text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Weniger anzeigen" : "Mehr anzeigen"}
                    <ChevronDown className={`ml-2 h-4 w-4 transition ${isExpanded ? "rotate-180" : ""}`} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
