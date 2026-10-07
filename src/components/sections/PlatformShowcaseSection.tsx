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
          {/* Cyan Badge */}
          <span className="text-xs sm:text-sm font-mono tracking-[0.28em] text-cyan-400 font-bold uppercase">
            FEATURED PLATFORM
          </span>

          {/* Monumental Headline matching Sky Wardens Typography */}
          <div className="w-full flex justify-center py-0.5">
            <svg
              viewBox="0 0 920 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[620px] sm:max-w-[760px] md:max-w-[860px] lg:max-w-[920px] h-auto drop-shadow-[0_4px_24px_rgba(56,189,248,0.25)]"
              aria-label="A GLIMPSE OF WHAT WE BUILD"
            >
              <defs>
                {/* Exact Logo Shield Tactical Royal Blue Static Metallic Gradient */}
                <linearGradient id="glimpseLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5aa9f7" />
                  <stop offset="28%" stopColor="#257dc0" />
                  <stop offset="65%" stopColor="#124b80" />
                  <stop offset="100%" stopColor="#0a2a4e" />
                </linearGradient>

                {/* Exact Logo Fighter Jet Titanium / Ice Steel Static Gradient */}
                <linearGradient id="glimpseLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e2e8f0" />
                  <stop offset="65%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
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
