"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BusinessesSection() {        
  const [flippedSector, setFlippedSector] = useState<string | null>(null);

  const toggleFlip = (id: string) => {
    setFlippedSector((prev) => (prev === id ? null : id));
  };

  const sectors = [
    {
      id: "aerospace",
      number: "01",
      title: "AEROSPACE",
      tagline: "Autonomous Aerial & Space Systems",
      desc: "UAV platforms and aerial surveillance systems.",
      linkText: "Explore Aerospace",
      bgImage: "/images/aerospace-stealth-hangar.jpg",
      glowClass: "bg-sky-500/15",
      accentBorder: "border-sky-500/20 group-hover:border-sky-400/40",
      accentText: "text-sky-400",
      renderLogo: () => (
        <div className="relative flex items-center justify-center py-2">
          {/* Exact Aerospace Logo */}
          <svg
            className="w-32 h-32 sm:w-36 sm:h-36 transition-all duration-500 ease-out relative z-10 cursor-pointer"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="exactAeroBlueGrad" x1="120" y1="12" x2="120" y2="208" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#a5ddff" />
                <stop offset="30%" stopColor="#60b7ff" />
                <stop offset="70%" stopColor="#2e93e6" />
                <stop offset="100%" stopColor="#1b6fad" />
              </linearGradient>
            </defs>
            
            {/* Chevron A Delta Frame */}
            <path
              d="M 120 12 L 216 155 L 180 136 L 120 56 L 60 136 L 24 155 Z"
              fill="url(#exactAeroBlueGrad)"
            />

            {/* Upper Sweeping Crescent Wave Arch */}
            <path
              d="M 54 178 C 76 148 134 134 175 148 C 145 142 88 152 54 178 Z"
              fill="url(#exactAeroBlueGrad)"
              opacity="0.95"
            />

            {/* Main Lower Sweeping Arch Bridge */}
            <path
              d="M 0 208 C 30 162 90 148 120 148 C 150 148 210 162 240 208 L 214 208 C 188 174 144 162 120 162 C 96 162 52 174 26 208 Z"
              fill="url(#exactAeroBlueGrad)"
            />
          </svg>
        </div>
      )
    },
    {
      id: "defence",
      number: "02",
      title: "DEFENCE",
      tagline: "Tactical & Protective Warfare",
      desc: "Protective gear and tactical equipment for the field.",
      linkText: "Explore Defence",
      bgImage: "/images/defence-card-bg.jpg",
      glowClass: "bg-lime-500/15",
      accentBorder: "border-lime-500/20 group-hover:border-lime-400/40",
      accentText: "text-lime-400",
      renderLogo: () => (
        <div className="relative flex items-center justify-center py-2">
          {/* Exact AD Monogram */}
          <svg
            className="w-32 h-32 sm:w-36 sm:h-36 transition-all duration-500 ease-out relative z-10 cursor-pointer"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="defOliveGrad" x1="25" y1="30" x2="120" y2="110" gradientUnits="userSpaceOnUse">
                <stop stopColor="#a3e635" />
                <stop offset="0.5" stopColor="#65a30d" />
                <stop offset="1" stopColor="#3f6212" />
              </linearGradient>
              <linearGradient id="defBronzeGrad" x1="58" y1="30" x2="112" y2="38" gradientUnits="userSpaceOnUse">
                <stop stopColor="#f97316" />
                <stop offset="0.5" stopColor="#c2410c" />
                <stop offset="1" stopColor="#9a3412" />
              </linearGradient>
            </defs>

            {/* A Frame Structure (Olive Green) */}
            <path
              d="M 52 32 L 20 98 L 34 98 L 46 72 L 66 72 L 74 88 L 88 88 L 62 32 Z M 52 56 L 60 72 L 48 72 Z"
              fill="url(#defOliveGrad)"
            />

            {/* Bronze Top Accent of D */}
            <path
              d="M 58 32 L 94 32 C 108 32 116 38 116 44 L 104 44 C 104 40 98 38 88 38 L 58 38 Z"
              fill="url(#defBronzeGrad)"
            />

            {/* D Outer Loop & Bottom Base Bar */}
            <path
              d="M 98 42 C 114 46 124 58 124 74 C 124 94 108 106 82 106 L 20 106 L 20 98 L 80 98 C 98 98 110 90 110 74 C 110 60 102 50 88 48 Z"
              fill="url(#defOliveGrad)"
            />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section className="relative pt-6 sm:pt-10 pb-12 sm:pb-16 bg-[#010308] overflow-hidden border-t border-white/10">
      {/* Background Ambience Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1)_0%,transparent_65%)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Centered Header matching exact ABOUT US SVG Wordmark Typography */}
        <div className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3 max-w-5xl mx-auto select-none">
          {/* Clean Modern White Tag */}
          <div className="flex items-center justify-center space-x-3 select-none">
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-white/30" />
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="text-xs sm:text-[13px] font-sans font-semibold tracking-[0.22em] text-white uppercase">
              OUR BUSINESSES
            </span>
            <span className="w-1.5 sm:w-2 h-[1.5px] bg-white/60" />
            <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-white/30" />
          </div>

          {/* Monumental Headline matching Sky Wardens Typography */}
          <div className="w-full flex justify-center py-0.5">
            <svg
              viewBox="0 0 780 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[540px] sm:max-w-[660px] md:max-w-[760px] h-auto drop-shadow-[0_4px_24px_rgba(56,189,248,0.25)]"
              aria-label="WE OPERATE WHERE IMPACT MATTERS"
            >
              <defs>
                {/* Brand Logo Shield Light Radiant Blue Sheen */}
                <linearGradient id="busLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#93d5ff" />
                  <stop offset="30%" stopColor="#5bb4f8" />
                  <stop offset="70%" stopColor="#288ee0" />
                  <stop offset="100%" stopColor="#1a68aa" />
                </linearGradient>

                {/* Titanium White Steel Radiant Gradient */}
                <linearGradient id="busLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#f1f5f9" />
                  <stop offset="70%" stopColor="#cbd5e1" />
                  <stop offset="100%" stopColor="#94a3b8" />
                </linearGradient>
              </defs>

              {/* LINE 1: WE OPERATE WHERE */}
              <text
                x="50%"
                y="32"
                textAnchor="middle"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="36"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                <tspan fill="url(#busLogoTitaniumSteelSheen)">WE </tspan>
                <tspan fill="url(#busLogoShieldBlueSheen)">OPERATE </tspan>
                <tspan fill="url(#busLogoTitaniumSteelSheen)">WHERE</tspan>
              </text>

              {/* LINE 2: IMPACT MATTERS */}
              <text
                x="50%"
                y="74"
                textAnchor="middle"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="36"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                <tspan fill="url(#busLogoShieldBlueSheen)">IMPACT </tspan>
                <tspan fill="url(#busLogoTitaniumSteelSheen)">MATTERS</tspan>
              </text>
            </svg>
          </div>

          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl">
            Sky Wardens operates in sectors where the stakes are too high for anything less than full commitment.
          </p>
        </div>

        {/* Interactive 3D Flip Sector Cards (Aerospace & Defence) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {sectors.map((sector) => {
            const isFlipped = flippedSector === sector.id;

            return (
              <div
                key={sector.id}
                className="group [perspective:1600px] h-[480px] sm:h-[500px] cursor-pointer select-none"
                onClick={() => toggleFlip(sector.id)}
              >
                {/* 3D Flipping Card Container (Engineered Book Page Rotation) */}
                <div
                  className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                  }`}
                >
                  {/* ==================================================== */}
                  {/* FRONT FACE: DATA-RICH TACTICAL CARD (MATCHING REF)   */}
                  {/* ==================================================== */}
                  <div className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)] bg-[#040814] border border-white/10 ${sector.accentBorder} shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex flex-col justify-between p-6 sm:p-7 transition-all duration-500`}>
                    
                    {/* Top Sector Info */}
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider font-display">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal mt-2">
                        {sector.desc}
                      </p>
                    </div>

                    {/* Centered Logo Emblem */}
                    <div className="relative z-10 flex items-center justify-center my-auto py-4 transition-transform duration-500 group-hover:scale-105">
                      {sector.renderLogo()}
                    </div>
                  </div>

                  {/* ==================================================== */}
                  {/* BACK FACE: CLEAN CRISP CINEMATIC IMAGE                */}
                  {/* ==================================================== */}
                  <div className={`absolute inset-0 w-full h-full rounded-2xl overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#040814] border ${sector.accentBorder} shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-500`}>
                    {sector.bgImage && (
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={sector.bgImage}
                          alt={`${sector.title} backdrop`}
                          fill
                          priority
                          className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

