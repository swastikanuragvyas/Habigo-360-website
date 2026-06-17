import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as useQuery } from "../_libs/tanstack__react-query.mjs";
import { a as api } from "./api-C9QTNx8U.mjs";
import { N as Nav, F as Footer, S as StickyCTA } from "./router-DsNkOnnW.mjs";
import "../_libs/seroval.mjs";
import { j as LoaderCircle, U as Users, T as TrendingUp, G as Globe, M as Megaphone, I as Instagram, A as ArrowUpRight, d as Play } from "../_libs/lucide-react.mjs";
import { u as useScroll, a as useTransform, m as motion, b as useInView, c as animate } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "util";
import "stream";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "crypto";
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
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "../_libs/isbot.mjs";
import "./server-DUsf7i-P.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-background min-h-[40vh]", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center items-center h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-10 text-emerald-deep" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 space-y-32", children: projects?.length > 0 ? projects.map((work, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkShowcase, { work, index }, work._id)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-muted-foreground text-xl", children: "New projects are being added soon. Check back later!" }) }) }),
      !isLoading && projects && /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramSection, { projects })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-light text-emerald-deep", children: work.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 text-lg leading-relaxed", children: work.description })
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-8", children: work.media && work.media.length > 0 ? work.media.map((media, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { y: 40, delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaCard, { media }) }, idx)) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] bg-emerald-deep/5 rounded-2xl flex items-center justify-center border border-emerald-deep/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ImageIcon, { className: "size-10 text-emerald-deep/30" }) }) })
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
