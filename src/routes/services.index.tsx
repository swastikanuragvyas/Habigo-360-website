import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, useCallback } from "react";
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
    { title: "Radisson Blu Rebrand", category: "Branding & Identity", desc: "Complete brand overhaul driving 42% increase in direct bookings." },
    { title: "Taj Social Launch", category: "Social Media Marketing", desc: "0 to 150K followers in 6 months with a retention-first strategy." },
    { title: "Oberoi Campaign Film", category: "Brand Films", desc: "Cinematic brand film that earned 2.4M views organically." },
    { title: "Leela Performance Overhaul", category: "Performance Marketing", desc: "Slashed CPA by 58% while scaling spend 3x." },
    { title: "ITC Website Redesign", category: "Website Development", desc: "Editorial design with 94 Lighthouse score and 3.2x conversion lift." },
    { title: "Hyatt Event Series", category: "Event Curation", desc: "Quarterly thought-leadership dinners generating $2.1M in pipeline." },
  ];

  return (
    <section className="bg-emerald-deep text-ivory py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`mb-16 ${shown ? "reveal" : "opacity-0"}`}>
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
      className={`group border border-ivory/10 p-8 hover:border-accent/40 transition-all duration-700 cursor-pointer ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 120}ms` }}
    >
      <div className="text-[10px] uppercase tracking-[0.22em] text-accent/70 mb-6">{project.category}</div>
      <h3 className="font-display text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors">{project.title}</h3>
      <p className="text-ivory/60 text-sm leading-relaxed">{project.desc}</p>
      <ArrowUpRight className="mt-8 !size-5 text-ivory/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
    </article>
  );
}

/* ─── Process ─────────────────────────────────────────────────────────── */

