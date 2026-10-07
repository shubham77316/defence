"use client";

import React from "react";
import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/data/company";
import {
  ShieldCheck,
  Target,
  Factory,
  Cpu,
  Layers,
  Award,
  Lock,
  ArrowRight
} from "lucide-react";

export default function AboutContent() {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    Target: <Target className="w-6 h-6 text-sky-400" />,
    Factory: <Factory className="w-6 h-6 text-indigo-400" />,
    Cpu: <Cpu className="w-6 h-6 text-amber-400" />
  };

  return (
    <div className="relative pt-32 pb-24 bg-slate-950 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-cyan-600/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="radar" size="md">
              Sovereign Engineering Doctrine
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight"
          >
            Built For What The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
              Defence World Needs
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-300 text-lg sm:text-xl leading-relaxed font-normal"
          >
            {COMPANY_INFO.foundingVision}
          </motion.p>

          {/* Core Horizon Metrics: 4 Boxes with Side Entrance */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {COMPANY_INFO.metrics.map((m, idx) => {
              // 0: from left, 1: from bottom, 2: from bottom, 3: from right
              const initialX = idx === 0 ? -60 : idx === 3 ? 60 : 0;
              const initialY = idx === 1 || idx === 2 ? 40 : 0;

              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, x: initialX, y: initialY }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.75,
                    delay: 0.25 + idx * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="glass-card rounded-2xl p-5 text-center space-y-1 hover:border-cyan-400/40 transition-colors"
                >
                  <div className="text-3xl font-black font-mono text-cyan-300">{m.number}</div>
                  <div className="text-xs font-mono font-bold text-white uppercase">{m.label}</div>
                  <div className="text-[11px] text-slate-400 leading-tight">{m.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Strategic Pillars Section: Cards Coming in From Opposite Sides */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3"
          >
            <Badge variant="cyan" size="sm">Our Core Pillars</Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">
              The Engineering Architecture
            </h2>
            <p className="text-slate-400 text-sm">
              How Sky Wardens combines sovereign IP development with dual-use precision industrial execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.pillars.map((pillar, idx) => {
              // Left column comes from left (-70px), right column comes from right (+70px)
              const fromLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: fromLeft ? -70 : 70 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.8,
                    delay: (idx % 2) * 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="glass-card rounded-3xl p-8 space-y-4 hover:border-cyan-400/50 transition-colors duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/40 transition-colors">
                    {iconMap[pillar.icon] || <Layers className="w-6 h-6 text-cyan-400" />}
                  </div>

                  <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
                    Pillar 0{idx + 1}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Governance & Quality Architecture: 3 Boxes with Side Entrance */}
        <motion.div
          id="governance"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-3xl p-8 sm:p-12 border-cyan-500/30 bg-slate-950/80 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Compliance &amp; Reliability Standards
              </span>
              <h3 className="font-display text-3xl font-black uppercase text-white mt-1">
                Quality &amp; Strategic Governance
              </h3>
            </div>
            <Badge variant="indigo" size="md">
              MIL-SPEC &amp; AEROSPACE COMPLIANT
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-slate-300">
            {/* Box 1: Slides from Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-400/40 transition-colors"
            >
              <div className="font-mono text-cyan-400 font-bold text-xs uppercase flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Zero Compromise Security</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                All engineering blueprints, aerodynamic models, and firmware algorithms are air-gapped with multi-tier cryptographic audit trails.
              </p>
            </motion.div>

            {/* Box 2: Rises from Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-400/40 transition-colors"
            >
              <div className="font-mono text-sky-400 font-bold text-xs uppercase flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>Rigorous Stress Testing</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Platforms undergo vibration, extreme temperature cycling (-50&deg;C to +70&deg;C), electromagnetic interference, and live-fire ballistic validation.
              </p>
            </motion.div>

            {/* Box 3: Slides from Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="space-y-2 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-400/40 transition-colors"
            >
              <div className="font-mono text-amber-400 font-bold text-xs uppercase flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Traceable Quality Control</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                From raw aerospace-grade titanium ingot to synthetic ester base batches, every material unit maintains 100% batch provenance.
              </p>
            </motion.div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs font-mono text-slate-400">
              EXPLORE HOW SKY WARDENS APPLIES THESE STANDARDS ACROSS SECTOR OPERATIONS
            </div>
            <Button
              href="/businesses"
              variant="cyan"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Businesses
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
