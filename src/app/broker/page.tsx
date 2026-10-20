import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import ExnessShowcase from "@/components/ExnessShowcase";
import WhyWithUs from "@/components/WhyWithUs";
import TradingViewWidget from "@/components/TradingViewWidget";
import { Award, ExternalLink, BarChart2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Condiciones Bróker Exness & Señales VIP | Aprendiendo Trading",
  description: "Conoce las ventajas institucionales de operar con Exness: Spreads bajos en Oro, retiros automáticos en segundos, trading sin swap y soporte 24/7. 3 Meses VIP gratis con nuestra academia.",
};

export default function BrokerPage() {
  const affiliateUrl = process.env.NEXT_PUBLIC_EXNESS_AFFILIATE_URL || "https://one.exness-track.com";

  return (
    <main className="min-h-screen bg-[#060911] text-gray-100 flex flex-col">
      <Navbar />

      {/* Header Intro */}
      <section className="pt-36 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>ALIANZA OFICIAL DE ACADEMIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            El Bróker Institucional para Operar Oro: <span className="gold-text-gradient">Exness</span>
          </h1>

          <p className="mt-5 text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Las condiciones de trading marcan la diferencia entre el éxito y el fracaso de una estrategia. 
            Descubre por qué recomendamos y operamos exclusivamente en Exness.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-extrabold text-sm text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all"
            >
              Abrir Cuenta en Exness
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Live TradingView Gold Chart */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-bold text-white">
            <BarChart2 className="w-4 h-4 text-amber-400" />
            <span>Gráfico Institucional de Oro (XAU/USD) en Tiempo Real</span>
          </div>
          <span className="text-[11px] font-mono text-gray-400">TradingView Real-Time Feed</span>
        </div>
        <TradingViewWidget symbol="OANDA:XAUUSD" interval="5" />
      </section>

      {/* Why With Us Section */}
      <WhyWithUs />

      {/* Full Exness Showcase Component */}
      <ExnessShowcase />

      {/* Corporate & Regulatory Transparency */}
      <section className="py-20 border-t border-white/5 bg-[#04060c]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-400 space-y-4">
          <h3 className="text-sm font-bold uppercase text-white tracking-wider mb-3">
            Licencias y Marco Regulatorio Internacional de Exness
          </h3>
          <p>
            <strong>Exness (SC) Ltd:</strong> Corredor de valores registrado en Seychelles (N° 8423606-1) autorizado por la Autoridad de Servicios Financieros (FSA) con licencia SD025 y como proveedor de derivados extrabursátiles (ODP) por la FSCA de Sudáfrica.
          </p>
          <p>
            <strong>Exness B.V.:</strong> Intermediario de valores registrado en Curazao (N° 148698(0)) y autorizado por el Banco Central de Curazao y San Martín (CBCS) con licencia 0003LSI.
          </p>
          <p>
            <strong>Exness (VG) Ltd:</strong> Autorizada por la Comisión de Servicios Financieros (FSC) de las Islas Vírgenes Británicas (N° 2032226) con licencia SIBA/L/20/1133.
          </p>
          <p>
            <strong>Exness (MU) Ltd:</strong> Intermediario de inversiones autorizado por la Comisión de Servicios Financieros de Mauricio (N° 176967) con licencia GB20025294.
          </p>
          <p>
            <strong>Estándar PCI DSS:</strong> Exness cumple con el Estándar de Seguridad de Datos para la Industria de Tarjetas de Pago (PCI DSS) con análisis regulares de vulnerabilidades y pruebas de penetración.
          </p>
        </div>
      </section>

      <BottomNav />
      <Footer />
    </main>
  );
}
