"use client";

import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import {
  CheckCircle2,
  Gauge,
  Snowflake,
  Wind,
} from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { MobileNav } from "@/components/MobileNav";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";

const standards = [
  {
    icon: CheckCircle2,
    title: "ХЯНАЛТТАЙ ҮЙЛДВЭРЛЭЛ — НАЙДВАРТАЙ БҮТЭЭГДЭХҮҮН.",
    text: "Үйлдвэрлэлийн шат бүрд мөрдөгдөх хариуцлагатай хяналт нь таны сонгож буй чанарын гол баталгаа юм. Жижиг деталь бүрийг анхаарч, олон улсын стандартыг чанд хадгалах нь бидний өдөр тутмын зарчим билээ.",
  },
  {
    icon: Snowflake,
    title: "-30°C ГҮН ХӨЛДӨӨЛТ — ШИНЭЛЭГ ЧАНАРЫГ ТҮГЖДЭГ.",
    text: "Хормын төдийд -30°C хэмд гүн хөлдөөх технологи нь бүтээгдэхүүний өнгө төрх, шим тэжээл, анхны шинэлэг байдлыг яг хэвээр нь хадгалдаг.",
  },
  {
    icon: Gauge,
    title: "НАРИЙВЧЛАЛ ИТГЭЛИЙГ ТӨРҮҮЛДЭГ.",
    text: "Тогтвортой чанар бол тохиолдлын зүйл биш юм. Хэмжилт бүр, шалгалт бүрийн цаана хэрэглэгчийн эрүүл, аюулгүй байдлыг хангах хариуцлагатай тогтолцоо оршдог.",
  },
  {
    icon: Wind,
    title: "CLEANROOM TECHNOLOGY — ДЭЛХИЙН СТАНДАРТ.",
    text: "99.9% бохирдолгүй Cleanroom орчин, агаар болон бактерийн нарийн хяналт, олон улсын стандартыг бүрэн хангасан үйлдвэрлэлээр бид таны итгэлийг бүтээж байна.",
  },
];

const englishStandards = [
  { icon: CheckCircle2, title: "CONTROLLED PRODUCTION — A TRUSTED PRODUCT.", text: "Responsible control at every stage of production is the foundation of the quality you choose. Attention to every detail and strict international standards guide us every day." },
  { icon: Snowflake, title: "-30°C DEEP FREEZING — LOCKING IN FRESHNESS.", text: "Rapid deep freezing at -30°C preserves the product's appearance, nutrition, and original freshness exactly as they were made." },
  { icon: Gauge, title: "PRECISION BUILDS TRUST.", text: "Consistent quality is never accidental. Behind every measurement and inspection is a responsible system built around your health and safety." },
  { icon: Wind, title: "CLEANROOM TECHNOLOGY — A GLOBAL STANDARD.", text: "With a 99.9% contamination-free Cleanroom environment, precise air and bacteria controls, and international standards, we build your trust through every product." },
];

