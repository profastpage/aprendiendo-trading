"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Star, CheckCircle, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    comment: "Llevaba 2 años perdiendo en XAU/USD porque usaba cruces de medias en M1 y M5. Con el Módulo 3 entendí los barridos de liquidez de Nueva York y a no asustarme por el ruido con un buen margen de Stop Loss. El indicador en Exness es una joya.",
    rating: 5,
  },
  {
    name: "Andrés V.",
    country: "🇲🇽 México (Guadalajara)",
    role: "Fondeó $250 USD en Exness (Trader Pro)",
    profit: "+$1,260 USD acumulado",
    comment: "Aproveché la oferta: compré el curso de $99 y fondeé los $250 en Exness para tener los 4 meses gratis de señales VIP. Los tutoriales en video para copiar las alertas en Telegram me facilitaron todo. En mis primeras 3 semanas recuperé la inversión del curso.",
    rating: 5,
  },
  {
    name: "Renzo P.",
    country: "🇵🇪 Perú (Lima)",
    role: "Ingeniero & Trader part-time",
    profit: "+$610 USD en 4 semanas",
    comment: "La regla de recoger el 50% de ganancia en el primer impulso y mover a Breakeven me cambió la vida. Antes dejaba que un trade ganador de 40 pips se diera la vuelta y me tocara el Stop Loss. Ahora aseguro dinero en el bolsillo.",
    rating: 5,
  },
  {
    name: "Matías S.",
    country: "🇨🇱 Chile (Santiago)",
    role: "Operador de Oro & Cripto",
    profit: "+$950 USD",
    comment: "Exness no cobra comisiones ocultas y los retiros me llegan en minutos por USDT. Las alertas del canal VIP son transparentes: precio de entrada, SL con suficiente oxígeno para el Oro y dos TPs. Cero humo.",
    rating: 5,
  },
  {
    name: "Javier R.",
    country: "🇪🇸 España (Madrid)",
    role: "Trader Independiente",
    profit: "+$1,840 EUR",
    comment: "El contenido de Smart Money Concepts vale 10 veces más que los 99 dólares. No hay relleno de velas japonesas básicas; va directo al grano con liquidez bancaria, vacíos de liquidez y mitigación.",
    rating: 5,
  },
  {
    name: "Diego L.",
    country: "🇦🇷 Argentina (Buenos Aires)",
    role: "Fondeó $700 USD (1 Año VIP Institucional)",
    profit: "+$1,420 USD",
    comment: "Tener el indicador directamente en el WebTerminal de Exness sin tener que instalar nada raro en la computadora fue clave. Opere desde mi laptop y celular siguiendo los tutoriales sin complicaciones.",
    rating: 5,
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Determine items per page responsively (1 mobile, 2 tablet, 3 desktop)
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay slider every 4.5 seconds unless hovered/touched
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextSlide(); // Swiped left -> next
    } else if (distance < -50) {
      prevSlide(); // Swiped right -> prev
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-24 bg-[#0a0f1d] relative border-b border-[#dfb76c]/15 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>RESULTADOS Y EXPERIENCIAS REALES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Traders que operan con <span className="gold-text-gradient">Ventaja Institucional</span>
            </h2>
            <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl">
              La consistencia no es cuestión de suerte: es el resultado de aplicar una gestión matemática rigurosa, no quemarse con el ruido del Oro y operar con un bróker confiable.
            </p>
          </div>

          {/* Slider Prev / Next Controls */}
          <div className="flex items-center gap-3 self-center md:self-end">
            <button
              onClick={prevSlide}
              aria-label="Testimonio anterior"
              className="w-11 h-11 rounded-full bg-[#060911] border border-white/10 hover:border-[#dfb76c]/50 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-5 h-5 text-[#dfb76c]" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Siguiente testimonio"
              className="w-11 h-11 rounded-full bg-[#060911] border border-white/10 hover:border-[#dfb76c]/50 text-gray-300 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-5 h-5 text-[#dfb76c]" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-500 ease-out will-change-transform"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="h-full rounded-2xl bg-[#0e1424] border border-[#dfb76c]/20 p-6 flex flex-col justify-between hover:border-[#dfb76c]/50 transition-all duration-300 shadow-xl relative group">
                  
                  {/* Subtle quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-[#dfb76c]/10 group-hover:text-[#dfb76c]/20 transition-colors pointer-events-none" />

                  <div>
                    {/* Header: Stars & Profit */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-1 text-[#dfb76c]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#dfb76c]" />
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
                  <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.country}</div>
                    </div>
                    <div className="text-[11px] text-[#dfb76c] font-medium text-right max-w-[140px] truncate">
                      {t.role}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Ir a diapositiva ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === i
                  ? "w-8 bg-[#dfb76c]"
                  : "w-2 bg-gray-700 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
