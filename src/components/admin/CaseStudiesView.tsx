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

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Case Studies</h2>
          <p className="text-gray-500 text-sm mt-1 font-medium">Publish success stories and marketing results.</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 shadow-md"
        >
          <Plus className="size-4" /> Add Case Study
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {caseStudies?.map((cs: any) => (
          <div key={cs._id} className="rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden backdrop-blur-xl relative group shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
            {/* Cover image */}
            {cs.coverImage ? (
              <div className="relative h-44 w-full overflow-hidden border-b border-gray-100">
                <img src={cs.coverImage} alt={cs.title} className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs text-white font-semibold uppercase tracking-wider drop-shadow-md">{cs.clientName}</span>
                </div>
              </div>
            ) : (
              <div className="h-32 w-full bg-gray-50 flex items-center justify-center border-b border-gray-200">
                <div className="text-center">
                  <ImagePlus className="size-8 text-gray-300 mx-auto mb-1" />
                  <span className="text-xs text-gray-400 font-medium">No cover image</span>
                </div>
              </div>
            )}

            <div className="p-6">
              {!cs.coverImage && (
                <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2">
                  <FileText className="size-3.5" /> {cs.clientName}
                </span>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{cs.title}</h3>
              <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed font-medium">{cs.description}</p>

              <div className="flex flex-wrap gap-2">
                {cs.metrics?.map((metric: string, i: number) => (
                  <span key={i} className="px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100/50">
                    {metric}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(cs)} className="p-2 bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-lg text-gray-600 hover:text-blue-600 transition-colors"><Edit className="size-3.5" /></button>
              <button onClick={() => deleteMutation.mutate(cs._id)} className="p-2 bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-lg text-gray-600 hover:text-red-600 transition-colors"><Trash className="size-3.5" /></button>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col border border-gray-200 my-8">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">{item ? "Edit Case Study" : "Add Case Study"}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="size-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto max-h-[80vh]">

          {/* Cover Image Upload */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1 block">Cover Photo</label>
            <div
              className="relative w-full h-48 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-emerald-500 hover:bg-gray-50 transition-all group"
              onClick={() => fileInputRef.current?.click()}
            >
              {formData.coverImage ? (
                <>
                  <img src={formData.coverImage} alt="Cover" className="absolute inset-0 size-full object-cover" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-bold flex items-center gap-2"><ImagePlus className="size-4" /> Change Photo</span>
                  </div>
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400 group-hover:text-emerald-600 transition-colors">
                  {uploading ? (
                    <Loader2 className="size-8 animate-spin text-emerald-500" />
                  ) : (
                    <>
                      <ImagePlus className="size-10" />
                      <span className="text-sm font-semibold">Click to upload cover photo</span>
                      <span className="text-xs">JPG, PNG or WEBP</span>
                    </>
                  )}
                </div>
              )}
              {uploadSuccess && !uploading && (
                <div className="absolute top-3 right-3 bg-emerald-500 rounded-full p-1 shadow-md">
                  <CheckCircle2 className="size-4 text-white" />
                </div>
              )}
            </div>
            <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            {formData.coverImage && (
              <button
                type="button"
                onClick={() => { setFormData((prev: any) => ({ ...prev, coverImage: "" })); setUploadSuccess(false); }}
                className="text-xs text-red-500 hover:text-red-600 font-semibold flex items-center gap-1 ml-1"
              >
                <X className="size-3.5" /> Remove photo
              </button>
            )}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Project Title *</label>
            <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Client / Brand Name *</label>
            <input type="text" required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium" />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Short Description</label>
            <textarea rows={2} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium leading-relaxed" />
          </div>

          <div className="space-y-2 border border-gray-200 p-5 rounded-xl bg-gray-50">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1">Key Metrics (e.g. "+300% ROI")</label>
            <div className="flex gap-2 mb-3">
              <input type="text" value={metricInput} onChange={e => setMetricInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addMetric())} className="flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium" placeholder="Type metric and press Enter or click Add" />
              <button type="button" onClick={addMetric} className="px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-sm">Add</button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.metrics.map((m: string, i: number) => (
                <span key={i} className="flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-200 shadow-sm">
                  {m} <button type="button" onClick={() => removeMetric(i)} className="hover:bg-emerald-200 rounded-full p-0.5 transition-colors"><X className="size-3.5" /></button>
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Full Content</label>
            <textarea rows={5} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-mono leading-relaxed" />
          </div>

          <div className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50">
            <input type="checkbox" id="cs-visibility" checked={formData.visibility} onChange={e => setFormData({...formData, visibility: e.target.checked})} className="accent-emerald-600 size-4.5 cursor-pointer rounded" />
            <label htmlFor="cs-visibility" className="text-sm font-semibold text-gray-700 cursor-pointer select-none">Visible on website</label>
          </div>

          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
            <button type="submit" disabled={loading || uploading} className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 transition-colors shadow-md">
              {loading ? "Saving..." : "Save Case Study"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
