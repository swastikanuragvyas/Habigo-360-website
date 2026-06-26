import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Route, N as Nav, F as Footer, g as SERVICE_PAGES, S as StickyCTA, u as useReveal } from "./router-Db_gZD6m.mjs";
import "../_libs/seroval.mjs";
import { n as ArrowLeft, A as ArrowUpRight, R as CircleCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
function ServiceDetailPage() {
  const {
    slug
  } = Route.useParams();
  const service = SERVICE_PAGES[slug];
  const [navOpen, setNavOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  if (!service) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-40 lg:pt-52 pb-28 text-center max-w-2xl mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
          "404",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
          "Service ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "not found." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/65 text-[15px] leading-relaxed", children: "The service you're looking for doesn't exist or may have been moved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "inline-flex items-center gap-2 mt-10 px-6 py-3.5 rounded-full bg-emerald-deep text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-accent hover:text-emerald-deep transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "!size-3.5" }),
          "View All Services"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceHero, { service }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatsBar, { stats: service.stats }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Deliverables, { deliverables: service.deliverables }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Approach, { approach: service.approach, title: service.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceCTA, { title: service.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
function ServiceHero({
  service
}) {
  const hero = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative bg-[color:var(--emerald-deep)] text-ivory overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.18),_transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.08),_transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-40 lg:pt-52 pb-20 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: hero.ref, className: `max-w-4xl transition-all duration-1000 ${hero.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "text-[11px] uppercase tracking-[0.25em] text-ivory/50 hover:text-accent transition-colors", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-ivory/30", children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.25em] text-accent", children: service.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] font-light", children: service.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 font-display text-xl lg:text-2xl italic text-accent/90 max-w-2xl leading-snug", children: [
        '"',
        service.tagline,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-ivory/70 text-base lg:text-lg leading-relaxed max-w-2xl", children: service.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-4 mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-emerald-deep text-xs uppercase tracking-[0.18em] font-semibold hover:bg-ivory transition-colors", children: [
          "Get Started",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: "inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ivory/30 text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-ivory/10 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "!size-3.5" }),
          "All Services"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" })
  ] });
}
function StatsBar({
  stats
}) {
  const reveal = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background border-b border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: reveal.ref, className: `max-w-[1500px] mx-auto px-6 lg:px-10 transition-all duration-1000 delay-200 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-px bg-border -mx-px", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-8 lg:p-10 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl lg:text-5xl text-emerald-deep leading-none", children: stat.value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-[10px] uppercase tracking-[0.22em] text-foreground/55 font-semibold", children: stat.label })
  ] }, stat.label)) }) }) });
}
function Deliverables({
  deliverables
}) {
  const reveal = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: reveal.ref, className: `transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        "Capabilities"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
        "What we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "deliver." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border", children: deliverables.map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 min-h-[180px] flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "!size-6 text-emerald-deep group-hover:text-accent transition-colors shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-foreground/40 group-hover:text-ivory/40", children: String(idx + 1).padStart(2, "0") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-[15px] leading-relaxed text-foreground/80 group-hover:text-ivory/85", children: item })
    ] }, idx)) })
  ] }) }) });
}
function Approach({
  approach,
  title
}) {
  const reveal = useReveal();
  const paragraphs = approach.split("\n\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.07),_transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(212,175,55,0.05),_transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: reveal.ref, className: `transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mb-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
          "Methodology"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "approach." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8 space-y-8", children: paragraphs.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block shrink-0 pt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-accent/40 mt-3" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/75 text-base lg:text-[17px] leading-relaxed", children: p })
        ] }, idx)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-32 bg-ivory/5 border border-ivory/10 rounded-sm p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-6", children: "Why HabiGo 360" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: ["Hospitality-trained team that understands service excellence", "Strategy & execution under one roof — no fragmented handoffs", "Data-driven decisions with transparent, honest reporting", "Premium craft that builds brand equity, not just metrics"].map((point, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 text-sm text-ivory/65 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-1.5 rounded-full bg-accent shrink-0 mt-2" }),
            point
          ] }, idx)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 pt-6 border-t border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-accent hover:text-ivory transition-colors", children: [
            "Discuss ",
            title,
            " →"
          ] }) })
        ] }) })
      ] })
    ] }) })
  ] });
}
function ServiceCTA({
  title
}) {
  const reveal = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent text-emerald-deep py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: reveal.ref, className: `max-w-[1500px] mx-auto px-6 lg:px-10 text-center transition-all duration-1000 ${reveal.shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
      "Ready to transform your ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("em", { className: "italic", children: [
        title.toLowerCase(),
        "?"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-emerald-deep/70 text-[15px] max-w-lg mx-auto leading-relaxed", children: "Tell us about your brand. We'll respond within one working day with a perspective — not a pitch deck." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-4 mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-emerald-deep text-ivory text-xs uppercase tracking-[0.18em] font-semibold hover:bg-foreground transition-colors", children: [
        "Book a Discovery Call",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-3.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "inline-flex items-center gap-2 px-8 py-4 rounded-full border border-emerald-deep/30 text-emerald-deep text-xs uppercase tracking-[0.18em] font-semibold hover:bg-emerald-deep/10 transition-colors", children: "Explore All Services" })
    ] })
  ] }) });
}
export {
  ServiceDetailPage as component
};
