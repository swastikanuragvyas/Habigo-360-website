import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { Users, TrendingUp, Globe, Megaphone, Play, Instagram, ArrowUpRight, Loader2, Image as ImageIcon } from "lucide-react";
import { Nav, Footer, StickyCTA } from "./index";
import { motion, useScroll, useTransform } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export interface ServiceWork {
  _id: string;
  title: string;
  service: string;
  description: string;
  visibility: boolean;
  metrics: {
    label: string;
    value: string;
    suffix?: string;
  }[];
  media: {
    type: "image" | "video" | "reel";
    url: string;
    thumbnail?: string;
    alt: string;
    caption?: string;
  }[];
  kpis: {
    label: string;
    value: number;
    suffix: string;
    trend?: "up" | "down" | "neutral";
    trendValue?: number;
  }[];
  instagram?: {
    handle: string;
    posts: {
      id: string;
      url: string;
      thumbnail: string;
      caption?: string;
      likes: number;
      comments: number;
    }[];
  };
}

export const Route = createFileRoute("/our-work")({
  component: OurWorkPage,
  head: () => ({
    meta: [
      { title: "Our Work | HabiGo 360" },
      { name: "description", content: "Explore our portfolio of successful brand transformations, marketing campaigns, and creative productions." }
    ]
  })
});

