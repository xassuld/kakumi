"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export function SiteFooter() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <footer className="bg-[#24221F] px-5 py-12 text-[#F3EEE5] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">KAKUMI · {isEnglish ? "Made in Mongolia" : "Монголд үйлдвэрлэв"}</p>
          <h2 className="mt-4 max-w-xl text-2xl font-black leading-tight sm:text-3xl">{isEnglish ? "Fresh food, made with care for everyday moments." : "Өдөр тутмын онцгой мөчид зориулсан шинэхэн хүнс."}</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#F3EEE5]/65">{isEnglish ? "Kakumi creates safe, fresh, and satisfying rolls at our Nalaikh factory, bringing a new feeling to Mongolian food culture." : "Какүми Налайх дахь үйлдвэртээ аюулгүй, шинэхэн, сэтгэл ханамжтай ороомог бүтээж, Монголын хүнсний соёлд шинэ мэдрэмж авчирч байна."}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm sm:items-end">
          <Link href="/about" className="inline-flex items-center gap-2 font-bold text-[#F3EEE5] transition-colors hover:text-[#00A878]">{isEnglish ? "About Kakumi" : "Какүмигийн тухай"}<ArrowUpRight size={16} /></Link>
          <Link href="/contact" className="inline-flex items-center gap-2 font-bold text-[#F3EEE5] transition-colors hover:text-[#00A878]">{isEnglish ? "Contact us" : "Холбоо барих"}<ArrowUpRight size={16} /></Link>
          <a href="https://www.instagram.com/kakumi_mongolia/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold text-[#F3EEE5] transition-colors hover:text-[#F4C430]"><ExternalLink size={16} />@kakumi_mongolia</a>
          <p className="mt-3 text-[#F3EEE5]/60">9914-2980 · 9993-0478</p>
        </div>
      </div>
    </footer>
  );
}
