import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { BUSINESS_SECTORS } from "@/data/businesses";
import {
  Plane,
  Shield,
  Cpu,
  Flame,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Layers,
  Sparkles
} from "lucide-react";

export const metadata = {
  title: "Our Businesses — Sky Wardens Sovereign Strategic Sectors",
  description: "Explore Sky Wardens's 4 core strategic sectors: Aerospace, Defence, Advanced Systems, and Petrochemical industrial engineering."
};

export default function BusinessesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-8 h-8 text-cyan-400" />,
    Shield: <Shield className="w-8 h-8 text-sky-400" />,
    Cpu: <Cpu className="w-8 h-8 text-indigo-400" />,
    Flame: <Flame className="w-8 h-8 text-amber-400" />
  };

  return (
    <div className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[750px] h-[350px] bg-cyan-600/10 blur-[160px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="radar" size="md">
            Operational Matrix
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            We Operate Where <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Impact Matters
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
            Four specialized sovereign sectors engineered with military-grade precision, high-capacity tooling, and end-to-end mission survivability.
          </p>
        </div>

        {/* 4 Dedicated Sector Sections */}
        <div className="space-y-20">
          {BUSINESS_SECTORS.map((sector) => (
            <div
              key={sector.id}
              id={sector.id}
              className="scroll-mt-32 glass-card rounded-3xl p-8 sm:p-12 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 space-y-8"
            >
              {/* Sector Header Strip */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                    {iconMap[sector.iconName] || <Layers className="w-8 h-8 text-cyan-400" />}
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                      Sector {sector.number} // Tactical Vertical
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mt-0.5">
                      {sector.title}
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="cyan" size="md">
                    {sector.subtitle}
                  </Badge>
                </div>
              </div>

              {/* Sector Description */}
              <div className="space-y-4">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  {sector.tagline}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  Technical Specifications &amp; Thresholds
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {sector.keySpecs.map((spec) => (
                    <div key={spec.label} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                      <div className="text-[11px] font-mono text-slate-400 uppercase">{spec.label}</div>
                      <div className="text-lg font-mono font-black text-cyan-300 mt-1">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities & Applications Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                {/* Core Capabilities */}
                <div className="space-y-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    Core Engineering Capabilities
                  </div>
                  <ul className="space-y-2">
                    {sector.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary Applications & Highlights */}
                <div className="space-y-3 p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">
                    Deployment Applications
                  </div>
                  <ul className="space-y-2">
                    {sector.applications.map((app) => (
                      <li key={app} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <ChevronRight className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Strip */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs font-mono text-slate-400">
                  SECTOR STATUS: FULL DEPLOYMENT READY &bull; B2G COMPLIANT
                </div>
                <Button
                  href="/contact"
                  variant="primary"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire For {sector.title} Specifications
                </Button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
