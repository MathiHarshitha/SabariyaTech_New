"use client";

import Image from "next/image";
import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import {
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Interactive section backgrounds. Every variant reacts to the mouse through
 * the same smoothed pointer (0–1 across the section) but draws something
 * different, so no two sections move alike. Pointer tracking only runs while
 * the section is on screen and is skipped for touch and reduced motion; the
 * slow CSS drift keeps things alive without a mouse.
 */
export type BackdropVariant =
  | "aurora"
  | "sheen"
  | "grid"
  | "orbs"
  | "ribbons"
  | "mist"
  | "constellation"
  | "rings"
  | "mesh"
  | "plane"
  | "beams"
  | "magnet";

type Layer = { x: MotionValue<number>; y: MotionValue<number>; live: boolean };

const clamp = (v: number) => Math.min(1.15, Math.max(-0.15, v));

function usePointer(ref: RefObject<HTMLDivElement | null>, active: boolean) {
  const rawX = useMotionValue(0.5);
  const rawY = useMotionValue(0.5);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    let last: PointerEvent | null = null;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el || !last) return;
      const r = el.getBoundingClientRect();
      if (!r.width || !r.height) return;
      rawX.set(clamp((last.clientX - r.left) / r.width));
      rawY.set(clamp((last.clientY - r.top) / r.height));
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      last = e;
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [active, ref, rawX, rawY]);

  const spring = { stiffness: 55, damping: 20, mass: 0.9 };
  return { x: useSpring(rawX, spring), y: useSpring(rawY, spring) };
}

/** Maps the 0–1 pointer to a pixel offset of ±range around the centre. */
const useShift = (v: MotionValue<number>, range: number) => useTransform(v, [0, 1], [-range, range]);
const usePct = (v: MotionValue<number>) => useTransform(v, (n) => n * 100);

/* ---------- Hero: two aurora glows pulled apart by the cursor + a lit dot field ---------- */
function Aurora({ x, y }: Layer) {
  const ax = useShift(x, 70), ay = useShift(y, 45);
  const bx = useShift(x, -60), by = useShift(y, -40);
  const px = usePct(x), py = usePct(y);
  const mask = useMotionTemplate`radial-gradient(280px circle at ${px}% ${py}%, #000 0%, transparent 70%)`;
  return (
    <>
      <motion.div style={{ x: ax, y: ay }} className="absolute -left-40 top-10 size-[520px] animate-drift-a rounded-full bg-brand-amber/25 blur-[120px] will-change-transform" />
      <motion.div style={{ x: bx, y: by }} className="absolute -right-40 top-40 size-[520px] animate-drift-b rounded-full bg-brand-cyan/25 blur-[120px] will-change-transform" />
      <motion.div
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="absolute inset-0 bg-[radial-gradient(rgb(8_120_232/0.45)_1.4px,transparent_1.4px)] [background-size:24px_24px]"
      />
    </>
  );
}

/* ---------- Trust strip: warm and cool tints that trade places with the cursor ---------- */
function Sheen({ x, y }: Layer) {
  const px = usePct(x), py = usePct(y);
  const qx = useTransform(px, (n) => 100 - n);
  const bg = useMotionTemplate`radial-gradient(380px circle at ${px}% ${py}%, rgb(255 157 24 / 0.16), transparent 65%), radial-gradient(420px circle at ${qx}% 50%, rgb(17 189 235 / 0.14), transparent 65%)`;
  return (
    <>
      <motion.div style={{ backgroundImage: bg }} className="absolute inset-0" />
      <div className="absolute inset-y-0 -left-1/4 w-1/3 animate-sweep bg-[linear-gradient(105deg,transparent,rgb(8_120_232/0.06),transparent)]" />
    </>
  );
}

