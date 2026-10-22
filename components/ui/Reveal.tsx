"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number };

/**
 * Fades + slides content up when it scrolls into view.
 *
 * SSR renders fully visible (no opacity:0 inline style) — Google indexes content.
 * After hydration, JS hides the element with opacity only (NOT transform), so
 * IntersectionObserver can detect the element's real layout position correctly.
 * Once in view, the slide-up transform is applied and animated in.
 */
export function Reveal({ delay = 0, y = 28, children, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Hide with opacity only — no transform here, because transform shifts the
    // element visually and causes IntersectionObserver to think it's off-screen.
    el.style.opacity = "0";
    el.style.pointerEvents = "none";

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();

        // Set the start transform now that we know element is in view
        el.style.transform = `translateY(${y}px)`;

        // Double rAF ensures browser paints the initial state before transition starts
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            el.style.transition = `opacity 0.9s cubic-bezier(0.22,0.8,0.24,1) ${delay}s, transform 0.9s cubic-bezier(0.22,0.8,0.24,1) ${delay}s`;
            el.style.opacity = "1";
            el.style.transform = "none";
            el.style.pointerEvents = "";
          });
        });
      },
      { threshold: 0.01 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, y]);

  return (
    <div ref={ref} style={style} {...rest}>
      {children}
    </div>
  );
}
