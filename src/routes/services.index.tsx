import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Nav, Footer, Contact, StickyCTA, SERVICES, useReveal } from "./index";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | HabiGo 360" },
      { name: "description", content: "From performance marketing to brand films, explore our twelve core disciplines designed to build your growth engine." }
    ]
  })
});

/* ─── Main Layout ─────────────────────────────────────────────────────── */

function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep">
      <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />

      <main>
        <Hero />
        <ClientsMarquee />
        <AllServices />
        <Process />
        <Contact />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="bg-emerald-deep text-ivory pt-40 pb-28 lg:pt-52 lg:pb-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.12),_transparent_55%)]" />
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] text-ivory/50">
          Our Services
        </span>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-light">
          Everything you need to <em className="italic text-accent">grow.</em>
        </h1>
        <p className="mt-8 text-ivory/70 max-w-2xl mx-auto text-lg leading-relaxed">
          From thumb-stopping brand films to high-converting performance architecture. An integrated
          suite of twelve disciplines designed to make your brand impossible to ignore.
        </p>
        <a
          href="#all-services"
          className="mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors"
        >
          Explore Services <ArrowUpRight className="!size-3.5" />
        </a>
      </div>
    </section>
  );
}

/* ─── Clients Marquee ─────────────────────────────────────────────────── */

function ClientsMarquee() {
  const clients = [
    "Bhanpur Haveli",
    "Namli Hospitality",
    "Sajjanbagh",
    "Indian Kitchen",
    "Dolce Vita",
    "Prestige Group",
    "The Gypsy Adventures",
    "Maxus Builder",
    "Anvaya",
    "The Times of India",
    "Vicinity",
    "SMR Holdings",
    "Nakoda Jewellers",
    "Rare Rabbit",
    "Burger Farm",
    "IIM Mumbai",
  ];

  return (
    <section className="py-14 border-b border-border bg-background overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">
          Brands We've Worked With
        </span>
      </div>
      <div className="relative flex w-full overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap items-center">
          {clients
            .concat(clients)
            .concat(clients)
            .map((client, i) => (
              <div
                key={i}
                className="mx-14 font-display text-2xl lg:text-4xl text-foreground/20 font-light uppercase tracking-wider hover:text-emerald-deep/60 transition-colors duration-500 cursor-default"
              >
                {client}
              </div>
            ))}
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .marquee-track { animation: marquee 40s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `,
        }}
      />
    </section>
  );
}

/* ─── All Services Grid ──────────────────────────────────────────────── */

function AllServices() {
  const { ref, shown } = useReveal();

  return (
    <section id="all-services" className="bg-background py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" /> What We Do
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
            Twelve disciplines. <em className="italic text-emerald-deep">One growth engine.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s, idx) => (
            <a
              key={s.t}
              href={`/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`}
              className="group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <s.i className="!size-7 text-emerald-deep group-hover:text-accent transition-colors" />
                <span className="text-xs font-mono text-foreground/40 group-hover:text-ivory/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-3">{s.t}</h3>
                <p className="text-sm text-foreground/65 group-hover:text-ivory/70 leading-relaxed">
                  {s.d}
                </p>
              </div>
              <ArrowUpRight className="absolute top-8 right-8 !size-5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all text-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ─── Process ─────────────────────────────────────────────────────────── */

function Process() {
  const { ref, shown } = useReveal();
  const steps = [
    {
      num: "01",
      title: "Discovery & Audit",
      desc: "We strip your brand down to the studs. Understanding your unit economics, market positioning, and where the actual growth leverage lies.",
    },
    {
      num: "02",
      title: "Strategic Architecture",
      desc: "We don't guess. We map out a bespoke strategy across creative, media, and technology to ensure every dollar works efficiently.",
    },
    {
      num: "03",
      title: "Execution & Craft",
      desc: "Our in-house specialists take over. From cinematic brand films to razor-sharp ad copy, we produce assets that stop the scroll.",
    },
    {
      num: "04",
      title: "Optimization & Scale",
      desc: "Launch is just the beginning. We continuously test, iterate, and scale the winners to turn your brand into a compounding growth engine.",
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60">
            Our Process
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
            How we <em className="italic text-emerald-deep">deliver.</em>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((step, idx) => (
            <ProcessCard key={step.num} step={step} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProcessCardProps {
  step: {
    num: string;
    title: string;
    desc: string;
  };
  idx: number;
}

function ProcessCard({ step, idx }: ProcessCardProps) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-background p-8 lg:p-10 transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="font-display text-5xl lg:text-6xl text-accent/30 mb-8">{step.num}</div>
      <h3 className="font-display text-xl lg:text-2xl mb-4">{step.title}</h3>
      <p className="text-foreground/65 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}
