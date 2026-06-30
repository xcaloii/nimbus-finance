import { useEffect, useState } from "react";
import { Logo, ChevronDown, Menu, Close, ArrowRight } from "./icons";
import { Button } from "./Button";

interface NavItem {
  label: string;
  items?: { label: string; desc: string }[];
  href?: string;
}

const NAV: NavItem[] = [
  {
    label: "Products",
    items: [
      { label: "Working Capital", desc: "Funding that flexes with cash flow" },
      { label: "AP Automation", desc: "Pay bills on autopilot" },
      { label: "Smart Accounting", desc: "Books that reconcile themselves" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "Startups", desc: "Runway and control from day one" },
      { label: "Scale-ups", desc: "Spend visibility as you grow" },
      { label: "Finance teams", desc: "Close the month in hours" },
    ],
  },
  { label: "Company", href: "#company" },
  { label: "Pricing", href: "#pricing" },
];

function Dropdown({ item }: { item: NavItem }) {
  if (!item.items) {
    return (
      <a href={item.href} className="rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-text">
        {item.label}
      </a>
    );
  }
  return (
    <div className="group relative">
      <button className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-text">
        {item.label}
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="rounded-2xl border border-line bg-surface/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl">
          {item.items.map((sub) => (
            <a key={sub.label} href="#products" className="block rounded-xl px-3.5 py-3 transition-colors hover:bg-white/[0.05]">
              <span className="block text-[0.95rem] font-semibold text-text">{sub.label}</span>
              <span className="block text-[0.82rem] text-faint">{sub.desc}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={["fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300", scrolled ? "border-b border-line bg-bg/70 backdrop-blur-xl" : "border-b border-transparent"].join(" ")}>
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 font-display text-[1.2rem] font-bold tracking-tight text-text">
          <Logo className="h-7 w-7 text-mint" />
          Nimbus
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => <Dropdown key={item.label} item={item} />)}
        </div>

        <div className="flex items-center gap-2.5">
          <a href="#" className="hidden px-3 text-[0.95rem] font-medium text-muted transition-colors hover:text-text sm:block">Log in</a>
          <Button href="#cta" size="md" className="hidden sm:inline-flex" icon={<ArrowRight className="h-4 w-4" />}>Get started</Button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-text transition-colors hover:bg-white/[0.05] lg:hidden"
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div className={["overflow-hidden border-line bg-bg transition-[max-height,opacity] duration-300 lg:hidden", open ? "max-h-[460px] border-b opacity-100" : "max-h-0 opacity-0"].join(" ")}>
        <ul className="flex flex-col gap-1 px-5 pb-6 pt-2">
          {NAV.flatMap((item) => item.items ? item.items.map((s) => ({ label: s.label })) : [{ label: item.label }]).map((l) => (
            <li key={l.label}>
              <a href="#products" onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-medium text-text transition-colors hover:bg-white/[0.05]">{l.label}</a>
            </li>
          ))}
          <li className="mt-2">
            <Button href="#cta" size="lg" className="w-full" onClick={() => setOpen(false)} icon={<ArrowRight className="h-4 w-4" />}>Get started</Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
