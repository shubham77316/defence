"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StrategicCtaBannerSection() {
  return (
    <section className="relative w-full bg-[#000208] text-white pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-8 md:pb-10 overflow-hidden border-t border-white/5 select-none">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content Data & CTAs */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left order-2 lg:order-1">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-xs sm:text-[13px] font-medium text-slate-300 tracking-wide">
                Introducing Next-Gen Sovereign Systems
              </span>
            </div>

            {/* Monumental Headline in Signature Radiant Blue & Titanium White Sheen */}
            <div className="w-full py-0.5 select-none">
              <svg
                viewBox="0 0 760 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[620px] h-auto drop-shadow-[0_4px_24px_rgba(56,189,248,0.22)]"
                aria-label="TURN YOUR STRATEGIC VISION INTO MISSION-READY CAPABILITY"
              >
                <defs>
                  {/* Brand Logo Shield Light Radiant Blue Sheen */}
                  <linearGradient id="bannerLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#93d5ff" />
                    <stop offset="30%" stopColor="#5bb4f8" />
                    <stop offset="70%" stopColor="#288ee0" />
                    <stop offset="100%" stopColor="#1a68aa" />
                  </linearGradient>

                  {/* Titanium White Steel Radiant Gradient */}
                  <linearGradient id="bannerLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="35%" stopColor="#f1f5f9" />
                    <stop offset="70%" stopColor="#cbd5e1" />
                    <stop offset="100%" stopColor="#94a3b8" />
                  </linearGradient>
                </defs>

                {/* LINE 1: TURN YOUR STRATEGIC VISION */}
                <text
                  x="0"
                  y="40"
                  fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                  fontSize="40"
                  fontWeight="900"
                  letterSpacing="0.04em"
                >
                  <tspan fill="url(#bannerLogoTitaniumSteelSheen)">TURN </tspan>
                  <tspan fill="url(#bannerLogoShieldBlueSheen)">YOUR </tspan>
                  <tspan fill="url(#bannerLogoTitaniumSteelSheen)">STRATEGIC </tspan>
                  <tspan fill="url(#bannerLogoShieldBlueSheen)">VISION</tspan>
                </text>

                {/* LINE 2: INTO MISSION-READY CAPABILITY */}
                <text
                  x="0"
                  y="92"
                  fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                  fontSize="40"
                  fontWeight="900"
                  letterSpacing="0.04em"
                >
                  <tspan fill="url(#bannerLogoTitaniumSteelSheen)">INTO </tspan>
                  <tspan fill="url(#bannerLogoShieldBlueSheen)">MISSION-READY </tspan>
                  <tspan fill="url(#bannerLogoTitaniumSteelSheen)">CAPABILITY</tspan>
                </text>
              </svg>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-slate-400 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Partner with Sky Wardens to engineer and deploy next-generation autonomous aerospace airframes, multi-domain defence systems, and resilient industrial technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 sm:pt-4">
              {/* Initiate Collaboration Button (Light Logo Blue Radiant Sheen) */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#93d5ff] via-[#5bb4f8] to-[#288ee0] hover:from-[#b6e5ff] hover:via-[#7ec8ff] hover:to-[#3ba1f3] text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_20px_rgba(91,180,248,0.35)] transition-all duration-300 hover:shadow-[0_6px_28px_rgba(147,213,255,0.55)] hover:-translate-y-0.5"
              >
                <span>Initiate Collaboration</span>
                <ArrowRight className="w-4 h-4 text-slate-950 font-bold" />
              </Link>

              {/* Explore Capabilities Button */}
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white text-slate-950 font-bold text-xs sm:text-sm tracking-wide hover:bg-slate-200 shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Capabilities
              </Link>
            </div>

          </div>

          {/* Right: Pure Transparent Robotic Arm Cutout (No Blue Background/Aura) */}
          <div className="lg:col-span-5 flex justify-center items-center relative order-1 lg:order-2">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
              <Image
                src="/images/modular-robotic-arm-transparent.png"
                alt="Sky Wardens Advanced Robotic Manipulator"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain object-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] relative z-10"
                priority
                unoptimized
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
