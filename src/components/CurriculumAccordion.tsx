"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, ChevronDown, CheckCircle, Clock, Video, Download, Sparkles, ArrowRight } from "lucide-react";

interface ModuleData {
  id: number;
  title: string;
  badge: string;
  duration: string;
  lessonsCount: number;
  description: string;
  lessons: string[];
}

const modules: ModuleData[] = [
  {
    id: 1,
    title: "Módulo 1: Fundamentos Cuantitativos del Oro (XAU/USD)",
    badge: "FUNDAMENTOS",
    duration: "2h 45m",
    lessonsCount: 6,
    description: "Comprende la anatomía del Oro, los horarios exactos de liquidez y cómo evitar los spreads amplios de la sesión asiática.",
    lessons: [
      "1.1 Qué hace al Oro el activo más líquido y manipulado del mundo.",
      "1.2 La Sesión de Nueva York: El volumen real de 8:00 AM a 11:30 AM EST.",
      "1.3 Correlación directa: Índice Dólar (DXY), Rendimientos de Bonos y Oro.",
      "1.4 Cálculo exacto de pips, ticks y valor de contrato en Exness.",
      "1.5 La pausa diaria de rollover de Exness (20:58 - 22:01 UTC) y cómo protegerte.",
      "1.6 Configuración de tu entorno de trading en MetaTrader 5 y Exness WebTerminal."
    ]
  },
  {
    id: 2,
    title: "Módulo 2: Smart Money Concepts & Detección de Liquidez",
    badge: "SMART MONEY",
    duration: "3h 30m",
    lessonsCount: 7,
    description: "Aprende a leer el mapa de liquidez institucional: dónde están los stops de la masa y cómo entrar del lado de los creadores de mercado.",
    lessons: [
      "2.1 Estructura de Mercado Institucional: Rupturas reales vs. falsas rupturas.",
      "2.2 Buy-Side Liquidity (BSL) y Sell-Side Liquidity (SSL): Cómo encontrarlas.",
      "2.3 Order Blocks de Alta Probabilidad en H1 y M15.",
      "2.4 Fair Value Gaps (FVG) y desbalances de volumen sin mitigar.",
      "2.5 El concepto de Inducement: Las trampas previas a la verdadera inyección.",
      "2.6 Zonas de Descuento vs. Zonas Premium para comprar y vender.",
      "2.7 Masterclass práctica: Análisis paso a paso de 5 sesiones reales de Oro."
    ]
  },
  {
    id: 3,
    title: "Módulo 3: Gatillos Sniper de Reversión en M5 y M15",
    badge: "ENTRADAS SNIPER",
    duration: "3h 15m",
    lessonsCount: 6,
    description: "Nuestra estrategia insignia de barrido y retorno al canal. Entradas milimétricas con confirmación sin adivinar giros.",
    lessons: [
      "3.1 El Gatillo Sniper: Barrido exterior + Cierre de vela dentro del canal.",
      "3.2 Filtro Macro H1: La EMA 200 para no operar jamás en contra de la fuerza mayor.",
      "3.3 Filtro de Volatilidad ATR: Cuándo abstenerse de operar (noticias de alto impacto).",
      "3.4 Colocación milimétrica del Stop Loss estructural (justo detrás del barrido).",
      "3.5 Entradas en retrocesos a Order Blocks de M5 sin perseguir velas verdes o rojas.",
      "3.6 Casos de estudio en vivo: 10 entradas comentadas en tiempo real."
    ]
  },
  {
    id: 4,
    title: "Módulo 4: Gestión de Riesgo Cuantitativa & Psicotrading",
    badge: "MONEY MANAGEMENT",
    duration: "2h 30m",
    lessonsCount: 5,
    description: "La matemática que te hace rentable aunque tu tasa de aciertos sea del 50%. La psicología del trader frío que ejecuta sin miedo.",
    lessons: [
      "4.1 La Regla de Oro: Cierre parcial del 50% a los 50 pips y Breakeven inmediato.",
      "4.2 Trailing Stop inteligente: Dejar respirar al Oro sin regalar ganancias.",
      "4.3 Tamaño de posición matemático según tu balance de Exness (0.01 por cada $200 USD).",
      "4.4 Circuit Breakers psicológicos: Máxima pérdida diaria del 4% y semanal del 8%.",
      "4.5 Cómo eliminar la ansiedad, el FOMO (miedo a perderse el trade) y la revancha."
    ]
  },
  {
    id: 5,
    title: "MÓDULO BONUS: Indicador Oficial Exness WebTerminal & Plantillas",
    badge: "BONUS VIP",
    duration: "1h 15m",
    lessonsCount: 3,
    description: "Recibe el código del indicador Gold Liquidity Pro en lenguaje Indie (Python) para activarlo en tu Exness WebTerminal con un solo clic.",
    lessons: [
      "B.1 Código fuente exclusivo del Indicador de Zonas y Barridos para Exness WebTerminal.",
      "B.2 Cómo compartir el indicador con tus propios referidos o amigos con código privado.",
      "B.3 Plantilla de trading para TradingView con niveles automáticos de sesión de NY."
    ]
  }
];

interface CurriculumProps {
  onOpenCheckout?: () => void;
}

export default function CurriculumAccordion({ onOpenCheckout }: CurriculumProps) {
  const [openModule, setOpenModule] = useState<number | null>(1);

  const toggleModule = (id: number) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <section id="temario" className="py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            PLAN DE ESTUDIO COMPLETO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Temario del Curso <span className="gold-text-gradient">Gold Sniper Pro</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Más de 13 horas de contenido grabado en alta definición, con gráficos institucionales y nuestro indicador oficial de regalo.
          </p>
        </div>

        {/* Clean, Non-Boxy Modules List */}
        <div className="space-y-3">
          {modules.map((m) => {
            const isOpen = openModule === m.id;
            const isBonus = m.badge === "BONUS VIP";

            return (
              <div
                key={m.id}
                className="border-b border-white/10 pb-3 transition-colors"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleModule(m.id)}
                  className="w-full py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-bold text-amber-400">
                      {isBonus ? "★" : `0${m.id}`}
                    </span>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${
                          isBonus ? "text-amber-300" : "text-gray-400"
                        }`}>
                          {m.badge} • {m.duration} • {m.lessonsCount} Lecciones
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {m.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-amber-400" : "group-hover:text-white"
                      }`}
                    />
                  </div>
                </button>

                {/* Accordion Content */}
                {isOpen && (
                  <div className="pb-6 pt-1 text-sm text-gray-300">
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{m.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {m.lessons.map((lesson, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 py-1.5 text-xs text-gray-300"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
          <div>
            <div className="text-xl font-bold text-white">¿Listo para dominar el Oro?</div>
            <div className="text-xs text-gray-400">Pago único de $99 USD • Acceso vitalicio • 3 Meses VIP en Exness</div>
          </div>

          <div className="flex items-center gap-3">
            {onOpenCheckout && (
              <button
                onClick={onOpenCheckout}
                className="px-6 py-3.5 rounded-full font-bold text-sm text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                Inscribirme Ahora ($99 USD)
              </button>
            )}
            <Link
              href="/curso"
              className="px-6 py-3.5 rounded-full font-semibold text-sm text-gray-300 hover:text-white border border-white/10 hover:border-white/20 flex items-center gap-1.5"
            >
              Ver Ficha Técnica Completa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
