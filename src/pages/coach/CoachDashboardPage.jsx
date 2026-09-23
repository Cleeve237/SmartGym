import "../../components/dashboard/coach/CoachDashboard.css";
import CoachDashboardLayout from "../../components/dashboard/coach/CoachDashboardLayout";
import CoachHeader from "../../components/dashboard/coach/CoachHeader";
import CoachWelcomeBanner from "../../components/dashboard/coach/CoachWelcomeBanner";
import CoachStatsCards from "../../components/dashboard/coach/CoachStatsCards";
import UpcomingSessions from "../../components/dashboard/coach/UpcomingSessions";
import BookingRequestsWidget from "../../components/dashboard/coach/BookingRequestsWidget";
import ClientListWidget from "../../components/dashboard/coach/ClientListWidget";
import RevenueWidget from "../../components/dashboard/coach/RevenueWidget";
import ProgramManagementWidget from "../../components/dashboard/coach/ProgramManagementWidget";
import CalendarWidget from "../../components/dashboard/coach/CalendarWidget";
import AvailabilityWidget from "../../components/dashboard/coach/AvailabilityWidget";
import ReviewsWidget from "../../components/dashboard/coach/ReviewsWidget";
import ProfilePerformanceWidget from "../../components/dashboard/coach/ProfilePerformanceWidget";
import QuickActionsWidget from "../../components/dashboard/coach/QuickActionsWidget";
import NotificationWidget from "../../components/dashboard/coach/NotificationWidget";

const MOCK_COACH = {
  name: "Marc Bella",
  speciality: "Musculation & HIIT",
  city: "Douala",
  photo: null,
};

export default function CoachDashboardPage() {
  return (
    <CoachDashboardLayout>
      <CoachHeader coach={MOCK_COACH} notifCount={4} />
      <CoachWelcomeBanner />
      <CoachStatsCards />

      <div className="cd-grid-2">
        <UpcomingSessions />
        <BookingRequestsWidget />
      </div>

      <div className="cd-grid-2">
        <RevenueWidget />
        <ProgramManagementWidget />
      </div>

      <div className="cd-grid-2">
        <ClientListWidget />
        <CalendarWidget />
      </div>

      <div className="cd-grid-2">
        <AvailabilityWidget />
        <ReviewsWidget />
      </div>

      <div className="cd-grid-2">
        <ProfilePerformanceWidget />
        <QuickActionsWidget />
      </div>

      <NotificationWidget />
    </CoachDashboardLayout>
  );
}
