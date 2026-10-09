import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import PartnerMarqueeSection from "@/components/sections/PartnerMarqueeSection";
import HomeAboutSplitSection from "@/components/sections/HomeAboutSplitSection";
import BusinessesSection from "@/components/sections/BusinessesSection";
import PlatformShowcaseSection from "@/components/sections/PlatformShowcaseSection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import NewsInsightsSection from "@/components/sections/NewsInsightsSection";
import StrategicCtaBannerSection from "@/components/sections/StrategicCtaBannerSection";
import StrategicConversationFaqSection from "@/components/sections/StrategicConversationFaqSection";
import BreakingNewsTickerSection from "@/components/sections/BreakingNewsTickerSection";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Flagship 3D Hero Section */}
      <HeroSection />

      {/* 2. Moving Partner Pod Horizon Stream (Directly Below Hero) */}
      <PartnerMarqueeSection />

      {/* 3. About Split Section */}
      <HomeAboutSplitSection />

      {/* 4. Core Businesses Section */}
      <BusinessesSection />

      {/* 4. Featured Platform Showcase */}
      <PlatformShowcaseSection />

      {/* 5. Affiliations / Partnerships */}
      <PartnershipsSection />

      {/* 6. The Newsroom / News & Insights */}
      <NewsInsightsSection />

      {/* 7. Strategic Vision CTA Banner (Data Only — No Robot Image) */}
      <StrategicCtaBannerSection />

      {/* 8. Strategic Conversation & FAQ */}
      <StrategicConversationFaqSection />

      {/* 9. Live Breaking News / Spotlight Ticker */}
      <BreakingNewsTickerSection />
    </div>
  );
}
