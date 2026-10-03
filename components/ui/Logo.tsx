import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 40, priority }: { className?: string; size?: number; priority?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image src="/brand/logo-mark.png" alt="" width={size} height={size} priority={priority} className="object-contain" />
      <span className="font-display text-[21px] font-bold tracking-[-0.03em]">
        <span className="text-gradient-warm">Sabariya</span>
        <span className="text-gradient-cool">Tech</span>
      </span>
    </span>
  );
}
