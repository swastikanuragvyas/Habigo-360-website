import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Upload } from "lucide-react";

export default function SettingsView({ adminInfo, onUpdate }: { adminInfo: any, onUpdate: (data: any) => void }) {
  const [formData, setFormData] = useState({
    name: adminInfo.name || "",
    email: adminInfo.email || "",
    password: ""
  });
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const updateMutation = useMutation({
    mutationFn: async (data: any) => {
      const res = await api.put("/auth/profile", data);
      return res.data;
    },
    onSuccess: (data) => {
      onUpdate(data);
      setMessage("Profile updated successfully!");
      setFormData(prev => ({ ...prev, password: "" }));
      setTimeout(() => setMessage(""), 3000);
    },
    onError: (err: any) => {
      setError(err.response?.data?.message || "Failed to update profile");
      setTimeout(() => setError(""), 3000);
    }
  });

  const uploadProfilePicMutation = useMutation({
    mutationFn: async (file: File) => {
      const formData = new FormData();
      formData.append("image", file);
      const res = await api.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      return res.data.url;
    },
    onSuccess: (url) => {
      updateMutation.mutate({ profilePicture: url });
      setIsUploading(false);
    },
    onError: () => {
      setError("Failed to upload image.");
      setIsUploading(false);
      setTimeout(() => setError(""), 3000);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSubmit: any = { ...formData };
    if (!dataToSubmit.password) {
      delete dataToSubmit.password;
    }
    updateMutation.mutate(dataToSubmit);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className={`text-xl font-semibold tracking-tight ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>Account Settings</h2>
        <p className={`text-sm font-medium mt-1 ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Manage your profile and preferences.</p>
      </div>

      {message && <div className={`p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === 'dark' ? 'bg-emerald-900/30 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-100'}`}>{message}</div>}
      {error && <div className={`p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === 'dark' ? 'bg-red-900/30 text-red-400 border-red-500/20' : 'bg-red-50 text-red-600 border-red-100'}`}>{error}</div>}

      <div className={`border rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200/60'}`}>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className={`flex items-center gap-6 pb-6 border-b ${adminInfo.theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="relative group">
              {adminInfo.profilePicture ? (
                <img src={adminInfo.profilePicture} alt="Profile" className={`size-24 rounded-full object-cover border-2 shadow-md ${adminInfo.theme === 'dark' ? 'border-white/20' : 'border-white'}`} />
              ) : (
                <div className={`size-24 rounded-full border-2 flex items-center justify-center text-2xl font-semibold shadow-md ${adminInfo.theme === 'dark' ? 'bg-gradient-to-tr from-emerald-900 to-emerald-700 border-white/20 text-white' : 'bg-gradient-to-tr from-blue-100 to-emerald-100 border-white text-gray-800'}`}>
                  {adminInfo.name?.charAt(0) || "A"}
                </div>
              )}
              <label className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm">
                {isUploading ? <Loader2 className="size-6 text-white animate-spin" /> : <Upload className="size-6 text-white" />}
                <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setIsUploading(true);
                    uploadProfilePicMutation.mutate(e.target.files[0]);
                  }
                }} />
              </label>
            </div>
            <div>
              <h3 className={`text-lg font-semibold ${adminInfo.theme === 'dark' ? 'text-ivory' : 'text-gray-900'}`}>Profile Picture</h3>
              <p className={`text-sm font-medium mt-1 ${adminInfo.theme === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Click the image to upload a new one.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>Full Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} required />
            </div>
            <div className="space-y-1.5">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>Email Address</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} required />
            </div>
          </div>

          <div className={`pb-6 border-b ${adminInfo.theme === 'dark' ? 'border-white/10' : 'border-gray-100'}`}>
            <div className="space-y-1.5 max-w-md">
              <label className={`text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === 'dark' ? 'text-white/60' : 'text-gray-700'}`}>New Password</label>
              <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} className={`w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === 'dark' ? 'bg-black/40 border-white/10 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'}`} placeholder="Leave blank to keep current" />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button type="submit" disabled={updateMutation.isPending} className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-md ${adminInfo.theme === 'dark' ? 'bg-emerald-deep text-ivory hover:bg-emerald-deep/80' : 'bg-gray-900 text-white hover:bg-gray-800'}`}>
              {updateMutation.isPending && <Loader2 className="animate-spin size-4" />}
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
