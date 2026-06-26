import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useQuery } from "../_libs/tanstack__react-query.mjs";
import { l as logoImg, a as api } from "./router-Db_gZD6m.mjs";
import { h as hero2, a as about, w as work2 } from "./work-2-1r-EvWfY.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowUpRight, X, e as Menu, n as ArrowLeft, B as BriefcaseBusiness, h as MapPin, S as Sparkles, o as Target, U as Users, p as Clock3, a as Mail, i as Send } from "../_libs/lucide-react.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
const openings = [{
  title: "Social Media Strategist",
  team: "Content",
  type: "Full time",
  location: "Jaipur",
  summary: "Plan content calendars, decode trends and turn brand goals into sharp social ideas.",
  questions: ["Which social media campaigns or pages have you managed before?", "How do you turn a brand brief into a monthly content calendar?", "Share one trend you would adapt for a premium hospitality or lifestyle brand."]
}, {
  title: "Performance Marketing Executive",
  team: "Growth",
  type: "Full time",
  location: "Jaipur",
  summary: "Manage paid campaigns, read numbers clearly and improve funnels with practical experiments."
}, {
  title: "Video Editor and Motion Designer",
  team: "Creative",
  type: "Full time",
  location: "Jaipur",
  summary: "Build reels, brand films and campaign edits that feel premium and move fast.",
  questions: ["Which editing and motion tools do you use confidently?", "Share links to reels, films or motion work that best represent your style.", "How do you approach pacing, music and typography for short-form videos?"]
}];
const perks = [{
  icon: Sparkles,
  title: "Creative ownership",
  text: "Own ideas from first brief to final launch."
}, {
  icon: Target,
  title: "Outcome led work",
  text: "Every project connects creative taste with measurable growth."
}, {
  icon: Users,
  title: "Small senior team",
  text: "Work closely with founders, designers, marketers and operators."
}];
const navItems = [{
  id: "home",
  label: "Home",
  href: "/"
}, {
  id: "about",
  label: "About us",
  href: "/about"
}, {
  id: "services",
  label: "Services",
  href: "/services"
}, {
  id: "work",
  label: "Our Work",
  href: "/#work"
}, {
  id: "careers",
  label: "Careers",
  href: "/careers"
}, {
  id: "contact",
  label: "Contact us",
  href: "/#contact"
}];
const serviceLinks = ["Social Media Marketing", "Performance Marketing", "Photography & Videography", "Influencer Marketing", "Branding & Identity", "Email Marketing", "WhatsApp Marketing", "Website Development", "CRM Services", "OTA Listings & Management", "Event Curation", "Brand Films"];
function CareersPage() {
  const {
    data: dbOpenings,
    isLoading
  } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const {
        data
      } = await api.get("/careers");
      return data;
    }
  });
  const activeOpenings = dbOpenings || openings;
  const [selectedRole, setSelectedRole] = reactExports.useState(null);
  const [navOpen, setNavOpen] = reactExports.useState(false);
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const dropdownTimeout = reactExports.useRef(null);
  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "fixed top-0 inset-x-0 z-50 bg-[color:var(--emerald-deep)]/92 backdrop-blur-xl border-b border-white/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "HabiGo 360", className: "h-44 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-9", children: navItems.map((item) => {
          if (item.id === "services") {
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", onMouseEnter: openDropdown, onMouseLeave: closeDropdown, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: item.href, className: `text-[12px] uppercase tracking-[0.18em] transition-colors py-4 inline-block ${dropdownOpen ? "text-accent" : "text-ivory/70 hover:text-accent"}`, children: [
                item.label,
                /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `inline-block ml-1.5 w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-full left-1/2 -translate-x-1/2 w-72 bg-emerald-deep/95 backdrop-blur-xl border border-ivory/10 shadow-2xl rounded-sm overflow-hidden transition-all duration-300 ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
                serviceLinks.map((service) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `/services/${service.toLowerCase().replace(/\s+/g, "-")}`, className: "block px-6 py-2.5 text-sm text-ivory/70 hover:text-accent hover:bg-white/5 transition-colors", children: service }, service)),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ivory/10 mt-2 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "block px-6 py-2.5 text-[10px] uppercase tracking-widest text-accent hover:bg-white/5 transition-colors", children: "View All Services →" }) })
              ] }) })
            ] }, item.id);
          }
          return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-accent transition-colors", children: item.label }, item.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360", className: "hidden lg:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-3.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setNavOpen(!navOpen), className: "lg:hidden text-ivory p-2", "aria-label": "Menu", children: navOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
      ] }),
      navOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-[color:var(--emerald-deep)] border-t border-white/10 px-6 py-6 space-y-4", children: [
        navItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, onClick: () => setNavOpen(false), className: "block text-ivory text-lg font-display", children: item.label }, item.id)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360", onClick: () => setNavOpen(false), className: "inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold", children: [
          "Apply Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-4" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-[82vh] overflow-hidden bg-emerald-deep text-ivory", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: hero2, alt: "", className: "absolute inset-0 size-full object-cover opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/70 to-emerald-deep" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-20 min-h-[82vh] flex flex-col justify-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/", className: "mb-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/65 hover:text-accent transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "!size-4" }),
          " Back Home"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-ivory/70", children: "Careers at HabiGo 360" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[clamp(3rem,7vw,7rem)] leading-[0.96] font-light text-balance", children: "Build brands people notice, trust and talk about." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-2xl text-lg text-ivory/72 leading-relaxed", children: "We are hiring curious marketers, creators and operators who like clear thinking, premium execution and work that shows up in real business results." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-ivory-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
          " Open Roles"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.02] font-light", children: "Come do sharp work with a small, ambitious team." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/65 leading-relaxed", children: "This is demo content for now. Titles, locations, salaries and hiring steps can be changed once you decide exactly what roles you want to publish." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-4", children: isLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-12 text-center text-muted-foreground animate-pulse", children: "Loading openings..." }) : activeOpenings.map((role, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setSelectedRole(role), className: "group w-full text-left bg-background border border-emerald-deep/10 rounded-sm p-6 lg:p-8 hover:bg-emerald-deep hover:text-ivory transition-colors duration-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-emerald-deep/55 group-hover:text-accent", children: role.team }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl lg:text-3xl", children: role.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full border border-emerald-deep/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-5 group-hover:text-emerald-deep" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-foreground/65 group-hover:text-ivory/70 leading-relaxed", children: role.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-emerald-deep/5 px-3 py-2 group-hover:bg-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BriefcaseBusiness, { className: "!size-3.5" }),
            " ",
            role.type
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full bg-emerald-deep/5 px-3 py-2 group-hover:bg-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "!size-3.5" }),
            " ",
            role.location
          ] })
        ] })
      ] }, role.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-3 gap-px bg-emerald-deep/10 border border-emerald-deep/10", children: perks.map((perk) => {
      const Icon = perk.icon;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-8 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "!size-7 text-emerald-deep" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 font-display text-2xl", children: perk.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-foreground/62 leading-relaxed", children: perk.text })
      ] }, perk.title);
    }) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-emerald-deep text-ivory py-24 lg:py-32 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
          " Hiring Process"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.02] font-light", children: "Simple, respectful and focused on real work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-6", children: ["Intro call", "Portfolio or task review", "Final conversation", "Offer"].map((step, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-emerald-deep", children: index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl", children: step }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-ivory/62 leading-relaxed", children: "We keep each stage clear, useful and quick so you know where things stand." })
          ] })
        ] }, step)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm bg-emerald-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: about, alt: "HabiGo 360 team workspace", className: "size-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl leading-tight", children: "We like people who care about the craft and the client." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 lg:py-32 bg-ivory-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-stretch", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative min-h-[360px] overflow-hidden rounded-sm bg-emerald-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: work2, alt: "", className: "absolute inset-0 size-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-emerald-deep/35" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 bg-background border border-emerald-deep/10 rounded-sm p-8 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock3, { className: "!size-4" }),
          " Apply in 5 minutes"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-display text-[clamp(2.2rem,4.5vw,4.6rem)] leading-[1.02] font-light", children: "Send us your profile." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-foreground/65 leading-relaxed max-w-2xl", children: "Share your resume, portfolio, Instagram, LinkedIn or any work that shows how you think. Mention the role you are applying for and what kind of work excites you." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360", className: "inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "!size-4" }),
            " admin@habigo360.com"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "inline-flex items-center gap-2 rounded-full border border-emerald-deep/20 px-6 py-3 text-sm font-semibold text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-colors", children: [
            "Contact Team ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-4" })
          ] })
        ] })
      ] })
    ] }) }),
    selectedRole && /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationDialog, { role: selectedRole, onClose: () => setSelectedRole(null) })
  ] });
}
function ApplicationDialog({
  role,
  onClose
}) {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-[70] bg-emerald-deep/78 backdrop-blur-sm px-4 py-6 md:px-6 md:py-10 overflow-y-auto", role: "dialog", "aria-modal": "true", "aria-labelledby": "application-dialog-title", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-4xl rounded-sm bg-background text-foreground shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-emerald-deep/10 bg-background px-6 py-5 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] uppercase tracking-[0.25em] text-emerald-deep/55", children: [
          "Apply for ",
          role.team
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "application-dialog-title", className: "mt-2 font-display text-3xl lg:text-4xl", children: role.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "shrink-0 rounded-full border border-emerald-deep/15 p-3 text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-colors", "aria-label": "Close application dialog", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "!size-5" }) })
    ] }),
    submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-10 lg:px-8 lg:py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] text-emerald-deep/55", children: "Demo Submitted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-3xl lg:text-4xl", children: "Application preview received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-sm leading-relaxed text-foreground/62", children: "This is a demo confirmation. Once you approve the questions, we can connect this form to email, Google Sheets, a CRM or your backend." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: onClose, className: "mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors", children: [
        "Close ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "!size-4" })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-8 px-6 py-7 lg:px-8 lg:py-9", onSubmit: (event) => {
      event.preventDefault();
      setSubmitted(true);
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email address", name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone number", name: "phone", type: "tel", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", name: "city", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Portfolio / LinkedIn link", name: "portfolio", type: "url", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Notice period", name: "notice", required: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CV", name: "resume", type: "file", accept: ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document", required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4 border-t border-emerald-deep/10 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-xs leading-relaxed text-foreground/55", children: "Demo form only. We can connect this to email, Google Sheets, a CRM or a backend once the final questions are approved." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors", children: [
          "Submit Application ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "!size-4" })
        ] })
      ] })
    ] })
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  accept,
  required = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium text-foreground", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-deep", children: "*" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, accept, required, className: "mt-3 h-12 w-full rounded-sm border border-emerald-deep/15 bg-ivory-warm px-4 text-sm outline-none transition-colors focus:border-emerald-deep file:mr-4 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-emerald-deep" })
  ] });
}
export {
  CareersPage as component
};
