import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Plus, Edit, Trash, Eye, EyeOff, X } from "lucide-react";

export default function ProjectsView({ categoryFilter = "Project", title = "Our Work" }: { categoryFilter?: string, title?: string }) {
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
