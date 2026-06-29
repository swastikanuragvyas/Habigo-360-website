import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useReveal } from "@/routes/index";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";

import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";

const PROJECTS = [
  {
    img: work1,
    tag: "Hospitality / Branding",
    title: "Maison Lumière",
    meta: "+312% direct bookings",
    description:
      "Complete brand overhaul for a luxury boutique hotel chain. Identity system, website, social campaign and OTA optimisation working as one motion.",
    category: "branding",
    results: [
      "312% direct booking increase",
      "4.8x ROAS on launch campaign",
      "94 Lighthouse score",
    ],
  },
  {
    img: work2,
    tag: "F&B / Content",
    title: "Olive & Ember",
    meta: "8.4M organic reach",
    description:
      "Always-on content ecosystem for a premium restaurant group. Editorial calendars, reel production and influencer seeding that drove 8.4M organic impressions.",
    category: "content",
    results: ["8.4M organic reach", "6.2% engagement rate", "120+ pieces/month"],
  },
  {
    img: work3,
    tag: "Fashion / Campaign",
    title: "Atelier Noir",
    meta: "5.2x ROAS · 90 days",
    description:
      "Full-funnel performance campaign for a direct-to-consumer fashion label. Creative production, audience strategy and conversion optimisation.",
    category: "performance",
    results: ["5.2x ROAS", "38% CVR lift", "₹12L+ revenue in 90 days"],
  },
  {
    img: work4,
    tag: "Resort / Film",
    title: "Verde Sanctuary",
    meta: "Brand film + drone series",
    description:
      "Cinematic brand film and aerial photography series for a wellness resort. Pre-production through post, delivered across social, web and OTA.",
    category: "film",
    results: ["82% avg. watch time", "2.4M organic views", "35+ deliverables"],
  },
  {
    img: work5,
    tag: "Identity System",
    title: "Ivory & Co.",
    meta: "Full visual rebuild",
    description:
      "End-to-end brand identity for a luxury home fragrance label. Logo system, packaging, guidelines and digital presence.",
    category: "branding",
    results: ["6-week turnaround", "94% client satisfaction", "Scalable system"],
  },
  {
    img: work2,
    tag: "Social / Reel Strategy",
    title: "Aurora Rooms",
    meta: "1.2M plays in 7 days",
    description:
      "Short-form content strategy for a boutique stay brand. Viral reel production, trend adaptation and community growth.",
    category: "content",
    results: ["1.2M plays", "92% completion rate", "15K new followers"],
  },
];

const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "branding", label: "Branding" },
  { id: "content", label: "Content" },
  { id: "performance", label: "Performance" },
  { id: "film", label: "Film" },
];

