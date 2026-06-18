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

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  const filteredContacts = contacts?.filter((c: any) => filter === "All" || c.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-light tracking-tight text-ivory">Inbox & Leads</h2>
          <p className="text-white/50 text-sm mt-1">Manage incoming inquiries from your website.</p>
        </div>
        <div className="flex gap-2">
          {["All", "New", "Read", "Replied", "Closed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                filter === status 
                  ? "bg-emerald-deep text-ivory border border-emerald-deep/50" 
                  : "bg-white/5 text-white/60 border border-white/10 hover:bg-white/10"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md">
        {filteredContacts?.length === 0 ? (
          <div className="p-12 text-center text-white/50 flex flex-col items-center">
            <Mail className="size-10 mb-3 opacity-20" />
            <p>No messages found.</p>
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {filteredContacts?.map((contact: any) => (
              <div key={contact._id} className={`p-5 transition-colors ${contact.status === 'New' ? 'bg-emerald-deep/5' : 'hover:bg-white/5'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    {contact.status === 'New' && <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />}
                    <h3 className="font-medium text-ivory text-lg">{contact.name}</h3>
                    {contact.company && <span className="px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-xs">{contact.company}</span>}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-white/40">{new Date(contact.createdAt).toLocaleDateString()}</span>
                    <select
                      value={contact.status}
                      onChange={(e) => updateStatusMutation.mutate({ id: contact._id, status: e.target.value })}
                      className="ml-4 bg-black/40 border border-white/10 text-white/70 text-xs rounded-md px-2 py-1 outline-none focus:border-emerald-500/50"
                    >
                      <option value="New">New</option>
                      <option value="Read">Read</option>
                      <option value="Replied">Replied</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4 text-xs text-emerald-400/80 mb-4 font-medium tracking-wide">
                  <span>{contact.email}</span>
                  {contact.phone && <span>{contact.phone}</span>}
                  {contact.service && <span className="text-white/40 border-l border-white/10 pl-4">{contact.service}</span>}
                </div>
                <p className="text-sm text-white/70 leading-relaxed bg-black/20 p-4 rounded-lg border border-white/5">
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
