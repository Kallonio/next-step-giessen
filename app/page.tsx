import { HeroSection } from "@/components/hero-section";
import { HomeOverview } from "@/components/home-overview";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <HomeOverview />
      <SiteFooter />
    </main>
  );
}
