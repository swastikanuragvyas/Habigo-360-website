import { useState } from "react";
import api from "@/lib/api";
import { Sparkles, Loader2 } from "lucide-react";

export default function AdminLogin({ onLogin }: { onLogin: (data: any) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("adminInfo", JSON.stringify(data));
      onLogin(data);
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] size-[500px] rounded-full bg-emerald-100 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] size-[400px] rounded-full bg-blue-50 blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl border border-white p-8 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative">
        <div className="flex justify-center mb-8">
          <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/30">
            <Sparkles className="size-7" />
          </div>
        </div>
        <h2 className="text-3xl font-medium text-center text-gray-900 mb-2 tracking-tight">Admin Portal</h2>
        <p className="text-center text-gray-500 text-sm mb-8">Sign in to manage HabiGo 360</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 text-center">{error}</div>}
          
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
              placeholder="admin@habigo360.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-gray-900 py-3 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 flex justify-center items-center mt-6"
          >
            {loading ? <Loader2 className="animate-spin size-5" /> : "Authenticate"}
          </button>
        </form>
      </div>
    </div>
  );
}
