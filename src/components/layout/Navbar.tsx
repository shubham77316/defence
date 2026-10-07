"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/navigation";
import { Menu, X, ChevronDown, Shield, PhoneCall } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-2 sm:py-3"
          : "bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent py-2.5 sm:py-5"
      }`}
    >
      <div className="w-full px-2.5 sm:px-6 md:px-8 lg:px-12 xl:px-14 flex items-center justify-between gap-1.5 sm:gap-4">
        {/* Brand Logo */}
        <Logo size="md" showSectorsList />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 mt-0.5">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            const hasChildren = item.children && item.children.length > 0;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all flex items-center gap-1 ${
                      isActive
                        ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                        : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform" />
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.label && (
                    <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="glass-card rounded-2xl p-3 border border-cyan-500/30 shadow-2xl bg-slate-950/95 backdrop-blur-2xl">
                        <div className="px-3 py-1.5 mb-2 border-b border-slate-800 flex items-center justify-between">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                            Core Strategic Sectors
                          </span>
                          <Shield className="w-3 h-3 text-cyan-400" />
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block p-2.5 rounded-xl hover:bg-slate-900/80 hover:border-cyan-500/20 border border-transparent transition-all group"
                            >
                              <div className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                                {child.label}
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                                {child.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3.5 py-2 rounded-full text-xs font-medium uppercase tracking-[0.15em] transition-all ${
                  isActive
                    ? "text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,229,255,0.15)]"
                    : "text-slate-300 hover:text-white hover:bg-slate-900/60"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action / CTA */}
        <div className="hidden lg:flex items-center gap-3 mt-0.5">
          <Button
            href="/contact"
            variant="secondary"
            size="sm"
            className="border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,229,255,0.25)]"
            icon={<PhoneCall className="w-3.5 h-3.5 text-cyan-400" />}
          >
            Contact Sky Wardens
          </Button>
        </div>

        {/* Mobile Hamburger Button & Action */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
          <Link
            href="/contact"
            className="px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 whitespace-nowrap shrink-0 hover:bg-cyan-500/20 transition-colors"
          >
            Inquire
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors shrink-0"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bottom-0 bg-slate-950/98 backdrop-blur-2xl border-t border-slate-800 p-6 overflow-y-auto flex flex-col justify-between animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Sovereign Tactical Navigation</span>
              <span className="text-cyan-400 font-mono">SYS-ONLINE</span>
            </div>

            <nav className="space-y-2">
              {NAV_LINKS.map((item) => (
                <div key={item.label} className="border-b border-slate-900/60 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-base font-medium text-slate-200 hover:text-cyan-300"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-cyan-500/70">&rarr;</span>
                  </Link>

                  {item.children && (
                    <div className="pl-4 mt-1 space-y-1.5 border-l border-cyan-500/20">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-xs text-slate-400 hover:text-cyan-300 py-1"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-slate-800 space-y-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Sky Wardens
            </Button>
            <div className="text-center text-[10px] text-slate-400 font-mono tracking-wider">
              B2G &bull; DEFENCE &bull; AEROSPACE &bull; STRATEGIC CAPABILITY
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
