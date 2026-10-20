"use client";

import React from "react";

export default function WhatsAppButton() {
  const whatsappNumber = "51933667414";
  const message = encodeURIComponent(
    "Hola AprendiendoTrading, quiero información sobre el curso y la activación de señales VIP en Exness."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <aside
      aria-label="Contacto WhatsApp Oficial"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear por WhatsApp con Aprendiendo Trading"
        className="relative flex items-center justify-center w-14 h-14 sm:w-auto sm:h-auto sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 shadow-[#25D366]/40 cursor-pointer"
      >
        {/* Official WhatsApp Vector Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 flex-shrink-0 text-white fill-white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.891.526 3.662 1.44 5.171L2 22l4.982-1.307A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.635 0-3.151-.494-4.419-1.341l-.316-.214-2.934.77.783-2.859-.234-.339A7.95 7.95 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.444-6.042c-.244-.122-1.442-.712-1.666-.793-.224-.081-.387-.122-.55.122-.163.244-.632.793-.774.956-.143.163-.285.183-.529.061-.244-.122-1.03-.38-1.962-1.21-.725-.646-1.215-1.444-1.357-1.688-.143-.244-.015-.376.107-.498.11-.11.244-.285.366-.427.122-.143.163-.244.244-.407.081-.163.041-.305-.02-.427-.061-.122-.55-1.323-.753-1.811-.198-.476-.399-.412-.55-.42-.142-.008-.305-.01-.468-.01-.163 0-.427.061-.65.305-.224.244-.855.835-.855 2.036 0 1.201.875 2.361.997 2.524.122.163 1.722 2.629 4.172 3.687.583.252 1.038.402 1.393.515.586.186 1.12.16 1.542.097.47-.07 1.442-.59 1.645-1.16.203-.57.203-1.058.142-1.16-.061-.102-.224-.163-.468-.285z"
          />
        </svg>

        {/* Text Label on desktop */}
        <span className="hidden sm:inline font-bold text-xs ml-2 tracking-wide text-white">
          WhatsApp Oficial
        </span>

        {/* Online Status Ping */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#060911]" />
        </span>
      </a>
    </aside>
  );
}
