"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { EASE } from "@/lib/utils";

type Props = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Fades content upward the first time it scrolls into view. */
export function Reveal({ delay = 0, y = 28, children, ...rest }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
