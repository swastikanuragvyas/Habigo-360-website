import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { N as Nav, F as Footer, S as StickyCTA, u as useReveal, a as api } from "./router-Db_gZD6m.mjs";
import { T as TextReveal } from "./TextReveal-C26XP6D5.mjs";
import "../_libs/seroval.mjs";
import { j as LoaderCircle, U as Users, T as TrendingUp, G as Globe, M as Megaphone, k as Image, l as ChevronLeft, m as ChevronRight, I as Instagram, A as ArrowUpRight, d as Play } from "../_libs/lucide-react.mjs";
import { u as useScroll, a as useTransform, m as motion, A as AnimatePresence, b as useInView, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-D-smpDVE.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ScrollReveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  duration = 0.8,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y, x },
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
      className,
      children
    }
  );
}
function AnimatedNumber({ value }) {
  const [current, setCurrent] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  reactExports.useEffect(() => {
    if (isInView && typeof value === "number" && !isNaN(value)) {
      const isFloat = value % 1 !== 0;
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setCurrent(isFloat ? parseFloat(v.toFixed(1)) : Math.round(v))
      });
      return controls.stop;
    }
  }, [value, isInView]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, children: current || value });
}
function useMagnetic(intensity = 15) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -intensity;
      const rotateY = (x - centerX) / centerX * intensity;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      el.style.transition = "transform 0.1s ease-out";
      el.style.zIndex = "10";
    };
    const handleMouseLeave = () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      el.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.zIndex = "1";
    };
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [intensity]);
  return ref;
}
function MagneticCard({ children, intensity = 10, className = "", ...props }) {
  const ref = useMagnetic(intensity);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `transform-gpu ${className}`, ...props, children });
}
const CAROUSELS_1 = [];
const CAROUSELS_2 = [];
const REELS_1 = [];
const REELS_2 = [];
const STORIES = [];
function SectionHeader({ title, type }) {
  const { ref, shown } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `text-center max-w-3xl mx-auto mb-16 mt-32 ${shown ? "reveal" : "opacity-0"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light uppercase tracking-tight text-emerald-deep", children: [
        title,
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/40 font-sans tracking-normal text-3xl align-middle", children: [
          "(",
          type,
          ")"
        ] })
      ] })
    }
  );
}
function MasonryGrid({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MagneticCard,
    {
      className: `relative group overflow-hidden rounded-sm bg-secondary scroll-reveal ${c.type === "tall" ? "row-span-2" : "row-span-1"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: c.img,
            alt: c.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-ivory font-display text-2xl leading-tight whitespace-pre-line", children: c.title }),
          c.subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-accent text-sm mt-2 font-semibold tracking-wider uppercase", children: c.subtitle })
        ] })
      ]
    },
    c.id
  )) });
}
function FourColumnGrid({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: items.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    MagneticCard,
    {
      className: "relative group overflow-hidden rounded-sm bg-secondary aspect-[9/16] scroll-reveal",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: c.img,
            alt: c.title,
            className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-ivory font-display text-2xl leading-tight whitespace-pre-line", children: c.title }) })
      ]
    },
    c.id
  )) });
}
function OurWorkCarousels() {
  const { data: feedData, isLoading: isFeedLoading } = useQuery({
    queryKey: ["instagram-feed"],
    queryFn: async () => {
      const res = await api.get("/instagram/feed");
      return res.data;
    }
  });
  const { data: storiesData, isLoading: isStoriesLoading } = useQuery({
    queryKey: ["instagram-stories"],
    queryFn: async () => {
      const res = await api.get("/instagram/stories");
      return res.data;
    }
  });
  const { data: projects, isLoading: isProjectsLoading } = useQuery({
    queryKey: ["publicProjects"],
    queryFn: async () => {
      const { data } = await api.get("/projects");
      return data.filter((p) => p.visibility !== false);
    }
  });
  const useLiveFeed = feedData && feedData.length > 0;
  const useLiveStories = storiesData && storiesData.length > 0;
  const liveCarousels = useLiveFeed ? feedData.filter((item) => item.type !== "VIDEO").map((item, i) => ({
    id: item.instagramId,
    title: item.caption ? item.caption.substring(0, 60) + (item.caption.length > 60 ? "..." : "") : "Recent Post",
    subtitle: new Date(item.timestamp).toLocaleDateString(),
    img: item.thumbnailUrl || item.mediaUrl,
    type: i % 4 === 0 ? "tall" : "square"
  })) : [];
  const liveReels = useLiveFeed ? feedData.filter((item) => item.type === "VIDEO").map((item) => ({
    id: item.instagramId,
    title: item.caption ? item.caption.substring(0, 40) + "..." : "Recent Reel",
    img: item.thumbnailUrl || item.mediaUrl
  })) : [];
  const liveStories = useLiveStories ? storiesData.map((item) => ({
    id: item.instagramId,
    title: "Active Story",
    img: item.thumbnailUrl || item.mediaUrl
  })) : [];
  const mapToFormat = (projectsList) => {
    return projectsList.map((p, i) => ({
      id: p._id,
      title: p.title,
      subtitle: p.service,
      img: p.media?.[0]?.url || "",
      type: i % 4 === 0 ? "tall" : "square"
    }));
  };
  const carouselProjects = mapToFormat(projects?.filter((p) => p.category === "Carousel") || []);
  const reelProjects = mapToFormat(projects?.filter((p) => p.category === "Reel") || []);
  const storyProjects = mapToFormat(projects?.filter((p) => p.category === "Story") || []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-8 lg:px-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Carousels" }),
    isFeedLoading || isProjectsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-emerald-deep size-8" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGrid, { items: useLiveFeed ? liveCarousels.slice(0, 6) : carouselProjects.length > 0 ? carouselProjects.slice(0, 6) : CAROUSELS_1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGrid, { items: useLiveFeed ? liveCarousels.slice(6, 12) : carouselProjects.length > 6 ? carouselProjects.slice(6, 12) : CAROUSELS_2 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Reels" }),
    isFeedLoading || isProjectsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-emerald-deep size-8" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: useLiveFeed ? liveReels.slice(0, 4) : reelProjects.length > 0 ? reelProjects.slice(0, 4) : REELS_1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: useLiveFeed ? liveReels.slice(4, 8) : reelProjects.length > 4 ? reelProjects.slice(4, 8) : REELS_2 }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Stories" }),
    isStoriesLoading || isProjectsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-emerald-deep size-8" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: useLiveStories ? liveStories : storyProjects.length > 0 ? storyProjects : STORIES })
  ] }) });
}
function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}) {
  const [sliderPosition, setSliderPosition] = reactExports.useState(50);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [hasInteracted, setHasInteracted] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const handleMove = (clientX) => {
    setHasInteracted(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = x / rect.width * 100;
    setSliderPosition(percent);
  };
  reactExports.useEffect(() => {
    if (hasInteracted) return;
    let animationFrame;
    let startTime = Date.now();
    const animate2 = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.sin(elapsed / 1500) * 10 + 50;
      setSliderPosition(progress);
      animationFrame = requestAnimationFrame(animate2);
    };
    animationFrame = requestAnimationFrame(animate2);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasInteracted]);
  reactExports.useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX);
    };
    const handleTouchMove = (e) => {
      if (isDragging) handleMove(e.touches[0].clientX);
    };
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: containerRef,
      className: `relative w-full overflow-hidden select-none cursor-ew-resize rounded-md ${className}`,
      onMouseDown: (e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      },
      onTouchStart: (e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { clipPath: `inset(0 0 0 ${sliderPosition}%)` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: afterImage,
                  alt: "After",
                  className: "absolute inset-0 w-full h-full object-cover bg-gray-900",
                  draggable: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none", children: afterLabel })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 overflow-hidden",
            style: { clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: beforeImage,
                  alt: "Before",
                  className: "absolute inset-0 w-full h-full object-cover bg-gray-900",
                  draggable: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded backdrop-blur-sm pointer-events-none", children: beforeLabel })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize hover:bg-gold transition-colors",
            style: { left: `${sliderPosition}%`, transform: "translateX(-50%)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-emerald-deep", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18l-6-6 6-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M15 18l6-6-6-6" })
            ] }) })
          }
        )
      ]
    }
  );
}
function TransformationsCarousel({ transformations }) {
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [direction, setDirection] = reactExports.useState(1);
  reactExports.useEffect(() => {
    if (transformations.length <= 1) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev2) => (prev2 + 1) % transformations.length);
    }, 5e3);
    return () => clearInterval(timer);
  }, [transformations.length]);
  const next = () => {
    setDirection(1);
    setCurrentIndex((prev2) => (prev2 + 1) % transformations.length);
  };
  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev2) => (prev2 - 1 + transformations.length) % transformations.length);
  };
  if (!transformations || transformations.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-5xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video overflow-hidden rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, custom: direction, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        custom: direction,
        initial: { opacity: 0, x: direction > 0 ? 1e3 : -1e3 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: direction > 0 ? -1e3 : 1e3 },
        transition: { type: "spring", stiffness: 300, damping: 30 },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animated-gradient-border p-1 rounded-lg shadow-2xl h-full w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            BeforeAfterSlider,
            {
              beforeImage: transformations[currentIndex].beforeImage,
              afterImage: transformations[currentIndex].afterImage,
              beforeLabel: transformations[currentIndex].beforeLabel || "Before",
              afterLabel: transformations[currentIndex].afterLabel || "After",
              className: "w-full h-full"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-0 right-0 text-center pointer-events-none z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white text-xl md:text-3xl font-display tracking-wider drop-shadow-md", children: transformations[currentIndex].title }) })
        ]
      },
      currentIndex
    ) }) }),
    transformations.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: prev,
          className: "absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center rounded-full shadow-lg text-emerald-deep transition-all z-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-6" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: next,
          className: "absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur flex items-center justify-center rounded-full shadow-lg text-emerald-deep transition-all z-10",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-6" })
        }
      )
    ] })
  ] });
}
function OurWorkPage() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [navOpen, setNavOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const {
    data: projects,
    isLoading
  } = useQuery({
    queryKey: ["publicProjects"],
    queryFn: async () => {
      const {
        data
      } = await api.get("/projects");
      return data.filter((p) => p.visibility !== false);
    }
  });
  const {
    data: transformations,
    isLoading: isTransformationsLoading
  } = useQuery({
    queryKey: ["publicTransformations"],
    queryFn: async () => {
      const {
        data
      } = await api.get("/transformations");
      return data.filter((t) => t.visibility !== false);
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OurWorkCarousels, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-background min-h-[40vh]", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-10 text-emerald-deep" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 space-y-32", children: projects?.length > 0 ? projects.map((work, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShowcase, { work, index }, work._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground text-xl", children: "New projects are being added soon. Check back later!" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-ivory-warm py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-8 lg:px-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-16 scroll-reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light uppercase tracking-tight text-emerald-deep", children: "Transformations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-foreground/70", children: "See the impact of our visual branding before and after our touch." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-reveal", children: isTransformationsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-emerald-deep size-10" }) }) : transformations && transformations.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationsCarousel, { transformations }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground", children: "No transformations added yet." }) })
      ] }) }),
      !isLoading && projects && /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramSection, { projects })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "defer-render", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
