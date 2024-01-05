import DividerLine from "@/app/_components/utils/divider-line";
import Hero from "@/app/_components/hero";
import WhoWeAre from "@/app/_components/who-we-are";
import OurBrands from "@/app/_components/our-brands";
import OurReviews from "@/app/_components/our-reviews";
import Contact from "@/app/_components/contact";

export default function Index() {
  return (
    <div className="max-w-[1550px] mx-auto">
      <div id="home" className="-translate-y-[98px]"></div>
      <Hero />
      <DividerLine />
      <div id="who-we-are" className="tabletLarge:-translate-y-[98px]"></div>
      <WhoWeAre />
      <DividerLine rightToLeft />
      <div id="brands" className="tabletLarge:-translate-y-[98px]"></div>
      <OurBrands />
      <DividerLine />
      <div id="reviews" className="tabletLarge:-translate-y-[98px]"></div>
      <OurReviews />
      <DividerLine rightToLeft />
      <div id="contact" className="tabletLarge:-translate-y-[98px]"></div>
      <Contact />
    </div>
  );
}
