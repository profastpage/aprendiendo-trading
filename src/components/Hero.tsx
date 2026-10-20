"use client";

import React from "react";
import {
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Award,
  Users,
  BarChart3,
  Flame,
  ArrowRight
} from "lucide-react";

interface HeroProps {
  onOpenCheckout: () => void;
  onScrollToExness: () => void;
}

export default function Hero({ onOpenCheckout, onScrollToExness }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold mb-6 shadow-sm">
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>ACADEMIA INSTITUCIONAL • ESPECIALISTAS EN XAU/USD</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Domina el <span className="gold-text-gradient">Oro (XAU/USD)</span> con Liquidez Real y Smart Money.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Deja de ser la liquidez que los bancos barren en cada apertura de Nueva York. 
              Aprende el método cuantitativo para cazar impulsos de <strong>50 a 80 pips</strong>, 
              protegerte a Breakeven y monetizar con consistencia matemática.
            </p>

            {/* Key Value Points */}
            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Curso Vitalicio ($99 USD único)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>3 Meses Señales VIP Gratis (Exness)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Indicador WebTerminal Incluido</span>
              </div>
            </div>

            {/* CTA Group */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-extrabold text-base text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/30 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                Acceder al Curso Completo — $99 USD
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToExness}
                className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-base text-amber-300 bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                Ver Oferta 3 Meses VIP Gratis
              </button>
            </div>

            {/* Social Proof & Metrics */}
            <div className="mt-12 pt-8 border-t border-gray-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">+1,420</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Traders Capacitados</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">78.4%</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Winrate Auditado Oro</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">1:3.2</div>
                <div className="text-xs text-gray-400 font-medium mt-0.5">Riesgo / Beneficio Medio</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Execution Card (Simulated MT5 / Exness Terminal) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-yellow-500/20 to-emerald-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0c111d] border border-amber-500/30 p-6 shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                      <BarChart3 className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        XAU/USD <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">M5 ORO</span>
                      </div>
                      <div className="text-[11px] text-gray-400">Exness Standard • Spreads Bajos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Posición en Vivo
                  </div>
                </div>

                {/* Trade Details */}
                <div className="my-5 bg-[#080c14] rounded-xl p-4 border border-gray-800/80">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-red-400 uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 rotate-180" />
                      SELL LIMIT (Barrido de Liquidez BSL)
                    </span>
                    <span className="text-xs text-gray-400 font-mono">Ticket #7077689</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs mb-3">
                    <div>
                      <span className="text-gray-400 block text-[10px]">Precio Entrada:</span>
                      <span className="font-mono font-bold text-white text-sm">4,145.70</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Precio Actual:</span>
                      <span className="font-mono font-bold text-emerald-400 text-sm">4,138.50</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Stop Loss Protegido:</span>
                      <span className="font-mono text-gray-300">4,150.40</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Take Profit Final:</span>
                      <span className="font-mono text-amber-400 font-bold">4,130.00</span>
                    </div>
                  </div>

                  {/* Profit Banner */}
                  <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-emerald-300/80 block uppercase font-medium">Ganancia Actual (+72 Pips)</span>
                      <span className="text-lg font-mono font-black text-emerald-400">+$72.00 USD <span className="text-xs text-emerald-300/70 font-normal">(0.10 lotes)</span></span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-gray-400 block">Gestión:</span>
                      <span className="text-xs font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">Breakeven + Cierre 50%</span>
                    </div>
                  </div>
                </div>

                {/* Strategy Snapshot Points */}
                <div className="space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Stop Loss estructural inamovible (cero margen de quiebre).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Cierre del 50% automático a los 50 pips.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Trailing Stop inteligente para dejar correr las ganancias.</span>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-5 pt-3 border-t border-gray-800 text-[11px] text-gray-400 flex items-center justify-between">
                  <span>Plataforma recomendada:</span>
                  <span className="text-white font-bold tracking-wide">Exness WebTerminal / MT5</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