function HeroSection() {
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, className: "relative bg-emerald-deep text-ivory pt-32 pb-28 lg:pt-40 lg:pb-36 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { y: 20, duration: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50", children: "Our Work" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.95] font-light", children: [
          "Where ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent", children: "Strategy" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " Meets Craft"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-ivory/70 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed", children: "We don't just create campaigns—we build growth engines. See how our integrated approach delivers measurable outcomes across every discipline." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-24", children: [{
        label: "Brands Served",
        value: 50,
        suffix: "+",
        icon: Users
      }, {
        label: "Projects Delivered",
        value: 100,
        suffix: "+",
        icon: TrendingUp
      }, {
        label: "Industries Served",
        value: 9,
        suffix: "+",
        icon: Globe
      }, {
        label: "Content Reach (M)",
        value: 12,
        suffix: "+",
        icon: Megaphone
      }].map((stat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: idx * 0.1 + 0.5, y: 20, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-ivory/10 hover:bg-ivory/10 transition-all duration-300 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { className: "!size-8 text-accent mb-6 opacity-70 group-hover:opacity-100 transition-opacity" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-4xl lg:text-5xl font-light text-ivory mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedNumber, { value: stat.value }),
          stat.suffix
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-ivory/50", children: stat.label })
      ] }) }, idx)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-light/10 rounded-full blur-[120px]" })
    ] })
  ] });
}
function WorkShowcase({
  work,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: work._id, className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-32 space-y-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(ScrollReveal, { x: -30, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
          " ",
          work.service
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] text-emerald-deep font-light", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TextReveal, { text: "A Collection of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-foreground/80 italic font-serif", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextReveal, { text: "Our Finest Work", delay: 300 }) })
        ] }),
        "  "
      ] }),
      work.kpis && work.kpis.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { x: -30, delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4 pt-8 border-t border-emerald-deep/10", children: work.kpis.map((kpi, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          kpi.trend === "up" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "!size-4 text-accent" }) : kpi.trend === "down" ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "!size-4 text-emerald-deep rotate-180" }) : null,
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/50", children: kpi.label })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-3xl font-light text-emerald-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedNumber, { value: kpi.value }),
          kpi.suffix
        ] })
      ] }, idx)) }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-8", children: work.media && work.media.length > 0 ? work.media.map((media, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { y: 40, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaCard, { media }) }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-emerald-deep/5 rounded-2xl flex items-center justify-center border border-emerald-deep/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "size-10 text-emerald-deep/30" }) }) })
  ] }) });
}
function MediaCard({
  media
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-2xl bg-secondary/30 cursor-pointer border border-emerald-deep/5", onClick: () => setIsExpanded(!isExpanded), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `relative transition-all duration-700 ${isExpanded ? "aspect-auto" : "aspect-[4/3] lg:aspect-[16/10]"}`, children: media.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: media.url, className: "size-full object-cover transition-transform duration-700 group-hover:scale-105", muted: true, playsInline: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-emerald-deep/20 group-hover:bg-emerald-deep/40 transition-colors duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-20 flex items-center justify-center rounded-full bg-ivory/20 backdrop-blur-md text-ivory group-hover:scale-110 transition-transform duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "!size-8 ml-1" }) }) })
      ] }),
      isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: media.url, autoPlay: true, muted: true, loop: true, controls: true, className: "w-full object-cover" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: media.url, alt: media.alt || "Portfolio media", className: "size-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy" }) }),
    media.caption && !isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/50 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.2em] text-ivory font-medium", children: media.caption }) })
  ] });
}
function InstagramSection({
  projects
}) {
  const posts = projects.flatMap((work) => work.instagram?.posts.map((p) => ({
    ...p,
    service: work.service
  })) || []);
  if (posts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-emerald-deep py-24 lg:py-32 overflow-hidden text-ivory", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 mb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-accent flex items-center gap-3 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "!size-4" }),
          " Social Proof"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] font-light", children: "Real Engagement." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border-b border-accent text-accent pb-1 hover:text-ivory hover:border-ivory transition-colors", children: [
        "Follow Us ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-4" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex overflow-x-hidden group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-marquee flex whitespace-nowrap gap-6 px-6", children: [...posts, ...posts, ...posts].map((post, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[300px] lg:w-[400px] shrink-0 relative rounded-xl overflow-hidden group/post", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/5] relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.thumbnail, alt: "Instagram Post", className: "size-full object-cover transition-transform duration-700 group-hover/post:scale-110", loading: "lazy" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-emerald-deep/60 opacity-0 group-hover/post:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center text-ivory whitespace-normal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "!size-8 mb-4 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm line-clamp-3 mb-4", children: post.caption }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs font-medium tracking-wider", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            post.likes?.toLocaleString(),
            " LIKES"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            post.comments?.toLocaleString(),
            " CMTS"
          ] })
        ] })
      ] })
    ] }) }, `${post.id}-${idx}`)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      ` })
  ] });
}
export {
  OurWorkPage as component
};
