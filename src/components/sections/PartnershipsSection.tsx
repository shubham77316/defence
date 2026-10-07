"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// --- High-Fidelity Vector Insignia & Partner Brand Logos ---

// 1. CSIR-NAL (National Aerospace Laboratories)
function LogoCsirNal() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-24 h-12 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 120 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Cyan Aircraft Tail Fin Contour */}
          <path
            d="M 28 44 L 56 6 L 68 6 L 62 44 Z"
            stroke="#0ea5e9"
            strokeWidth="3.2"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Inner Particle Dot Constellation */}
          <circle cx="50" cy="24" r="2" fill="#38bdf8" />
          <circle cx="45" cy="30" r="1.8" fill="#38bdf8" />
          <circle cx="53" cy="32" r="1.8" fill="#38bdf8" />
          <circle cx="48" cy="36" r="2" fill="#38bdf8" />
          <circle cx="55" cy="26" r="1.6" fill="#38bdf8" />
          <circle cx="43" cy="22" r="1.6" fill="#38bdf8" />
          <circle cx="56" cy="38" r="1.5" fill="#38bdf8" />
          {/* CSIR-NAL Wordmark */}
          <text x="60" y="50" fill="#94a3b8" fontSize="10" fontFamily="monospace" fontWeight="bold" letterSpacing="0.1em" textAnchor="middle">
            CSIR-NAL
          </text>
        </svg>
      </div>
    </div>
  );
}

// 2. DRDO Emblem
function LogoDrdo() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Circular Outer Blue Shield */}
          <circle cx="32" cy="32" r="29" fill="#003366" stroke="#38bdf8" strokeWidth="2.2" />
          {/* Outer Ring Dashes */}
          <circle cx="32" cy="32" r="25" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 2" />
          {/* Crossed Arrows / Swords */}
          <line x1="16" y1="46" x2="48" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          <line x1="48" y1="46" x2="16" y2="18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          {/* Inner Tricolor Shield Core */}
          <circle cx="32" cy="32" r="10" fill="#dc2626" stroke="#fbbf24" strokeWidth="1.2" />
          <path d="M 28 32 L 32 24 L 36 32 Z" fill="#fbbf24" />
          {/* DRDO Text Ring Banner */}
          <text x="32" y="56" fill="#ffffff" fontSize="6.5" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.12em" textAnchor="middle">
            DRDO
          </text>
        </svg>
      </div>
    </div>
  );
}

// 3. Indian Navy / Tri-Services Emblem
function LogoNavyServices() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Outer Black Crest with Gold Border */}
          <circle cx="32" cy="32" r="28" fill="#080c14" stroke="#eab308" strokeWidth="2" />
          {/* Golden Anchor */}
          <path
            d="M 32 14 L 32 46 M 22 36 C 22 46 42 46 42 36 M 24 22 L 40 22"
            stroke="#facc15"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="32" cy="18" r="3" stroke="#facc15" strokeWidth="1.8" />
          {/* Crossed Golden Wings */}
          <path d="M 14 26 Q 24 22 32 30 Q 40 22 50 26" stroke="#facc15" strokeWidth="1.8" fill="none" />
          {/* Bottom Motto Ribbon */}
          <path d="M 18 50 Q 32 54 46 50" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// 4. Indian Air Force Crest
function LogoIaf() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Golden Ashoka Lion Top */}
          <path d="M 30 8 L 34 8 L 33 13 L 31 13 Z" fill="#fbbf24" />
          {/* Soaring Himalayan Eagle with Spread Wings */}
          <path
            d="M 32 18 C 22 14 10 22 8 28 C 16 26 24 26 32 32 C 40 26 48 26 56 28 C 54 22 42 14 32 18 Z"
            fill="#38bdf8"
            stroke="#e0f2fe"
            strokeWidth="1"
          />
          {/* Inner IAF Roundel (Saffron-White-Green) */}
          <circle cx="32" cy="40" r="14" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="32" cy="40" r="9" fill="#ffffff" />
          <circle cx="32" cy="40" r="4.5" fill="#16a34a" />
          {/* Golden Bottom Wreath Banner */}
          <path d="M 16 48 Q 32 58 48 48" stroke="#fbbf24" strokeWidth="2" fill="none" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}

