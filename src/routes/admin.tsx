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
  FileText
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
  const [adminInfo, setAdminInfo] = useState<{ _id: string; email: string; name: string; role: string; token: string } | null>(null);

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

  return <AdminDashboard onLogout={handleLogout} adminInfo={adminInfo} />;
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
    <div className="min-h-screen bg-[#050505] text-ivory flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] size-[500px] rounded-full bg-emerald-deep/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] size-[400px] rounded-full bg-emerald-deep/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 z-10 shadow-2xl relative">
        <div className="flex justify-center mb-8">
          <div className="flex size-14 items-center justify-center rounded-xl bg-emerald-deep/20 border border-emerald-deep/30 text-emerald-400 shadow-[0_0_20px_rgba(4,92,69,0.3)]">
            <Sparkles className="size-7" />
          </div>
        </div>
        <h2 className="text-3xl font-light text-center text-ivory mb-2 tracking-tight">Admin Portal</h2>
        <p className="text-center text-white/50 text-sm mb-8">Sign in to manage HabiGo 360</p>
        
        {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-6 text-sm text-center">{error}</div>}
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/60 tracking-wider uppercase">Email Address</label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              placeholder="admin@habigo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-xs font-medium text-white/60 tracking-wider uppercase">Password</label>
            <input
              type="password"
              className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-emerald-deep py-3 text-ivory font-medium transition-all hover:bg-emerald-deep/80 hover:shadow-[0_0_15px_rgba(4,92,69,0.4)] flex justify-center items-center mt-4"
          >
            {loading ? <Loader2 className="animate-spin size-5" /> : "Authenticate"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout, adminInfo }: { onLogout: () => void, adminInfo: { _id: string; email: string; name: string; role: string; token: string } }) {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#050505] text-ivory flex relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] size-[800px] rounded-full bg-emerald-deep/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] size-[600px] rounded-full bg-emerald-deep/10 blur-[120px] pointer-events-none"></div>

      <aside className="hidden w-72 shrink-0 border-r border-white/10 bg-white/5 backdrop-blur-xl px-5 py-6 lg:flex lg:flex-col z-10">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-deep/20 border border-emerald-deep/30 text-emerald-400 shadow-[0_0_15px_rgba(4,92,69,0.3)]">
            <Sparkles className="size-5" />
          </div>
          <div>
            <p className="text-sm font-medium tracking-wide">HabiGo 360</p>
            <p className="text-xs text-white/50 uppercase tracking-widest mt-0.5">Admin Portal</p>
          </div>
        </div>

        <nav className="mt-12 space-y-1.5 flex-1">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Inbox", icon: Inbox },
            { label: "Projects", icon: ImageIcon },
            { label: "Case Studies", icon: FileText },
            { label: "Testimonials", icon: Star },
            { label: "Careers", icon: BriefcaseBusiness },
            { label: "Site Content", icon: ImagePlay },
            { label: "Access", icon: Users },
            { label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex h-11 w-full items-center gap-3 rounded-lg px-3 text-left text-sm transition-all ${
                activeTab === item.label
                  ? "bg-emerald-deep/20 text-emerald-400 border border-emerald-deep/30 shadow-[0_0_10px_rgba(4,92,69,0.2)]"
                  : "text-white/60 hover:bg-white/5 hover:text-white border border-transparent"
              }`}
            >
              <item.icon className="size-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/10">
          <div className="mb-4 px-3 flex items-center gap-3">
            <div className="size-8 rounded-full bg-gradient-to-tr from-emerald-deep to-emerald-400 flex items-center justify-center text-xs font-bold shadow-[0_0_10px_rgba(4,92,69,0.4)]">
              {adminInfo.name?.charAt(0) || "A"}
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-medium truncate">{adminInfo.name || "Admin User"}</p>
              <p className="text-xs text-white/50 truncate">{adminInfo.role || "Admin"}</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 text-sm transition-colors hover:bg-red-500/20"
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 flex flex-col z-10">
        <header className="sticky top-0 z-20 border-b border-white/10 bg-black/40 backdrop-blur-xl px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light tracking-tight">{activeTab}</h1>
          </div>
          <div className="text-sm text-emerald-400/80 font-medium tracking-wide">
            Welcome, {adminInfo.name || "Admin User"} <span className="text-white/40">({adminInfo.role || "Admin"})</span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-10">
          {activeTab === "Projects" && <ProjectsView />}
          {activeTab === "Careers" && <CareersView />}
          {activeTab === "Site Content" && <SiteContentView />}
          {activeTab === "Access" && <AdminsView />}
          {activeTab === "Inbox" && <InboxView />}
          {activeTab === "Case Studies" && <CaseStudiesView />}
          {activeTab === "Testimonials" && <TestimonialsView />}
          {activeTab === "Dashboard" && <DashboardAnalytics adminInfo={adminInfo} />}
          {activeTab === "Settings" && <div className="text-white/50 text-center py-20 border border-white/10 border-dashed rounded-xl">Settings module coming soon.</div>}
        </div>
      </main>
    </div>
  );
}

function ProjectsView() {
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

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-base font-semibold">Portfolio Projects</h2>
          <p className="text-sm text-muted-foreground">Manage your dynamic work showcase.</p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-deep px-3 text-sm font-medium text-ivory"
        >
          <Plus className="size-4" />
          <span>New Project</span>
        </button>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 overflow-x-auto backdrop-blur-md">
        <table className="w-full min-w-[800px] text-left text-sm">
          <thead className="border-b border-emerald-deep/10 text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <tr>
              <th className="px-5 py-4 font-medium">Title</th>
              <th className="px-5 py-4 font-medium">Service</th>
              <th className="px-5 py-4 font-medium">Visibility</th>
              <th className="px-5 py-4 font-medium">Order</th>
              <th className="px-5 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-emerald-deep/10">
            {projects?.map((project: any) => (
              <tr key={project._id} className="hover:bg-white/5 transition-colors">
                <td className="px-5 py-4 font-medium">{project.title}</td>
                <td className="px-5 py-4 text-muted-foreground">{project.service}</td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => toggleVisibilityMutation.mutate({ id: project._id, visibility: !project.visibility })}
                    className="inline-flex items-center gap-1 hover:text-emerald-deep"
                  >
                    {project.visibility ? <Eye className="size-4 text-emerald-deep" /> : <EyeOff className="size-4 text-muted-foreground" />}
                  </button>
                </td>
                <td className="px-5 py-4">{project.sortOrder}</td>
                <td className="px-5 py-4 text-right flex justify-end gap-2">
                  <button
                    onClick={() => {
                      setEditingProject(project);
                      setIsModalOpen(true);
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-blue-600"
                  >
                    <Edit className="size-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to delete this project?")) {
                        deleteMutation.mutate(project._id);
                      }
                    }}
                    className="inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-red-600"
                  >
                    <Trash className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
            {projects?.length === 0 && (
              <tr>
                <td colSpan={5} className="px-5 py-8 text-center text-muted-foreground">
                  No projects found. Add one to get started.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <ProjectModal
          project={editingProject}
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

function ProjectModal({ project, onClose, onSuccess }: { project: any; onClose: () => void; onSuccess: () => void }) {
  const isEditing = !!project;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: project?.title || "",
    service: project?.service || "",
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
      alert("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-white/10">
        <div className="flex justify-between items-center p-5 border-b border-emerald-deep/10">
          <h2 className="text-xl font-semibold">{isEditing ? "Edit Project" : "New Project"}</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-emerald-deep"><X className="size-5" /></button>
        </div>
        
        <div className="flex-1 overflow-auto p-5">
          <form id="project-form" onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-medium">Title *</label>
                <input required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Service / Category *</label>
                <input required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})} className="w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium">Description *</label>
              <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows={3} className="w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1 flex items-center gap-2 h-full pt-6">
                <input type="checkbox" id="visibility" checked={formData.visibility} onChange={(e) => setFormData({...formData, visibility: e.target.checked})} className="size-4 accent-emerald-deep" />
                <label htmlFor="visibility" className="text-sm font-medium cursor-pointer">Visible to Public</label>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium">Sort Order (Lower appears first)</label>
                <input type="number" value={formData.sortOrder} onChange={(e) => setFormData({...formData, sortOrder: parseInt(e.target.value) || 0})} className="w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" />
              </div>
            </div>

            {/* Media Upload */}
            <div className="space-y-3">
              <label className="text-sm font-medium flex justify-between items-center">
                <span>Media Gallery</span>
                <label className="cursor-pointer inline-flex items-center gap-1 text-xs bg-emerald-deep/10 text-emerald-deep px-2 py-1 rounded hover:bg-emerald-deep/20">
                  <Upload className="size-3" />
                  {uploadingImage ? "Uploading..." : "Add Media"}
                  <input type="file" className="hidden" accept="image/*,video/*" onChange={handleFileUpload} disabled={uploadingImage} />
                </label>
              </label>
              {formData.media.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.media.map((m: any, i: number) => (
                    <div key={i} className="relative group aspect-video bg-emerald-deep/5 rounded-md overflow-hidden border border-emerald-deep/10">
                      {m.type === "video" ? (
                         <video src={m.url} className="w-full h-full object-cover" />
                      ) : (
                         <img src={m.url} alt="media" className="w-full h-full object-cover" />
                      )}
                      <button type="button" onClick={() => removeMedia(i)} className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <X className="size-3" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-sm text-muted-foreground italic bg-secondary p-4 rounded-md text-center border border-dashed border-emerald-deep/20">
                  No media added yet. Upload images or videos to showcase the project.
                </div>
              )}
            </div>

            {/* KPIs */}
            <div className="space-y-3 pt-4 border-t border-emerald-deep/10">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">KPIs (Key Performance Indicators)</label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, kpis: [...formData.kpis, { label: "", value: 0, suffix: "", trend: "up", trendValue: 0 }] })}
                  className="text-xs bg-emerald-deep/10 text-emerald-deep px-2 py-1 rounded hover:bg-emerald-deep/20"
                >
                  + Add KPI
                </button>
              </div>
              {formData.kpis.map((kpi: any, index: number) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center bg-secondary/50 p-2 rounded border border-emerald-deep/10">
                  <div className="col-span-3">
                    <input type="text" placeholder="Label (e.g. ROAS)" value={kpi.label} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].label = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-2">
                    <input type="number" placeholder="Value (e.g. 50)" value={kpi.value || ""} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].value = Number(e.target.value);
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="Suffix (e.g. x, %)" value={kpi.suffix} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].suffix = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-2">
                    <select value={kpi.trend || "up"} onChange={(e) => {
                      const newKpis = [...formData.kpis];
                      newKpis[index].trend = e.target.value;
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent">
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
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-1 text-right">
                    <button type="button" onClick={() => {
                      const newKpis = [...formData.kpis];
                      newKpis.splice(index, 1);
                      setFormData({ ...formData, kpis: newKpis });
                    }} className="text-red-500 hover:text-red-700">
                      <X className="size-4 inline" />
                    </button>
                  </div>
                </div>
              ))}
              {formData.kpis.length === 0 && (
                <div className="text-xs text-muted-foreground italic text-center p-2 bg-secondary/30 rounded border border-dashed border-emerald-deep/20">No KPIs added.</div>
              )}
            </div>

            {/* Metrics */}
            <div className="space-y-3 pt-4 border-t border-emerald-deep/10">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Text Metrics</label>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, metrics: [...formData.metrics, { label: "", value: "", suffix: "" }] })}
                  className="text-xs bg-emerald-deep/10 text-emerald-deep px-2 py-1 rounded hover:bg-emerald-deep/20"
                >
                  + Add Metric
                </button>
              </div>
              {formData.metrics.map((metric: any, index: number) => (
                <div key={index} className="grid grid-cols-12 gap-2 items-center bg-secondary/50 p-2 rounded border border-emerald-deep/10">
                  <div className="col-span-5">
                    <input type="text" placeholder="Label (e.g. Followers)" value={metric.label} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].label = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-4">
                    <input type="text" placeholder="Value (e.g. 500)" value={metric.value} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].value = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-2">
                    <input type="text" placeholder="Suffix (e.g. k+)" value={metric.suffix} onChange={(e) => {
                      const newMetrics = [...formData.metrics];
                      newMetrics[index].suffix = e.target.value;
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="w-full text-xs rounded border border-emerald-deep/20 px-2 py-1 bg-transparent" />
                  </div>
                  <div className="col-span-1 text-right">
                    <button type="button" onClick={() => {
                      const newMetrics = [...formData.metrics];
                      newMetrics.splice(index, 1);
                      setFormData({ ...formData, metrics: newMetrics });
                    }} className="text-red-500 hover:text-red-700">
                      <X className="size-4 inline" />
                    </button>
                  </div>
                </div>
              ))}
              {formData.metrics.length === 0 && (
                <div className="text-xs text-muted-foreground italic text-center p-2 bg-secondary/30 rounded border border-dashed border-emerald-deep/20">No Text Metrics added.</div>
              )}
            </div>

          </form>
        </div>
        
        <div className="p-5 border-t border-white/10 bg-white/5 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 rounded-md border border-emerald-deep/20 text-sm font-medium hover:bg-secondary transition-colors">Cancel</button>
          <button type="submit" form="project-form" disabled={loading} className="px-4 py-2 rounded-md bg-emerald-deep text-ivory text-sm font-medium hover:bg-emerald-deep/90 flex items-center gap-2">
            {loading && <Loader2 className="animate-spin size-4" />}
            {isEditing ? "Save Changes" : "Create Project"}
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

  if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin size-8 text-emerald-400" /></div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-light tracking-tight text-ivory">Access Management</h2>
          <p className="text-sm text-white/50 mt-1">Manage who has access to the admin portal.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-emerald-deep text-ivory px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-deep/80 transition-all shadow-[0_0_15px_rgba(4,92,69,0.3)]"
        >
          <Plus className="size-4" />
          Add User
        </button>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-md">
        <table className="w-full text-left text-sm">
          <thead className="bg-black/40 text-white/60 text-xs uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4 font-medium">Name</th>
              <th className="px-6 py-4 font-medium">Email</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {admins?.map((admin: any) => (
              <tr key={admin._id} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-ivory">{admin.name}</div>
                </td>
                <td className="px-6 py-4 text-white/70">{admin.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-deep/20 text-emerald-400 border border-emerald-deep/30">
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
                    className="text-red-400 hover:text-red-300 bg-red-400/10 p-2 rounded-md transition-colors"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-5 border-b border-white/10 bg-white/5">
              <h3 className="text-lg font-light tracking-tight text-ivory">Invite New User</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-white/50 hover:text-white transition-colors"><X className="size-5" /></button>
            </div>
            
            <div className="p-6">
              {error && <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-3 rounded-lg mb-4 text-sm">{error}</div>}
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all" placeholder="e.g. Founder admin 1" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all" placeholder="founder1@habigo.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Temporary Password</label>
                  <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all" placeholder="••••••••" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-white/60 uppercase tracking-wider">Role</label>
                  <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 outline-none transition-all">
                    <option value="Founder">Founder</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-5 border-t border-white/10 bg-white/5 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-4 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-white/70 hover:bg-white/5 hover:text-white transition-all">Cancel</button>
              <button onClick={() => createMutation.mutate(formData)} disabled={createMutation.isPending} className="px-4 py-2.5 rounded-lg bg-emerald-deep text-ivory text-sm font-medium hover:bg-emerald-deep/80 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(4,92,69,0.3)]">
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
