import Image from "next/image";
import { ChevronRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { siteAssets, siteContent } from "@/lib/data";

export function FaqSection() {
  const content = siteContent.faq;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="glass-panel overflow-hidden p-6 sm:p-8">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} copy={content.copy} />
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white">
              <Image
                src={siteAssets.faqImage.src}
                alt={siteAssets.faqImage.alt}
                width={1400}
                height={900}
                className="h-52 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-4">
            {content.items.map((item) => (
              <article key={item.question} className="glass-panel p-5 sm:p-6">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-brand-50 p-2 text-brand-700">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-slate-600">{item.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
