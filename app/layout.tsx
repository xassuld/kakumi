import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kakumi | Шинэ амт. Өдөр бүр.",
  description: "Какүми ороомог: шинэхэн орц, найдвартай үйлдвэрлэл, Монголд үйлдвэрлэв.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="mn">
      <body><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  );
}
