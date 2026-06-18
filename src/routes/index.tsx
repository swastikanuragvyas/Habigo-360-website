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
  Plus,
  Minus,
} from "lucide-react";

import ImmersiveHero from "@/components/ImmersiveHero";
import LivingPortfolio from "@/components/LivingPortfolio";
import InstagramMockups from "@/components/InstagramMockups";
import OurWorkCarousels from "@/components/OurWorkCarousels";
import { ScrollProgress } from "@/components/AmbientStorytelling";
import { useStaggerReveal, staggerItemStyle } from "@/hooks/useStaggerReveal";
import { useQuery, useMutation } from "@tanstack/react-query";
import { submitContact } from "@/lib/api/contact.server";
import api from "@/lib/api";

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
import logoImg from "@/assets/logo.png";
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
  { id: "about", label: "About us" },
  { id: "services", label: "Services" },
  { id: "work", label: "Our Work" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "contact", label: "Contact us" },
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

function Counter({
  to,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
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
      <About />
      <Services />
      <ImpactCounters />
      <Clients />
      <WhyChooseUs />
      <OurWorkCarousels />
      <InstagramMockups />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
      <StickyCTA />
    </div>
  );
}

function WhyChooseUs() {
  const reasons = [
    {
      num: "01",
      title: "Data-Driven Strategy",
      desc: "Every creative decision is backed by analytics. We don't guess what works; we measure it.",
    },
    {
      num: "02",
      title: "In-House Specialists",
      desc: "No outsourced generalists. You get direct access to our team of dedicated experts across all disciplines.",
    },
    {
      num: "03",
      title: "Transparent Reporting",
      desc: "Real-time dashboards and weekly check-ins. You'll always know exactly where your budget is going and the return it generates.",
    },
    {
      num: "04",
      title: "Scalable Growth",
      desc: "We build systems designed to scale with your ambition, ensuring sustainable long-term success.",
    },
  ];

  return (
    <section id="why-choose-us" className="bg-background py-28 lg:py-40 border-t border-border">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" /> Why Choose Us
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            An agency built for <em className="italic text-emerald-deep">outcomes.</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="bg-background p-10 lg:p-14 hover:bg-secondary/40 transition-colors"
            >
              <div className="font-mono text-sm text-accent mb-6">{r.num}</div>
              <h3 className="font-display text-3xl mb-4">{r.title}</h3>
              <p className="text-foreground/70 leading-relaxed max-w-md">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQs() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "What is your typical project timeline?",
      a: "Our typical onboarding and strategy phase takes 2-3 weeks, followed by immediate execution. Depending on the scope, a full brand overhaul can take 6-8 weeks, while performance marketing and content systems are deployed as ongoing monthly engagements.",
    },
    {
      q: "Do you work with startups or only established brands?",
      a: "We work with ambitious brands at all stages. Whether you're a funded startup needing a scalable growth system or an established enterprise looking to refresh your market presence, our strategies are tailored to your current scale.",
    },
    {
      q: "How do you measure success and report ROI?",
      a: "We establish clear KPIs (Key Performance Indicators) during discovery. For performance marketing, this means strict ROAS and CAC tracking. For brand and content, we measure reach, engagement rate, and brand sentiment, delivering comprehensive reports every month.",
    },
    {
      q: "Can we hire you for just one service, like Social Media?",
      a: "Absolutely. While our biggest successes come from our full-stack growth partnerships, we frequently engage with clients for specific disciplines like performance marketing, video production, or branding to fill internal gaps.",
    },
  ];

  return (
    <section id="faqs" className="bg-secondary/30 py-28 lg:py-40">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
            <span className="w-10 h-px bg-emerald-deep/40" /> FAQs
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
            Common <em className="italic text-emerald-deep">questions.</em>
          </h2>
          <p className="mt-6 text-foreground/70 max-w-md">
            Everything you need to know about how we work, what we charge, and what you can expect
            from a partnership with HabiGo 360.
          </p>
        </div>
        <div className="lg:col-span-7 space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-border bg-background rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-secondary/20 transition-colors"
              >
                <span className="font-display text-xl lg:text-2xl">{faq.q}</span>
                <span className="text-emerald-deep shrink-0 ml-4">
                  {open === idx ? <Minus className="!size-5" /> : <Plus className="!size-5" />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 lg:p-8 pt-0 text-foreground/70 leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
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
        <a href="/" className="flex items-center">
          <img src={logoImg} alt="HabiGo 360" className="h-44 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((n) => {
            if (n.id === "services") {
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
                    <svg
                      className={`inline-block ml-1.5 w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
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
                          href={`/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`}
                          className="flex items-center gap-3 px-6 py-2.5 text-sm text-ivory/70 hover:text-accent hover:bg-white/5 transition-colors"
                        >
                          <s.i className="!size-4 text-accent/60" />
                          {s.t}
                        </a>
                      ))}
                      <div className="border-t border-ivory/10 mt-2 pt-2">
                        <a
                          href="/services"
                          className="block px-6 py-2.5 text-[10px] uppercase tracking-widest text-accent hover:bg-white/5 transition-colors"
                        >
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
                href={n.href ?? (n.id === "home" ? "/" : n.id === "about" ? "/about" : `/#${n.id}`)}
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
              href={
                n.href ??
                (n.id === "home"
                  ? "/"
                  : n.id === "about"
                    ? "/about"
                    : n.id === "services"
                      ? "/services"
                      : `/#${n.id}`)
              }
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
              <img
                src={about}
                alt="HabiGo studio in production"
                className="size-full object-cover"
                loading="lazy"
              />
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
  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const { data } = await api.get("/settings");
      return data;
    },
  });
  const getImg = (key: string, def: string) => settings?.find((s: any) => s.key === key)?.value || def;

  const f = [
    {
      img: getImg("founder1", founder1),
      name: "Anushka Mittal",
      role: "Founder & CEO",
      bio: "Leads strategy, brand vision and client growth. Hospitality-trained, obsessed with the details others miss.",
      quote: "We don't sell creativity. We sell outcomes — wrapped in beautiful work.",
    },
    {
      img: getImg("founder2", founder2),
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
            Two people who believe that brand and growth are the same discipline — and that great
            agencies prove it every quarter.
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
                    maskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
                    maskComposite: "intersect",
                    WebkitMaskComposite: "source-in",
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
                <div className="font-display text-3xl lg:text-4xl tracking-tight">{p.name}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-accent mt-2 font-semibold">
                  {p.role}
                </div>
              </div>

              {/* Gold divider */}
              <div className="w-10 h-px bg-accent/60 mx-auto mb-5" />

              {/* Bio */}
              <p className="text-sm text-ivory/50 leading-relaxed max-w-xs mx-auto mb-6">{p.bio}</p>

              {/* Quote */}
              <blockquote className="relative max-w-sm mx-auto">
                <span className="font-display text-5xl text-accent/15 leading-none select-none absolute -top-5 -left-2">
                  "
                </span>
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
  {
    i: Megaphone,
    t: "Social Media Marketing",
    d: "Always-on content systems built for retention and reach.",
  },
  {
    i: TrendingUp,
    t: "Performance Marketing",
    d: "Paid media engineered for ROAS, not vanity metrics.",
  },
  {
    i: Camera,
    t: "Photography & Videography",
    d: "Cinematic capture for hospitality, lifestyle and brand films.",
  },
  {
    i: Sparkles,
    t: "Influencer Marketing",
    d: "Curated talent partnerships that feel native to your category.",
  },
  {
    i: Palette,
    t: "Branding & Identity",
    d: "Logo systems, visual language and brand books that age well.",
  },
  { i: MailIcon, t: "Email Marketing", d: "Lifecycle journeys that turn lists into revenue." },
  {
    i: MessageCircle,
    t: "WhatsApp Marketing",
    d: "Conversational commerce that closes warm leads in hours.",
  },
  { i: Globe, t: "Website Development", d: "Fast, conversion-tuned websites with editorial soul." },
  {
    i: Database,
    t: "CRM Services",
    d: "Set up, segment and automate so growth stops being manual.",
  },
  { i: Hotel, t: "OTA Listings & Management", d: "Hospitality distribution done with discipline." },
  {
    i: Calendar,
    t: "Event Curation",
    d: "Brand experiences that move audiences and the algorithm.",
  },
  {
    i: Play,
    t: "Brand Films",
    d: "High-end visual storytelling that commands attention and emotion.",
  },
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
              Twelve disciplines.
              <br />
              <em className="italic text-emerald-deep">One growth engine.</em>
            </h2>
          </div>
          <p className="lg:col-span-5 text-foreground/65 max-w-md text-[15px] leading-relaxed">
            Brand, content, performance and technology — orchestrated by a single team that owns the
            outcome, not just the deliverable.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border"
        >
          {SERVICES.map((s, idx) => (
            <a
              key={s.t}
              href={`/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`}
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

function Clients() {
  const logos = [
    { name: "Bhanpur Haveli", image: "/logos/1.png" },
    { name: "Namli Hospitality", image: "/logos/2.png" },
    { name: "Sajjanbagh", image: "/logos/3.png" },
    { name: "Indian Kitchen", image: "/logos/4.png" },
    { name: "Dolce Vita", image: "/logos/5.png" },
    { name: "Prestige Group", image: "/logos/6.png" },
    { name: "Flat Fee Buyers", image: "/logos/7.png" },
    { name: "The Gypsy Adventures", image: "/logos/8.png" },
    { name: "Maxus Builder", image: "/logos/9.png" },
    { name: "Anvaya", image: "/logos/10.png" },
    { name: "The Times of India", image: "/logos/11.png" },
    { name: "Vicinity", image: "/logos/12.png" },
    { name: "SMR Holdings", image: "/logos/13.png" },
    { name: "Nakoda Jewellers", image: "/logos/14.png" },
    { name: "Foodworks", image: "/logos/15.png" },
    { name: "Rare Rabbit", image: "/logos/16.png" },
    { name: "Burger Farm", image: "/logos/17.png" },
    { name: "Hotel Vishranti", image: "/logos/18.png" },
    { name: "Bari's Personal Training", image: "/logos/19.png" },
    { name: "IIM Mumbai", image: "/logos/20.png" },
  ];

  return (
    <section
      id="clients"
      className="bg-emerald-deep text-ivory py-24 lg:py-32 border-t border-ivory/5 overflow-hidden"
    >
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 mb-14">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Clients</span>
          <h2 className="mt-6 font-display text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.05] font-light">
            Trusted by brands we're proud to call <em className="italic text-accent">friends.</em>
          </h2>
          <p className="mt-4 text-sm text-ivory/55">
            50+ brands · 9 industries · across hospitality, lifestyle, F&B, fashion, real estate
          </p>
        </div>
      </div>

      {/* Infinite slider row 1 */}
      <div className="relative flex overflow-x-hidden border-y border-ivory/10">
        <div className="py-10 flex animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="pr-8 shrink-0">
              <div
                className="flex items-center justify-center bg-white px-6 py-4 rounded-xl hover:bg-white/90 transition-colors w-64 h-28 shadow-sm"
              >
                <img src={l.image} alt={l.name} className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite slider row 2 - Reverse */}
      <div className="relative flex overflow-x-hidden border-b border-ivory/10">
        <div
          className="py-10 flex animate-marquee-slow whitespace-nowrap w-max hover:[animation-play-state:paused]"
          style={{ animationDirection: "reverse" }}
        >
          {[...logos.slice().reverse(), ...logos.slice().reverse()].map(
            (l, i) => (
              <div key={i} className="pr-8 shrink-0">
                <div
                  className="flex items-center justify-center bg-white px-6 py-4 rounded-xl hover:bg-white/90 transition-colors w-64 h-28 shadow-sm"
                >
                  <img src={l.image} alt={l.name} className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ),
          )}
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
              style={staggerItemStyle(shown, i, 100)}
              className="group bg-card border border-border rounded-sm p-8 lg:p-10 flex flex-col justify-between min-h-[380px] hover:bg-emerald-deep hover:text-ivory transition-colors duration-500"
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
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    brief: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");
  const mutation = useMutation({
    mutationFn: submitContact,
    onSuccess: (result) => {
      if (result.success) {
        setFormStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          industry: "",
          service: "",
          brief: "",
        });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    },
    onError: () => setFormStatus("error"),
  });

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <section
      id="contact"
      className="bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden"
    >
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
                {
                  i: MessageCircle,
                  l: "WhatsApp",
                  v: "+91 89638 58888",
                  href: "https://wa.me/918963858888",
                },
                {
                  i: MailIcon,
                  l: "Email",
                  v: "admin@habigo360.com",
                  href: "mailto:admin@habigo360.com",
                },
                { i: Phone, l: "Phone", v: "+91 89638 58888", href: "tel:+918963858888" },
                { i: MapPin, l: "Studio", v: "Jaipur", href: undefined },
              ].map((x) => {
                const Tag = x.href ? "a" : "div";
                return (
                  <Tag
                    key={x.l}
                    href={x.href ?? undefined}
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
                  </Tag>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as HTMLFormElement;
              const fd = new FormData(target);
              const data = {
                name: (fd.get("name") as string) || "",
                company: (fd.get("company") as string) || "",
                email: (fd.get("email") as string) || "",
                phone: (fd.get("phone") as string) || "",
                industry: (fd.get("industry") as string) || "",
                service: (fd.get("service") as string) || "",
                brief: (fd.get("brief") as string) || "",
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
                <select
                  name="service"
                  required
                  className="w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors"
                >
                  <option value="" disabled selected>
                    Select a service
                  </option>
                  <option value="Full-stack growth partnership">
                    Full-stack growth partnership
                  </option>
                  <option value="Branding & identity">Branding & identity</option>
                  <option value="Performance marketing">Performance marketing</option>
                  <option value="Content & production">Content & production</option>
                  <option value="Website development">Website development</option>
                  <option value="Other / not sure yet">Other / not sure yet</option>
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
                required
                minLength={10}
                placeholder="A few lines about your goals, timeline and budget range..."
                className="w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors resize-none"
              />
            </div>
            {formStatus === "success" && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-emerald-soft/20 text-emerald-soft text-sm">
                <svg
                  className="!size-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Thank you! We'll be in touch within one working day.
              </div>
            )}
            {formStatus === "error" && (
              <div className="flex items-center gap-3 px-5 py-3 rounded-lg bg-red-500/10 text-red-600 text-sm">
                <svg
                  className="!size-5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Something went wrong. Please email us directly at admin@habigo360.com
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
  required = true,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
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
        required={required}
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
          <div className="flex items-center">
            <img src={logoImg} alt="HabiGo 360" className="h-48 w-auto" />
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
                <a
                  href={
                    n.id === "home"
                      ? "/"
                      : n.id === "about"
                        ? "/about"
                        : n.id === "services"
                          ? "/services"
                          : `/#${n.id}`
                  }
                  className="text-ivory/75 hover:text-accent"
                >
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
            <li>admin@habigo360.com</li>
            <li>+91 89638 58888</li>
            <li>Jaipur</li>
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
