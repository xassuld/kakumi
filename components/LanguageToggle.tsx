"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 border-l border-[#24221F]/15 pl-4 text-[11px] font-black tracking-[0.12em]">
      <button
        type="button"
        aria-pressed={language === "mn"}
        onClick={() => setLanguage("mn")}
        className={language === "mn" ? "text-[#EF233C]" : "text-[#24221F]/40 transition-colors hover:text-[#00A878]"}
      >
        MN
      </button>
      <span className="text-[#24221F]/25">/</span>
      <button
        type="button"
        aria-pressed={language === "en"}
        onClick={() => setLanguage("en")}
        className={language === "en" ? "text-[#EF233C]" : "text-[#24221F]/40 transition-colors hover:text-[#00A878]"}
      >
        EN
      </button>
    </div>
  );
}