export default function LivingPortfolio() {
  const { data: dbCaseStudies } = useQuery({
    queryKey: ["publicCaseStudies"],
    queryFn: async () => {
      const { data } = await api.get("/case-studies");
      return data;
    }
  });

  const dynamicCaseStudies = (dbCaseStudies || [])
    .filter((cs: any) => cs.visibility !== false)
    .map((cs: any) => ({
      img: cs.coverImage || work1,
      tag: "Case Study",
      title: cs.title,
      meta: cs.metrics && cs.metrics.length > 0 ? cs.metrics[0] : "",
      description: cs.description,
      category: "all",
      results: cs.metrics || [],
    }));

  const ALL_PROJECTS = [...dynamicCaseStudies, ...PROJECTS];

  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);
  const { ref, shown } = useReveal();

  const filtered = filter === "all" ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === filter || p.category === "all");
  const currentProject = lightbox !== null ? filtered[lightbox] : null;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setScrollPos(el.scrollLeft);
      setMaxScroll(el.scrollWidth - el.clientWidth);
    };
    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, [filter]);

  const scroll = (dir: number) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const progressPct = maxScroll > 0 ? (scrollPos / maxScroll) * 100 : 0;

  return (
    <section id="work" className="bg-emerald-deep text-ivory py-16 lg:py-24">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`flex items-end justify-between flex-wrap gap-6 mb-16 ${shown ? "reveal" : "opacity-0"}`}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
              <span className="w-10 h-px bg-ivory/30" /> Selected Work
            </span>
            <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light">
              Case studies, <em className="italic text-accent">not portfolios.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-[11px] uppercase tracking-[0.22em] text-accent border-b border-accent pb-1 hover:text-ivory hover:border-ivory transition-colors"
          >
            Request full case studies →
          </a>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`text-xs uppercase tracking-[0.22em] px-5 py-2.5 rounded-full border transition-all duration-300 ${
                filter === f.id
                  ? "bg-accent text-emerald-deep border-accent font-semibold"
                  : "border-ivory/20 text-ivory/60 hover:border-ivory/50 hover:text-ivory"
              }`}
            >
              {f.id === "all" ? <Filter className="!size-3 inline mr-1.5" /> : null}
              {f.label}
            </button>
          ))}
        </div>

        {/* Snap-scroll carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x-mandatory pb-6 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filtered.map((project, idx) => (
              <article
                key={`${filter}-${idx}`}
                className="snap-start shrink-0 w-[85vw] md:w-[45vw] lg:w-[38vw] xl:w-[32vw] group cursor-pointer"
                onClick={() => setLightbox(idx)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-emerald-soft">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep via-emerald-deep/20 to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 bg-ivory/95 backdrop-blur text-emerald-deep text-[9px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {project.tag}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
                    <h3 className="font-display text-2xl lg:text-3xl text-ivory">
                      {project.title}
                    </h3>
                    <div className="text-sm text-accent/80 mt-2 font-semibold">{project.meta}</div>
                  </div>
                  <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/40 transition-colors duration-500 flex items-center justify-center">
                    <div className="size-14 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="!size-6 text-emerald-deep" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-ivory/60 leading-relaxed">
                  {project.description}
                </p>
              </article>
            ))}
          </div>

          {/* Scroll arrows */}
          {filtered.length > 2 && (
            <>
              <button
                onClick={() => scroll(-1)}
                className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 size-12 rounded-full bg-emerald-deep/90 border border-ivory/20 flex items-center justify-center hover:bg-accent hover:text-emerald-deep transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll left"
              >
                <ChevronLeft className="!size-5" />
              </button>
              <button
                onClick={() => scroll(1)}
                className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 size-12 rounded-full bg-emerald-deep/90 border border-ivory/20 flex items-center justify-center hover:bg-accent hover:text-emerald-deep transition-all opacity-0 group-hover:opacity-100"
                aria-label="Scroll right"
              >
                <ChevronRight className="!size-5" />
              </button>
            </>
          )}

          {/* Progress bar */}
          {filtered.length > 2 && (
            <div className="h-0.5 bg-ivory/10 rounded-full mt-4 max-w-md mx-auto">
              <div
                className="h-full bg-accent rounded-full transition-all duration-300"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && currentProject && (
        <div
          className="fixed inset-0 z-[80] bg-emerald-deep/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 lightbox-backdrop"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full bg-background text-foreground rounded-sm overflow-hidden shadow-2xl lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 size-10 rounded-full bg-emerald-deep/90 text-ivory flex items-center justify-center hover:bg-accent hover:text-emerald-deep transition-colors"
              aria-label="Close lightbox"
            >
              <X className="!size-5" />
            </button>

            <div className="grid md:grid-cols-5">
              <div className="md:col-span-3 aspect-[4/3] md:aspect-auto relative">
                <img
                  src={currentProject.img}
                  alt={currentProject.title}
                  className="absolute inset-0 size-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/60 via-transparent to-transparent" />
              </div>
              <div className="md:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.25em] text-accent font-semibold mb-3">
                  {currentProject.tag}
                </div>
                <h3 className="font-display text-3xl lg:text-4xl">{currentProject.title}</h3>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
                  {currentProject.description}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="text-xs uppercase tracking-[0.22em] text-foreground/50">
                    Key Results
                  </div>
                  {currentProject.results.map((r: string, i: number) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <span className="size-1.5 rounded-full bg-accent shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-deep border-b border-emerald-deep pb-1 self-start hover:text-accent hover:border-accent transition-colors"
                >
                  Discuss similar project →
                </a>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between pointer-events-none">
              <button
                onClick={() =>
                  setLightbox((prev) =>
                    prev !== null ? (prev > 0 ? prev - 1 : filtered.length - 1) : 0,
                  )
                }
                className="pointer-events-auto size-10 rounded-full bg-ivory/90 text-emerald-deep flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="!size-5" />
              </button>
              <button
                onClick={() =>
                  setLightbox((prev) =>
                    prev !== null ? (prev < filtered.length - 1 ? prev + 1 : 0) : 0,
                  )
                }
                className="pointer-events-auto size-10 rounded-full bg-ivory/90 text-emerald-deep flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="!size-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
