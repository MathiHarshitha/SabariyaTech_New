import type { HTMLAttributes, CSSProperties } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number };

/**
 * Fades + slides content up on page load using a pure CSS animation.
 * No JavaScript required — Google indexes content immediately.
 * Reuses the hero-rise @keyframes defined in globals.css.
 */
export function Reveal({ delay = 0, children, style, ...rest }: Props) {
  const animStyle: CSSProperties = {
    animation: `hero-rise 0.8s cubic-bezier(0.22,0.8,0.24,1) ${delay}s both`,
    ...style,
  };
  return (
    <div style={animStyle} {...rest}>
      {children}
    </div>
  );
}
