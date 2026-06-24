import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import {
  LayoutDashboard,
  Settings,
  Sparkles,
  LogOut,
  Plus,
  MoreHorizontal,
  Edit,
  Trash,
  Eye,
  EyeOff,
  Image as ImageIcon,
  Loader2,
  X,
  Upload,
  BriefcaseBusiness,
  ImagePlay,
  Users,
  Inbox,
  Star,
  FileText,
  Moon,
  Sun
} from "lucide-react";

import InboxView from "@/components/admin/InboxView";
import TestimonialsView from "@/components/admin/TestimonialsView";
import CaseStudiesView from "@/components/admin/CaseStudiesView";
import DashboardAnalytics from "@/components/admin/DashboardAnalytics";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | HabiGo 360" },
      { name: "description", content: "Manage HabiGo 360 portfolio." },
    ],
  }),
  component: AdminPanel,
});

function AdminPanel() {
  const [adminInfo, setAdminInfo] = useState<{ _id: string; email: string; name: string; role: string; profilePicture?: string; theme?: string; token: string } | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("adminInfo");
    if (stored) {
      setAdminInfo(JSON.parse(stored));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminInfo");
    setAdminInfo(null);
  };

  if (!adminInfo) {
    return <AdminLogin onLogin={(data) => setAdminInfo(data)} />;
  }

  return <AdminDashboard onLogout={handleLogout} adminInfo={adminInfo} onUpdate={(data) => {
    localStorage.setItem("adminInfo", JSON.stringify(data));
    setAdminInfo(data);
  }} />;
}

function AdminLogin({ onLogin }: { onLogin: (data: any) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("adminInfo", JSON.stringify(data));
      onLogin(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] size-[500px] rounded-full bg-emerald-100 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] size-[400px] rounded-full bg-blue-50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl border border-white p-8 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
        <div className="flex justify-center mb-8">
          <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/30">
            <Sparkles className="size-7" />
          </div>
        </div>
        <h2 className="text-3xl font-medium text-center text-gray-900 mb-2 tracking-tight">Admin Portal</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Sign in to manage HabiGo 360</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 text-center">{error}</div>}
          
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
              placeholder="admin@habigo360.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gray-900 py-3 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 flex justify-center items-center mt-6"
          >
            {loading ? <Loader2 className="animate-spin size-5" /> : "Authenticate"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout, adminInfo, onUpdate }: { onLogout: () => void, adminInfo: { _id: string; email: string; name: string; role: string; profilePicture?: string; theme?: string; token: string }, onUpdate: (data: any) => void }) {
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

function ProjectsView({ categoryFilter = "Project", title = "Our Work" }: { categoryFilter?: string, title?: string }) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);

  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get("/projects");
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/projects/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  const toggleVisibilityMutation = useMutation({
    mutationFn: async ({ id, visibility }: { id: string; visibility: boolean }) =>
      await api.put(`/projects/${id}`, { visibility }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] }),
  });

  const filteredProjects = projects?.filter((p: any) => (p.category || "Project") === categoryFilter);

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500 font-medium">Manage your {title.toLowerCase()} showcase.</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-gray-900 px-4 text-sm font-medium text-white shadow-md hover:bg-gray-800 transition-colors"
        >
          <Plus className="size-4" />
          <span>New Work</span>
        </button>
      </div>

      <div className="rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] backdrop-blur-xl">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-gray-200/60 bg-gray-50/50 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Visibility</th>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/60">
            {filteredProjects?.map((project: any) => (
              <tr key={project._id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 font-semibold text-gray-900">{project.title}</td>
                <td className="px-6 py-4 text-gray-500 font-medium">{project.service}</td>
                <td className="px-6 py-4 text-gray-500 font-medium">{project.category || "Project"}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibilityMutation.mutate({ id: project._id, visibility: !project.visibility })}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${project.visibility ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {project.visibility ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
                    {project.visibility ? 'Visible' : 'Hidden'}
                  </button>
                </td>
                <td className="px-6 py-4 text-gray-500 font-medium">{project.sortOrder}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setEditingProject(project);
                      setIsModalOpen(true);
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Edit className="size-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this work item?")) {
                        deleteMutation.mutate(project._id);
                      }
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
            {filteredProjects?.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  No {title.toLowerCase()} added yet. Click New Work to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ProjectModal
          project={editingProject}
          defaultCategory={categoryFilter}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            queryClient.invalidateQueries({ queryKey: ["projects"] });
          }}
        />
      )}
    </div>
  );
}

