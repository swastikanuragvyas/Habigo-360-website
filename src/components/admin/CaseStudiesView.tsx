import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useRef } from "react";
import api from "@/lib/api";
import { Loader2, Plus, X, Trash, Edit, FileText, ImagePlus, CheckCircle2 } from "lucide-react";

export default function CaseStudiesView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      const { data } = await api.get("/case-studies");
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/case-studies/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["caseStudies"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-light tracking-tight text-ivory">Case Studies</h2>
          <p className="text-white/50 text-sm mt-1">Publish success stories and marketing results.</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 rounded-lg bg-emerald-deep px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep/80"
        >
          <Plus className="size-4" /> Add Case Study
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies?.map((cs: any) => (
          <div key={cs._id} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md relative group">
            {/* Cover image */}
            {cs.coverImage ? (
              <div className="relative h-44 w-full overflow-hidden">
                <img src={cs.coverImage} alt={cs.title} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">{cs.clientName}</span>
                </div>
              </div>
            ) : (
              <div className="h-32 w-full bg-white/5 flex items-center justify-center border-b border-white/10">
                <div className="text-center">
                  <ImagePlus className="size-8 text-white/20 mx-auto mb-1" />
                  <span className="text-xs text-white/30">No cover image</span>
                </div>
              </div>
            )}

            <div className="p-5">
              {!cs.coverImage && (
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <FileText className="size-3.5" /> {cs.clientName}
                </span>
              )}
              <h3 className="text-xl font-medium text-ivory mb-2">{cs.title}</h3>
              <p className="text-white/60 text-sm mb-4 line-clamp-2">{cs.description}</p>

              <div className="flex flex-wrap gap-2">
                {cs.metrics?.map((metric: string, i: number) => (
                  <span key={i} className="px-2.5 py-1 bg-emerald-deep/20 text-emerald-300 text-xs rounded-md border border-emerald-deep/30">
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(cs)} className="p-1.5 bg-black/60 border border-white/10 rounded-lg text-white hover:text-emerald-400 backdrop-blur-sm"><Edit className="size-3.5" /></button>
              <button onClick={() => deleteMutation.mutate(cs._id)} className="p-1.5 bg-black/60 border border-white/10 rounded-lg text-white hover:text-red-400 backdrop-blur-sm"><Trash className="size-3.5" /></button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <CaseStudyModal
          item={editingItem}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => queryClient.invalidateQueries({ queryKey: ["caseStudies"] })}
        />
      )}
    </div>
  );
}

function CaseStudyModal({ item, onClose, onSuccess }: { item: any, onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = useState(item || { title: "", clientName: "", description: "", metrics: [], content: "", coverImage: "", visibility: true });
  const [metricInput, setMetricInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadSuccess(false);
    try {
      const data = new FormData();
      data.append("image", file);
      const res = await api.post("/case-studies/upload-cover", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData((prev: any) => ({ ...prev, coverImage: res.data.url }));
      setUploadSuccess(true);
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (item?._id) {
        await api.put(`/case-studies/${item._id}`, formData);
      } else {
        await api.post("/case-studies", formData);
      }
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addMetric = () => {
    if (metricInput.trim()) {
      setFormData({ ...formData, metrics: [...formData.metrics, metricInput.trim()] });
      setMetricInput("");
    }
  };

  const removeMetric = (index: number) => {
    setFormData({ ...formData, metrics: formData.metrics.filter((_: any, i: number) => i !== index) });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col border border-white/10 my-8">
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-xl font-semibold text-ivory">{item ? "Edit Case Study" : "Add Case Study"}</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white"><X className="size-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4 overflow-y-auto max-h-[80vh]">

          {/* Cover Image Upload */}
          <div className="space-y-2">
            <label className="text-xs text-white/50 uppercase tracking-wider block">Cover Photo</label>
            <div
              className="relative w-full h-48 rounded-xl border-2 border-dashed border-white/15 overflow-hidden cursor-pointer hover:border-emerald-400/50 transition-colors group"
              onClick={() => fileInputRef.current?.click()}
            >
              {formData.coverImage ? (
                <>
                  <img src={formData.coverImage} alt="Cover" className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium flex items-center gap-2"><ImagePlus className="size-4" /> Change Photo</span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/30">
                  {uploading ? (
                    <Loader2 className="size-8 animate-spin text-emerald-400" />
                  ) : (
                    <>
                      <ImagePlus className="size-10" />
                      <span className="text-sm">Click to upload cover photo</span>
                      <span className="text-xs">JPG, PNG or WEBP</span>
                    </>
                  )}
                </div>
              )}
              {uploadSuccess && !uploading && (
                <div className="absolute top-3 right-3 bg-emerald-500 rounded-full p-0.5">
                  <CheckCircle2 className="size-4 text-white" />
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            {formData.coverImage && (
              <button
                type="button"
                onClick={() => { setFormData((prev: any) => ({ ...prev, coverImage: "" })); setUploadSuccess(false); }}
                className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <X className="size-3" /> Remove photo
              </button>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-white/50 uppercase tracking-wider">Project Title *</label>
            <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-white/50 uppercase tracking-wider">Client / Brand Name *</label>
            <input type="text" required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-white/50 uppercase tracking-wider">Short Description *</label>
            <textarea required rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
          </div>

          <div className="space-y-1.5 border border-white/10 p-4 rounded-lg bg-white/5">
            <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Key Metrics (e.g. "+300% ROI")</label>
            <div className="flex gap-2 mb-3">
              <input type="text" value={metricInput} onChange={e => setMetricInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addMetric())} className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Type metric and press Enter or click Add" />
              <button type="button" onClick={addMetric} className="px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.metrics.map((m: string, i: number) => (
                <span key={i} className="flex items-center gap-1 bg-emerald-deep/20 text-emerald-300 px-2 py-1 rounded text-xs border border-emerald-deep/30">
                  {m} <button type="button" onClick={() => removeMetric(i)}><X className="size-3 hover:text-white" /></button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs text-white/50 uppercase tracking-wider">Full Content *</label>
            <textarea required rows={5} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono" />
          </div>

          <div className="flex items-center gap-3 p-3 border border-white/10 rounded-lg bg-white/5">
            <input type="checkbox" id="cs-visibility" checked={formData.visibility} onChange={e => setFormData({...formData, visibility: e.target.checked})} className="accent-emerald-500 size-4" />
            <label htmlFor="cs-visibility" className="text-sm text-white/70 cursor-pointer">Visible on website</label>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-white/70 hover:text-white">Cancel</button>
            <button type="submit" disabled={loading || uploading} className="px-4 py-2 bg-emerald-deep text-ivory rounded-lg text-sm font-medium hover:bg-emerald-deep/80 disabled:opacity-50">
              {loading ? "Saving..." : "Save Case Study"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
