import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import { Loader2, Upload } from "lucide-react";

export default function SiteContentView() {
  const queryClient = useQueryClient();
  const photoLabels: Record<string, string> = {
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
    },
  });

  const uploadMutation = useMutation({
    mutationFn: async ({ key, file }: { key: string, file: File }) => {
      const formData = new FormData();
      formData.append("image", file);
      const token = JSON.parse(localStorage.getItem("adminInfo") || "{}").token;
      return fetch(import.meta.env.VITE_API_URL + `/settings/${key}/upload`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(res => res.json());
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["settings"] }),
  });

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin size-8 text-emerald-deep" /></div>;

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-base font-semibold">Site Content & Photos</h2>
        <p className="text-sm text-muted-foreground">Upload images to replace the default static photos across the website.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {keys.map(key => {
          const setting = settings?.find((s: any) => s.key === key);
          const val = setting?.value;
          return (
            <div key={key} className="border border-white/10 rounded-xl p-5 bg-white/5 backdrop-blur-md">
              <h3 className="font-medium text-ivory">{photoLabels[key]}</h3>
              <p className="text-xs text-white/40 mb-4 font-mono">ID: {key}</p>
              <div className="aspect-video bg-secondary/30 rounded-md overflow-hidden mb-3 relative group flex items-center justify-center border border-dashed border-emerald-deep/20">
                {val ? (
                  <img src={val} alt={key} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-muted-foreground text-sm">No custom image</span>
                )}
                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <div className="text-white flex items-center gap-2 bg-emerald-deep px-3 py-1.5 rounded-md text-sm">
                    {uploadMutation.isPending && uploadMutation.variables?.key === key ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
                    Upload
                  </div>
                  <input type="file" className="hidden" accept="image/*" onChange={(e) => {
                    if (e.target.files?.[0]) {
                      uploadMutation.mutate({ key, file: e.target.files[0] });
                    }
                  }} />
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
