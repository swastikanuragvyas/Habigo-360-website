import { useEffect, useRef, useState, useCallback } from "react";
import { MessageCircle, Sun, Moon } from "lucide-react";

/* ─── Custom Cursor Trails ─── */
export function CursorTrails() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailsRef = useRef<HTMLDivElement[]>([]);
  const posRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    const circle = (x: number, y: number, idx: number) => {
      const trail = trailsRef.current[idx];
      if (!trail) return;
      trail.style.transform = `translate(${x - 2}px, ${y - 2}px)`;
      trail.style.opacity = String(0.5 - idx * 0.07);
      if (trail.style.opacity === "0") trail.style.opacity = "0";
    };

    let trailPositions: { x: number; y: number }[] = Array(6).fill({ x: 0, y: 0 });

    const animate = () => {
      trailPositions = trailPositions.map((_, i) => {
        if (i === 0) return { x: posRef.current.x, y: posRef.current.y };
        const prev = trailPositions[i - 1];
        return {
          x: prev.x + (trailPositions[i].x - prev.x) * 0.5,
          y: prev.y + (trailPositions[i].y - prev.y) * 0.5,
        };
      });
      trailPositions.forEach((p, i) => circle(p.x, p.y, i));
      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" style={{ display: "none" }} />
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) trailsRef.current[i] = el;
          }}
          className="custom-cursor trail"
          style={{
            display: "none",
            transition: "none",
            zIndex: 9999 - i,
          }}
        />
      ))}
    </>
  );
}

/* ─── Social Proof Notification Ticker ─── */
const SOCIAL_PROOFS = [
  { name: "Hilton", action: "closed a brand strategy session", time: "2 mins ago" },
  { name: "Marriott", action: "approved Q3 content calendar", time: "8 mins ago" },
  { name: "Taj Hotels", action: "launched new social campaign", time: "15 mins ago" },
  { name: "Oberoi", action: "requested performance audit", time: "24 mins ago" },
  { name: "ITC Hotels", action: "signed quarterly retainer", time: "36 mins ago" },
  { name: "Leela", action: "reviewed brand film cut", time: "1 hour ago" },
];

export function SocialProofTicker() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % SOCIAL_PROOFS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-24 left-6 z-40 max-w-xs">
      <div className="relative h-16 overflow-hidden">
        {SOCIAL_PROOFS.map((item, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center gap-3 bg-emerald-deep/90 backdrop-blur-xl border border-ivory/10 rounded-lg px-4 py-3 shadow-2xl transition-all duration-500 ${
              idx === activeIdx ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
          >
            <div className="shrink-0 size-8 rounded-full bg-accent/20 flex items-center justify-center">
              <MessageCircle className="!size-4 text-accent" />
            </div>
            <div className="min-w-0">
              <div className="text-[13px] text-ivory truncate font-medium">
                <span className="text-accent">{item.name}</span> {item.action}
              </div>
              <div className="text-[10px] text-ivory/50 uppercase tracking-wider">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Scroll Progress Bar ─── */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />;
}


