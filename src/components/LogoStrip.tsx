import { Reveal } from "./Reveal";

const NAMES = ["Northwind", "Brightline", "Cedarpay", "Hartwell", "Lumen", "Tideway", "Vela", "Merton"];

export function LogoStrip() {
  const row = (
    <div className="flex shrink-0 items-center gap-14 pr-14">
      {NAMES.map((n) => (
        <span key={n} className="font-display text-[1.15rem] font-bold tracking-tight text-faint transition-colors hover:text-text">{n}</span>
      ))}
    </div>
  );
  return (
    <section className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <Reveal as="p" className="text-center text-[0.85rem] text-faint">Trusted by <span className="font-semibold text-text">200+ businesses</span> running on Nimbus</Reveal>
        <div className="group mt-8 flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]" aria-hidden="true">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
            {row}{row}
          </div>
        </div>
      </div>
    </section>
  );
}