function ProjectModal({ project, defaultCategory = "Project", onClose, onSuccess }: { project: any; defaultCategory?: string; onClose: () => void; onSuccess: () => void }) {
  const isEditing = !!project;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: project?.title || "",
    service: project?.service || "",
    category: project?.category || defaultCategory,
    description: project?.description || "",
    visibility: project?.visibility ?? true,
    sortOrder: project?.sortOrder || 0,
    media: project?.media || [],
    metrics: project?.metrics || [],
    kpis: project?.kpis || [],
  });

  const [uploadingImage, setUploadingImage] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setUploadingImage(true);
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append("media", file);

    try {
      const { data } = await api.post("/projects/upload", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData((prev) => ({
        ...prev,
        media: [...prev.media, { type: data.format === "video" ? "video" : "image", url: data.url, alt: formData.title }],
      }));
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };

  const removeMedia = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      media: prev.media.filter((_: any, i: number) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await api.put(`/projects/${project._id}`, formData);
      } else {
        await api.post("/projects", formData);
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to save work");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">{isEditing ? "Edit Work" : "New Work"}</h2>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="size-5" /></button>
        </div>
        
        <div className="flex-1 overflow-auto p-6">
          <form id="project-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Title *</label>
                <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Service *</label>
                <input required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Category *</label>
                <select required value={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50">
                  <option value="Project">Project (Case Study)</option>
                  <option value="Carousel">Carousel</option>
                  <option value="Reel">Reel</option>
                  <option value="Story">Story</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Description *</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5 flex items-center gap-2 h-full pt-6">
                <input type="checkbox" id="visibility" checked={formData.visibility} onChange={(e) => setFormData({...formData, visibility: e.target.checked})} className="size-4 accent-emerald-500 rounded border-gray-300" />
                <label htmlFor="visibility" className="text-sm font-semibold text-gray-700 cursor-pointer">Visible to Public</label>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Sort Order</label>
                <input type="number" value={formData.sortOrder} onChange={(e) => setFormData({...formData, sortOrder: parseInt(e.target.value) || 0})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" />
              </div>
            </div>

            {/* Media Upload */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-700 block">Media Gallery</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {formData.media.map((m: any, i: number) => (
                  <div key={i} className="relative group aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200">
                    {m.type === "video" ? (
                       <video src={m.url} className="w-full h-full object-cover" />
                    ) : (
                       <img src={m.url} alt="media" className="w-full h-full object-cover" />
                    )}
                    <button type="button" onClick={() => removeMedia(i)} className="absolute top-2 right-2 bg-red-500 shadow-md text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110">
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
                
                {/* Plus Icon Upload Card */}
                <label className="cursor-pointer flex flex-col items-center justify-center aspect-video bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-100 transition-colors group">
                  {uploadingImage ? (
                    <Loader2 className="size-6 text-gray-400 animate-spin" />
                  ) : (
                    <>
                      <div className="p-3 bg-white rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform">
                        <Plus className="size-6 text-emerald-500" />
                      </div>
                      <span className="text-xs font-medium text-gray-500">Add Media</span>
                    </>
                  )}
                  <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} disabled={uploadingImage} />
                </label>
              </div>
            </div>

            {/* KPIs */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">KPIs (Key Performance Indicators)</label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, kpis: [...formData.kpis, { label: "", value: 0, suffix: "", trend: "up", trendValue: 0 }] })}
                  className="text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  + Add KPI
                </button>
              </div>
              {formData.kpis.map((kpi: any, index: number) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <div className="col-span-3">
                    <input type="text" placeholder="Label (e.g. ROAS)" value={kpi.label} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].label = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-2">
                    <input type="number" placeholder="Value (e.g. 50)" value={kpi.value || ""} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].value = Number(e.target.value);
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="Suffix (e.g. x, %)" value={kpi.suffix} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].suffix = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-2">
                    <select value={kpi.trend || "up"} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].trend = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500">
                      <option value="up">Trend Up</option>
                      <option value="down">Trend Down</option>
                      <option value="neutral">Neutral</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <input type="number" placeholder="Trend Val" value={kpi.trendValue || ""} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].trendValue = Number(e.target.value);
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-1 text-right">
                    <button type="button" onClick={() => {
                      const newKpis = [...formData.kpis];
                      newKpis.splice(index, 1);
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-lg">
                      <X className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
              {formData.kpis.length === 0 && (
                <div className="text-xs text-gray-400 font-medium text-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">No KPIs added.</div>
              )}
            </div>

            {/* Metrics */}
            <div className="space-y-3 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-gray-700">Text Metrics</label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, metrics: [...formData.metrics, { label: "", value: "", suffix: "" }] })}
                  className="text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors"
                >
                  + Add Metric
                </button>
              </div>
              {formData.metrics.map((metric: any, index: number) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-xl border border-gray-200">
                  <div className="col-span-5">
                    <input type="text" placeholder="Label (e.g. Followers)" value={metric.label} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].label = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-4">
                    <input type="text" placeholder="Value (e.g. 500)" value={metric.value} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].value = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="Suffix (e.g. k+)" value={metric.suffix} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].suffix = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" />
                  </div>
                  <div className="col-span-1 text-right">
                    <button type="button" onClick={() => {
                      const newMetrics = [...formData.metrics];
                      newMetrics.splice(index, 1);
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-lg">
                      <X className="size-4" />
                    </button>
                  </div>
                </div>
              ))}
              {formData.metrics.length === 0 && (
                <div className="text-xs text-gray-400 font-medium text-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200">No Text Metrics added.</div>
              )}
            </div>

          </form>
        </div>
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-50 transition-colors">Cancel</button>
          <button type="submit" form="project-form" disabled={loading} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md">
            {loading ? "Saving..." : "Save Work"}
          </button>
        </div>
      </div>
    </div>
  );
}

