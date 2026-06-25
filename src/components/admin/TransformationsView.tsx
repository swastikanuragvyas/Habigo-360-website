import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Plus, Edit, Trash, Eye, EyeOff, X, Upload } from "lucide-react";

export default function TransformationsView() {
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