export default function AboutPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";
  const currentStandards = isEnglish ? englishStandards : standards;

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
            <Link href="/about" className="text-[#EF233C] transition-colors hover:text-[#00A878]">{isEnglish ? "About us" : "Бидний тухай"}</Link>
            <Link href="/contact" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Contact" : "Холбоо барих"}</Link>
            <Link href="/login" className="transition-colors hover:text-[#00A878]">{isEnglish ? "Sign in" : "Нэвтрэх"}</Link>
            <LanguageToggle />
          </nav>
          <MobileNav />
        </div>
      </header>

      <section className="kakumi-rise border-b-4 border-[#F4C430] bg-[#24221F] px-5 py-14 text-[#F3EEE5] sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:gap-16">
          <div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl">{isEnglish ? "A NAME BORN FROM REVOLUTION." : "ХУВЬСГАЛААС ҮҮДЭЛТЭЙ НЭР."}</h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#F3EEE5]/75">
              {isEnglish ? "The KAKUMI name is inspired by the Japanese word Kakumei, meaning revolution. It represents our vision to create a new standard, new thinking, and new value in Mongolia's food culture." : "KAKUMI брэндийн нэр нь япон хэлний “Kakumei” буюу “хувьсгал” гэсэн утгатай үгээс санаа авч бүтээгдсэн юм. Энэ бол Монголын хүнсний салбарт шинэ стандарт, шинэ сэтгэлгээ, хооллох соёлын шинэ үнэ цэнийг бий болгох гэж зорьж буй бидний алсын хараа, тэмүүлэл билээ."}
            </p>
            <p className="mt-5 max-w-3xl text-base font-bold leading-8 text-[#F3EEE5]">{isEnglish ? "KAKUMI — leading you into a world of imagination." : "KAKUMI — Төсөөллийн ертөнц рүү хөтөлнө."}</p>
          </div>
          <div className="border-r-4 border-[#F4C430] pr-5 text-right sm:pr-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F4C430]">Kakumei</p>
            <p className="mt-3 text-[7rem] font-black leading-[0.8] tracking-[-0.08em] text-[#F4C430] sm:text-[10rem]">革命</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">{isEnglish ? "Our standard" : "Бидний стандарт"}</p>
            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">{isEnglish ? "Creating quality you can trust every day, here at home." : "Өдөр тутамдаа итгэж болох чанарыг эх орондоо бүтээнэ."}</h2>
          </div>
          <div className="space-y-8 text-base leading-8 text-[#24221F]/70">
            {isEnglish ? <><p>Bringing world-class standards home and taking Mongolian food culture to a new level is the path ahead.</p><p>Through international food safety and a precise modern production system, we create quality you can trust every day, right here in Mongolia.</p><p>We bring new value and an exceptional feeling to your everyday life.</p></> : <><p>Дэлхийн түвшний стандартыг эх орондоо нэвтрүүлж, монгол хүнсний соёлд шинэ түвшин авчрах нь бидний урагшлах зам билээ.</p><p>Олон улсын хүнсний аюулгүй байдал, орчин үеийн үйлдвэрлэлийн нарийн тогтолцоогоор өдөр тутамдаа итгэж болох чанарыг бид эх орондоо бүтээж байна.</p><p>Өдөр тутмын амьдралд тань шинэ үнэ цэнэ, онцгой мэдрэмжийг бэлэглэнэ.</p></>}
          </div>
        </div>

        <div className="mt-20 grid gap-px border border-[#24221F]/15 bg-[#24221F]/15 sm:grid-cols-2">
          {currentStandards.map(({ icon: Icon, title, text }) => (
            <article key={title} className="kakumi-card bg-[#FFF9F0] p-6 sm:p-8">
              <Icon className="text-[#EF233C]" aria-hidden="true" size={28} />
              <h3 className="mt-7 max-w-sm text-xl font-black leading-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#24221F]/65">{text}</p>
            </article>
          ))}
        </div>

        <section className="mt-20 border-l-8 border-[#EF233C] bg-[#FFF9F0] pl-5 sm:pl-8">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">{isEnglish ? "About us · 02" : "Бидний тухай · 02"}</p>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">{isEnglish ? "Healthy, safe, quality products." : "Эрүүл, аюулгүй, чанартай бүтээгдэхүүн."}</h2>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#24221F]/70 sm:text-lg">
            {isEnglish ? "Kakumi has successfully received HACCP and MNS 7032:2024 food safety conformity certifications. At our Nalaikh factory, we are keeping our promise to bring the healthiest, safest, highest-quality products to your table." : "Какүми брэнд HACCP болон MNS 7032:2024 олон улсын хүнсний аюулгүй байдлын тохирлын гэрчилгээгээ амжилттай хүлээн авлаа. Бид Налайх дахь үйлдвэртээ хамгийн эрүүл, аюулгүй, чанартай бүтээгдэхүүнийг таны ширээнд хүргэх амлалтаа биелүүлж байна."}
          </p>
        </section>

      </section>
      <SiteFooter />
      </main>
    </ViewTransition>
  );
}
