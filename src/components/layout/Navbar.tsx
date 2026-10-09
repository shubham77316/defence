"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/navigation";
import { Menu, X, ChevronDown, ChevronLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import type { Variants } from "framer-motion";

const navContainerVariants: Variants = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    width: "auto",
    opacity: 1,
    transition: {
      duration: 0.35,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, x: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.28 },
  },
};

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsDrawerExpanded(false);
  }, [pathname]);

  const slidingNavLinks = NAV_LINKS.filter((item) => item.label !== "Contact");

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

        {/* Desktop Collapsible Navigation: < trigger button next to Contact expands menu leftwards on hover/arrow */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Slide-out Navigation Drawer Container */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setIsDrawerExpanded(true)}
            onMouseLeave={() => {
              setIsDrawerExpanded(false);
              setActiveDropdown(null);
            }}
          >
            {/* Unified Sleek Expanding Pill */}
            <div className="flex items-center bg-[#040814]/95 backdrop-blur-xl border border-cyan-500/35 hover:border-cyan-400/60 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.85)] transition-colors duration-300 overflow-visible">
              {/* Left-sliding Nav Items Emerging from Menu */}
              <AnimatePresence>
                {isDrawerExpanded && (
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={navContainerVariants}
                    className="flex items-center gap-3.5 xl:gap-5 pl-5 pr-2 py-1.5 select-none whitespace-nowrap overflow-visible"
                  >
                    {slidingNavLinks.map((item) => {
                      const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                      const hasChildren = item.children && item.children.length > 0;
                      const isExternal = item.badge === "external" || item.label === "E-Shop";

                      if (hasChildren) {
                        return (
                          <motion.div
                            key={item.label}
                            variants={navItemVariants}
                            className="relative group"
                            onMouseEnter={() => setActiveDropdown(item.label)}
                            onMouseLeave={() => setActiveDropdown(null)}
                          >
                            <button
                              type="button"
                              className={`flex items-center gap-1 text-[13px] xl:text-sm font-medium tracking-wide transition-colors py-1 ${
                                isActive ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"
                              }`}
                            >
                              <span>{item.label}</span>
                              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            {/* Dropdown Card */}
                            {activeDropdown === item.label && (
                              <div className="absolute top-full left-0 pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                                <div className="w-64 rounded-xl p-2 border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
                                  <div className="space-y-1">
                                    {item.children?.map((child) => (
                                      <Link
                                        key={child.label}
                                        href={child.href}
                                        className="block px-3 py-2 rounded-lg hover:bg-slate-900/90 transition-colors group/item"
                                      >
                                        <div className="text-xs font-medium text-slate-200 group-hover/item:text-cyan-300">
                                          {child.label}
                                        </div>
                                        <div className="text-[10.5px] text-slate-400 mt-0.5 line-clamp-1">
                                          {child.description}
                                        </div>
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        );
                      }

                      if (isExternal) {
                        return (
                          <motion.a
                            key={item.label}
                            variants={navItemVariants}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-[13px] xl:text-sm font-medium tracking-wide text-slate-200 hover:text-cyan-400 transition-colors py-1 group"
                          >
                            <span>{item.label}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                          </motion.a>
                        );
                      }

                      return (
                        <motion.div key={item.label} variants={navItemVariants}>
                          <Link
                            href={item.href}
                            className={`text-[13px] xl:text-sm font-medium tracking-wide transition-colors py-1 ${
                              isActive ? "text-cyan-400" : "text-slate-200 hover:text-cyan-400"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </motion.nav>
                )}
              </AnimatePresence>

              {/* The "<" Trigger Button */}
              <button
                type="button"
                onClick={() => setIsDrawerExpanded((prev) => !prev)}
                className={`flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all duration-300 select-none cursor-pointer ${
                  isDrawerExpanded
                    ? "text-cyan-400 bg-cyan-950/40"
                    : "text-slate-300 hover:text-cyan-300 hover:bg-cyan-950/30"
                }`}
                aria-label="Toggle Navigation Options"
                title="Hover or click to open menu"
              >
                <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${isDrawerExpanded ? "rotate-180 text-cyan-300" : "text-cyan-400"}`} />
                <span className="text-[11px] font-mono tracking-wider font-semibold uppercase">
                  {isDrawerExpanded ? "Close" : "Menu"}
                </span>
              </button>
            </div>
          </div>

          {/* Contact Button (Outside capsule, completely free of overlap) */}
          <Link
            href="/contact"
            className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:from-sky-400 hover:to-cyan-300 transition-all duration-300 shadow-[0_2px_12px_rgba(56,189,248,0.3)] hover:shadow-[0_4px_20px_rgba(56,189,248,0.5)] hover:scale-105 active:scale-95 whitespace-nowrap shrink-0"
          >
            Contact
          </Link>
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