function CareersView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCareer, setEditingCareer] = useState<any>(null);

  const { data: careers, isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data } = await api.get("/careers");
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/careers/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["careers"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-base font-semibold">Career Openings</h2>
          <p className="text-sm text-muted-foreground">Manage job postings and interview questions.</p>
        </div>
        <button
          onClick={() => {
            setEditingCareer(null);
            setIsModalOpen(true);
          }}
          className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-deep px-3 text-sm font-medium text-ivory"
        >
          <Plus className="size-4" />
          <span>New Opening</span>
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 overflow-x-auto backdrop-blur-md">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-emerald-deep/10 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <tr>
              <th className="px-5 py-4 font-medium">Title</th>
              <th className="px-5 py-4 font-medium">Team</th>
              <th className="px-5 py-4 font-medium">Type</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-deep/10">
            {careers?.map((career: any) => (
              <tr key={career._id} className="hover:bg-white/5 transition-colors">
                <td className="px-5 py-4 font-medium">{career.title}</td>
                <td className="px-5 py-4 text-muted-foreground">{career.team}</td>
                <td className="px-5 py-4 text-muted-foreground">{career.type}</td>
                <td className="px-5 py-4 text-right">
                  <div className="flex items-center justify-end gap-3">
                    <button onClick={() => { setEditingCareer(career); setIsModalOpen(true); }} className="text-emerald-deep hover:text-emerald-deep/80"><Edit className="size-4" /></button>
                    <button onClick={() => deleteMutation.mutate(career._id)} className="text-red-500 hover:text-red-600"><Trash className="size-4" /></button>
                  </div>
                </td>
              </tr>
            ))}
            {careers?.length === 0 && (
              <tr><td colSpan={4} className="px-5 py-8 text-center text-muted-foreground">No openings found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
      {isModalOpen && <CareerModal career={editingCareer} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

function CareerModal({ career, onClose }: { career: any; onClose: () => void }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    title: career?.title || "",
    team: career?.team || "",
    type: career?.type || "",
    location: career?.location || "",
    summary: career?.summary || "",
    questions: career?.questions || [],
  });

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      const token = JSON.parse(localStorage.getItem("adminInfo") || "{}").token;
      const headers = { Authorization: `Bearer ${token}` };
      if (career) return api.put(`/careers/${career._id}`, data, { headers });
      return api.post("/careers", data, { headers });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
      onClose();
    },
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-[#fffdf6] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">{career ? "Edit Opening" : "New Opening"}</h2>
          <button onClick={onClose}><X className="size-5 text-muted-foreground hover:text-foreground" /></button>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); mutation.mutate(formData); }} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium mb-1">Title</label><input required className="w-full rounded-md border p-2 bg-transparent" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} /></div>
            <div><label className="block text-sm font-medium mb-1">Team</label><input required className="w-full rounded-md border p-2 bg-transparent" value={formData.team} onChange={e => setFormData({...formData, team: e.target.value})} /></div>
            <div><label className="block text-sm font-medium mb-1">Type</label><input required className="w-full rounded-md border p-2 bg-transparent" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} /></div>
            <div><label className="block text-sm font-medium mb-1">Location</label><input required className="w-full rounded-md border p-2 bg-transparent" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} /></div>
          </div>
          <div><label className="block text-sm font-medium mb-1">Summary</label><textarea required className="w-full rounded-md border p-2 h-24 bg-transparent" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} /></div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Questions</label>
            {formData.questions.map((q: string, i: number) => (
              <div key={i} className="flex gap-2 mb-2">
                <input className="flex-1 rounded-md border p-2 bg-transparent" value={q} onChange={e => {
                  const newQ = [...formData.questions];
                  newQ[i] = e.target.value;
                  setFormData({...formData, questions: newQ});
                }} />
                <button type="button" onClick={() => setFormData({...formData, questions: formData.questions.filter((_: any, idx: number) => idx !== i)})} className="p-2 text-red-500"><X className="size-4"/></button>
              </div>
            ))}
            <button type="button" onClick={() => setFormData({...formData, questions: [...formData.questions, ""]})} className="text-sm text-emerald-deep font-medium">+ Add Question</button>
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded-md">Cancel</button>
            <button type="submit" disabled={mutation.isPending} className="px-4 py-2 bg-emerald-deep text-ivory rounded-md">{mutation.isPending ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function SiteContentView() {
  const queryClient = useQueryClient();
  const photoLabels: Record<string, string> = {
    "hero1": "Homepage Hero Slideshow 1",
    "hero2": "Homepage Hero Slideshow 2",
    "hero3": "Homepage Hero Slideshow 3",
    "founder1": "Founder Profile (Anushka)",
    "founder2": "Founder Profile (Saurabh)",
    "work1": "Portfolio Gallery Image 1",
    "work2": "Portfolio Gallery Image 2",
    "work3": "Portfolio Gallery Image 3",
    "work4": "Portfolio Gallery Image 4",
    "work5": "Portfolio Gallery Image 5",
    "about": "About Us Section Cover",
    "arpit": "Team Member Profile (Arpit)",
    "dipanshu": "Team Member Profile (Dipanshu)"
  };

  const keys = Object.keys(photoLabels);

  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const { data } = await api.get("/settings");
      return data;
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async ({ key, file }: { key: string, file: File }) => {
      const formData = new FormData();
      formData.append("image", file);
      const token = JSON.parse(localStorage.getItem("adminInfo") || "{}").token;
      return fetch(import.meta.env.VITE_API_URL + `/settings/${key}/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["settings"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-base font-semibold">Site Content & Photos</h2>
        <p className="text-sm text-muted-foreground">Upload images to replace the default static photos across the website.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map(key => {
          const setting = settings?.find((s: any) => s.key === key);
          const val = setting?.value;
          return (
            <div key={key} className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md">
              <h3 className="font-medium text-ivory">{photoLabels[key]}</h3>
              <p className="text-xs text-white/40 mb-4 font-mono">ID: {key}</p>
              <div className="aspect-video bg-secondary/30 rounded-md overflow-hidden mb-3 relative group flex items-center justify-center border border-dashed border-emerald-deep/20">
                {val ? (
                  <img src={val} alt={key} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-muted-foreground text-sm">No custom image</span>
                )}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <div className="text-white flex items-center gap-2 bg-emerald-deep px-3 py-1.5 rounded-md text-sm">
                    {uploadMutation.isPending && uploadMutation.variables?.key === key ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
                    Upload
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                    if (e.target.files?.[0]) {
                      uploadMutation.mutate({ key, file: e.target.files[0] });
                    }
                  }} />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AdminsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Editor" });
  const [error, setError] = useState("");

  const { data: admins, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const { data } = await api.get("/admins");
      return data;
    },
  });

  const createMutation = useMutation({
    mutationFn: async (newAdmin: any) => await api.post("/admins", newAdmin),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      setIsModalOpen(false);
      setFormData({ name: "", email: "", password: "", role: "Editor" });
      setError("");
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Failed to create user");
    }
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/admins/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admins"] }),
  });

  if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">Access Management</h2>
          <p className="text-sm text-gray-500 font-medium mt-1">Manage who has access to the admin portal.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-md"
        >
          <Plus className="size-4" />
          Add User
        </button>
      </div>

      <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/80">
            {admins?.map((admin: any) => (
              <tr key={admin._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">{admin.name}</div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-600">{admin.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100/50 shadow-sm">
                    {admin.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to revoke access for this user?")) {
                        deleteMutation.mutate(admin._id);
                      }
                    }}
                    className="text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors border border-red-100 shadow-sm inline-flex items-center justify-center"
                    title="Revoke Access"
                  >
                    <Trash className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold tracking-tight text-gray-900">Invite New User</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors"><X className="size-5" /></button>
            </div>
            
            <div className="p-6">
              {error && <div className="bg-red-50 border border-red-200 text-red-600 font-medium p-4 rounded-xl mb-5 text-sm shadow-sm">{error}</div>}
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="e.g. Founder admin 1" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="founder1@habigo.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Temporary Password</label>
                  <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="••••••••" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Role</label>
                  <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm cursor-pointer">
                    <option value="Founder">Founder</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm">Cancel</button>
              <button onClick={() => createMutation.mutate(formData)} disabled={createMutation.isPending} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md">
                {createMutation.isPending && <Loader2 className="animate-spin size-4" />}
                Grant Access
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SettingsView({ adminInfo, onUpdate }: { adminInfo: any, onUpdate: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: adminInfo.name || "",
    email: adminInfo.email || "",
    password: ""
  });
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.put("/auth/profile", data);
      return res.data;
    },
    onSuccess: (data) => {
      onUpdate(data);
      setMessage("Profile updated successfully!");
      setFormData(prev => ({ ...prev, password: "" }));
      setTimeout(() => setMessage(""), 3000);
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Failed to update profile");
      setTimeout(() => setError(""), 3000);
    }
  });

  const uploadProfilePicMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data.url;
    },
    onSuccess: (url) => {
      updateMutation.mutate({ profilePicture: url });
      setIsUploading(false);
    },
    onError: () => {
      setError("Failed to upload image.");
      setIsUploading(false);
      setTimeout(() => setError(""), 3000);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit: any = { ...formData };
    if (!dataToSubmit.password) {
      delete dataToSubmit.password;
    }
    updateMutation.mutate(dataToSubmit);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className={`text-xl font-semibold tracking-tight ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>Account Settings</h2>
        <p className={`text-sm font-medium mt-1 ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Manage your profile and preferences.</p>
      </div>

      {message && <div className={`p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === 'dark' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>{message}</div>}
      {error && <div className={`p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === 'dark' ? 'bg-red-900/30 text-red-400 border-red-500/20' : 'bg-red-50 text-red-600 border-red-100'}`}>{error}</div>}

      <div className={`border rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200/60'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`flex items-center gap-6 pb-6 border-b ${adminInfo.theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="relative group">
              {adminInfo.profilePicture ? (
                <img src={adminInfo.profilePicture} alt="Profile" className={`size-24 rounded-full object-cover border-2 shadow-md ${adminInfo.theme === 'dark' ? 'border-white/20' : 'border-white'}`} />
              ) : (
                <div className={`size-24 rounded-full border-2 flex items-center justify-center text-2xl font-semibold shadow-md ${adminInfo.theme === 'dark' ? 'bg-gradient-to-tr from-emerald-900 to-emerald-700 border-white/20 text-white' : 'bg-gradient-to-tr from-blue-100 to-emerald-100 border-white text-gray-800'}`}>
                  {adminInfo.name?.charAt(0) || "A"}
                </div>
              )}
              <label className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm">
                {isUploading ? <Loader2 className="size-6 text-white animate-spin" /> : <Upload className="size-6 text-white" />}
                <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setIsUploading(true);
                    uploadProfilePicMutation.mutate(e.target.files[0]);
                  }
                }} />
              </label>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>Profile Picture</h3>
              <p className={`text-sm font-medium mt-1 ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Click the image to upload a new one.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>Full Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} required />
            </div>
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>Email Address</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} required />
            </div>
          </div>

          <div className={`pb-6 border-b ${adminInfo.theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="space-y-1.5 max-w-md">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>New Password</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} placeholder="Leave blank to keep current" />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={updateMutation.isPending} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-md ${adminInfo.theme === 'dark' ? 'bg-emerald-deep text-ivory hover:bg-emerald-deep/80' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
              {updateMutation.isPending && <Loader2 className="animate-spin size-4" />}
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
function TransformationsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTrans, setEditingTrans] = useState<any>(null);

  const { data: transformations, isLoading } = useQuery({
    queryKey: ["transformations"],
    queryFn: async () => {
      const { data } = await api.get("/transformations");
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/transformations/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transformations"] }),
  });

  const toggleVisibilityMutation = useMutation({
    mutationFn: async ({ id, visibility }: { id: string; visibility: boolean }) =>
      await api.put(`/transformations/${id}`, { visibility }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transformations"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Transformations</h2>
          <p className="text-sm text-gray-500 font-medium">Manage before/after image sliders.</p>
        </div>
        <button
          onClick={() => {
            setEditingTrans(null);
            setIsModalOpen(true);
          }}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-gray-900 px-4 text-sm font-medium text-white shadow-md hover:bg-gray-800 transition-colors"
        >
          <Plus className="size-4" />
          <span>New Transformation</span>
        </button>
      </div>

      <div className="rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] backdrop-blur-xl">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-gray-200/60 bg-gray-50/50 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Visibility</th>
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200/60">
            {transformations?.map((trans: any) => (
              <tr key={trans._id} className="hover:bg-gray-50/50 transition-colors group">
                <td className="px-6 py-4 font-semibold text-gray-900">{trans.title}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => toggleVisibilityMutation.mutate({ id: trans._id, visibility: !trans.visibility })}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${trans.visibility ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}
                  >
                    {trans.visibility ? <Eye className="size-3.5" /> : <EyeOff className="size-3.5" />}
                    {trans.visibility ? 'Visible' : 'Hidden'}
                  </button>
                </td>
                <td className="px-6 py-4 text-gray-500 font-medium">{trans.sortOrder}</td>
                <td className="px-6 py-4 text-right flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setEditingTrans(trans);
                      setIsModalOpen(true);
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Edit className="size-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this transformation?")) {
                        deleteMutation.mutate(trans._id);
                      }
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
            {transformations?.length === 0 && (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                  No transformations added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <TransformationModal
          trans={editingTrans}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => {
            setIsModalOpen(false);
            queryClient.invalidateQueries({ queryKey: ["transformations"] });
          }}
        />
      )}
    </div>
  );
}

function TransformationModal({ trans, onClose, onSuccess }: { trans: any; onClose: () => void; onSuccess: () => void }) {
  const isEditing = !!trans;
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: trans?.title || "",
    beforeImage: trans?.beforeImage || "",
    afterImage: trans?.afterImage || "",
    beforeLabel: trans?.beforeLabel || "Before",
    afterLabel: trans?.afterLabel || "After",
    visibility: trans?.visibility ?? true,
    sortOrder: trans?.sortOrder || 0,
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "beforeImage" | "afterImage") => {
    if (!e.target.files?.[0]) return;
    setUploadingImage(field);
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append("media", file);

    try {
      const { data } = await api.post("/projects/upload", uploadData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData((prev) => ({ ...prev, [field]: data.url }));
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image");
    } finally {
      setUploadingImage(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.beforeImage || !formData.afterImage) {
      return alert("Both Before and After images are required.");
    }
    setLoading(true);
    try {
      if (isEditing) {
        await api.put(`/transformations/${trans._id}`, formData);
      } else {
        await api.post("/transformations", formData);
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to save transformation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">{isEditing ? "Edit Transformation" : "New Transformation"}</h2>
          <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="size-5" /></button>
        </div>
        
        <div className="flex-1 overflow-auto p-6">
          <form id="trans-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Title *</label>
              <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">Before Image *</label>
                <div className="relative group aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                  {formData.beforeImage ? (
                    <img src={formData.beforeImage} alt="before" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-500">No Image</span>
                  )}
                  <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    {uploadingImage === "beforeImage" ? <Loader2 className="animate-spin text-white size-6" /> : <Upload className="text-white size-6" />}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "beforeImage")} disabled={!!uploadingImage} />
                  </label>
                </div>
                <input placeholder="Before Label (e.g. Raw Footage)" value={formData.beforeLabel} onChange={(e) => setFormData({...formData, beforeLabel: e.target.value})} className="w-full text-xs rounded-md border px-3 py-2" />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700">After Image *</label>
                <div className="relative group aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center">
                  {formData.afterImage ? (
                    <img src={formData.afterImage} alt="after" className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xs text-gray-500">No Image</span>
                  )}
                  <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                    {uploadingImage === "afterImage" ? <Loader2 className="animate-spin text-white size-6" /> : <Upload className="text-white size-6" />}
                    <input type="file" className="hidden" accept="image/*" onChange={(e) => handleFileUpload(e, "afterImage")} disabled={!!uploadingImage} />
                  </label>
                </div>
                <input placeholder="After Label (e.g. Graded)" value={formData.afterLabel} onChange={(e) => setFormData({...formData, afterLabel: e.target.value})} className="w-full text-xs rounded-md border px-3 py-2" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5 flex items-center gap-2 h-full pt-6">
                <input type="checkbox" id="t-visibility" checked={formData.visibility} onChange={(e) => setFormData({...formData, visibility: e.target.checked})} className="size-4 accent-emerald-500 rounded border-gray-300" />
                <label htmlFor="t-visibility" className="text-sm font-semibold text-gray-700 cursor-pointer">Visible to Public</label>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-semibold text-gray-700">Sort Order</label>
                <input type="number" value={formData.sortOrder} onChange={(e) => setFormData({...formData, sortOrder: parseInt(e.target.value) || 0})} className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm" />
              </div>
            </div>
          </form>
        </div>
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-50">Cancel</button>
          <button type="submit" form="trans-form" disabled={loading} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 shadow-md">
            {loading ? "Saving..." : "Save Transformation"}
          </button>
        </div>
      </div>
    </div>
  );
}
