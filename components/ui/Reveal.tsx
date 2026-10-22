import type { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement> & { delay?: number; y?: number };

// No animation — content is always visible for Google and all users.
export function Reveal({ delay: _delay, y: _y, children, style, ...rest }: Props) {
  return (
    <div style={style} {...rest}>
      {children}
    </div>
  );
}