// 5. Indian Army Insignia
function LogoIndianArmy() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-14 h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Lion Capital of Ashoka Emblem (Gold) */}
          <path
            d="M 28 8 L 36 8 L 35 18 L 29 18 Z M 25 12 L 39 12 M 26 18 L 38 18 L 36 24 L 28 24 Z"
            fill="#facc15"
            stroke="#eab308"
            strokeWidth="0.8"
          />
          <circle cx="32" cy="22" r="2" fill="#1e3a8a" />
          {/* Crossed Scimitars / Cavalry Swords */}
          <line x1="12" y1="52" x2="52" y2="24" stroke="#facc15" strokeWidth="2.8" strokeLinecap="round" />
          <line x1="52" y1="52" x2="12" y2="24" stroke="#facc15" strokeWidth="2.8" strokeLinecap="round" />
          {/* Sword Hilts and Guards */}
          <circle cx="14" cy="50" r="2.5" fill="#ca8a04" />
          <circle cx="50" cy="50" r="2.5" fill="#ca8a04" />
          <path d="M 10 46 L 18 54" stroke="#eab308" strokeWidth="2" />
          <path d="M 54 46 L 46 54" stroke="#eab308" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}

// 6. ISRO (Indian Space Research Organisation)
function LogoIsro() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer">
      <div className="relative w-20 h-14 flex items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        <svg viewBox="0 0 100 54" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Orange Rocket Satellite Arrow Core */}
          <path
            d="M 50 4 L 46 28 L 50 24 L 54 28 Z"
            fill="#f97316"
          />
          {/* Left/Right Satellite Solar Array Panels (Cyan/Sky) */}
          <line x1="32" y1="20" x2="68" y2="20" stroke="#38bdf8" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="50" y1="24" x2="50" y2="40" stroke="#f97316" strokeWidth="2.4" strokeLinecap="round" />
          {/* Devanagari इसरो + ISRO Text */}
          <text x="32" y="44" fill="#f97316" fontSize="11" fontFamily="sans-serif" fontWeight="bold">
            इसरो
          </text>
          <text x="64" y="44" fill="#0284c7" fontSize="11" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.05em">
            isro
          </text>
        </svg>
      </div>
    </div>
  );
}

// --- Row 2: Industrial & Technology Partner Logos ---

// 7. Airblades
function LogoAirblades() {
  return (
    <div className="flex flex-col items-center justify-center group/item cursor-pointer px-6 flex-shrink-0">
      <div className="relative h-12 flex flex-col items-center justify-center transition-transform duration-300 group-hover/item:scale-105">
        {/* 3-Blade Propeller Monogram */}
        <svg viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-7">
          <circle cx="40" cy="16" r="3" fill="#ffffff" />
          <path d="M 40 13 Q 40 2 46 4 Q 44 12 40 14" fill="#ffffff" />
          <path d="M 37 18 Q 26 24 28 29 Q 36 24 38 18" fill="#ffffff" />
          <path d="M 43 18 Q 54 24 52 29 Q 44 24 42 18" fill="#ffffff" />
        </svg>
        <span className="text-sm font-black italic tracking-wider text-white uppercase font-sans">
          Airblades
        </span>
        <span className="text-[7.5px] font-mono tracking-widest text-slate-400 uppercase">
          Build to Last. Designed to Perform.
        </span>
      </div>
    </div>
  );
}

// 8. AnduraX
function LogoAndurax() {
  return (
    <div className="flex items-center gap-2.5 group/item cursor-pointer px-6 flex-shrink-0">
      <div className="relative flex items-center gap-2.5 transition-transform duration-300 group-hover/item:scale-105">
        {/* Stealth Delta Wing Origami Vector */}
        <svg viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
          <polygon points="4,22 28,6 56,18 42,28 28,20" fill="#ffffff" opacity="0.9" />
          <polygon points="28,20 42,28 34,34 16,28" fill="#94a3b8" />
        </svg>
        <span className="text-base sm:text-lg font-bold tracking-tight text-white font-sans">
          AnduraX
        </span>
      </div>
    </div>
  );
}

