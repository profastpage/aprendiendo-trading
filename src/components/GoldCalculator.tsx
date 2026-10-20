"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, DollarSign, Target, Shield, ArrowUpRight, Sparkles } from "lucide-react";

export default function GoldCalculator() {
  const [balance, setBalance] = useState<number>(600);
  const [lotSize, setLotSize] = useState<number>(0.05);
  const [pipsTarget, setPipsTarget] = useState<number>(50);

  // In XAU/USD: 1 standard lot = 100 oz.
  // 1 pip in Gold = $0.10 price movement = $10 per 1.00 lot.
  const profitPerTrade = lotSize * pipsTarget * 10;
  const returnPercentage = ((profitPerTrade / balance) * 100).toFixed(1);
  
  // Stop loss standard: 30 pips
  const riskAmount = lotSize * 30 * 10;
  const riskPercentage = ((riskAmount / balance) * 100).toFixed(1);

  // Monthly projection assuming 20 trading days, 70% winrate (14 wins, 6 losses)
  const monthlyProfit = (14 * profitPerTrade) - (6 * riskAmount);
  const monthlyReturnPercent = ((monthlyProfit / balance) * 100).toFixed(1);

  return (
    <section id="calculadora" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-2">
            HERRAMIENTA CUANTITATIVA INTERACTIVA
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Simulador de Rendimiento en <span className="gold-text-gradient">XAU/USD</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base sm:text-lg">
            Calcula exactamente cuánto puedes generar operando Oro con una gestión matemática sin sobreapalancar tu cuenta.
          </p>
        </div>

        {/* Main Grid: Clean & Open layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Sliders Area */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Slider 1: Capital */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="balance-input" className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-amber-400" />
                  Capital en Cuenta (Balance)
                </label>
                <span className="text-xl font-mono font-bold text-amber-400">${balance} USD</span>
              </div>
              <input
                id="balance-input"
                type="range"
                min="100"
                max="5000"
                step="50"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>$100 (Micro)</span>
                <span>$600 (Recomendado en Exness)</span>
                <span>$5,000 (Pro)</span>
              </div>
            </div>

            {/* Slider 2: Lot Size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="lotsize-input" className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  Lotaje por Operación (Oro)
                </label>
                <span className="text-xl font-mono font-bold text-emerald-400">{lotSize.toFixed(2)} Lotes</span>
              </div>
              <input
                id="lotsize-input"
                type="range"
                min="0.01"
                max="0.50"
                step="0.01"
                value={lotSize}
                onChange={(e) => setLotSize(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>0.01 (Seguro)</span>
                <span>0.05 (Ideal $600)</span>
                <span>0.50 (Avanzado)</span>
              </div>
            </div>

            {/* Slider 3: Target Pips */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label htmlFor="pips-input" className="text-sm font-semibold text-gray-200 flex items-center gap-2">
                  <Target className="w-4 h-4 text-yellow-400" />
                  Objetivo por Trade (Pips)
                </label>
                <span className="text-xl font-mono font-bold text-yellow-400">+{pipsTarget} Pips</span>
              </div>
              <input
                id="pips-input"
                type="range"
                min="20"
                max="120"
                step="5"
                value={pipsTarget}
                onChange={(e) => setPipsTarget(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-yellow-500"
              />
              <div className="flex justify-between text-[11px] text-gray-400">
                <span>20 pips (Scalping)</span>
                <span>50 pips (Objetivo estándar)</span>
                <span>120 pips (Tendencial)</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-amber-500/40 pl-3">
              💡 <strong>Regla Institucional:</strong> En cuentas de $600 USD, 0.05 lotes arriesga menos del 2.5% por operación con un beneficio estimado de <strong>+$25.00 a +$40.00 USD</strong> por trade.
            </p>

          </div>

          {/* Metric Outputs (Clean card) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#090e1c] border border-white/5 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Métricas Calculadas
              </span>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono font-bold">
                Riesgo 1:3
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Ganancia por Trade:</span>
                <span className="text-2xl font-mono font-extrabold text-emerald-400">
                  +${profitPerTrade.toFixed(2)} USD
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Retorno por Operación:</span>
                <span className="text-sm font-mono font-bold text-amber-300">
                  +{returnPercentage}% de la cuenta
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-400">Riesgo Máx (SL 30 pips):</span>
                <span className="text-sm font-mono text-red-400">
                  -${riskAmount.toFixed(2)} USD ({riskPercentage}%)
                </span>
              </div>

              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-semibold mb-1">
                  Proyección Mensual Estimada (20 Días):
                </span>
                <div className="text-3xl font-mono font-black text-white flex items-baseline gap-2">
                  <span className="gold-text-gradient">+${monthlyProfit.toFixed(2)} USD</span>
                  <span className="text-xs text-emerald-400 font-semibold font-sans">
                    (+{monthlyReturnPercent}%)
                  </span>
                </div>
              </div>
            </div>

            <Link
              href="/broker"
              className="w-full py-3.5 px-4 rounded-full font-bold text-xs text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 flex items-center justify-center gap-1.5 transition-all text-center"
            >
              Abrir Cuenta Exness con 3 Meses VIP Gratis
              <ArrowUpRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
