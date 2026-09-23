import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

export type ProductCardProps = {
  number: string;
  mongolianName: string;
  englishName: string;
  headline: string;
  description: string;
  icon: LucideIcon;
  accentClassName: string;
};

export function ProductCard({
  number,
  mongolianName,
  englishName,
  headline,
  description,
  icon: Icon,
  accentClassName,
}: ProductCardProps) {
  return (
    <article className="kakumi-card group flex h-full flex-col border border-[#24221F]/15 bg-[#FFF9F0] transition-all duration-300 hover:-translate-y-1 hover:border-[#EF233C] hover:shadow-[0_18px_34px_rgba(36,34,31,0.14)]">
      <div className={`relative flex aspect-[4/3] items-end overflow-hidden p-5 ${accentClassName}`}>
        <div className="absolute inset-x-0 top-0 h-1 bg-[#FFF9F0]/70" />
        <div className="absolute right-5 top-5 font-mono text-xs font-bold text-[#F3EEE5]/80">{number}</div>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 text-[#F3EEE5]/85 transition-transform duration-300 group-hover:scale-110">
          <Icon aria-hidden="true" size={88} strokeWidth={0.8} />
        </div>
        <div className="relative max-w-[75%] text-[#F3EEE5]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#F3EEE5]/75">KAKUMI ROLL</p>
          <p className="mt-2 text-2xl font-black leading-none tracking-tight">{mongolianName}</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col border-t border-[#24221F]/15 p-5">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#EF233C]">{englishName}</p>
        <h3 className="mt-3 text-xl font-black leading-tight tracking-tight text-[#24221F]">{headline}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#24221F]/70">{description}</p>
        <a
          href="/contact"
          className="mt-5 inline-flex w-fit items-center gap-2 border-b border-[#24221F]/30 pb-1 text-xs font-bold uppercase tracking-[0.12em] text-[#24221F] transition-colors hover:border-[#EF233C] hover:text-[#EF233C]"
        >
          Дэлгэрэнгүй
          <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}
