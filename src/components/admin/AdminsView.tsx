import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Plus, Trash, X } from "lucide-react";

export default function AdminsView() {
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

  if (isLoading) return <div className="flex justify-center p-10"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">Access Management</h2>
          <p className="text-sm text-gray-500 font-medium mt-1">Manage who has access to the admin portal.</p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-md"
        >
          <Plus className="size-4" />
          Add User
        </button>
      </div>

      <div className="bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold">Name</th>
              <th className="px-6 py-4 font-semibold">Email</th>
              <th className="px-6 py-4 font-semibold">Role</th>
              <th className="px-6 py-4 font-semibold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/80">
            {admins?.map((admin: any) => (
              <tr key={admin._id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">{admin.name}</div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-600">{admin.email}</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100/50 shadow-sm">
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
                    className="text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors border border-red-100 shadow-sm inline-flex items-center justify-center"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm">
          <div className="bg-white border border-gray-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <h3 className="text-lg font-bold tracking-tight text-gray-900">Invite New User</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors"><X className="size-5" /></button>
            </div>
            
            <div className="p-6">
              {error && <div className="bg-red-50 border border-red-200 text-red-600 font-medium p-4 rounded-xl mb-5 text-sm shadow-sm">{error}</div>}
              
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Full Name</label>
                  <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="e.g. Founder admin 1" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Email Address</label>
                  <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="founder1@habigo.com" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Temporary Password</label>
                  <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" placeholder="••••••••" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider ml-1">Role</label>
                  <select value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm cursor-pointer">
                    <option value="Founder">Founder</option>
                    <option value="Admin">Admin</option>
                    <option value="Editor">Editor</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm">Cancel</button>
              <button onClick={() => createMutation.mutate(formData)} disabled={createMutation.isPending} className="px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md">
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