// 9. BHARAT FORGE | KALYANI
function LogoBharatForge() {
  return (
    <div className="flex items-center gap-3.5 group/item cursor-pointer px-6 flex-shrink-0">
      <div className="relative flex items-center gap-3.5 transition-transform duration-300 group-hover/item:scale-105">
        <span className="text-xs sm:text-sm font-black tracking-[0.16em] uppercase text-white font-sans">
          BHARAT FORGE
        </span>
        <div className="h-5 w-[1px] bg-slate-700" />
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
            <circle cx="16" cy="16" r="14" stroke="#ffffff" strokeWidth="2" />
            <path d="M 12 10 L 20 16 L 12 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[6px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
            KALYANI
          </span>
        </div>
      </div>
    </div>
  );
}

// 10. CENTUM T&S
function LogoCentum() {
  return (
    <div className="flex items-center gap-2.5 group/item cursor-pointer px-6 flex-shrink-0">
      <div className="relative flex items-center gap-2.5 transition-transform duration-300 group-hover/item:scale-105">
        {/* Double Concentric Cyber Orbit Ring */}
        <div className="w-7 h-7 rounded-full border-2 border-cyan-400 flex items-center justify-center">
          <div className="w-3.5 h-3.5 rounded-full border border-sky-300 bg-sky-500/20" />
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-black tracking-wider uppercase text-cyan-200 font-sans leading-none">
            CENTUM
          </span>
          <span className="text-[9px] font-mono tracking-[0.25em] text-cyan-400/90 uppercase mt-0.5 font-bold">
            T &amp; S
          </span>
        </div>
      </div>
    </div>
  );
}

// --- Row 3: 6 Detailed Institutional Cards (Image 1 Grid) ---

function EmblemIA() {
  return (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Ashoka Lion Capital (Gold) */}
        <path
          d="M 44 10 L 56 10 L 55 24 L 45 24 Z M 40 16 L 60 16 M 42 24 L 58 24 L 55 32 L 45 32 Z"
          fill="#facc15"
          stroke="#ca8a04"
          strokeWidth="1"
        />
        {/* Ashoka Chakra Wheel */}
        <circle cx="50" cy="28" r="3" fill="#1e3a8a" stroke="#facc15" strokeWidth="0.8" />
        {/* Crossed Cavalry Scimitars / Swords */}
        <line x1="20" y1="80" x2="80" y2="38" stroke="#facc15" strokeWidth="4.2" strokeLinecap="round" />
        <line x1="80" y1="80" x2="20" y2="38" stroke="#facc15" strokeWidth="4.2" strokeLinecap="round" />
        {/* Golden Hilts & Guards */}
        <circle cx="22" cy="78" r="4" fill="#ca8a04" stroke="#facc15" strokeWidth="1.2" />
        <circle cx="78" cy="78" r="4" fill="#ca8a04" stroke="#facc15" strokeWidth="1.2" />
        <path d="M 16 72 L 28 84" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
        <path d="M 84 72 L 72 84" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function EmblemDRDO() {
  return (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Main Blue Outer Roundel */}
        <circle cx="50" cy="50" r="44" fill="#003b7a" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="50" cy="50" r="38" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
        {/* Crossed Missiles/Arrows */}
        <line x1="24" y1="72" x2="76" y2="28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        <line x1="76" y1="72" x2="24" y2="28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        {/* Center Target Core */}
        <circle cx="50" cy="50" r="16" fill="#dc2626" stroke="#fbbf24" strokeWidth="2" />
        <path d="M 44 50 L 50 38 L 56 50 Z" fill="#fbbf24" />
        {/* Top/Bottom Text Arc */}
        <text x="50" y="24" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.2em" textAnchor="middle">
          D R D O
        </text>
        <text x="50" y="86" fill="#ffffff" fontSize="9" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.2em" textAnchor="middle">
          D R D O
        </text>
      </svg>
    </div>
  );
}

