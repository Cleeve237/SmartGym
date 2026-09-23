import "../../components/dashboard/admin/AdminDashboard.css";
import AdminDashboardLayout from "../../components/dashboard/admin/AdminDashboardLayout";
import AdminHeader from "../../components/dashboard/admin/AdminHeader";
import AdminOverview from "../../components/dashboard/admin/AdminOverview";
import AdminStatsCards from "../../components/dashboard/admin/AdminStatsCards";
import UsersManagementWidget from "../../components/dashboard/admin/UsersManagementWidget";
import CoachManagementWidget from "../../components/dashboard/admin/CoachManagementWidget";
import BookingManagementWidget from "../../components/dashboard/admin/BookingManagementWidget";
import PaymentManagementWidget from "../../components/dashboard/admin/PaymentManagementWidget";
import RevenueAnalyticsWidget from "../../components/dashboard/admin/RevenueAnalyticsWidget";
import ReviewModerationWidget from "../../components/dashboard/admin/ReviewModerationWidget";
import ReportWidget from "../../components/dashboard/admin/ReportWidget";
import SystemHealthWidget from "../../components/dashboard/admin/SystemHealthWidget";
import QuickActionsWidget from "../../components/dashboard/admin/QuickActionsWidget";
import AdminNotificationWidget from "../../components/dashboard/admin/AdminNotificationWidget";

export default function AdminDashboardPage() {
  return (
    <AdminDashboardLayout>
      <AdminHeader notifCount={7} />
      <AdminOverview />
      <AdminStatsCards />

      <div className="adm-grid-2">
        <RevenueAnalyticsWidget />
        <SystemHealthWidget />
      </div>

      <UsersManagementWidget />

      <div className="adm-grid-2" style={{ marginTop: "1.25rem" }}>
        <CoachManagementWidget />
        <ReportWidget />
      </div>

      <div className="adm-grid-2">
        <BookingManagementWidget />
        <PaymentManagementWidget />
      </div>

      <div className="adm-grid-2">
        <ReviewModerationWidget />
        <QuickActionsWidget />
      </div>

      <AdminNotificationWidget />
    </AdminDashboardLayout>
  );
}
