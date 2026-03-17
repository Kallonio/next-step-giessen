import Image from "next/image";

import { SectionHeading } from "@/components/section-heading";
import { relevancePoints, siteAssets, siteContent } from "@/lib/data";

export function RelevanceSection() {
  const content = siteContent.relevance;

  return (
    <section className="py-16 sm:py-20">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading eyebrow={content.eyebrow} title={content.title} copy={content.copy} />
            <div className="mt-6 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
              <Image
                src={siteAssets.relevanceImage.src}
                alt={siteAssets.relevanceImage.alt}
                width={1400}
                height={900}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {relevancePoints.map((item) => (
              <div key={item.title} className="glass-panel p-6">
                <p className="text-lg font-semibold text-ink">{item.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
