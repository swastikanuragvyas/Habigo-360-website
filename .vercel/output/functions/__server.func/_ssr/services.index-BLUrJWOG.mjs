import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { N as Nav, C as Contact, F as Footer, S as StickyCTA, u as useReveal, c as SERVICES } from "./router-DsNkOnnW.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "./server-DUsf7i-P.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
function ServicesPage() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [navOpen, setNavOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ClientsMarquee, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AllServices, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OurWork, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-emerald-deep text-ivory pt-40 pb-28 lg:pt-52 lg:pb-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.12),_transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 text-center relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50", children: "Our Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-[clamp(2.5rem,6vw,6rem)] leading-[1.02] font-light", children: [
        "Everything you need to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "grow." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-ivory/70 max-w-2xl mx-auto text-lg leading-relaxed", children: "From thumb-stopping brand films to high-converting performance architecture. An integrated suite of twelve disciplines designed to make your brand impossible to ignore." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#all-services", className: "mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] px-7 py-3.5 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors", children: [
        "Explore Services ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-3.5" })
      ] })
    ] })
  ] });
}
function ClientsMarquee() {
  const clients = ["Hyatt", "Marriott", "Radisson", "Taj", "Oberoi", "ITC Hotels", "Leela", "Hilton", "Accor", "Four Seasons", "JW Marriott", "Westin"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-14 border-b border-border bg-background overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60", children: "Brands We've Worked With" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "marquee-track flex whitespace-nowrap items-center", children: clients.concat(clients).concat(clients).map((client, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-14 font-display text-2xl lg:text-4xl text-foreground/20 font-light uppercase tracking-wider hover:text-emerald-deep/60 transition-colors duration-500 cursor-default", children: client }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: {
      __html: `
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-33.33%); } }
        .marquee-track { animation: marquee 40s linear infinite; }
        .marquee-track:hover { animation-play-state: paused; }
      `
    } })
  ] });
}
function AllServices() {
  const {
    ref,
    shown
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "all-services", className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: `mb-16 ${shown ? "reveal" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " What We Do"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance", children: [
        "Twelve disciplines. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "One growth engine." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border", children: SERVICES.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`, className: "group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "!size-7 text-emerald-deep group-hover:text-accent transition-colors" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-foreground/40 group-hover:text-ivory/40", children: String(idx + 1).padStart(2, "0") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl lg:text-3xl leading-tight mb-3", children: s.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/65 group-hover:text-ivory/70 leading-relaxed", children: s.d })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "absolute top-8 right-8 !size-5 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all text-accent" })
    ] }, s.t)) })
  ] }) });
}
function OurWork() {
  const {
    ref,
    shown
  } = useReveal();
  const projects = [{
    title: "Radisson Blu Rebrand",
    category: "Branding & Identity",
    desc: "Complete brand overhaul driving 42% increase in direct bookings."
  }, {
    title: "Taj Social Launch",
    category: "Social Media Marketing",
    desc: "0 to 150K followers in 6 months with a retention-first strategy."
  }, {
    title: "Oberoi Campaign Film",
    category: "Brand Films",
    desc: "Cinematic brand film that earned 2.4M views organically."
  }, {
    title: "Leela Performance Overhaul",
    category: "Performance Marketing",
    desc: "Slashed CPA by 58% while scaling spend 3x."
  }, {
    title: "ITC Website Redesign",
    category: "Website Development",
    desc: "Editorial design with 94 Lighthouse score and 3.2x conversion lift."
  }, {
    title: "Hyatt Event Series",
    category: "Event Curation",
    desc: "Quarterly thought-leadership dinners generating $2.1M in pipeline."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-emerald-deep text-ivory py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: `mb-16 ${shown ? "reveal" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
        " Portfolio"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance", children: [
        "Selected ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "work." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(WorkCard, { project: p, idx }, p.title)) })
  ] }) });
}
function WorkCard({
  project,
  idx
}) {
  const {
    ref,
    shown
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { ref, className: `group border border-ivory/10 p-8 hover:border-accent/40 transition-all duration-700 cursor-pointer ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, style: {
    transitionDelay: `${idx * 120}ms`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-accent/70 mb-6", children: project.category }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl lg:text-3xl mb-4 group-hover:text-accent transition-colors", children: project.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-ivory/60 text-sm leading-relaxed", children: project.desc }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-8 !size-5 text-ivory/30 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" })
  ] });
}
function Process() {
  const {
    ref,
    shown
  } = useReveal();
  const steps = [{
    num: "01",
    title: "Discovery & Audit",
    desc: "We strip your brand down to the studs. Understanding your unit economics, market positioning, and where the actual growth leverage lies."
  }, {
    num: "02",
    title: "Strategic Architecture",
    desc: "We don't guess. We map out a bespoke strategy across creative, media, and technology to ensure every dollar works efficiently."
  }, {
    num: "03",
    title: "Execution & Craft",
    desc: "Our in-house specialists take over. From cinematic brand films to razor-sharp ad copy, we produce assets that stop the scroll."
  }, {
    num: "04",
    title: "Optimization & Scale",
    desc: "Launch is just the beginning. We continuously test, iterate, and scale the winners to turn your brand into a compounding growth engine."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: `text-center mb-20 ${shown ? "reveal" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60", children: "Our Process" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance", children: [
        "How we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "deliver." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border", children: steps.map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProcessCard, { step, idx }, step.num)) })
  ] }) });
}
function ProcessCard({
  step,
  idx
}) {
  const {
    ref,
    shown
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: `bg-background p-8 lg:p-10 transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, style: {
    transitionDelay: `${idx * 150}ms`
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl lg:text-6xl text-accent/30 mb-8", children: step.num }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl lg:text-2xl mb-4", children: step.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/65 text-sm leading-relaxed", children: step.desc })
  ] });
}
export {
  ServicesPage as component
};
