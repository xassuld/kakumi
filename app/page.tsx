"use client";

import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import { ArrowRight, CheckCircle2, MapPin, Snowflake, Wind } from "lucide-react";

import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
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
            <Link href="/contact" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Contact" : "Холбоо барих"}</Link>
            <Link href="/login" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
            <LanguageToggle />
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="kakumi-rise mx-4 my-6 grid overflow-hidden rounded-[1.75rem] border border-[#24221F]/15 bg-[#FFF9F0] shadow-[0_18px_45px_rgba(36,34,31,0.08)] sm:mx-8 sm:my-10 lg:mx-auto lg:min-h-[540px] lg:max-w-7xl lg:grid-cols-2">
        <div className="flex flex-col justify-center border-b border-[#1A1A1A]/15 px-5 py-12 sm:px-12 sm:py-16 lg:border-b-0 lg:border-r lg:px-16">
          <MapPin className="text-[#EF233C]" aria-hidden="true" size={30} />
          <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">{isEnglish ? "Freshness starts here" : "Шинэлэг амт эндээс эхэлнэ"}</p>
          <h1 className="mt-4 max-w-xl text-5xl font-black leading-[0.94] tracking-[-0.055em] sm:text-7xl">{isEnglish ? <>Want Kakumi<br />delivered?</> : <>Какүми хүргүүлж<br />авах уу?</>}</h1>
          <p className="mt-7 max-w-md text-base leading-7 text-[#24221F]/65 sm:text-lg">{isEnglish ? "Enter your ZIP code or address and we will help you find the easiest way to get fresh Kakumi rolls." : "Захиалга хүргүүлэхийн тулд зип код эсвэл хаягаа оруулна уу. Бид Какүмигийн шинэхэн ороомгийг танд хүргэхэд тусална."}</p>
          <form className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="delivery-address">{isEnglish ? "ZIP code or address" : "Зип код эсвэл хаяг"}</label>
            <input id="delivery-address" name="deliveryAddress" className="h-14 min-w-0 flex-1 border border-[#24221F]/20 bg-[#FFF9F0] px-4 text-sm outline-none transition-colors placeholder:text-[#24221F]/40 focus:border-[#00A878]" placeholder={isEnglish ? "ZIP code or address" : "Зип код эсвэл хаяг"} />
            <button type="submit" className="h-14 bg-[#EF233C] px-6 text-sm font-bold text-[#F3EEE5] transition-colors hover:bg-[#00A878]">{isEnglish ? "Check delivery" : "Хүргэлт шалгах"}</button>
          </form>
        </div>
        <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#F4C430] p-8 sm:min-h-[360px] lg:min-h-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#00A878]/35" />
          <div className="absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-[#EF233C]/35" />
          <Image src="/images/kakumi-logo.png" alt="Kakumi" width={720} height={305} className="kakumi-drift relative z-10 h-auto w-full max-w-xl object-contain drop-shadow-[0_18px_12px_rgba(36,34,31,0.16)]" priority />
        </div>
      </section>

      <section className="border-y border-[#24221F]/15 bg-[#FFF9F0] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">{isEnglish ? "Why Kakumi" : "Яагаад Какүми гэж?"}</p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.04em] sm:text-5xl">{isEnglish ? "Freshness you can feel. Quality you can trust." : "Мэдрэх шинэлэг амт. Итгэх найдвартай чанар."}</h2>
              <p className="mt-6 max-w-md text-base leading-7 text-[#24221F]/65">{isEnglish ? "From our Nalaikh factory to your table, every Kakumi Roll is made around safety, freshness, and the small details that make a good moment better." : "Налайх дахь үйлдвэрээс таны ширээнд хүрэх хүртэл Какүми ороомог бүр аюулгүй байдал, шинэлэг амт, жижиг деталь бүрийн чанарт тулгуурлан бүтээгддэг."}</p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#EF233C] transition-colors hover:text-[#00A878]">{isEnglish ? "Learn about our standards" : "Манай стандартыг үзэх"}<ArrowRight size={17} /></Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="kakumi-card group min-h-[280px] rounded-[1.25rem] border border-[#24221F]/15 bg-[#FFF9F0] p-7 shadow-[0_10px_25px_rgba(36,34,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF233C] hover:shadow-[0_18px_34px_rgba(36,34,31,0.14)] sm:p-8">
                <CheckCircle2 className="text-[#EF233C]" aria-hidden="true" size={27} />
                <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#EF233C]">01 / {isEnglish ? "Certified" : "Гэрчилгээ"}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{isEnglish ? "HACCP & MNS certified" : "HACCP, MNS гэрчилгээ"}</h3>
                <p className="mt-4 text-sm leading-7 text-[#24221F]/65">{isEnglish ? "International food safety standards guide every stage of our production, from carefully selected ingredients to the roll you enjoy." : "Олон улсын хүнсний аюулгүй байдлын стандарт нь сонгосон орцноос эхлээд таны идэх ороомог хүртэл үйлдвэрлэлийн шат бүрийг чиглүүлдэг."}</p>
              </article>
              <article className="kakumi-card group min-h-[280px] rounded-[1.25rem] border border-[#24221F]/15 bg-[#FFF9F0] p-7 shadow-[0_10px_25px_rgba(36,34,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#00A878] hover:shadow-[0_18px_34px_rgba(36,34,31,0.14)] sm:p-8">
                <Snowflake className="text-[#00A878]" aria-hidden="true" size={27} />
                <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#00A878]">02 / {isEnglish ? "Freshness" : "Шинэлэг"}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{isEnglish ? "-30°C deep frozen" : "-30°C гүн хөлдөөлт"}</h3>
                <p className="mt-4 text-sm leading-7 text-[#24221F]/65">{isEnglish ? "Rapid deep freezing locks in the appearance, nutrition, and original freshness of every product until it reaches your hands." : "Хормын төдийд -30°C хэмд гүн хөлдөөх технологи нь бүтээгдэхүүний өнгө төрх, шим тэжээл, анхны шинэлэг байдлыг таны гарт хүрэх хүртэл хадгална."}</p>
              </article>
              <article className="kakumi-card group min-h-[280px] rounded-[1.25rem] border border-[#24221F]/15 bg-[#FFF9F0] p-7 shadow-[0_10px_25px_rgba(36,34,31,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#F4C430] hover:shadow-[0_18px_34px_rgba(36,34,31,0.14)] sm:p-8">
                <Wind className="text-[#F4C430]" aria-hidden="true" size={27} />
                <p className="mt-8 font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#B58B00]">03 / {isEnglish ? "Precision" : "Нарийвчлал"}</p>
                <h3 className="mt-3 text-2xl font-black leading-tight">{isEnglish ? "Cleanroom technology" : "Cleanroom технологи"}</h3>
                <p className="mt-4 text-sm leading-7 text-[#24221F]/65">{isEnglish ? "A 99.9% contamination-free environment and precise air and bacteria controls bring a clean standard to every Kakumi Roll." : "99.9% бохирдолгүй орчин, агаар болон бактерийн нарийн хяналт нь Какүми ороомог бүрд цэвэр, найдвартай стандартыг авчирна."}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#24221F]/15 bg-[#00A878] px-5 py-14 text-[#F3EEE5] sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div><p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F3EEE5]/75">{isEnglish ? "Made in Mongolia" : "Монголд үйлдвэрлэв"}</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">{isEnglish ? "Six flavors. One fresh feeling." : "Зургаан амт. Нэг шинэхэн мэдрэмж."}</h2></div>
          <Link href="/menu" className="inline-flex items-center gap-2 bg-[#FFF9F0] px-5 py-3 text-sm font-bold text-[#00A878] transition-colors hover:bg-[#24221F] hover:text-[#FFF9F0]">{isEnglish ? "View the menu" : "Цэс үзэх"}<ArrowRight size={18} /></Link>
        </div>
      </section>
      <SiteFooter />
      </main>
    </ViewTransition>
  );
}