/* ---------- Services: blueprint grid revealed under a cursor torch ---------- */
function Grid({ x, y }: Layer) {
  const px = usePct(x), py = usePct(y);
  const gx = useShift(x, 14), gy = useShift(y, 14);
  const mask = useMotionTemplate`radial-gradient(340px circle at ${px}% ${py}%, #000 0%, transparent 72%)`;
  const glow = useMotionTemplate`radial-gradient(520px circle at ${px}% ${py}%, rgb(8 120 232 / 0.08), transparent 70%)`;
  const lines =
    "bg-[linear-gradient(rgb(8_120_232/0.14)_1px,transparent_1px),linear-gradient(90deg,rgb(8_120_232/0.14)_1px,transparent_1px)] [background-size:56px_56px]";
  return (
    <>
      <motion.div style={{ backgroundImage: glow }} className="absolute inset-0" />
      <motion.div style={{ x: gx, y: gy }} className={cn("absolute -inset-8 opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000_10%,transparent_70%)]", lines)} />
      <motion.div style={{ x: gx, y: gy, maskImage: mask, WebkitMaskImage: mask }} className={cn("absolute -inset-8", lines)} />
    </>
  );
}

/* ---------- Products (dark): depth-layered orbs and sparks with parallax ---------- */
const SPARKS = [
  { l: "12%", t: "22%", d: 1 }, { l: "28%", t: "70%", d: 2 }, { l: "46%", t: "14%", d: 3 },
  { l: "62%", t: "82%", d: 1 }, { l: "78%", t: "30%", d: 2 }, { l: "90%", t: "64%", d: 3 },
  { l: "36%", t: "42%", d: 2 }, { l: "70%", t: "52%", d: 1 },
];
function Orbs({ x, y }: Layer) {
  const near = { x: useShift(x, -80), y: useShift(y, -60) };
  const mid = { x: useShift(x, 40), y: useShift(y, 30) };
  const far = { x: useShift(x, 18), y: useShift(y, 14) };
  const depth = [far, mid, near];
  return (
    <>
      <motion.div style={near} className="absolute -right-40 top-1/4 size-[520px] animate-drift-a rounded-full bg-brand-blue/20 blur-[110px]" />
      <motion.div style={mid} className="absolute -left-32 bottom-0 size-[420px] animate-drift-b rounded-full bg-brand-cyan/[0.12] blur-[100px]" />
      <motion.div style={far} className="absolute left-1/3 top-10 size-[260px] rounded-full bg-brand-orange/10 blur-[90px]" />
      {SPARKS.map((s, i) => (
        <motion.span key={i} style={{ left: s.l, top: s.t, ...depth[s.d - 1] }} className="absolute">
          <span
            className="block animate-float rounded-full bg-brand-cyan shadow-[0_0_12px_2px_rgb(17_189_235/0.6)]"
            style={{ width: 2 + s.d, height: 2 + s.d, animationDelay: `${i * 0.7}s` }}
          />
        </motion.span>
      ))}
    </>
  );
}

/* ---------- Work: flowing ribbons that lean toward the cursor ---------- */
const RIBBONS = [
  { d: "M-50 260 C 250 160 450 360 720 250 S 1200 140 1500 230", c: "#FF6A00", o: 0.22, k: 1 },
  { d: "M-50 330 C 300 230 520 430 760 320 S 1180 220 1500 300", c: "#0878E8", o: 0.18, k: 0.6 },
  { d: "M-50 400 C 280 330 560 480 820 380 S 1200 300 1500 380", c: "#11BDEB", o: 0.2, k: 0.35 },
  { d: "M-50 190 C 260 120 520 280 760 190 S 1200 90 1500 170", c: "#FF9D18", o: 0.14, k: 0.8 },
];
function Ribbon({ d, c, o, k, ty }: (typeof RIBBONS)[number] & { ty: MotionValue<number> }) {
  const y = useTransform(ty, (n) => n * k);
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={c}
      strokeOpacity={o}
      strokeWidth={1.6}
      strokeDasharray="6 10"
      vectorEffect="non-scaling-stroke"
      style={{ y }}
      className="animate-dash"
    />
  );
}
function Ribbons({ x, y }: Layer) {
  const rotate = useShift(x, 4);
  const ty = useShift(y, 40);
  return (
    <motion.svg
      viewBox="0 0 1440 560"
      preserveAspectRatio="none"
      style={{ rotate }}
      className="absolute inset-x-[-5%] top-[10%] h-[80%] w-[110%] [mask-image:linear-gradient(90deg,transparent,#000_15%,#000_85%,transparent)]"
    >
      {RIBBONS.map((r, i) => (
        <Ribbon key={i} {...r} ty={ty} />
      ))}
    </motion.svg>
  );
}

