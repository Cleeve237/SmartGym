import { createBrowserRouter } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';
import ClientRoutes from './ClientRoutes';
import CoachRoutes from './CoachRoutes';
import AdminRoutes from './AdminRoutes';
import ForbiddenPage from '../pages/system/ForbiddenPage';
import NotFoundPage from '../pages/system/NotFoundPage';
import MaintenancePage from '../pages/system/MaintenancePage';
import ComingSoonPage from '../pages/system/ComingSoonPage';
import OfflinePage from '../pages/system/OfflinePage';

const router = createBrowserRouter([
  PublicRoutes,
  ClientRoutes,
  CoachRoutes,
  AdminRoutes,
  {
    path: '/access-denied',
    element: <ForbiddenPage />,
  },
  {
    path: '/maintenance',
    element: <MaintenancePage />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoonPage />,
  },
  {
    path: '/offline',
    element: <OfflinePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
