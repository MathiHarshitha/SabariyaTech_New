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
  indigo: {
    badge: "from-[#8C7CF5] to-brand-indigo shadow-[0_12px_22px_-10px_#5B5BE6]",
    soft: "bg-brand-indigo/10 text-brand-indigo",
    text: "text-brand-indigo",
    tint: "#EEEDFC",
    dot: "bg-brand-indigo",
    glow: "rgb(91 91 230 / 0.18)",
  },
  red: {
    badge: "from-[#FF7B5C] to-brand-red shadow-[0_12px_22px_-10px_#F04432]",
    soft: "bg-brand-red/10 text-brand-red",
    text: "text-brand-red",
    tint: "#FDECE9",
    dot: "bg-brand-red",
    glow: "rgb(240 68 50 / 0.18)",
  },
};
