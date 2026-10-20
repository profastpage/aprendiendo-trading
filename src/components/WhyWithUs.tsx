"use client";

import React from "react";
import { Check, X, ShieldAlert, Award, Gift, Zap, Users, MessageCircle } from "lucide-react";

export default function WhyWithUs() {
  const affiliateUrl = process.env.NEXT_PUBLIC_EXNESS_AFFILIATE_URL || "https://one.exnessonelink.com/boarding/sign-up/303589/a/c_u52ofalqdu?lng=es";

  return (
    <section className="py-24 relative border-t border-white/5 bg-[#060911]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            EL VALOR DE NUESTRA ALIANZA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            ¿Por qué abrir tu cuenta con <span className="gold-text-gradient">Nosotros</span> y no por tu cuenta?
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
            Exness es un bróker público, pero registrarte bajo nuestro enlace oficial de academia desbloquea beneficios exclusivos de por vida que no obtienes en ningún otro lugar.
          </p>
        </div>

        {/* Comparison Grid (Clean & Direct) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Column 1: Registrarse Solo */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#090d18] border border-white/5 space-y-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/5">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Si te registras solo en Google
                </span>
                <span className="text-xs text-red-400 bg-red-500/10 px-2.5 py-1 rounded-full font-semibold">
                  Sin Ventajas
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Sin acceso a Señales VIP (debes pagar $50/mes desde el día 1).</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Sin el indicador oficial en tu Exness WebTerminal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Sin acompañamiento 1-a-1 ante dudas de verificación (KYC) o retiros.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>Operas en solitario contra la volatilidad institucional de Nueva York.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/5 text-xs text-gray-400">
              Cuentas con las condiciones normales de Exness, pero sin ninguna herramienta pedagógica ni comunidad.
            </div>
          </div>

          {/* Column 2: Registrarse con AprendiendoTrading */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] border-2 border-amber-500/40 space-y-6 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-600 text-black text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-bl-xl shadow-md">
              ALIANZA VIP
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-sm font-bold text-amber-300 uppercase tracking-wider">
                  Bajo nuestro enlace de Academia
                </span>
                <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full font-semibold">
                  100% Beneficios
                </span>
              </div>

              <ul className="mt-6 space-y-4 text-xs sm:text-sm text-gray-200">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>3 Meses de Señales VIP Gratis:</strong> Envíos en vivo de entradas en Oro con SL y TPs (ahorras $150 USD).</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Indicador WebTerminal Incluido:</strong> Aparece automáticamente en tu pestaña <em>&ldquo;Compartido por el partner&rdquo;</em> de Exness.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Soporte Prioritario por WhatsApp:</strong> Asistencia directa de nuestro equipo para configuración y fondeo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Comunidad Privada de Nueva York:</strong> Sesiones de análisis pre-mercado para miembros de la alianza.</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full font-black text-sm text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 transition-all text-center"
              >
                Vincular mi Cuenta y Activar Beneficios
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
