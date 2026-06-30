import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";
import type { Story } from "../types";

const STORIES: Story[] = [
  { company: "Merton Labs", metric: "Cut close time by 80%", summary: "From a two-week monthly close to a two-day one — with zero added headcount.", gradient: "from-[#11362c] to-[#0c1016]" },
  { company: "Vela Health", metric: "$2.1M freed up", summary: "Working capital smoothed payroll through a seasonal dip without touching the bank.", gradient: "from-[#13283f] to-[#0c1016]" },
  { company: "Forge & Co", metric: "98% invoices auto-matched", summary: "AP automation took 40 hours of manual matching off the finance team's plate.", gradient: "from-[#2a2440] to-[#0c1016]" },
];

export function Stories() {
  return (
    <section id="company" className="px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <Reveal as="p" className="font-mono text-[0.78rem] uppercase tracking-[0.16em] text-mint">Customer stories</Reveal>
            <Reveal as="h2" delay={60} className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.025em] text-text">
              Finance teams move faster on Nimbus.
            </Reveal>
          </div>
          <Reveal>
            <a href="#" className="group inline-flex items-center gap-2 font-semibold text-text">All stories<ArrowUpRight className="h-4 w-4 text-mint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal as="article" key={s.company} delay={i * 80}>
              <a href="#" className="group block overflow-hidden rounded-[var(--radius-card)] border border-line bg-surface shadow-[var(--shadow-card)] transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-mint/40">
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${s.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,.10),transparent_60%)]" />
                  <span className="absolute left-4 top-4 rounded-full bg-bg/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-text backdrop-blur">{s.company}</span>
                  <span className="absolute bottom-4 left-4 right-4 font-display text-[1.25rem] font-bold leading-tight text-text">{s.metric}</span>
                </div>
                <div className="p-5">
                  <p className="text-[0.92rem] text-muted">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-text">Read story<ArrowUpRight className="h-4 w-4 text-mint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
