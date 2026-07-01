import React from 'react';

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

const base = (children: React.ReactNode, size = 24, strokeWidth = 1.6, className?: string) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

/** Icon set used across the Carter Construction site. */
export const Icon = {
  kitchen: (p: IconProps) => base(<><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M8 3v6M8 14v3" /></>, p.size, p.strokeWidth, p.className),
  bath: (p: IconProps) => base(<><path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3Z" /><path d="M6 12V6a2 2 0 0 1 4 0" /><path d="M7 19l-1 2M18 19l1 2" /></>, p.size, p.strokeWidth, p.className),
  basement: (p: IconProps) => base(<><path d="M3 21V9l9-6 9 6v12" /><path d="M3 13h18M9 21v-5h6v5" /></>, p.size, p.strokeWidth, p.className),
  deck: (p: IconProps) => base(<><path d="M3 8h18M3 12h18M3 16h18M6 8v12M12 8v12M18 8v12M3 8l9-5 9 5" /></>, p.size, p.strokeWidth, p.className),
  addition: (p: IconProps) => base(<><path d="M3 21V10l7-5 7 5v11" /><path d="M17 21V13h4v8M19 10v3M17.5 11.5h3" /></>, p.size, p.strokeWidth, p.className),
  floor: (p: IconProps) => base(<><rect x="3" y="3" width="18" height="18" rx="1" /><path d="M3 9h18M3 15h18M9 3v18M15 3v18" /></>, p.size, p.strokeWidth, p.className),
  tile: (p: IconProps) => base(<><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>, p.size, p.strokeWidth, p.className),
  exterior: (p: IconProps) => base(<><path d="M3 21V7l9-4 9 4v14" /><path d="M9 21v-6h6v6M9 9h.01M15 9h.01" /></>, p.size, p.strokeWidth, p.className),
  construction: (p: IconProps) => base(<><path d="M2 20h20M4 20V8l4-2 4 2M12 20V4l8 3v13" /><path d="M8 12h.01M8 16h.01M16 11h.01M16 15h.01" /></>, p.size, p.strokeWidth, p.className),
  home: (p: IconProps) => base(<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10M9 20v-6h6v6" /></>, p.size, p.strokeWidth, p.className),
  quality: (p: IconProps) => base(<><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2Z" /></>, p.size, p.strokeWidth, p.className),
  detail: (p: IconProps) => base(<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3M11 8v6M8 11h6" /></>, p.size, p.strokeWidth, p.className),
  chat: (p: IconProps) => base(<><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" /></>, p.size, p.strokeWidth, p.className),
  shield: (p: IconProps) => base(<><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3Z" /><path d="M9 12l2 2 4-4" /></>, p.size, p.strokeWidth, p.className),
  clock: (p: IconProps) => base(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>, p.size, p.strokeWidth, p.className),
  star: (p: IconProps) => base(<><path d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.8 7.2 17l.9-5.4L4.2 7.7l5.4-.8L12 2Z" /></>, p.size, p.strokeWidth, p.className),
  phone: (p: IconProps) => base(<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.8 2Z" /></>, p.size, p.strokeWidth, p.className),
  mail: (p: IconProps) => base(<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></>, p.size, p.strokeWidth, p.className),
  pin: (p: IconProps) => base(<><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>, p.size, p.strokeWidth, p.className),
  arrow: (p: IconProps) => base(<><path d="M5 12h14M13 6l6 6-6 6" /></>, p.size, p.strokeWidth, p.className),
  check: (p: IconProps) => base(<><path d="M20 6 9 17l-5-5" /></>, p.size, p.strokeWidth, p.className),
  plus: (p: IconProps) => base(<><path d="M12 5v14M5 12h14" /></>, p.size, p.strokeWidth, p.className),
  minus: (p: IconProps) => base(<><path d="M5 12h14" /></>, p.size, p.strokeWidth, p.className),
  menu: (p: IconProps) => base(<><path d="M3 6h18M3 12h18M3 18h18" /></>, p.size, p.strokeWidth, p.className),
  close: (p: IconProps) => base(<><path d="M18 6 6 18M6 6l12 12" /></>, p.size, p.strokeWidth, p.className),
};

export type IconName = keyof typeof Icon;
