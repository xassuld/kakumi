"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ViewTransition } from "react";
import { ProductCard } from "@/components/ProductCard";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";
import { englishProducts, mongolianProducts } from "@/lib/products";

export default function MenuPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const products = isEnglish ? englishProducts : mongolianProducts;

  return (
    <ViewTransition enter="route-enter" exit="route-exit" default="none">
      <main className="min-h-screen bg-white text-[#24221F]">
        <header className="border-b border-[#24221F]/15 bg-[#FFF9F0]">
          <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
            <Link href="/" aria-label="Kakumi нүүр хуудас" className="transition-opacity hover:opacity-80">
              <Image src="/images/kakumi-logo.png" alt="Kakumi" width={126} height={54} className="h-12 w-auto object-contain" priority />
            </Link>
            <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] sm:flex">
              <Link href="/menu" className="text-[#EF233C] transition-colors hover:text-[#00A878]">{isEnglish ? "Flavors" : "Амтнууд"}</Link>
              <Link href="/about" className="transition-colors hover:text-[#00A878]">{isEnglish ? "About us" : "Бидний тухай"}</Link>
              <Link href="/contact" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Contact" : "Холбоо барих"}</Link>
              <Link href="/login" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
              <LanguageToggle />
            </nav>
            <MobileNav />
          </div>
        </header>

        <section className="mx-auto max-w-7xl px-5 pb-8 pt-14 sm:px-8 sm:pt-20 lg:px-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#24221F]/60 transition-colors hover:text-[#00A878]"><ArrowLeft size={16} /> {isEnglish ? "Back home" : "Нүүр хуудас руу"}</Link>
          <div className="mt-10 flex flex-col justify-between gap-6 border-b border-[#24221F]/20 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">Kakumi menu · 06</p>
              <h1 className="mt-3 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">{isEnglish ? <>6 <span className="text-[#EF233C]">FLAVORS.</span><br />6 <span className="text-[#00A878]">FEELINGS.</span></> : <>6 <span className="text-[#EF233C]">ӨӨР АМТ.</span><br />6 <span className="text-[#00A878]">ӨӨР МЭДРЭМЖ.</span></>}</h1>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#24221F]/65">{isEnglish ? "Choose the feeling that fits your day. Every Kakumi Roll is made to be enjoyed in the moment." : "Өнөөдрийн тань мэдрэмжид тохирох амтыг сонгоорой. Kakumi Roll бүр тухайн мөчийг илүү онцгой болгохоор бүтээгдсэн."}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:px-12 lg:pb-28">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => <ProductCard key={product.englishName} {...product} />)}
          </div>
        </section>
        <SiteFooter />
      </main>
    </ViewTransition>
  );
}
