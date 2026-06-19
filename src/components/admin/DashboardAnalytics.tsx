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
      <div className="rounded-2xl border border-gray-200/60 bg-white/60 p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
        <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none" />
        <div className="flex items-center gap-4 relative z-10">
          <div className="size-16 rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center shadow-lg shadow-gray-900/20">
            <Sparkles className="size-8 text-white" />
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900">Welcome back, {(adminInfo.name || "Admin").split(" ")[0]}</h2>
            <p className="text-gray-500 text-[15px] mt-1 font-medium">Here is what's happening with HabiGo 360 today.</p>
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
          <div key={i} className="rounded-xl border border-gray-200/60 bg-white/60 p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
            <div className="flex justify-between items-start mb-4">
              <div className="p-2.5 bg-gray-100 rounded-xl border border-gray-200/50">
                <kpi.icon className="size-5 text-gray-700" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${kpi.trend.startsWith('+') ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-gray-100 text-gray-500 border border-gray-200'}`}>
                {kpi.trend.startsWith('+') && <ArrowUpRight className="size-3" />}
                {kpi.trend}
              </div>
            </div>
            <div>
              <p className="text-4xl font-semibold text-gray-900 tracking-tight">{kpi.value}</p>
              <p className="text-sm font-medium text-gray-500 mt-1">{kpi.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-gray-200/60 bg-white/60 p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Website Traffic</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockVisitorData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', borderRadius: '12px', color: '#111827', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: '#10b981', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="visitors" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorVisitors)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="rounded-xl border border-gray-200/60 bg-white/60 p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Lead Conversions</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockVisitorData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9ca3af" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e5e7eb', borderRadius: '12px', color: '#111827', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  itemStyle={{ color: '#3b82f6', fontWeight: 600 }}
                />
                <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
