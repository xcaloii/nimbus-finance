import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Demo } from "./components/Demo";
import { Stories } from "./components/Stories";
import { Newsroom } from "./components/Newsroom";
import { LogoStrip } from "./components/LogoStrip";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="nimbus-bg" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Demo />
        <Stories />
        <Newsroom />
        <LogoStrip />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
