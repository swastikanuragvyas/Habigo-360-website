import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Nav, Footer, Contact, StickyCTA, SERVICES, useReveal } from "./index";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
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
        <OurWork />
        <Process />
        <Timeline />
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
        <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Our Capabilities</span>
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
    "Hyatt", "Marriott", "Radisson", "Taj", "Oberoi", "ITC Hotels",
    "Leela", "Hilton", "Accor", "Four Seasons", "JW Marriott", "Westin",
  ];

  return (
    <section className="py-14 border-b border-border bg-background overflow-hidden">
      <div className="text-center mb-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60">
          Brands We've Worked With
        </span>
      </div>
      <div className="relative flex w-full overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap items-center">
          {clients.concat(clients).concat(clients).map((client, i) => (
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
    <section id="all-services" className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" /> What We Do
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
            Twelve disciplines.{" "}
            <em className="italic text-emerald-deep">One growth engine.</em>
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
                <span className="text-[10px] font-mono text-foreground/40 group-hover:text-ivory/40">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-12">
                <h3 className="font-display text-2xl lg:text-3xl leading-tight mb-3">
                  {s.t}
                </h3>
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

/* ─── Our Work ────────────────────────────────────────────────────────── */

function OurWork() {
  const { ref, shown } = useReveal();

  const projects = [
    {
      title: "Radisson Blu Rebrand",
      category: "Branding & Identity",
      desc: "Complete brand overhaul driving 42% increase in direct bookings.",
    },
    {
      title: "Taj Social Launch",
      category: "Social Media Marketing",
      desc: "0 to 150K followers in 6 months with a retention-first strategy.",
    },
    {
      title: "Oberoi Campaign Film",
      category: "Brand Films",
      desc: "Cinematic brand film that earned 2.4M views organically.",
    },
    {
      title: "Leela Performance Overhaul",
      category: "Performance Marketing",
      desc: "Slashed CPA by 58% while scaling spend 3x.",
    },
    {
      title: "ITC Website Redesign",
      category: "Website Development",
      desc: "Editorial design with 94 Lighthouse score and 3.2x conversion lift.",
    },
    {
      title: "Hyatt Event Series",
      category: "Event Curation",
      desc: "Quarterly thought-leadership dinners generating $2.1M in pipeline.",
    },
  ];

  return (
    <section className="bg-emerald-deep text-ivory py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-16 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
            <span className="w-10 h-px bg-ivory/30" /> Portfolio
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
            Selected <em className="italic text-accent">work.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <WorkCard key={p.title} project={p} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkCard({ project, idx }: { project: any; idx: number }) {
  const { ref, shown } = useReveal();

  return (
    <article
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group border border-ivory/10 p-8 hover:border-accent/40 transition-all duration-700 cursor-pointer ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-accent/70 mb-6">
        {project.category}
      </div>
      <h3 className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="text-ivory/60 text-sm leading-relaxed">{project.desc}</p>
      <ArrowUpRight className="mt-8 !size-5 text-ivory/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </article>
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
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-20 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60">
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

function ProcessCard({ step, idx }: { step: any; idx: number }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-background p-8 lg:p-10 transition-all duration-700 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="font-display text-5xl lg:text-6xl text-accent/30 mb-8">{step.num}</div>
      <h3 className="font-display text-xl lg:text-2xl mb-4">{step.title}</h3>
      <p className="text-foreground/65 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

/* ─── Timeline ────────────────────────────────────────────────────────── */

function Timeline() {
  const milestones = [
    { year: "2018", title: "Founded in Jaipur", desc: "Two founders, one laptop, and a mission to build something unforgettable." },
    { year: "2019", title: "First Hospitality Client", desc: "Signed our first boutique hotel brand and never looked back." },
    { year: "2020", title: "Survived & Thrived", desc: "Pivoted to digital-first strategies during lockdown. Grew revenue 2x." },
    { year: "2021", title: "Team of 10", desc: "Expanded the studio with specialists in performance, content, and design." },
    { year: "2022", title: "National Reach", desc: "Opened partnerships with brands across 6 major Indian cities." },
    { year: "2023", title: "Award-Winning Work", desc: "Our brand films and campaigns started collecting industry recognition." },
    { year: "2024", title: "24+ Specialists", desc: "Built an in-house team covering every discipline under one roof." },
    { year: "2025", title: "HabiGo 360", desc: "Rebranded to reflect our full-spectrum creative growth philosophy." },
  ];

  return (
    <section className="bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.1),_transparent_55%)]" />
      <div className="max-w-[1000px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Our Journey</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-light">
            The <em className="italic text-accent">timeline.</em>
          </h2>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <TimelineLine count={milestones.length} />

          <div className="space-y-0">
            {milestones.map((m, idx) => (
              <TimelineNode key={m.year} milestone={m} idx={idx} total={milestones.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineLine({ count }: { count: number }) {
  const lineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return;
      const rect = lineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height;
      const scrolledPast = windowHeight * 0.5 - rect.top;
      const pct = Math.max(0, Math.min(1, scrolledPast / totalHeight));
      setProgress(pct);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={lineRef} className="absolute left-[19px] md:left-1/2 top-0 bottom-0 md:-translate-x-1/2">
      {/* Background track */}
      <div className="absolute inset-0 w-px bg-ivory/10" />
      {/* Animated fill */}
      <div
        className="absolute top-0 w-px bg-accent transition-[height] duration-100 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
      {/* Glow dot at the tip */}
      <div
        className="absolute w-3 h-3 bg-accent rounded-full -left-[5px] shadow-[0_0_20px_rgba(212,175,55,0.8)] transition-[top] duration-100 ease-out"
        style={{ top: `${progress * 100}%` }}
      />
    </div>
  );
}

function TimelineNode({ milestone, idx, total }: { milestone: any; idx: number; total: number }) {
  const { ref, shown } = useReveal();
  const isEven = idx % 2 === 0;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative flex items-start md:items-center min-h-[140px] transition-all duration-1000 ease-out ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${idx * 80}ms` }}
    >
      {/* Node dot */}
      <div className="absolute left-[15px] md:left-1/2 w-[10px] h-[10px] rounded-full border-2 border-ivory/30 bg-emerald-deep md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 group-hover:border-accent transition-colors" />

      {/* Desktop: alternate left/right */}
      <div
        className={`w-full pl-12 md:pl-0 md:w-1/2 ${
          isEven ? "md:pr-16 md:text-right" : "md:ml-auto md:pl-16"
        }`}
      >
        <div className="text-accent font-mono text-lg font-semibold mb-1">{milestone.year}</div>
        <h3 className="font-display text-xl lg:text-2xl mb-2">{milestone.title}</h3>
        <p className="text-ivory/60 text-sm leading-relaxed">{milestone.desc}</p>
      </div>
    </div>
  );
}
