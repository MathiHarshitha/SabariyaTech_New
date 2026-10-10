import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "soft" | "glass" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-display font-semibold transition-[transform,box-shadow,background-position,background-color] duration-300 ease-premium hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "text-white bg-[linear-gradient(100deg,var(--color-brand-orange)_0%,var(--color-brand-orange)_45%,var(--color-brand-blue)_100%)] bg-[length:200%_100%] shadow-cta hover:bg-[position:100%_0] hover:shadow-[inset_0_1px_0_rgb(255_255_255/0.28),0_16px_32px_-12px_rgb(255_106_0/0.65)]",
  soft: "bg-white text-navy-900 shadow-clay hover:shadow-lift",
  glass:
    "text-white bg-white/10 border border-white/25 backdrop-blur-md hover:bg-white/15",
  dark: "bg-navy-900 text-white hover:bg-navy-700 shadow-[0_14px_30px_-14px_rgb(7_26_53/0.7)]",
};

const sizes: Record<Size, string> = {
  sm: "h-11 px-5 text-sm rounded-[14px]",
  md: "h-[52px] px-6 text-[15px] rounded-2xl",
  lg: "h-14 px-7 text-[15px] rounded-[18px]",
};

type Props = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  leading?: ReactNode;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href" | "className" | "children">;

export function Button({ href, variant = "primary", size = "md", arrow = true, leading, className, children, ...rest }: Props) {
  const classes = cn(base, variants[variant], sizes[size], leading && "pl-2.5", className);
  const content = (
    <>
      {leading}
      {children}
      {arrow && <ArrowRight aria-hidden className="size-[18px] transition-transform duration-300 ease-premium group-hover/btn:translate-x-1" />}
    </>
  );

  // In-page anchors and mailto links don't need client-side routing.
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}

export function LinkArrow({ href, children, className, light }: { href: string; children: ReactNode; className?: string; light?: boolean }) {
  return (
    <a
      href={href}
      className={cn(
        "group/link inline-flex items-center gap-2 font-display text-sm font-semibold",
        light ? "text-white" : "text-navy-900",
        className,
      )}
    >
      {children}
      <ArrowRight aria-hidden className="size-4 text-brand-orange transition-transform duration-300 ease-premium group-hover/link:translate-x-1" />
    </a>
  );
}
