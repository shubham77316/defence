import React from "react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Cpu, Target, Award, Zap } from "lucide-react";

export const metadata = {
  title: "Capabilities — Sky Wardens Sovereign Technology Matrix",
  description: "Comprehensive overview of Sky Wardens's multi-domain defence engineering, aerospace testing and manufacturing capabilities."
};

export default function CapabilitiesPage() {
  return (
    <div className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-1/3 w-[800px] h-[350px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <Badge variant="radar" size="md">
            Capabilities Matrix
          </Badge>


          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
            Strategic Capability &amp; <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Precision Engineering
            </span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal">
            From supersonic aerodynamics and sensor fusion to high-shear industrial tribology, Sky Wardens develops sovereign solutions across the full product lifecycle.
          </p>
        </div>

        {/* Testing & Proving Grounds Strip */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border-cyan-500/30 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Testing Infrastructure
              </span>
              <h3 className="text-3xl font-black uppercase text-white mt-1">
                Proving Grounds &amp; Validation Labs
              </h3>
            </div>
            <Badge variant="cyan" size="md">
              ALL-WEATHER VERIFICATION
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Aerodynamic Wind Corridor</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Subsonic and transonic airflow evaluation tunnel with dynamic laser-Doppler anemometry for airframe stability analysis.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-sky-400 font-bold uppercase flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Ballistic Range &amp; Shock Chamber</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Instrumented ballistic range calibrated for STANAG multi-hit projectile impacts and high-energy explosive shock wave dispersal.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-mono text-indigo-400 font-bold uppercase flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>EMI/EMC Anechoic Chamber</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Shielded anechoic test space for military RF susceptibility, radar cross-section validation, and anti-jamming datalink testing.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              FACILITY ACCESS FOR STRATEGIC EVALUATION BY APPOINTMENT
            </div>
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Technical Liaison
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
