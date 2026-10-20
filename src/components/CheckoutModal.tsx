"use client";

import React, { useState } from "react";
import { X, ShieldCheck, Lock, CreditCard, CheckCircle2, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("PE");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant secure order creation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0d1424] border border-amber-500/40 p-6 sm:p-8 shadow-2xl text-left my-8 overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSuccess ? (
          <div>
            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>ACCESO INMEDIATO DE POR VIDA</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Inscripción Oficial <span className="gold-text-gradient">Gold Sniper Pro</span>
              </h3>
              <p className="mt-1 text-sm text-gray-300">
                Curso completo institucional + Indicador para Exness + Opción de 3 meses de Señales VIP gratis.
              </p>
            </div>

            {/* Price Tag Pill */}
            <div className="p-4 rounded-2xl bg-[#080d17] border border-amber-500/30 flex items-center justify-between mb-6">
              <div>
                <span className="text-[11px] text-gray-400 uppercase font-semibold block">Total a Pagar (Pago Único):</span>
                <span className="text-3xl font-mono font-black text-amber-400">$99 <span className="text-sm font-sans font-normal text-gray-300">USD</span></span>
              </div>
              <div className="text-right">
                <span className="text-xs text-emerald-400 font-bold block flex items-center gap-1 justify-end">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Acceso Vitalicio
                </span>
                <span className="text-[10px] text-gray-400">Sin mensualidades del curso</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} method="POST" className="space-y-4">
              
              {/* Name */}
              <div>
                <label htmlFor="full_name" className="block text-xs font-semibold text-gray-200 mb-1.5">
                  Nombre Completo <span className="text-amber-400">*</span>
                </label>
                <input
                  id="full_name"
                  name="full_name"
                  type="text"
                  required
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ej. Fabio Gómez"
                  className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-200 mb-1.5">
                  Correo Electrónico (donde recibirás el acceso) <span className="text-amber-400">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  autoCorrect="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-200 mb-1.5">
                    WhatsApp (con código de país) <span className="text-amber-400">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+51 999 888 777"
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="country" className="block text-xs font-semibold text-gray-200 mb-1.5">
                    País de Residencia <span className="text-amber-400">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#080c14] border border-gray-700/80 text-white text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  >
                    <option value="PE">🇵🇪 Perú</option>
                    <option value="CO">🇨🇴 Colombia</option>
                    <option value="MX">🇲🇽 México</option>
                    <option value="CL">🇨🇱 Chile</option>
                    <option value="AR">🇦🇷 Argentina</option>
                    <option value="ES">🇪🇸 España</option>
                    <option value="US">🇺🇸 Estados Unidos</option>
                    <option value="OTHER">🌎 Otro País</option>
                  </select>
                </div>
              </div>

              {/* Payment Methods (Radio Selection per modern-web-guidance forms rule) */}
              <div className="pt-2">
                <label className="block text-xs font-semibold text-gray-200 mb-2">
                  Método de Pago Preferido:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  
                  <label className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    paymentMethod === "card" ? "bg-amber-500/15 border-amber-400 text-amber-300" : "bg-[#080c14] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}>
                    <input
                      type="radio"
                      name="payment_method"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="sr-only"
                    />
                    <CreditCard className="w-5 h-5 mb-1 text-amber-400" />
                    <span className="text-[11px] font-bold">Tarjeta / Stripe</span>
                  </label>

                  <label className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    paymentMethod === "crypto" ? "bg-amber-500/15 border-amber-400 text-amber-300" : "bg-[#080c14] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}>
                    <input
                      type="radio"
                      name="payment_method"
                      value="crypto"
                      checked={paymentMethod === "crypto"}
                      onChange={() => setPaymentMethod("crypto")}
                      className="sr-only"
                    />
                    <span className="text-base font-bold text-emerald-400 mb-0.5">₮</span>
                    <span className="text-[11px] font-bold">Crypto (USDT)</span>
                  </label>

                  <label className={`p-3 rounded-xl border flex flex-col items-center justify-center text-center cursor-pointer transition-all ${
                    paymentMethod === "whatsapp" ? "bg-amber-500/15 border-amber-400 text-amber-300" : "bg-[#080c14] border-gray-800 text-gray-400 hover:border-gray-700"
                  }`}>
                    <input
                      type="radio"
                      name="payment_method"
                      value="whatsapp"
                      checked={paymentMethod === "whatsapp"}
                      onChange={() => setPaymentMethod("whatsapp")}
                      className="sr-only"
                    />
                    <MessageCircle className="w-5 h-5 mb-1 text-emerald-400" />
                    <span className="text-[11px] font-bold">Transferencia Local</span>
                  </label>

                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-extrabold text-base text-black bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Procesando Pedido...
                    </span>
                  ) : (
                    <>
                      Confirmar y Proceder al Pago ($99 USD)
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encriptación SSL 256-bit • Garantía de satisfacción 100%</span>
              </div>

            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto mb-4 text-emerald-400">
              <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
            </div>
            <h3 className="text-2xl font-extrabold text-white">¡Pre-registro Exitoso!</h3>
            <p className="mt-2 text-sm text-gray-300 max-w-sm mx-auto">
              Hemos registrado tus datos para <strong>{fullName}</strong> ({email}).
            </p>

            <div className="my-6 p-4 rounded-2xl bg-[#080d17] border border-amber-500/30 text-left text-xs text-gray-300 space-y-2">
              <div className="font-bold text-amber-300 uppercase tracking-wide">Instrucciones Siguientes:</div>
              <div>1. Te hemos enviado los datos de acceso y confirmación a tu correo.</div>
              <div>2. Haz clic en el botón abajo para coordinar la activación inmediata de tus <strong>3 Meses de Señales VIP en Exness</strong> por WhatsApp.</div>
            </div>

            <a
              href={`https://wa.me/51933667414?text=${encodeURIComponent(`Hola AprendiendoTrading, acabo de registrarme para el curso Gold Sniper Pro ($99 USD). Mi nombre es ${fullName} y mi correo es ${email}. Quisiera coordinar el pago y la activación de mis meses gratis en Exness.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl font-bold text-base text-black bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-300 hover:to-emerald-400 shadow-xl shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-black" />
              Continuar por WhatsApp Oficial
            </a>

            <button
              onClick={onClose}
              className="mt-4 text-xs text-gray-400 hover:text-white underline cursor-pointer"
            >
              Cerrar esta ventana
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
