import { Reveal } from "./Reveal";
import { ArrowUpRight } from "./icons";
import type { Article } from "../types";

const ARTICLES: Article[] = [
  { tag: "Product", date: "Jun 24, 2026", title: "Forecasting that thinks in scenarios, not spreadsheets", gradient: "from-[#11362c] to-[#0c1016]" },
  { tag: "Company", date: "Jun 10, 2026", title: "Nimbus raises Series B to expand AI underwriting", gradient: "from-[#13283f] to-[#0c1016]" },
  { tag: "Guides", date: "May 28, 2026", title: "A finance leader's playbook for a 2-day close", gradient: "from-[#2a2440] to-[#0c1016]" },
];

export function Newsroom() {
  return (
    <section className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal as="h2" className="font-display text-[clamp(1.7rem,3.4vw,2.4rem)] font-bold tracking-[-0.02em] text-text">From the newsroom</Reveal>
          <Reveal>
            <a href="#" className="group inline-flex items-center gap-2 font-semibold text-text">All posts<ArrowUpRight className="h-4 w-4 text-mint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <Reveal as="article" key={a.title} delay={i * 80}>
              <a href="#" className="group block">
                <div className={`relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-gradient-to-br ${a.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(255,255,255,.10),transparent_60%)] transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-bg/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-mint backdrop-blur">{a.tag}</span>
                </div>
                <div className="mt-4 flex items-center gap-2 font-mono text-[0.76rem] text-faint">{a.date}</div>
                <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-snug tracking-tight text-text transition-colors group-hover:text-mint-bright">{a.title}</h3>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
