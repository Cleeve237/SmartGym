import AdminLayout from '../layouts/AdminLayout';
import ProtectedRoute from './ProtectedRoute';
import RoleRoute from './RoleRoute';

import AdminDashboardPage from '../pages/admin/AdminDashboardPage';
import AdminUsersPage from '../pages/admin/AdminUsersPage';
import AdminCoachesPage from '../pages/admin/AdminCoachesPage';
import AdminProgrammesPage from '../pages/admin/AdminProgrammesPage';
import AdminBookingsPage from '../pages/admin/AdminBookingsPage';
import AdminPaymentsPage from '../pages/admin/AdminPaymentsPage';
import AdminCategoriesPage from '../pages/admin/AdminCategoriesPage';
import AdminStatisticsPage from '../pages/admin/AdminStatisticsPage';
import AdminSettingsPage from '../pages/admin/AdminSettingsPage';

const AdminRoutes = {
  path: '/admin',
  element: (
    <ProtectedRoute>
      <RoleRoute allowedRoles={['admin']}>
        <AdminLayout />
      </RoleRoute>
    </ProtectedRoute>
  ),
  children: [
    { index: true, element: <AdminDashboardPage /> },
    { path: 'dashboard', element: <AdminDashboardPage /> },
    { path: 'users', element: <AdminUsersPage /> },
    { path: 'coaches', element: <AdminCoachesPage /> },
    { path: 'programmes', element: <AdminProgrammesPage /> },
    { path: 'bookings', element: <AdminBookingsPage /> },
    { path: 'payments', element: <AdminPaymentsPage /> },
    { path: 'categories', element: <AdminCategoriesPage /> },
    { path: 'statistics', element: <AdminStatisticsPage /> },
    { path: 'settings', element: <AdminSettingsPage /> },
  ],
};

export default AdminRoutes;
