import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageIntro({ eyebrow, title, copy, ctaLabel, ctaHref }: PageIntroProps) {
  return (
    <section className="pb-8 pt-14 sm:pb-10 sm:pt-16">
      <div className="container-shell">
        <div className="glass-panel p-7 sm:p-9">
          <SectionHeading eyebrow={eyebrow} title={title} copy={copy} />
          {ctaLabel && ctaHref ? (
            <Link href={ctaHref} className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700">
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
