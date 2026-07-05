import { ParallaxSection } from "@/components/ParallaxSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

/**
 * SERVICE section intro band — green parallax band with centered white heading.
 * Source: composite_box01.block_images_16 preceding heading band (section-01 screenshot).
 */
export function ServiceBand() {
  return (
    <ParallaxSection
      id="service"
      image="/images/parallax-service.png"
      className="bg-tt-green pt-20 pb-[100px]"
      imageClassName="opacity-40 mix-blend-multiply"
    >
      <Reveal>
        <SectionHeading en="SERVICE" light className="mb-0" />
      </Reveal>
    </ParallaxSection>
  );
}
