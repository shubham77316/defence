"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  showSectorsList?: boolean;
}

export function SkyWardensWordmarkSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 310 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto transition-all duration-300 ${className}`}
      aria-label="SKY WARDENS"
    >
      <defs>
        {/* Exact Logo Shield Tactical Royal Blue Static Metallic Gradient */}
        <linearGradient id="logoNavShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5aa9f7" />
          <stop offset="28%" stopColor="#257dc0" />
          <stop offset="65%" stopColor="#124b80" />
          <stop offset="100%" stopColor="#0a2a4e" />
        </linearGradient>

        {/* Exact Logo Fighter Jet Titanium / Ice Steel Static Gradient */}
        <linearGradient id="logoNavTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="30%" stopColor="#e2e8f0" />
          <stop offset="65%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#64748b" />
        </linearGradient>
      </defs>

      {/* SKY - Tactical Royal Blue Gradient */}
      <text
        x="0"
        y="23"
        fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
        fontSize="26"
        fontWeight="900"
        letterSpacing="0.12em"
        fill="url(#logoNavShieldBlueSheen)"
      >
        SKY
      </text>

      {/* WARDENS - Titanium Chrome / Steel Gradient */}
      <text
        x="80"
        y="23"
        fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
        fontSize="26"
        fontWeight="900"
        letterSpacing="0.12em"
        fill="url(#logoNavTitaniumSteelSheen)"
      >
        WARDENS
      </text>
    </svg>
  );
}

export function SkyWardensShieldEmblem({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full object-contain ${className}`}
    >
      {/* 1. Tactical Shield Outline - Exact Deep Navy Blue */}
      <path
        d="M 80 12 L 32 26 L 32 78 C 32 112 80 138 80 138 C 80 138 128 112 128 78 L 128 26 Z"
        stroke="#0e3d6e"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 2. Contrails / Thruster Speed Streaks */}
      <g stroke="#0e3d6e" strokeWidth="3.5" strokeLinecap="round">
        <line x1="48" y1="110" x2="30" y2="132" />
        <line x1="56" y1="116" x2="38" y2="138" />
        <line x1="64" y1="122" x2="48" y2="142" />
      </g>

      {/* 3. Supersonic Fighter Jet Body */}
      {/* Base Silhouette */}
      <path
        d="M 132 16 L 114 44 L 104 42 L 104 52 L 38 58 L 56 84 L 44 102 L 62 94 L 70 102 L 86 84 L 94 108 L 100 60 L 110 52 Z"
        fill="#124b80"
      />

      {/* Top Facet Highlight */}
      <path
        d="M 132 16 L 104 42 L 44 102 L 62 94 L 70 102 L 86 84 L 110 52 Z"
        fill="#1a5b98"
      />

      {/* Cockpit Canopy (White Oval) */}
      <ellipse
        cx="118"
        cy="31"
        rx="6.5"
        ry="3"
        transform="rotate(-48 118 31)"
        fill="#ffffff"
      />

      {/* Wing Hardpoint Circles */}
      <circle cx="52" cy="68" r="3.2" fill="#ffffff" />
      <circle cx="52" cy="68" r="1.3" fill="#0e3d6e" />

      <circle cx="78" cy="94" r="3.2" fill="#ffffff" />
      <circle cx="78" cy="94" r="1.3" fill="#0e3d6e" />
    </svg>
  );
}

export const AnuvyomWordmarkSvg = SkyWardensWordmarkSvg;

export default function Logo({
  className = "",
  size = "md",
  showTagline = false,
  showSectorsList = false,
}: LogoProps) {
  const sizeMap = {
    sm: { imgWidth: 32, imgHeight: 32, wordmarkClass: "h-3.5 sm:h-4.5 md:h-5.5", subText: "text-[9px] sm:text-[10px]" },
    md: { imgWidth: 44, imgHeight: 44, wordmarkClass: "h-4 sm:h-6 md:h-7.5 lg:h-8", subText: "text-[10px] sm:text-xs" },
    lg: { imgWidth: 68, imgHeight: 68, wordmarkClass: "h-6 sm:h-8 md:h-9 lg:h-10", subText: "text-sm" },
    xl: { imgWidth: 88, imgHeight: 88, wordmarkClass: "h-8 sm:h-11 md:h-12 lg:h-14", subText: "text-base" },
  };

  const currentSize = sizeMap[size];

  return (
    <Link href="/" className={`inline-flex items-center gap-2 sm:gap-3 group select-none min-w-0 ${className}`}>
      {/* Left-Side Logo Emblem (100% Exact User-Uploaded Original Design - Refined) */}
      <div className="relative flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src="/images/skywardens-logo.png"
          alt="Sky Wardens Logo"
          width={currentSize.imgWidth}
          height={currentSize.imgHeight}
          className="object-contain w-auto h-7 sm:h-9 md:h-11 drop-shadow-[0_4px_16px_rgba(18,75,128,0.4)]"
          priority
          unoptimized
        />
      </div>

      {/* Right-Side Column: Sky Wardens Wordmark on top + Sectors list */}
      <div className="flex flex-col items-start justify-center min-w-0">
        <div className="flex items-center text-white group-hover:text-slate-100 transition-colors duration-200">
          <SkyWardensWordmarkSvg className={currentSize.wordmarkClass} />
        </div>

        {/* 4 Sectors Horizontal Format starting directly from SKY WARDENS */}
        {showSectorsList && (
          <div className="flex items-center flex-wrap gap-x-1 sm:gap-x-2 gap-y-0.5 mt-0.5 sm:mt-1 select-none text-[8px] xs:text-[9.5px] sm:text-[11px] md:text-[11.5px] font-semibold text-slate-300 tracking-wider">
            <span className="hover:text-cyan-300 transition-colors whitespace-nowrap">Aerospace</span>
            <span className="text-white/30 font-normal px-0.5">/</span>
            <span className="hover:text-cyan-300 transition-colors whitespace-nowrap">Defence</span>
            <span className="text-white/30 font-normal px-0.5">/</span>
            <span className="hover:text-cyan-300 transition-colors whitespace-nowrap">Advanced Systems</span>
            <span className="text-white/30 font-normal px-0.5">/</span>
            <span className="hover:text-cyan-300 transition-colors whitespace-nowrap">Petrochemical</span>
          </div>
        )}

        {showTagline && (
          <span className={`text-slate-400 font-mono tracking-[0.18em] uppercase ${currentSize.subText} mt-1.5`}>
            DEFENCE &bull; AEROSPACE &bull; ADVANCED SYSTEMS
          </span>
        )}
      </div>
    </Link>
  );
}