function OurWorkPage() {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["publicProjects"],
    queryFn: async () => {
      const { data } = await api.get("/projects");
      return data.filter((p: any) => p.visibility !== false);
    },
  });

  return (
    <div className="bg-background text-foreground min-h-screen font-sans antialiased selection:bg-accent selection:text-emerald-deep overflow-x-hidden">
      <Nav scrolled={scrolled} navOpen={navOpen} setNavOpen={setNavOpen} />

      <main className="relative">
        <HeroSection />

        <section className="py-24 lg:py-32 bg-background min-h-[40vh]">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <Loader2 className="animate-spin size-10 text-emerald-deep" />
            </div>
          ) : (
            <div className="max-w-[1500px] mx-auto px-6 lg:px-10 space-y-32">
              {projects?.length > 0 ? (
                projects.map((work: ServiceWork, index: number) => (
                  <WorkShowcase key={work._id} work={work} index={index} />
                ))
              ) : (
                <div className="text-center text-muted-foreground text-xl">
                  New projects are being added soon. Check back later!
                </div>
              )}
            </div>
          )}
        </section>

        {!isLoading && projects && <InstagramSection projects={projects} />}
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative bg-emerald-deep text-ivory pt-32 pb-28 lg:pt-40 lg:pb-36 overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-[1500px] mx-auto px-6 lg:px-10 relative z-10"
      >
        <ScrollReveal y={20} duration={1}>
          <div className="text-center mb-16">
            <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50">Our Work</span>
            <h1 className="mt-6 font-display text-[clamp(3.5rem,10vw,10rem)] leading-[0.95] font-light">
              Where <span className="italic text-accent">Strategy</span> <br /> Meets Craft
            </h1>
            <p className="mt-8 text-ivory/70 max-w-2xl mx-auto text-lg lg:text-xl leading-relaxed">
              We don't just create campaigns—we build growth engines. See how our integrated
              approach delivers measurable outcomes across every discipline.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-24">
          {[
            { label: "Brands Served", value: 50, suffix: "+", icon: Users },
            { label: "Projects Delivered", value: 100, suffix: "+", icon: TrendingUp },
            { label: "Industries Served", value: 9, suffix: "+", icon: Globe },
            { label: "Content Reach (M)", value: 12, suffix: "+", icon: Megaphone },
          ].map((stat, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1 + 0.5} y={20}>
              <div className="bg-ivory/5 backdrop-blur-sm p-6 lg:p-8 rounded-2xl border border-ivory/10 hover:bg-ivory/10 transition-all duration-300 group">
                <stat.icon className="!size-8 text-accent mb-6 opacity-70 group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-4xl lg:text-5xl font-light text-ivory mb-2">
                  <AnimatedNumber value={stat.value} />
                  {stat.suffix}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-ivory/50">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40vw] h-[40vw] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-light/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
}

function WorkShowcase({ work, index }: { work: ServiceWork; index: number }) {
  return (
    <div id={work._id} className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-32 space-y-8">
            <ScrollReveal x={-30}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-deep/60 flex items-center gap-3">
                <span className="w-10 h-px bg-emerald-deep/40" /> {work.service}
              </span>
              <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] font-light text-emerald-deep">
                {work.title}
              </h2>
              <p className="mt-6 text-foreground/70 text-lg leading-relaxed">{work.description}</p>
            </ScrollReveal>

            {work.kpis && work.kpis.length > 0 && (
              <ScrollReveal x={-30} delay={0.2}>
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-emerald-deep/10">
                  {work.kpis.map((kpi, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        {kpi.trend === "up" ? (
                          <TrendingUp className="!size-4 text-accent" />
                        ) : kpi.trend === "down" ? (
                          <TrendingUp className="!size-4 text-emerald-deep rotate-180" />
                        ) : null}
                        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50">
                          {kpi.label}
                        </p>
                      </div>
                      <p className="font-display text-3xl font-light text-emerald-deep">
                        <AnimatedNumber value={kpi.value} />
                        {kpi.suffix}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>

        <div className="lg:col-span-7 space-y-8">
          {work.media && work.media.length > 0 ? (
             work.media.map((media, idx) => (
              <ScrollReveal key={idx} y={40} delay={0.1}>
                <MediaCard media={media} />
              </ScrollReveal>
            ))
          ) : (
            <div className="aspect-[4/3] bg-emerald-deep/5 rounded-2xl flex items-center justify-center border border-emerald-deep/10">
               <ImageIcon className="size-10 text-emerald-deep/30" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaCard({ media }: { media: any }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-secondary/30 cursor-pointer border border-emerald-deep/5"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className={`relative transition-all duration-700 ${isExpanded ? "aspect-auto" : "aspect-[4/3] lg:aspect-[16/10]"}`}
      >
        {media.type === "video" ? (
          <>
            {!isExpanded && (
              <>
                <video
                  src={media.url}
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-deep/20 group-hover:bg-emerald-deep/40 transition-colors duration-500">
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-ivory/20 backdrop-blur-md text-ivory group-hover:scale-110 transition-transform duration-500">
                    <Play className="!size-8 ml-1" />
                  </div>
                </div>
              </>
            )}
            {isExpanded && (
              <video src={media.url} autoPlay muted loop controls className="w-full object-cover" />
            )}
          </>
        ) : (
          <img
            src={media.url}
            alt={media.alt || "Portfolio media"}
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>

      {media.caption && !isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-emerald-deep/90 via-emerald-deep/50 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <p className="text-xs uppercase tracking-[0.2em] text-ivory font-medium">
            {media.caption}
          </p>
        </div>
      )}
    </div>
  );
}

function InstagramSection({ projects }: { projects: ServiceWork[] }) {
  const posts = projects.flatMap(
    (work) => work.instagram?.posts.map((p) => ({ ...p, service: work.service })) || [],
  );

  if (posts.length === 0) return null;

  return (
    <section className="bg-emerald-deep py-24 lg:py-32 overflow-hidden text-ivory">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 mb-16">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-accent flex items-center gap-3 mb-6">
                <Instagram className="!size-4" /> Social Proof
              </span>
              <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02] font-light">
                Real Engagement.
              </h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] border-b border-accent text-accent pb-1 hover:text-ivory hover:border-ivory transition-colors"
            >
              Follow Us <ArrowUpRight className="!size-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex whitespace-nowrap gap-6 px-6">
          {[...posts, ...posts, ...posts].map((post, idx) => (
            <div
              key={`${post.id}-${idx}`}
              className="w-[300px] lg:w-[400px] shrink-0 relative rounded-xl overflow-hidden group/post"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={post.thumbnail}
                  alt="Instagram Post"
                  className="size-full object-cover transition-transform duration-700 group-hover/post:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-emerald-deep/60 opacity-0 group-hover/post:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center text-ivory whitespace-normal">
                  <Instagram className="!size-8 mb-4 text-accent" />
                  <p className="text-sm line-clamp-3 mb-4">{post.caption}</p>
                  <div className="flex gap-4 text-xs font-medium tracking-wider">
                    <span>{post.likes?.toLocaleString()} LIKES</span>
                    <span>{post.comments?.toLocaleString()} CMTS</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}
