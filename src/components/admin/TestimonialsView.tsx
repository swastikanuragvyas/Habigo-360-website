import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import api from "@/lib/api";
import { Loader2, Star, Plus, X, Trash, Edit } from "lucide-react";

export default function TestimonialsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await api.get("/testimonials");
      return data;
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => await api.delete(`/testimonials/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["testimonials"] }),
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
          <h2 className="text-2xl font-light tracking-tight text-ivory">Client Testimonials</h2>
          <p className="text-white/50 text-sm mt-1">Manage reviews displayed on your website.</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 rounded-lg bg-emerald-deep px-4 py-2 text-sm font-medium text-ivory transition-colors hover:bg-emerald-deep/80"
        >
          <Plus className="size-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((t: any) => (
          <div key={t._id} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md relative group">
            <div className="flex gap-1 mb-4 text-emerald-400">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="text-white/80 text-sm italic mb-6 line-clamp-4">"{t.review}"</p>
            <div>
              <p className="font-medium text-ivory">{t.clientName}</p>
              <p className="text-xs text-white/50">{t.role ? `${t.role}, ` : ''}{t.company}</p>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(t)} className="p-1.5 bg-black/40 border border-white/10 rounded text-white hover:text-emerald-400"><Edit className="size-3.5" /></button>
              <button onClick={() => deleteMutation.mutate(t._id)} className="p-1.5 bg-black/40 border border-white/10 rounded text-white hover:text-red-400"><Trash className="size-3.5" /></button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <TestimonialModal 
          item={editingItem} 
          onClose={() => setIsModalOpen(false)} 
          onSuccess={() => queryClient.invalidateQueries({ queryKey: ["testimonials"] })}
        />
      )}
    </div>
  );
}

function TestimonialModal({ item, onClose, onSuccess }: { item: any, onClose: () => void, onSuccess: () => void }) {
  const [formData, setFormData] = useState(item || { clientName: "", company: "", role: "", review: "", rating: 5, visibility: true });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (item?._id) {
        await api.put(`/testimonials/${item._id}`, formData);
      } else {
        await api.post("/testimonials", formData);
      }
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0a0a0a] rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col border border-white/10">
        <div className="flex justify-between items-center p-5 border-b border-white/10">
          <h2 className="text-xl font-semibold text-ivory">{item ? "Edit Testimonial" : "Add Testimonial"}</h2>
          <button onClick={onClose} className="text-white/50 hover:text-white"><X className="size-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-white/50 uppercase tracking-wider">Client Name *</label>
              <input type="text" required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-white/50 uppercase tracking-wider">Company *</label>
              <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs text-white/50 uppercase tracking-wider">Role</label>
              <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs text-white/50 uppercase tracking-wider">Rating (1-5) *</label>
              <input type="number" min="1" max="5" required value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs text-white/50 uppercase tracking-wider">Review *</label>
            <textarea required rows={4} value={formData.review} onChange={e => setFormData({...formData, review: e.target.value})} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white" />
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
            <button type="button" onClick={onClose} className="px-4 py-2 text-sm text-white/70 hover:text-white">Cancel</button>
            <button type="submit" disabled={loading} className="px-4 py-2 bg-emerald-deep text-ivory rounded-lg text-sm font-medium hover:bg-emerald-deep/80">{loading ? "Saving..." : "Save Testimonial"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
