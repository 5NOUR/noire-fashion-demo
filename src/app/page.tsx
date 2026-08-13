import { Hero } from "@/components/home/hero";
import { Marquee } from "@/components/home/marquee";
import { FeaturedCollection } from "@/components/home/featured-collection";
import { NewArrivals } from "@/components/home/new-arrivals";
import { EditorialSection } from "@/components/home/editorial-section";
import { CategoryShowcase } from "@/components/home/category-showcase";
import { BestSellers } from "@/components/home/best-sellers";
import { BrandStory } from "@/components/home/brand-story";
import { LookbookTeaser } from "@/components/home/lookbook-teaser";
import { PromoSection } from "@/components/home/promo-section";
import { Newsletter } from "@/components/home/newsletter";
import { SocialSection } from "@/components/home/social-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedCollection />
      <NewArrivals />
      <EditorialSection />
      <CategoryShowcase />
      <BestSellers />
      <BrandStory />
      <LookbookTeaser />
      <PromoSection />
      <Newsletter />
      <SocialSection />
    </>
  );
}
