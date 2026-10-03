import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, light, className }: { children: ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={cn(
        "mb-5 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.28em]",
        light ? "text-white/75" : "text-navy-900",
        className,
      )}
    >
      <span aria-hidden className="h-0.5 w-7 rounded-full bg-gradient-to-r from-brand-orange to-brand-blue" />
      {children}
    </p>
  );
}

export function H2({ children, className, light, id }: { children: ReactNode; className?: string; light?: boolean; id?: string }) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[clamp(36px,4.3vw,60px)] font-bold leading-[1.04] tracking-[-0.035em]",
        light && "text-white",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function Lead({ children, className, light }: { children: ReactNode; className?: string; light?: boolean }) {
  return (
    <p className={cn("mt-5 max-w-[500px] text-base md:text-lg", light ? "text-[#D6E2F3]/75" : "text-muted", className)}>
      {children}
    </p>
  );
}
