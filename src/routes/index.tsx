import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  MapPin,
  MessageCircle,
  Play,
  Instagram,
  Linkedin,
  Twitter,
  Sparkles,
  TrendingUp,
  Camera,
  Megaphone,
  Palette,
  Globe,
  Mail as MailIcon,
  Users,
  Calendar,
  Database,
  Hotel,
  Send,
  Sun,
  Moon,
} from "lucide-react";

import ImmersiveHero from "@/components/ImmersiveHero";
import LivingPortfolio from "@/components/LivingPortfolio";
import { ScrollProgress, SocialProofTicker, DarkModeToggle } from "@/components/AmbientStorytelling";
import { useStaggerReveal, staggerItemStyle } from "@/hooks/useStaggerReveal";
import { useMutation } from "@tanstack/react-query";
import { submitContact } from "@/lib/api/contact.server";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

import founder1 from "@/assets/founder-1.jpg";
import founder2 from "@/assets/founder-2.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import about from "@/assets/about.jpg";
import arpitImg from "@/assets/arpit.jpg";
import dipanshuImg from "@/assets/dipanshu.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HabiGo 360 — Creative Growth Agency" },
      {
        name: "description",
        content:
          "We help ambitious brands become seen, remembered and trusted through marketing, content, branding, technology and business strategy.",
      },
      { property: "og:title", content: "HabiGo 360 — Creative Growth Agency" },
      {
        property: "og:description",
        content:
          "Marketing, content, branding, technology & business strategy for brands that refuse to be invisible.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HabiGoHome,
});

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "results", label: "Results" },
  { id: "clients", label: "Clients" },
  { id: "team", label: "Team" },
  { id: "contact", label: "Contact" },
];

export function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [n, setN] = useState(0);
  const { ref, shown } = useReveal();
  useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  return (
    <span ref={ref as React.RefObject<HTMLDivElement>}>
      {n}
      {suffix}
    </span>
  );
}

function HabiGoHome() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />
      <ImmersiveHero />
      <ScrollProgress />
      <DarkModeToggle />
      <SocialProofTicker />
      <TrustBar />
      <About />
      <Founders />
      <Services />
      <LivingPortfolio />
      <SocialShowcase />
      <ResultsDashboard />
      <Gallery />
      <Process />
      <ImpactCounters />
      <Team />
      <Clients />
      <Testimonials />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
}

export function Nav({
  scrolled,
  navOpen,
  setNavOpen,
}: {
  scrolled: boolean;
  navOpen: boolean;
  setNavOpen: (v: boolean) => void;
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--emerald-deep)]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/" className="flex items-baseline gap-1.5">
          <span className="font-display text-2xl font-medium text-ivory tracking-tight">HabiGo</span>
          <span className="text-[10px] font-medium tracking-[0.25em] text-accent uppercase">360</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => {
            if (n.id === 'services') {
              return (
                <div
                  key={n.id}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <a
                    href="/services"
                    className={`text-[12px] uppercase tracking-[0.18em] transition-colors py-4 inline-block ${
                      dropdownOpen ? "text-accent" : "text-ivory/70 hover:text-accent"
                    }`}
                  >
                    {n.label}
                    <svg className={`inline-block ml-1.5 w-3 h-3 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </a>
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-emerald-deep/95 backdrop-blur-xl border border-ivory/10 shadow-2xl rounded-sm overflow-hidden transition-all duration-300 ${
                      dropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-3 pointer-events-none"
                    }`}
                  >
                    <div className="py-3">
                      {SERVICES.map((s) => (
                        <a
                          key={s.t}
                          href={`/services/${s.t.toLowerCase().replace(/\s+/g, '-').replace(/-&-/g, '-')}`}
                          className="flex items-center gap-3 px-6 py-2.5 text-sm text-ivory/70 hover:text-accent hover:bg-white/5 transition-colors"
                        >
                          <s.i className="!size-4 text-accent/60" />
                          {s.t}
                        </a>
                      ))}
                      <div className="border-t border-ivory/10 mt-2 pt-2">
                        <a href="/services" className="block px-6 py-2.5 text-[10px] uppercase tracking-widest text-accent hover:bg-white/5 transition-colors">
                          View All Services →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={n.id}
                href={n.href ?? (n.id === 'home' ? '/' : n.id === 'about' ? '/about' : `/#${n.id}`)}
                className="text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-accent transition-colors"
              >
                {n.label}
              </a>
            );
          })}
        </nav>
        <a
          href="/#contact"
          className="hidden lg:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors"
        >
          Book a Call
          <ArrowUpRight className="!size-3.5" />
        </a>
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="lg:hidden text-ivory p-2"
          aria-label="Menu"
        >
          {navOpen ? <X /> : <Menu />}
        </button>
      </div>
      {navOpen && (
        <div className="lg:hidden bg-[color:var(--emerald-deep)] border-t border-white/10 px-6 py-6 space-y-4">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={n.href ?? (n.id === 'home' ? '/' : n.id === 'about' ? '/about' : n.id === 'services' ? '/services' : `/#${n.id}`)}
              onClick={() => setNavOpen(false)}
              className="block text-ivory text-lg font-display"
            >
              {n.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setNavOpen(false)}
            className="inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold"
          >
            Book a Discovery Call <ArrowUpRight className="!size-4" />
          </a>
        </div>
      )}
    </header>
  );
}

