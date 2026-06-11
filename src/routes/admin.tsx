import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileText,
  LayoutDashboard,
  Megaphone,
  MessageSquareText,
  MoreHorizontal,
  PanelLeft,
  Plus,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | HabiGo 360" },
      {
        name: "description",
        content: "Manage HabiGo 360 leads, campaigns, content approvals, and growth reporting.",
      },
    ],
  }),
  component: AdminPanel,
});

const stats = [
  { label: "New leads", value: "42", change: "+18%", icon: Users },
  { label: "Active campaigns", value: "16", change: "+4", icon: Megaphone },
  { label: "Content in review", value: "28", change: "7 due today", icon: FileText },
  { label: "Avg. response time", value: "1.8h", change: "-24%", icon: Clock3 },
];

const leads = [
  { brand: "UrbanNest Hospitality", service: "Performance marketing", value: "₹4.8L", stage: "Proposal", owner: "Arpit" },
  { brand: "Veda Wellness Co.", service: "Brand identity", value: "₹2.6L", stage: "Discovery", owner: "Dipanshu" },
  { brand: "Northline Builders", service: "Website + content", value: "₹6.2L", stage: "Negotiation", owner: "Arpit" },
  { brand: "Fable Foods", service: "Social media", value: "₹1.9L", stage: "Qualified", owner: "Team" },
];

const campaigns = [
  { name: "Q3 Growth Sprint", channel: "Meta + Google", progress: 74, status: "On track" },
  { name: "Founders Story Series", channel: "Instagram", progress: 48, status: "Creative review" },
  { name: "Hospitality Launch Kit", channel: "Web + SEO", progress: 88, status: "Final QA" },
];

const tasks = [
  "Approve client onboarding deck",
  "Review weekly ad spend report",
  "Assign reels batch to editing team",
  "Schedule discovery call with Veda Wellness",
];

