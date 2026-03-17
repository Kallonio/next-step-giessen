import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { contactDetails, siteAssets, siteContent } from "@/lib/data";

export function AboutSection() {
  const content = siteContent.about;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="glass-panel overflow-hidden p-3 sm:p-4">
            <div className="overflow-hidden rounded-[1.75rem] bg-white">
              <Image
                src={siteAssets.aboutImage.src}
                alt={siteAssets.aboutImage.alt}
                width={1000}
                height={1500}
                className="h-[32rem] w-full object-cover object-[center_10%] sm:h-[38rem]"
              />
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <SectionHeading eyebrow={content.eyebrow} title={content.title} copy="" />

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-brand-50 px-3 py-1 text-sm font-semibold text-brand-700">
                Karl-Philip Dübel
              </span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600">
                Finanzberater bei {contactDetails.company}
              </span>
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600">{content.intro}</p>
            <p className="mt-4 text-base leading-7 text-slate-600">{content.paragraphs[0]}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {content.points.map((point) => (
                <div key={point} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-3.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-600" />
                  <p className="text-sm leading-6 text-slate-700">{point}</p>
                </div>
              ))}
            </div>

            <Link href="/kontakt" className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700">
              {content.cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
