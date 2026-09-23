"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";

export function MobileNav() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const [isOpen, setIsOpen] = useState(false);

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
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="absolute inset-x-0 top-full z-20 border-b border-[#24221F]/15 bg-[#FFF9F0] px-5 py-5 shadow-lg">
          <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-[0.14em]">
            <Link href="/menu" onClick={() => setIsOpen(false)}>{isEnglish ? "Flavors" : "Амтнууд"}</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>{isEnglish ? "About us" : "Бидний тухай"}</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>{isEnglish ? "Contact" : "Холбоо барих"}</Link>
            <Link href="/login" onClick={() => setIsOpen(false)}>{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
          </div>
        </nav>
      )}
    </div>
  );
}