// Hero replaced by ImmersiveHero component

function TrustBar() {
  const tags = [
    "Hospitality",
    "Lifestyle",
    "F&B",
    "Real Estate",
    "Fashion",
    "Wellness",
    "Tech",
    "Retail",
  ];
  return (
    <div className="bg-emerald-deep text-ivory border-y border-ivory/10">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-5 flex items-center gap-8 overflow-hidden">
        <span className="shrink-0 text-[10px] uppercase tracking-[0.3em] text-ivory/50 relative z-10 bg-emerald-deep pr-4">
          Industries
        </span>
        <div className="overflow-hidden flex-1">
          <div className="flex gap-10 animate-marquee whitespace-nowrap">
            {[...tags, ...tags, ...tags].map((t, i) => (
              <span key={i} className="text-sm font-display italic text-ivory/80">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  const { ref, shown } = useReveal();
  return (
    <section id="about" className="bg-background text-foreground py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-7 ${shown ? "reveal" : "opacity-0"}`}
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Who We Are
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
              Growth happens when great businesses are{" "}
              <em className="italic text-emerald-deep">seen, remembered & trusted.</em>
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-3xl text-foreground/70 text-[15px] leading-relaxed">
              <p>
                Built on a strong foundation in hospitality, HabiGo 360 helps businesses strengthen
                their presence through marketing, content, branding, technology, and strategic
                growth initiatives.
              </p>
              <p>
                We combine creativity, data, storytelling and execution to transform ambitious
                brands into the names their categories quietly orbit around.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-px bg-border max-w-2xl">
              {[
                { k: "Mission", v: "Become the unfair advantage for ambitious brands." },
                { k: "Vision", v: "A studio where strategy and craft are inseparable." },
                { k: "Method", v: "Insight. Story. Distribution. Repeat." },
              ].map((x) => (
                <div key={x.k} className="bg-background p-5">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-emerald-deep/60 mb-3">
                    {x.k}
                  </div>
                  <div className="text-sm text-foreground/80 leading-snug">{x.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img src={about} alt="HabiGo studio in production" className="size-full object-cover" loading="lazy" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-deep to-transparent">
                <div className="font-display italic text-ivory text-2xl">
                  "Strategy that performs. Craft that lasts."
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-emerald-deep text-ivory p-5 rounded-sm">
                <div className="font-display text-4xl text-accent">07</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-ivory/60 mt-2">
                  Years of craft
                </div>
              </div>
              <div className="bg-secondary p-5 rounded-sm">
                <div className="font-display text-4xl text-emerald-deep">24</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-foreground/60 mt-2">
                  Specialists in-house
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Founders() {
  const f = [
    {
      img: founder1,
      name: "Anushka Mittal",
      role: "Founder & CEO",
      bio: "Leads strategy, brand vision and client growth. Hospitality-trained, obsessed with the details others miss.",
      quote: "We don't sell creativity. We sell outcomes — wrapped in beautiful work.",
    },
    {
      img: founder2,
      name: "Saurabh Sharma",
      role: "Co-Founder & CMO",
      bio: "Heads performance, content systems and platform marketing. Translates ambition into measurable distribution.",
      quote: "Great brands aren't lucky. They're systematically seen, remembered and chosen.",
    },
  ];
  return (
    <section className="bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.07),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(212,175,55,0.05),_transparent_50%)]" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-24">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-ivory/30" />
            The People
            <span className="w-10 h-px bg-ivory/30" />
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            Built by operators, <em className="italic text-accent">not observers.</em>
          </h2>
          <p className="mt-6 text-ivory/50 text-[15px] max-w-lg mx-auto leading-relaxed">
            Two people who believe that brand and growth are the same discipline — and that great agencies prove it every quarter.
          </p>
        </div>

        {/* Founders grid — same row, equal weight */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto">
          {f.map((p, idx) => (
            <article key={p.name} className="group text-center">
              {/* Image with bottom fade */}
              <div className="relative mb-8">
                <div
                  className="relative aspect-[3/4] overflow-hidden rounded-sm"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 65%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 65%, transparent 100%)",
                  }}
                >
                  <img
                    src={p.img}
                    alt={p.name}
                    className="size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Name & Role */}
              <div className="mb-5">
                <div className="font-display text-3xl lg:text-4xl tracking-tight">
                  {p.name}
                </div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent mt-2 font-semibold">
                  {p.role}
                </div>
              </div>

              {/* Gold divider */}
              <div className="w-10 h-px bg-accent/60 mx-auto mb-5" />

              {/* Bio */}
              <p className="text-sm text-ivory/50 leading-relaxed max-w-xs mx-auto mb-6">
                {p.bio}
              </p>

              {/* Quote */}
              <blockquote className="relative max-w-sm mx-auto">
                <span className="font-display text-5xl text-accent/15 leading-none select-none absolute -top-5 -left-2">"</span>
                <p className="font-display text-lg italic text-ivory/75 leading-snug pl-4">
                  {p.quote}
                </p>
              </blockquote>
            </article>
          ))}
        </div>

        {/* Bottom agency tagline */}
        <div className="mt-20 lg:mt-28 pt-10 border-t border-ivory/10 text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-ivory/35">
            Strategy · Creativity · Distribution · Growth — One team, one outcome.
          </p>
        </div>
      </div>
    </section>
  );
}

export const SERVICES = [
  { i: Megaphone, t: "Social Media Marketing", d: "Always-on content systems built for retention and reach." },
  { i: TrendingUp, t: "Performance Marketing", d: "Paid media engineered for ROAS, not vanity metrics." },
  { i: Camera, t: "Photography & Videography", d: "Cinematic capture for hospitality, lifestyle and brand films." },
  { i: Sparkles, t: "Influencer Marketing", d: "Curated talent partnerships that feel native to your category." },
  { i: Palette, t: "Branding & Identity", d: "Logo systems, visual language and brand books that age well." },
  { i: MailIcon, t: "Email Marketing", d: "Lifecycle journeys that turn lists into revenue." },
  { i: MessageCircle, t: "WhatsApp Marketing", d: "Conversational commerce that closes warm leads in hours." },
  { i: Globe, t: "Website Development", d: "Fast, conversion-tuned websites with editorial soul." },
  { i: Database, t: "CRM Services", d: "Set up, segment and automate so growth stops being manual." },
  { i: Hotel, t: "OTA Listings & Management", d: "Hospitality distribution done with discipline." },
  { i: Calendar, t: "Event Curation", d: "Brand experiences that move audiences and the algorithm." },
  { i: Play, t: "Brand Films", d: "High-end visual storytelling that commands attention and emotion." },
];

function Services() {
  const { shown, containerRef } = useStaggerReveal({ staggerMs: 80 });
  return (
    <section id="services" className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Capabilities
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance">
              Twelve disciplines.<br />
              <em className="italic text-emerald-deep">One growth engine.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/65 max-w-md text-[15px] leading-relaxed">
            Brand, content, performance and technology — orchestrated by a single team that owns the
            outcome, not just the deliverable.
          </p>
        </div>

        <div ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {SERVICES.map((s, idx) => (
            <a
              key={s.t}
              href={`/services/${s.t.toLowerCase().replace(/\s+/g, '-').replace(/-&-/g, '-')}`}
              className="group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between"
              style={staggerItemStyle(shown, idx, 80)}
            >
              <div className="flex items-start justify-between">
                <s.i className="!size-7 text-emerald-deep group-hover:text-accent transition-colors" />
                <span className="text-[10px] font-mono text-foreground/40 group-hover:text-ivory/40">
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
          {/* Grid completely filled with 12 services */}
        </div>
      </div>
    </section>
  );
}

function SocialShowcase() {
  const posts = [
    { img: hero2, kind: "Reel", metric: "1.2M plays" },
    { img: work3, kind: "Carousel", metric: "84K saves" },
    { img: work2, kind: "Story", metric: "92% completion" },
    { img: work4, kind: "Reel", metric: "608K plays" },
    { img: work1, kind: "Campaign", metric: "+412% reach" },
    { img: hero1, kind: "Reel", metric: "Viral · 2.4M" },
  ];
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Social Media
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
              Content that <em className="italic text-emerald-deep">earns the scroll.</em>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-deep border-b border-emerald-deep pb-1"
          >
            <Instagram className="!size-4" /> Follow @habigo.360
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((p, i) => (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-sm bg-secondary ${
                i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/5]"
              }`}
            >
              <img src={p.img} alt="" className="size-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/85 transition-colors duration-500 flex flex-col items-center justify-center text-center p-4">
                <div className="text-[10px] uppercase tracking-[0.25em] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.kind}
                </div>
                <div className="font-display text-xl text-ivory mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  {p.metric}
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-ivory/95 backdrop-blur text-emerald-deep text-[9px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full">
                {p.kind}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsDashboard() {
  return (
    <section id="results" className="bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.18),_transparent_50%)]" />
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
              <span className="w-10 h-px bg-ivory/30" /> Paid Marketing
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,5rem)] leading-[1] font-light">
              Creativity is great.<br />
              <em className="italic text-accent">Results are better.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-ivory/65 text-[15px] leading-relaxed">
            Every campaign tied to a number. Every number tied to a decision. Here's the proof from
            the last twelve months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-sm overflow-hidden">
          {[
            { v: 45, s: "L+", l: "Revenue Generated", sub: "Lakhs INR" },
            { v: 7, s: "x", l: "ROAS Peak", sub: "On scaled accounts" },
            { v: 703, s: "K", l: "Revenue in 15 days", sub: "Single campaign" },
            { v: 38, s: "%", l: "Avg CVR Lift", sub: "Pre vs post takeover" },
          ].map((m) => (
            <div key={m.l} className="bg-ivory-warm p-8">
              <div className="font-display text-5xl lg:text-6xl text-emerald-deep">
                <Counter to={m.v} suffix={m.s} />
              </div>
              <div className="mt-4 text-sm text-foreground">{m.l}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/45 mt-1">
                {m.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Mini chart card */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-emerald-soft/40 border border-ivory/10 rounded-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/50">
                  Revenue Trend · Q3
                </div>
                <div className="font-display text-3xl mt-1">₹ 703,420</div>
              </div>
              <div className="text-accent text-sm">▲ 312% vs Q2</div>
            </div>
            <MiniChart />
          </div>
          <div className="bg-emerald-soft/40 border border-ivory/10 rounded-sm p-8 flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/50">
                Top Performing
              </div>
              <div className="font-display text-2xl mt-2 leading-tight">Maison Lumière</div>
              <div className="text-sm text-ivory/60 mt-1">Hospitality · Meta + Google</div>
            </div>
            <div className="mt-6 space-y-3 text-sm">
              {[
                ["CTR", "4.8%"],
                ["CPM", "₹ 142"],
                ["ROAS", "7.2x"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-t border-ivory/10 pt-3">
                  <span className="text-ivory/55 uppercase text-[10px] tracking-[0.2em]">{k}</span>
                  <span className="text-accent font-mono">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniChart() {
  const points = [10, 18, 14, 26, 22, 38, 34, 52, 48, 64, 78, 88];
  const max = 100;
  const w = 600;
  const h = 160;
  const step = w / (points.length - 1);
  const d = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`)
    .join(" ");
  const area = `${d} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-40">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.11 80)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.78 0.11 80)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={d} stroke="oklch(0.78 0.11 80)" strokeWidth="2" fill="none" />
      {points.map((p, i) => (
        <circle key={i} cx={i * step} cy={h - (p / max) * h} r="3" fill="oklch(0.97 0.012 90)" />
      ))}
    </svg>
  );
}

function Gallery() {
  const cats = [
    { img: work1, label: "Property" },
    { img: work2, label: "Hospitality" },
    { img: work3, label: "Lifestyle" },
    { img: work4, label: "Drone & Aerial" },
  ];
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60">
            Photography & Videography
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            A gallery, not a catalogue.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cats.map((c) => (
            <article key={c.label} className="group relative aspect-[3/4] overflow-hidden rounded-sm">
              <img src={c.img} alt={c.label} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="font-display text-2xl text-ivory">{c.label}</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-accent mt-1">
                  View series →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { shown, containerRef } = useStaggerReveal({ staggerMs: 100 });
  const steps = [
    ["01", "Research & Discovery", "Deep dive into category, customer and competitive whitespace."],
    ["02", "Audience Profiling", "Behavioral segments built from data, not demographics."],
    ["03", "Strategy Development", "Positioning, narrative and a measurable growth plan."],
    ["04", "Content Production", "Cinematic capture, design systems and platform-native assets."],
    ["05", "Campaign Execution", "Paid, organic and CRM moving as one orchestrated motion."],
    ["06", "Optimization & Reporting", "Weekly iteration. Monthly insight. Always-on growth."],
  ];
  return (
    <section className="bg-emerald-deep text-ivory py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
            <span className="w-10 h-px bg-ivory/30" /> Our Process
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            Six steps from <em className="italic text-accent">brief</em> to{" "}
            <em className="italic text-accent">breakthrough.</em>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-12 h-px bg-ivory/15 hidden lg:block" />
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {steps.map(([n, t, d]) => (
              <div key={n} className="relative">
                <div className="hidden lg:block absolute -top-1.5 size-4 rounded-full bg-accent ring-4 ring-emerald-deep" />
                <div className="lg:pt-12">
                  <div className="font-mono text-xs text-accent mb-3">{n}</div>
                  <div className="font-display text-xl mb-2">{t}</div>
                  <p className="text-sm text-ivory/60 leading-relaxed">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactCounters() {
  const stats = [
    { v: 100, s: "+", l: "Projects Delivered" },
    { v: 50, s: "+", l: "Brands Served" },
    { v: 12, s: "M+", l: "Content Reach" },
    { v: 9, s: "+", l: "Industries Served" },
  ];
  return (
    <section className="bg-accent text-emerald-deep py-24 lg:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {stats.map((s) => (
            <div key={s.l} className="border-t border-emerald-deep/20 pt-6">
              <div className="font-display text-6xl lg:text-8xl font-light leading-none">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] mt-4 text-emerald-deep/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const { shown, containerRef } = useStaggerReveal({ staggerMs: 80 });
  const team = [
    { 
      n: "Strategy", 
      c: 5, 
      e: "Brand & business strategy",
      members: [
        { name: "Strategy Specialist 1" },
        { name: "Strategy Specialist 2" },
        { name: "Strategy Specialist 3" },
      ]
    },
    { 
      n: "Brand Management", 
      c: 4, 
      e: "Client & account leadership",
      members: [
        { name: "Brand Specialist 1" },
        { name: "Brand Specialist 2" },
      ]
    },
    { 
      n: "Design", 
      c: 6, 
      e: "Identity, motion & UI",
      members: [
        { name: "Design Specialist 1" },
        { name: "Design Specialist 2" },
        { name: "Design Specialist 3" },
        { name: "Design Specialist 4" },
      ]
    },
    { 
      n: "Video Production", 
      c: 5, 
      e: "Direction, capture & edit",
      members: [
        { name: "Arpit", photo: arpitImg },
        { name: "Dipanshu", photo: dipanshuImg },
        { name: "Video Specialist 3" },
      ]
    },
    { 
      n: "Performance Marketing", 
      c: 4, 
      e: "Paid, CRM & analytics",
      members: [
        { name: "Marketing Specialist 1" },
        { name: "Marketing Specialist 2" },
      ]
    },
  ];
  return (
    <section id="team" className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> The Team
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
              A studio of <em className="italic text-emerald-deep">specialists.</em>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-24">
          {team.map((t, i) => (
            <div key={t.n}>
              {/* Category Header */}
              <div className="border-b border-border pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="flex items-center gap-6">
                  <div className="font-mono text-sm text-emerald-deep/40">0{i + 1}</div>
                  <h3 className="font-display text-3xl md:text-4xl text-emerald-deep">{t.n}</h3>
                </div>
                <div className="md:text-right">
                  <div className="text-[10px] uppercase tracking-[0.22em] text-foreground/50">
                    {t.c} Specialists · 7+ yrs avg
                  </div>
                  <div className="text-sm text-foreground/60 mt-1">{t.e}</div>
                </div>
              </div>

              {/* Members Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
                {t.members.map((m: any, idx) => (
                  <div key={idx} className="flex flex-col gap-4 group">
                    <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden relative group-hover:opacity-90 transition-opacity">
                      {m.photo ? (
                        <img src={m.photo} alt={m.name} className="size-full object-cover" loading="lazy" />
                      ) : (
                        <div className="size-full flex flex-col items-center justify-center text-foreground/20 bg-emerald-soft/10">
                          <Camera className="size-8 opacity-20 mb-2" />
                          <span className="text-[9px] uppercase tracking-[0.2em] opacity-40">Photo pending</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="font-display text-xl leading-tight text-foreground">{m.name}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-deep/60 mt-1">{t.n}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const logos = [
    "Maison Lumière", "Olive & Ember", "Atelier Noir", "Verde Sanctuary",
    "Ivory & Co.", "Aurora Rooms", "Mistral", "House of Saffron",
    "Lush Stay", "North Cove", "Velvet Hour", "The Calico Co.",
  ];
  return (
    <section id="clients" className="bg-emerald-deep text-ivory py-24 lg:py-32 border-t border-ivory/5">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Clients</span>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.05] font-light">
            Trusted by brands we're proud to call <em className="italic text-accent">friends.</em>
          </h2>
          <p className="mt-4 text-sm text-ivory/55">
            50+ brands · 9 industries · across hospitality, lifestyle, F&B, fashion, real estate
          </p>
        </div>
      </div>
      <div className="overflow-hidden border-y border-ivory/10 py-10">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((l, i) => (
            <span key={i} className="font-display italic text-3xl text-ivory/40 hover:text-accent transition-colors">
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className="overflow-hidden py-6">
        <div className="flex gap-16 animate-marquee-slow whitespace-nowrap" style={{ animationDirection: "reverse" }}>
          {[...logos.slice().reverse(), ...logos.slice().reverse()].map((l, i) => (
            <span key={i} className="font-display italic text-2xl text-ivory/25">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const { shown, containerRef } = useStaggerReveal({ staggerMs: 100 });
  const t = [
    {
      q: "HabiGo didn't just market our resort — they rebuilt how we present ourselves. Direct bookings up 312% in two quarters.",
      n: "Rohan Kapoor",
      r: "Owner, Maison Lumière",
    },
    {
      q: "They are the rare partner that thinks like an owner. Strategy, content, performance — all under one roof, all aligned.",
      n: "Priya Shah",
      r: "Founder, Atelier Noir",
    },
    {
      q: "The craft is cinematic. The reporting is sharp. We finally have a team that respects both the brand and the spreadsheet.",
      n: "Vikram Iyer",
      r: "CMO, Verde Group",
    },
  ];
  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" /> Testimonials
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            In their <em className="italic text-emerald-deep">words.</em>
          </h2>
        </div>
        <div ref={containerRef} className="grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <article
              key={i}
              style={staggerItemStyle(shown, i, 100)} className="group bg-card border border-border rounded-sm p-8 lg:p-10 flex flex-col justify-between min-h-[380px] hover:bg-emerald-deep hover:text-ivory transition-colors duration-500"
            >
              <div>
                <div className="font-display text-6xl leading-none text-accent">"</div>
                <blockquote className="font-display text-xl lg:text-2xl leading-snug mt-4 text-balance">
                  {x.q}
                </blockquote>
              </div>
              <footer className="mt-8 pt-6 border-t border-border group-hover:border-ivory/15">
                <div className="font-semibold">{x.n}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-foreground/50 group-hover:text-ivory/55 mt-1">
                  {x.r}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', industry: '', service: '', brief: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: (result) => {
      if (result.success) {
        setFormStatus('success');
        setForm({ name: '', company: '', email: '', phone: '', industry: '', service: '', brief: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
      }
    },
    onError: () => setFormStatus('error'),
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),_transparent_55%)]" />
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 relative">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
              <span className="w-10 h-px bg-ivory/30" /> Contact
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,5rem)] leading-[1] font-light">
              Let's build something <em className="italic text-accent">remarkable.</em>
            </h2>
            <p className="mt-6 text-ivory/65 max-w-md">
              Tell us about your brand. We'll respond within one working day with a perspective —
              not a pitch deck.
            </p>

            <div className="mt-12 space-y-6">
              {[
                { i: MessageCircle, l: "WhatsApp", v: "+91 89638 58888", href: "https://wa.me/918963858888" },
                { i: MailIcon, l: "Email", v: "habigo360@gmail.com", href: "mailto:habigo360@gmail.com" },
                { i: Phone, l: "Phone", v: "+91 89638 58888", href: "tel:+918963858888" },
                { i: MapPin, l: "Studio", v: "Jaipur · India", href: "https://maps.app.goo.gl/DWkbqDGGVGtJXyiF9" },
              ].map((x) => (
                <a
                  key={x.l}
                  href={x.href ?? "#"}
                  target={x.href?.startsWith("http") ? "_blank" : undefined}
                  rel={x.href?.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-5 group"
                >
                  <div className="size-12 rounded-full bg-ivory/5 border border-ivory/10 grid place-items-center group-hover:bg-accent group-hover:border-accent transition-colors">
                    <x.i className="!size-5 text-accent group-hover:text-emerald-deep" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/45">
                      {x.l}
                    </div>
                    <div className="text-base">{x.v}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const fd = new FormData(target);
              const data = {
                name: fd.get('name') as string || '',
                company: fd.get('company') as string || '',
                email: fd.get('email') as string || '',
                phone: fd.get('phone') as string || '',
                industry: fd.get('industry') as string || '',
                service: fd.get('service') as string || '',
                brief: fd.get('brief') as string || '',
              };
              mutation.mutate({ data });
            }}
            className="lg:col-span-7 bg-ivory text-foreground p-8 lg:p-12 rounded-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Full Name" placeholder="Alex Rivera" name="name" />
              <Field label="Company" placeholder="Brand or studio" name="company" />
              <Field label="Email" type="email" placeholder="you@brand.com" name="email" />
              <Field label="Phone" placeholder="+91 ..." name="phone" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <Field label="Industry" placeholder="Hospitality, F&B, Fashion..." name="industry" />
              <div>
                <label className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60">
                  Services Required
                </label>
                <select name="service" className="w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors">
                  <option>Full-stack growth partnership</option>
                  <option>Branding & identity</option>
                  <option>Performance marketing</option>
                  <option>Content & production</option>
                  <option>Website development</option>
                  <option>Other / not sure yet</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60">
                Project Brief
              </label>
              <textarea
                name="brief"
                rows={4}
                placeholder="A few lines about your goals, timeline and budget range..."
                className="w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors resize-none"
              />
            </div>
            {formStatus === 'success' && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-emerald-soft/20 text-emerald-soft text-sm">
                <svg className="!size-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                Thank you! We'll be in touch within one working day.
              </div>
            )}
            {formStatus === 'error' && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-red-500/10 text-red-600 text-sm">
                <svg className="!size-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Something went wrong. Please email us directly at habigo360@gmail.com
              </div>
            )}
            <button
              type="submit"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-emerald-deep text-ivory px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-semibold hover:bg-accent hover:text-emerald-deep transition-colors"
            >
              <Send className="!size-4" />
              Send Inquiry
            </button>
            <p className="text-[11px] text-foreground/50">
              By submitting you agree to our privacy practices. We never share your data.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  name,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  name?: string;
}) {
  return (
    <div>
      <label className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors"
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-emerald-deep text-ivory border-t border-ivory/10">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="flex items-baseline gap-1.5">
            <span className="font-display text-3xl font-medium">HabiGo</span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-accent uppercase">
              360
            </span>
          </div>
          <p className="mt-6 text-ivory/55 text-sm max-w-sm leading-relaxed">
            A creative growth agency for ambitious brands. Marketing, content, branding, technology
            and business strategy — under one roof.
          </p>
          <div className="flex gap-3 mt-8">
            {[Instagram, Linkedin, Twitter].map((I, i) => (
              <a
                key={i}
                href="https://www.instagram.com/habigo360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="size-10 rounded-full border border-ivory/15 grid place-items-center hover:bg-accent hover:border-accent hover:text-emerald-deep transition-colors"
              >
                <I className="!size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.id}>
                <a href={n.id === 'home' ? '/' : n.id === 'about' ? '/about' : n.id === 'services' ? '/services' : `/#${n.id}`} className="text-ivory/75 hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5">Services</div>
          <ul className="space-y-3 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.t} className="text-ivory/75">
                {s.t}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5">Contact</div>
          <ul className="space-y-3 text-sm text-ivory/75">
            <li>habigo360@gmail.com</li>
            <li>+91 89638 58888</li>
            <li>
              <a href="https://maps.app.goo.gl/DWkbqDGGVGtJXyiF9" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Jaipur · India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-ivory/40">
          <div>© {new Date().getFullYear()} HabiGo 360. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function StickyCTA() {
  return (
    <a
      href="https://wa.me/918963858888"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-accent text-emerald-deep px-5 py-3 rounded-full shadow-2xl shadow-emerald-deep/30 font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-ivory transition-colors"
    >
      <MessageCircle className="!size-4" />
      Book a Discovery Call
    </a>
  );
}
