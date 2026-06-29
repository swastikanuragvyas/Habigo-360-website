import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { SERVICE_PAGES } from "@/lib/service-data";
import { Nav, Footer, StickyCTA, useReveal } from "./index";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const service = SERVICE_PAGES[params.slug];
    return {
      meta: [
        {
          title: service ? `${service.title} - HabiGo 360` : "Service Not Found - HabiGo 360",
        },
        {
          name: "description",
          content: service?.description ?? "Service not found.",
        },
      ],
    };
  },
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { slug } = Route.useParams();
  const service = SERVICE_PAGES[slug];

  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll to top on slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />
        <div className="pt-40 lg:pt-52 pb-28 text-center max-w-2xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" />
            404
            <span className="w-10 h-px bg-emerald-deep/40" />
          </span>
          <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            Service <em className="italic text-emerald-deep">not found.</em>
          </h1>
          <p className="mt-6 text-foreground/65 text-[15px] leading-relaxed">
            The service you're looking for doesn't exist or may have been moved.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 mt-10 px-6 py-3.5 rounded-full bg-emerald-deep text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-accent hover:text-emerald-deep transition-colors"
          >
            <ArrowLeft className="!size-3.5" />
            View All Services
          </a>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />
      <ServiceHero service={service} />
      <StatsBar stats={service.stats} />
      <Deliverables deliverables={service.deliverables} />
      <Approach approach={service.approach} title={service.title} />
      <ServiceCTA title={service.title} />
      <Footer />
      <StickyCTA />
    </div>
  );
}

/* ─── Hero ─── */
function ServiceHero({ service }: { service: (typeof SERVICE_PAGES)[string] }) {
  const hero = useReveal();
  return (
    <section className="relative bg-[color:var(--emerald-deep)] text-ivory overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.18),_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.08),_transparent_50%)]" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-40 lg:pt-52 pb-20 lg:pb-28">
        <div
          ref={hero.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl transition-all duration-1000 ${hero.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-10">
            <a
              href="/services"
              className="text-[11px] uppercase tracking-[0.25em] text-ivory/50 hover:text-accent transition-colors"
            >
              Services
            </a>
            <span className="text-ivory/30">/</span>
            <span className="text-[11px] uppercase tracking-[0.25em] text-accent">
              {service.title}
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] font-light">
            {service.title}
          </h1>

          <p className="mt-8 font-display text-xl lg:text-2xl italic text-accent/90 max-w-2xl leading-snug">
            "{service.tagline}"
          </p>

          <p className="mt-8 text-ivory/70 text-base lg:text-lg leading-relaxed max-w-2xl">
            {service.description}
          </p>

          <div className="flex flex-wrap gap-4 mt-12">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-emerald-deep text-xs uppercase tracking-[0.18em] font-semibold hover:bg-ivory transition-colors"
            >
              Get Started
              <ArrowUpRight className="!size-3.5" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ivory/30 text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-ivory/10 transition-colors"
            >
              <ArrowLeft className="!size-3.5" />
              All Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom border accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
}

/* ─── Stats Bar ─── */
function StatsBar({ stats }: { stats: { label: string; value: string }[] }) {
  const reveal = useReveal();
  return (
    <section className="bg-background border-b border-border">
      <div
        ref={reveal.ref as React.RefObject<HTMLDivElement>}
        className={`max-w-[1500px] mx-auto px-6 lg:px-10 transition-all duration-1000 delay-200 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border -mx-px">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8 lg:p-10 text-center">
              <div className="font-display text-4xl lg:text-5xl text-emerald-deep leading-none">
                {stat.value}
              </div>
              <div className="mt-3 text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── What We Deliver ─── */
function Deliverables({ deliverables }: { deliverables: string[] }) {
  const reveal = useReveal();
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={reveal.ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" />
              Services
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
              What we <em className="italic text-emerald-deep">deliver.</em>
            </h2>
          </div>

          {/* Deliverable cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {deliverables.map((item, idx) => (
              <div
                key={idx}
                className="group bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 min-h-[180px] flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-4">
                  <CheckCircle2 className="!size-6 text-emerald-deep group-hover:text-accent transition-colors shrink-0 mt-0.5" />
                  <span className="text-[10px] font-mono text-foreground/40 group-hover:text-ivory/40">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-[15px] leading-relaxed text-foreground/80 group-hover:text-ivory/85">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Our Approach ─── */
function Approach({ approach, title }: { approach: string; title: string }) {
  const reveal = useReveal();
  const paragraphs = approach.split("\n\n");

  return (
    <section className="bg-emerald-deep text-ivory py-16 lg:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.07),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(212,175,55,0.05),_transparent_50%)]" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative">
        <div
          ref={reveal.ref as React.RefObject<HTMLDivElement>}
          className={`transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Section header */}
          <div className="max-w-2xl mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
              <span className="w-10 h-px bg-ivory/30" />
              Methodology
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
              Our <em className="italic text-accent">approach.</em>
            </h2>
          </div>

          {/* Approach content */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-8 space-y-8">
              {paragraphs.map((p, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="hidden md:block shrink-0 pt-1">
                    <div className="w-8 h-px bg-accent/40 mt-3" />
                  </div>
                  <p className="text-ivory/75 text-base lg:text-[17px] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-ivory/5 border border-ivory/10 rounded-sm p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-6">
                  Why HabiGo 360
                </div>
                <div className="space-y-5">
                  {[
                    "Hospitality-trained team that understands service excellence",
                    "Strategy & execution under one roof - no fragmented handoffs",
                    "Data-driven decisions with transparent, honest reporting",
                    "Premium craft that builds brand equity, not just metrics",
                  ].map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-ivory/65 leading-relaxed"
                    >
                      <span className="size-1.5 rounded-full bg-accent shrink-0 mt-2" />
                      {point}
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-ivory/10">
                  <a
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-accent hover:text-ivory transition-colors"
                  >
                    Discuss {title} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Section ─── */
function ServiceCTA({ title }: { title: string }) {
  const reveal = useReveal();
  return (
    <section className="bg-accent text-emerald-deep py-12 lg:py-16">
      <div
        ref={reveal.ref as React.RefObject<HTMLDivElement>}
        className={`max-w-[1500px] mx-auto px-6 lg:px-10 text-center transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2 className="font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
          Ready to transform your <em className="italic">{title.toLowerCase()}?</em>
        </h2>
        <p className="mt-6 text-emerald-deep/70 text-[15px] max-w-lg mx-auto leading-relaxed">
          Tell us about your brand. We'll respond within one working day with a perspective - not a
          pitch deck.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-deep text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-foreground transition-colors"
          >
            Book a Discovery Call
            <ArrowUpRight className="!size-3.5" />
          </a>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-emerald-deep/30 text-emerald-deep text-xs uppercase tracking-[0.18em] font-semibold hover:bg-emerald-deep/10 transition-colors"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
