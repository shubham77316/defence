"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackgroundAtmosphere from "@/components/sections/HeroBackgroundAtmosphere";

export default function HeroSection() {
  return (
    <section className="relative w-full sm:min-h-screen pt-0 sm:pt-24 lg:pt-28 pb-8 sm:pb-16 lg:pb-20 flex flex-col justify-between sm:justify-end items-start overflow-hidden bg-[#020612]">
      {/* 1. Deep Royal Navy Atmospheric Lighting & Desktop Background Video */}
      <HeroBackgroundAtmosphere />

      {/* 2. Mobile Video in Document Flow (Directly below Navbar, directly above Headline) */}
      <div className="w-full sm:hidden pt-14 pb-2 flex items-center justify-center relative z-10 select-none pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-[185px] xs:h-[210px] w-auto max-w-full object-contain filter contrast-[1.08] brightness-[1.05]"
        >
          <source src="/videos/hero-grenade-hd.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 3. Main Hero Inner Content — Directly follows grenade with a clean, precise small gap */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 z-10 flex flex-col items-start text-left mt-1 sm:mt-0">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left space-y-4 sm:space-y-8 max-w-4xl w-full"
        >

          {/* Monumental Display Headline */}
          <div className="space-y-0.5 sm:space-y-1">
            <h1 className="font-oxanium text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-semibold tracking-wide text-white leading-[1.18] select-none text-left">
              <span className="block text-white">
                ENGINEERING
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#5aa9f7] via-[#93c5fd] to-white drop-shadow-[0_2px_12px_rgba(90,169,247,0.3)]">
                STRATEGIC CAPABILITY
              </span>
              <span className="block text-white">
                FOR THE NEXT ERA
              </span>
            </h1>
          </div>

          {/* Action Group: Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-2.5 sm:gap-3 pt-2 w-full sm:w-auto">
            <Link
              href="/businesses"
              className="group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-[#257dc0] to-[#5aa9f7] hover:from-[#338ad0] hover:to-[#70b9ff] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(90,169,247,0.35)] hover:shadow-[0_0_30px_rgba(90,169,247,0.55)] hover:-translate-y-0.5 rounded-full overflow-hidden text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-1.5">
                <span>Explore Capabilities</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 hover:border-sky-400/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-md hover:-translate-y-0.5 rounded-full text-center"
            >
              <span>Contact Sky Wardens</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