function EmblemIAF() {
  return (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Ashoka Lion Top */}
        <path d="M 47 12 L 53 12 L 52 20 L 48 20 Z" fill="#fbbf24" />
        {/* Soaring Golden Himalayan Eagle */}
        <path
          d="M 50 26 C 34 20 16 32 12 40 C 24 38 36 38 50 48 C 64 38 76 38 88 40 C 84 32 66 20 50 26 Z"
          fill="#38bdf8"
          stroke="#facc15"
          strokeWidth="1.8"
        />
        {/* Inner IAF Tricolor Roundel (Saffron-White-Green) */}
        <circle cx="50" cy="58" r="20" fill="#1e3a8a" stroke="#fbbf24" strokeWidth="2.2" />
        <circle cx="50" cy="58" r="13" fill="#ffffff" />
        <circle cx="50" cy="58" r="6.5" fill="#16a34a" />
        {/* Golden Bottom Wreath Ribbon */}
        <path d="M 26 70 Q 50 86 74 70" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function EmblemCSIRNAL() {
  return (
    <div className="relative w-24 h-20 sm:w-32 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Aerodynamic Aircraft Vertical Tail Fin Contour */}
        <path
          d="M 28 62 L 72 10 L 88 10 L 80 62 Z"
          stroke="#0ea5e9"
          strokeWidth="4"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Industrial Precision Gear Vector */}
        <g transform="translate(68, 40) scale(0.65)" stroke="#0ea5e9" strokeWidth="2.5" fill="none">
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="6" fill="#0ea5e9" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1="20"
              y1="4"
              x2="20"
              y2="9"
              transform={`rotate(${angle} 20 20)`}
              strokeLinecap="round"
            />
          ))}
        </g>
        {/* CSIR-NAL Wordmark */}
        <text x="60" y="74" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.12em" textAnchor="middle">
          CSIR-NAL
        </text>
      </svg>
    </div>
  );
}

function EmblemIDS() {
  return (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Outer Circular Shield (Dark Maroon/Navy with Gold Trim) */}
        <circle cx="50" cy="50" r="44" fill="#080c14" stroke="#eab308" strokeWidth="3" />
        <circle cx="50" cy="50" r="37" fill="#7f1d1d" stroke="#facc15" strokeWidth="1.2" />
        
        {/* Tri-Services Insignia: Anchor + Swords + Eagle Wings */}
        <path
          d="M 50 24 L 50 68 M 36 54 C 36 68 64 68 64 54 M 38 36 L 62 36"
          stroke="#facc15"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="30" r="4" stroke="#facc15" strokeWidth="2.2" />
        
        {/* Crossed Swords */}
        <line x1="28" y1="64" x2="72" y2="34" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="72" y1="64" x2="28" y2="34" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" />

        {/* Outer Motto Ribbons */}
        <path d="M 22 22 Q 50 14 78 22" stroke="#dc2626" strokeWidth="2" fill="none" />
        <text x="50" y="19" fill="#fef08a" fontSize="5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.08em" textAnchor="middle">
          ALLIED WITH THE FUTURE
        </text>
        <path d="M 22 80 Q 50 88 78 80" stroke="#dc2626" strokeWidth="2" fill="none" />
        <text x="50" y="85" fill="#fef08a" fontSize="5" fontFamily="sans-serif" fontWeight="bold" letterSpacing="0.08em" textAnchor="middle">
          VICTORY THROUGH JOINTNESS
        </text>
      </svg>
    </div>
  );
}

function EmblemISRO() {
  return (
    <div className="relative w-24 h-20 sm:w-32 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Orange Rocket Satellite Arrow Core */}
        <path d="M 60 4 L 55 36 L 60 31 L 65 36 Z" fill="#f97316" />
        {/* Left/Right Solar Panel Array Wings (Cyan/Sky) */}
        <line x1="38" y1="24" x2="82" y2="24" stroke="#38bdf8" strokeWidth="3.2" strokeLinecap="round" />
        <line x1="60" y1="31" x2="60" y2="52" stroke="#f97316" strokeWidth="3.2" strokeLinecap="round" />
        {/* Devanagari इसरो + ISRO Typography */}
        <text x="36" y="58" fill="#f97316" fontSize="15" fontFamily="sans-serif" fontWeight="bold">
          इसरो
        </text>
        <text x="80" y="58" fill="#0284c7" fontSize="15" fontFamily="sans-serif" fontWeight="900" letterSpacing="0.05em">
          isro
        </text>
      </svg>
    </div>
  );
}

