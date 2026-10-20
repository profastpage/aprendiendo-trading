"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Zap,
  TrendingDown,
  Clock,
  Lock,
  Globe2,
  Smartphone,
  Monitor,
  ExternalLink,
  CheckCircle2,
  Flame,
  ArrowRight,
  Gift,
  Star,
  Check
} from "lucide-react";

interface Instrument {
  symbol: string;
  name: string;
  category: string;
  leverage: string;
  spread: string;
  swapFree: boolean;
}

const instruments: Instrument[] = [
  {
    symbol: "XAUUSD",
    name: "Oro vs Dólar",
    category: "Metales (Nuestro Fuerte)",
    leverage: "Personalizable (1:2000)",
    spread: "16.8 pts",
    swapFree: true,
  },
  {
    symbol: "EURUSD",
    name: "Euro / Dólar EEUU",
    category: "Divisas Principales",
    leverage: "Personalizable",
    spread: "0.6 pips",
    swapFree: true,
  },
  {
    symbol: "USOIL",
    name: "Petróleo Crudo WTI",
    category: "Energías",
    leverage: "Personalizable",
    spread: "1.4 pips",
    swapFree: true,
  },
  {
    symbol: "US30",
    name: "Dow Jones Industrial",
    category: "Índices Americanos",
    leverage: "1:400",
    spread: "0.7 pips",
    swapFree: true,
  },
  {
    symbol: "BTCUSD",
    name: "Bitcoin / Dólar",
    category: "Criptomonedas",
    leverage: "1:400",
    spread: "Ajustado",
    swapFree: true,
  }
];

