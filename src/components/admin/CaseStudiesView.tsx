import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import api from "@/lib/api";
import { Loader2, Plus, X, Trash, Edit, FileText } from "lucide-react";

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
          <div key={cs._id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md relative group flex flex-col sm:flex-row gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="size-4 text-emerald-400" />
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">{cs.clientName}</span>
              </div>
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
            
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(cs)} className="p-1.5 bg-black/40 border border-white/10 rounded text-white hover:text-emerald-400"><Edit className="size-3.5" /></button>
              <button onClick={() => deleteMutation.mutate(cs._id)} className="p-1.5 bg-black/40 border border-white/10 rounded text-white hover:text-red-400"><Trash className="size-3.5" /></button>
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
  const [formData, setFormData] = useState(item || { title: "", clientName: "", description: "", metrics: [], content: "", visibility: true });
  const [metricInput, setMetricInput] = useState("");
  const [loading, setLoading] = useState(false);

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
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
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
            <label className="text-xs text-white/50 uppercase tracking-wider block mb-2">Key Metrics Highlight (e.g. "+300% ROI")</label>
            <div className="flex gap-2 mb-3">
              <input type="text" value={metricInput} onChange={e => setMetricInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addMetric())} className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" placeholder="Type metric and click Add" />
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
            <label className="text-xs text-white/50 uppercase tracking-wider">Full Content (Markdown/HTML) *</label>
            <textarea required rows={6} value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white font-mono" />
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-white/70 hover:text-white">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-deep text-ivory rounded-lg text-sm font-medium hover:bg-emerald-deep/80">{loading ? "Saving..." : "Save Case Study"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
