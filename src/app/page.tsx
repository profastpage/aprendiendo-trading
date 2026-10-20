"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Hero from "@/components/Hero";
import TradingViewWidget from "@/components/TradingViewWidget";
import StrategyBreakdown from "@/components/StrategyBreakdown";
import GoldCalculator from "@/components/GoldCalculator";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import WhyWithUs from "@/components/WhyWithUs";
import ExnessShowcase from "@/components/ExnessShowcase";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import { BarChart3, Sparkles } from "lucide-react";

export default function Home() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setCheckoutOpen(false);
  };

  const handleScrollToExness = () => {
    const el = document.getElementById("exness");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#060911] text-gray-100 flex flex-col selection:bg-amber-500 selection:text-black">
      {/* Smart Auto-Hiding Navbar */}
      <Navbar
        onOpenCheckout={handleOpenCheckout}
        onScrollToExness={handleScrollToExness}
      />

      {/* Hero Section */}
      <Hero
        onOpenCheckout={handleOpenCheckout}
        onScrollToExness={handleScrollToExness}
      />

      {/* Live TradingView Gold Chart Front & Center */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/25 text-[#dfb76c] text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>TERMINAL DE ANÁLISIS EN VIVO</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-[#dfb76c]" />
              Gráfico Institucional de Oro (XAU/USD) en Tiempo Real
            </h2>
          </div>
          <span className="text-xs text-gray-400 font-mono">
            Velas de 5 Minutos (M5) • Datos Oficiales TradingView
          </span>
        </div>

        {/* Live Widget */}
        <TradingViewWidget symbol="OANDA:XAUUSD" interval="5" height="580px" />
      </section>

      {/* Strategy & Market Realities */}
      <StrategyBreakdown />

      {/* Interactive Quantitative Calculator */}
      <GoldCalculator />

      {/* 4-Module Curriculum & Bonus */}
      <CurriculumAccordion onOpenCheckout={handleOpenCheckout} />

      {/* Why With Us Section (Alianza Exclusiva) */}
      <WhyWithUs />

      {/* Exness Official Broker Showcase & 3-Tier VIP Deposit Funnel */}
      <ExnessShowcase />

      {/* Real Testimonials & Social Proof */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Legal & Regulatory Footer (with FastPagePro agency credit) */}
      <Footer />

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav onOpenCheckout={handleOpenCheckout} />

      {/* Checkout / Enrollment Modal */}
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={handleCloseCheckout}
      />
    </main>
  );
}
