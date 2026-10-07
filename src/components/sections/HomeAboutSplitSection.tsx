"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HomeAboutSplitSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const capabilities = [
    {
      id: "01",
      tag: "SECTORS",
      value: "04",
      desc: "Aerospace, Defence, Advanced Systems, and Petrochemical.",
      image: "/images/foundation-sectors.jpg",
    },
    {
      id: "02",
      tag: "MODEL",
      value: "B2G",
      desc: "Government, institutional, and strategic partner engagement.",
      image: "/images/foundation-model.jpg",
    },
    {
      id: "03",
      tag: "DIRECTION",
      value: "Long Term",
      desc: "Capability, scale, and execution built to last decades.",
      image: "/images/foundation-direction.jpg",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative pt-8 sm:pt-12 pb-8 sm:pb-10 bg-[#02050e] border-t border-white/[0.08] overflow-hidden select-none"
    >
      {/* Clean Solid Dark Background (Blue Haze Removed) */}
      <div className="absolute inset-0 bg-[#02050e] pointer-events-none z-0" />

      {/* Main Inner Content - Ultra-Wide Container for Increased Box Width */}
      <div className="relative w-full max-w-[1680px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
        <div className="flex flex-col items-start justify-center space-y-8 sm:space-y-12">
          
          {/* ========================================================================= */}
          {/* TOP SECTION: ABOUT US HERO (PERFECTLY CENTER ALIGNED)                     */}
          {/* ========================================================================= */}
          <div className="relative w-full flex items-center justify-center text-center">
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center space-y-3 sm:space-y-4 max-w-4xl mx-auto"
            >
              {/* Top Tag: OUR CAPABILITIES (Centered with Symmetric Lines) */}
              <div className="flex items-center justify-center space-x-3">
                <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-cyan-400/50" />
                <span className="w-2 sm:w-2.5 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="text-xs sm:text-sm font-mono tracking-[0.28em] text-cyan-400 font-bold uppercase">
                  OUR CAPABILITIES
                </span>
                <span className="w-2 sm:w-2.5 h-[2px] bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-cyan-400/50" />
              </div>

              {/* Massive ABOUT US - Centered Typography with Clean Shadow (No Blue Glow) */}
              <div className="text-center select-none pt-1">
                <h2 className="font-oxanium text-5xl sm:text-6xl md:text-7xl lg:text-[82px] font-black tracking-tight uppercase leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
                  <span className="bg-gradient-to-b from-[#5aa9f7] via-[#257dc0] to-[#0f4477] bg-clip-text text-transparent">
                    ABOUT{" "}
                  </span>
                  <span className="bg-gradient-to-b from-white via-[#cbd5e1] to-[#64748b] bg-clip-text text-transparent">
                    US
                  </span>
                </h2>
              </div>

              {/* Subheading (Centered) - Sleek Proportion with Symmetric Glow Line */}
              <div className="flex flex-col items-center text-center space-y-2 w-full">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-oxanium font-bold uppercase tracking-[0.05em] text-white leading-tight text-center">
                  BUILT FOR WHAT THE DEFENCE WORLD NEEDS
                </h3>
                <div className="w-36 sm:w-56 md:w-72 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee]" />
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* CAPABILITY GRID: ULTRA-WIDE & LOW-PROFILE RECTANGULAR BOXES                */}
          {/* ========================================================================= */}
          <div className="relative w-full pt-1 pb-4">
            
            {/* Pure Robot Sitting Directly on the Box's Top Border with Zero Gap */}
            <div className="hidden xl:block absolute left-4 2xl:left-8 top-1 -translate-y-[calc(100%-1px)] pointer-events-none select-none z-20">
              <motion.div
                style={{ transformOrigin: "bottom center" }}
                animate={{
                  rotate: [-0.6, 0.6, -0.6],
                  scale: [1, 1.008, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[340px] 2xl:w-[380px] aspect-[6016/4016]"
              >
                {/* 1. Pure High-Resolution Transparent Robot PNG - Ultra Full HD */}
                <Image
                  src="/images/robot-sentinel.png"
                  alt="Autonomous Defense Sentinel Robot"
                  fill
                  quality={100}
                  unoptimized
                  className="object-contain object-bottom drop-shadow-[0_10px_35px_rgba(0,0,0,0.7)]"
                  priority
                />

                {/* 2. SVG Overlay for Exact Eye Shape Blinking Animation */}
                <svg
                  viewBox="0 0 6016 4016"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  aria-hidden="true"
                >
                  <defs>
                    <filter id="robotEyeGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="30" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Left Eye: Cybernetic Glow Pulse (matches exact eye shape) */}
                  <motion.path
                    d="M 3370 980 L 3480 995 L 3595 1040 L 3705 1085 L 3735 1115 L 3720 1145 L 3675 1175 L 3600 1205 L 3465 1205 L 3405 1160 L 3380 1055 Z"
                    fill="#67e8f9"
                    filter="url(#robotEyeGlow)"
                    animate={{
                      opacity: [0.95, 0.95, 0.95, 0, 1, 0.9, 0, 0.95],
                    }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      times: [0, 0.68, 0.70, 0.72, 0.74, 0.79, 0.81, 0.83],
                      ease: "easeInOut",
                    }}
                  />

                  {/* Left Eye: Eyelid Covering Exactly in Eye Shape on Blink */}
                  <motion.path
                    d="M 3370 980 L 3480 995 L 3595 1040 L 3705 1085 L 3735 1115 L 3720 1145 L 3675 1175 L 3600 1205 L 3465 1205 L 3405 1160 L 3380 1055 Z"
                    fill="#b8bcc4"
                    animate={{
                      opacity: [0, 0, 0, 1, 0, 0, 1, 0],
                    }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      times: [0, 0.68, 0.70, 0.72, 0.74, 0.79, 0.81, 0.83],
                      ease: "easeInOut",
                    }}
                  />

                  {/* Right Eye: Cybernetic Glow Pulse (matches exact eye shape) */}
                  <motion.path
                    d="M 4010 1060 L 3975 1090 L 3940 1120 L 3940 1150 L 3950 1180 L 3960 1210 L 4000 1210 L 4005 1165 L 4015 1090 Z"
                    fill="#67e8f9"
                    filter="url(#robotEyeGlow)"
                    animate={{
                      opacity: [0.95, 0.95, 0.95, 0, 1, 0.9, 0, 0.95],
                    }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      times: [0, 0.68, 0.70, 0.72, 0.74, 0.79, 0.81, 0.83],
                      ease: "easeInOut",
                    }}
                  />

                  {/* Right Eye: Eyelid Covering Exactly in Eye Shape on Blink */}
                  <motion.path
                    d="M 4010 1060 L 3975 1090 L 3940 1120 L 3940 1150 L 3950 1180 L 3960 1210 L 4000 1210 L 4005 1165 L 4015 1090 Z"
                    fill="#b8bcc4"
                    animate={{
                      opacity: [0, 0, 0, 1, 0, 0, 1, 0],
                    }}
                    transition={{
                      duration: 4.6,
                      repeat: Infinity,
                      times: [0, 0.68, 0.70, 0.72, 0.74, 0.79, 0.81, 0.83],
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
            </div>

            {/* Wide Rectangular Box Container - Sleek Low Height & Expansive Width */}
            <div className="relative w-full border border-white/[0.12] bg-[#02050e]/60 backdrop-blur-md overflow-hidden rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              {/* 3 Column Grid with Vertical Dividers */}
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.12]">
                {capabilities.map((item, idx) => {
                  const initialAnim =
                    idx === 0
                      ? { opacity: 0, x: -20, y: 0 }
                      : idx === 2
                      ? { opacity: 0, x: 20, y: 0 }
                      : { opacity: 0, x: 0, y: 15 };

                  const sliderDirectionClass =
                    idx === 0
                      ? "-translate-x-full group-hover:translate-x-0"
                      : idx === 1
                      ? "-translate-y-full group-hover:translate-y-0"
                      : "translate-x-full group-hover:translate-x-0";

                  return (
                    <motion.div
                      key={item.id}
                      initial={initialAnim}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{
                        duration: 0.25,
                        delay: 0,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="relative flex flex-col items-center justify-center text-center px-4 py-4 sm:px-6 sm:py-5 lg:py-6 group overflow-hidden cursor-pointer transition-all duration-300"
                    >
                      {/* Directional White Background Slider: Box 1 (Left), Box 2 (Top), Box 3 (Right) - Slow Velvet Smooth GPU Glide */}
                      <div
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 bg-white ${sliderDirectionClass} transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu will-change-transform z-0`}
                      />

                      {/* Index Stencil / Numeral */}
                      <span className="relative z-10 font-oxanium text-sm sm:text-base font-bold tracking-widest text-cyan-400 group-hover:text-cyan-700 select-none transition-colors duration-700 ease-out mb-1 sm:mb-1.5">
                        {item.id}
                      </span>

                      {/* Main Heading - Slow silky smooth transition to solid black on white background */}
                      <h4 className="relative z-10 font-oxanium text-sm sm:text-base lg:text-lg xl:text-xl font-bold uppercase tracking-wide text-white group-hover:text-slate-950 transition-colors duration-700 ease-out leading-tight w-full px-2 sm:px-4">
                        {item.value} {item.tag} — {item.desc.split(",")[0]}
                      </h4>

                      {/* Monospace Bracketed Subtitle - Slow silky smooth transition to dark slate on white background */}
                      <p className="mt-1.5 sm:mt-2 relative z-10 text-[10px] sm:text-[11px] lg:text-xs font-mono uppercase tracking-[0.14em] text-slate-400 group-hover:text-slate-700 transition-colors duration-700 ease-out leading-relaxed w-full max-w-md lg:max-w-xl px-2">
                        [ {item.desc} ]
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* BOTTOM SECTION: NARRATIVE & LEARN MORE ACTION                             */}
          {/* ========================================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex flex-col items-center text-center space-y-6 pt-2 max-w-3xl mx-auto"
          >
            {/* Narrative 2-Line Text */}
            <p className="text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed font-normal select-none text-center">
              Sky Wardens was established to develop durable industrial capability, the kind that takes years to build and decades to matter.
            </p>

            {/* Learn More Button */}
            <div className="pt-1 flex justify-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white/[0.04] hover:bg-white text-white hover:text-slate-950 border border-white/20 hover:border-white text-xs font-bold tracking-widest uppercase transition-all duration-300 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 group"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-3.5 h-3.5 ml-2 text-slate-300 group-hover:text-slate-950 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
