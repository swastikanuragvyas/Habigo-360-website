import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as api } from "./router-Db_gZD6m.mjs";
import { a as useMutation, b as useQueryClient, u as useQuery } from "../_libs/tanstack__react-query.mjs";
import "../_libs/seroval.mjs";
import { S as Sparkles, j as LoaderCircle, q as LayoutDashboard, r as Inbox, k as Image, s as ImagePlay, F as FileText, t as Star, B as BriefcaseBusiness, u as Settings, U as Users, v as LogOut, w as Sun, x as Moon, y as Plus, E as Eye, z as EyeOff, J as SquarePen, K as Trash, N as Upload, X, a as Mail, O as ImagePlus, Q as MousePointerClick, A as ArrowUpRight, R as CircleCheck } from "../_libs/lucide-react.mjs";
import { R as ResponsiveContainer, A as AreaChart, X as XAxis, Y as YAxis, C as CartesianGrid, T as Tooltip, a as Area } from "../_libs/recharts.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./server-D-smpDVE.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "../_libs/mime-types.mjs";
import "../_libs/mime-db.mjs";
import "../_libs/asynckit.mjs";
import "../_libs/es-set-tostringtag.mjs";
import "../_libs/get-intrinsic.mjs";
import "../_libs/es-object-atoms.mjs";
import "../_libs/es-errors.mjs";
import "../_libs/math-intrinsics.mjs";
import "../_libs/gopd.mjs";
import "../_libs/es-define-property.mjs";
import "../_libs/has-symbols.mjs";
import "../_libs/get-proto.mjs";
import "../_libs/dunder-proto.mjs";
import "../_libs/call-bind-apply-helpers.mjs";
import "../_libs/function-bind.mjs";
import "../_libs/hasown.mjs";
import "../_libs/has-tostringtag.mjs";
import "../_libs/proxy-from-env.mjs";
import "../_libs/https-proxy-agent.mjs";
import "net";
import "tls";
import "assert";
import "../_libs/debug.mjs";
import "../_libs/ms.mjs";
import "tty";
import "../_libs/supports-color.mjs";
import "os";
import "../_libs/has-flag.mjs";
import "../_libs/agent-base.mjs";
import "events";
import "http2";
import "../_libs/follow-redirects.mjs";
import "zlib";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/zod.mjs";
import "../_libs/clsx.mjs";
import "../_libs/lodash.mjs";
import "../_libs/tiny-invariant.mjs";
import "../_libs/react-is.mjs";
import "../_libs/d3-shape.mjs";
import "../_libs/d3-path.mjs";
import "../_libs/react-smooth.mjs";
import "../_libs/prop-types.mjs";
import "../_libs/fast-equals.mjs";
import "../_libs/victory-vendor.mjs";
import "../_libs/d3-scale.mjs";
import "../_libs/internmap.mjs";
import "../_libs/d3-array.mjs";
import "../_libs/d3-time-format.mjs";
import "../_libs/d3-time.mjs";
import "../_libs/d3-interpolate.mjs";
import "../_libs/d3-color.mjs";
import "../_libs/d3-format.mjs";
import "../_libs/recharts-scale.mjs";
import "../_libs/decimal.js-light.mjs";
import "../_libs/eventemitter3.mjs";
function AdminLogin({ onLogin }) {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await api.post("/auth/login", { email, password });
      localStorage.setItem("adminInfo", JSON.stringify(data));
      onLogin(data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f5f5f7] text-gray-900 flex items-center justify-center p-4 relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-10%] left-[-10%] size-[500px] rounded-full bg-emerald-100 blur-[120px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[-10%] right-[-10%] size-[400px] rounded-full bg-blue-50 blur-[100px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-white/80 backdrop-blur-xl rounded-2xl border border-white p-8 z-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-14 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-400 text-white shadow-lg shadow-emerald-500/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-7" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-medium text-center text-gray-900 mb-2 tracking-tight", children: "Admin Portal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-gray-500 text-sm mb-8", children: "Sign in to manage HabiGo 360" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100 text-center", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "email",
              required: true,
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm",
              placeholder: "admin@habigo360.com"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1", children: "Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "password",
              required: true,
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm",
              placeholder: "••••••••"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "submit",
            disabled: loading,
            className: "w-full rounded-lg bg-gray-900 py-3 text-white font-medium transition-all hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/20 flex justify-center items-center mt-6",
            children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-5" }) : "Authenticate"
          }
        )
      ] })
    ] })
  ] });
}
function InboxView() {
  const queryClient = useQueryClient();
  const [filter, setFilter] = reactExports.useState("All");
  const { data: contacts, isLoading } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const { data } = await api.get("/contact");
      return data;
    }
  });
  const updateStatusMutation = useMutation({
    mutationFn: async ({ id, status }) => await api.put(`/contact/${id}`, { status }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["contacts"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  const filteredContacts = contacts?.filter((c) => filter === "All" || c.status === filter);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight text-gray-900", children: "Inbox & Leads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-1 font-medium", children: "Manage incoming inquiries from your website." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["All", "New", "Read", "Replied", "Closed"].map((status) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setFilter(status),
          className: `px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${filter === status ? "bg-gray-900 text-white shadow-md shadow-gray-900/10" : "bg-white text-gray-600 border border-gray-200/60 hover:bg-gray-50"}`,
          children: status
        },
        status
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)]", children: filteredContacts?.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-12 text-center text-gray-400 flex flex-col items-center bg-gray-50/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-10 mb-3 opacity-40 text-gray-400" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm", children: "No messages found." })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-gray-200/60", children: filteredContacts?.map((contact) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-6 transition-colors ${contact.status === "New" ? "bg-emerald-50/50" : "hover:bg-gray-50/50"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          contact.status === "New" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-gray-900 text-lg", children: contact.name }),
          contact.company && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-xs font-semibold", children: contact.company })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 font-medium", children: new Date(contact.createdAt).toLocaleDateString() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              value: contact.status,
              onChange: (e) => updateStatusMutation.mutate({ id: contact._id, status: e.target.value }),
              className: "ml-4 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg px-2.5 py-1.5 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 shadow-sm",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "New", children: "New" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Read", children: "Read" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Replied", children: "Replied" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Closed", children: "Closed" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 text-xs text-emerald-600 mb-4 font-semibold tracking-wide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: contact.email }),
        contact.phone && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: contact.phone }),
        contact.service && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-500 border-l border-gray-200 pl-4", children: contact.service })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100", children: contact.brief })
    ] }, contact._id)) }) })
  ] });
}
function TestimonialsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await api.get("/testimonials");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/testimonials/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["testimonials"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight text-gray-900", children: "Client Testimonials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-1 font-medium", children: "Manage reviews displayed on your website." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingItem(null);
            setIsModalOpen(true);
          },
          className: "flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            " Add Testimonial"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: testimonials?.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-200/60 bg-white/60 p-6 backdrop-blur-xl relative group shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-4 text-emerald-500", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-700 text-sm italic mb-6 line-clamp-4 leading-relaxed", children: [
        '"',
        t.review,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-gray-900", children: t.clientName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-gray-500 font-medium", children: [
          t.role ? `${t.role}, ` : "",
          t.company
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleEdit(t), className: "p-2 bg-white border border-gray-200 shadow-sm rounded-lg text-gray-400 hover:text-blue-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteMutation.mutate(t._id), className: "p-2 bg-white border border-gray-200 shadow-sm rounded-lg text-gray-400 hover:text-red-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-3.5" }) })
      ] })
    ] }, t._id)) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TestimonialModal,
      {
        item: editingItem,
        onClose: () => setIsModalOpen(false),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["testimonials"] })
      }
    )
  ] });
}
function TestimonialModal({ item, onClose, onSuccess }) {
  const [formData, setFormData] = reactExports.useState(item || { clientName: "", company: "", role: "", review: "", rating: 5, visibility: true });
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (item?._id) {
        await api.put(`/testimonials/${item._id}`, formData);
      } else {
        await api.post("/testimonials", formData);
      }
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col border border-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: item ? "Edit Testimonial" : "Add Testimonial" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1", children: "Client Name *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formData.clientName, onChange: (e) => setFormData({ ...formData, clientName: e.target.value }), className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1", children: "Company *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formData.company, onChange: (e) => setFormData({ ...formData, company: e.target.value }), className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.role, onChange: (e) => setFormData({ ...formData, role: e.target.value }), className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1", children: "Rating (1-5) *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: "1", max: "5", required: true, value: formData.rating, onChange: (e) => setFormData({ ...formData, rating: Number(e.target.value) }), className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-gray-700 uppercase tracking-wider ml-1", children: "Review *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 4, value: formData.review, onChange: (e) => setFormData({ ...formData, review: e.target.value }), className: "w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm leading-relaxed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-6 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md", children: loading ? "Saving..." : "Save Testimonial" })
      ] })
    ] })
  ] }) });
}
function CaseStudiesView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingItem, setEditingItem] = reactExports.useState(null);
  const { data: caseStudies, isLoading } = useQuery({
    queryKey: ["caseStudies"],
    queryFn: async () => {
      const { data } = await api.get("/case-studies");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/case-studies/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["caseStudies"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-semibold tracking-tight text-gray-900", children: "Case Studies" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-500 text-sm mt-1 font-medium", children: "Publish success stories and marketing results." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingItem(null);
            setIsModalOpen(true);
          },
          className: "flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800 shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            " Add Case Study"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: caseStudies?.map((cs) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden backdrop-blur-xl relative group shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow", children: [
      cs.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-44 w-full overflow-hidden border-b border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cs.coverImage, alt: cs.title, className: "absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white font-semibold uppercase tracking-wider drop-shadow-md", children: cs.clientName }) })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-32 w-full bg-gray-50 flex items-center justify-center border-b border-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "size-8 text-gray-300 mx-auto mb-1" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-400 font-medium", children: "No cover image" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        !cs.coverImage && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-emerald-600 font-bold uppercase tracking-wider flex items-center gap-1.5 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-3.5" }),
          " ",
          cs.clientName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: cs.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed font-medium", children: cs.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: cs.metrics?.map((metric, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-lg border border-emerald-100/50", children: metric }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleEdit(cs), className: "p-2 bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-lg text-gray-600 hover:text-blue-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteMutation.mutate(cs._id), className: "p-2 bg-white/90 backdrop-blur border border-gray-200 shadow-sm rounded-lg text-gray-600 hover:text-red-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-3.5" }) })
      ] })
    ] }, cs._id)) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CaseStudyModal,
      {
        item: editingItem,
        onClose: () => setIsModalOpen(false),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["caseStudies"] })
      }
    )
  ] });
}
function CaseStudyModal({ item, onClose, onSuccess }) {
  const [formData, setFormData] = reactExports.useState(item || { title: "", clientName: "", description: "", metrics: [], content: "", coverImage: "", visibility: true });
  const [metricInput, setMetricInput] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const [uploading, setUploading] = reactExports.useState(false);
  const [uploadSuccess, setUploadSuccess] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setUploadSuccess(false);
    try {
      const data = new FormData();
      data.append("image", file);
      const res = await api.post("/case-studies/upload-cover", data, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setFormData((prev) => ({ ...prev, coverImage: res.data.url }));
      setUploadSuccess(true);
    } catch (err) {
      console.error("Image upload failed", err);
    } finally {
      setUploading(false);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (item?._id) {
        await api.put(`/case-studies/${item._id}`, formData);
      } else {
        await api.post("/case-studies", formData);
      }
      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  const addMetric = () => {
    if (metricInput.trim()) {
      setFormData({ ...formData, metrics: [...formData.metrics, metricInput.trim()] });
      setMetricInput("");
    }
  };
  const removeMetric = (index) => {
    setFormData({ ...formData, metrics: formData.metrics.filter((_, i) => i !== index) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4 overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col border border-gray-200 my-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-gray-900", children: item ? "Edit Case Study" : "Add Case Study" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "p-6 space-y-5 overflow-y-auto max-h-[80vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1 block", children: "Cover Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full h-48 rounded-xl border-2 border-dashed border-gray-300 overflow-hidden cursor-pointer hover:border-emerald-500 hover:bg-gray-50 transition-all group",
            onClick: () => fileInputRef.current?.click(),
            children: [
              formData.coverImage ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formData.coverImage, alt: "Cover", className: "absolute inset-0 size-full object-cover" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-white text-sm font-bold flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "size-4" }),
                  " Change Photo"
                ] }) })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-400 group-hover:text-emerald-600 transition-colors", children: uploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-8 animate-spin text-emerald-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ImagePlus, { className: "size-10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Click to upload cover photo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: "JPG, PNG or WEBP" })
              ] }) }),
              uploadSuccess && !uploading && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 bg-emerald-500 rounded-full p-1 shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-white" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: handleImageUpload }),
        formData.coverImage && /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => {
              setFormData((prev) => ({ ...prev, coverImage: "" }));
              setUploadSuccess(false);
            },
            className: "text-xs text-red-500 hover:text-red-600 font-semibold flex items-center gap-1 ml-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3.5" }),
              " Remove photo"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Project Title *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Client / Brand Name *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", required: true, value: formData.clientName, onChange: (e) => setFormData({ ...formData, clientName: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Short Description *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 2, value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium leading-relaxed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 border border-gray-200 p-5 rounded-xl bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1", children: 'Key Metrics (e.g. "+300% ROI")' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: metricInput, onChange: (e) => setMetricInput(e.target.value), onKeyDown: (e) => e.key === "Enter" && (e.preventDefault(), addMetric()), className: "flex-1 bg-white border border-gray-300 rounded-xl px-4 py-2 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-medium", placeholder: "Type metric and press Enter or click Add" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: addMetric, className: "px-5 py-2 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors shadow-sm", children: "Add" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: formData.metrics.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-200 shadow-sm", children: [
          m,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeMetric(i), className: "hover:bg-emerald-200 rounded-full p-0.5 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3.5" }) })
        ] }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Full Content *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, rows: 5, value: formData.content, onChange: (e) => setFormData({ ...formData, content: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all font-mono leading-relaxed" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 p-4 border border-gray-200 rounded-xl bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "cs-visibility", checked: formData.visibility, onChange: (e) => setFormData({ ...formData, visibility: e.target.checked }), className: "accent-emerald-600 size-4.5 cursor-pointer rounded" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "cs-visibility", className: "text-sm font-semibold text-gray-700 cursor-pointer select-none", children: "Visible on website" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 pt-6 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "px-5 py-2.5 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading || uploading, className: "px-5 py-2.5 bg-gray-900 text-white rounded-xl text-sm font-semibold hover:bg-gray-800 disabled:opacity-50 transition-colors shadow-md", children: loading ? "Saving..." : "Save Case Study" })
      ] })
    ] })
  ] }) });
}
const mockVisitorData = [
  { name: "Jan", visitors: 4e3, leads: 240 },
  { name: "Feb", visitors: 3e3, leads: 139 },
  { name: "Mar", visitors: 2e3, leads: 980 },
  { name: "Apr", visitors: 2780, leads: 390 },
  { name: "May", visitors: 1890, leads: 480 },
  { name: "Jun", visitors: 2390, leads: 380 },
  { name: "Jul", visitors: 3490, leads: 430 }
];
function DashboardAnalytics({ adminInfo }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === "dark" ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/60"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute right-0 top-0 w-64 h-full pointer-events-none bg-gradient-to-l ${adminInfo.theme === "dark" ? "from-emerald-900/20 to-transparent" : "from-emerald-50 to-transparent"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 relative z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-16 rounded-2xl bg-gradient-to-tr from-gray-900 to-gray-700 flex items-center justify-center shadow-lg shadow-gray-900/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-8 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: `text-4xl font-semibold tracking-tight ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: [
            "Welcome back, ",
            (adminInfo.name || "Admin").split(" ")[0]
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[15px] mt-1 font-medium ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: "Here is what's happening with HabiGo 360 today." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      { label: "Total Visitors (30d)", value: "24,592", trend: "+12.5%", icon: Users },
      { label: "New Leads", value: "148", trend: "+4.2%", icon: MousePointerClick },
      { label: "Active Case Studies", value: "12", trend: "0%", icon: FileText }
    ].map((kpi, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === "dark" ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/60"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-2.5 rounded-xl border ${adminInfo.theme === "dark" ? "bg-white/10 border-white/10" : "bg-gray-100 border-gray-200/50"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(kpi.icon, { className: `size-5 ${adminInfo.theme === "dark" ? "text-white/80" : "text-gray-700"}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm ${kpi.trend.startsWith("+") ? adminInfo.theme === "dark" ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" : "bg-emerald-50 text-emerald-600 border-emerald-100" : adminInfo.theme === "dark" ? "bg-white/10 text-white/50 border-white/10" : "bg-gray-100 text-gray-500 border-gray-200"}`, children: [
          kpi.trend.startsWith("+") && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3" }),
          kpi.trend
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-4xl font-semibold tracking-tight ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: kpi.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mt-1 ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: kpi.label })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === "dark" ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold mb-6 ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: "Website Traffic" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: mockVisitorData, margin: { top: 10, right: 0, left: -20, bottom: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorVisitors", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#10b981", stopOpacity: adminInfo.theme === "dark" ? 0.4 : 0.2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#10b981", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: adminInfo.theme === "dark" ? "#6b7280" : "#9ca3af", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: adminInfo.theme === "dark" ? "#6b7280" : "#9ca3af", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: adminInfo.theme === "dark" ? "#374151" : "#f3f4f6", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              contentStyle: { backgroundColor: adminInfo.theme === "dark" ? "#1f2937" : "#ffffff", borderColor: adminInfo.theme === "dark" ? "#374151" : "#e5e7eb", borderRadius: "12px", color: adminInfo.theme === "dark" ? "#f3f4f6" : "#111827", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" },
              itemStyle: { color: "#10b981", fontWeight: 600 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "visitors", stroke: "#10b981", strokeWidth: 3, fillOpacity: 1, fill: "url(#colorVisitors)" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-6 backdrop-blur-xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === "dark" ? "bg-white/5 border-white/10" : "bg-white/60 border-gray-200/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold mb-6 ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: "Lead Conversions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: "100%", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AreaChart, { data: mockVisitorData, margin: { top: 10, right: 0, left: -20, bottom: 0 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "colorLeads", x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "5%", stopColor: "#3b82f6", stopOpacity: adminInfo.theme === "dark" ? 0.4 : 0.2 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "95%", stopColor: "#3b82f6", stopOpacity: 0 })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(XAxis, { dataKey: "name", stroke: adminInfo.theme === "dark" ? "#6b7280" : "#9ca3af", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(YAxis, { stroke: adminInfo.theme === "dark" ? "#6b7280" : "#9ca3af", fontSize: 12, tickLine: false, axisLine: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CartesianGrid, { strokeDasharray: "3 3", stroke: adminInfo.theme === "dark" ? "#374151" : "#f3f4f6", vertical: false }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Tooltip,
            {
              contentStyle: { backgroundColor: adminInfo.theme === "dark" ? "#1f2937" : "#ffffff", borderColor: adminInfo.theme === "dark" ? "#374151" : "#e5e7eb", borderRadius: "12px", color: adminInfo.theme === "dark" ? "#f3f4f6" : "#111827", boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" },
              itemStyle: { color: "#3b82f6", fontWeight: 600 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Area, { type: "monotone", dataKey: "leads", stroke: "#3b82f6", strokeWidth: 3, fillOpacity: 1, fill: "url(#colorLeads)" })
        ] }) }) })
      ] })
    ] })
  ] });
}
function ProjectsView({ categoryFilter = "Project", title = "Our Work" }) {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingProject, setEditingProject] = reactExports.useState(null);
  const { data: projects, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await api.get("/projects");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/projects/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] })
  });
  const toggleVisibilityMutation = useMutation({
    mutationFn: async ({ id, visibility }) => await api.put(`/projects/${id}`, { visibility }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["projects"] })
  });
  const filteredProjects = projects?.filter((p) => (p.category || "Project") === categoryFilter);
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-500 font-medium", children: [
          "Manage your ",
          title.toLowerCase(),
          " showcase."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingProject(null);
            setIsModalOpen(true);
          },
          className: "inline-flex h-10 items-center gap-2 rounded-xl bg-gray-900 px-4 text-sm font-medium text-white shadow-md hover:bg-gray-800 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Work" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-gray-200/60 bg-gray-50/50 text-[11px] font-semibold uppercase tracking-wider text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Category" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Visibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-200/60", children: [
        filteredProjects?.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50/50 transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-semibold text-gray-900", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-gray-500 font-medium", children: project.service }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-gray-500 font-medium", children: project.category || "Project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => toggleVisibilityMutation.mutate({ id: project._id, visibility: !project.visibility }),
              className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${project.visibility ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`,
              children: [
                project.visibility ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-3.5" }),
                project.visibility ? "Visible" : "Hidden"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-gray-500 font-medium", children: project.sortOrder }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 text-right flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setEditingProject(project);
                  setIsModalOpen(true);
                },
                className: "inline-flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  if (window.confirm("Are you sure you want to delete this work item?")) {
                    deleteMutation.mutate(project._id);
                  }
                },
                className: "inline-flex size-8 items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4" })
              }
            )
          ] })
        ] }, project._id)),
        filteredProjects?.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { colSpan: 6, className: "px-6 py-12 text-center text-gray-500", children: [
          "No ",
          title.toLowerCase(),
          " added yet. Click New Work to get started."
        ] }) })
      ] })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ProjectModal,
      {
        project: editingProject,
        defaultCategory: categoryFilter,
        onClose: () => setIsModalOpen(false),
        onSuccess: () => {
          setIsModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ["projects"] });
        }
      }
    )
  ] });
}
function ProjectModal({ project, defaultCategory = "Project", onClose, onSuccess }) {
  const isEditing = !!project;
  const [loading, setLoading] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    title: project?.title || "",
    service: project?.service || "",
    category: project?.category || defaultCategory,
    description: project?.description || "",
    visibility: project?.visibility ?? true,
    sortOrder: project?.sortOrder || 0,
    media: project?.media || [],
    metrics: project?.metrics || [],
    kpis: project?.kpis || []
  });
  const [uploadingImage, setUploadingImage] = reactExports.useState(false);
  const handleFileUpload = async (e) => {
    if (!e.target.files?.[0]) return;
    setUploadingImage(true);
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append("media", file);
    try {
      const { data } = await api.post("/projects/upload", uploadData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setFormData((prev) => ({
        ...prev,
        media: [...prev.media, { type: data.format === "video" ? "video" : "image", url: data.url, alt: formData.title }]
      }));
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image");
    } finally {
      setUploadingImage(false);
    }
  };
  const removeMedia = (index) => {
    setFormData((prev) => ({
      ...prev,
      media: prev.media.filter((_, i) => i !== index)
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isEditing) {
        await api.put(`/projects/${project._id}`, formData);
      } else {
        await api.post("/projects", formData);
      }
      onSuccess();
    } catch (err) {
      console.error(err);
      alert("Failed to save work");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: isEditing ? "Edit Work" : "New Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "project-form", onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Service *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.service, onChange: (e) => setFormData({ ...formData, service: e.target.value }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { required: true, value: formData.category, onChange: (e) => setFormData({ ...formData, category: e.target.value }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Project", children: "Project (Case Study)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Carousel", children: "Carousel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Reel", children: "Reel" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Story", children: "Story" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Description *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), rows: 3, className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex items-center gap-2 h-full pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "visibility", checked: formData.visibility, onChange: (e) => setFormData({ ...formData, visibility: e.target.checked }), className: "size-4 accent-emerald-500 rounded border-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "visibility", className: "text-sm font-semibold text-gray-700 cursor-pointer", children: "Visible to Public" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Sort Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: formData.sortOrder, onChange: (e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 text-gray-900 bg-gray-50/50" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700 block", children: "Media Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4", children: [
          formData.media.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group aspect-video bg-gray-100 rounded-xl overflow-hidden border border-gray-200", children: [
            m.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: m.url, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.url, alt: "media", className: "w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeMedia(i), className: "absolute top-2 right-2 bg-red-500 shadow-md text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3.5" }) })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer flex flex-col items-center justify-center aspect-video bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl hover:bg-gray-100 transition-colors group", children: [
            uploadingImage ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-6 text-gray-400 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-3 bg-white rounded-full shadow-sm mb-2 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-6 text-emerald-500" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-gray-500", children: "Add Media" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*,video/*", onChange: handleFileUpload, disabled: uploadingImage })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-6 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "KPIs (Key Performance Indicators)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFormData({ ...formData, kpis: [...formData.kpis, { label: "", value: 0, suffix: "", trend: "up", trendValue: 0 }] }),
              className: "text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors",
              children: "+ Add KPI"
            }
          )
        ] }),
        formData.kpis.map((kpi, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-xl border border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Label (e.g. ROAS)", value: kpi.label, onChange: (e) => {
            const newKpis = [...formData.kpis];
            newKpis[index].label = e.target.value;
            setFormData({ ...formData, kpis: newKpis });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Value (e.g. 50)", value: kpi.value || "", onChange: (e) => {
            const newKpis = [...formData.kpis];
            newKpis[index].value = Number(e.target.value);
            setFormData({ ...formData, kpis: newKpis });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Suffix (e.g. x, %)", value: kpi.suffix, onChange: (e) => {
            const newKpis = [...formData.kpis];
            newKpis[index].suffix = e.target.value;
            setFormData({ ...formData, kpis: newKpis });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: kpi.trend || "up", onChange: (e) => {
            const newKpis = [...formData.kpis];
            newKpis[index].trend = e.target.value;
            setFormData({ ...formData, kpis: newKpis });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "up", children: "Trend Up" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "down", children: "Trend Down" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "neutral", children: "Neutral" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", placeholder: "Trend Val", value: kpi.trendValue || "", onChange: (e) => {
            const newKpis = [...formData.kpis];
            newKpis[index].trendValue = Number(e.target.value);
            setFormData({ ...formData, kpis: newKpis });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            const newKpis = [...formData.kpis];
            newKpis.splice(index, 1);
            setFormData({ ...formData, kpis: newKpis });
          }, className: "text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) }) })
        ] }, index)),
        formData.kpis.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 font-medium text-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200", children: "No KPIs added." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 pt-6 border-t border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Text Metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => setFormData({ ...formData, metrics: [...formData.metrics, { label: "", value: "", suffix: "" }] }),
              className: "text-xs font-semibold bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg hover:bg-emerald-100 transition-colors",
              children: "+ Add Metric"
            }
          )
        ] }),
        formData.metrics.map((metric, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-12 gap-2 items-center bg-gray-50 p-3 rounded-xl border border-gray-200", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Label (e.g. Followers)", value: metric.label, onChange: (e) => {
            const newMetrics = [...formData.metrics];
            newMetrics[index].label = e.target.value;
            setFormData({ ...formData, metrics: newMetrics });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Value (e.g. 500)", value: metric.value, onChange: (e) => {
            const newMetrics = [...formData.metrics];
            newMetrics[index].value = e.target.value;
            setFormData({ ...formData, metrics: newMetrics });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Suffix (e.g. k+)", value: metric.suffix, onChange: (e) => {
            const newMetrics = [...formData.metrics];
            newMetrics[index].suffix = e.target.value;
            setFormData({ ...formData, metrics: newMetrics });
          }, className: "w-full text-xs rounded-md border border-gray-200 px-3 py-2 bg-white focus:outline-none focus:border-emerald-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
            const newMetrics = [...formData.metrics];
            newMetrics.splice(index, 1);
            setFormData({ ...formData, metrics: newMetrics });
          }, className: "text-red-500 hover:text-red-700 bg-red-50 p-1.5 rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) }) })
        ] }, index)),
        formData.metrics.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-gray-400 font-medium text-center p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200", children: "No Text Metrics added." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-50 transition-colors", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", form: "project-form", disabled: loading, className: "px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors shadow-md", children: loading ? "Saving..." : "Save Work" })
    ] })
  ] }) });
}
function TransformationsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingTrans, setEditingTrans] = reactExports.useState(null);
  const { data: transformations, isLoading } = useQuery({
    queryKey: ["transformations"],
    queryFn: async () => {
      const { data } = await api.get("/transformations");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/transformations/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transformations"] })
  });
  const toggleVisibilityMutation = useMutation({
    mutationFn: async ({ id, visibility }) => await api.put(`/transformations/${id}`, { visibility }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["transformations"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Transformations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 font-medium", children: "Manage before/after image sliders." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingTrans(null);
            setIsModalOpen(true);
          },
          className: "inline-flex h-10 items-center gap-2 rounded-xl bg-gray-900 px-4 text-sm font-medium text-white shadow-md hover:bg-gray-800 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Transformation" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-gray-200/60 bg-white/60 overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] backdrop-blur-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-gray-200/60 bg-gray-50/50 text-[11px] font-semibold uppercase tracking-wider text-gray-500", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Visibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-gray-200/60", children: [
        transformations?.map((trans) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50/50 transition-colors group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-semibold text-gray-900", children: trans.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              onClick: () => toggleVisibilityMutation.mutate({ id: trans._id, visibility: !trans.visibility }),
              className: `inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${trans.visibility ? "bg-emerald-50 text-emerald-600" : "bg-gray-100 text-gray-500"}`,
              children: [
                trans.visibility ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-3.5" }),
                trans.visibility ? "Visible" : "Hidden"
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-gray-500 font-medium", children: trans.sortOrder }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-6 py-4 text-right flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  setEditingTrans(trans);
                  setIsModalOpen(true);
                },
                className: "inline-flex size-8 items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400 hover:text-blue-600 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => {
                  if (window.confirm("Are you sure you want to delete this transformation?")) {
                    deleteMutation.mutate(trans._id);
                  }
                },
                className: "inline-flex size-8 items-center justify-center rounded-lg hover:bg-red-50 text-gray-400 hover:text-red-600 transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4" })
              }
            )
          ] })
        ] }, trans._id)),
        transformations?.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-6 py-12 text-center text-gray-500", children: "No transformations added yet." }) })
      ] })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
      TransformationModal,
      {
        trans: editingTrans,
        onClose: () => setIsModalOpen(false),
        onSuccess: () => {
          setIsModalOpen(false);
          queryClient.invalidateQueries({ queryKey: ["transformations"] });
        }
      }
    )
  ] });
}
function TransformationModal({ trans, onClose, onSuccess }) {
  const isEditing = !!trans;
  const [loading, setLoading] = reactExports.useState(false);
  const [uploadingImage, setUploadingImage] = reactExports.useState(null);
  const [formData, setFormData] = reactExports.useState({
    title: trans?.title || "",
    beforeImage: trans?.beforeImage || "",
    afterImage: trans?.afterImage || "",
    beforeLabel: trans?.beforeLabel || "Before",
    afterLabel: trans?.afterLabel || "After",
    visibility: trans?.visibility ?? true,
    sortOrder: trans?.sortOrder || 0
  });
  const handleFileUpload = async (e, field) => {
    if (!e.target.files?.[0]) return;
    setUploadingImage(field);
    const file = e.target.files[0];
    const uploadData = new FormData();
    uploadData.append("media", file);
    try {
      const { data } = await api.post("/projects/upload", uploadData, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      setFormData((prev) => ({ ...prev, [field]: data.url }));
    } catch (err) {
      console.error("Upload failed", err);
      alert("Failed to upload image");
    } finally {
      setUploadingImage(null);
    }
  };
  const handleSubmit = async (e) => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-gray-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-100", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold text-gray-900", children: isEditing ? "Edit Transformation" : "New Transformation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "text-gray-400 hover:text-gray-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "trans-form", onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Title *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-500" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Before Image *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center", children: [
            formData.beforeImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formData.beforeImage, alt: "before", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: "No Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer", children: [
              uploadingImage === "beforeImage" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-white size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-white size-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*", onChange: (e) => handleFileUpload(e, "beforeImage"), disabled: !!uploadingImage })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Before Label (e.g. Raw Footage)", value: formData.beforeLabel, onChange: (e) => setFormData({ ...formData, beforeLabel: e.target.value }), className: "w-full text-xs rounded-md border px-3 py-2" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "After Image *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group aspect-[4/3] bg-gray-100 rounded-xl overflow-hidden border border-gray-200 flex items-center justify-center", children: [
            formData.afterImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: formData.afterImage, alt: "after", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-gray-500", children: "No Image" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer", children: [
              uploadingImage === "afterImage" ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin text-white size-6" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "text-white size-6" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*", onChange: (e) => handleFileUpload(e, "afterImage"), disabled: !!uploadingImage })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "After Label (e.g. Graded)", value: formData.afterLabel, onChange: (e) => setFormData({ ...formData, afterLabel: e.target.value }), className: "w-full text-xs rounded-md border px-3 py-2" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 flex items-center gap-2 h-full pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "t-visibility", checked: formData.visibility, onChange: (e) => setFormData({ ...formData, visibility: e.target.checked }), className: "size-4 accent-emerald-500 rounded border-gray-300" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "t-visibility", className: "text-sm font-semibold text-gray-700 cursor-pointer", children: "Visible to Public" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-semibold text-gray-700", children: "Sort Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: formData.sortOrder, onChange: (e) => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 }), className: "w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-50", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", form: "trans-form", disabled: loading, className: "px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 shadow-md", children: loading ? "Saving..." : "Save Transformation" })
    ] })
  ] }) });
}
function CareersView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingCareer, setEditingCareer] = reactExports.useState(null);
  const { data: careers, isLoading } = useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data } = await api.get("/careers");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/careers/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["careers"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-deep" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold", children: "Career Openings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage job postings and interview questions." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            setEditingCareer(null);
            setIsModalOpen(true);
          },
          className: "inline-flex h-10 items-center gap-2 rounded-md bg-emerald-deep px-3 text-sm font-medium text-ivory",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Opening" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-xl border border-white/10 bg-white/5 overflow-x-auto backdrop-blur-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-emerald-deep/10 text-xs uppercase tracking-[0.14em] text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Team" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-emerald-deep/10", children: [
        careers?.map((career) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-white/5 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-medium", children: career.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground", children: career.team }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground", children: career.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setEditingCareer(career);
              setIsModalOpen(true);
            }, className: "text-emerald-deep hover:text-emerald-deep/80", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => deleteMutation.mutate(career._id), className: "text-red-500 hover:text-red-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4" }) })
          ] }) })
        ] }, career._id)),
        careers?.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 4, className: "px-5 py-8 text-center text-muted-foreground", children: "No openings found." }) })
      ] })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(CareerModal, { career: editingCareer, onClose: () => setIsModalOpen(false) })
  ] });
}
function CareerModal({ career, onClose }) {
  const queryClient = useQueryClient();
  const [formData, setFormData] = reactExports.useState({
    title: career?.title || "",
    team: career?.team || "",
    type: career?.type || "",
    location: career?.location || "",
    summary: career?.summary || "",
    questions: career?.questions || []
  });
  const mutation = useMutation({
    mutationFn: async (data) => {
      const token = JSON.parse(localStorage.getItem("adminInfo") || "{}").token;
      const headers = { Authorization: `Bearer ${token}` };
      if (career) return api.put(`/careers/${career._id}`, data, { headers });
      return api.post("/careers", data, { headers });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers"] });
      onClose();
    }
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#fffdf6] rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: career ? "Edit Opening" : "New Opening" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5 text-muted-foreground hover:text-foreground" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      mutation.mutate(formData);
    }, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Title" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-md border p-2 bg-transparent", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Team" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-md border p-2 bg-transparent", value: formData.team, onChange: (e) => setFormData({ ...formData, team: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-md border p-2 bg-transparent", value: formData.type, onChange: (e) => setFormData({ ...formData, type: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "w-full rounded-md border p-2 bg-transparent", value: formData.location, onChange: (e) => setFormData({ ...formData, location: e.target.value }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, className: "w-full rounded-md border p-2 h-24 bg-transparent", value: formData.summary, onChange: (e) => setFormData({ ...formData, summary: e.target.value }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-1", children: "Questions" }),
        formData.questions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "flex-1 rounded-md border p-2 bg-transparent", value: q, onChange: (e) => {
            const newQ = [...formData.questions];
            newQ[i] = e.target.value;
            setFormData({ ...formData, questions: newQ });
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormData({ ...formData, questions: formData.questions.filter((_, idx) => idx !== i) }), className: "p-2 text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) })
        ] }, i)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setFormData({ ...formData, questions: [...formData.questions, ""] }), className: "text-sm text-emerald-deep font-medium", children: "+ Add Question" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-3 mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: onClose, className: "px-4 py-2 border rounded-md", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: mutation.isPending, className: "px-4 py-2 bg-emerald-deep text-ivory rounded-md", children: mutation.isPending ? "Saving..." : "Save" })
      ] })
    ] })
  ] }) });
}
function SiteContentView() {
  const queryClient = useQueryClient();
  const photoLabels = {
    "hero1": "Homepage Hero Slideshow 1",
    "hero2": "Homepage Hero Slideshow 2",
    "hero3": "Homepage Hero Slideshow 3",
    "founder1": "Founder Profile (Anushka)",
    "founder2": "Founder Profile (Saurabh)",
    "work1": "Portfolio Gallery Image 1",
    "work2": "Portfolio Gallery Image 2",
    "work3": "Portfolio Gallery Image 3",
    "work4": "Portfolio Gallery Image 4",
    "work5": "Portfolio Gallery Image 5",
    "about": "About Us Section Cover",
    "arpit": "Team Member Profile (Arpit)",
    "dipanshu": "Team Member Profile (Dipanshu)"
  };
  const keys = Object.keys(photoLabels);
  const { data: settings, isLoading } = useQuery({
    queryKey: ["settings"],
    queryFn: async () => {
      const { data } = await api.get("/settings");
      return data;
    }
  });
  const uploadMutation = useMutation({
    mutationFn: async ({ key, file }) => {
      const formData = new FormData();
      formData.append("image", file);
      const token = JSON.parse(localStorage.getItem("adminInfo") || "{}").token;
      return fetch(`undefined/settings/${key}/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["settings"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-deep" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold", children: "Site Content & Photos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Upload images to replace the default static photos across the website." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: keys.map((key) => {
      const setting = settings?.find((s) => s.key === key);
      const val = setting?.value;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-medium text-ivory", children: photoLabels[key] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-white/40 mb-4 font-mono", children: [
          "ID: ",
          key
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-video bg-secondary/30 rounded-md overflow-hidden mb-3 relative group flex items-center justify-center border border-dashed border-emerald-deep/20", children: [
          val ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: val, alt: key, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-sm", children: "No custom image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white flex items-center gap-2 bg-emerald-deep px-3 py-1.5 rounded-md text-sm", children: [
              uploadMutation.isPending && uploadMutation.variables?.key === key ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-4" }),
              "Upload"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*", onChange: (e) => {
              if (e.target.files?.[0]) {
                uploadMutation.mutate({ key, file: e.target.files[0] });
              }
            } })
          ] })
        ] })
      ] }, key);
    }) })
  ] });
}
function AdminsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({ name: "", email: "", password: "", role: "Editor" });
  const [error, setError] = reactExports.useState("");
  const { data: admins, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: async () => {
      const { data } = await api.get("/admins");
      return data;
    }
  });
  const createMutation = useMutation({
    mutationFn: async (newAdmin) => await api.post("/admins", newAdmin),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
      setIsModalOpen(false);
      setFormData({ name: "", email: "", password: "", role: "Editor" });
      setError("");
    },
    onError: (err) => {
      setError(err.response?.data?.message || "Failed to create user");
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/admins/${id}`),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["admins"] })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-500" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold tracking-tight text-gray-900", children: "Access Management" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-gray-500 font-medium mt-1", children: "Manage who has access to the admin portal." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setIsModalOpen(true),
          className: "flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-all shadow-md",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
            "Add User"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white border border-gray-200/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-gray-50/80 text-gray-500 text-xs uppercase tracking-wider font-semibold border-b border-gray-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold", children: "Role" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-gray-100/80", children: admins?.map((admin) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50/50 transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-gray-900", children: admin.name }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-medium text-gray-600", children: admin.email }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100/50 shadow-sm", children: admin.role }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => {
              if (window.confirm("Are you sure you want to revoke access for this user?")) {
                deleteMutation.mutate(admin._id);
              }
            },
            className: "text-red-500 hover:text-red-600 bg-red-50 hover:bg-red-100 p-2 rounded-lg transition-colors border border-red-100 shadow-sm inline-flex items-center justify-center",
            title: "Revoke Access",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4" })
          }
        ) })
      ] }, admin._id)) })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-gray-200 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-6 border-b border-gray-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold tracking-tight text-gray-900", children: "Invite New User" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "text-gray-400 hover:text-gray-600 transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 border border-red-200 text-red-600 font-medium p-4 rounded-xl mb-5 text-sm shadow-sm", children: error }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm", placeholder: "e.g. Founder admin 1" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm", placeholder: "founder1@habigo.com" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Temporary Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm", placeholder: "••••••••" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold text-gray-700 uppercase tracking-wider ml-1", children: "Role" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: formData.role, onChange: (e) => setFormData({ ...formData, role: e.target.value }), className: "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm cursor-pointer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Founder", children: "Founder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Admin", children: "Admin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "Editor", children: "Editor" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 border-t border-gray-100 bg-gray-50/50 flex justify-end gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setIsModalOpen(false), className: "px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-sm", children: "Cancel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => createMutation.mutate(formData), disabled: createMutation.isPending, className: "px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2 shadow-md", children: [
          createMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-4" }),
          "Grant Access"
        ] })
      ] })
    ] }) })
  ] });
}
function SettingsView({ adminInfo, onUpdate }) {
  const [formData, setFormData] = reactExports.useState({
    name: adminInfo.name || "",
    email: adminInfo.email || "",
    password: ""
  });
  const [isUploading, setIsUploading] = reactExports.useState(false);
  const [message, setMessage] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const updateMutation = useMutation({
    mutationFn: async (data) => {
      const res = await api.put("/auth/profile", data);
      return res.data;
    },
    onSuccess: (data) => {
      onUpdate(data);
      setMessage("Profile updated successfully!");
      setFormData((prev) => ({ ...prev, password: "" }));
      setTimeout(() => setMessage(""), 3e3);
    },
    onError: (err) => {
      setError(err.response?.data?.message || "Failed to update profile");
      setTimeout(() => setError(""), 3e3);
    }
  });
  const uploadProfilePicMutation = useMutation({
    mutationFn: async (file) => {
      const formData2 = new FormData();
      formData2.append("image", file);
      const res = await api.post("/upload", formData2, {
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
      setTimeout(() => setError(""), 3e3);
    }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };
    if (!dataToSubmit.password) {
      delete dataToSubmit.password;
    }
    updateMutation.mutate(dataToSubmit);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: `text-xl font-semibold tracking-tight ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: "Account Settings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mt-1 ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: "Manage your profile and preferences." })
    ] }),
    message && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === "dark" ? "bg-emerald-900/30 text-emerald-400 border-emerald-500/20" : "bg-emerald-50 text-emerald-600 border-emerald-100"}`, children: message }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `p-4 rounded-xl mb-6 text-sm font-medium border shadow-sm ${adminInfo.theme === "dark" ? "bg-red-900/30 text-red-400 border-red-500/20" : "bg-red-50 text-red-600 border-red-100"}`, children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `border rounded-2xl p-8 shadow-[0_4px_20px_rgb(0,0,0,0.02)] ${adminInfo.theme === "dark" ? "bg-white/5 border-white/10" : "bg-white border-gray-200/60"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-6 pb-6 border-b ${adminInfo.theme === "dark" ? "border-white/10" : "border-gray-100"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
          adminInfo.profilePicture ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: adminInfo.profilePicture, alt: "Profile", className: `size-24 rounded-full object-cover border-2 shadow-md ${adminInfo.theme === "dark" ? "border-white/20" : "border-white"}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-24 rounded-full border-2 flex items-center justify-center text-2xl font-semibold shadow-md ${adminInfo.theme === "dark" ? "bg-gradient-to-tr from-emerald-900 to-emerald-700 border-white/20 text-white" : "bg-gradient-to-tr from-blue-100 to-emerald-100 border-white text-gray-800"}`, children: adminInfo.name?.charAt(0) || "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer backdrop-blur-sm", children: [
            isUploading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-6 text-white animate-spin" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-6 text-white" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*", onChange: (e) => {
              if (e.target.files?.[0]) {
                setIsUploading(true);
                uploadProfilePicMutation.mutate(e.target.files[0]);
              }
            } })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `text-lg font-semibold ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: "Profile Picture" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-medium mt-1 ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: "Click the image to upload a new one." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === "dark" ? "text-white/60" : "text-gray-700"}`, children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: formData.name, onChange: (e) => setFormData({ ...formData, name: e.target.value }), className: `w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === "dark" ? "bg-black/40 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-900"}`, required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === "dark" ? "text-white/60" : "text-gray-700"}`, children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: formData.email, onChange: (e) => setFormData({ ...formData, email: e.target.value }), className: `w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === "dark" ? "bg-black/40 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-900"}`, required: true })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pb-6 border-b ${adminInfo.theme === "dark" ? "border-white/10" : "border-gray-100"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: `text-xs font-bold uppercase tracking-wider ml-1 ${adminInfo.theme === "dark" ? "text-white/60" : "text-gray-700"}`, children: "New Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: formData.password, onChange: (e) => setFormData({ ...formData, password: e.target.value }), className: `w-full border rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-sm ${adminInfo.theme === "dark" ? "bg-black/40 border-white/10 text-white" : "bg-gray-50 border-gray-200 text-gray-900"}`, placeholder: "Leave blank to keep current" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-end pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", disabled: updateMutation.isPending, className: `px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 shadow-md ${adminInfo.theme === "dark" ? "bg-emerald-deep text-ivory hover:bg-emerald-deep/80" : "bg-gray-900 text-white hover:bg-gray-800"}`, children: [
        updateMutation.isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-4" }),
        "Save Changes"
      ] }) })
    ] }) })
  ] });
}
function AdminDashboard({ onLogout, adminInfo, onUpdate }) {
  const initialTab = adminInfo.role === "Editor" ? "Site Content" : adminInfo.role === "Admin" ? "Inbox" : "Dashboard";
  const [activeTab, setActiveTab] = reactExports.useState(initialTab);
  const toggleThemeMutation = useMutation({
    mutationFn: async (newTheme) => {
      const res = await api.put("/auth/profile", { theme: newTheme });
      return res.data;
    },
    onSuccess: (data) => {
      onUpdate(data);
    },
    onError: (err) => {
      alert("Failed to update theme: " + (err.response?.data?.message || err.message));
    }
  });
  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Inbox", icon: Inbox },
    { label: "Our Work", icon: Image },
    { label: "Carousels", icon: Image },
    { label: "Reels", icon: ImagePlay },
    { label: "Stories", icon: Image },
    { label: "Transformations", icon: ImagePlay },
    { label: "Case Studies", icon: FileText },
    { label: "Testimonials", icon: Star },
    { label: "Careers", icon: BriefcaseBusiness },
    { label: "Site Content", icon: Settings },
    { label: "Access", icon: Users },
    { label: "Settings", icon: Settings }
  ];
  const filteredNavItems = navItems.filter((item) => {
    if (adminInfo.role === "Founder") return true;
    if (adminInfo.role === "Admin") return item.label !== "Dashboard";
    if (adminInfo.role === "Editor") return item.label === "Site Content" || item.label === "Settings";
    return false;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `min-h-screen flex relative overflow-hidden selection:bg-emerald-200 ${adminInfo.theme === "dark" ? "dark bg-[#0a0a0a] text-ivory" : "bg-[#f5f5f7] text-gray-900"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `hidden w-64 shrink-0 border-r backdrop-blur-xl px-5 py-6 lg:flex lg:flex-col z-10 ${adminInfo.theme === "dark" ? "border-white/10 bg-black/40 shadow-[4px_0_24px_rgb(0,0,0,0.2)]" : "border-gray-200/60 bg-white/60 shadow-[4px_0_24px_rgb(0,0,0,0.02)]"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pl-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-9 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-500 to-emerald-700 text-white shadow-md shadow-emerald-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[15px] font-semibold tracking-tight leading-none ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: "HabiGo 360" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-[11px] uppercase tracking-widest mt-1 font-medium ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: "Admin Portal" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-10 space-y-1 flex-1", children: filteredNavItems.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => setActiveTab(item.label),
          className: `flex h-10 w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] transition-all font-medium ${activeTab === item.label ? adminInfo.theme === "dark" ? "bg-emerald-deep/20 text-emerald-400 shadow-md shadow-emerald-deep/10 border border-emerald-deep/30" : "bg-gray-900 text-white shadow-md shadow-gray-900/10" : adminInfo.theme === "dark" ? "text-white/60 hover:bg-white/5 hover:text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-[18px]" }),
            item.label
          ]
        },
        item.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-auto pt-6 border-t ${adminInfo.theme === "dark" ? "border-white/10" : "border-gray-200/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 px-2 flex items-center gap-3", children: [
          adminInfo.profilePicture ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: adminInfo.profilePicture, alt: "Profile", className: `size-9 rounded-full object-cover border shadow-sm ${adminInfo.theme === "dark" ? "border-white/20" : "border-gray-200"}` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `size-9 rounded-full border flex items-center justify-center text-sm font-semibold shadow-sm ${adminInfo.theme === "dark" ? "bg-gradient-to-tr from-emerald-900 to-emerald-700 border-emerald-500/30 text-white" : "bg-gradient-to-tr from-blue-100 to-emerald-100 border-white text-gray-800"}`, children: adminInfo.name?.charAt(0) || "A" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold truncate ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: adminInfo.name || "Admin User" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xs truncate font-medium ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: adminInfo.role || "Admin" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            onClick: onLogout,
            className: `flex h-10 w-full items-center justify-center gap-2 rounded-xl text-sm font-medium transition-colors ${adminInfo.theme === "dark" ? "bg-red-500/10 text-red-400 hover:bg-red-500/20" : "bg-red-50 text-red-600 hover:bg-red-100"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4" }),
              "Sign Out"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1 flex flex-col z-10 h-screen", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `sticky top-0 z-20 border-b backdrop-blur-2xl px-6 lg:px-10 py-5 flex items-center justify-between shadow-[0_4px_20px_rgb(0,0,0,0.01)] ${adminInfo.theme === "dark" ? "border-white/10 bg-black/40" : "border-gray-200/60 bg-white/60"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: `text-2xl font-semibold tracking-tight ${adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900"}`, children: activeTab }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => toggleThemeMutation.mutate(adminInfo.theme === "dark" ? "light" : "dark"),
              disabled: toggleThemeMutation.isPending,
              className: `p-2 rounded-full transition-colors ${adminInfo.theme === "dark" ? "bg-white/10 text-yellow-300 hover:bg-white/20" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`,
              title: "Toggle Theme",
              children: toggleThemeMutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "size-5 animate-spin" }) : adminInfo.theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-sm font-medium tracking-wide hidden sm:block ${adminInfo.theme === "dark" ? "text-white/50" : "text-gray-500"}`, children: [
            "Welcome back, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: adminInfo.theme === "dark" ? "text-ivory" : "text-gray-900", children: adminInfo.name || "Admin User" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto p-6 lg:p-10 pb-20", children: [
        activeTab === "Our Work" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsView, { categoryFilter: "Project", title: "Our Work" }),
        activeTab === "Carousels" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsView, { categoryFilter: "Carousel", title: "Carousels" }),
        activeTab === "Reels" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsView, { categoryFilter: "Reel", title: "Reels" }),
        activeTab === "Stories" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsView, { categoryFilter: "Story", title: "Stories" }),
        activeTab === "Transformations" && /* @__PURE__ */ jsxRuntimeExports.jsx(TransformationsView, {}),
        activeTab === "Careers" && /* @__PURE__ */ jsxRuntimeExports.jsx(CareersView, {}),
        activeTab === "Site Content" && /* @__PURE__ */ jsxRuntimeExports.jsx(SiteContentView, {}),
        activeTab === "Access" && /* @__PURE__ */ jsxRuntimeExports.jsx(AdminsView, {}),
        activeTab === "Inbox" && /* @__PURE__ */ jsxRuntimeExports.jsx(InboxView, {}),
        activeTab === "Case Studies" && /* @__PURE__ */ jsxRuntimeExports.jsx(CaseStudiesView, {}),
        activeTab === "Testimonials" && /* @__PURE__ */ jsxRuntimeExports.jsx(TestimonialsView, {}),
        activeTab === "Dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardAnalytics, { adminInfo }),
        activeTab === "Settings" && /* @__PURE__ */ jsxRuntimeExports.jsx(SettingsView, { adminInfo, onUpdate })
      ] })
    ] })
  ] });
}
function AdminPanel() {
  const [adminInfo, setAdminInfo] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const stored = localStorage.getItem("adminInfo");
    if (stored) {
      setAdminInfo(JSON.parse(stored));
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("adminInfo");
    setAdminInfo(null);
  };
  if (!adminInfo) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLogin, { onLogin: (data) => setAdminInfo(data) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, { onLogout: handleLogout, adminInfo, onUpdate: (data) => {
    localStorage.setItem("adminInfo", JSON.stringify(data));
    setAdminInfo(data);
  } });
}
export {
  AdminPanel as component
};
