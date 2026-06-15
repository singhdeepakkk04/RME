import Nav from "./components/Nav";
import BackgroundGraph from "./components/BackgroundGraph";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Stats from "./components/Stats";
import Features from "./components/Features";
import Pipeline from "./components/Pipeline";
import Benchmark from "./components/Benchmark";
import WhyGrid from "./components/WhyGrid";
import Integrate from "./components/Integrate";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function ProblemBand() {
  return (
    <section className="py-20">
      <div className="container-site max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Agents waste context grepping the same files,
            <span className="text-faint"> every session.</span>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ash">
            Ask an agent “how does auth work?” and it greps, then reads four files
            in full, 40,000+ tokens, repeated every conversation because it has
            no memory. RME gives it one instead: a graph it queries for the exact
            symbols, reads only the lines that matter, and keeps current as you
            edit.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <BackgroundGraph />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <ProblemBand />
        <Features />
        <Pipeline />
        <Benchmark />
        <WhyGrid />
        <Integrate />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
