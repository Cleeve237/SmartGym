import '../../components/dashboard/client/Dashboard.css';
import DashboardLayout from '../../components/dashboard/client/DashboardLayout';
import DashboardHeader from '../../components/dashboard/client/DashboardHeader';
import WelcomeBanner from '../../components/dashboard/client/WelcomeBanner';
import StatsSection from '../../components/dashboard/client/StatsSection';
import UpcomingSessionsWidget from '../../components/dashboard/client/UpcomingSessionsWidget';
import FavoriteCoachWidget from '../../components/dashboard/client/FavoriteCoachWidget';
import RecommendedCoachesWidget from '../../components/dashboard/client/RecommendedCoachesWidget';
import ProgressWidget from '../../components/dashboard/client/ProgressWidget';
import GoalsWidget from '../../components/dashboard/client/GoalsWidget';
import ActivityTimeline from '../../components/dashboard/client/ActivityTimeline';
import QuickActionsWidget from '../../components/dashboard/client/QuickActionsWidget';
import HealthSummaryWidget from '../../components/dashboard/client/HealthSummaryWidget';
import NotificationsWidget from '../../components/dashboard/client/NotificationsWidget';
import CalendarWidget from '../../components/dashboard/client/CalendarWidget';
import MotivationWidget from '../../components/dashboard/client/MotivationWidget';

function ClientDashboardPage() {
  return (
    <DashboardLayout
      rightSidebar={
        <>
          <NotificationsWidget />
          <CalendarWidget />
          <MotivationWidget />
        </>
      }
    >
      <DashboardHeader />
      <WelcomeBanner />
      <StatsSection />

      <div className="dash-grid dash-grid--3-2" style={{ marginBottom: '1.25rem' }}>
        <UpcomingSessionsWidget />
        <FavoriteCoachWidget />
      </div>

      <RecommendedCoachesWidget />

      <div className="dash-grid" style={{ margin: '1.25rem 0' }}>
        <ProgressWidget />
        <GoalsWidget />
      </div>

      <div className="dash-grid" style={{ marginBottom: '1.25rem' }}>
        <ActivityTimeline />
        <HealthSummaryWidget />
      </div>

      <QuickActionsWidget />
    </DashboardLayout>
  );
}

export default ClientDashboardPage;
