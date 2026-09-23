import ClientLayout from '../layouts/ClientLayout';
import ProtectedRoute from './ProtectedRoute';
import RoleRoute from './RoleRoute';

import ClientDashboardPage from '../pages/client/ClientDashboardPage';
import ClientProfilePage from '../pages/client/ClientProfilePage';
import ClientEditProfilePage from '../pages/client/ClientEditProfilePage';
import ClientCoachesPage from '../pages/client/ClientCoachesPage';
import ClientCoachDetailPage from '../pages/client/ClientCoachDetailPage';
import ClientProgrammesPage from '../pages/client/ClientProgrammesPage';
import ClientBookingsPage from '../pages/dashboard/bookings/MyBookingsPage';
import ClientBookingDetailPage from '../pages/client/ClientBookingDetailPage';
import ClientPaymentsPage from '../pages/dashboard/payment/PaymentHistoryPage';
import ClientHistoryPage from '../pages/client/ClientHistoryPage';
import ClientFavoritesPage from '../pages/client/ClientFavoritesPage';
import ClientNotificationsPage from '../pages/client/ClientNotificationsPage';
import ClientSettingsPage from '../pages/client/ClientSettingsPage';

const ClientRoutes = {
  path: '/client',
  element: (
    <ProtectedRoute>
      <RoleRoute allowedRoles={['client']}>
        <ClientLayout />
      </RoleRoute>
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <ClientDashboardPage /> },
    { path: 'dashboard', element: <ClientDashboardPage /> },
    { path: 'profile', element: <ClientProfilePage /> },
    { path: 'edit-profile', element: <ClientEditProfilePage /> },
    { path: 'coaches', element: <ClientCoachesPage /> },
    { path: 'coaches/:id', element: <ClientCoachDetailPage /> },
    { path: 'programmes', element: <ClientProgrammesPage /> },
    { path: 'bookings', element: <ClientBookingsPage /> },
    { path: 'bookings/:id', element: <ClientBookingDetailPage /> },
    { path: 'payments', element: <ClientPaymentsPage /> },
    { path: 'history', element: <ClientHistoryPage /> },
    { path: 'favorites', element: <ClientFavoritesPage /> },
    { path: 'notifications', element: <ClientNotificationsPage /> },
    { path: 'settings', element: <ClientSettingsPage /> },
  ],
};

export default ClientRoutes;
