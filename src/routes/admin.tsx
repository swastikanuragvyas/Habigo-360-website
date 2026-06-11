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
} from "lucide-react";

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
  const [adminInfo, setAdminInfo] = useState<{ _id: string; email: string; token: string } | null>(null);

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

  return <AdminDashboard onLogout={handleLogout} />;
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
    <div className="min-h-screen bg-[#f7f4eb] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-[#fffdf6] rounded-xl shadow-sm border border-emerald-deep/10 p-8">
        <div className="flex justify-center mb-8">
          <div className="flex size-12 items-center justify-center rounded-lg bg-emerald-deep text-ivory">
            <Sparkles className="size-6" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-emerald-deep mb-6">Admin Login</h2>
        {error && <div className="bg-red-50 text-red-500 p-3 rounded-md mb-4 text-sm">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-emerald-deep/70 mb-1">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-emerald-deep/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-deep"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-deep/70 mb-1">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-emerald-deep/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-deep"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-emerald-deep py-2 text-ivory font-medium transition-colors hover:bg-emerald-deep/90 flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin size-5" /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("Projects");

  return (
    <div className="min-h-screen bg-[#f7f4eb] text-foreground flex">
      <aside className="hidden w-72 shrink-0 border-r border-emerald-deep/10 bg-[#fffdf6] px-5 py-6 lg:flex lg:flex-col">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-md bg-emerald-deep text-ivory">
            <Sparkles className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">HabiGo 360</p>
            <p className="text-xs text-muted-foreground">Admin panel</p>
          </div>
        </div>

        <nav className="mt-10 space-y-1 flex-1">
          {[
            { label: "Dashboard", icon: LayoutDashboard },
            { label: "Projects", icon: ImageIcon },
            { label: "Settings", icon: Settings },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm transition-colors ${
                activeTab === item.label
                  ? "bg-emerald-deep text-ivory"
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="size-4" />
              {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto">
          <button
            onClick={onLogout}
            className="flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm text-red-500 transition-colors hover:bg-red-50"
          >
            <LogOut className="size-4" />
            Sign Out
          </button>
        </div>
      </aside>

      <main className="min-w-0 flex-1 flex flex-col">
        <header className="sticky top-0 z-20 border-b border-emerald-deep/10 bg-[#f7f4eb]/90 backdrop-blur px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">{activeTab}</h1>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          {activeTab === "Projects" && <ProjectsView />}
          {activeTab === "Dashboard" && <div>Welcome to the HabiGo 360 Admin Panel.</div>}
          {activeTab === "Settings" && <div>Settings coming soon...</div>}
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

      <div className="rounded-md border border-emerald-deep/10 bg-[#fffdf6] overflow-x-auto">
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
              <tr key={project._id} className="hover:bg-secondary/30 transition-colors">
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
      media: prev.media.filter((_, i) => i !== index),
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-[#fffdf6] rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-emerald-deep/10">
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

            {/* Metrics & KPIs can be expanded here, keeping it simple for the form layout. */}
            <div className="text-xs text-muted-foreground border-t border-emerald-deep/10 pt-4">
              Note: Metrics and KPIs arrays can be added programmatically or extended in a future update to keep this form simple.
            </div>

          </form>
        </div>
        
        <div className="p-5 border-t border-emerald-deep/10 bg-secondary/30 flex justify-end gap-3">
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
