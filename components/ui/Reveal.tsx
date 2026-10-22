"use client";

import { useEffect, useRef } from "react";
import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number };

/**
 * Fades content upward when it scrolls into view.
 *
 * SSR renders the element fully visible (no opacity:0 inline style) so
 * Google's renderer indexes the content. After hydration, JavaScript hides
 * the element and re-reveals it via IntersectionObserver — progressive
 * enhancement: content is always accessible, animation is a bonus.
 */
export function Reveal({ delay = 0, y = 28, children, style, ...rest }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Apply initial hidden state only after JS hydrates (not in SSR HTML)
    el.style.opacity = "0";
    el.style.transform = `translateY(${y}px)`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.style.transition = `opacity 0.9s cubic-bezier(0.22,0.8,0.24,1) ${delay}s, transform 0.9s cubic-bezier(0.22,0.8,0.24,1) ${delay}s`;
        el.style.opacity = "1";
        el.style.transform = "none";
        obs.disconnect();
      },
      { rootMargin: "0px 0px -60px 0px" },
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
