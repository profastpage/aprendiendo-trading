"use client";

import React from "react";
import Link from "next/link";
import { Landmark, ShieldCheck, AlertTriangle, ExternalLink } from "lucide-react";

export default function Footer() {
  const affiliateUrl = process.env.NEXT_PUBLIC_EXNESS_AFFILIATE_URL || "https://one.exnessonelink.com/boarding/sign-up/303589/a/c_u52ofalqdu?lng=es";

  return (
    <footer className="bg-[#04060c] border-t border-white/5 text-gray-400 text-xs py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center border border-amber-300/30">
                <Landmark className="w-5 h-5 text-[#060911] stroke-[2.4]" />
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white block">
                  Aprendiendo<span className="text-amber-400">Trading</span>
                </span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-gray-400 font-bold block -mt-1">
                  OPERATIVA INSTITUCIONAL
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Academia institucional de análisis cuantitativo y operativa avanzada en Oro (XAU/USD). Formamos traders independientes con metodología de liquidez real.
            </p>
            <div className="text-xs text-amber-300/80 font-medium">
              Asociación Oficial: <strong>Exness Partner Network</strong>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Navegación</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#estrategia" className="hover:text-amber-400 transition-colors">Estrategia Institucional</Link>
              </li>
              <li>
                <Link href="/curso" className="hover:text-amber-400 transition-colors">Curso Completo ($99)</Link>
              </li>
              <li>
                <Link href="/broker" className="hover:text-amber-400 transition-colors">Condiciones Bróker Exness</Link>
              </li>
              <li>
                <Link href="/#calculadora" className="hover:text-amber-400 transition-colors">Calculadora Cuantitativa</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-amber-400 transition-colors">Preguntas Frecuentes</Link>
              </li>
            </ul>
          </div>

          {/* Exness Corporate & Regulation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Seguridad y Bróker</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Exness cuenta con regulación internacional por FSA (Seychelles), CBCS (Curazao), FSC (Islas Vírgenes Británicas) y FSCA (Sudáfrica). Cumple con certificación PCI DSS para máxima seguridad en transacciones.
            </p>
            <div className="pt-2">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold"
              >
                Abrir Cuenta Real en Exness
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Regulatory Risk Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-6 rounded-2xl bg-[#070b14] border border-white/5 text-[11px] leading-relaxed text-gray-400 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-400 font-bold uppercase tracking-wider text-xs">
              <AlertTriangle className="w-4 h-4 flex-shrink-0" />
              <span>Advertencia de Riesgo Regulatoria (Risk Disclosure)</span>
            </div>
            <p>
              El comercio de contratos por diferencias (CFDs), divisas (Forex) y materias primas como el Oro (XAU/USD) con apalancamiento conlleva un alto nivel de riesgo sobre su capital. Es posible sufrir pérdidas parciales o totales de los fondos depositados. No invierta dinero que no pueda permitirse perder bajo ninguna circunstancia. Antes de operar, asegúrese de comprender plenamente los riesgos inherentes y considere su nivel de experiencia y situación financiera.
            </p>
            <p>
              Los materiales formativos, videos, señales e indicadores proporcionados en <strong>AprendiendoTrading.com</strong> tienen una finalidad exclusivamente educativa y de análisis técnico. Ningún contenido debe interpretarse como asesoramiento financiero personalizado, recomendación de inversión u oferta contractual. Los resultados pasados no garantizan rendimientos futuros.
            </p>
          </div>

          {/* Copyright & FastPagePro Agency Credit */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-gray-400 text-xs gap-4 pt-4">
            <div>
              © 2026 AprendiendoTrading.com — Todos los derechos reservados.
            </div>

            {/* Agency Attribution */}
            <div>
              <a
                href="https://fastpagepro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-white transition-colors"
              >
                <span>Creado & Desarrollado por</span>
                <span className="fastpagepro-gold group-hover:underline">
                  fastpagepro.com
                </span>
                <ExternalLink className="w-3 h-3 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
