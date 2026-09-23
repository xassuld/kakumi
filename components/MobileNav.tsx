"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export function MobileNav() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isOpen || !shouldRender) {
      return;
    }

    const closeTimer = window.setTimeout(() => setShouldRender(false), 420);
    return () => window.clearTimeout(closeTimer);
  }, [isOpen, shouldRender]);

  function toggleMenu() {
    if (!isOpen) {
      setShouldRender(true);
    }
    setIsOpen((open) => !open);
  }

  return (
    <div className="sm:hidden">
      <div className="flex items-center gap-4">
        <LanguageToggle />
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? (isEnglish ? "Close menu" : "Цэс хаах") : (isEnglish ? "Open menu" : "Цэс нээх")}
          className="text-[#EF233C] transition-colors hover:text-[#00A878]"
          onClick={toggleMenu}
        >
          <span className={`inline-flex transition-transform duration-300 ease-out motion-reduce:transition-none ${isOpen ? "rotate-90" : "rotate-0"}`}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </span>
        </button>
      </div>
      {shouldRender && (
        <nav id="mobile-navigation" className={`kakumi-menu-panel absolute inset-x-0 top-full z-20 overflow-hidden border-b border-[#24221F]/15 bg-[#FFF9F0] px-5 py-5 shadow-lg ${isOpen ? "kakumi-menu-panel-open" : "kakumi-menu-panel-closing"}`}>
          <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.14em]">
            <Link className="kakumi-menu-link" href="/menu" onClick={() => setIsOpen(false)}>{isEnglish ? "Flavors" : "Амтнууд"}</Link>
            <Link className="kakumi-menu-link" href="/about" onClick={() => setIsOpen(false)}>{isEnglish ? "About us" : "Бидний тухай"}</Link>
            <Link className="kakumi-menu-link" href="/contact" onClick={() => setIsOpen(false)}>{isEnglish ? "Contact" : "Холбоо барих"}</Link>
            <Link className="kakumi-menu-link" href="/login" onClick={() => setIsOpen(false)}>{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
          </div>
        </nav>
      )}
    </div>
  );
}