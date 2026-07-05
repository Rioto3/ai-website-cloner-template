import { AccessSection } from "@/components/AccessSection";
import { BlogSection } from "@/components/BlogSection";
import { ConceptSection } from "@/components/ConceptSection";
import { FooterMessage } from "@/components/FooterMessage";
import { HeroSlider } from "@/components/HeroSlider";
import { MapSection } from "@/components/MapSection";
import { MenuSection } from "@/components/MenuSection";
import { ServiceBand } from "@/components/ServiceBand";
import { ServiceCards } from "@/components/ServiceCards";
import { ShopInfoSection } from "@/components/ShopInfoSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { StaffSection } from "@/components/StaffSection";
import { VoiceSection } from "@/components/VoiceSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <HeroSlider />
      <main id="main" className="relative z-[1]">
        <ConceptSection />
        <ServiceBand />
        <ServiceCards />
        <VoiceSection />
        <MenuSection />
        <StaffSection />
        <BlogSection />
        <AccessSection />
        <ShopInfoSection />
        <MapSection />
        <FooterMessage />
      </main>
      <SiteFooter />
    </>
  );
}