/* ---------- Process: misty photo parallax with a warm lantern glow ---------- */
function Mist({ x, y }: Layer) {
  const ix = useShift(x, -24), iy = useShift(y, -16);
  const px = usePct(x), py = usePct(y);
  const glow = useMotionTemplate`radial-gradient(460px circle at ${px}% ${py}%, rgb(255 157 24 / 0.14), transparent 70%)`;
  return (
    <>
      <motion.div style={{ x: ix, y: iy }} className="absolute -inset-8">
        <Image src="/images/process-mist.jpg" alt="" fill sizes="100vw" className="object-cover opacity-20 saturate-[0.6]" />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--color-canvas)_0%,rgb(247_248_250/0.7)_40%,rgb(247_248_250/0.85)_100%)]" />
      <motion.div style={{ backgroundImage: glow }} className="absolute inset-0" />
    </>
  );
}

/* ---------- Tech stack (dark): particle network that links up to the cursor ---------- */
function Constellation({ x, y, live }: Layer) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let w = 0, h = 0, raf = 0;
    let pts: { x: number; y: number; vx: number; vy: number }[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(70, Math.round((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = x.get() * w, cy = y.get() * h;
      for (const p of pts) {
        if (live) {
          p.x = (p.x + p.vx + w) % w;
          p.y = (p.y + p.vy + h) % h;
        }
        const dx = cx - p.x, dy = cy - p.y, dist = Math.hypot(dx, dy);
        if (live && dist < 180 && dist > 1) {
          p.x += (dx / dist) * 0.35;
          p.y += (dy / dist) * 0.35;
        }
      }
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.strokeStyle = `rgba(8,120,232,${0.22 * (1 - d / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const dc = Math.hypot(a.x - cx, a.y - cy);
        if (live && dc < 200) {
          ctx.strokeStyle = `rgba(17,189,235,${0.45 * (1 - dc / 200)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(cx, cy);
          ctx.stroke();
        }
        ctx.fillStyle = dc < 200 ? "rgba(17,189,235,0.9)" : "rgba(255,255,255,0.35)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, dc < 200 ? 1.8 : 1.3, 0, Math.PI * 2);
        ctx.fill();
      }
      if (live) raf = requestAnimationFrame(draw);
    };

    resize();
    const ro = new ResizeObserver(() => {
      resize();
      if (!live) draw();
    });
    ro.observe(canvas);
    draw();
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [live, x, y]);

  return <canvas ref={canvasRef} className="absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_center,#000_40%,transparent_85%)]" />;
}

/* ---------- Why us: ripples that radiate from wherever the cursor rests ---------- */
function Rings({ x, y }: Layer) {
  const left = useTransform(usePct(x), (n) => `${n}%`);
  const top = useTransform(usePct(y), (n) => `${n}%`);
  return (
    <motion.div style={{ left, top }} className="absolute size-0">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={cn(
            "absolute left-1/2 top-1/2 size-[520px] -translate-x-1/2 -translate-y-1/2 animate-ripple rounded-full border",
            i % 2 ? "border-brand-blue/15" : "border-brand-orange/15",
          )}
          style={{ animationDelay: `${i * 1.5}s` }}
        />
      ))}
      <span className="absolute left-1/2 top-1/2 size-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-amber/10 blur-[90px]" />
    </motion.div>
  );
}

/* ---------- Team: slowly turning colour disc that trails the cursor ---------- */
function Mesh({ x, y }: Layer) {
  const left = useTransform(usePct(x), (n) => `${20 + n * 0.6}%`);
  const top = useTransform(usePct(y), (n) => `${20 + n * 0.6}%`);
  const tilt = useShift(x, 30);
  return (
    <motion.div style={{ left, top, rotate: tilt }} className="absolute size-0">
      <div className="absolute left-1/2 top-1/2 size-[640px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,rgb(255_106_0/0.18),rgb(17_189_235/0.16),rgb(8_120_232/0.14),rgb(255_157_24/0.18),rgb(255_106_0/0.18))] opacity-80 blur-[90px]" />
    </motion.div>
  );
}

