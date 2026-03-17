"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { audience, siteContent } from "@/lib/data";

export function AudienceSection() {
  const content = siteContent.audience;

  return (
    <section className="py-20 sm:py-24">
      <div className="container-shell">
        <motion.div
          className="glass-panel overflow-hidden p-8 sm:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="section-eyebrow">{content.eyebrow}</span>
              <h2 className="mt-5 section-title">{content.title}</h2>
              {content.copy ? <p className="mt-5 section-copy">{content.copy}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {audience.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-3xl border border-slate-200 bg-white p-5"
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                >
                  <p className="text-base font-semibold text-ink">{item}</p>
                </motion.div>
              ))}
              <a href="#kontakt" className="primary-button min-h-16">
                {content.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
