import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  Clock3,
  Mail,
  MapPin,
  Menu,
  Send,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

import about from "@/assets/about.jpg";
import hero2 from "@/assets/hero-2.jpg";
import work2 from "@/assets/work-2.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at HabiGo 360" },
      {
        name: "description",
        content:
          "Join HabiGo 360 and help ambitious brands grow through marketing, content, branding, technology and strategy.",
      },
      { property: "og:title", content: "Careers at HabiGo 360" },
      {
        property: "og:description",
        content: "Open roles, hiring process and culture at HabiGo 360, a creative growth agency.",
      },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openings = [
  {
    title: "Social Media Strategist",
    team: "Content",
    type: "Full time",
    location: "Jaipur",
    summary: "Plan content calendars, decode trends and turn brand goals into sharp social ideas.",
    questions: [
      "Which social media campaigns or pages have you managed before?",
      "How do you turn a brand brief into a monthly content calendar?",
      "Share one trend you would adapt for a premium hospitality or lifestyle brand.",
    ],
  },
  {
    title: "Performance Marketing Executive",
    team: "Growth",
    type: "Full time",
    location: "Jaipur",
    summary:
      "Manage paid campaigns, read numbers clearly and improve funnels with practical experiments.",
  },
  {
    title: "Video Editor and Motion Designer",
    team: "Creative",
    type: "Full time",
    location: "Jaipur",
    summary: "Build reels, brand films and campaign edits that feel premium and move fast.",
    questions: [
      "Which editing and motion tools do you use confidently?",
      "Share links to reels, films or motion work that best represent your style.",
      "How do you approach pacing, music and typography for short-form videos?",
    ],
  },
];

const perks = [
  {
    icon: Sparkles,
    title: "Creative ownership",
    text: "Own ideas from first brief to final launch.",
  },
  {
    icon: Target,
    title: "Outcome led work",
    text: "Every project connects creative taste with measurable growth.",
  },
  {
    icon: Users,
    title: "Small senior team",
    text: "Work closely with founders, designers, marketers and operators.",
  },
];

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About us", href: "/about" },
  { id: "services", label: "Services", href: "/services" },
  { id: "work", label: "Our Work", href: "/#work" },
  { id: "careers", label: "Careers", href: "/careers" },
  { id: "contact", label: "Contact us", href: "/#contact" },
];

const serviceLinks = [
  "Social Media Marketing",
  "Performance Marketing",
  "Photography & Videography",
  "Influencer Marketing",
  "Branding & Identity",
  "Email Marketing",
  "WhatsApp Marketing",
  "Website Development",
  "CRM Services",
  "OTA Listings & Management",
  "Event Curation",
  "Brand Films",
];

