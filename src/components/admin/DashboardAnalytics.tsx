import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Sparkles, Users, FileText, MousePointerClick, ArrowUpRight } from "lucide-react";

const mockVisitorData = [
  { name: 'Jan', visitors: 4000, leads: 240 },
  { name: 'Feb', visitors: 3000, leads: 139 },
  { name: 'Mar', visitors: 2000, leads: 980 },
  { name: 'Apr', visitors: 2780, leads: 390 },
  { name: 'May', visitors: 1890, leads: 480 },
  { name: 'Jun', visitors: 2390, leads: 380 },
  { name: 'Jul', visitors: 3490, leads: 430 },
];

export default function DashboardAnalytics({ adminInfo }: { adminInfo: any }) {
  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-deep/20 to-black/40 p-8 backdrop-blur-md relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-emerald-deep/10 to-transparent pointer-events-none" />
        <div className="flex items-center gap-4 relative z-10">
          <div className="size-16 rounded-2xl bg-emerald-deep/20 border border-emerald-deep/30 flex items-center justify-center shadow-[0_0_30px_rgba(4,92,69,0.3)]">
            <Sparkles className="size-8 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-3xl font-light tracking-tight text-ivory">Welcome back, {(adminInfo.name || "Admin").split(" ")[0]}</h2>
            <p className="text-white/50 mt-1">Here is what's happening with HabiGo 360 today.</p>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Visitors (30d)", value: "24,592", trend: "+12.5%", icon: Users },
          { label: "New Leads", value: "148", trend: "+4.2%", icon: MousePointerClick },
          { label: "Active Case Studies", value: "12", trend: "0%", icon: FileText },
        ].map((kpi, i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-emerald-deep/10 rounded-lg border border-emerald-deep/20">
                <kpi.icon className="size-5 text-emerald-400" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${kpi.trend.startsWith('+') ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-white/40'}`}>
                {kpi.trend.startsWith('+') && <ArrowUpRight className="size-3" />}
                {kpi.trend}
              </div>
            </div>
            <div>
              <p className="text-3xl font-light text-ivory tracking-tight">{kpi.value}</p>
              <p className="text-sm text-white/50 mt-1">{kpi.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-ivory mb-6">Website Traffic</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockVisitorData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#34d399" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#34d399" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#ffffff20', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#34d399' }}
                />
                <Area type="monotone" dataKey="visitors" stroke="#34d399" strokeWidth={2} fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
          <h3 className="text-lg font-medium text-ivory mb-6">Lead Conversions</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockVisitorData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#045c45" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#045c45" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#ffffff40" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', borderColor: '#ffffff20', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#045c45' }}
                />
                <Area type="monotone" dataKey="leads" stroke="#045c45" strokeWidth={2} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
