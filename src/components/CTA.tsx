import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { ArrowRight } from "./icons";

export function CTA() {
  return (
    <section id="cta" className="px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-[1100px]">
        <div className="relative overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-surface px-6 py-20 text-center sm:px-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_120%_at_50%_-10%,rgba(79,224,176,.22),transparent_60%)]" />
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-sky/15 blur-[80px]" />
          <div className="relative">
            <h2 className="mx-auto max-w-[18ch] font-display text-[clamp(2.2rem,5vw,4rem)] font-extrabold leading-[1.0] tracking-[-0.03em] text-text">
              The future of finance, ready when you are.
            </h2>
            <p className="mx-auto mt-5 max-w-[48ch] text-[1.05rem] text-muted">
              Join 200+ businesses running smarter on Nimbus. Free to start — no card required.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="#" variant="mint" size="lg" icon={<ArrowRight className="h-[1.05rem] w-[1.05rem]" />}>Get started free</Button>
              <Button href="#demo" variant="subtle" size="lg">Talk to sales</Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
