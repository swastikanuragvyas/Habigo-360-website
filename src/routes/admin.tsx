import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from "react";
import AdminLogin from "@/components/admin/AdminLogin";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Panel | HabiGo 360" },
      { name: "description", content: "Manage HabiGo 360 portfolio." },
    ],
  }),
  component: AdminPanel,
});

function AdminPanel() {
  const [adminInfo, setAdminInfo] = useState<{ _id: string; email: string; name: string; role: string; profilePicture?: string; theme?: string; token: string } | null>(null);

  useEffect(() => {
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
    return <AdminLogin onLogin={(data) => setAdminInfo(data)} />;
  }

  return <AdminDashboard onLogout={handleLogout} adminInfo={adminInfo} onUpdate={(data) => {
    localStorage.setItem("adminInfo", JSON.stringify(data));
    setAdminInfo(data);
  }} />;
}