function Process() {
  const { ref, shown } = useReveal();
  const steps = [
    { num: "01", title: "Discovery & Audit", desc: "We strip your brand down to the studs. Understanding your unit economics, market positioning, and where the actual growth leverage lies." },
    { num: "02", title: "Strategic Architecture", desc: "We don't guess. We map out a bespoke strategy across creative, media, and technology to ensure every dollar works efficiently." },
    { num: "03", title: "Execution & Craft", desc: "Our in-house specialists take over. From cinematic brand films to razor-sharp ad copy, we produce assets that stop the scroll." },
    { num: "04", title: "Optimization & Scale", desc: "Launch is just the beginning. We continuously test, iterate, and scale the winners to turn your brand into a compounding growth engine." },
  ];

  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div ref={ref as React.RefObject<HTMLDivElement>} className={`text-center mb-20 ${shown ? "reveal" : "opacity-0"}`}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60">Our Process</span>
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
      className={`bg-background p-8 lg:p-10 transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{ transitionDelay: `${idx * 150}ms` }}
    >
      <div className="font-display text-5xl lg:text-6xl text-accent/30 mb-8">{step.num}</div>
      <h3 className="font-display text-xl lg:text-2xl mb-4">{step.title}</h3>
      <p className="text-foreground/65 text-sm leading-relaxed">{step.desc}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   TIMELINE — Horizontal Scroll-Driven Full-Screen Experience
   ═══════════════════════════════════════════════════════════════════════ */

const MILESTONES = [
  { year: "2018", title: "Founded in Jaipur", desc: "Two founders, one laptop, and a mission to build something unforgettable.", color: "rgba(245,158,11,0.15)" },
  { year: "2019", title: "First Hospitality Client", desc: "Signed our first boutique hotel brand and never looked back.", color: "rgba(16,185,129,0.12)" },
  { year: "2020", title: "Survived & Thrived", desc: "Pivoted to digital-first strategies during lockdown. Grew revenue 2x.", color: "rgba(99,102,241,0.12)" },
  { year: "2021", title: "Team of 10", desc: "Expanded the studio with specialists in performance, content, and design.", color: "rgba(168,85,247,0.12)" },
  { year: "2022", title: "National Reach", desc: "Opened partnerships with brands across 6 major Indian cities.", color: "rgba(244,63,94,0.12)" },
  { year: "2023", title: "Award-Winning Work", desc: "Our brand films and campaigns started collecting industry recognition.", color: "rgba(234,179,8,0.12)" },
  { year: "2024", title: "24+ Specialists", desc: "Built an in-house team covering every discipline under one roof.", color: "rgba(6,182,212,0.12)" },
  { year: "2025", title: "HabiGo 360", desc: "Rebranded to reflect our full-spectrum creative growth philosophy.", color: "rgba(212,175,55,0.2)" },
];

function Timeline() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const rect = outerRef.current.getBoundingClientRect();
      const totalScroll = outerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(1, scrolled / totalScroll);
      setScrollPct(pct);
      setActiveIndex(Math.min(MILESTONES.length - 1, Math.floor(pct * MILESTONES.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback((i: number) => {
    if (!outerRef.current) return;
    const totalScroll = outerRef.current.offsetHeight - window.innerHeight;
    const target = outerRef.current.offsetTop + (i / MILESTONES.length) * totalScroll;
    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  return (
    <div ref={outerRef} style={{ height: `${MILESTONES.length * 100}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-emerald-deep select-none">
        {/* Shifting ambient glow */}
        <div
          className="absolute inset-0 transition-[background] duration-[1.5s] ease-out"
          style={{ background: `radial-gradient(ellipse at 60% 40%, ${MILESTONES[activeIndex].color}, transparent 60%)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,_rgba(212,175,55,0.04),_transparent_40%)]" />

        {/* ── Top bar ── */}
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 lg:px-12 pt-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/30">Our Journey</span>
          <span className="font-mono text-xs text-ivory/30">
            <span className="text-accent font-bold">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="mx-1.5 text-ivory/15">/</span>
            {String(MILESTONES.length).padStart(2, "0")}
          </span>
        </div>

        {/* ── Cards ── */}
        {MILESTONES.map((m, i) => {
          const diff = i - activeIndex;
          const isActive = diff === 0;
          const isPast = diff < 0;

          const tx = isPast ? diff * 35 - 15 : diff > 0 ? diff * 50 + 50 : 0;
          const sc = isActive ? 1 : 0.65;
          const op = isActive ? 1 : isPast ? Math.max(0, 0.25 + diff * 0.08) : 0;

          return (
            <div
              key={m.year}
              className="absolute inset-0 flex items-center justify-center px-8 lg:px-24 will-change-transform"
              style={{
                transform: `translateX(${tx}%) scale(${sc})`,
                opacity: op,
                filter: isActive ? "none" : `blur(${Math.min(8, Math.abs(diff) * 3)}px)`,
                transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.7s ease, filter 0.7s ease",
                zIndex: isActive ? 20 : 10 - Math.abs(diff),
                pointerEvents: isActive ? "auto" : "none",
              }}
            >
              <div className="max-w-[1000px] w-full grid lg:grid-cols-2 items-center gap-8 lg:gap-16">
                {/* Left — Giant Year */}
                <div className="relative flex items-center justify-center lg:justify-end">
                  <span
                    className="font-display font-bold leading-none text-accent/[0.08] text-[10rem] sm:text-[13rem] lg:text-[17rem]"
                    style={{
                      transition: "transform 1.2s cubic-bezier(.22,1,.36,1), opacity 1s ease",
                      transform: isActive ? "scale(1) translateY(0)" : "scale(0.7) translateY(20px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {m.year}
                  </span>
                  {/* Ambient glow behind year */}
                  <div
                    className="absolute w-64 h-64 rounded-full blur-[100px] pointer-events-none"
                    style={{
                      background: m.color.replace(/[\d.]+\)$/, "0.3)"),
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 1.5s ease",
                    }}
                  />
                </div>

                {/* Right — Content */}
                <div className="text-center lg:text-left space-y-6">
                  <div
                    className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-accent/30 bg-accent/[0.08]"
                    style={{
                      transition: "transform 0.8s ease 0.15s, opacity 0.8s ease 0.15s",
                      transform: isActive ? "translateY(0)" : "translateY(16px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <span className="font-mono text-sm font-bold text-accent tracking-wider">{m.year}</span>
                    <span className="w-px h-3 bg-accent/30" />
                    <span className="text-[9px] uppercase tracking-[0.2em] text-ivory/50">Chapter {String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <h3
                    className="font-display text-3xl sm:text-4xl lg:text-5xl text-ivory leading-[1.1]"
                    style={{
                      transition: "transform 0.8s ease 0.25s, opacity 0.8s ease 0.25s",
                      transform: isActive ? "translateY(0)" : "translateY(24px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {m.title}
                  </h3>

                  <p
                    className="text-ivory/55 text-base lg:text-lg leading-relaxed max-w-md mx-auto lg:mx-0"
                    style={{
                      transition: "transform 0.8s ease 0.35s, opacity 0.8s ease 0.35s",
                      transform: isActive ? "translateY(0)" : "translateY(24px)",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    {m.desc}
                  </p>

                  <div
                    className="flex items-center gap-3 justify-center lg:justify-start"
                    style={{
                      transition: "opacity 1.2s ease 0.5s",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div className="w-12 h-px bg-accent/40" />
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    <div className="w-6 h-px bg-accent/20" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ── Bottom Navigation ── */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          {/* Scrub bar */}
          <div className="h-[2px] bg-ivory/[0.06] mx-6 lg:mx-12">
            <div
              className="h-full bg-gradient-to-r from-accent to-accent/60 relative"
              style={{ width: `${scrollPct * 100}%`, transition: "width 0.15s ease-out" }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-[0_0_14px_rgba(212,175,55,0.7)]" />
            </div>
          </div>

          {/* Year buttons */}
          <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-5 flex items-end justify-between">
            {MILESTONES.map((m, i) => (
              <button
                key={m.year}
                onClick={() => goTo(i)}
                className="group flex flex-col items-center gap-1.5 transition-all duration-500"
                style={{ opacity: i <= activeIndex ? 1 : 0.2 }}
              >
                <span
                  className="font-mono text-[11px] lg:text-xs font-bold transition-all duration-500"
                  style={{
                    color: i === activeIndex ? "var(--accent)" : "rgba(255,255,255,0.45)",
                    transform: i === activeIndex ? "scale(1.25)" : "scale(1)",
                  }}
                >
                  {m.year}
                </span>
                <span
                  className="hidden sm:block text-[8px] uppercase tracking-[0.15em] text-ivory/40 max-w-[80px] text-center leading-tight transition-all duration-500"
                  style={{ opacity: i === activeIndex ? 1 : 0, transform: i === activeIndex ? "translateY(0)" : "translateY(4px)" }}
                >
                  {m.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Scroll hint (only on first slide) */}
        {activeIndex === 0 && (
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[9px] uppercase tracking-[0.3em] text-ivory/30">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" className="text-ivory/20">
              <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-[scrollDot_2s_ease-in-out_infinite]" />
            </svg>
          </div>
        )}

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scrollDot {
            0%, 100% { transform: translateY(0); opacity: 1; }
            50% { transform: translateY(8px); opacity: 0.3; }
          }
        `}} />
      </div>
    </div>
  );
}
