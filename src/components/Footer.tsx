import { useState, type FormEvent } from "react";
import { Logo, ArrowRight, Facebook, XIcon, Instagram, LinkedIn } from "./icons";

const COLUMNS: { heading: string; links: string[] }[] = [
  { heading: "Products", links: ["Working Capital", "AP Automation", "Smart Accounting", "Forecasting"] },
  { heading: "Company", links: ["About", "Customers", "Careers", "Newsroom"] },
  { heading: "Resources", links: ["Docs", "Guides", "Security", "Status"] },
];

const SOCIAL = [
  { label: "Facebook", Icon: Facebook },
  { label: "X", Icon: XIcon },
  { label: "Instagram", Icon: Instagram },
  { label: "LinkedIn", Icon: LinkedIn },
];

export function Footer() {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  }

  return (
    <footer className="px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-12 rounded-[var(--radius-xl2)] border border-line bg-surface p-8 sm:p-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-[1.2rem] font-bold tracking-tight text-text">
              <Logo className="h-7 w-7 text-mint" />Nimbus
            </a>
            <p className="mt-4 max-w-[32ch] text-[0.92rem] text-muted">Intelligent finance for modern business — capital, automation, and accounting in one platform.</p>
            <form onSubmit={onSubmit} className="mt-6 max-w-[360px]">
              <label htmlFor="news" className="text-[0.78rem] font-medium text-faint">Get product updates</label>
              {sent ? (
                <p className="mt-2 rounded-full border border-mint/30 bg-mint/10 px-4 py-2.5 text-[0.88rem] font-medium text-mint">Thanks — you're subscribed.</p>
              ) : (
                <div className="mt-2 flex gap-2">
                  <input
                    id="news" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="h-11 flex-1 rounded-full border border-line bg-surface-2 px-4 text-[0.9rem] text-text placeholder:text-faint focus:border-mint focus:outline-none"
                  />
                  <button type="submit" aria-label="Subscribe" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-mint text-mint-ink transition-transform hover:-translate-y-0.5">
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </form>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="font-mono text-[0.74rem] uppercase tracking-[0.14em] text-faint">{col.heading}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-[0.92rem] text-muted transition-colors hover:text-text">{l}</a></li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-[0.84rem] text-faint sm:flex-row">
          <span>© {new Date().getFullYear()} Nimbus Finance, Inc. All rights reserved.</span>
          <div className="flex gap-2.5">
            {SOCIAL.map(({ label, Icon }) => (
              <a key={label} href="#" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all duration-200 hover:-translate-y-0.5 hover:border-mint hover:text-mint">
                <Icon className="h-[1rem] w-[1rem]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
