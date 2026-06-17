import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { h as hero2, a as about, w as work2 } from "./work-2-8jmc0BbE.mjs";
import { l as logoImg, b as NAV, c as SERVICES, f as founder1, d as founder2, s as submitContact, u as useReveal$1 } from "./router-DsNkOnnW.mjs";
import { u as useMutation } from "../_libs/tanstack__react-query.mjs";
import "../_libs/seroval.mjs";
import { b as MessageCircle, a as Mail, g as Phone, h as MapPin, i as Send, I as Instagram, L as Linkedin, f as Twitter, A as ArrowUpRight, X, e as Menu, w as Minus, r as Plus, x as CircleCheck, y as SquarePlus, z as Grid3x3, F as SquarePlay, J as SquareUser, K as House, N as Search, O as User } from "../_libs/lucide-react.mjs";
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
import "./server-DUsf7i-P.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
const hero1 = "/assets/hero-1-BVyb1Y4Q.jpg";
const hero3 = "/assets/hero-3-Cs2El6er.jpg";
function FloatingParticles() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", "aria-hidden": "true", children: [
    { icon: "✦", size: "text-2xl", anim: "float-1", delay: "0s", top: "15%", left: "10%" },
    { icon: "◇", size: "text-xl", anim: "float-2", delay: "2s", top: "25%", left: "85%" },
    { icon: "○", size: "text-3xl", anim: "float-3", delay: "1s", top: "60%", left: "5%" },
    { icon: "✦", size: "text-lg", anim: "float-1", delay: "3s", top: "70%", left: "80%" },
    { icon: "◇", size: "text-2xl", anim: "float-2", delay: "4s", top: "40%", left: "50%" },
    { icon: "✦", size: "text-xl", anim: "float-3", delay: "1.5s", top: "80%", left: "30%" }
  ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute text-accent/20 select-none",
      style: {
        top: p.top,
        left: p.left,
        animation: `${p.anim} 20s ease-in-out infinite`,
        // Slowed from 12s to 20s
        animationDelay: p.delay,
        fontSize: p.size.includes("2xl") ? "1.5rem" : p.size.includes("xl") ? "1.25rem" : "1.75rem"
      },
      children: p.icon
    },
    i
  )) });
}
function StaggeredTypewriter({
  phrases,
  className = ""
}) {
  const [visibleWords, setVisibleWords] = reactExports.useState([]);
  const [done, setDone] = reactExports.useState(false);
  const mountedRef = reactExports.useRef(true);
  reactExports.useEffect(() => {
    mountedRef.current = true;
    setVisibleWords([]);
    setDone(false);
    const wordCounts = phrases.map((p) => p.split(" ").length);
    const totalWords = wordCounts.reduce((a, b) => a + b, 0);
    const delays = [];
    const pausePerLine = 400;
    let wordIdx = 0;
    for (let line = 0; line < phrases.length; line++) {
      for (let w = 0; w < wordCounts[line]; w++) {
        delays.push(wordIdx * 80 + (line > 0 ? pausePerLine : 0));
        wordIdx++;
      }
    }
    let raf = 0;
    let start = null;
    const tick = (timestamp) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `${className} ${!done ? "typewriter-cursor" : ""}`, children: allWords.map((word, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "inline-block transition-all duration-[400ms] ease-out",
      style: {
        opacity: visibleWords.includes(i) ? 1 : 0,
        transform: visibleWords.includes(i) ? "translate3d(0, 0, 0)" : "translate3d(0, 8px, 0)",
        willChange: "transform, opacity"
      },
      children: [
        word,
        i < allWords.length - 1 && allWords[i + 1] !== "," && allWords[i + 1] !== "&" ? " " : ""
      ]
    },
    i
  )) });
}
function Counter$1({
  to,
  suffix = "",
  duration = 1800
}) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function ImmersiveHero() {
  const slides = [hero1, hero3, hero2];
  const [activeSlide, setActiveSlide] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 1e4);
    return () => clearInterval(interval);
  }, [slides.length]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "home",
      className: "relative min-h-screen overflow-hidden bg-[color:var(--emerald-deep)] text-ivory",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          slides.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src,
              alt: "",
              className: "absolute inset-0 size-full object-cover transition-opacity duration-[1500ms] ease-in-out",
              style: { opacity: activeSlide === i ? 1 : 0 },
              loading: i === 0 ? "eager" : "lazy"
            },
            i
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/65 to-emerald-deep/95" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,175,55,0.18),_transparent_55%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,175,55,0.10),_transparent_50%)]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingParticles, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setActiveSlide(i),
            className: `h-1.5 rounded-full transition-all duration-700 ${activeSlide === i ? "w-12 bg-accent shadow-lg shadow-accent/50" : "w-3 bg-ivory/30 hover:bg-ivory/50"}`,
            "aria-label": `Slide ${i + 1}`
          },
          i
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-40 lg:pt-48 pb-24 min-h-screen flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid lg:grid-cols-12 gap-12 items-end flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8 reveal", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-accent animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] uppercase tracking-[0.3em] text-ivory/70", children: "Creative Growth Agency · Est. Hospitality DNA" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-[clamp(2.75rem,7.5vw,7.5rem)] leading-[0.95] font-light text-balance reveal reveal-delay-1", children: [
              "Helping great brands become",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent block mt-2 lg:mt-0 lg:inline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StaggeredTypewriter, { phrases: ["seen,", "remembered", "& trusted."] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "reveal reveal-delay-3 mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 border border-white/15 rounded-2xl overflow-hidden", children: [
            { v: 50, s: "+", l: "Brands Served" },
            { v: 100, s: "+", l: "Projects Delivered" },
            { v: 12, s: "M+", l: "Content Impressions" },
            { v: 9, s: "+", l: "Industries Mastered" }
          ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-ivory-warm p-6 lg:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl lg:text-5xl text-emerald-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter$1, { to: m.v, suffix: m.s }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[10px] uppercase tracking-[0.22em] text-foreground/60 font-semibold", children: m.l })
          ] }, m.l)) })
        ] })
      ]
    }
  );
}
const work1 = "/assets/work-1-qdKlFiIC.jpg";
const work3 = "/assets/work-3-BjYW0Npw.jpg";
const work4 = "/assets/work-4-Bmv-pT6F.jpg";
const MOCKUPS = [
  {
    id: 1,
    username: "sajjanbaghresort",
    name: "Sajjan Bagh Resort & Spa Kumbhalgarh",
    category: "Hotel resort",
    bio: "Hidden in the timeless Aravallis of Kumbhalgarh \nLuxury stays • Slow mornings • Sunset escapes\n🔗 sajjanbagh.in",
    posts: "378",
    followers: "6,672",
    following: "12",
    avatar: work1
  },
  {
    id: 2,
    username: "hotelvishrantiddn",
    name: "Hotel Vishranti",
    category: "Hotel resort",
    bio: "A premium hospitality brand operating and developing multiple products from business hotels to resorts.\n🔗 www.hotelvishranti.com",
    posts: "233",
    followers: "4,250",
    following: "177",
    avatar: work2
  },
  {
    id: 3,
    username: "indian.kitchen_",
    name: "Indian Kitchen",
    category: "Restaurant",
    bio: "Bringing India's Spirit to Every Table 🇮🇳\nIndian Kitchen Menu ⬇️\n357/J R.A. DE MEL MW, Colombo, Sri Lanka\n🔗 qrrocket.com/indiankitchen",
    posts: "876",
    followers: "26.5K",
    following: "393",
    avatar: work3
  },
  {
    id: 4,
    username: "barispersonaltrainingstudio",
    name: "Bari's PT Studio",
    category: "Gym/Physical Fitness Center",
    bio: "Join. Train. Transform.\nDM to Start your Journey!\n📍 Mansarovar, Jaipur",
    posts: "109",
    followers: "639",
    following: "15",
    avatar: work4
  }
];
function PhoneMockup({ data }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-[320px] mx-auto aspect-[1/2.16] bg-white rounded-[3rem] shadow-xl border-[8px] border-zinc-900 overflow-hidden flex flex-col shrink-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto z-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-8 px-4 pb-3 flex items-center justify-between border-b border-gray-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-sm text-black", children: data.username }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5 text-blue-500 fill-blue-500/20" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePlus, { className: "w-5 h-5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-black rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-black rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-1 bg-black rounded-full" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full rounded-full border-2 border-white overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.avatar, alt: "Avatar", className: "w-full h-full object-cover" }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-center text-black", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: data.posts }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-600", children: "posts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: data.followers }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-600", children: "followers" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: data.following }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-gray-600", children: "following" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-3 text-black", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: data.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] text-gray-500", children: data.category }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] mt-1 whitespace-pre-line leading-snug", children: data.bio })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg", children: "Following ⏷" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg", children: "Message" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg", children: "Contact" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-4 flex gap-4 overflow-hidden", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1 shrink-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full border border-gray-300 p-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full bg-gray-200 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: data.avatar, className: "w-full h-full object-cover opacity-50" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-black", children: "Highlight" })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-t border-gray-200 mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-2 flex justify-center border-b-[1px] border-black", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Grid3x3, { className: "w-5 h-5 text-black" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-2 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePlay, { className: "w-5 h-5 text-gray-400" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 py-2 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareUser, { className: "w-5 h-5 text-gray-400" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-[1px] flex-1 bg-gray-200 content-start", children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-gray-100 relative" }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white text-black mt-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(House, { className: "w-6 h-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "w-6 h-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePlus, { className: "w-6 h-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePlay, { className: "w-6 h-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6" })
    ] })
  ] });
}
function InstagramMockups() {
  const { ref, shown } = useReveal$1();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-emerald-deep py-28 lg:py-40 border-t border-ivory/10 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-8 lg:px-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref,
        className: `text-center max-w-3xl mx-auto mb-16 ${shown ? "reveal" : "opacity-0"}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" }),
            " Social Presence ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-ivory/30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-ivory", children: [
            "Built for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "Engagement." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex overflow-x-auto snap-x-mandatory gap-8 pb-10 scrollbar-hide", style: { scrollbarWidth: "none" }, children: MOCKUPS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-center shrink-0 w-[85vw] sm:w-[320px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneMockup, { data: m }) }, m.id)) })
  ] }) });
}
const work5 = "/assets/work-5-w36jwjNP.jpg";
const CAROUSELS_1 = [
  { id: 1, title: "Experience Heritage\nat Kot Dunara", subtitle: "A 16th century castle near Jodhpur", img: work1, type: "tall" },
  { id: 2, title: "Places to visit in\nJODHPUR", subtitle: "", img: work2, type: "square" },
  { id: 3, title: "HIGH TEA", subtitle: "at Sajjanbagh", img: work3, type: "square" },
  { id: 4, title: "Plan a perfect vacation\nat Naila Kothi", subtitle: "A Luxurious Mansion in Jaipur", img: work4, type: "tall" },
  { id: 5, title: "Secret\nLAKES & STEPWELLS\nIN & AROUND JAIPUR", subtitle: "", img: work5, type: "square" },
  { id: 6, title: "The Lake City's\nBest Sips", subtitle: "", img: about, type: "square" }
];
const CAROUSELS_2 = [
  { id: 7, title: "Namli's Fresh Oasis\nin Nature", subtitle: "Ft. Villasita", img: work3, type: "square" },
  { id: 8, title: "Just a few minutes from\nSajjan Bagh", subtitle: "Kumbhalgarh Fort", img: hero1, type: "tall" },
  { id: 9, title: "Here's how a day unfolds at\nNamli Haus", subtitle: "", img: work2, type: "square" },
  { id: 10, title: "Welcome To\nChanoud House, Jodhpur", subtitle: "The kind of place you never want to leave", img: hero2, type: "tall" },
  { id: 11, title: "Mukam\nA stay that quietly connects with you", subtitle: "", img: work5, type: "square" },
  { id: 12, title: "Into the\nWILD", subtitle: "", img: work4, type: "square" }
];
const REELS_1 = [
  { id: 13, title: "Hello, I am", img: founder1 },
  { id: 14, title: "Property Tour", img: hero3 },
  { id: 15, title: "A living Shikarbadi experience", img: work1 },
  { id: 16, title: "Masterpiece", img: hero1 }
];
const REELS_2 = [
  { id: 17, title: "Experience Kumbhalgarh", img: hero2 },
  { id: 18, title: "Mountain air, cozy vibes", img: work2 },
  { id: 19, title: "Hum 6 creators", img: work3 },
  { id: 20, title: "Maxus", img: hero3 }
];
const STORIES = [
  { id: 21, title: "Where mornings feel like holidays", img: work4 },
  { id: 22, title: "Crafting heritage", img: work5 },
  { id: 23, title: "Peace, Luxury, and the Aravalli Hills", img: hero1 },
  { id: 24, title: "Boutique, Bold, Beautiful", img: work2 }
];
function SectionHeader({ title, type }) {
  const { ref, shown } = useReveal$1();
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
    "div",
    {
      className: `relative group overflow-hidden rounded-sm bg-secondary ${c.type === "tall" ? "row-span-2" : "row-span-1"}`,
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
    "div",
    {
      className: "relative group overflow-hidden rounded-sm bg-secondary aspect-[9/16]",
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-8 lg:px-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Carousels" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGrid, { items: CAROUSELS_1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MasonryGrid, { items: CAROUSELS_2 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Reels" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: REELS_1 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: REELS_2 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { title: "Our Work", type: "Stories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FourColumnGrid, { items: STORIES })
  ] }) });
}
function ScrollProgress() {
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? scrollTop / maxScroll * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "scroll-progress", style: { width: `${progress}%` }, "aria-hidden": "true" });
}
function useStaggerReveal({
  threshold = 0.1,
  staggerMs = 100,
  rootMargin = "0px 0px -50px 0px"
} = {}) {
  const [revealed, setRevealed] = reactExports.useState(false);
  const ioRef = reactExports.useRef(null);
  const elRef = reactExports.useRef(null);
  const setRef = reactExports.useCallback(
    (el) => {
      elRef.current = el;
      if (!el || revealed) return;
      if (!ioRef.current) {
        ioRef.current = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setRevealed(true);
              ioRef.current?.disconnect();
              ioRef.current = null;
            }
          },
          { threshold, rootMargin }
        );
      }
      ioRef.current.observe(el);
    },
    [revealed, threshold, rootMargin]
  );
  reactExports.useEffect(() => {
    return () => {
      ioRef.current?.disconnect();
      ioRef.current = null;
    };
  }, []);
  return {
    shown: revealed,
    containerRef: setRef
  };
}
function staggerItemStyle(shown, index, staggerMs = 100) {
  if (!shown) {
    return {
      opacity: "0",
      transform: "translate3d(0, 24px, 0)",
      transition: "none"
    };
  }
  const delay = index * staggerMs;
  return {
    opacity: "1",
    transform: "translate3d(0, 0, 0)",
    transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
  };
}
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
function Counter({
  to,
  suffix = "",
  duration = 1800
}) {
  const [n, setN] = reactExports.useState(0);
  const {
    ref,
    shown
  } = useReveal();
  reactExports.useEffect(() => {
    if (!shown) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.floor(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [shown, to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function HabiGoHome() {
  const [navOpen, setNavOpen] = reactExports.useState(false);
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, { scrolled, navOpen, setNavOpen }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImmersiveHero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgress, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ImpactCounters, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Clients, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhyChooseUs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OurWorkCarousels, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InstagramMockups, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQs, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyCTA, {})
  ] });
}
function WhyChooseUs() {
  const reasons = [{
    num: "01",
    title: "Data-Driven Strategy",
    desc: "Every creative decision is backed by analytics. We don't guess what works; we measure it."
  }, {
    num: "02",
    title: "In-House Specialists",
    desc: "No outsourced generalists. You get direct access to our team of dedicated experts across all disciplines."
  }, {
    num: "03",
    title: "Transparent Reporting",
    desc: "Real-time dashboards and weekly check-ins. You'll always know exactly where your budget is going and the return it generates."
  }, {
    num: "04",
    title: "Scalable Growth",
    desc: "We build systems designed to scale with your ambition, ensuring sustainable long-term success."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why-choose-us", className: "bg-background py-28 lg:py-40 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " Why Choose Us"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
        "An agency built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "outcomes." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-px bg-border border border-border", children: reasons.map((r, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-10 lg:p-14 hover:bg-secondary/40 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-sm text-accent mb-6", children: r.num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl mb-4", children: r.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 leading-relaxed max-w-md", children: r.desc })
    ] }, idx)) })
  ] }) });
}
function FAQs() {
  const [open, setOpen] = reactExports.useState(0);
  const faqs = [{
    q: "What is your typical project timeline?",
    a: "Our typical onboarding and strategy phase takes 2-3 weeks, followed by immediate execution. Depending on the scope, a full brand overhaul can take 6-8 weeks, while performance marketing and content systems are deployed as ongoing monthly engagements."
  }, {
    q: "Do you work with startups or only established brands?",
    a: "We work with ambitious brands at all stages. Whether you're a funded startup needing a scalable growth system or an established enterprise looking to refresh your market presence, our strategies are tailored to your current scale."
  }, {
    q: "How do you measure success and report ROI?",
    a: "We establish clear KPIs (Key Performance Indicators) during discovery. For performance marketing, this means strict ROAS and CAC tracking. For brand and content, we measure reach, engagement rate, and brand sentiment, delivering comprehensive reports every month."
  }, {
    q: "Can we hire you for just one service, like Social Media?",
    a: "Absolutely. While our biggest successes come from our full-stack growth partnerships, we frequently engage with clients for specific disciplines like performance marketing, video production, or branding to fill internal gaps."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faqs", className: "bg-secondary/30 py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " FAQs"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
        "Common ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "questions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-foreground/70 max-w-md", children: "Everything you need to know about how we work, what we charge, and what you can expect from a partnership with HabiGo 360." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 space-y-4", children: faqs.map((faq, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border bg-background rounded-sm overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(open === idx ? null : idx), className: "w-full flex items-center justify-between p-6 lg:p-8 text-left hover:bg-secondary/20 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl lg:text-2xl", children: faq.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-deep shrink-0 ml-4", children: open === idx ? /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "!size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "!size-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${open === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 lg:p-8 pt-0 text-foreground/70 leading-relaxed", children: faq.a }) })
    ] }, idx)) })
  ] }) });
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
function About() {
  const {
    ref,
    shown
  } = useReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "bg-background text-foreground py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: `lg:col-span-7 ${shown ? "reveal" : "opacity-0"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " Who We Are"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance", children: [
        "Growth happens when great businesses are",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "seen, remembered & trusted." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 gap-8 max-w-3xl text-foreground/70 text-[15px] leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Built on a strong foundation in hospitality, HabiGo 360 helps businesses strengthen their presence through marketing, content, branding, technology, and strategic growth initiatives." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We combine creativity, data, storytelling and execution to transform ambitious brands into the names their categories quietly orbit around." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-3 gap-px bg-border max-w-2xl", children: [{
        k: "Mission",
        v: "Become the unfair advantage for ambitious brands."
      }, {
        k: "Vision",
        v: "A studio where strategy and craft are inseparable."
      }, {
        k: "Method",
        v: "Insight. Story. Distribution. Repeat."
      }].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.22em] text-emerald-deep/60 mb-3", children: x.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-foreground/80 leading-snug", children: x.v })
      ] }, x.k)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] overflow-hidden rounded-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: about, alt: "HabiGo studio in production", className: "size-full object-cover", loading: "lazy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-emerald-deep to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display italic text-ivory text-2xl", children: '"Strategy that performs. Craft that lasts."' }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-emerald-deep text-ivory p-5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-accent", children: "07" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-ivory/60 mt-2", children: "Years of craft" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-secondary p-5 rounded-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl text-emerald-deep", children: "24" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/60 mt-2", children: "Specialists in-house" })
        ] })
      ] })
    ] })
  ] }) }) });
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
function Services() {
  const {
    shown,
    containerRef
  } = useStaggerReveal({
    staggerMs: 80
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 mb-16 items-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
          " Capabilities"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-balance", children: [
          "Twelve disciplines.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "One growth engine." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "lg:col-span-5 text-foreground/65 max-w-md text-[15px] leading-relaxed", children: "Brand, content, performance and technology — orchestrated by a single team that owns the outcome, not just the deliverable." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border", children: SERVICES.map((s, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `/services/${s.t.toLowerCase().replace(/\s+/g, "-").replace(/-&-/g, "-")}`, className: "group relative bg-background p-8 lg:p-10 hover:bg-emerald-deep hover:text-ivory transition-colors duration-500 cursor-pointer min-h-[260px] flex flex-col justify-between", style: staggerItemStyle(shown, idx, 80), children: [
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
function ImpactCounters() {
  const stats = [{
    v: 100,
    s: "+",
    l: "Projects Delivered"
  }, {
    v: 50,
    s: "+",
    l: "Brands Served"
  }, {
    v: 12,
    s: "M+",
    l: "Content Reach"
  }, {
    v: 9,
    s: "+",
    l: "Industries Served"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-accent text-emerald-deep py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-emerald-deep/20 pt-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl lg:text-8xl font-light leading-none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.v, suffix: s.s }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.25em] mt-4 text-emerald-deep/70", children: s.l })
  ] }, s.l)) }) }) });
}
function Clients() {
  const logos = [{
    name: "Bhanpur Haveli",
    image: "/logos/1.png"
  }, {
    name: "Namli Hospitality",
    image: "/logos/2.png"
  }, {
    name: "Sajjanbagh",
    image: "/logos/3.png"
  }, {
    name: "Indian Kitchen",
    image: "/logos/4.png"
  }, {
    name: "Dolce Vita",
    image: "/logos/5.png"
  }, {
    name: "Prestige Group",
    image: "/logos/6.png"
  }, {
    name: "Flat Fee Buyers",
    image: "/logos/7.png"
  }, {
    name: "The Gypsy Adventures",
    image: "/logos/8.png"
  }, {
    name: "Maxus Builder",
    image: "/logos/9.png"
  }, {
    name: "Anvaya",
    image: "/logos/10.png"
  }, {
    name: "The Times of India",
    image: "/logos/11.png"
  }, {
    name: "Vicinity",
    image: "/logos/12.png"
  }, {
    name: "SMR Holdings",
    image: "/logos/13.png"
  }, {
    name: "Nakoda Jewellers",
    image: "/logos/14.png"
  }, {
    name: "Foodworks",
    image: "/logos/15.png"
  }, {
    name: "Rare Rabbit",
    image: "/logos/16.png"
  }, {
    name: "Burger Farm",
    image: "/logos/17.png"
  }, {
    name: "Hotel Vishranti",
    image: "/logos/18.png"
  }, {
    name: "Bari's Personal Training",
    image: "/logos/19.png"
  }, {
    name: "IIM Mumbai",
    image: "/logos/20.png"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "clients", className: "bg-emerald-deep text-ivory py-24 lg:py-32 border-t border-ivory/5 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10 mb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-ivory/50", children: "Clients" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(1.75rem,3.5vw,3.5rem)] leading-[1.05] font-light", children: [
        "Trusted by brands we're proud to call ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-accent", children: "friends." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-ivory/55", children: "50+ brands · 9 industries · across hospitality, lifestyle, F&B, fashion, real estate" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex overflow-x-hidden border-y border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 flex animate-marquee whitespace-nowrap w-max hover:[animation-play-state:paused]", children: [...logos, ...logos].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pr-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-white px-6 py-4 rounded-xl hover:bg-white/90 transition-colors w-64 h-28 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.image, alt: l.name, className: "max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" }) }) }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex overflow-x-hidden border-b border-ivory/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-10 flex animate-marquee-slow whitespace-nowrap w-max hover:[animation-play-state:paused]", style: {
      animationDirection: "reverse"
    }, children: [...logos.slice().reverse(), ...logos.slice().reverse()].map((l, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pr-8 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center bg-white px-6 py-4 rounded-xl hover:bg-white/90 transition-colors w-64 h-28 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: l.image, alt: l.name, className: "max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" }) }) }, i)) }) })
  ] });
}
function Testimonials() {
  const {
    shown,
    containerRef
  } = useStaggerReveal({
    staggerMs: 100
  });
  const t = [{
    q: "HabiGo didn't just market our resort — they rebuilt how we present ourselves. Direct bookings up 312% in two quarters.",
    n: "Rohan Kapoor",
    r: "Owner, Maison Lumière"
  }, {
    q: "They are the rare partner that thinks like an owner. Strategy, content, performance — all under one roof, all aligned.",
    n: "Priya Shah",
    r: "Founder, Atelier Noir"
  }, {
    q: "The craft is cinematic. The reporting is sharp. We finally have a team that respects both the brand and the spreadsheet.",
    n: "Vikram Iyer",
    r: "CMO, Verde Group"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-28 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1500px] mx-auto px-6 lg:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-10 h-px bg-emerald-deep/40" }),
        " Testimonials"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light", children: [
        "In their ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic text-emerald-deep", children: "words." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: containerRef, className: "grid md:grid-cols-3 gap-6", children: t.map((x, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { style: staggerItemStyle(shown, i, 100), className: "group bg-card border border-border rounded-sm p-8 lg:p-10 flex flex-col justify-between min-h-[380px] hover:bg-emerald-deep hover:text-ivory transition-colors duration-500", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-6xl leading-none text-accent", children: '"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "font-display text-xl lg:text-2xl leading-snug mt-4 text-balance", children: x.q })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mt-8 pt-6 border-t border-border group-hover:border-ivory/15", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: x.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.22em] text-foreground/50 group-hover:text-ivory/55 mt-1", children: x.r })
      ] })
    ] }, i)) })
  ] }) });
}
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
export {
  Contact,
  Footer,
  Founders,
  Nav,
  StickyCTA,
  HabiGoHome as component,
  useReveal
};