/* ---------- Testimonials: a dotted floor that tilts under the cursor ---------- */
function Plane({ x, y }: Layer) {
  const rotateX = useTransform(y, [0, 1], [64, 54]);
  const rotateZ = useShift(x, 10);
  return (
    <div className="absolute inset-x-0 bottom-0 h-[70%] [perspective:900px] [mask-image:linear-gradient(180deg,transparent,#000_45%,#000_80%,transparent)]">
      <motion.div
        style={{ rotateX, rotateZ }}
        className="absolute -inset-x-1/2 -bottom-1/2 top-0 origin-bottom animate-plane bg-[radial-gradient(rgb(8_120_232/0.35)_1.5px,transparent_1.5px)] [background-size:48px_48px]"
      />
    </div>
  );
}

/* ---------- Insights: soft light beams that swing with the cursor ---------- */
function Beams({ x, y }: Layer) {
  const rotate = useShift(x, 10);
  const ty = useShift(y, 30);
  return (
    <motion.div style={{ rotate, y: ty }} className="absolute -inset-x-1/4 -top-1/4 h-[150%] origin-top">
      {[
        { l: "22%", c: "bg-brand-amber/[0.14]", w: "w-40", d: "0s" },
        { l: "48%", c: "bg-brand-blue/10", w: "w-56", d: "-5s" },
        { l: "72%", c: "bg-brand-cyan/[0.12]", w: "w-32", d: "-9s" },
      ].map((b) => (
        <span
          key={b.l}
          style={{ left: b.l, animationDelay: b.d }}
          className={cn("absolute top-0 h-full -skew-x-[18deg] animate-sweep blur-[50px]", b.c, b.w)}
        />
      ))}
    </motion.div>
  );
}

/* ---------- Final CTA (dark): glows magnetised to the cursor + a lit dot field ---------- */
function Magnet({ x, y }: Layer) {
  const ox = useSpring(useShift(x, 220), { stiffness: 40, damping: 18 });
  const oy = useSpring(useShift(y, 160), { stiffness: 40, damping: 18 });
  const bx = useShift(x, -160), by = useShift(y, -120);
  const px = usePct(x), py = usePct(y);
  const mask = useMotionTemplate`radial-gradient(240px circle at ${px}% ${py}%, #000 0%, transparent 75%)`;
  return (
    <>
      <motion.div style={{ x: ox, y: oy }} className="absolute -bottom-40 -left-32 size-[560px] rounded-full bg-brand-orange/25 blur-[130px]" />
      <motion.div style={{ x: bx, y: by }} className="absolute -right-32 -top-40 size-[560px] rounded-full bg-brand-blue/30 blur-[130px]" />
      <motion.div
        style={{ maskImage: mask, WebkitMaskImage: mask }}
        className="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.28)_1.2px,transparent_1.2px)] [background-size:22px_22px]"
      />
    </>
  );
}

const variants: Record<BackdropVariant, (p: Layer) => ReactNode> = {
  aurora: Aurora,
  sheen: Sheen,
  grid: Grid,
  orbs: Orbs,
  ribbons: Ribbons,
  mist: Mist,
  constellation: Constellation,
  rings: Rings,
  mesh: Mesh,
  plane: Plane,
  beams: Beams,
  magnet: Magnet,
};

export function SectionBackdrop({
  variant,
  className,
  children,
}: {
  variant: BackdropVariant;
  className?: string;
  /** Static layers drawn underneath the animated ones. */
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "120px" });
  const reduce = useReducedMotion();
  const live = inView && !reduce;
  const { x, y } = usePointer(ref, live);
  const Variant = variants[variant];

  return (
    <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}>
      {children}
      <Variant x={x} y={y} live={live} />
    </div>
  );
}