function EmblemCSIRCSIO() {
  return (
    <div className="relative w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28 h-20 sm:w-32 sm:h-24 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
        {/* Industrial Gear Outer Ring */}
        <circle cx="70" cy="42" r="30" stroke="#0ea5e9" strokeWidth="3.5" fill="none" />
        <circle cx="70" cy="42" r="22" stroke="#0ea5e9" strokeWidth="2" fill="none" />
        {/* Gear Teeth */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1="70"
            y1="10"
            x2="70"
            y2="16"
            transform={`rotate(${angle} 70 42)`}
            stroke="#0ea5e9"
            strokeWidth="4"
            strokeLinecap="round"
          />
        ))}
        {/* Inner Scientific Instrument Emblem */}
        <circle cx="70" cy="42" r="14" fill="#0c4a6e" stroke="#38bdf8" strokeWidth="1.5" />
        {/* Stylised 'C' monogram */}
        <path d="M 78 34 C 72 28 62 30 60 42 C 62 54 72 56 78 50" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* CSIR-CSIO Text */}
        <text x="70" y="86" fill="#38bdf8" fontSize="13" fontFamily="monospace" fontWeight="bold" letterSpacing="0.14em" textAnchor="middle">
          CSIR-CSIO
        </text>
      </svg>
    </div>
  );
}

function EmblemAirblades() {
  return (
    <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-10 mb-1">
        <circle cx="50" cy="18" r="4" fill="#ffffff" />
        <path d="M 50 14 Q 50 0 58 3 Q 55 13 50 15" fill="#ffffff" />
        <path d="M 46 22 Q 32 30 35 36 Q 44 30 47 22" fill="#ffffff" />
        <path d="M 54 22 Q 68 30 65 36 Q 56 30 53 22" fill="#ffffff" />
      </svg>
      <span className="text-base sm:text-lg font-black italic tracking-wider text-white uppercase font-sans">
        Airblades
      </span>
      <span className="text-[7px] font-mono tracking-[0.16em] text-slate-400 uppercase mt-0.5 text-center">
        Build to Last, Designed to Perform
      </span>
    </div>
  );
}

function EmblemAndurax() {
  return (
    <div className="flex items-center justify-center gap-2.5 transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 h-9">
        <polygon points="6,28 36,8 72,22 54,36 36,26" fill="#ffffff" opacity="0.9" />
        <polygon points="36,26 54,36 44,44 22,36" fill="#94a3b8" />
      </svg>
      <span className="text-xl sm:text-2xl font-bold tracking-tight text-white font-sans">
        AnduraX
      </span>
    </div>
  );
}

function EmblemBharatForge() {
  return (
    <div className="flex items-center justify-center gap-3 transition-transform duration-300 group-hover:scale-105">
      <span className="text-base sm:text-lg font-black tracking-[0.08em] uppercase text-white font-sans text-center">
        BHARAT FORGE
      </span>
      <div className="h-8 w-[1.5px] bg-slate-600" />
      <div className="flex flex-col items-center">
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-7 h-7">
          <circle cx="20" cy="20" r="17" stroke="#ffffff" strokeWidth="2.5" />
          <path d="M 14 12 L 26 20 L 14 28" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-[7px] font-mono tracking-[0.2em] text-slate-400 uppercase mt-0.5 font-bold">
          KALYANI
        </span>
      </div>
    </div>
  );
}

function EmblemCentum() {
  return (
    <div className="flex items-center justify-center gap-2.5 transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="25" cy="25" r="22" stroke="#22d3ee" strokeWidth="2.5" />
        <circle cx="25" cy="25" r="14" stroke="#0ea5e9" strokeWidth="2" />
        <path d="M 32 17 C 26 10 16 14 14 25 C 16 36 26 40 32 33" stroke="#22d3ee" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-sans leading-none">
          CENTUM
        </span>
        <span className="text-xs font-mono tracking-[0.25em] text-cyan-400 uppercase mt-0.5 font-bold">
          T&amp;S
        </span>
      </div>
    </div>
  );
}

