import {
  CallToAction,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from '@/templates/homepage/sections';

export function HomePage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToAction />
    </article>
  );
}
