"use client";

import React, { useEffect, useRef, memo } from "react";

interface TradingViewWidgetProps {
  symbol?: string;
  theme?: "dark" | "light";
  interval?: string;
  height?: string;
}

function TradingViewWidgetComponent({
  symbol = "OANDA:XAUUSD",
  theme = "dark",
  interval = "5",
  height = "560px",
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if script already injected
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: symbol,
      interval: interval,
      timezone: "America/New_York",
      theme: theme,
      style: "1",
      locale: "es",
      enable_publishing: false,
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
      backgroundColor: "#060911",
      gridColor: "rgba(255, 255, 255, 0.05)",
      hide_side_toolbar: false,
    });

    container.appendChild(script);
  }, [symbol, theme, interval]);

  return (
    <div
      className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#060911]"
      style={{ height }}
    >
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height: "calc(100% - 32px)", width: "100%" }}
        />
        <div className="tradingview-widget-copyright text-[11px] text-gray-500 text-center py-1">
          <a
            href={`https://www.tradingview.com/symbols/${symbol.replace(":", "-")}/`}
            rel="noopener nofollow"
            target="_blank"
            className="text-amber-400/80 hover:text-amber-300 transition-colors"
          >
            Gráfico en vivo de {symbol}
          </a>{" "}
          <span>por TradingView</span>
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidgetComponent);