function CareersPage() {
  const { data: dbOpenings, isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data } = await api.get("/careers");
      return data;
    },
  });

  const activeOpenings = dbOpenings || openings;

  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openDropdown = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 inset-x-0 z-50 bg-[color:var(--emerald-deep)]/92 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logoImg} alt="HabiGo 360" className="h-44 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => {
              if (item.id === "services") {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <a
                      href={item.href}
                      className={`text-[12px] uppercase tracking-[0.18em] transition-colors py-4 inline-block ${
                        dropdownOpen ? "text-accent" : "text-ivory/70 hover:text-accent"
                      }`}
                    >
                      {item.label}
                      <svg
                        className={`inline-block ml-1.5 w-3 h-3 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </a>
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-72 bg-emerald-deep/95 backdrop-blur-xl border border-ivory/10 shadow-2xl rounded-sm overflow-hidden transition-all duration-300 ${
                        dropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 translate-y-3 pointer-events-none"
                      }`}
                    >
                      <div className="py-3">
                        {serviceLinks.map((service) => (
                          <a
                            key={service}
                            href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-6 py-2.5 text-sm text-ivory/70 hover:text-accent hover:bg-white/5 transition-colors"
                          >
                            {service}
                          </a>
                        ))}
                        <div className="border-t border-ivory/10 mt-2 pt-2">
                          <a
                            href="/services"
                            className="block px-6 py-2.5 text-xs uppercase tracking-widest text-accent hover:bg-white/5 transition-colors"
                          >
                            View All Services →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-[12px] uppercase tracking-[0.18em] text-ivory/70 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <a
            href="mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360"
            className="hidden lg:inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold hover:bg-ivory transition-colors"
          >
            Apply Now <ArrowUpRight className="!size-3.5" />
          </a>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden text-ivory p-2"
            aria-label="Menu"
          >
            {navOpen ? <X /> : <Menu />}
          </button>
        </div>
        {navOpen && (
          <div className="lg:hidden bg-[color:var(--emerald-deep)] border-t border-white/10 px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setNavOpen(false)}
                className="block text-ivory text-lg font-display"
              >
                {item.label}
              </a>
            ))}
            <a
              href="mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360"
              onClick={() => setNavOpen(false)}
              className="inline-flex mt-4 items-center gap-2 px-5 py-3 rounded-full bg-accent text-emerald-deep font-semibold"
            >
              Apply Now <ArrowUpRight className="!size-4" />
            </a>
          </div>
        )}
      </header>

      <section className="relative min-h-[82vh] overflow-hidden bg-emerald-deep text-ivory">
        <img src={hero2} alt="" className="absolute inset-0 size-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/85 via-emerald-deep/70 to-emerald-deep" />
        <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10 pt-36 lg:pt-44 pb-20 min-h-[82vh] flex flex-col justify-end">
          <a
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-ivory/65 hover:text-accent transition-colors"
          >
            <ArrowLeft className="!size-4" /> Back Home
          </a>
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-7">
              <span className="size-2 rounded-full bg-accent" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-ivory/70">
                Careers at HabiGo 360
              </span>
            </div>
            <h1 className="font-display text-[clamp(3rem,7vw,7rem)] leading-[0.96] font-light text-balance">
              Build brands people notice, trust and talk about.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-ivory/72 leading-relaxed">
              We are hiring curious marketers, creators and operators who like clear thinking,
              premium execution and work that shows up in real business results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-ivory-warm">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
              <span className="w-10 h-px bg-emerald-deep/40" /> Open Roles
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.02] font-light">
              Come do sharp work with a small, ambitious team.
            </h2>
            <p className="mt-6 text-foreground/65 leading-relaxed">
              This is demo content for now. Titles, locations, salaries and hiring steps can be
              changed once you decide exactly what roles you want to publish.
            </p>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {isLoading ? (
                <div className="py-12 text-center text-muted-foreground animate-pulse">Loading openings...</div>
              ) : activeOpenings.map((role: any, idx: number) => (
              <button
                key={role.title}
                type="button"
                onClick={() => setSelectedRole(role)}
                className="group w-full text-left bg-background border border-emerald-deep/10 rounded-sm p-6 lg:p-8 hover:bg-emerald-deep hover:text-ivory transition-colors duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <div className="text-xs uppercase tracking-[0.25em] text-emerald-deep/55 group-hover:text-accent">
                      {role.team}
                    </div>
                    <h3 className="mt-3 font-display text-2xl lg:text-3xl">{role.title}</h3>
                  </div>
                  <div className="size-12 rounded-full border border-emerald-deep/20 flex items-center justify-center group-hover:border-accent group-hover:bg-accent">
                    <ArrowUpRight className="!size-5 group-hover:text-emerald-deep" />
                  </div>
                </div>
                <p className="mt-5 text-sm text-foreground/65 group-hover:text-ivory/70 leading-relaxed">
                  {role.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 text-xs">
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-deep/5 px-3 py-2 group-hover:bg-white/10">
                    <BriefcaseBusiness className="!size-3.5" /> {role.type}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-emerald-deep/5 px-3 py-2 group-hover:bg-white/10">
                    <MapPin className="!size-3.5" /> {role.location}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-background">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-px bg-emerald-deep/10 border border-emerald-deep/10">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <article key={perk.title} className="bg-background p-8 lg:p-10">
                  <Icon className="!size-7 text-emerald-deep" />
                  <h3 className="mt-8 font-display text-2xl">{perk.title}</h3>
                  <p className="mt-4 text-sm text-foreground/62 leading-relaxed">{perk.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-emerald-deep text-ivory py-12 lg:py-16 overflow-hidden">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-ivory/50 flex items-center gap-3">
              <span className="w-10 h-px bg-ivory/30" /> Hiring Process
            </span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.02] font-light">
              Simple, respectful and focused on real work.
            </h2>
            <div className="mt-10 space-y-6">
              {["Intro call", "Portfolio or task review", "Final conversation", "Offer"].map(
                (step, index) => (
                  <div key={step} className="flex gap-5">
                    <div className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-emerald-deep">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-2xl">{step}</h3>
                      <p className="mt-2 text-sm text-ivory/62 leading-relaxed">
                        We keep each stage clear, useful and quick so you know where things stand.
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-emerald-soft">
            <img src={about} alt="HabiGo 360 team workspace" className="size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-3xl leading-tight">
                We like people who care about the craft and the client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-ivory-warm">
        <div className="max-w-[1500px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 relative min-h-[360px] overflow-hidden rounded-sm bg-emerald-soft">
            <img src={work2} alt="" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-emerald-deep/35" />
          </div>
          <div className="lg:col-span-7 bg-background border border-emerald-deep/10 rounded-sm p-8 lg:p-12">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-deep/60">
              <Clock3 className="!size-4" /> Apply in 5 minutes
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.5vw,4.6rem)] leading-[1.02] font-light">
              Send us your profile.
            </h2>
            <p className="mt-5 text-foreground/65 leading-relaxed max-w-2xl">
              Share your resume, portfolio, Instagram, LinkedIn or any work that shows how you
              think. Mention the role you are applying for and what kind of work excites you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:admin@habigo360.com?subject=Career%20Application%20-%20HabiGo%20360"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors"
              >
                <Mail className="!size-4" /> admin@habigo360.com
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-deep/20 px-6 py-3 text-sm font-semibold text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-colors"
              >
                Contact Team <ArrowUpRight className="!size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {selectedRole && (
        <ApplicationDialog role={selectedRole} onClose={() => setSelectedRole(null)} />
      )}
    </main>
  );
}

function ApplicationDialog({
  role,
  onClose,
}: {
  role: (typeof openings)[number];
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="fixed inset-0 z-[70] bg-emerald-deep/78 backdrop-blur-sm px-4 py-6 md:px-6 md:py-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-dialog-title"
    >
      <div className="min-h-full flex items-center justify-center">
        <div className="relative w-full max-w-4xl rounded-sm bg-background text-foreground shadow-2xl">
          <div className="sticky top-0 z-10 flex items-start justify-between gap-6 border-b border-emerald-deep/10 bg-background px-6 py-5 lg:px-8">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-emerald-deep/55">
                Apply for {role.team}
              </div>
              <h2 id="application-dialog-title" className="mt-2 font-display text-3xl lg:text-4xl">
                {role.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="shrink-0 rounded-full border border-emerald-deep/15 p-3 text-emerald-deep hover:bg-emerald-deep hover:text-ivory transition-colors"
              aria-label="Close application dialog"
            >
              <X className="!size-5" />
            </button>
          </div>

          {submitted ? (
            <div className="px-6 py-10 lg:px-8 lg:py-12">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-emerald-deep/55">
                  Demo Submitted
                </div>
                <h3 className="mt-4 font-display text-3xl lg:text-4xl">
                  Application preview received.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/62">
                  This is a demo confirmation. Once you approve the questions, we can connect this
                  form to email, Google Sheets, a CRM or your backend.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors"
              >
                Close <X className="!size-4" />
              </button>
            </div>
          ) : (
            <form
              className="grid gap-8 px-6 py-7 lg:px-8 lg:py-9"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full name" name="name" required />
                <Field label="Email address" name="email" type="email" required />
                <Field label="Phone number" name="phone" type="tel" required />
                <Field label="City" name="city" required />
                <Field label="Portfolio / LinkedIn link" name="portfolio" type="url" required />
                <Field label="Notice period" name="notice" required />
                <Field
                  label="CV"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  required
                />
              </div>



              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-emerald-deep/10 pt-6">
                <p className="max-w-md text-xs leading-relaxed text-foreground/55">
                  Demo form only. We can connect this to email, Google Sheets, a CRM or a backend
                  once the final questions are approved.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-emerald-deep px-6 py-3 text-sm font-semibold text-ivory hover:bg-emerald-soft transition-colors"
                >
                  Submit Application <Send className="!size-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  accept,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  accept?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-emerald-deep">*</span>}
      </span>
      <input
        name={name}
        type={type}
        accept={accept}
        required={required}
        className="mt-3 h-12 w-full rounded-sm border border-emerald-deep/15 bg-ivory-warm px-4 text-sm outline-none transition-colors focus:border-emerald-deep file:mr-4 file:h-full file:border-0 file:bg-transparent file:text-sm file:font-semibold file:text-emerald-deep"
      />
    </label>
  );
}
