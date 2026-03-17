import { FaqSection } from "@/components/faq-section";
import { RelevanceSection } from "@/components/relevance-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function FaqPage() {
  return (
    <main>
      <SiteHeader />
      <FaqSection />
      <RelevanceSection />
      <SiteFooter />
    </main>
  );
}
