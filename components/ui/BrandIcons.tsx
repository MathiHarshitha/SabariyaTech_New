import type { SVGProps } from "react";

// Lucide no longer ships brand marks, so these are simple outline equivalents.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <path d="M8 10.5V17M8 7.2v.1M12 17v-3.8c0-1.6 1-2.7 2.4-2.7s2.1 1 2.1 2.7V17M12 10.5V17" />
    </svg>
  );
}

export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.1" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12c0-3 .3-5 .8-5.6.6-.7 2.6-1 8.7-1s8.1.3 8.7 1c.5.6.8 2.6.8 5.6s-.3 5-.8 5.6c-.6.7-2.6 1-8.7 1s-8.1-.3-8.7-1c-.5-.6-.8-2.6-.8-5.6z" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </svg>
  );
}

export const socialIcons = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
};
