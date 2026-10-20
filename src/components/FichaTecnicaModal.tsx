"use client";

import React from "react";
import {
  X,
  FileText,
  Clock,
  Layers,
  ShieldCheck,
  Award,
  CheckCircle2,
  Monitor,
  Flame,
  ArrowRight,
  BookOpen
} from "lucide-react";

interface FichaTecnicaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout?: () => void;
}

export default function FichaTecnicaModal({
  isOpen,
  onClose,
  onOpenCheckout
}: FichaTecnicaModalProps) {
  if (!isOpen) return null;

  const specs = [
    {
      label: "Nombre del Programa",
      value: "Gold Sniper Pro: Especialización Institucional en Oro",
      icon: Award
    },
    {
      label: "Activo Principal",
      value: "Oro Spot (XAU/USD) • Enfoque en Apertura de Nueva York",
      icon: Flame
    },
    {
      label: "Modalidad y Formato",
      value: "100% Online • Grabaciones en 4K HD + Acceso Vitalicio",
      icon: Monitor
    },
    {
      label: "Duración Lectiva",
      value: "+13 Horas Académicas Prácticas divididas en 4 Módulos",
      icon: Clock
    },
    {
      label: "Metodología Operativa",
      value: "Smart Money Concepts (SMC), Order Blocks, FVG y Barridos de Liquidez",
      icon: Layers
    },
    {
      label: "Gestión de Riesgo y Stop Loss",
      value: "SL estructural de 50 a 100 pips (resiste el ruido), Cierre Parcial del 50% y Breakeven",
      icon: ShieldCheck
    },
    {
      label: "Software e Indicadores",
      value: "Algoritmo Indicador Indie para Exness WebTerminal + Plantillas TradingView",
      icon: CheckCircle2
    },
    {
      label: "Comunidad y Alertas",
      value: "Operativa en vivo por Telegram (Hasta 1 año gratis según depósito en Exness)",
      icon: BookOpen
    },
    {
      label: "Tutoriales Paso a Paso",
      value: "Video-guías para copiar operaciones en 5 segundos y operar en el bróker",
      icon: CheckCircle2
    },
    {
      label: "Inversión Única",
      value: "$99 USD (Sin mensualidades • Acceso de por vida)",
      icon: Award
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#090e1a] border border-[#dfb76c]/40 p-6 sm:p-8 shadow-2xl text-left my-8 overflow-hidden">
        
        {/* Ambient Top Glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#dfb76c]/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Cerrar Ficha Técnica"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/30 text-[#dfb76c] text-xs font-semibold mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>DOCUMENTO OFICIAL DEL PROGRAMA</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Ficha Técnica: <span className="gold-text-gradient">Gold Sniper Pro</span>
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-gray-300">
            Especificaciones pedagógicas, operativas y técnicas de la especialización institucional.
          </p>
        </div>

        {/* Specs Table */}
        <div className="space-y-2.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
          {specs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#060911]/80 border border-white/5 hover:border-[#dfb76c]/20 transition-colors flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#dfb76c]/10 border border-[#dfb76c]/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#dfb76c]" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-400 block">
                    {item.label}
                  </span>
                  <span className="text-sm font-semibold text-white block mt-0.5 leading-snug">
                    {item.value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Actions Footer */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-gray-400 text-center sm:text-left">
            Inscripción vitalicia protegida por garantía de satisfacción.
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
            >
              Cerrar
            </button>
            {onOpenCheckout && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCheckout();
                }}
                className="w-1/2 sm:w-auto px-6 py-3 rounded-xl text-xs font-extrabold text-[#060911] gold-btn-gradient shadow-lg shadow-[#dfb76c]/25 flex items-center justify-center gap-1.5 cursor-pointer transition-all"
              >
                Inscribirme ($99 USD)
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
