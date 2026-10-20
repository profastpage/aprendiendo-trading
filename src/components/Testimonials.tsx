"use client";

import React from "react";
import { Star, CheckCircle, TrendingUp, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  country: string;
  role: string;
  profit: string;
  comment: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    country: "🇨🇴 Colombia (Medellín)",
    role: "Trader de Oro (3 meses en la academia)",
    profit: "+$840 USD este mes",
    comment: "Llevaba 2 años perdiendo en XAU/USD porque usaba cruces de medias en M1 y M5. Con el Módulo 3 entendí los barridos de liquidez de Nueva York. El indicador en Exness es una joya.",
    rating: 5,
  },
  {
    name: "Andrés V.",
    country: "🇲🇽 México (Guadalajara)",
    role: "Fondeó $600 USD en Exness",
    profit: "+$1,260 USD acumulado",
    comment: "Aproveché la oferta: compré el curso de $99 y fondeé los $600 en Exness para tener los 3 meses gratis de señales. En mis primeras 3 semanas recuperé la inversión del curso y ya retiré ganancias.",
    rating: 5,
  },
  {
    name: "Renzo P.",
    country: "🇵🇪 Perú (Lima)",
    role: "Ingeniero & Trader part-time",
    profit: "+$610 USD en 4 semanas",
    comment: "La regla del 50% de cierre parcial me cambió la vida. Antes dejaba que un trade ganador de 40 pips se diera la vuelta y me tocara el Stop Loss. Ahora aseguro y voy a Breakeven siempre.",
    rating: 5,
  },
  {
    name: "Matías S.",
    country: "🇨🇱 Chile (Santiago)",
    role: "Operador de Oro & Cripto",
    profit: "+$950 USD",
    comment: "Exness no cobra comisiones ocultas y los retiros me llegan en minutos por USDT. Las señales del canal VIP son claras: precio de entrada, SL milimétrico y dos TPs. Cero humo.",
    rating: 5,
  },
  {
    name: "Javier R.",
    country: "🇪🇸 España (Madrid)",
    role: "Trader Independiente",
    profit: "+$1,840 EUR",
    comment: "El contenido de Smart Money Concepts vale 10 veces más que los 99 dólares. No hay relleno de velas japonesas básicas; va directo al grano con liquidez institucional y mitigación.",
    rating: 5,
  },
  {
    name: "Diego L.",
    country: "🇦🇷 Argentina (Buenos Aires)",
    role: "Miembro VIP",
    profit: "+$730 USD",
    comment: "Tener el indicador directamente en el WebTerminal de Exness sin tener que instalar cosas raras en la computadora facilitó todo. Opere desde mi laptop en el trabajo sin problemas.",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0a0f1d] relative border-b border-amber-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>RESULTADOS VERIFICADOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Traders reales que dominaron el <span className="gold-text-gradient">Oro</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            La consistencia matemática no es casualidad: es el resultado de seguir un método cuantitativo y operar con el broker adecuado.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#0e1424] border border-amber-500/20 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Header: Stars & Profit */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                    {t.profit}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.country}</div>
                </div>
                <div className="text-[11px] text-amber-400/80 font-medium text-right">
                  {t.role}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
