"use client";

import React from "react";

export default function HeroBackgroundAtmosphere() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none bg-black">
      {/* 1. Full Screen HD Background Video (15563-264716035_medium.mp4) */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center filter contrast-[1.08] brightness-[1.05]"
        >
          <source src="/videos/hero-grenade-hd.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. Soft Protective Corner Gradient (Keeps Bottom-Left Headline & CTA 100% Crisp) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