function EmblemPagariya() {
  return (
    <div className="flex items-center justify-center gap-2.5 transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
        <path d="M 22 2 L 28 16 L 42 22 L 28 28 L 22 42 L 16 28 L 2 22 L 16 16 Z" fill="#ffffff" opacity="0.9" />
        <circle cx="22" cy="22" r="5" fill="#060a14" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-serif leading-none">
          PAGARIYA
        </span>
        <span className="text-sm font-bold tracking-[0.16em] text-slate-300 uppercase font-serif">
          GROUP
        </span>
      </div>
    </div>
  );
}

function EmblemPSGL() {
  return (
    <div className="flex items-center justify-center gap-2.5 transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-13">
        <path d="M 12 60 L 12 10 L 36 10 C 50 10 54 22 54 28 C 54 36 48 42 36 42 L 12 42" stroke="#ffffff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M 20 28 L 36 28" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white font-sans leading-none">
          PSGL
        </span>
        <span className="text-sm font-bold tracking-[0.12em] text-slate-300 uppercase font-sans">
          GROUP
        </span>
        <span className="text-[6.5px] font-mono tracking-[0.16em] text-cyan-400/70 uppercase mt-0.5">
          PROJECT TO THE FUTURE
        </span>
      </div>
    </div>
  );
}

function EmblemSkyWardens() {
  return (
    <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-13 mb-1">
        <path d="M 40 6 L 68 18 L 68 42 C 68 56 40 68 40 68 C 40 68 12 56 12 42 L 12 18 Z" stroke="#94a3b8" strokeWidth="2.5" fill="none" />
        <path d="M 28 38 C 32 28 38 22 48 18 C 42 26 40 32 44 42 C 38 38 32 36 28 38 Z" fill="#ffffff" opacity="0.9" />
        <line x1="22" y1="32" x2="34" y2="28" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="38" x2="30" y2="36" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <div className="flex items-center gap-1">
        <span className="text-xs font-bold tracking-[0.14em] uppercase text-white font-sans">
          SKY
        </span>
        <span className="text-xs font-light tracking-[0.14em] uppercase text-slate-300 font-sans">
          WARDENS
        </span>
      </div>
    </div>
  );
}

function EmblemTAS() {
  return (
    <div className="flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <div className="flex items-baseline gap-0">
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans leading-none">T</span>
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-amber-400 font-sans leading-none relative">A</span>
        <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-sans leading-none">S</span>
      </div>
      <span className="text-[6.5px] font-mono tracking-[0.12em] text-amber-400/80 uppercase mt-1">
        Future Mobility Redefined
      </span>
    </div>
  );
}

