"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import CurriculumAccordion from "@/components/CurriculumAccordion";
import CheckoutModal from "@/components/CheckoutModal";
import { BookOpen, CheckCircle2, ShieldCheck, Zap, Award, Star, ArrowRight, Sparkles } from "lucide-react";

export default function CursoPage() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#060911] text-gray-100 flex flex-col">
      <Navbar onOpenCheckout={() => setCheckoutOpen(true)} />

      {/* Hero Header */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>CERTIFICACIÓN INSTITUCIONAL DE TRADING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Programa Integral: <span className="gold-text-gradient">Gold Sniper Pro</span>
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            La formación definitiva para dominar el Oro (XAU/USD) con la metodología cuantitativa de Smart Money Concepts, Order Blocks y Barridos de Liquidez.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setCheckoutOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-full font-extrabold text-base text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              Comprar Curso Completo — $99 USD
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Pago único • Acceso de por vida
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Indicador oficial para Exness incluido
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> 3 Meses de Señales VIP gratis
            </span>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <CurriculumAccordion onOpenCheckout={() => setCheckoutOpen(true)} />

      {/* Detailed Value Grid (Non-boxy, clean layout) */}
      <section className="py-24 border-t border-white/5 bg-[#080d19]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white">¿Qué incluye tu inscripción?</h2>
            <p className="text-gray-400 text-sm mt-2">Todo lo que necesitas para operar con ventaja cuantitativa.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> +13 Horas de Formación en Video HD
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed pl-7">
                Lecciones prácticas con casos reales de mercado, desglosando la estructura de mercado de Nueva York, desbalances de volumen y entradas milimétricas.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> Indicador Oficial Exness WebTerminal
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed pl-7">
                El algoritmo en lenguaje Indie (Python) que marca los canales de liquidez y las señales de reversión directo en tu navegador en Exness.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> 3 Meses de Señales VIP de Oro
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed pl-7">
                Acceso gratuito por 90 días a nuestro canal privado de Telegram con entradas en vivo, Stop Loss estructural y dos objetivos de Take Profit.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-400" /> Soporte Directo y Actualizaciones
              </h3>
              <p className="text-gray-400 text-xs leading-relaxed pl-7">
                Acompañamiento por WhatsApp y Telegram para resolver dudas técnicas, revisar tus operativas y guiarte en el proceso de fondeo en Exness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <BottomNav onOpenCheckout={() => setCheckoutOpen(true)} />

      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </main>
  );
}
