import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import {
  LayoutDashboard,
  Settings,
  Sparkles,
  LogOut,
  Image as ImageIcon,
  Loader2,
  BriefcaseBusiness,
  ImagePlay,
  Users,
  Inbox,
  Star,
  FileText,
  Moon,
  Sun
} from "lucide-react";

import InboxView from "./InboxView";
import TestimonialsView from "./TestimonialsView";
import CaseStudiesView from "./CaseStudiesView";
import DashboardAnalytics from "./DashboardAnalytics";
import ProjectsView from "./ProjectsView";
import TransformationsView from "./TransformationsView";
import CareersView from "./CareersView";
import SiteContentView from "./SiteContentView";
import AdminsView from "./AdminsView";
import SettingsView from "./SettingsView";

export default function AdminDashboard({ onLogout, adminInfo, onUpdate }: { onLogout: () => void, adminInfo: { _id: string; email: string; name: string; role: string; profilePicture?: string; theme?: string; token: string }, onUpdate: (data: any) => void }) {
  // Determine initial tab based on role
  const initialTab = adminInfo.role === "Editor" ? "Site Content" : (adminInfo.role === "Admin" ? "Inbox" : "Dashboard");
  const [activeTab, setActiveTab] = useState(initialTab);

  const toggleThemeMutation = useMutation({
    mutationFn: async (newTheme: string) => {
      const res = await api.put("/auth/profile", { theme: newTheme });
      return res.data;
    },
    onSuccess: (data) => {
      onUpdate(data);
    },
    onError: (err: any) => {
      alert("Failed to update theme: " + (err.response?.data?.message || err.message));
    }
  });

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Inbox", icon: Inbox },
    { label: "Our Work", icon: ImageIcon },
    { label: "Carousels", icon: ImageIcon },
    { label: "Reels", icon: ImagePlay },
    { label: "Stories", icon: ImageIcon },
    { label: "Transformations", icon: ImagePlay },
    { label: "Case Studies", icon: FileText },
    { label: "Testimonials", icon: Star },
    { label: "Careers", icon: BriefcaseBusiness },
    { label: "Site Content", icon: Settings },
    { label: "Access", icon: Users },
    { label: "Settings", icon: Settings },
  ];

  const filteredNavItems = navItems.filter(item => {
    if (adminInfo.role === "Founder") return true;
    if (adminInfo.role === "Admin") return item.label !== "Dashboard";
    if (adminInfo.role === "Editor") return item.label === "Site Content" || item.label === "Settings";
    return false;
  });

  return (
    <div className={`min-h-screen flex relative overflow-hidden selection:bg-emerald-200 ${adminInfo.theme === 'dark' ? 'dark bg-[#0a0a0a] text-ivory' : 'bg-[#f5f5f7] text-gray-900'}`}>
      <aside className={`hidden w-64 shrink-0 border-r backdrop-blur-xl px-5 py-6 lg:flex lg:flex-col z-10 ${adminInfo.theme === 'dark' ? 'border-white/10 bg-black/40 shadow-[4px_0_24px_rgb(0,0,0,0.2)]' : 'border-gray-200/60 bg-white/60 shadow-[4px_0_24px_rgb(0,0,0,0.02)]'}`}>
        <div className="flex items-center gap-3 pl-1">
          <div className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/20">
            <Sparkles className="size-4" />
          </div>
          <div>
            <p className={`text-[15px] font-semibold tracking-tight leading-none ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>HabiGo 360</p>
            <p className={`text-[11px] uppercase tracking-widest mt-1 font-medium ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Admin Portal</p>
          </div>
        </div>

        <nav className="mt-10 space-y-1 flex-1">
          {filteredNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex h-10 w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] transition-all font-medium ${
                activeTab === item.label
                  ? (adminInfo.theme === 'dark' ? 'bg-emerald-deep/20 text-emerald-400 shadow-md shadow-emerald-deep/10 border border-emerald-deep/30' : 'bg-gray-900 text-white shadow-md shadow-gray-900/10')
                  : (adminInfo.theme === 'dark' ? 'text-white/60 hover:bg-white/5 hover:text-white' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900')
              }`}
            >
              <item.icon className="size-[18px]" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className={`mt-auto pt-6 border-t ${adminInfo.theme === 'dark' ? 'border-white/10' : 'border-gray-200/60'}`}>
          <div className="mb-4 px-2 flex items-center gap-3">
            {adminInfo.profilePicture ? (
              <img src={adminInfo.profilePicture} alt="Profile" className={`size-9 rounded-full object-cover border shadow-sm ${adminInfo.theme === 'dark' ? 'border-white/20' : 'border-gray-200'}`} />
            ) : (
              <div className={`size-9 rounded-full border flex items-center justify-center text-sm font-semibold shadow-sm ${adminInfo.theme === 'dark' ? 'bg-gradient-to-tr from-emerald-900 to-emerald-700 border-emerald-500/30 text-white' : 'bg-gradient-to-tr from-blue-100 to-emerald-100 border-white text-gray-800'}`}>
                {adminInfo.name?.charAt(0) || "A"}
              </div>
            )}
            <div className="overflow-hidden">
              <p className={`text-sm font-semibold truncate ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>{adminInfo.name || "Admin User"}</p>
              <p className={`text-xs truncate font-medium ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>{adminInfo.role || "Admin"}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className={`flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors ${adminInfo.theme === 'dark' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20' : 'bg-red-50 text-red-600 hover:bg-red-100'}`}
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 flex flex-col z-10 h-screen">
        <header className={`sticky top-0 z-20 border-b backdrop-blur-2xl px-6 lg:px-10 py-5 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.01)] ${adminInfo.theme === 'dark' ? 'border-white/10 bg-black/40' : 'border-gray-200/60 bg-white/60'}`}>
          <div>
            <h1 className={`text-2xl font-semibold tracking-tight ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>{activeTab}</h1>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => toggleThemeMutation.mutate(adminInfo.theme === 'dark' ? 'light' : 'dark')}
              disabled={toggleThemeMutation.isPending}
              className={`p-2 rounded-full transition-colors ${adminInfo.theme === 'dark' ? 'bg-white/10 text-yellow-300 hover:bg-white/20' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              title="Toggle Theme"
            >
              {toggleThemeMutation.isPending ? <Loader2 className="size-5 animate-spin" /> : (adminInfo.theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />)}
            </button>
            <div className={`text-sm font-medium tracking-wide hidden sm:block ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
              Welcome back, <span className={adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}>{adminInfo.name || "Admin User"}</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6 lg:p-10 pb-20">
          {activeTab === "Our Work" && <ProjectsView categoryFilter="Project" title="Our Work" />}
          {activeTab === "Carousels" && <ProjectsView categoryFilter="Carousel" title="Carousels" />}
          {activeTab === "Reels" && <ProjectsView categoryFilter="Reel" title="Reels" />}
          {activeTab === "Stories" && <ProjectsView categoryFilter="Story" title="Stories" />}
          {activeTab === "Transformations" && <TransformationsView />}
          {activeTab === "Careers" && <CareersView />}
          {activeTab === "Site Content" && <SiteContentView />}
          {activeTab === "Access" && <AdminsView />}
          {activeTab === "Inbox" && <InboxView />}
          {activeTab === "Case Studies" && <CaseStudiesView />}
          {activeTab === "Testimonials" && <TestimonialsView />}
          {activeTab === "Dashboard" && <DashboardAnalytics adminInfo={adminInfo} />}
          {activeTab === "Settings" && <SettingsView adminInfo={adminInfo} onUpdate={onUpdate} />}
        </div>
      </main>
    </div>
  );
}
