"use client";

import Link from "next/link";
import { ArrowLeft, LockKeyhole } from "lucide-react";
import { FormEvent } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/LanguageProvider";
import { SiteFooter } from "@/components/SiteFooter";

export default function LoginPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main className="min-h-screen bg-white text-[#24221F]">
      <header className="border-b border-[#24221F]/15 bg-[#FFF9F0]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <Link href="/" aria-label="Kakumi нүүр хуудас" className="transition-opacity hover:opacity-80">
            <span className="text-2xl font-black tracking-[-0.08em] text-[#EF233C]">KAKUMI<span className="text-[#00A878]">.</span></span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
          </div>
        </div>
      </header>

      <section className="mx-auto grid min-h-[calc(100vh-81px)] max-w-7xl items-center px-5 py-12 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="hidden min-h-[520px] flex-col justify-between bg-[#EF233C] p-8 text-[#F3EEE5] lg:flex lg:p-12">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F3EEE5]/75">Kakumi · Member space</p>
          <div>
            <p className="text-6xl font-black leading-[0.9] tracking-[-0.05em]">{isEnglish ? "Good taste is worth coming back to." : "Сайхан амт руугаа дахин ирээрэй."}</p>
            <p className="mt-6 max-w-sm leading-7 text-[#F3EEE5]/80">{isEnglish ? "Save your favorites and stay close to every new Kakumi flavor." : "Дуртай амтаа хадгалж, Какүмигийн шинэ амт бүртэй ойр байгаарай."}</p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:px-16">
          <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-[#24221F]/60 transition-colors hover:text-[#00A878]"><ArrowLeft size={16} /> {isEnglish ? "Back home" : "Нүүр хуудас руу"}</Link>
          <LockKeyhole className="text-[#EF233C]" aria-hidden="true" size={28} />
          <p className="mt-6 font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#EF233C]">{isEnglish ? "Welcome back" : "Тавтай морил"}</p>
          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-5xl">{isEnglish ? "Sign in to Kakumi." : "Kakumi-д нэвтрэх."}</h1>
          <p className="mt-4 leading-7 text-[#24221F]/65">{isEnglish ? "Enter your details to continue." : "Үргэлжлүүлэхийн тулд мэдээллээ оруулна уу."}</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-bold">
              {isEnglish ? "Email address" : "Имэйл хаяг"}
              <input name="email" type="email" required autoComplete="email" className="mt-2 h-12 w-full border border-[#24221F]/20 bg-[#FFF9F0] px-4 outline-none transition-colors focus:border-[#00A878]" placeholder="you@example.com" />
            </label>
            <label className="block text-sm font-bold">
              {isEnglish ? "Password" : "Нууц үг"}
              <input name="password" type="password" required autoComplete="current-password" className="mt-2 h-12 w-full border border-[#24221F]/20 bg-[#FFF9F0] px-4 outline-none transition-colors focus:border-[#00A878]" placeholder="••••••••" />
            </label>
            <button type="submit" className="h-12 w-full bg-[#EF233C] text-sm font-bold text-[#F3EEE5] transition-colors hover:bg-[#00A878]">{isEnglish ? "Sign in" : "Нэвтрэх"}</button>
          </form>
          <p className="mt-8 text-center text-sm text-[#24221F]/60">{isEnglish ? "New to Kakumi?" : "Kakumi-д анх удаа ирж байна уу?"} <Link href="/contact" className="font-bold text-[#EF233C] hover:text-[#00A878]">{isEnglish ? "Contact us" : "Холбоо барих"}</Link></p>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
