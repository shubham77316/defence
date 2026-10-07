"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import HeroBackgroundAtmosphere from "@/components/sections/HeroBackgroundAtmosphere";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-16 sm:pb-24 flex items-end justify-start overflow-hidden bg-[#020612]">
      {/* 1. Deep Royal Navy Atmospheric Lighting & Grid Beams */}
      <HeroBackgroundAtmosphere />


      {/* 3. Main Hero Inner Content — Aligned to Left Corner */}
      <div className="relative w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 z-10 flex flex-col items-start text-left">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start text-left space-y-6 sm:space-y-8 max-w-4xl"
        >

          {/* Monumental Display Headline */}
          <div className="space-y-1">
            <h1 className="font-oxanium text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-semibold tracking-wide text-white leading-[1.18] select-none text-left">
              <span className="block text-white">
                ENGINEERING
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-white">
                STRATEGIC CAPABILITY
              </span>
              <span className="block text-white">
                FOR THE NEXT ERA
              </span>
            </h1>
          </div>

          {/* Action Group: Buttons */}
          <div className="flex flex-wrap items-center justify-start gap-3 pt-2">
            <Link
              href="/businesses"
              className="group relative inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-sky-400 to-cyan-500 hover:from-sky-300 hover:to-cyan-400 text-slate-950 font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:shadow-[0_0_30px_rgba(56,189,248,0.55)] hover:-translate-y-0.5 rounded-full overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Explore Capabilities</span>
                <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/20 hover:border-sky-400/50 text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 backdrop-blur-md shadow-md hover:-translate-y-0.5 rounded-full"
            >
              <span>Contact Sky Wardens</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
