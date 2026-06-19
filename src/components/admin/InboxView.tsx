import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import api from "@/lib/api";
import { Loader2, Mail, CheckCircle2, MessageSquare, Archive } from "lucide-react";

export default function InboxView() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = useState("All");

  const { data: contacts, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await api.get("/contact");
      return data;
    },
  });

  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) =>
      await api.put(`/contact/${id}`, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contacts"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-500" /></div>;

  const filteredContacts = contacts?.filter((c: any) => filter === "All" || c.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900">Inbox & Leads</h2>
          <p className="text-gray-500 text-sm mt-1 font-medium">Manage incoming inquiries from your website.</p>
        </div>
        <div className="flex gap-2">
          {["All", "New", "Read", "Replied", "Closed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === status 
                  ? "bg-gray-900 text-white shadow-md shadow-gray-900/10" 
                  : "bg-white text-gray-600 border border-gray-200/60 hover:bg-gray-50"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        {filteredContacts?.length === 0 ? (
          <div className="p-12 text-center text-gray-400 flex flex-col items-center bg-gray-50/50">
            <Mail className="size-10 mb-3 opacity-40 text-gray-400" />
            <p className="font-medium text-sm">No messages found.</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200/60">
            {filteredContacts?.map((contact: any) => (
              <div key={contact._id} className={`p-6 transition-colors ${contact.status === 'New' ? 'bg-emerald-50/50' : 'hover:bg-gray-50/50'}`}>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    {contact.status === 'New' && <span className="size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />}
                    <h3 className="font-semibold text-gray-900 text-lg">{contact.name}</h3>
                    {contact.company && <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-xs font-semibold">{contact.company}</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 font-medium">{new Date(contact.createdAt).toLocaleDateString()}</span>
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatusMutation.mutate({ id: contact._id, status: e.target.value })}
                      className="ml-4 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg px-2.5 py-1.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-sm"
                    >
                      <option value="New">New</option>
                      <option value="Read">Read</option>
                      <option value="Replied">Replied</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-emerald-600 mb-4 font-semibold tracking-wide">
                  <span>{contact.email}</span>
                  {contact.phone && <span>{contact.phone}</span>}
                  {contact.service && <span className="text-gray-500 border-l border-gray-200 pl-4">{contact.service}</span>}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                  {contact.brief}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
