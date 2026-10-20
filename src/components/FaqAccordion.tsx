"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "¿Necesito experiencia previa para entender el curso?",
    answer: "No. El curso está diseñado con una progresión pedagógica que va desde la anatomía básica del Oro, spreads y cálculo de pips, hasta la lectura avanzada de liquidez institucional (Smart Money Concepts), bloques de órdenes y psicología cuantitativa."
  },
  {
    question: "¿Qué incluye exactamente el pago de $99 USD?",
    answer: "Incluye acceso de por vida a los 4 módulos completos del curso Gold Sniper Pro en video HD, actualizaciones futuras sin costo adicional, plantillas de análisis para TradingView y el código fuente de nuestro indicador institucional exclusivo para Exness WebTerminal."
  },
  {
    question: "¿Cómo obtengo hasta 1 AÑO GRATIS del Canal VIP de Señales de Oro en Exness?",
    answer: "Te registras en Exness a través de nuestro enlace oficial de academia. Según el capital que deposites en tu propia cuenta para operar, te activamos tu acceso VIP de cortesía: con $100 USD recibes 2 meses VIP gratis; con $250 USD recibes 4 meses VIP gratis; y con $700 USD obtienes 1 año completo de señales VIP gratis (ahorrando $600 USD). El dinero depositado es 100% tuyo para operar y retirar cuando desees."
  },
  {
    question: "¿Qué ocurre después de que termine mi periodo gratis de señales?",
    answer: "Al finalizar tus meses gratis, puedes continuar recibiendo las señales VIP en vivo mediante una suscripción accesible de $50 USD al mes. Si decides no renovar, conservas de todas formas el curso y tu indicador de Exness de por vida."
  },
  {
    question: "¿Por qué recomiendan Exness en lugar de otros brokers?",
    answer: "Exness es el broker líder mundial para materias primas como el Oro (XAU/USD) debido a sus spreads ultra competitivos (desde 0.0 a 1.2 pips en estándar), depósitos y retiros instantáneos 24/7 sin comisiones por USDT o banco local, y su moderna plataforma WebTerminal con soporte para indicadores personalizados."
  },
  {
    question: "¿Puedo operar desde mi teléfono celular?",
    answer: "Sí, absolutamente. Las señales se envían directamente a nuestro canal privado de Telegram con precio de entrada, Stop Loss y Take Profit exactos. Puedes ejecutarlas en 5 segundos desde la app MetaTrader 5 o Exness Trade en iOS o Android."
  },
  {
    question: "¿Qué garantía tengo de que el método funciona?",
    answer: "No vendemos promesas mágicas ni fórmulas milagrosas. Operamos con gestión cuantitativa real: usamos Stop Loss con margen estructural (50 a 100 pips) para evitar que los barridos de volatilidad del Oro quiebren la posición, aseguramos el 50% de ganancia en el primer impulso y movemos el resto a Breakeven. Esto te permite crecer con consistencia matemática sin arriesgar tu cuenta."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#080b11] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>RESOLVEMOS TUS DUDAS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Preguntas <span className="gold-text-gradient">Frecuentes</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            Todo lo que necesitas saber antes de iniciar tu camino hacia la consistencia en Oro.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#0e1422] border border-amber-500/15 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
