"use client";

import { createContext, startTransition, useContext, useEffect, useState } from "react";

export type Language = "mn" | "en";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("mn");
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("kakumi-language");
    if (storedLanguage === "en" || storedLanguage === "mn") {
      startTransition(() => setLanguageState(storedLanguage));
    }
  }, []);

  function setLanguage(language: Language) {
    setLanguageState(language);
    setIsChangingLanguage(true);
    window.localStorage.setItem("kakumi-language", language);
    window.setTimeout(() => setIsChangingLanguage(false), 280);
  }

  return <LanguageContext.Provider value={{ language, setLanguage }}><div className={isChangingLanguage ? "kakumi-language-swap" : ""}>{children}</div></LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}
