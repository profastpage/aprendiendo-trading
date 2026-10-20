"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Landmark,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Flame,
  BookOpen,
  Calculator,
  HelpCircle,
  TrendingUp,
  MessageCircle
} from "lucide-react";

interface NavbarProps {
  onOpenCheckout?: () => void;
  onScrollToExness?: () => void;
}

export default function Navbar({ onOpenCheckout, onScrollToExness }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if past top threshold
      setIsScrolled(currentScrollY > 20);

      // Smart direction detection
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
          // Scrolling DOWN -> Hide navbar
          setIsVisible(false);
        } else if (lastScrollY.current - currentScrollY > 5) {
          // Scrolling UP -> Show navbar
          setIsVisible(true);
        }
      } else {
        // Near top -> always visible
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileDrawerOpen]);

  // Handle ESC key to close drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileDrawerOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeDrawer = () => setMobileDrawerOpen(false);

  const whatsappUrl = "https://wa.me/51933667414?text=" + encodeURIComponent("Hola AprendiendoTrading, quiero información sobre el curso y la activación de señales VIP en Exness.");

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#060911]/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/25 border border-amber-300/30 group-hover:scale-105 transition-transform">
                <Landmark className="w-5 h-5 text-[#060911] stroke-[2.4]" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                  Aprendiendo<span className="text-amber-400">Trading</span>
                </span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-gray-400 font-bold block -mt-1">
                  OPERATIVA INSTITUCIONAL
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
              <Link href="/#estrategia" className="hover:text-amber-400 transition-colors">
                Estrategia
              </Link>
              <Link href="/curso" className="hover:text-amber-400 transition-colors">
                Curso $99
              </Link>
              <Link href="/#calculadora" className="hover:text-amber-400 transition-colors">
                Calculadora
              </Link>
              <Link href="/broker" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300">
                <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                Bróker Exness & VIP
              </Link>
              <Link href="/#faq" className="hover:text-gray-100 transition-colors">
                Preguntas
              </Link>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              {onScrollToExness ? (
                <button
                  onClick={onScrollToExness}
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer"
                >
                  Planes VIP
                </button>
              ) : (
                <Link
                  href="/broker"
                  className="text-xs font-semibold text-amber-300 hover:text-amber-200 transition-colors"
                >
                  Planes VIP
                </Link>
              )}

              {onOpenCheckout ? (
                <button
                  onClick={onOpenCheckout}
                  className="text-xs px-5 py-2.5 rounded-full font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
                >
                  Comprar Curso ($99)
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <Link
                  href="/curso"
                  className="text-xs px-5 py-2.5 rounded-full font-bold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-1.5"
                >
                  Comprar Curso ($99)
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>

            {/* Mobile Hamburger Trigger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setMobileDrawerOpen(true)}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-none transition-colors cursor-pointer"
                aria-label="Abrir Menú"
              >
                <Menu className="w-6 h-6 text-amber-400" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* MOBILE IMMERSIVE SLIDE-OVER DRAWER (RIGHT TO LEFT)       */}
      {/* ======================================================== */}
      {mobileDrawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          
          {/* Backdrop Blur Overlay */}
          <div
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
            aria-hidden="true"
          />

          {/* Drawer Container (Sliding from Right to Left) */}
          <aside
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#070b16] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto animate-in slide-in-from-right duration-300 ease-out z-50"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center border border-amber-300/30">
                    <Landmark className="w-5 h-5 text-[#060911] stroke-[2.4]" />
                  </div>
                  <div>
                    <span className="text-base font-extrabold text-white">
                      Aprendiendo<span className="text-amber-400">Trading</span>
                    </span>
                    <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-bold block">
                      OPERATIVA INSTITUCIONAL
                    </span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeDrawer}
                  className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                  aria-label="Cerrar Menú"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-2">
                <Link
                  href="/#estrategia"
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  <TrendingUp className="w-4 h-4 text-amber-400" />
                  Estrategia Institucional
                </Link>

                <Link
                  href="/curso"
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Curso Completo ($99 USD)
                </Link>

                <Link
                  href="/broker"
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-amber-300 bg-amber-500/10 border border-amber-500/20 font-semibold text-sm"
                >
                  <Flame className="w-4 h-4 text-amber-400" />
                  Bróker Exness & Planes VIP
                </Link>

                <Link
                  href="/#calculadora"
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  Calculadora Cuantitativa
                </Link>

                <Link
                  href="/#faq"
                  onClick={closeDrawer}
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium text-sm"
                >
                  <HelpCircle className="w-4 h-4 text-gray-400" />
                  Preguntas Frecuentes
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl text-emerald-400 hover:bg-emerald-500/10 transition-colors font-semibold text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  WhatsApp (+51 933 667 414)
                </a>
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={() => {
                  closeDrawer();
                  if (onOpenCheckout) onOpenCheckout();
                }}
                className="w-full py-4 rounded-2xl font-black text-sm text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                Comprar Curso — $99 USD
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/broker"
                onClick={closeDrawer}
                className="w-full py-3 rounded-2xl font-bold text-xs text-amber-300 border border-amber-500/30 text-center block hover:bg-amber-500/10 transition-colors"
              >
                Ver Planes VIP de Exness
              </Link>
            </div>

          </aside>
        </div>
      )}
    </>
  );
}
