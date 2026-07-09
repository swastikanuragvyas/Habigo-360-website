import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Plus, Edit, Trash, X } from "lucide-react";

export default function CareersView() {
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
          <div><label className="block text-sm font-medium mb-1">Summary</label><textarea className="w-full rounded-md border p-2 h-24 bg-transparent" value={formData.summary} onChange={e => setFormData({...formData, summary: e.target.value})} /></div>
          
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
