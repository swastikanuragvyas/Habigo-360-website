import { b as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider, u as useMutation } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, L as Link, u as useLocation, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./server-DUsf7i-P.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { M as Megaphone, T as TrendingUp, C as Camera, S as Sparkles, P as Palette, a as Mail, b as MessageCircle, G as Globe, D as Database, H as Hotel, c as Calendar, d as Play, A as ArrowUpRight, X, e as Menu, I as Instagram, L as Linkedin, f as Twitter, g as Phone, h as MapPin, i as Send } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function PageTransition({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 15 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -15 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "min-h-screen",
      children
    }
  );
}
const appCss = "/assets/styles-B7abq2mX.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "HabiGo 360 — Seen. Remembered. Trusted." },
      {
        name: "description",
        content: "HabiGo 360 is a creative growth agency helping ambitious brands lead their markets through marketing, content, branding, technology and business strategy."
      },
      { name: "author", content: "HabiGo 360" },
      { property: "og:title", content: "HabiGo 360 — Seen. Remembered. Trusted." },
      {
        property: "og:description",
        content: "A creative growth agency for ambitious brands. Marketing, content, branding, technology and business strategy under one roof."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "HabiGo 360 — Seen. Remembered. Trusted." },
      {
        name: "description",
        content: "Elevate Marketing Hub is a premium website showcasing a full-service marketing and creative agency's expertise."
      },
      {
        property: "og:description",
        content: "Elevate Marketing Hub is a premium website showcasing a full-service marketing and creative agency's expertise."
      },
      {
        name: "twitter:description",
        content: "Elevate Marketing Hub is a premium website showcasing a full-service marketing and creative agency's expertise."
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4355f667-c481-4806-a3da-c9da8cb8b9c1/id-preview-930e6780--d03e3ad0-f8e3-475c-b667-171874f39086.lovable.app-1780922218620.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/4355f667-c481-4806-a3da-c9da8cb8b9c1/id-preview-930e6780--d03e3ad0-f8e3-475c-b667-171874f39086.lovable.app-1780922218620.png"
      }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@300;400;500;600;700&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  const location = useLocation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }, location.pathname) }) });
}
const $$splitComponentImporter$7 = () => import("./services-CtZtiw1B.mjs");
const Route$7 = createFileRoute("/services")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./our-work-fPdkWF66.mjs");
const Route$6 = createFileRoute("/our-work")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Our Work | HabiGo 360"
    }, {
      name: "description",
      content: "Explore our portfolio of successful brand transformations, marketing campaigns, and creative productions."
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./careers-BCUQC6qt.mjs");
const Route$5 = createFileRoute("/careers")({
  head: () => ({
    meta: [{
      title: "Careers at HabiGo 360"
    }, {
      name: "description",
      content: "Join HabiGo 360 and help ambitious brands grow through marketing, content, branding, technology and strategy."
    }, {
      property: "og:title",
      content: "Careers at HabiGo 360"
    }, {
      property: "og:description",
      content: "Open roles, hiring process and culture at HabiGo 360, a creative growth agency."
    }],
    links: [{
      rel: "canonical",
      href: "/careers"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./admin-Cw_FM5-h.mjs");
const Route$4 = createFileRoute("/admin")({
  head: () => ({
    meta: [{
      title: "Admin Panel | HabiGo 360"
    }, {
      name: "description",
      content: "Manage HabiGo 360 portfolio."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-Bcff6Nyh.mjs");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component"),
  head: () => ({
    meta: [{
      title: "About Us | HabiGo 360"
    }, {
      name: "description",
      content: "Learn more about HabiGo 360, a creative growth agency helping ambitious brands lead their markets."
    }]
  })
});
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const contactSchema = objectType({
  name: stringType().min(1, "Name is required"),
  company: stringType().optional(),
  email: stringType().email("Valid email required"),
  phone: stringType().optional(),
  industry: stringType().optional(),
  service: stringType().optional(),
  brief: stringType().min(10, "Please share at least a few details about your project").max(2e3)
});
const submitContact = createServerFn({
  method: "POST"
}).inputValidator(contactSchema).handler(createSsrRpc("903e5423f95a9ce2ad984c09fb5bd530215cdf4c61e84904753bd0412f9d50a3"));
const founder1 = "/assets/founder-1-D_4Bv50Y.jpg";
const founder2 = "/assets/founder-2-CIUEuyb7.jpg";
const logoImg = "/assets/logo-BtXEmbiY.png";
const $$splitComponentImporter$2 = () => import("./index-BzRgzhJV.mjs");
const Route$2 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "HabiGo 360 — Creative Growth Agency"
    }, {
      name: "description",
      content: "We help ambitious brands become seen, remembered and trusted through marketing, content, branding, technology and business strategy."
    }, {
      property: "og:title",
      content: "HabiGo 360 — Creative Growth Agency"
    }, {
      property: "og:description",
      content: "Marketing, content, branding, technology & business strategy for brands that refuse to be invisible."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "about",
  label: "About us"
}, {
  id: "services",
  label: "Services"
}, {
  id: "work",
  label: "Our Work"
}, {
  id: "careers",
  label: "Careers",
  href: "/careers"
}, {
  id: "contact",
  label: "Contact us"
}];
function useReveal() {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    }, {
      threshold: 0.15
    });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return {
    ref,
    shown
  };
}
function Nav({
  scrolled,
  navOpen,
  setNavOpen
}) {
  const [dropdownOpen, setDropdownOpen] = reactExports.useState(false);
  const dropdownTimeout = reactExports.useRef(null);
  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--emerald-deep)]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "HabiGo 360", className: "h-44 w-auto" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-9", children: NAV.map((n) => {
        if (n.id === "services") {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", onMouseEnter: openDropdown, onMouseLeave: closeDropdown, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/services", className: `text-[12px] uppercase tracking-[0.18em] transition-colors py-4 inline-block ${dropdownOpen ? "text-accent" : "text-ivory/70 hover:text-accent"}`, children: [
              n.label,
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: `inline-block ml-1.5 w-3 h-3 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute top-full left-1/2 -translate-x-1/2 w-72 bg-emerald-deep/95 backdrop-blur-xl border border-ivory/10 shadow-2xl rounded-sm overflow-hidden transition-all duration-300 ${dropdownOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-3", children: [
              SERVICES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`, className: "flex items-center gap-3 px-6 py-2.5 text-sm text-ivory/70 hover:text-accent hover:bg-white/5 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "!size-4 text-accent/60" }),
                s.t
              ] }, s.t)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ivory/10 mt-2 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/services", className: "block px-6 py-2.5 text-[10px] uppercase tracking-widest text-accent hover:bg-white/5 transition-colors", children: "View All Services →" }) })
            ] }) })
          ] }, n.id);
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href ?? (n.id === "home" ? "/" : n.id === "about" ? "/about" : `/#${n.id}`), className: "text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-accent transition-colors", children: n.label }, n.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", className: "hidden lg:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors", children: [
        "Book a Call",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-3.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setNavOpen(!navOpen), className: "lg:hidden text-ivory p-2", "aria-label": "Menu", children: navOpen ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, {}) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, {}) })
    ] }),
    navOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden bg-[color:var(--emerald-deep)] border-t border-white/10 px-6 py-6 space-y-4", children: [
      NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.href ?? (n.id === "home" ? "/" : n.id === "about" ? "/about" : n.id === "services" ? "/services" : `/#${n.id}`), onClick: () => setNavOpen(false), className: "block text-ivory text-lg font-display", children: n.label }, n.id)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/#contact", onClick: () => setNavOpen(false), className: "inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold", children: [
        "Book a Discovery Call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "!size-4" })
      ] })
    ] })
  ] });
}
function Founders() {
  const f = [{
    img: founder1,
    name: "Anushka Mittal",
    role: "Founder & CEO",
    bio: "Leads strategy, brand vision and client growth. Hospitality-trained, obsessed with the details others miss.",
    quote: "We don't sell creativity. We sell outcomes — wrapped in beautiful work."
  }, {
    img: founder2,
    name: "Saurabh Sharma",
    role: "Co-Founder & CMO",
    bio: "Heads performance, content systems and platform marketing. Translates ambition into measurable distribution.",
    quote: "Great brands aren't lucky. They're systematically seen, remembered and chosen."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_rgba(212,175,55,0.07),_transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,_rgba(212,175,55,0.05),_transparent_50%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-20 lg:mb-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
          "The People",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
          "Built by operators, ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "not observers." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-ivory/50 text-[15px] max-w-lg mx-auto leading-relaxed", children: "Two people who believe that brand and growth are the same discipline — and that great agencies prove it every quarter." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 lg:gap-14 max-w-6xl mx-auto", children: f.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[3/4] overflow-hidden rounded-sm", style: {
          maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]", loading: "lazy" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl lg:text-4xl tracking-tight", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] text-accent mt-2 font-semibold", children: p.role })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-px bg-accent/60 mx-auto mb-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-ivory/50 leading-relaxed max-w-xs mx-auto mb-6", children: p.bio }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative max-w-sm mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-accent/15 leading-none select-none absolute -top-5 -left-2", children: '"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg italic text-ivory/75 leading-snug pl-4", children: p.quote })
        ] })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 lg:mt-28 pt-10 border-t border-ivory/10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.35em] text-ivory/35", children: "Strategy · Creativity · Distribution · Growth — One team, one outcome." }) })
    ] })
  ] });
}
const SERVICES = [{
  i: Megaphone,
  t: "Social Media Marketing",
  d: "Always-on content systems built for retention and reach."
}, {
  i: TrendingUp,
  t: "Performance Marketing",
  d: "Paid media engineered for ROAS, not vanity metrics."
}, {
  i: Camera,
  t: "Photography & Videography",
  d: "Cinematic capture for hospitality, lifestyle and brand films."
}, {
  i: Sparkles,
  t: "Influencer Marketing",
  d: "Curated talent partnerships that feel native to your category."
}, {
  i: Palette,
  t: "Branding & Identity",
  d: "Logo systems, visual language and brand books that age well."
}, {
  i: Mail,
  t: "Email Marketing",
  d: "Lifecycle journeys that turn lists into revenue."
}, {
  i: MessageCircle,
  t: "WhatsApp Marketing",
  d: "Conversational commerce that closes warm leads in hours."
}, {
  i: Globe,
  t: "Website Development",
  d: "Fast, conversion-tuned websites with editorial soul."
}, {
  i: Database,
  t: "CRM Services",
  d: "Set up, segment and automate so growth stops being manual."
}, {
  i: Hotel,
  t: "OTA Listings & Management",
  d: "Hospitality distribution done with discipline."
}, {
  i: Calendar,
  t: "Event Curation",
  d: "Brand experiences that move audiences and the algorithm."
}, {
  i: Play,
  t: "Brand Films",
  d: "High-end visual storytelling that commands attention and emotion."
}];
function Contact() {
  const [form, setForm] = reactExports.useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    brief: ""
  });
  const [formStatus, setFormStatus] = reactExports.useState("idle");
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
          brief: ""
        });
        setTimeout(() => setFormStatus("idle"), 5e3);
      } else {
        setFormStatus("error");
      }
    },
    onError: () => setFormStatus("error")
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "bg-emerald-deep text-ivory py-28 lg:py-40 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.15),_transparent_55%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
          " Contact"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2.25rem,5vw,5rem)] leading-[1] font-light", children: [
          "Let's build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "remarkable." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-ivory/65 max-w-md", children: "Tell us about your brand. We'll respond within one working day with a perspective — not a pitch deck." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-6", children: [{
          i: MessageCircle,
          l: "WhatsApp",
          v: "+91 89638 58888",
          href: "https://wa.me/918963858888"
        }, {
          i: Mail,
          l: "Email",
          v: "admin@habigo360.com",
          href: "mailto:admin@habigo360.com"
        }, {
          i: Phone,
          l: "Phone",
          v: "+91 89638 58888",
          href: "tel:+918963858888"
        }, {
          i: MapPin,
          l: "Studio",
          v: "Jaipur",
          href: void 0
        }].map((x) => {
          const Tag = x.href ? "a" : "div";
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(Tag, { href: x.href ?? void 0, target: x.href?.startsWith("http") ? "_blank" : void 0, rel: x.href?.startsWith("http") ? "noreferrer" : void 0, className: "flex items-center gap-5 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-12 rounded-full bg-ivory/5 border border-ivory/10 grid place-items-center group-hover:bg-accent group-hover:border-accent transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(x.i, { className: "!size-5 text-accent group-hover:text-emerald-deep" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-ivory/45", children: x.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base", children: x.v })
            ] })
          ] }, x.l);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        const target = e.target;
        const fd = new FormData(target);
        const data = {
          name: fd.get("name") || "",
          company: fd.get("company") || "",
          email: fd.get("email") || "",
          phone: fd.get("phone") || "",
          industry: fd.get("industry") || "",
          service: fd.get("service") || "",
          brief: fd.get("brief") || ""
        };
        mutation.mutate({
          data
        });
      }, className: "lg:col-span-7 bg-ivory text-foreground p-8 lg:p-12 rounded-sm space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", placeholder: "Alex Rivera", name: "name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company", placeholder: "Brand or studio", name: "company" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", placeholder: "you@brand.com", name: "email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", placeholder: "+91 ...", name: "phone" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Industry", placeholder: "Hospitality, F&B, Fashion...", name: "industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60", children: "Services Required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { name: "service", required: true, className: "w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", disabled: true, selected: true, children: "Select a service" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Full-stack growth partnership", children: "Full-stack growth partnership" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Branding & identity", children: "Branding & identity" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Performance marketing", children: "Performance marketing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Content & production", children: "Content & production" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Website development", children: "Website development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Other / not sure yet", children: "Other / not sure yet" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60", children: "Project Brief" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name: "brief", rows: 4, required: true, minLength: 10, placeholder: "A few lines about your goals, timeline and budget range...", className: "w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors resize-none" })
        ] }),
        formStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-3 rounded-lg bg-emerald-soft/20 text-emerald-soft text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "!size-5 shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }) }),
          "Thank you! We'll be in touch within one working day."
        ] }),
        formStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 px-5 py-3 rounded-lg bg-red-500/10 text-red-600 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "!size-5 shrink-0", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }),
          "Something went wrong. Please email us directly at admin@habigo360.com"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full md:w-auto inline-flex items-center justify-center gap-3 bg-emerald-deep text-ivory px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-semibold hover:bg-accent hover:text-emerald-deep transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "!size-4" }),
          "Send Inquiry"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-foreground/50", children: "By submitting you agree to our privacy practices. We never share your data." })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  placeholder,
  type = "text",
  name,
  required = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-[10px] uppercase tracking-[0.22em] font-semibold mb-2 block text-foreground/60", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, name, required, className: "w-full bg-transparent border-b border-border py-2.5 focus:border-emerald-deep outline-none text-sm transition-colors" })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-emerald-deep text-ivory border-t border-ivory/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 py-16 grid lg:grid-cols-12 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoImg, alt: "HabiGo 360", className: "h-48 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-ivory/55 text-sm max-w-sm leading-relaxed", children: "A creative growth agency for ambitious brands. Marketing, content, branding, technology and business strategy — under one roof." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-8", children: [Instagram, Linkedin, Twitter].map((I, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/habigo360?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", className: "size-10 rounded-full border border-ivory/15 grid place-items-center hover:bg-accent hover:border-accent hover:text-emerald-deep transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "!size-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: n.id === "home" ? "/" : n.id === "about" ? "/about" : n.id === "services" ? "/services" : `/#${n.id}`, className: "text-ivory/75 hover:text-accent", children: n.label }) }, n.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 text-sm", children: SERVICES.slice(0, 6).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-ivory/75", children: s.t }, s.t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-ivory/45 mb-5", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-ivory/75", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "admin@habigo360.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "+91 89638 58888" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Jaipur" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-ivory/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " HabiGo 360. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", children: "Cookies" })
      ] })
    ] }) })
  ] });
}
function StickyCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://wa.me/918963858888", target: "_blank", rel: "noreferrer", className: "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-accent text-emerald-deep px-5 py-3 rounded-full shadow-2xl shadow-emerald-deep/30 font-semibold text-[11px] uppercase tracking-[0.2em] hover:bg-ivory transition-colors", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "!size-4" }),
    "Book a Discovery Call"
  ] });
}
const $$splitComponentImporter$1 = () => import("./services.index-BLUrJWOG.mjs");
const Route$1 = createFileRoute("/services/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  head: () => ({
    meta: [{
      title: "Services & Capabilities | HabiGo 360"
    }, {
      name: "description",
      content: "From performance marketing to brand films, explore our twelve core disciplines designed to build your growth engine."
    }]
  })
});
const SERVICE_PAGES = {
  "social-media-marketing": {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    tagline: "Audiences don't follow brands. They follow stories worth watching.",
    description: "We build always-on content ecosystems that turn passive scrollers into loyal communities. From editorial calendars to viral-ready reels, we engineer social presences that compound — not just post.",
    deliverables: [
      "Monthly content strategy & editorial calendar",
      "Platform-native content creation (Reels, Stories, Carousels, Posts)",
      "Community management & real-time engagement",
      "Hashtag strategy & trend monitoring",
      "Monthly performance reports with actionable insights",
      "Competitor benchmarking & social listening"
    ],
    approach: "We begin with a deep audit of your current social presence, audience demographics and competitor landscape. Every brand gets a custom content playbook — not a recycled template — built around the intersection of your story and your audience's scroll habits.\n\nOur content studio produces thumb-stopping assets designed for each platform's algorithm. We don't just make things pretty — we make things that perform. Every caption, every hook, every CTA is tested against engagement benchmarks and optimised in real time.\n\nDistribution is the other half of the equation. We time posts for peak engagement, manage communities like they're VIP guest lists, and use social listening to insert your brand into conversations that matter. The result: organic growth that compounds month over month.\n\nReporting is never an afterthought. You get transparent dashboards showing reach, engagement rate, follower growth and content performance — with clear recommendations for the month ahead.",
    stats: [
      { label: "Avg. Engagement Rate", value: "6.8%" },
      { label: "Content Pieces / Month", value: "120+" },
      { label: "Organic Reach Generated", value: "12M+" },
      { label: "Accounts Managed", value: "35+" }
    ]
  },
  "performance-marketing": {
    slug: "performance-marketing",
    title: "Performance Marketing",
    tagline: "Every rupee tracked. Every conversion earned.",
    description: "Paid media engineered for ROAS, not vanity metrics. We architect full-funnel campaigns across Meta, Google, YouTube and programmatic — with creative, targeting and bidding all optimised under one roof.",
    deliverables: [
      "Full-funnel campaign strategy (awareness → consideration → conversion)",
      "Meta Ads, Google Ads & YouTube campaign management",
      "Creative production for ad formats (static, video, carousel)",
      "Landing page optimisation & A/B testing",
      "Conversion tracking, pixel setup & attribution modelling",
      "Weekly optimisation & monthly performance deep-dives"
    ],
    approach: "Performance starts with understanding the customer journey — not just the click. We map your entire funnel, identify drop-off points and build campaigns that move prospects through every stage with intent.\n\nCreative is our secret weapon. While most agencies treat ads as an afterthought, we produce platform-native creative in-house — tested across audiences, formats and placements until we find the combinations that print money.\n\nBidding strategy, audience segmentation and budget allocation are managed with daily precision. We don't set and forget — we optimise in real time, shifting spend toward what's working and killing what isn't before it wastes a single rupee.\n\nTransparency is non-negotiable. You see every metric, every test, every decision. Our reporting connects ad spend to actual revenue, not just impressions — because ROAS is the only metric that pays rent.",
    stats: [
      { label: "Peak ROAS Achieved", value: "7.2x" },
      { label: "Revenue Generated", value: "₹45L+" },
      { label: "Avg. CVR Lift", value: "38%" },
      { label: "Campaigns Managed", value: "200+" }
    ]
  },
  "photography-videography": {
    slug: "photography-videography",
    title: "Photography & Videography",
    tagline: "Your brand deserves frames that outlive the feed.",
    description: "Cinematic capture for hospitality, lifestyle, fashion and brand storytelling. From drone aerials to intimate product close-ups, we produce visual assets that elevate every touchpoint — not just the Instagram grid.",
    deliverables: [
      "Pre-production planning, mood boards & shot lists",
      "On-location photo & video shoots (lifestyle, product, architecture)",
      "Drone & aerial cinematography",
      "Professional editing, colour grading & retouching",
      "Platform-optimised exports (social, web, print, OTA)",
      "Raw asset delivery & brand media library"
    ],
    approach: "Every shoot begins weeks before the camera turns on. We develop detailed mood boards, shot lists and creative briefs that align the visual output with your brand strategy, seasonal campaigns and distribution channels.\n\nOn set, our team works with editorial precision — capturing moments that feel authentic yet aspirational. We shoot for multiple platforms simultaneously, ensuring you walk away with assets for social, web, print, OTA listings and advertising.\n\nPost-production is where craft meets consistency. Every frame is colour-graded to your brand palette, retouched to editorial standards and exported in formats optimised for every channel — from Instagram Reels to billboard-ready prints.\n\nThe result is a visual library that doesn't just fill your content calendar — it builds brand equity with every single frame.",
    stats: [
      { label: "Shoots Completed", value: "350+" },
      { label: "Assets Delivered", value: "25K+" },
      { label: "Drone Shoots", value: "80+" },
      { label: "Brands Captured", value: "50+" }
    ]
  },
  "influencer-marketing": {
    slug: "influencer-marketing",
    title: "Influencer Marketing",
    tagline: "The right voices. The right audiences. The right results.",
    description: "Curated talent partnerships that feel native to your category. We handle everything from influencer discovery and negotiation to campaign execution and performance tracking — so your brand shows up in the feeds that matter.",
    deliverables: [
      "Influencer discovery, vetting & audience analysis",
      "Campaign strategy & creative briefing",
      "Contract negotiation & talent management",
      "Content approval workflows & quality control",
      "Campaign performance tracking & ROI analysis",
      "Long-term ambassador programme development"
    ],
    approach: "We don't chase follower counts — we chase audience alignment. Our discovery process filters creators by niche relevance, engagement authenticity, audience demographics and brand-fit, ensuring every partnership drives genuine impact.\n\nEvery influencer receives a detailed creative brief that balances brand guidelines with creative freedom. The best influencer content doesn't feel like an ad — it feels like a recommendation from a trusted friend. That's the line we walk.\n\nExecution is managed end-to-end: contracts, timelines, content approvals, posting schedules and amplification strategy. You never have to chase a creator or wonder where your campaign stands.\n\nPost-campaign, we deliver comprehensive performance reports that go beyond vanity metrics — tracking reach, engagement, website traffic, conversions and cost-per-acquisition to prove the ROI of every partnership.",
    stats: [
      { label: "Influencers Activated", value: "500+" },
      { label: "Campaign Reach", value: "40M+" },
      { label: "Avg. Engagement", value: "8.2%" },
      { label: "Categories Covered", value: "15+" }
    ]
  },
  "branding-identity": {
    slug: "branding-identity",
    title: "Branding & Identity",
    tagline: "Logos fade. Brand systems endure.",
    description: "We design identity systems built to scale — from logo architecture and colour palettes to typography hierarchies and brand voice. Every element engineered to make your brand instantly recognisable across every touchpoint.",
    deliverables: [
      "Brand strategy, positioning & archetype definition",
      "Logo design (primary, secondary, submarks, favicon)",
      "Colour palette, typography system & visual language",
      "Comprehensive brand guidelines document",
      "Stationery, packaging & collateral design",
      "Digital asset templates (social, email, presentations)"
    ],
    approach: "Branding begins with strategy, not aesthetics. We start with deep immersion — understanding your category, competition, customer psychology and business ambitions. The goal is to find the strategic position only your brand can own.\n\nFrom that foundation, we build a visual identity system — not just a logo. Logo architecture, colour science, type hierarchies, photography direction, illustration style and brand voice all work together as a coherent system that scales from a favicon to a billboard.\n\nEvery deliverable is pressure-tested across real-world applications: business cards, social grids, websites, packaging, signage and advertising. We don't design in a vacuum — we design for the environments where your brand will actually live.\n\nThe final brand book becomes your team's operating manual — a reference that ensures consistency whether you're briefing a printer, launching a campaign or onboarding a new designer three years from now.",
    stats: [
      { label: "Brand Systems Built", value: "60+" },
      { label: "Industries Covered", value: "12+" },
      { label: "Avg. Project Duration", value: "6 wks" },
      { label: "Client Retention", value: "94%" }
    ]
  },
  "email-marketing": {
    slug: "email-marketing",
    title: "Email Marketing",
    tagline: "Your inbox is still the most profitable channel in marketing.",
    description: "Lifecycle email journeys that turn subscribers into buyers and buyers into advocates. From welcome sequences to win-back campaigns, we design, write and automate email programmes that generate revenue on autopilot.",
    deliverables: [
      "Email strategy & lifecycle journey mapping",
      "Template design & responsive HTML development",
      "Copywriting for campaigns, automations & sequences",
      "List segmentation & audience targeting",
      "A/B testing (subject lines, content, send times)",
      "Performance analytics & deliverability monitoring"
    ],
    approach: "Email is a system, not a blast. We begin by mapping your customer lifecycle — identifying the key moments where the right message can drive a purchase, build loyalty or prevent churn.\n\nDesign and copy work in tandem. Every email is crafted to look beautiful on every device, load fast and drive a single clear action. Subject lines are tested, preview text is optimised and CTAs are placed with conversion psychology in mind.\n\nAutomation is where the magic happens. Welcome series, abandoned cart flows, post-purchase nurtures and re-engagement campaigns run 24/7 — generating revenue while you sleep. We build these flows once and optimise them continuously.\n\nDeliverability is the invisible foundation. We manage sender reputation, authentication protocols and list hygiene to ensure your emails land in the primary inbox — not the promotions tab or, worse, the spam folder.",
    stats: [
      { label: "Avg. Open Rate", value: "38%" },
      { label: "Revenue from Email", value: "₹18L+" },
      { label: "Automations Built", value: "150+" },
      { label: "Emails Sent / Month", value: "500K+" }
    ]
  },
  "whatsapp-marketing": {
    slug: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    tagline: "Where conversations convert faster than funnels.",
    description: "Conversational commerce that closes warm leads in hours, not days. We design WhatsApp campaigns, chatbot flows and broadcast strategies that turn India's favourite messaging app into your most profitable sales channel.",
    deliverables: [
      "WhatsApp Business API setup & configuration",
      "Broadcast campaign strategy & execution",
      "Chatbot flow design & automation",
      "Template message creation & approval management",
      "Lead qualification & CRM integration",
      "Performance tracking & conversation analytics"
    ],
    approach: "WhatsApp is the most intimate channel a brand can operate on — which means it requires precision, not volume. We start by defining your conversational strategy: when to message, what to say and how to move a conversation from interest to action.\n\nOur chatbot flows are designed to feel human. Smart branching logic handles FAQs, qualifies leads and routes high-intent prospects to your sales team — all without making the customer feel like they're talking to a machine.\n\nBroadcast campaigns are crafted with the same care as email — segmented audiences, compelling copy, rich media and clear CTAs. We manage template approvals, ensure compliance and optimise send times for maximum open rates.\n\nThe result is a channel that delivers 90%+ open rates, sub-2-hour response times and conversion rates that make every other channel jealous.",
    stats: [
      { label: "Avg. Open Rate", value: "94%" },
      { label: "Avg. Response Time", value: "<2 hrs" },
      { label: "Messages Sent", value: "1M+" },
      { label: "Conversion Lift", value: "3.2x" }
    ]
  },
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    tagline: "Fast, beautiful, conversion-tuned — and built to last.",
    description: "We build websites that load fast, rank well and convert visitors into customers. From editorial portfolio sites to full e-commerce platforms, every build combines premium design with modern engineering.",
    deliverables: [
      "UX strategy, wireframing & information architecture",
      "Custom UI design (responsive, mobile-first)",
      "Frontend development (React, Next.js, modern stack)",
      "CMS integration & content management setup",
      "SEO foundation (technical, on-page, schema markup)",
      "Performance optimisation, analytics & launch support"
    ],
    approach: "Every website we build starts with user research and business goals — not a template. We map the customer journey, define conversion paths and design information architecture that guides visitors toward the actions that matter most to your business.\n\nDesign is where brand meets experience. Our UI work is editorial, premium and intentional — every layout, every interaction, every micro-animation serves the brand story and the business objective simultaneously.\n\nDevelopment is handled with modern tools and best practices. We build on frameworks like React and Next.js, ensuring your site is fast, accessible, SEO-friendly and easy to maintain. No bloat, no plugins you don't need, no technical debt.\n\nPost-launch, we provide analytics setup, performance monitoring and ongoing optimisation support — because a website is never truly finished, it's a living asset that should improve every month.",
    stats: [
      { label: "Sites Launched", value: "40+" },
      { label: "Avg. Page Speed", value: "95+" },
      { label: "Avg. Bounce Rate Drop", value: "32%" },
      { label: "SEO Traffic Lift", value: "2.8x" }
    ]
  },
  "crm-services": {
    slug: "crm-services",
    title: "CRM Services",
    tagline: "Stop losing leads. Start building relationships.",
    description: "We set up, segment and automate your CRM so growth stops being manual. From lead capture to lifecycle marketing, we build the data infrastructure that turns one-time buyers into lifelong customers.",
    deliverables: [
      "CRM platform selection, setup & configuration",
      "Data migration, cleanup & enrichment",
      "Contact segmentation & lead scoring models",
      "Automated workflow design (lead nurture, follow-ups, alerts)",
      "Sales pipeline setup & reporting dashboards",
      "Team training & ongoing optimisation support"
    ],
    approach: "Most businesses have data — they just don't have a system. We start by auditing your existing customer data, sales processes and communication touchpoints to design a CRM architecture that fits how your team actually works.\n\nSetup is meticulous. We configure pipelines, custom fields, automation triggers and reporting dashboards so every lead is tracked, every follow-up is automated and every opportunity is visible to the right person at the right time.\n\nSegmentation transforms your contact list from a spreadsheet into a strategic asset. We build dynamic segments based on behaviour, purchase history, engagement and lifecycle stage — enabling hyper-targeted communication that converts.\n\nThe endgame is a system that runs itself. Automated workflows handle the repetitive work — lead assignment, follow-up sequences, re-engagement campaigns — so your team can focus on closing deals and building relationships.",
    stats: [
      { label: "CRM Systems Deployed", value: "30+" },
      { label: "Contacts Managed", value: "200K+" },
      { label: "Automation Workflows", value: "180+" },
      { label: "Lead Response Time", value: "<15 min" }
    ]
  },
  "ota-listings-management": {
    slug: "ota-listings-management",
    title: "OTA Listings & Management",
    tagline: "Hospitality distribution done with discipline, not guesswork.",
    description: "We optimise your presence across Booking.com, MakeMyTrip, Agoda, Airbnb and every OTA that matters — ensuring your property is discoverable, competitively priced and beautifully presented to every potential guest.",
    deliverables: [
      "OTA listing creation, optimisation & content writing",
      "Professional photography direction for OTA platforms",
      "Rate parity management & dynamic pricing strategy",
      "Review monitoring, response management & reputation building",
      "Channel manager setup & inventory synchronisation",
      "Monthly performance reports with occupancy analytics"
    ],
    approach: "OTA visibility is a science. We audit your current listings across every platform, identify ranking factors you're missing and rebuild your presence with optimised titles, descriptions, photography and amenity tags that push you up the search results.\n\nPricing strategy is managed with a blend of competitive intelligence and market data. We implement dynamic pricing models that maximise RevPAR without sacrificing occupancy — adjusting rates based on demand patterns, competitor movement and seasonal trends.\n\nReviews are your most powerful marketing asset on OTAs. We implement systematic review solicitation strategies and craft thoughtful, brand-consistent responses to every review — turning guest feedback into a competitive advantage.\n\nThe result is higher visibility, better conversion rates, more direct bookings and a reputation that makes your property the obvious choice in your category and market.",
    stats: [
      { label: "Properties Managed", value: "25+" },
      { label: "Avg. Occupancy Lift", value: "28%" },
      { label: "Reviews Managed", value: "5K+" },
      { label: "Direct Booking Increase", value: "312%" }
    ]
  },
  "event-curation": {
    slug: "event-curation",
    title: "Event Curation",
    tagline: "Brand experiences that move audiences — and the algorithm.",
    description: "We conceptualise, plan and execute brand events that generate real-world impact and digital content simultaneously. From intimate launch dinners to large-scale experiential activations, every event is designed to be both lived and shared.",
    deliverables: [
      "Event concept development & creative direction",
      "Venue sourcing, vendor management & logistics",
      "Brand experience design (décor, signage, activations)",
      "Content capture strategy (photo, video, social)",
      "Guest list curation & RSVP management",
      "Post-event content package & performance report"
    ],
    approach: "Every event starts with a strategic question: what do we want people to feel, do and share? The answer shapes every decision — from venue selection to the sequence of moments that build toward the emotional peak.\n\nProduction is handled with hospitality-grade precision. We manage every detail — vendors, timelines, contingencies, guest experience flows — so the event feels effortless for your team and unforgettable for your guests.\n\nContent capture is embedded into the event design, not bolted on. We position photographers, videographers and content creators at strategic moments — ensuring you walk away with a library of assets that fuel your social, website and advertising for months.\n\nPost-event, we deliver a full content package and performance report — measuring reach, engagement, press coverage and attendee feedback to quantify the ROI and inform your next activation.",
    stats: [
      { label: "Events Curated", value: "75+" },
      { label: "Combined Reach", value: "8M+" },
      { label: "Avg. Content Pieces", value: "200+" },
      { label: "Client Satisfaction", value: "98%" }
    ]
  },
  "brand-films": {
    slug: "brand-films",
    title: "Brand Films",
    tagline: "Stories that command attention. Films that build legacy.",
    description: "High-end visual storytelling that transcends the typical corporate video. We produce cinematic brand films, campaign films and documentary-style content that captures the soul of your brand and earns an emotional response.",
    deliverables: [
      "Creative concept development & scripting",
      "Pre-production (casting, location scouting, storyboarding)",
      "Professional cinematography & direction",
      "Post-production (editing, colour grading, sound design, motion graphics)",
      "Multi-format delivery (hero film, cutdowns, social edits)",
      "Distribution strategy & media placement guidance"
    ],
    approach: "A brand film is not a video — it's a strategic asset. We start with your brand's core truth and build a narrative around it. The goal is to create something that audiences choose to watch, not just something they're served in an ad slot.\n\nPre-production is where we earn the film's quality. Detailed scripts, storyboards, shot lists, casting decisions and location scouts ensure that every minute on set is productive and every frame serves the story.\n\nOn set, our directors and cinematographers work with feature-level craft. We shoot on professional cinema cameras, use considered lighting and capture performances that feel genuine — because audiences can spot manufactured emotion instantly.\n\nPost-production is where the film comes alive. Professional editing, cinematic colour grading, sound design and original music transform raw footage into a finished piece that competes with the best content your audience encounters — from any brand, in any category.",
    stats: [
      { label: "Films Produced", value: "45+" },
      { label: "Combined Views", value: "15M+" },
      { label: "Avg. Watch Time", value: "82%" },
      { label: "Awards & Features", value: "12+" }
    ]
  }
};
const $$splitComponentImporter = () => import("./services._slug-C39bcyx0.mjs");
const Route = createFileRoute("/services/$slug")({
  head: ({
    params
  }) => {
    const service = SERVICE_PAGES[params.slug];
    return {
      meta: [{
        title: service ? `${service.title} — HabiGo 360` : "Service Not Found — HabiGo 360"
      }, {
        name: "description",
        content: service?.description ?? "Service not found."
      }]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$7.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$8
});
const OurWorkRoute = Route$6.update({
  id: "/our-work",
  path: "/our-work",
  getParentRoute: () => Route$8
});
const CareersRoute = Route$5.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$8
});
const AdminRoute = Route$4.update({
  id: "/admin",
  path: "/admin",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const ServicesIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => ServicesRoute
});
const ServicesSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ServicesRoute
});
const ServicesRouteChildren = {
  ServicesSlugRoute,
  ServicesIndexRoute
};
const ServicesRouteWithChildren = ServicesRoute._addFileChildren(
  ServicesRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdminRoute,
  CareersRoute,
  OurWorkRoute,
  ServicesRoute: ServicesRouteWithChildren
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Contact as C,
  Footer as F,
  Nav as N,
  Route as R,
  StickyCTA as S,
  Founders as a,
  NAV as b,
  SERVICES as c,
  founder2 as d,
  SERVICE_PAGES as e,
  founder1 as f,
  logoImg as l,
  router as r,
  submitContact as s,
  useReveal as u
};
