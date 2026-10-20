"use client";

import React from "react";
import Image from "next/image";
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
    <section className="relative min-h-[100dvh] flex flex-col justify-center pt-20 pb-20 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Institutional Gold Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Background: 9:16 Vertical Portrait Gold Stack */}
        <div className="relative w-full h-full block sm:hidden">
          <Image
            src="/hero-bg-mobile.jpg"
            alt="Oro Institucional Trading XAU/USD"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060911]/60 via-[#060911]/45 to-[#060911]" />
        </div>

        {/* Desktop / Tablet Background: 16:9 Panoramic Gold Vault & Candlesticks */}
        <div className="relative w-full h-full hidden sm:block">
          <Image
            src="/hero-bg-gold.jpg"
            alt="Oro Institucional Trading XAU/USD"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060911]/70 via-[#060911]/50 to-[#060911]" />
        </div>
      </div>

      {/* Atmospheric radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute top-1/3 -left-32 w-[380px] h-[380px] bg-yellow-600/10 rounded-full blur-[120px] pointer-events-none z-[1]" />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/30 text-[#dfb76c] text-xs font-semibold mb-4 sm:mb-6 shadow-sm backdrop-blur-sm">
              <Flame className="w-3.5 h-3.5 text-[#dfb76c]" />
              <span>ACADEMIA INSTITUCIONAL • ESPECIALISTAS EN XAU/USD</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14] drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              Domina el <span className="gold-text-gradient">Oro (XAU/USD)</span> con Liquidez Real y Smart Money.
            </h1>

            {/* Subtitle: High-impact & compact on mobile, detailed on desktop */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span className="sm:hidden">
                El <strong>90% de los traders</strong> pierde persiguiendo líneas minoristas. Aprende a cazar barridos bancarios de <strong>50 a 80 pips</strong> con ventaja cuantitativa real.
              </span>
              <span className="hidden sm:inline">
                Deja de ser la liquidez que los bancos barren en cada apertura de Nueva York. 
                Aprende el método cuantitativo para cazar impulsos de <strong>50 a 80 pips</strong>, 
                protegerte a Breakeven y monetizar con consistencia matemática.
              </span>
            </p>

            {/* Key Value Points (Compact badges) */}
            <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dfb76c] flex-shrink-0" />
                <span>Curso Vitalicio ($99 USD)</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hasta 1 Año VIP Gratis (Exness)</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#dfb76c] flex-shrink-0" />
                <span>Indicador Incluido</span>
              </div>
            </div>

            {/* CTA Group: Immediate tap targets above the fold */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onOpenCheckout}
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-extrabold text-sm sm:text-base text-[#060911] gold-btn-gradient shadow-xl shadow-[#dfb76c]/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
              >
                Acceder al Curso Completo — $99 USD
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onScrollToExness}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-[#dfb76c] bg-[#dfb76c]/10 hover:bg-[#dfb76c]/20 border border-[#dfb76c]/30 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 text-[#dfb76c]" />
                Hasta 1 Año VIP Gratis con Exness
              </button>
            </div>

            {/* Social Proof & Metrics */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800/80 grid grid-cols-3 gap-3 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-white">+1,420</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Traders Capacitados</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-[#dfb76c]">78.4%</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Efectividad Histórica</div>
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-emerald-400">1:3.2</div>
                <div className="text-[10px] sm:text-xs text-gray-400 font-medium mt-0.5">Riesgo / Beneficio Medio</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Execution Card (Simulated MT5 / Exness Terminal) - Desktop only */}
          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-amber-500/40 via-yellow-500/20 to-emerald-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* Card Container */}
              <div className="relative rounded-2xl bg-[#0c111d]/90 backdrop-blur-md border border-amber-500/30 p-5 sm:p-6 shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
                      <BarChart3 className="w-4 h-4 text-[#dfb76c]" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        XAU/USD <span className="text-[9px] sm:text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono">M5 ORO</span>
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-gray-400">Exness Standard • Spreads Bajos</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-semibold">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Posición en Vivo
                  </div>
                </div>

                {/* Trade Details */}
                <div className="my-4 sm:my-5 bg-[#080c14] rounded-xl p-3.5 sm:p-4 border border-gray-800/80">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] sm:text-xs font-semibold text-red-400 uppercase tracking-wider flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 rotate-180" />
                      SELL LIMIT (Barrido de Liquidez BSL)
                    </span>
                    <span className="text-[10px] sm:text-xs text-gray-400 font-mono">Ticket #7077689</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-xs mb-3">
                    <div>
                      <span className="text-gray-400 block text-[10px]">Precio Entrada:</span>
                      <span className="font-mono font-bold text-white text-xs sm:text-sm">4,145.70</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Precio Actual:</span>
                      <span className="font-mono font-bold text-emerald-400 text-xs sm:text-sm">4,138.50</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Stop Loss Protegido:</span>
                      <span className="font-mono text-gray-300 text-xs">4,150.40</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[10px]">Take Profit Final:</span>
                      <span className="font-mono text-[#dfb76c] font-bold text-xs">4,130.00</span>
                    </div>
                  </div>

                  {/* Profit Banner */}
                  <div className="p-2.5 sm:p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] sm:text-[10px] text-emerald-300/80 block uppercase font-medium">Ganancia Actual (+72 Pips)</span>
                      <span className="text-base sm:text-lg font-mono font-black text-emerald-400">+$72.00 USD <span className="text-[10px] sm:text-xs text-emerald-300/70 font-normal">(0.10 lotes)</span></span>
                    </div>
                    <div className="text-right">
                      <span className="text-[9px] sm:text-[10px] text-gray-400 block">Gestión:</span>
                      <span className="text-[10px] sm:text-xs font-bold text-amber-300 bg-amber-500/20 px-1.5 sm:px-2 py-0.5 rounded">Breakeven + Cierre 50%</span>
                    </div>
                  </div>
                </div>

                {/* Strategy Snapshot Points */}
                <div className="space-y-1.5 sm:space-y-2 text-xs text-gray-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb76c] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs">Stop Loss estructural inamovible (cero margen de quiebre).</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#dfb76c] flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs">Cierre del 50% automático a los 50 pips.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-[11px] sm:text-xs">Trailing Stop inteligente para dejar correr las ganancias.</span>
                  </div>
                </div>

                {/* Footer Tag */}
                <div className="mt-4 sm:mt-5 pt-3 border-t border-gray-800 text-[10px] sm:text-[11px] text-gray-400 flex items-center justify-between">
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