export default function ExnessShowcase() {
  const affiliateUrl = process.env.NEXT_PUBLIC_EXNESS_AFFILIATE_URL || "https://one.exnessonelink.com/boarding/sign-up/303589/a/c_u52ofalqdu?lng=es";

  return (
    <section id="exness" className="py-28 relative overflow-hidden bg-gradient-to-b from-[#060911] via-[#090e1c] to-[#060911]">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-2/3 right-10 w-[500px] h-[300px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>BRÓKER ASOCIADO OFICIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Mejora tu forma de hacer trading con <span className="gold-text-gradient">Exness</span>
          </h2>
          <p className="mt-5 text-gray-300 text-base sm:text-lg leading-relaxed">
            Opera con el bróker minorista más grande y confiable del mundo. Disfruta de spreads ultra económicos, 
            retiros instantáneos en segundos y condiciones institucionales diseñadas para que tus estrategias en Oro funcionen.
          </p>

          {/* Trust Highlights */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Confiable desde 2008
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Múltiples licencias (FSA, CBCS, FSC, FSCA)
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Certificación PCI DSS
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fondos en cuentas separadas
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* TIERED VIP INCENTIVES (100-150 / 250 / 700 USD)          */}
        {/* ======================================================== */}
        <div className="mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
              ESCALERA DE VALOR EXCLUSIVA ACADEMIA
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              Niveles de Acceso VIP según tu Depósito
            </h3>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              El capital que depositas en Exness es <strong>100% tuyo para operar</strong>. 
              Según tu depósito inicial, te regalamos desde 2 meses hasta 1 año completo de señales y herramientas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
            
            {/* Tier 1: Starter */}
            <div className="p-8 rounded-3xl bg-[#090e1c] border border-white/10 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold">
                    NIVEL STARTER
                  </span>
                  <span className="text-xs text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded font-bold">
                    2 Meses VIP
                  </span>
                </div>

                <div className="mt-6 mb-4">
                  <span className="text-xs text-gray-400 block">Depósito Inicial Mínimo:</span>
                  <div className="text-3xl sm:text-4xl font-mono font-black text-white">
                    $100 <span className="text-sm font-sans font-normal text-gray-400">USD</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-1">Capital 100% disponible en tu cuenta</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>2 Meses de Señales VIP en Vivo</strong> en Telegram.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Indicador Gold Liquidity para WebTerminal.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Guía de configuración en Exness.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/5">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full font-bold text-xs text-white bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-2 transition-all text-center"
                >
                  Fondea $100 y Activa 2 Meses
                </a>
              </div>
            </div>

            {/* Tier 2: Trader Pro */}
            <div className="p-8 rounded-3xl bg-[#0d1428] border border-amber-500/30 flex flex-col justify-between space-y-6 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                RECOMENDADO
              </div>

              <div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold">
                    NIVEL TRADER PRO
                  </span>
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-bold">
                    4 Meses VIP
                  </span>
                </div>

                <div className="mt-6 mb-4">
                  <span className="text-xs text-gray-400 block">Depósito Inicial Recomendado:</span>
                  <div className="text-3xl sm:text-4xl font-mono font-black text-amber-400">
                    $250 <span className="text-sm font-sans font-normal text-gray-300">USD</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-1">Margen óptimo para operar Oro</span>
                </div>

                <ul className="space-y-3 text-xs text-gray-200">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span><strong>4 Meses de Señales VIP en Vivo</strong> (Ahorro de $200 USD).</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Indicador Oficial activado en Exness.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Acceso a sesiones grupales de Nueva York.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>Soporte prioritario por WhatsApp.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-full font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all text-center"
                >
                  Fondea $250 y Activa 4 Meses
                </a>
              </div>
            </div>

            {/* Tier 3: Ballena / Institucional (1 AÑO) */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#18233c] to-[#0c1222] border-2 border-amber-400 flex flex-col justify-between space-y-6 relative shadow-2xl">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-lg flex items-center gap-1">
                <Star className="w-3 h-3 fill-black" />
                MÁXIMO VALOR (1 AÑO)
              </div>

              <div>
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-extrabold">
                    NIVEL INSTITUCIONAL
                  </span>
                  <span className="text-xs text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded font-black">
                    1 AÑO COMPLETO
                  </span>
                </div>

                <div className="mt-6 mb-4">
                  <span className="text-xs text-gray-300 block font-medium">Depósito Institucional:</span>
                  <div className="text-3xl sm:text-4xl font-mono font-black text-amber-300">
                    $700 <span className="text-sm font-sans font-normal text-gray-300">USD+</span>
                  </div>
                  <span className="text-[11px] text-emerald-400 block mt-1 font-semibold">
                    🎁 Ahorras $600 USD en suscripciones VIP
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-white">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span><strong>1 AÑO Completo de Señales VIP de Oro</strong> sin pagar mensualidad.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Indicador Oficial de por vida en tu WebTerminal.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Acompañamiento VIP 1-a-1 por WhatsApp directo.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>Plantillas institucionales para TradingView.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-white/10">
                <a
                  href={affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-full font-black text-xs text-black bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2 transition-all text-center"
                >
                  Fondea $700+ y Recibe 1 Año VIP Gratis
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 6 Key Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          
          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Retiros Instantáneos</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tus fondos se envían en cuestión de segundos con transacciones automáticas sin complicaciones. 
              <strong> Más del 98% de los retiros se procesan de forma inmediata 24/7</strong> por USDT, banco local o tarjeta.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <TrendingDown className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Precios Inigualables</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Reduce tus costos de trading hasta un <strong>50% en Forex</strong>, un <strong>83% en el índice DXY</strong> y un <strong>71% en petróleo USOIL</strong> frente a otros brókers. Spreads ultra ajustados en Oro.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Atención 24/7 en 14 Idiomas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soporte humano en español en cuestión de minutos vía chat en vivo, teléfono o correo electrónico, sin bots lentos ni esperas telefónicas.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Trading Sin Swap (Swap-Free)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mantén tus posiciones abiertas de un día para otro o durante el fin de semana sin pagar comisiones nocturnas en los activos más populares como XAU/USD.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Menos Deslizamiento (Slippage)</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ejecución ultra precisa con tecnología propietaria para órdenes límite y de mercado, protegiendo tus puntos de entrada sin requotes molestos.
            </p>
          </div>

          <div className="space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">Seguridad y Saldo Negativo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tus fondos están resguardados en cuentas bancarias segregadas de primer nivel con protección garantizada contra saldo negativo.
            </p>
          </div>

        </div>

        {/* Live Market Conditions Table */}
        <div className="mb-24">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                CONDICIONES DE MERCADO EN VIVO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Spreads y Costos Promedio
              </h3>
            </div>
            <span className="text-xs text-gray-400">
              Datos verificados de ejecución en cuentas Exness
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs font-semibold uppercase text-gray-400">
                  <th className="py-4 px-2">Instrumento</th>
                  <th className="py-4 px-4">Categoría</th>
                  <th className="py-4 px-4">Apalancamiento</th>
                  <th className="py-4 px-4">Spread Promedio</th>
                  <th className="py-4 px-4 text-right">Swap Nocturno</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                {instruments.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-2 font-bold text-white flex items-center gap-2">
                      <span className="font-mono text-amber-400">{item.symbol}</span>
                      <span className="text-gray-400 text-xs font-normal hidden sm:inline">({item.name})</span>
                    </td>
                    <td className="py-4 px-4 text-gray-300 text-xs">{item.category}</td>
                    <td className="py-4 px-4 font-mono text-gray-300 text-xs">{item.leverage}</td>
                    <td className="py-4 px-4 font-mono font-bold text-emerald-400">{item.spread}</td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3" /> Sin Swap
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[11px] text-gray-400">
            *Los spreads mostrados son promedios basados en las condiciones reales de mercado de Exness.
          </p>
        </div>

        {/* Platforms Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Opera donde quieras: Web, Móvil o Escritorio
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Compatible con todas las herramientas profesionales para ejecutar con la máxima velocidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#090e1c] border border-white/5 space-y-3">
              <Monitor className="w-8 h-8 text-amber-400 mb-2" />
              <h4 className="text-lg font-bold text-white">MetaTrader 5</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                El estándar institucional con gráficos avanzados, profundidad de mercado (DOM), ejecución por milisegundos y soporte de Expert Advisors (EAs).
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090e1c] border border-amber-500/20 space-y-3 relative overflow-hidden">
              <div className="absolute top-3 right-3 text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                RECOMENDADO
              </div>
              <Globe2 className="w-8 h-8 text-amber-400 mb-2" />
              <h4 className="text-lg font-bold text-white">Terminal Web de Exness</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Opera directamente en tu navegador sin instalar nada. Incluye soporte para el lenguaje <strong>Indie (Python)</strong> donde compartimos nuestro indicador exclusivo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#090e1c] border border-white/5 space-y-3">
              <Smartphone className="w-8 h-8 text-emerald-400 mb-2" />
              <h4 className="text-lg font-bold text-white">Exness Trade App</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                App móvil nativa para iOS y Android. Deposita, retira tus ganancias y abre operaciones en 1 clic mientras estás fuera de casa o en la calle.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
