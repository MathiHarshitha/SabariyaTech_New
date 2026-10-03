import type { LucideIcon } from "lucide-react";
import { accents, type Accent } from "@/lib/accents";
import { cn } from "@/lib/utils";

/** Tactile "clay" icon tile in one of the brand accents. */
export function IconBadge({ icon: Icon, accent, size = "md", className }: { icon: LucideIcon; accent: Accent; size?: "sm" | "md"; className?: string }) {
  return (
    <span
      className={cn(
        "grid shrink-0 place-items-center bg-gradient-to-br text-white",
        "[box-shadow:inset_0_2px_1px_rgb(255_255_255/0.35),inset_0_-4px_8px_rgb(0_0_0/0.12)]",
        accents[accent].badge,
        size === "md" ? "size-[54px] rounded-2xl" : "size-11 rounded-[14px]",
        className,
      )}
    >
      <Icon aria-hidden className={size === "md" ? "size-6" : "size-5"} strokeWidth={2} />
    </span>
  );
}
