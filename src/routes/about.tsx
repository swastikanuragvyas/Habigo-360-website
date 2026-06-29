import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, Founders, StickyCTA } from "./index";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us | HabiGo 360" },
      { name: "description", content: "Learn more about HabiGo 360, a creative growth agency helping ambitious brands lead their markets." }
    ]
  })
});

function AboutPage() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep">
      <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />

      <main>
        <Hero />
        <VisionMission />
        <Founders />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

function Hero() {
  return (
    <section className="bg-emerald-deep text-ivory pt-40 pb-28 lg:pt-52 lg:pb-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-ivory/50">About Us</span>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-light">
          We build <em className="italic text-accent">enduring</em> brands.
        </h1>
        
        <div className="mt-16 max-w-4xl mx-auto border-y border-ivory/15 py-10 relative text-left lg:text-center">
          <p className="text-ivory/80 text-xl lg:text-2xl leading-relaxed font-light text-balance">
            HabiGo 360 is a creative growth agency helping ambitious brands lead their markets through
            marketing, content, branding, technology, and business strategy.
          </p>
        </div>

        <div className="mt-20 max-w-5xl mx-auto rounded-sm overflow-hidden border border-ivory/10">
          <img src={aboutImg} alt="HabiGo 360" className="w-full h-auto max-h-[70vh] object-cover hover:scale-105 transition-transform duration-1000" />
        </div>
      </div>
    </section>
  );
}

function VisionMission() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Our Vision
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight text-balance">
              To be the benchmark for{" "}
              <em className="italic text-emerald-deep">creative excellence</em>.
            </h2>
            <p className="mt-8 text-foreground/70 leading-relaxed text-[15px]">
              We see a future where brands don't just compete on price or utility, but on meaning.
              Our vision is to elevate the standard of brand communication, making every interaction
              an opportunity to build trust and inspire loyalty. We want to be the partner that the
              world's most ambitious companies turn to when they are ready to leave a legacy.
            </p>
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Our Mission
            </span>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl leading-tight text-balance">
              To engineer <em className="italic text-emerald-deep">growth</em> through craft.
            </h2>
            <p className="mt-8 text-foreground/70 leading-relaxed text-[15px]">
              Our mission is to bridge the gap between stunning creative and measurable business
              results. We exist to help our partners navigate the noise of modern markets with
              clarity, precision, and soul. By integrating strategy, design, and performance, we
              build growth engines that are as effective as they are beautiful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
