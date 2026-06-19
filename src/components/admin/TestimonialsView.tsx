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

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  const handleEdit = (item: any) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Client Testimonials</h2>
          <p className="text-gray-500 text-sm mt-1 font-medium">Manage reviews displayed on your website.</p>
        </div>
        <button
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 shadow-md"
        >
          <Plus className="size-4" /> Add Testimonial
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials?.map((t: any) => (
          <div key={t._id} className="rounded-2xl border border-gray-200/60 bg-white/60 p-6 backdrop-blur-xl relative group shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow">
            <div className="flex gap-1 mb-4 text-emerald-500">
              {[...Array(t.rating)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="text-gray-700 text-sm italic mb-6 line-clamp-4 leading-relaxed">"{t.review}"</p>
            <div>
              <p className="font-semibold text-gray-900">{t.clientName}</p>
              <p className="text-xs text-gray-500 font-medium">{t.role ? `${t.role}, ` : ''}{t.company}</p>
            </div>

            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(t)} className="p-2 bg-white border border-gray-200 shadow-sm rounded-lg text-gray-400 hover:text-blue-600 transition-colors"><Edit className="size-3.5" /></button>
              <button onClick={() => deleteMutation.mutate(t._id)} className="p-2 bg-white border border-gray-200 shadow-sm rounded-lg text-gray-400 hover:text-red-600 transition-colors"><Trash className="size-3.5" /></button>
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col border border-gray-200">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-900">{item ? "Edit Testimonial" : "Add Testimonial"}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600"><X className="size-5" /></button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">Client Name *</label>
              <input type="text" required value={formData.clientName} onChange={e => setFormData({...formData, clientName: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">Company *</label>
              <input type="text" required value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">Role</label>
              <input type="text" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">Rating (1-5) *</label>
              <input type="number" min="1" max="5" required value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" />
            </div>
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1">Review *</label>
            <textarea required rows={4} value={formData.review} onChange={e => setFormData({...formData, review: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm leading-relaxed" />
          </div>
          <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors">Cancel</button>
            <button type="submit" disabled={loading} className="px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md">{loading ? "Saving..." : "Save Testimonial"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
