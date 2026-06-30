import type { SVGProps, ReactElement } from "react";

type Icon = (props: SVGProps<SVGSVGElement>) => ReactElement;

const base = (props: SVGProps<SVGSVGElement>) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const ArrowRight: Icon = (p) => (<svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
export const ArrowUpRight: Icon = (p) => (<svg {...base(p)}><path d="M7 17 17 7M8 7h9v9" /></svg>);
export const ChevronDown: Icon = (p) => (<svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>);
export const Menu: Icon = (p) => (<svg {...base(p)}><path d="M3 6h18M3 12h18M3 18h18" /></svg>);
export const Close: Icon = (p) => (<svg {...base(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>);
export const Check: Icon = (p) => (<svg {...base(p)} strokeWidth={2.2}><path d="M20 6 9 17l-5-5" /></svg>);
export const Play: Icon = (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" /></svg>);

export const Wallet: Icon = (p) => (<svg {...base(p)}><path d="M3 7a2 2 0 0 1 2-2h12v4M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H5" /><circle cx="17" cy="13" r="1.4" fill="currentColor" stroke="none" /></svg>);
export const Bolt: Icon = (p) => (<svg {...base(p)}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></svg>);
export const Ledger: Icon = (p) => (<svg {...base(p)}><path d="M4 4h13a2 2 0 0 1 2 2v14H6a2 2 0 0 1-2-2V4Z" /><path d="M8 8h7M8 12h7M8 16h4" /></svg>);

export const Facebook: Icon = (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M14 9h3V5h-3a4 4 0 0 0-4 4v2H7v4h3v6h4v-6h3l1-4h-4V9a1 1 0 0 1 1-1Z" /></svg>);
export const XIcon: Icon = (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-7.5 8.6L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8-9.2L.9 2h7.1l4.9 6.5L18.9 2Zm-1.2 18h1.9L7.1 4H5.1l12.6 16Z" /></svg>);
export const Instagram: Icon = (p) => (<svg {...base(p)}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>);
export const LinkedIn: Icon = (p) => (<svg {...p} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4 0 4.75 2.65 4.75 6.1V24h-4v-7.1c0-1.7 0-3.9-2.37-3.9-2.38 0-2.75 1.85-2.75 3.77V24h-4V8Z" /></svg>);

/** Brand mark — a stylized cloud/ripple glyph. */
export const Logo: Icon = (p) => (
  <svg {...p} viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect width="28" height="28" rx="8" fill="currentColor" opacity="0.12" />
    <path d="M7 16c0-3.3 2.7-6 6-6 2.6 0 4.8 1.7 5.6 4 .2 0 .3 0 .4 0a3 3 0 0 1 0 6H9a4 4 0 0 1-2-7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
