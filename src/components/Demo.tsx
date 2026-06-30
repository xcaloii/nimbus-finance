import { Reveal } from "./Reveal";
import { Play } from "./icons";

export function Demo() {
  return (
    <section id="demo" className="px-5 py-12 sm:px-8 sm:py-16">
      <Reveal className="mx-auto max-w-[1100px]">
        <button className="group relative block w-full overflow-hidden rounded-[var(--radius-xl2)] border border-line bg-surface text-left">
          <div className="aspect-[16/8] w-full bg-[radial-gradient(120%_120%_at_30%_0%,#1b2733,#0c1016)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(79,224,176,.18),transparent_70%)]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-mint text-mint-ink shadow-[0_10px_40px_-8px_rgba(79,224,176,.6)] transition-transform duration-300 group-hover:scale-110">
              <Play className="h-7 w-7" />
            </span>
            <span className="font-display text-[clamp(1.2rem,2.4vw,1.8rem)] font-semibold text-text">See Nimbus in 90 seconds</span>
          </div>
          <span className="absolute bottom-4 left-5 font-mono text-[0.74rem] text-faint">PRODUCT TOUR · 1:32</span>
        </button>
      </Reveal>
    </section>
  );
}
