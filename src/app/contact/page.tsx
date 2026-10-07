import React from "react";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Sky Wardens — Strategic Liaison & Institutional Inquiries",
  description: "Initiate verified institutional procurement communications, technology collaboration inquiries, or corporate liaison with Sky Wardens."
};

export default function ContactPage() {
  return (
    <div className="relative pt-36 pb-24 bg-[#020408] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid-bg opacity-10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Hero */}
        <div className="space-y-6 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="spec-label text-sky-400 font-bold">DIRECT STRATEGIC COMMUNICATIONS</span>
            <span className="text-slate-600">&bull;</span>
            <span className="spec-label text-slate-400">PROCUREMENT DESK</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Institutional Liaison &amp; Procurement Inquiries
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
            For sovereign defence procurement, aerospace payload evaluations, or strategic industrial partnerships, please connect through our verified liaison portal.
          </p>
        </div>

        {/* Contact Form Section */}
        <ContactSection />

      </div>
    </div>
  );
}
