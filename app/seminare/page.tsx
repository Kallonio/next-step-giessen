import { SeminarGrid } from "@/components/seminar-grid";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function SeminarePage() {
  return (
    <main>
      <SiteHeader />
      <SeminarGrid />
      <SiteFooter />
    </main>
  );
}
