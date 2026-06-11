import { useEffect, useState, useRef } from "react";
import { Play, ArrowUpRight, Sparkles } from "lucide-react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

/* ─── Floating Particles ─── */
function FloatingParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {[
        { icon: "✦", size: "text-2xl", anim: "float-1", delay: "0s", top: "15%", left: "10%" },
        { icon: "◇", size: "text-xl", anim: "float-2", delay: "2s", top: "25%", left: "85%" },
        { icon: "○", size: "text-3xl", anim: "float-3", delay: "1s", top: "60%", left: "5%" },
        { icon: "✦", size: "text-lg", anim: "float-1", delay: "3s", top: "70%", left: "80%" },
        { icon: "◇", size: "text-2xl", anim: "float-2", delay: "4s", top: "40%", left: "50%" },
        { icon: "✦", size: "text-xl", anim: "float-3", delay: "1.5s", top: "80%", left: "30%" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute text-accent/20 select-none"
          style={{
            top: p.top,
            left: p.left,
            animation: `${p.anim} 20s ease-in-out infinite`, // Slowed from 12s to 20s
            animationDelay: p.delay,
            fontSize: p.size.includes("2xl")
              ? "1.5rem"
              : p.size.includes("xl")
                ? "1.25rem"
                : "1.75rem",
          }}
        >
          {p.icon}
        </div>
      ))}
    </div>
  );
}

/* ─── Staggered Typewriter (per-word, single RAF) ─── */
function StaggeredTypewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [visibleWords, setVisibleWords] = useState<number[]>([]);
  const [done, setDone] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    setVisibleWords([]);
    setDone(false);

    // Pre-calculate word boundaries
    const wordCounts = phrases.map((p) => p.split(" ").length);
    const totalWords = wordCounts.reduce((a, b) => a + b, 0);
    const delays: number[] = [];
    const pausePerLine = 400;
    let wordIdx = 0;
    for (let line = 0; line < phrases.length; line++) {
      for (let w = 0; w < wordCounts[line]; w++) {
        delays.push(wordIdx * 80 + (line > 0 ? pausePerLine : 0));
        wordIdx++;
      }
    }

    let raf = 0;
    let start: number | null = null;

    const tick = (timestamp: number) => {
      if (!mountedRef.current) return;
      if (!start) start = timestamp;
      const elapsed = timestamp - start;

      const nextCount = delays.filter((d) => d <= elapsed).length;
      setVisibleWords(Array.from({ length: Math.min(nextCount, totalWords) }, (_, i) => i));

      if (nextCount >= totalWords) {
        setDone(true);
      } else {
        raf = requestAnimationFrame(tick);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      mountedRef.current = false;
      cancelAnimationFrame(raf);
    };
  }, [phrases]);

  const allWords = phrases.flatMap((p) => p.split(" "));

  return (
    <span className={`${className} ${!done ? "typewriter-cursor" : ""}`}>
      {allWords.map((word, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-[400ms] ease-out"
          style={{
            opacity: visibleWords.includes(i) ? 1 : 0,
            transform: visibleWords.includes(i) ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)",
            willChange: "transform, opacity",
          }}
        >
          {word}
          {i < allWords.length - 1 && allWords[i + 1] !== "," && allWords[i + 1] !== "&" ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/* ─── Morphing CTA ─── */
function MorphCTA({
  href,
  label,
  hoverLabel,
  icon: Icon,
  variant = "primary",
}: {
  href: string;
  label: string;
  hoverLabel: string;
  icon?: typeof ArrowUpRight;
  variant?: "primary" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-500 relative overflow-hidden group";
  const primaryStyles = "bg-ivory text-emerald-deep hover:bg-accent";
  const outlineStyles = "border border-ivory/30 text-ivory hover:border-accent";

  return (
    <a href={href} className={`${base} ${variant === "primary" ? primaryStyles : outlineStyles}`}>
      <span className="default-text flex items-center gap-2">
        {Icon && (
          <Icon className="!size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
        {label}
      </span>
      <span className="hover-text flex items-center gap-2">
        {hoverLabel}
        <ArrowUpRight className="!size-3.5" />
      </span>
    </a>
  );
}

/* ─── Counter with animated reveal ─── */
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
  const ref = useRef<HTMLSpanElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

/* ─── Immersive Hero ─── */
export default function ImmersiveHero() {
  const slides = [hero1, hero3, hero2];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 10000); // Slowed from 6000ms to 10000ms
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[color:var(--emerald-deep)] text-ivory"
    >
      {/* Cinematic background slideshow */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="absolute inset-0 size-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: activeSlide === i ? 1 : 0 }}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/65 to-emerald-deep/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.10),_transparent_50%)]" />
      </div>

      {/* Floating brand particles */}
      <FloatingParticles />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-700 ${
              activeSlide === i
                ? "w-12 bg-accent shadow-lg shadow-accent/50"
                : "w-3 bg-ivory/30 hover:bg-ivory/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-40 lg:pt-48 pb-24 min-h-screen flex flex-col justify-between">
        <div className="grid lg:grid-cols-12 gap-12 items-end flex-1">
          <div className="lg:col-span-9">
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="size-2 rounded-full bg-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/70">
                Creative Growth Agency · Est. Hospitality DNA
              </span>
            </div>

            <h1 className="font-display text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.95] font-light text-balance reveal reveal-delay-1">
              Helping great brands become{" "}
              <span className="text-accent block mt-2 lg:mt-0 lg:inline">
                <StaggeredTypewriter phrases={["seen,", "remembered", "& trusted."]} />
              </span>
            </h1>
          </div>

        </div>

        {/* Stats strip */}
        <div className="reveal reveal-delay-3 mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden">
          {[
            { v: 50, s: "+", l: "Brands Served" },
            { v: 100, s: "+", l: "Projects Delivered" },
            { v: 12, s: "M+", l: "Content Impressions" },
            { v: 9, s: "+", l: "Industries Mastered" },
          ].map((m) => (
            <div key={m.l} className="bg-ivory-warm p-6 lg:p-8">
              <div className="font-display text-4xl lg:text-5xl text-emerald-deep">
                <Counter to={m.v} suffix={m.s} />
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-foreground/60 font-semibold">
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
