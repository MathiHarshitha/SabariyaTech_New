import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, size = 44, priority }: { className?: string; size?: number; priority?: boolean }) {
  return (
    <Image
      src="/Logo.svg"
      alt="SabariyaTech"
      width={Math.round(size * 3)}
      height={size}
      priority={priority}
      className={cn("object-contain", className)}
    />
  );
}
