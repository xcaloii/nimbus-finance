import { Button } from "./Button";
import { ArrowRight, Play, Check } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative px-5 pb-10 pt-32 sm:px-8 sm:pt-40">
      <div className="mx-auto max-w-[1200px] text-center">
        <span className="reveal in inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-[0.82rem] font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-mint [animation:nimbus-pulse_2s_ease-in-out_infinite]" />
          Now with AI-native cash-flow forecasting
        </span>

        <h1 className="mx-auto mt-7 max-w-[18ch] font-display text-[clamp(2.6rem,7vw,5.6rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-text">
          Intelligent finance for
          <span className="bg-gradient-to-r from-mint via-mint-bright to-sky bg-clip-text text-transparent"> modern business.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-[54ch] text-[clamp(1.05rem,1.6vw,1.25rem)] text-muted">
          Working capital, AP automation, and smart accounting in one AI-native
          platform. Save time, cut costs, and give your team room to grow.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <Button href="#cta" variant="mint" size="lg" icon={<ArrowRight className="h-[1.05rem] w-[1.05rem]" />}>Get started free</Button>
          <Button href="#demo" variant="ghost" size="lg" icon={<Play className="h-3.5 w-3.5" />}>Watch demo</Button>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.85rem] text-faint">
          {["No credit card", "Setup in minutes", "Cancel anytime"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5"><Check className="h-4 w-4 text-mint" />{t}</span>
          ))}
        </div>

        {/* Product UI mock */}
        <div className="reveal in relative mx-auto mt-16 max-w-[1000px]">
          <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-64 w-3/4 rounded-full bg-mint/20 blur-[80px]" />
          <div className="relative overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-surface shadow-[var(--shadow-lift)]">
            <div className="flex items-center gap-2 border-b border-line-soft px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-[0.72rem] text-faint">app.nimbus.finance/overview</span>
            </div>
            <div className="grid gap-4 p-5 text-left sm:grid-cols-3">
              {[
                { l: "Cash balance", v: "$1,284,920", d: "+12.4%" },
                { l: "Runway", v: "18.6 mo", d: "+1.2 mo" },
                { l: "AP due (7d)", v: "$42,300", d: "32 bills" },
              ].map((c) => (
                <div key={c.l} className="rounded-2xl border border-line-soft bg-surface-2 p-4">
                  <div className="text-[0.72rem] uppercase tracking-wider text-faint">{c.l}</div>
                  <div className="mt-2 font-mono text-[1.5rem] font-semibold tabular-nums text-text">{c.v}</div>
                  <div className="mt-1 text-[0.78rem] font-medium text-mint">{c.d}</div>
                </div>
              ))}
            </div>
            <div className="px-5 pb-6">
              <div className="rounded-2xl border border-line-soft bg-surface-2 p-4">
                <div className="mb-3 flex items-center justify-between text-[0.78rem] text-muted"><span>Cash flow · 12 weeks</span><span className="text-mint">▲ projected</span></div>
                <div className="flex h-28 items-end gap-2">
                  {[38, 52, 44, 60, 56, 72, 64, 80, 76, 92, 86, 100].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-mint/40 to-mint" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
