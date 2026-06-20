import { useReveal } from "@/routes/index";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import about from "@/assets/about.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import { useQuery } from "@tanstack/react-query";
import api from "@/lib/api";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticCard } from "./MagneticCard";
import { Loader2 } from "lucide-react";

const CAROUSELS_1 = [
  { id: 1, title: "Experience Heritage\nat Kot Dunara", subtitle: "A 16th century castle near Jodhpur", img: work1, type: "tall" },
  { id: 2, title: "Places to visit in\nJODHPUR", subtitle: "", img: work2, type: "square" },
  { id: 3, title: "HIGH TEA", subtitle: "at Sajjanbagh", img: work3, type: "square" },
  { id: 4, title: "Plan a perfect vacation\nat Naila Kothi", subtitle: "A Luxurious Mansion in Jaipur", img: work4, type: "tall" },
  { id: 5, title: "Secret\nLAKES & STEPWELLS\nIN & AROUND JAIPUR", subtitle: "", img: work5, type: "square" },
  { id: 6, title: "The Lake City's\nBest Sips", subtitle: "", img: about, type: "square" },
];

const CAROUSELS_2 = [
  { id: 7, title: "Namli's Fresh Oasis\nin Nature", subtitle: "Ft. Villasita", img: work3, type: "square" },
  { id: 8, title: "Just a few minutes from\nSajjan Bagh", subtitle: "Kumbhalgarh Fort", img: hero1, type: "tall" },
  { id: 9, title: "Here's how a day unfolds at\nNamli Haus", subtitle: "", img: work2, type: "square" },
  { id: 10, title: "Welcome To\nChanoud House, Jodhpur", subtitle: "The kind of place you never want to leave", img: hero2, type: "tall" },
  { id: 11, title: "Mukam\nA stay that quietly connects with you", subtitle: "", img: work5, type: "square" },
  { id: 12, title: "Into the\nWILD", subtitle: "", img: work4, type: "square" },
];

const REELS_1 = [
  { id: 13, title: "Hello, I am", img: founder1 },
  { id: 14, title: "Property Tour", img: hero3 },
  { id: 15, title: "A living Shikarbadi experience", img: work1 },
  { id: 16, title: "Masterpiece", img: hero1 },
];

const REELS_2 = [
  { id: 17, title: "Experience Kumbhalgarh", img: hero2 },
  { id: 18, title: "Mountain air, cozy vibes", img: work2 },
  { id: 19, title: "Hum 6 creators", img: work3 },
  { id: 20, title: "Maxus", img: hero3 },
];

const STORIES = [
  { id: 21, title: "Where mornings feel like holidays", img: work4 },
  { id: 22, title: "Crafting heritage", img: work5 },
  { id: 23, title: "Peace, Luxury, and the Aravalli Hills", img: hero1 },
  { id: 24, title: "Boutique, Bold, Beautiful", img: work2 },
];

import founder1 from "@/assets/founder-1.jpg";

function SectionHeader({ title, type }: { title: string, type: string }) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center max-w-3xl mx-auto mb-16 mt-32 ${shown ? "reveal" : "opacity-0"}`}
    >
      <h2 className="font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light uppercase tracking-tight text-emerald-deep">
        {title} <span className="text-foreground/40 font-sans tracking-normal text-3xl align-middle">({type})</span>
      </h2>
    </div>
  );
}

function MasonryGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[280px]">
      {items.map((c) => (
        <MagneticCard
          key={c.id}
          className={`relative group overflow-hidden rounded-sm bg-secondary scroll-reveal ${
            c.type === "tall" ? "row-span-2" : "row-span-1"
          }`}
        >
          <img
            src={c.img}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-ivory font-display text-2xl leading-tight whitespace-pre-line">
              {c.title}
            </h3>
            {c.subtitle && (
              <p className="text-accent text-sm mt-2 font-semibold tracking-wider uppercase">
                {c.subtitle}
              </p>
            )}
          </div>
        </MagneticCard>
      ))}
    </div>
  );
}

function FourColumnGrid({ items }: { items: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((c) => (
        <MagneticCard
          key={c.id}
          className="relative group overflow-hidden rounded-sm bg-secondary aspect-[9/16] scroll-reveal"
        >
          <img
            src={c.img}
            alt={c.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
            <h3 className="text-ivory font-display text-2xl leading-tight whitespace-pre-line">
              {c.title}
            </h3>
          </div>
        </MagneticCard>
      ))}
    </div>
  );
}

export default function OurWorkCarousels() {
  const { data: feedData, isLoading: isFeedLoading } = useQuery({
    queryKey: ["instagram-feed"],
    queryFn: async () => {
      const res = await api.get("/instagram/feed");
      return res.data;
    },
  });

  const { data: storiesData, isLoading: isStoriesLoading } = useQuery({
    queryKey: ["instagram-stories"],
    queryFn: async () => {
      const res = await api.get("/instagram/stories");
      return res.data;
    },
  });

  const useLiveFeed = feedData && feedData.length > 0;
  const useLiveStories = storiesData && storiesData.length > 0;

  // Map live Instagram data if available
  const liveCarousels = useLiveFeed 
    ? feedData.filter((item: any) => item.type !== "VIDEO").map((item: any, i: number) => ({
        id: item.instagramId,
        title: item.caption ? item.caption.substring(0, 60) + (item.caption.length > 60 ? "..." : "") : "Recent Post",
        subtitle: new Date(item.timestamp).toLocaleDateString(),
        img: item.thumbnailUrl || item.mediaUrl,
        type: i % 4 === 0 ? "tall" : "square",
      }))
    : [];

  const liveReels = useLiveFeed 
    ? feedData.filter((item: any) => item.type === "VIDEO").map((item: any) => ({
        id: item.instagramId,
        title: item.caption ? item.caption.substring(0, 40) + "..." : "Recent Reel",
        img: item.thumbnailUrl || item.mediaUrl,
      }))
    : [];

  const liveStories = useLiveStories 
    ? storiesData.map((item: any) => ({
        id: item.instagramId,
        title: "Active Story",
        img: item.thumbnailUrl || item.mediaUrl,
      }))
    : [];

  return (
    <section className="bg-background py-28 lg:py-40">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
        
        {/* Carousels 1 & 2 */}
        <SectionHeader title="Our Work" type="Carousels" />
        {isFeedLoading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-emerald-deep size-8" /></div>
        ) : (
          <>
            <MasonryGrid items={useLiveFeed ? liveCarousels.slice(0, 6) : CAROUSELS_1} />
            <div className="mt-8">
              <MasonryGrid items={useLiveFeed ? liveCarousels.slice(6, 12) : CAROUSELS_2} />
            </div>
          </>
        )}

        {/* Reels 1 & 2 */}
        <SectionHeader title="Our Work" type="Reels" />
        {isFeedLoading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-emerald-deep size-8" /></div>
        ) : (
          <>
            <FourColumnGrid items={useLiveFeed ? liveReels.slice(0, 4) : REELS_1} />
            <div className="mt-8">
              <FourColumnGrid items={useLiveFeed ? liveReels.slice(4, 8) : REELS_2} />
            </div>
          </>
        )}

        {/* Stories */}
        <SectionHeader title="Our Work" type="Stories" />
        {isStoriesLoading ? (
          <div className="flex justify-center py-10"><Loader2 className="animate-spin text-emerald-deep size-8" /></div>
        ) : (
          <FourColumnGrid items={useLiveStories ? liveStories : STORIES} />
        )}

      </div>
    </section>
  );
}
