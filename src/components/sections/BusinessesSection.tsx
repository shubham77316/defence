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
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="30%" stopColor="#1e72aa" />
                <stop offset="70%" stopColor="#0d3f63" />
                <stop offset="100%" stopColor="#092c47" />
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
    },
    {
      id: "advanced-systems",
      number: "03",
      title: "ADVANCED SYSTEMS",
      tagline: "Perimeter & Autonomous Grid",
      desc: "Detection, perimeter security, and autonomous ground systems.",
      linkText: "Explore Advanced Systems",
      bgImage: "/images/systems-card-bg.jpg",
      glowClass: "bg-cyan-500/15",
      accentBorder: "border-cyan-500/20 group-hover:border-cyan-400/40",
      accentText: "text-cyan-400",
      renderLogo: () => (
        <div className="relative flex items-center justify-center py-2">
          {/* Exact Circuit Delta Logo */}
          <svg
            className="w-32 h-32 sm:w-36 sm:h-36 transition-all duration-500 ease-out relative z-10 cursor-pointer"
            viewBox="0 0 240 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="exactSysBlueGrad" x1="120" y1="14" x2="120" y2="220" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="30%" stopColor="#145887" />
                <stop offset="70%" stopColor="#0d3f63" />
                <stop offset="100%" stopColor="#092c47" />
              </linearGradient>
            </defs>

            {/* Outer Triangle Frame */}
            <polygon
              points="120,16 16,220 224,220"
              stroke="url(#exactSysBlueGrad)"
              strokeWidth="12"
              strokeLinejoin="round"
            />

            {/* Main Continuous Circuit Trace */}
            <polyline
              points="72,172 120,72 168,172"
              stroke="url(#exactSysBlueGrad)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="72" cy="172" r="11" fill="url(#exactSysBlueGrad)" />
            <circle cx="168" cy="172" r="11" fill="url(#exactSysBlueGrad)" />

            {/* Inner Chevron A-Frame Arch */}
            <polyline
              points="76,220 120,128 164,220"
              stroke="url(#exactSysBlueGrad)"
              strokeWidth="12"
              strokeLinejoin="round"
            />

            {/* Parallel Inner Circuit Trace with Terminal Node */}
            <line
              x1="136"
              y1="168"
              x2="160"
              y2="216"
              stroke="url(#exactSysBlueGrad)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <circle cx="136" cy="168" r="10.5" fill="url(#exactSysBlueGrad)" />

            {/* Central Solid Delta Triangle Core */}
            <polygon points="120,188 134,216 106,216" fill="url(#exactSysBlueGrad)" />
          </svg>
        </div>
      )
    },
    {
      id: "petrochemical",
      number: "04",
      title: "PETROCHEMICAL",
      tagline: "Engineered High-Performance Lubricants",
      desc: "Industrial lubricants engineered for performance.",
      linkText: "Explore Petrochemical",
      bgImage: "/images/petro-card-bg.jpg",
      glowClass: "bg-orange-500/15",
      accentBorder: "border-orange-500/20 group-hover:border-orange-400/40",
      accentText: "text-orange-400",
      renderLogo: () => (
        <div className="relative flex items-center justify-center py-2">
          {/* Exact Cogwheel + Flame Droplet Logo */}
          <svg
            className="w-32 h-32 sm:w-36 sm:h-36 transition-all duration-500 ease-out relative z-10 cursor-pointer"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="petroFlameGrad" x1="70" y1="26" x2="70" y2="116" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fdba74" />
                <stop offset="0.45" stopColor="#f97316" />
                <stop offset="0.85" stopColor="#ea580c" />
                <stop offset="1" stopColor="#c2410c" />
              </linearGradient>
            </defs>

            {/* Outer Industrial Cogwheel */}
            <g fill="#475569" opacity="0.9">
              <path d="M 64 20 L 76 20 L 78 30 C 84 32 90 35 95 39 L 104 34 L 112 42 L 107 51 C 111 56 114 62 116 68 L 126 70 L 126 82 L 116 84 C 114 90 111 96 107 101 L 112 110 L 104 118 L 95 113 C 90 117 84 120 78 122 L 76 132 L 64 132 L 62 122 C 56 120 50 117 45 113 L 36 118 L 28 110 L 33 101 C 29 96 26 90 24 84 L 14 82 L 14 70 L 24 68 C 26 62 29 56 33 51 L 28 42 L 36 34 L 45 39 C 50 35 56 32 62 30 Z M 70 102 C 84 102 96 90 96 76 C 96 62 84 50 70 50 C 56 50 44 62 44 76 C 44 90 56 102 70 102 Z" />
            </g>

            {/* Inner Organic Flame Droplet */}
            <path
              d="M 70 28 C 70 28 96 62 96 88 C 96 104 84 114 70 114 C 56 114 44 104 44 88 C 44 62 70 28 70 28 Z"
              fill="url(#petroFlameGrad)"
            />

            {/* Inner Droplet Contoured Cutout */}
            <path
              d="M 70 58 C 70 58 84 76 84 88 C 84 96 78 102 70 102 C 62 102 58 96 60 88 C 62 80 70 58 70 58 Z"
              fill="#030611"
              opacity="0.95"
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
          {/* Cyan Badge */}
          <span className="text-xs sm:text-sm font-mono tracking-[0.28em] text-cyan-400 font-bold uppercase">
            OUR BUSINESSES
          </span>

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
                {/* Exact Logo Shield Tactical Royal Blue Static Metallic Gradient */}
                <linearGradient id="busLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5aa9f7" />
                  <stop offset="28%" stopColor="#257dc0" />
                  <stop offset="65%" stopColor="#124b80" />
                  <stop offset="100%" stopColor="#0a2a4e" />
                </linearGradient>

                {/* Exact Logo Fighter Jet Titanium / Ice Steel Static Gradient */}
                <linearGradient id="busLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e2e8f0" />
                  <stop offset="65%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
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

        {/* 4 Interactive 3D Flip Sector Cards (Engineered Precision Glass -> Cinematic Image) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
                      <span className="text-[11px] font-mono tracking-[0.25em] text-cyan-400 uppercase font-semibold">
                        SECTOR {sector.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wider mt-2 font-display">
                        {sector.title}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal mt-2">
                        {sector.desc}
                      </p>
                    </div>

                    {/* Centered Logo Emblem */}
                    <div className="relative z-10 flex items-center justify-center my-auto py-2 transition-transform duration-500 group-hover:scale-105">
                      {sector.renderLogo()}
                    </div>

                    {/* Bottom Explore Link */}
                    <div className="relative z-10 pt-2 flex items-center">
                      <span className="text-xs sm:text-[13px] font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                        {sector.linkText}
                      </span>
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