function EmblemVigyanlabs() {
  return (
    <div className="flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
      <svg viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-12">
        <path d="M 10 12 C 14 32 22 48 30 48 C 36 48 40 32 42 22" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M 42 22 C 44 28 46 34 50 34 C 54 34 56 28 56 24" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 56 18 C 56 18 58 14 62 14 C 66 14 66 20 66 24 C 66 30 64 36 68 36" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 68 36 C 72 36 74 28 76 22 C 78 16 80 14 84 14 C 88 14 88 22 88 28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 88 28 C 88 32 90 36 94 36 C 98 36 100 28 100 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 104 8 C 104 8 104 28 104 36 C 104 40 108 42 110 36" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 114 22 C 110 22 108 26 108 30 C 108 36 112 38 116 36 C 118 34 118 30 116 28 C 114 26 110 28 110 30" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 120 14 C 120 14 120 28 120 34 C 120 38 122 40 126 36 C 128 32 128 26 126 24 C 124 22 120 24 120 28" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M 132 24 C 128 24 128 28 130 30 C 132 32 136 30 136 26 C 136 22 132 22 130 24" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <line x1="88" y1="40" x2="108" y2="38" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default function PartnershipsSection() {
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  // All Sovereign & Strategic Partner Logos (Merged into 1 Unified Stream)
  const allMarqueeLogos = [
    { id: "csir", component: LogoCsirNal },
    { id: "drdo", component: LogoDrdo },
    { id: "navy", component: LogoNavyServices },
    { id: "iaf", component: LogoIaf },
    { id: "army", component: LogoIndianArmy },
    { id: "isro", component: LogoIsro },
    { id: "airblades", component: LogoAirblades },
    { id: "andurax", component: LogoAndurax },
    { id: "bharatforge", component: LogoBharatForge },
    { id: "centum", component: LogoCentum },
  ];

  // Complete 16 Partner Cards in a unified 4x4 Grid Layout
  const allPartnerCards = [
    {
      id: "ia",
      code: "IA",
      name: "Indian Army",
      component: EmblemIA,
    },
    {
      id: "drdo",
      code: "DRDO",
      name: "Defence Research and Development Organisation",
      component: EmblemDRDO,
    },
    {
      id: "iaf",
      code: "IAF",
      name: "Indian Air Force",
      component: EmblemIAF,
    },
    {
      id: "csir-nal",
      code: "CSIR-NAL",
      name: "Council of Scientific and Industrial Research - National Aerospace Laboratories",
      component: EmblemCSIRNAL,
    },
    {
      id: "ids",
      code: "IDS",
      name: "Integrated Defence Staff",
      component: EmblemIDS,
    },
    {
      id: "isro",
      code: "ISRO",
      name: "Indian Space Research Organisation",
      component: EmblemISRO,
    },
    {
      id: "csir-csio",
      code: "CSIR-CSIO",
      name: "Council of Scientific and Industrial Research - Central Scientific Instruments Organisation",
      component: EmblemCSIRCSIO,
    },
    {
      id: "airblades",
      code: "AIRBLADES",
      name: "Airblades",
      component: EmblemAirblades,
    },
    {
      id: "andurax",
      code: "ANDURAX",
      name: "Andura Expeditions",
      component: EmblemAndurax,
    },
    {
      id: "bharat-forge",
      code: "BHARAT FORGE KALYANI",
      name: "Bharat Forge Kalyani",
      component: EmblemBharatForge,
    },
    {
      id: "centum",
      code: "CENTUM T&S",
      name: "CENTUM TECHNOLOGIES & SOLUTIONS",
      component: EmblemCentum,
    },
    {
      id: "pagariya",
      code: "PAGARIYA GROUP",
      name: "Pagariya Group",
      component: EmblemPagariya,
    },
    {
      id: "psgl",
      code: "PSGL",
      name: "Project Services Group Limited",
      component: EmblemPSGL,
    },
    {
      id: "sky-wardens",
      code: "SKY WARDENS",
      name: "Sky Wardens",
      component: EmblemSkyWardens,
    },
    {
      id: "tas",
      code: "TAS",
      name: "Throttle Aerospace Systems",
      component: EmblemTAS,
    },
    {
      id: "vigyanlabs",
      code: "VIGYANLABS",
      name: "Vigyanlabs",
      component: EmblemVigyanlabs,
    },
  ];

  return (
    <section className="relative pt-12 sm:pt-16 pb-8 sm:pb-10 bg-[#010308] overflow-hidden border-t border-white/10">
      {/* Clean Solid Dark Background (Blue Haze Removed) */}
      <div className="absolute inset-0 bg-[#010308] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 z-10">
        
        {/* Section Header (Centered) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-2.5 sm:space-y-3 max-w-4xl mx-auto select-none"
        >
          {/* Small Top Eyebrow */}
          <div className="text-[11px] font-mono tracking-[0.24em] text-sky-400 uppercase font-semibold">
            AFFILIATIONS
          </div>

          {/* Section Main Title matching Sky Wardens Typography */}
          <div className="w-full flex justify-center py-0.5">
            <svg
              viewBox="0 0 820 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full max-w-[580px] sm:max-w-[720px] md:max-w-[820px] h-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]"
              aria-label="PARTNERSHIPS WITH PURPOSE"
            >
              <defs>
                {/* Exact Logo Shield Tactical Royal Blue Static Metallic Gradient */}
                <linearGradient id="partLogoShieldBlueSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#5aa9f7" />
                  <stop offset="28%" stopColor="#257dc0" />
                  <stop offset="65%" stopColor="#124b80" />
                  <stop offset="100%" stopColor="#0a2a4e" />
                </linearGradient>

                {/* Exact Logo Fighter Jet Titanium / Ice Steel Static Gradient */}
                <linearGradient id="partLogoTitaniumSteelSheen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="30%" stopColor="#e2e8f0" />
                  <stop offset="65%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#64748b" />
                </linearGradient>
              </defs>

              <text
                x="50%"
                y="42"
                textAnchor="middle"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="42"
                fontWeight="900"
                letterSpacing="0.08em"
              >
                <tspan fill="url(#partLogoShieldBlueSheen)">PARTNERSHIPS </tspan>
                <tspan fill="url(#partLogoTitaniumSteelSheen)">WITH </tspan>
                <tspan fill="url(#partLogoShieldBlueSheen)">PURPOSE</tspan>
              </text>
            </svg>
          </div>

          {/* Subtitle Description */}
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal max-w-2xl text-center">
            Sky Wardens works with government bodies, industrial partners, and engineering institutions. Every relationship is chosen deliberately and built to last.
          </p>
        </motion.div>

        {/* 16 Partner Cards in a 4x4 Grid Layout (4 rows x 4 columns) */}
        <div className="pt-6 mx-0 sm:-mx-8 md:-mx-16 lg:-mx-28 xl:-mx-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
            {allPartnerCards.map((card, index) => {
              const EmblemComponent = card.component;

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.5,
                    delay: (index % 4) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group relative rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 bg-[#060a14]/90 border border-white/10 hover:border-white/25 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer select-none min-h-[190px] sm:h-[250px] md:h-[260px] overflow-hidden"
                >
                  {/* Center Emblem Area (Smoothly transitions position on hover) */}
                  <div className="flex-1 flex items-center justify-center w-full py-1 sm:py-0 transition-transform duration-300 sm:group-hover:-translate-y-2">
                    <div className="transform transition-transform duration-300 group-hover:scale-105">
                      <EmblemComponent />
                    </div>
                  </div>

                  {/* Information Panel (Always visible on mobile/touch screens, slide-in on hover for desktop) */}
                  <div className="w-full text-center transition-all duration-300 ease-out opacity-100 translate-x-0 sm:opacity-0 sm:translate-x-8 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 shrink-0">
                    {/* Horizontal Divider Line */}
                    <div className="w-full h-[1px] bg-white/10 my-1.5 sm:my-2 transition-colors sm:group-hover:bg-white/15" />

                    {/* Organization Code & Full Name */}
                    <div className="space-y-0.5 sm:space-y-1 pb-0.5 sm:pb-1">
                      <h4 className="text-[11px] sm:text-xs md:text-sm font-mono font-bold tracking-widest text-cyan-400 uppercase">
                        {card.code}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] md:text-xs text-slate-300 leading-snug font-normal line-clamp-2">
                        {card.name}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Learn More Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center pt-2 pb-1"
        >
          <Link
            href="/partnerships"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/[0.06] border border-white/15 hover:border-cyan-400/60 hover:bg-white/[0.1] text-sm font-semibold text-white tracking-wider uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(56,189,248,0.2)] hover:-translate-y-0.5 backdrop-blur-md"
          >
            <span>Learn More</span>
          </Link>
        </motion.div>

      </div>

      {/* News Ticker Banner — Blue & Black palette */}
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4">
        <div className="w-full border-y border-blue-950/80 bg-black/80 shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex items-stretch h-11 sm:h-12 overflow-hidden">
          {/* Black & Blue Left Badge */}
          <div className="bg-[#050914] px-4 sm:px-8 flex items-center justify-center shrink-0 z-10 border-r border-blue-900/60 shadow-[4px_0_15px_rgba(0,0,0,0.6)]">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest text-sky-400 uppercase whitespace-nowrap">
              BREAKING NEWS
            </span>
          </div>

          {/* Blue & Black Marquee Track */}
          <div className="flex-1 bg-gradient-to-r from-[#040814] via-[#091838] to-[#040814] flex items-center overflow-hidden relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 24 }}
              className="flex items-center gap-8 whitespace-nowrap pl-4 will-change-transform"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="flex items-center gap-8">
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-white uppercase flex items-center gap-3 font-mono">
                    <span className="text-sky-400 font-extrabold">SPOTLIGHT:</span>
                    <span>SKY WARDENS MAKING HEADLINES</span>
                  </span>
                  <span className="text-sky-500/30 text-sm font-light">|</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



