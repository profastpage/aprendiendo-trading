"use client";

import React from "react";
import { Flame, ShieldCheck, ArrowRight, Zap, Check, Gift, ExternalLink, HelpCircle } from "lucide-react";

interface ExnessFunnelProps {
  onOpenCheckout: () => void;
}

export default function ExnessFunnel({ onOpenCheckout }: ExnessFunnelProps) {
  return (
    <section id="exness" className="py-24 bg-[#080b11] relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Banner Callout */}
        <div className="rounded-3xl bg-gradient-to-br from-[#121929] via-[#0d1322] to-[#0a0f1d] border-2 border-amber-500/40 p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Decorative Corner Tag */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-500 to-amber-600 text-black font-extrabold text-xs px-6 py-2 rounded-bl-2xl shadow-md uppercase tracking-wider flex items-center gap-1.5">
            <Gift className="w-4 h-4" />
            Oferta Exclusiva Academia
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-4">
              <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>EL EMBUDO INTELIGENTE DE CONSISTENCIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ¿Por qué pagar señales mensuales si puedes tener <span className="gold-text-gradient">3 Meses GRATIS</span>?
            </h2>

            <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              Para operar la estrategia del curso necesitas un broker serio con spreads mínimos y ejecución inmediata. 
              Al abrir tu cuenta en <strong>Exness</strong> a través de nuestra alianza oficial, te regalamos 
              <strong> 3 meses completos de nuestro Canal VIP de Señales de Oro</strong> y el 
              <strong> Indicador Oficial para Exness WebTerminal</strong>.
            </p>
          </div>

          {/* 4 Steps Timeline */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-amber-500/20 relative">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-extrabold text-lg flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-white mb-2">Comprar el Curso</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Adquiere el curso <strong>Gold Sniper Pro</strong> por $99 USD (pago único) para dominar la teoría y las reglas de gestión de riesgo.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-amber-500/20 relative">
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 font-extrabold text-lg flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-white mb-2">Crear Cuenta Exness</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Abre tu cuenta real de trading en <strong>Exness</strong> usando nuestro enlace oficial de academia o código de partner asignado.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-[#090e1a] border border-amber-500/20 relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-extrabold text-lg flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-white mb-2">Fondea tu Capital</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Deposita en tu propia cuenta de Exness el dinero con el que vas a operar: mínimo $150 USD (o <strong>$600 USD para margen óptimo de Oro</strong>).
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#141d33] to-[#090e1a] border-2 border-amber-500/40 relative shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-400 text-black font-black text-lg flex items-center justify-center mb-4 shadow-md">
                4
              </div>
              <h3 className="text-base font-bold text-amber-300 mb-2">¡3 Meses VIP Gratis!</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Envía tu ID de cuenta por WhatsApp y te agregamos al Canal VIP de Señales y te compartimos el indicador en tu Exness WebTerminal.
              </p>
            </div>

          </div>

          {/* Pricing Model Explainer */}
          <div className="mt-10 p-6 rounded-2xl bg-[#080c16] border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                ¿Qué sucede a partir del mes 4?
              </span>
              <p className="text-sm text-gray-300">
                Una vez cumplidos los 3 meses gratis de señales VIP, continuas recibiendo las señales por una membresía mensual accesible de <strong>$50 USD/mes</strong>, la cual se paga sola con 1 o 2 operaciones en Oro.
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="text-2xl font-mono font-black text-white block text-right">
                $50 <span className="text-xs text-gray-400 font-sans font-normal">USD/mes (desde mes 4)</span>
              </span>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={onOpenCheckout}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-base text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              1. Comprar Curso ($99 USD) para Iniciar
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://one.exness-track.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-base text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all flex items-center justify-center gap-2 text-center"
            >
              2. Abrir Cuenta en Exness
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
