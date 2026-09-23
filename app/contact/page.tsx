"use client";

import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import { Handshake, Phone, Truck } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";

export default function ContactPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  return (
    <ViewTransition enter="route-enter" exit="route-exit" default="none">
      <main className="min-h-screen bg-white text-[#24221F]">
      <header className="border-b border-[#24221F]/15 bg-[#FFF9F0] text-[#24221F]">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" aria-label="Kakumi нүүр хуудас" className="transition-opacity hover:opacity-80">
            <Image src="/images/kakumi-logo.png" alt="Kakumi" width={126} height={54} className="h-12 w-auto object-contain" priority />
          </Link>
          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.14em] sm:flex">
            <Link href="/menu" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Flavors" : "Амтнууд"}</Link>
            <Link href="/about" className="transition-colors hover:text-[#00A878]">{isEnglish ? "About us" : "Бидний тухай"}</Link>
            <Link href="/contact" className="text-[#EF233C] transition-colors hover:text-[#00A878]">{isEnglish ? "Contact" : "Холбоо барих"}</Link>
            <Link href="/login" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
            <LanguageToggle />
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl lg:grid-cols-[0.8fr_1.2fr]">
        <div className="kakumi-rise bg-[#EF233C] px-5 py-16 text-[#F3EEE5] sm:px-12 sm:py-24 lg:px-16">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F3EEE5]/75">{isEnglish ? "Contact · 03" : "Холбоо барих · 03"}</p>
          <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">{isEnglish ? "We would love to hear from you." : "Бид тантай холбогдохдоо баяртай."}</h1>
          <p className="mt-8 max-w-md text-base leading-8 text-[#F3EEE5]/85">{isEnglish ? "Reach out for Kakumi delivery, partnerships, and any other information." : "Kakumi-ийн амтыг гэртээ хүргүүлэх, хамтран ажиллах болон бусад мэдээллийг биднээс аваарай."}</p>
        </div>

        <div className="kakumi-rise px-5 py-16 sm:px-12 sm:py-24 lg:px-16">
          <div className="space-y-10">
            <article className="flex gap-5 border-b border-[#24221F]/15 pb-8">
              <Truck className="mt-1 shrink-0 text-[#00A878]" aria-hidden="true" size={30} />
              <div>
                <h2 className="text-2xl font-black">{isEnglish ? "Want Kakumi delivered to work or home?" : "Ажил, гэртээ хүргэлтээр захиалахыг хүсвэл..."}</h2>
                <p className="mt-3 leading-7 text-[#24221F]/65">{isEnglish ? "Order your favorite flavor for delivery and bring fresh Kakumi taste into your everyday life." : "Таны хүссэн амтыг хүргэлтээр захиалж, өдөр тутмын амьдралдаа Kakumi-ийн шинэхэн амтыг нэмээрэй."}</p>
              </div>
            </article>
            <article className="flex gap-5 border-b border-[#24221F]/15 pb-8">
              <Handshake className="mt-1 shrink-0 text-[#F4C430]" aria-hidden="true" size={30} />
              <div>
                <h2 className="text-2xl font-black">{isEnglish ? "Interested in working together?" : "Хамтран ажиллахыг хүсвэл..."}</h2>
                <p className="mt-3 leading-7 text-[#24221F]/65">{isEnglish ? "Contact us about sales, corporate orders, and partnership opportunities." : "Борлуулалт, байгууллагын захиалга болон хамтын ажиллагааны талаар бидэнтэй холбогдоорой."}</p>
              </div>
            </article>
            <article className="bg-[#00A878] p-6 text-[#F3EEE5] sm:p-8">
              <Phone aria-hidden="true" size={30} />
              <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#F3EEE5]/75">{isEnglish ? "Call us now" : "Яг одоо залгаарай"}</p>
              <a href="tel:99142980" className="mt-3 block text-3xl font-black tracking-tight hover:text-[#F4C430] sm:text-4xl">9914-2980</a>
              <a href="tel:99930478" className="mt-1 block text-3xl font-black tracking-tight hover:text-[#F4C430] sm:text-4xl">9993-0478</a>
            </article>
          </div>
        </div>
      </section>
      <SiteFooter />
      </main>
    </ViewTransition>
  );
}
