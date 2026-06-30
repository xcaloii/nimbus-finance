import { Reveal } from "./Reveal";
import { Wallet, Bolt, Ledger, ArrowRight, Check } from "./icons";
import type { Product } from "../types";

const PRODUCTS: Product[] = [
  { Icon: Wallet, title: "Working Capital", description: "Flexible funding that adapts to your cash flow — drawn down in a click, repaid on your terms.", mock: "capital" },
  { Icon: Bolt, title: "AP Automation", description: "Capture, approve, and pay every bill on autopilot. AI matches invoices to POs in seconds.", mock: "automation" },
  { Icon: Ledger, title: "Smart Accounting", description: "Books that reconcile themselves. Categorized, audit-ready, and synced with your stack.", mock: "ledger" },
];

function Mock({ kind }: { kind: Product["mock"] }) {
  if (kind === "capital") {
    return (
      <div className="rounded-xl border border-line-soft bg-surface-2 p-4">
        <div className="flex items-baseline justify-between"><span className="text-[0.72rem] text-faint">Available</span><span className="font-mono text-[0.72rem] text-mint">APR 6.9%</span></div>
        <div className="mt-1 font-mono text-[1.4rem] font-semibold tabular-nums text-text">$250,000</div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[62%] rounded-full bg-gradient-to-r from-mint to-mint-bright" /></div>
        <div className="mt-2 text-[0.72rem] text-faint">$155k drawn · $95k available</div>
      </div>
    );
  }
  if (kind === "automation") {
    return (
      <div className="rounded-xl border border-line-soft bg-surface-2 p-4">
        {[["Figma Inc.", "Matched"], ["AWS", "Approved"], ["Notion Labs", "Scheduled"]].map(([n, s], i) => (
          <div key={n} className={`flex items-center justify-between py-2 text-[0.8rem] ${i > 0 ? "border-t border-line-soft" : ""}`}>
            <span className="text-muted">{n}</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/12 px-2 py-0.5 text-[0.7rem] font-medium text-mint"><Check className="h-3 w-3" />{s}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-line-soft bg-surface-2 p-4">
      <div className="mb-3 flex items-center justify-between text-[0.72rem] text-faint"><span>Reconciliation</span><span className="text-mint">100% matched</span></div>
      <div className="flex items-end gap-1.5">
        {[40, 64, 52, 78, 70, 90, 84].map((h, i) => (<div key={i} className="flex-1 rounded-t bg-gradient-to-t from-sky/40 to-sky" style={{ height: 70 * (h / 100) + 18 }} />))}
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-[640px]">
          <Reveal as="p" className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-mint">The platform</Reveal>
          <Reveal as="h2" delay={60} className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-text">
            Three products. One source of truth for your money.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p, i) => (
            <Reveal as="article" key={p.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-6 shadow-[var(--shadow-card)] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-mint/40">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line-soft bg-surface-2 text-mint transition-colors group-hover:border-mint/50">
                  <p.Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-[1.3rem] font-bold tracking-tight text-text">{p.title}</h3>
                <p className="mt-2.5 text-[0.95rem] text-muted">{p.description}</p>
                <div className="mt-5"><Mock kind={p.mock} /></div>
                <a href="#cta" className="mt-6 inline-flex items-center gap-1.5 text-[0.92rem] font-semibold text-text">
                  Discover
                  <ArrowRight className="h-4 w-4 text-mint transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
