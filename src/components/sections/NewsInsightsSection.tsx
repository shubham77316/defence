"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  href: string;
}

const newsItems: NewsItem[] = [
  {
    id: "aerospace-highlights",
    title: "Aerospace highlights and autonomous program positioning",
    category: "AEROSPACE",
    date: "MARCH 2026",
    description:
      "Precision-engineered sovereign airframes, autonomous flight trials, and tactical unmanned aerial surveillance milestones.",
    image: "/images/stealth-fighter-hangar.jpg",
    href: "/news/aerospace-highlights",
  },
  {
    id: "defence-systems",
    title: "Defence systems, protective platforms, and readiness updates",
    category: "DEFENCE",
    date: "FEBRUARY 2026",
    description:
      "Multi-layered tactical air defence architectures, kinetic perimeter shields, and next-generation sovereign interception platforms.",
    image: "/images/defence-systems-radar.jpg",
    href: "/news/defence-systems",
  },
];

export default function NewsInsightsSection() {
  const [activeId, setActiveId] = useState<string>(newsItems[0].id);

  return (
    <section className="relative pt-6 sm:pt-10 pb-8 sm:pb-10 bg-[#02050e] overflow-hidden border-t border-white/10 select-none">
      {/* Background Subtle Gradient & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(14,165,233,0.08)_0%,transparent_65%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main Container Aligned with Navbar ("A" of ANUVYOM to "Contact Anuvyom") */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-2.5 pb-5 sm:pb-7 select-none">
          {/* Clean Modern White Tag */}
          <div className="flex items-center justify-center space-x-3 select-none">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-[0.22em] text-white uppercase">
              THE NEWSROOM
            </span>
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
          </div>

          <div className="w-full flex justify-center py-0.5">
            <svg
              viewBox="0 0 540 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[340px] sm:max-w-[440px] md:max-w-[520px] h-auto drop-shadow-[0_4px_24px_rgba(56,189,248,0.22)]"
              aria-label="NEWS & INSIGHTS"
            >
              <defs>
                {/* Brand Logo Shield Light Radiant Blue Sheen */}
                <linearGradient id="newsLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93d5ff" />
                  <stop offset="30%" stopColor="#5bb4f8" />
                  <stop offset="70%" stopColor="#288ee0" />
                  <stop offset="100%" stopColor="#1a68aa" />
                </linearGradient>

                {/* Titanium White Steel Radiant Gradient */}
                <linearGradient id="newsLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#f1f5f9" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="38"
                textAnchor="middle"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="44"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                <tspan fill="url(#newsLogoShieldBlueSheen)">NEWS </tspan>
                <tspan fill="url(#newsLogoTitaniumSteelSheen)">&amp; </tspan>
                <tspan fill="url(#newsLogoShieldBlueSheen)">INSIGHTS</tspan>
              </text>
            </svg>
          </div>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee] mt-0.5" />
        </div>

        {/* 2-Image Seamless Expanding Accordion Gallery (Balanced Width) */}
        <div className="max-w-4xl xl:max-w-[1120px] mx-auto w-full">
          <div className="flex flex-col md:flex-row gap-0 w-full h-[320px] sm:h-[360px] md:h-[410px] lg:h-[440px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85)] divide-y md:divide-y-0 md:divide-x divide-white/10 transition-all duration-500 bg-[#050914]">
            {newsItems.map((item, idx) => {
              const isActive = activeId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  transition={{
                    layout: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-500 ${
                    isActive
                      ? "flex-[2.8] md:flex-[2.6] shadow-[inset_0_0_40px_rgba(0,0,0,0.4)]"
                      : "flex-[1] opacity-70 hover:opacity-100"
                  }`}
                >
                  {/* Background Image Fill */}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={`object-cover object-center transition-transform duration-700 ${
                      isActive ? "scale-100" : "scale-110 grayscale-[15%]"
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={idx === 0}
                    unoptimized
                  />

                  {/* Subtle Hover / Active Overlay */}
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                      isActive
                        ? "bg-transparent"
                        : "bg-black/35 hover:bg-black/10"
                    }`}
                  />

                  {/* Left Edge Subtle Contrast Gradient */}
                  <div className="absolute inset-y-0 left-0 w-24 sm:w-28 bg-gradient-to-r from-black/70 via-black/25 to-transparent pointer-events-none z-10" />

                  {/* Vertical Category Label at Start of Image (Top-aligned) */}
                  <div className="absolute left-3 sm:left-4 md:left-5 top-5 sm:top-6 z-20 flex flex-col items-center gap-3.5 pointer-events-none select-none">
                    {/* Vertical Category Text */}
                    <div className="flex items-center gap-2.5 [writing-mode:vertical-rl] rotate-180">
                      <span
                        className={`text-base sm:text-lg md:text-xl lg:text-2xl font-mono uppercase tracking-[0.25em] font-extrabold transition-all duration-300 drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] ${
                          isActive
                            ? "text-[#7ec8ff] drop-shadow-[0_0_16px_rgba(126,200,255,0.8)]"
                            : "text-white/75"
                        }`}
                      >
                        {item.category}
                      </span>
                      <span
                        className={`w-8 sm:w-10 h-[2.5px] rounded-full transition-all duration-300 ${
                          isActive
                            ? "bg-[#7ec8ff] shadow-[0_0_10px_#7ec8ff]"
                            : "bg-white/25"
                        }`}
                      />
                    </div>
                  </div>

                  {/* 2-Line Data Overlay inside the Image (Dark Format, Compact Height, Minor Font) */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-x-0 bottom-0 z-20 bg-black/50 backdrop-blur-md border-t border-white/10 px-4 py-2 sm:px-5 sm:py-2.5 pointer-events-none select-none"
                      >
                        <div className="max-w-3xl pr-2">
                          <h3 className="text-xs sm:text-sm font-bold uppercase tracking-tight text-white leading-snug line-clamp-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                            {item.title}
                          </h3>
                          <p className="text-[10px] sm:text-[11px] text-slate-200/90 leading-relaxed font-normal line-clamp-1 sm:line-clamp-2 mt-0.5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
