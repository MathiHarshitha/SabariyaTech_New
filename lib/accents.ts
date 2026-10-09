// Full class strings live here so Tailwind can detect them at build time.
export type Accent = "blue" | "orange" | "cyan" | "indigo" | "red";

export const accents: Record<
  Accent,
  { badge: string; soft: string; text: string; tint: string; dot: string; glow: string }
> = {
  blue: {
    badge: "from-[#4FA6FF] to-brand-blue shadow-[0_12px_22px_-10px_#0878E8]",
    soft: "bg-brand-blue/10 text-brand-blue",
    text: "text-brand-blue",
    tint: "#E8F2FE",
    dot: "bg-brand-blue",
    glow: "rgb(8 120 232 / 0.18)",
  },
  orange: {
    badge: "from-brand-amber to-brand-orange shadow-[0_12px_22px_-10px_#FF6A00]",
    soft: "bg-brand-orange/10 text-brand-orange",
    text: "text-brand-orange",
    tint: "#FFF0E4",
    dot: "bg-brand-orange",
    glow: "rgb(255 106 0 / 0.18)",
  },
  cyan: {
    badge: "from-brand-cyan to-[#0AA5C9] shadow-[0_12px_22px_-10px_#0AA5C9]",
    soft: "bg-brand-cyan/15 text-[#0A93B6]",
    text: "text-[#0A93B6]",
    tint: "#E4F7FB",
    dot: "bg-brand-cyan",
    glow: "rgb(17 189 235 / 0.2)",
  },
  // indigo → mapped to brand-blue (logo color)
  indigo: {
    badge: "from-[#4FA6FF] to-brand-blue shadow-[0_12px_22px_-10px_#0878E8]",
    soft: "bg-brand-blue/10 text-brand-blue",
    text: "text-brand-blue",
    tint: "#E8F2FE",
    dot: "bg-brand-blue",
    glow: "rgb(8 120 232 / 0.18)",
  },
  // red → mapped to brand-orange (logo color)
  red: {
    badge: "from-brand-amber to-brand-orange shadow-[0_12px_22px_-10px_#FF6A00]",
    soft: "bg-brand-orange/10 text-brand-orange",
    text: "text-brand-orange",
    tint: "#FFF0E4",
    dot: "bg-brand-orange",
    glow: "rgb(255 106 0 / 0.18)",
  },
};