function AdminPanel() {
  return (
    <div className="min-h-screen bg-[#f7f4eb] text-foreground">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 shrink-0 border-r border-emerald-deep/10 bg-[#fffdf6] px-5 py-6 lg:flex lg:flex-col">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-md bg-emerald-deep text-ivory">
              <Sparkles className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">HabiGo 360</p>
              <p className="text-xs text-muted-foreground">Admin panel</p>
            </div>
          </div>

          <nav className="mt-10 space-y-1">
            {[
              { label: "Dashboard", icon: LayoutDashboard, active: true },
              { label: "Leads", icon: Users },
              { label: "Campaigns", icon: Megaphone },
              { label: "Content", icon: ClipboardList },
              { label: "Reports", icon: Activity },
              { label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.label}
                className={`flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm transition-colors ${
                  item.active
                    ? "bg-emerald-deep text-ivory"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground"
                }`}
              >
                <item.icon className="size-4" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-md border border-emerald-deep/10 bg-secondary/50 p-4">
            <p className="text-sm font-medium">Monthly target</p>
            <div className="mt-4 h-2 rounded-full bg-emerald-deep/10">
              <div className="h-2 w-[68%] rounded-full bg-gold" />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">68% of June pipeline closed</p>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-emerald-deep/10 bg-[#f7f4eb]/90 backdrop-blur">
            <div className="flex min-h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
              <button className="inline-flex size-10 items-center justify-center rounded-md border border-emerald-deep/10 bg-[#fffdf6] lg:hidden">
                <PanelLeft className="size-5" />
              </button>
              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.24em] text-emerald-deep/60">Workspace</p>
                <h1 className="truncate text-lg font-semibold sm:text-xl">Admin dashboard</h1>
              </div>
              <div className="hidden h-10 min-w-64 items-center gap-2 rounded-md border border-emerald-deep/10 bg-[#fffdf6] px-3 md:flex">
                <Search className="size-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Search leads, campaigns, reports</span>
              </div>
              <button className="inline-flex size-10 items-center justify-center rounded-md border border-emerald-deep/10 bg-[#fffdf6]">
                <Bell className="size-5" />
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-md bg-emerald-deep px-3 text-sm font-medium text-ivory">
                <Plus className="size-4" />
                <span className="hidden sm:inline">New item</span>
              </button>
            </div>
          </header>

          <div className="space-y-6 px-4 py-6 sm:px-6 lg:px-8">
            <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-emerald-deep/10 bg-[#fffdf6] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 text-3xl font-semibold tracking-normal">{stat.value}</p>
                    </div>
                    <div className="flex size-10 items-center justify-center rounded-md bg-secondary text-emerald-deep">
                      <stat.icon className="size-5" />
                    </div>
                  </div>
                  <p className="mt-4 flex items-center gap-1 text-sm text-emerald-deep">
                    <TrendingUp className="size-4" />
                    {stat.change}
                  </p>
                </div>
              ))}
            </section>

            <section className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
              <div className="min-w-0 rounded-md border border-emerald-deep/10 bg-[#fffdf6]">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-deep/10 p-5">
                  <div>
                    <h2 className="text-base font-semibold">Lead pipeline</h2>
                    <p className="text-sm text-muted-foreground">Track qualified opportunities and ownership.</p>
                  </div>
                  <button className="inline-flex h-9 items-center gap-2 rounded-md border border-emerald-deep/10 px-3 text-sm">
                    This month
                    <ChevronDown className="size-4" />
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="border-b border-emerald-deep/10 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      <tr>
                        <th className="px-5 py-4 font-medium">Brand</th>
                        <th className="px-5 py-4 font-medium">Service</th>
                        <th className="px-5 py-4 font-medium">Value</th>
                        <th className="px-5 py-4 font-medium">Stage</th>
                        <th className="px-5 py-4 font-medium">Owner</th>
                        <th className="px-5 py-4 font-medium" />
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-emerald-deep/10">
                      {leads.map((lead) => (
                        <tr key={lead.brand} className="hover:bg-secondary/30">
                          <td className="px-5 py-4 font-medium">{lead.brand}</td>
                          <td className="px-5 py-4 text-muted-foreground">{lead.service}</td>
                          <td className="px-5 py-4">{lead.value}</td>
                          <td className="px-5 py-4">
                            <span className="inline-flex rounded-md bg-emerald-deep/10 px-2.5 py-1 text-xs font-medium text-emerald-deep">
                              {lead.stage}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-muted-foreground">{lead.owner}</td>
                          <td className="px-5 py-4 text-right">
                            <button className="inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary">
                              <MoreHorizontal className="size-4" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-md border border-emerald-deep/10 bg-[#fffdf6] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="text-base font-semibold">Today</h2>
                      <p className="text-sm text-muted-foreground">Priority work queue</p>
                    </div>
                    <CalendarDays className="size-5 text-emerald-deep" />
                  </div>
                  <div className="mt-5 space-y-3">
                    {tasks.map((task) => (
                      <label key={task} className="flex items-start gap-3 rounded-md border border-emerald-deep/10 p-3">
                        <input className="mt-1 size-4 accent-[var(--emerald-deep)]" type="checkbox" />
                        <span className="text-sm leading-6">{task}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="rounded-md border border-emerald-deep/10 bg-emerald-deep p-5 text-ivory">
                  <p className="text-sm text-ivory/70">Revenue forecast</p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <p className="text-3xl font-semibold">₹18.4L</p>
                    <span className="inline-flex items-center gap-1 rounded-md bg-ivory/10 px-2.5 py-1 text-xs">
                      <ArrowUpRight className="size-3" />
                      12%
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ivory/70">
                    Based on weighted pipeline value, active retainers, and pending approvals.
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-md border border-emerald-deep/10 bg-[#fffdf6]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-deep/10 p-5">
                <div>
                  <h2 className="text-base font-semibold">Campaign health</h2>
                  <p className="text-sm text-muted-foreground">Live delivery status across active client work.</p>
                </div>
                <button className="inline-flex h-9 items-center gap-2 rounded-md bg-secondary px-3 text-sm text-emerald-deep">
                  <MessageSquareText className="size-4" />
                  Team notes
                </button>
              </div>
              <div className="grid gap-4 p-5 lg:grid-cols-3">
                {campaigns.map((campaign) => (
                  <div key={campaign.name} className="rounded-md border border-emerald-deep/10 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-medium">{campaign.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{campaign.channel}</p>
                      </div>
                      <CheckCircle2 className="size-5 text-emerald-deep" />
                    </div>
                    <div className="mt-5 h-2 rounded-full bg-secondary">
                      <div className="h-2 rounded-full bg-emerald-deep" style={{ width: `${campaign.progress}%` }} />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{campaign.status}</span>
                      <span className="font-medium">{campaign.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
