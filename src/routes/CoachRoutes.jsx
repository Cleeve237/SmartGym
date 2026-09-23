import CoachLayout from '../layouts/CoachLayout';
import ProtectedRoute from './ProtectedRoute';
import RoleRoute from './RoleRoute';

import CoachDashboardPage from '../pages/coach/CoachDashboardPage';
import CoachProfilePage from '../pages/coach/CoachProfilePage';
import CoachEditProfilePage from '../pages/coach/CoachEditProfilePage';
import CoachProgrammesPage from '../pages/coach/CoachProgrammesPage';
import CoachProgrammeCreatePage from '../pages/coach/CoachProgrammeCreatePage';
import CoachProgrammeEditPage from '../pages/coach/CoachProgrammeEditPage';
import CoachBookingsPage from '../pages/coach/CoachBookingsPage';
import CoachAvailabilityPage from '../pages/coach/CoachAvailabilityPage';
import CoachReviewsPage from '../pages/coach/CoachReviewsPage';
import CoachRevenuePage from '../pages/coach/CoachRevenuePage';
import CoachSettingsPage from '../pages/coach/CoachSettingsPage';
import CoachProgramsPage from '../pages/coach/programs/CoachProgramsPage';
import CreateProgramPage from '../pages/coach/programs/CreateProgramPage';
import CoachProgramDetailsPage from '../pages/coach/programs/ProgramDetailsPage';
import EditProgramPage from '../pages/coach/programs/EditProgramPage';
import CoachCalendarPage from '../pages/coach/calendar/CoachCalendarPage';

const CoachRoutes = {
  path: '/coach',
  element: (
    <ProtectedRoute>
      <RoleRoute allowedRoles={['coach']}>
        <CoachLayout />
      </RoleRoute>
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <CoachDashboardPage /> },
    { path: 'dashboard', element: <CoachDashboardPage /> },
    { path: 'profile', element: <CoachProfilePage /> },
    { path: 'edit-profile', element: <CoachEditProfilePage /> },
    { path: 'programmes', element: <CoachProgrammesPage /> },
    { path: 'programmes/create', element: <CoachProgrammeCreatePage /> },
    { path: 'programmes/edit/:id', element: <CoachProgrammeEditPage /> },
    { path: 'programs', element: <CoachProgramsPage /> },
    { path: 'programs/create', element: <CreateProgramPage /> },
    { path: 'programs/:programId', element: <CoachProgramDetailsPage /> },
    { path: 'programs/:programId/edit', element: <EditProgramPage /> },
    { path: 'bookings', element: <CoachBookingsPage /> },
    { path: 'availability', element: <CoachAvailabilityPage /> },
    { path: 'calendar', element: <CoachCalendarPage /> },
    { path: 'reviews', element: <CoachReviewsPage /> },
    { path: 'revenue', element: <CoachRevenuePage /> },
    { path: 'settings', element: <CoachSettingsPage /> },
  ],
};

export default CoachRoutes;
