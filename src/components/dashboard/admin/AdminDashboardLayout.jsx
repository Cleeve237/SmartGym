import AdminSidebar from "./AdminSidebar";

export default function AdminDashboardLayout({ children }) {
  return (
    <div className="adm-layout">
      <AdminSidebar />
      <main className="adm-main">{children}</main>
      <aside className="adm-right" />
    </div>
  );
}
