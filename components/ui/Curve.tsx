import { cn } from "@/lib/utils";

/**
 * Organic section edges. Each variant is a different curve so transitions
 * feel related without repeating the same wave.
 */
const paths = {
  // light → navy (top of dark section)
  "into-dark-a": {
    fill: "M0 0 H1440 V40 C 1250 110 1060 120 860 80 C 640 36 420 20 220 70 C 120 95 50 110 0 112Z",
    line: "M0 112 C 50 110 120 95 220 70 C 420 20 640 36 860 80 C 1060 120 1250 110 1440 40",
  },
  "into-dark-b": {
    fill: "M0 0 H1440 V96 C 1340 70 1240 120 1080 128 C 880 138 700 60 500 54 C 320 48 160 110 0 70Z",
    line: "M0 70 C 160 110 320 48 500 54 C 700 60 880 138 1080 128 C 1240 120 1340 70 1440 96",
  },
  "into-dark-c": {
    fill: "M0 0 H1440 V70 C 1280 120 1100 60 900 80 C 680 102 520 130 300 100 C 170 82 80 50 0 60Z",
    line: "M0 60 C 80 50 170 82 300 100 C 520 130 680 102 900 80 C 1100 60 1280 120 1440 70",
  },
  // navy → light (bottom of dark section)
  "out-of-dark-a": {
    fill: "M0 140 H1440 V60 C 1300 20 1140 10 960 50 C 760 96 560 120 360 92 C 200 70 90 70 0 90Z",
    line: "M0 90 C 90 70 200 70 360 92 C 560 120 760 96 960 50 C 1140 10 1300 20 1440 60",
  },
  "out-of-dark-b": {
    fill: "M0 140 H1440 V50 C 1200 110 980 120 760 90 C 520 58 280 40 0 86Z",
    line: "M0 86 C 280 40 520 58 760 90 C 980 120 1200 110 1440 50",
  },
} as const;

export function Curve({
  variant,
  position,
  lineClass = "stroke-brand-orange/80",
  fillClass = "fill-canvas",
  className,
}: {
  variant: keyof typeof paths;
  position: "top" | "bottom";
  lineClass?: string;
  fillClass?: string;
  className?: string;
}) {
  const p = paths[variant];
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 140"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute left-0 z-[1] h-[70px] w-full md:h-[140px]",
        position === "top" ? "-top-px" : "-bottom-px",
        className,
      )}
    >
      <path d={p.fill} className={fillClass} />
      <path d={p.line} className={cn("fill-none", lineClass)} strokeWidth={2} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
