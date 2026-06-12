import { useReveal } from "@/routes/index";
import { Heart, MessageCircle, Send, Bookmark, Grid, UserSquare, PlaySquare, Home, Search, PlusSquare, User, CheckCircle2 } from "lucide-react";
import founder1 from "@/assets/founder-1.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";

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
    avatar: work1,
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
    avatar: work2,
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
    avatar: work3,
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
    avatar: work4,
  },
];

function PhoneMockup({ data }: { data: typeof MOCKUPS[0] }) {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-[1/2.16] bg-white rounded-[3rem] shadow-xl border-[8px] border-zinc-900 overflow-hidden flex flex-col shrink-0">
      {/* Notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-zinc-900 rounded-b-3xl w-1/2 mx-auto z-20" />
      
      {/* Header */}
      <div className="pt-8 px-4 pb-3 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-sm text-black">{data.username}</span>
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-500/20" />
        </div>
        <div className="flex items-center gap-4 text-black">
          <PlusSquare className="w-5 h-5" />
          <div className="space-y-1">
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-4 pt-3 flex items-center justify-between">
        <div className="relative">
          <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
              <img src={data.avatar} alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-center text-black">
          <div>
            <div className="font-semibold">{data.posts}</div>
            <div className="text-[11px] text-gray-600">posts</div>
          </div>
          <div>
            <div className="font-semibold">{data.followers}</div>
            <div className="text-[11px] text-gray-600">followers</div>
          </div>
          <div>
            <div className="font-semibold">{data.following}</div>
            <div className="text-[11px] text-gray-600">following</div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="px-4 pt-3 text-black">
        <div className="font-semibold text-sm">{data.name}</div>
        <div className="text-[12px] text-gray-500">{data.category}</div>
        <div className="text-[13px] mt-1 whitespace-pre-line leading-snug">{data.bio}</div>
      </div>

      {/* Buttons */}
      <div className="px-4 pt-4 flex gap-2">
        <button className="flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg">Following ⏷</button>
        <button className="flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg">Message</button>
        <button className="flex-1 bg-gray-100 text-black text-[13px] font-semibold py-1.5 rounded-lg">Contact</button>
      </div>

      {/* Highlights */}
      <div className="px-4 pt-4 flex gap-4 overflow-hidden">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="flex flex-col items-center gap-1 shrink-0">
            <div className="w-14 h-14 rounded-full border border-gray-300 p-0.5">
              <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                <img src={data.avatar} className="w-full h-full object-cover opacity-50" />
              </div>
            </div>
            <div className="text-[10px] text-black">Highlight</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-t border-gray-200 mt-4">
        <div className="flex-1 py-2 flex justify-center border-b-[1px] border-black">
          <Grid className="w-5 h-5 text-black" />
        </div>
        <div className="flex-1 py-2 flex justify-center">
          <PlaySquare className="w-5 h-5 text-gray-400" />
        </div>
        <div className="flex-1 py-2 flex justify-center">
          <UserSquare className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-[1px] flex-1 bg-gray-200 content-start">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-square bg-gray-100 relative">
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white text-black mt-auto">
        <Home className="w-6 h-6" />
        <Search className="w-6 h-6" />
        <PlusSquare className="w-6 h-6" />
        <PlaySquare className="w-6 h-6" />
        <User className="w-6 h-6" />
      </div>
    </div>
  )
}

export default function InstagramMockups() {
  const { ref, shown } = useReveal();

  return (
    <section className="bg-emerald-deep py-28 lg:py-40 border-t border-ivory/10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-20">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center max-w-3xl mx-auto mb-16 ${shown ? "reveal" : "opacity-0"}`}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory/50 flex items-center justify-center gap-3">
            <span className="w-10 h-px bg-ivory/30" /> Social Presence <span className="w-10 h-px bg-ivory/30" />
          </span>
          <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[1.02] font-light text-ivory">
            Built for <em className="italic text-accent">Engagement.</em>
          </h2>
        </div>

        <div className="flex overflow-x-auto snap-x-mandatory gap-8 pb-10 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {MOCKUPS.map((m) => (
            <div key={m.id} className="snap-center shrink-0 w-[85vw] sm:w-[320px]">
              <PhoneMockup data={m} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
