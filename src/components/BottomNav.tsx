"use client";

import React from "react";
import Link from "next/link";
import { Home, BookOpen, Flame, Calculator } from "lucide-react";

interface BottomNavProps {
  onOpenCheckout?: () => void;
}

export default function BottomNav({ onOpenCheckout }: BottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#070b16]/95 backdrop-blur-xl border-t border-white/10 pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_20px_rgba(0,0,0,0.5)]">
      <div className="grid grid-cols-4 h-16 items-center max-w-md mx-auto px-2 text-center">
        
        {/* Item 1: Inicio */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-amber-400 transition-colors py-1"
        >
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-medium tracking-tight">Inicio</span>
        </Link>

        {/* Item 2: Curso */}
        {onOpenCheckout ? (
          <button
            onClick={onOpenCheckout}
            className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-amber-400 transition-colors py-1 cursor-pointer"
          >
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-semibold text-amber-400 tracking-tight">Curso $99</span>
          </button>
        ) : (
          <Link
            href="/curso"
            className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-amber-400 transition-colors py-1"
          >
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span className="text-[10px] font-semibold text-amber-400 tracking-tight">Curso $99</span>
          </Link>
        )}

        {/* Item 3: Bróker */}
        <Link
          href="/broker"
          className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-amber-300 transition-colors py-1"
        >
          <Flame className="w-5 h-5 text-amber-400 animate-pulse" />
          <span className="text-[10px] font-medium tracking-tight">Exness VIP</span>
        </Link>

        {/* Item 4: Calculadora */}
        <Link
          href="/#calculadora"
          className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors py-1"
        >
          <Calculator className="w-5 h-5 text-emerald-400" />
          <span className="text-[10px] font-medium tracking-tight">Calculadora</span>
        </Link>

      </div>
    </nav>
  );
}
