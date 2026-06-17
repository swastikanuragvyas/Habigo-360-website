import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { b as useQueryClient, a as useQuery, u as useMutation } from "../_libs/tanstack__react-query.mjs";
import { a as api } from "./api-C9QTNx8U.mjs";
import { S as Sparkles, j as LoaderCircle, n as LayoutDashboard, o as Image, p as Settings, q as LogOut, r as Plus, E as Eye, s as EyeOff, t as SquarePen, u as Trash, X, v as Upload } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/axios.mjs";
import "../_libs/form-data.mjs";
import "fs";
import "../_libs/combined-stream.mjs";
import "util";
import "stream";
import "../_libs/delayed-stream.mjs";
import "path";
import "http";
import "https";
import "url";
import "crypto";
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminDashboard, { onLogout: handleLogout });
}
function AdminLogin({
  onLogin
}) {
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [error, setError] = reactExports.useState("");
  const [loading, setLoading] = reactExports.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const {
        data
      } = await api.post("/auth/login", {
        email,
        password
      });
      localStorage.setItem("adminInfo", JSON.stringify(data));
      onLogin(data);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-[#f7f4eb] flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md w-full bg-[#fffdf6] rounded-xl shadow-sm border border-emerald-deep/10 p-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-12 items-center justify-center rounded-lg bg-emerald-deep text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-6" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold text-center text-emerald-deep mb-6", children: "Admin Login" }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-red-50 text-red-500 p-3 rounded-md mb-4 text-sm", children: error }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-emerald-deep/70 mb-1", children: "Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", className: "w-full rounded-md border border-emerald-deep/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-deep", value: email, onChange: (e) => setEmail(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-emerald-deep/70 mb-1", children: "Password" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", className: "w-full rounded-md border border-emerald-deep/20 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-deep", value: password, onChange: (e) => setPassword(e.target.value), required: true })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: loading, className: "w-full rounded-md bg-emerald-deep py-2 text-ivory font-medium transition-colors hover:bg-emerald-deep/90 flex justify-center items-center", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-5" }) : "Sign In" })
    ] })
  ] }) });
}
function AdminDashboard({
  onLogout
}) {
  const [activeTab, setActiveTab] = reactExports.useState("Projects");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#f7f4eb] text-foreground flex", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "hidden w-72 shrink-0 border-r border-emerald-deep/10 bg-[#fffdf6] px-5 py-6 lg:flex lg:flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex size-10 items-center justify-center rounded-md bg-emerald-deep text-ivory", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "HabiGo 360" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Admin panel" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-10 space-y-1 flex-1", children: [{
        label: "Dashboard",
        icon: LayoutDashboard
      }, {
        label: "Projects",
        icon: Image
      }, {
        label: "Settings",
        icon: Settings
      }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(item.label), className: `flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm transition-colors ${activeTab === item.label ? "bg-emerald-deep text-ivory" : "text-foreground/70 hover:bg-secondary hover:text-foreground"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "size-4" }),
        item.label
      ] }, item.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: onLogout, className: "flex h-11 w-full items-center gap-3 rounded-md px-3 text-left text-sm text-red-500 transition-colors hover:bg-red-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-4" }),
        "Sign Out"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-w-0 flex-1 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-20 border-b border-emerald-deep/10 bg-[#f7f4eb]/90 backdrop-blur px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: activeTab }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto p-4 sm:p-6 lg:p-8", children: [
        activeTab === "Projects" && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectsView, {}),
        activeTab === "Dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Welcome to the HabiGo 360 Admin Panel." }),
        activeTab === "Settings" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Settings coming soon..." })
      ] })
    ] })
  ] });
}
function ProjectsView() {
  const queryClient = useQueryClient();
  const [isModalOpen, setIsModalOpen] = reactExports.useState(false);
  const [editingProject, setEditingProject] = reactExports.useState(null);
  const {
    data: projects,
    isLoading
  } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const {
        data
      } = await api.get("/projects");
      return data;
    }
  });
  const deleteMutation = useMutation({
    mutationFn: async (id) => await api.delete(`/projects/${id}`),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ["projects"]
    })
  });
  const toggleVisibilityMutation = useMutation({
    mutationFn: async ({
      id,
      visibility
    }) => await api.put(`/projects/${id}`, {
      visibility
    }),
    onSuccess: () => queryClient.invalidateQueries({
      queryKey: ["projects"]
    })
  });
  if (isLoading) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-8 text-emerald-deep" }) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold", children: "Portfolio Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Manage your dynamic work showcase." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
        setEditingProject(null);
        setIsModalOpen(true);
      }, className: "inline-flex h-10 items-center gap-2 rounded-md bg-emerald-deep px-3 text-sm font-medium text-ivory", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "New Project" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-md border border-emerald-deep/10 bg-[#fffdf6] overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[800px] text-left text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "border-b border-emerald-deep/10 text-xs uppercase tracking-[0.14em] text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Title" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Service" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Visibility" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium", children: "Order" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-4 font-medium text-right", children: "Actions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { className: "divide-y divide-emerald-deep/10", children: [
        projects?.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/30 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-medium", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground", children: project.service }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => toggleVisibilityMutation.mutate({
            id: project._id,
            visibility: !project.visibility
          }), className: "inline-flex items-center gap-1 hover:text-emerald-deep", children: project.visibility ? /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4 text-emerald-deep" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4 text-muted-foreground" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: project.sortOrder }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-right flex justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setEditingProject(project);
              setIsModalOpen(true);
            }, className: "inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-blue-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SquarePen, { className: "size-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              if (window.confirm("Are you sure you want to delete this project?")) {
                deleteMutation.mutate(project._id);
              }
            }, className: "inline-flex size-8 items-center justify-center rounded-md hover:bg-secondary text-red-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash, { className: "size-4" }) })
          ] })
        ] }, project._id)),
        projects?.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 5, className: "px-5 py-8 text-center text-muted-foreground", children: "No projects found. Add one to get started." }) })
      ] })
    ] }) }),
    isModalOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectModal, { project: editingProject, onClose: () => setIsModalOpen(false), onSuccess: () => {
      setIsModalOpen(false);
      queryClient.invalidateQueries({
        queryKey: ["projects"]
      });
    } })
  ] });
}
function ProjectModal({
  project,
  onClose,
  onSuccess
}) {
  const isEditing = !!project;
  const [loading, setLoading] = reactExports.useState(false);
  const [formData, setFormData] = reactExports.useState({
    title: project?.title || "",
    service: project?.service || "",
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
      const {
        data
      } = await api.post("/projects/upload", uploadData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setFormData((prev) => ({
        ...prev,
        media: [...prev.media, {
          type: data.format === "video" ? "video" : "image",
          url: data.url,
          alt: formData.title
        }]
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
      alert("Failed to save project");
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#fffdf6] rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col border border-emerald-deep/10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center p-5 border-b border-emerald-deep/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: isEditing ? "Edit Project" : "New Project" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-muted-foreground hover:text-emerald-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-auto p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { id: "project-form", onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Title *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.title, onChange: (e) => setFormData({
            ...formData,
            title: e.target.value
          }), className: "w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Service / Category *" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: formData.service, onChange: (e) => setFormData({
            ...formData,
            service: e.target.value
          }), className: "w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Description *" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, value: formData.description, onChange: (e) => setFormData({
          ...formData,
          description: e.target.value
        }), rows: 3, className: "w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 flex items-center gap-2 h-full pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", id: "visibility", checked: formData.visibility, onChange: (e) => setFormData({
            ...formData,
            visibility: e.target.checked
          }), className: "size-4 accent-emerald-deep" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "visibility", className: "text-sm font-medium cursor-pointer", children: "Visible to Public" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Sort Order (Lower appears first)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", value: formData.sortOrder, onChange: (e) => setFormData({
            ...formData,
            sortOrder: parseInt(e.target.value) || 0
          }), className: "w-full rounded-md border border-emerald-deep/20 px-3 py-2 text-sm focus:outline-none focus:border-emerald-deep bg-transparent" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "text-sm font-medium flex justify-between items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Media Gallery" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "cursor-pointer inline-flex items-center gap-1 text-xs bg-emerald-deep/10 text-emerald-deep px-2 py-1 rounded hover:bg-emerald-deep/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-3" }),
            uploadingImage ? "Uploading..." : "Add Media",
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden", accept: "image/*,video/*", onChange: handleFileUpload, disabled: uploadingImage })
          ] })
        ] }),
        formData.media.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-3", children: formData.media.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group aspect-video bg-emerald-deep/5 rounded-md overflow-hidden border border-emerald-deep/10", children: [
          m.type === "video" ? /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: m.url, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: m.url, alt: "media", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => removeMedia(i), className: "absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-3" }) })
        ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground italic bg-secondary p-4 rounded-md text-center border border-dashed border-emerald-deep/20", children: "No media added yet. Upload images or videos to showcase the project." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground border-t border-emerald-deep/10 pt-4", children: "Note: Metrics and KPIs arrays can be added programmatically or extended in a future update to keep this form simple." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 border-t border-emerald-deep/10 bg-secondary/30 flex justify-end gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "px-4 py-2 rounded-md border border-emerald-deep/20 text-sm font-medium hover:bg-secondary transition-colors", children: "Cancel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", form: "project-form", disabled: loading, className: "px-4 py-2 rounded-md bg-emerald-deep text-ivory text-sm font-medium hover:bg-emerald-deep/90 flex items-center gap-2", children: [
        loading && /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "animate-spin size-4" }),
        isEditing ? "Save Changes" : "Create Project"
      ] })
    ] })
  ] }) });
}
export {
  AdminPanel as component
};
