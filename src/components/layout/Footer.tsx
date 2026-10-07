import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/businesses" },
    { label: "Affiliations", href: "/partnerships" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ];

  const focusLinks = [
    { label: "Aerospace", href: "/businesses#aerospace" },
    { label: "Defence", href: "/businesses#defence" },
    { label: "Advanced Systems", href: "/businesses#advanced-systems" },
    { label: "Petrochemical", href: "/businesses#petrochemical" },
  ];

  const socialLinks = [
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 4 16.5 4H18V0h-3.808C9.59 0 9 3.585 9 6.056V8z" />
        </svg>
      ),
    },
    {
      label: "X",
      href: "https://x.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "TikTok",
      href: "https://tiktok.com",
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 3.2-4.41V9.44a6.34 6.34 0 0 0-2.36-.44 6.34 6.34 0 1 0 6.34 6.34V8.58a8.21 8.21 0 0 0 5.24 1.58V6.69z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="w-full bg-[#05080f] text-slate-300 border-t border-white/5 pt-8 sm:pt-10 pb-0">
      <div className="w-full px-3.5 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        {/* Main Footer Header / Layout (12-Col Balanced Grid) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-12 border-b border-white/5 items-start">
          {/* Left: Brand / Make in India Column & Social Icons */}
          <div className="lg:col-span-5 flex flex-col items-start justify-between self-stretch space-y-4 sm:space-y-6 lg:space-y-8">
            <Image
              src="/images/make-in-india-lion.png"
              alt="Make in India — Mechanical Lion"
              width={240}
              height={110}
              className="object-contain w-[140px] xs:w-[160px] sm:w-[200px] md:w-[240px] max-w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_2px_10px_rgba(255,255,255,0.05)]"
              priority
              unoptimized
            />

            {/* Social Icons - Strictly in ONE Single Line */}
            <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-6 lg:pt-12 mt-auto">
              <h4 className="text-[10px] font-mono font-semibold tracking-[0.25em] sm:tracking-[0.3em] uppercase text-slate-500">
                SOCIAL
              </h4>
              <div className="flex items-center gap-2.5 xs:gap-3.5 sm:gap-4 lg:gap-5 flex-nowrap overflow-x-auto pb-1 max-w-full">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    title={item.label}
                    className="text-[#5aa9f7] hover:text-white transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(90,169,247,0.7)] cursor-pointer select-none shrink-0 p-0.5 sm:p-1"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: NAVIGATION & FOCUS Side-by-Side (2 columns even on 320px) */}
          <div className="lg:col-span-6 xl:col-span-5 lg:col-start-7 xl:col-start-8 w-full grid grid-cols-2 gap-4 xs:gap-6 sm:gap-10 lg:gap-16">
            {/* NAVIGATION */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-[10px] font-mono font-semibold tracking-[0.3em] uppercase text-slate-500">
                NAVIGATION
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-normal text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* FOCUS (Side-by-side with Navigation) */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-[10px] font-mono font-semibold tracking-[0.3em] uppercase text-slate-500">
                FOCUS
              </h4>
              <ul className="space-y-2.5 sm:space-y-3">
                {focusLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm font-normal text-slate-300 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 pb-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-slate-500">
          COPYRIGHT &copy; {new Date().getFullYear()} SKY WARDENS ALLIANCE PVT. LTD.
        </div>
      </div>

      {/* Massive Monumental SKY WARDENS Wordmark at the Very Last of the Page - Aligned With Navbar */}
      <div className="w-full pt-6 sm:pt-10 pb-0 flex items-center justify-center select-none overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14">
        <svg
          viewBox="0 0 1000 148"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-hidden block"
          aria-label="SKY WARDENS"
        >
          <defs>
            {/* Top Half Solid Gradient: SKY (Royal Blue Sheen) */}
            <linearGradient id="footerSkyBlueTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#70b9ff" />
              <stop offset="50%" stopColor="#257dc0" />
              <stop offset="100%" stopColor="#124b80" />
            </linearGradient>

            {/* Top Half Solid Gradient: WARDENS (Titanium Steel Sheen) */}
            <linearGradient id="footerWardensSteelTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#f1f5f9" />
              <stop offset="80%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Bottom Half Color Enhancer Gradient */}
            <linearGradient id="footerBottomPhotoEnhance" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0284c7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.95" />
            </linearGradient>

            {/* Full Wordmark Letter ClipPath */}
            <clipPath id="footerFullWordmarkClip">
              <text
                x="0"
                y="145"
                fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
                fontSize="180"
                fontWeight="900"
                letterSpacing="0"
                textLength="992"
                lengthAdjust="spacingAndGlyphs"
              >
                <tspan>SKY</tspan>
                <tspan dx="35">WARDENS</tspan>
              </text>
            </clipPath>

            {/* Top Half Clip (y: 0 to 88) */}
            <clipPath id="footerTopHalfClip">
              <rect x="0" y="0" width="1000" height="88" />
            </clipPath>

            {/* Bottom Half Clip (y: 88 to 148) */}
            <clipPath id="footerBottomHalfClip">
              <rect x="0" y="88" width="1000" height="60" />
            </clipPath>
          </defs>

          {/* Main Master Group with Letter Cutout */}
          <g clipPath="url(#footerFullWordmarkClip)">
            {/* TOP HALF: Clean Crisp Metallic Solid Typography */}
            <g clipPath="url(#footerTopHalfClip)">
              <rect x="0" y="0" width="315" height="88" fill="url(#footerSkyBlueTop)" />
              <rect x="310" y="0" width="690" height="88" fill="url(#footerWardensSteelTop)" />
              <rect x="0" y="0" width="1000" height="12" fill="#ffffff" opacity="0.25" />
            </g>

            {/* BOTTOM HALF: High-Impact Authentic Stealth Jet Photo */}
            <g clipPath="url(#footerBottomHalfClip)">
              <image
                href="/images/stealth-runway-real.jpg"
                x="0"
                y="10"
                width="1000"
                height="140"
                preserveAspectRatio="xMidYMid slice"
                className="filter brightness-115 contrast-110"
              />
              <rect
                x="0"
                y="88"
                width="1000"
                height="60"
                fill="url(#footerBottomPhotoEnhance)"
                style={{ mixBlendMode: "color-dodge" }}
                opacity="0.6"
              />
              <rect
                x="0"
                y="125"
                width="1000"
                height="23"
                fill="#010308"
                opacity="0.45"
              />
            </g>

            {/* MIDLINE: Futuristic Tactical Laser Divider Horizon */}
            <line x1="0" y1="88" x2="1000" y2="88" stroke="#38bdf8" strokeWidth="1.8" opacity="0.9" />
            <line x1="0" y1="88" x2="1000" y2="88" stroke="#ffffff" strokeWidth="0.7" opacity="1" />
          </g>

          {/* EXTERIOR: Sharp Bevel Outline for 3D Tactical Clarity */}
          <text
            x="0"
            y="145"
            fontFamily="var(--font-oxanium), 'Rajdhani', 'Anton', sans-serif"
            fontSize="180"
            fontWeight="900"
            letterSpacing="0"
            textLength="992"
            lengthAdjust="spacingAndGlyphs"
            fill="none"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.4"
            strokeLinejoin="round"
          >
            <tspan>SKY</tspan>
            <tspan dx="35">WARDENS</tspan>
          </text>
        </svg>
      </div>
    </footer>
  );
}
