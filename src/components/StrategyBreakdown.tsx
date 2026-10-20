"use client";

import React from "react";
import { Crosshair, Eye, Layers, RefreshCw } from "lucide-react";

export default function StrategyBreakdown() {
  return (
    <section id="estrategia" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            LA REALIDAD DEL MERCADO DE ORO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Por qué el 90% pierde en Oro... <br className="hidden sm:block" />
            <span className="gold-text-gradient">y cómo operamos nosotros con ventaja</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            El Oro no se mueve por líneas de tendencia minoristas. Se mueve por <strong>inyecciones bancarias de liquidez</strong> que barren a los traders impacientes.
          </p>
        </div>

        {/* 3 Pillars Grid (Open, seamless, direct-to-background) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Pillar 1 */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Crosshair className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-tight">
                1. Cazar los Barridos
              </h3>
              <span className="text-[11px] text-amber-400 font-mono font-bold">BSL / SSL</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              La masa compra en la ruptura de un máximo creyendo que es una tendencia. Las instituciones utilizan esa euforia para tomar contrapartida y girar el precio.
            </p>
            <div className="pt-2 text-xs text-amber-300 font-medium">
              ⚡ <strong>Regla Institucional:</strong> Entramos únicamente cuando el barrido concluye y la vela cierra de vuelta adentro del rango.
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-tight">
                2. Order Blocks & FVG
              </h3>
              <span className="text-[11px] text-emerald-400 font-mono font-bold">MITIGACIÓN</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Localizamos los desbalances de precio (Fair Value Gaps) y los bloques de órdenes en H1 y M15 donde las manos fuertes dejaron posiciones pendientes.
            </p>
            <div className="pt-2 text-xs text-emerald-300 font-medium">
              🎯 <strong>Entrada Milimétrica:</strong> No perseguimos velas; esperamos el retroceso institucional para arriesgar apenas 25 a 35 pips.
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <RefreshCw className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white tracking-tight">
                3. Regla del 50%
              </h3>
              <span className="text-[11px] text-yellow-400 font-mono font-bold">MATEMÁTICA</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              En Oro las reversas son agresivas. A los 50 pips cerramos automáticamente la mitad del lote y movemos el Stop Loss al precio de entrada más spread (Breakeven).
            </p>
            <div className="pt-2 text-xs text-yellow-300 font-medium">
              🛡️ <strong>Riesgo Cero:</strong> Pase lo que pase después, la operación ya generó beneficio y tu capital queda blindado al 100%.
            </div>
          </div>

        </div>

        {/* Fluid Divider Callout */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xl font-bold text-white">
              ¿Quieres dominar esta lectura en gráficos en vivo?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              Incluye las sesiones grabadas de Nueva York y nuestro indicador exclusivo para Exness WebTerminal.
            </p>
          </div>
          <a
            href="/curso"
            className="px-6 py-3 rounded-full font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 whitespace-nowrap"
          >
            Ver Programa Completo ($99 USD)
          </a>
        </div>

      </div>
    </section>
  );
}
