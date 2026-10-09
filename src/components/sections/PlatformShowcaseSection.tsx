"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlatformShowcaseSection() {
  return (
    <section className="relative w-full pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[#020409] overflow-hidden flex flex-col items-center justify-center border-t border-white/10">
      {/* Subtle, natural vignette without artificial streaks */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(15,23,42,0.6)_0%,transparent_80%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center space-y-5 sm:space-y-6 z-10">
        
        {/* ==================================================== */}
        {/* CENTERED HEADER DIRECTLY ABOVE MISSILE               */}
        {/* ==================================================== */}
        <div className="flex flex-col items-center text-center space-y-2 sm:space-y-2.5 max-w-5xl mx-auto select-none">
          {/* Clean Modern White Tag */}
          <div className="flex items-center justify-center space-x-3 select-none">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-[0.22em] text-white uppercase">
              FEATURED PLATFORM
            </span>
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Monumental Headline matching Sky Wardens Typography (Enlarged) */}
          <div className="w-full flex justify-center py-1">
            <svg
              viewBox="0 0 980 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[700px] sm:max-w-[860px] md:max-w-[980px] lg:max-w-[1080px] h-auto drop-shadow-[0_4px_28px_rgba(56,189,248,0.28)]"
              aria-label="A GLIMPSE OF WHAT WE BUILD"
            >
              <defs>
                {/* Brand Logo Shield Light Radiant Blue Sheen */}
                <linearGradient id="glimpseLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93d5ff" />
                  <stop offset="30%" stopColor="#5bb4f8" />
                  <stop offset="70%" stopColor="#288ee0" />
                  <stop offset="100%" stopColor="#1a68aa" />
                </linearGradient>

                {/* Titanium White Steel Radiant Gradient */}
                <linearGradient id="glimpseLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#f1f5f9" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="48"
                textAnchor="middle"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="54"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                <tspan fill="url(#glimpseLogoShieldBlueSheen)">A </tspan>
                <tspan fill="url(#glimpseLogoTitaniumSteelSheen)">GLIMPSE </tspan>
                <tspan fill="url(#glimpseLogoShieldBlueSheen)">OF </tspan>
                <tspan fill="url(#glimpseLogoTitaniumSteelSheen)">WHAT WE BUILD</tspan>
              </text>
            </svg>
          </div>

          {/* Subtitle matching exact screenshot */}
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl">
            The details are classified, the capability is not.
          </p>
        </div>

        {/* ==================================================== */}
        {/* PLATFORM SHOWCASE VISUAL (MISSILE)                   */}
        {/* ==================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          animate={{
            y: [-6, 6, -6],
          }}
          // @ts-expect-error framer-motion transition prop
          transition={{
            y: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative w-full flex items-center justify-center pt-0"
        >
          <Image
            src="/images/platform-showcase-missile.png"
            alt="Sky Wardens Hypersonic Platform"
            width={1200}
            height={480}
            className="w-full max-w-[1050px] h-auto object-contain transition-transform duration-500 hover:scale-[1.02] filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
            priority
            unoptimized
          />
        </motion.div>
      </div>
    </section>
  );
}
