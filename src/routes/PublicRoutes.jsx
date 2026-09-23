import PublicLayout from '../layouts/PublicLayout';
import GuestRoute from './GuestRoute';

import HomePage from '../pages/public/HomePage';
import CoachMarketplacePage from '../pages/coaches/CoachMarketplacePage';
import CoachProfilePage from '../pages/public/CoachProfilePage';
import ProgrammesPage from '../pages/public/ProgrammesPage';
import ProgrammeDetailPage from '../pages/public/ProgrammeDetailPage';
import ProgramsLandingPage from '../pages/public/ProgramsLandingPage';
import ProgramsPage from '../pages/programs/ProgramsPage';
import ProgramsCatalogPage from '../pages/public/ProgramsCatalogPage';
import ProgramDetailsPage from '../pages/public/ProgramDetailsPage';
import AboutPage from '../pages/public/AboutPage';
import ContactPage from '../pages/public/ContactPage';
import FaqPage from '../pages/public/FaqPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import ForgotPasswordPage from '../pages/auth/ForgotPasswordPage';
import ResetPasswordPage from '../pages/auth/ResetPasswordPage';
import CoachRegisterPage from '../pages/auth/CoachRegisterPage';
import PasswordResetSuccessPage from '../pages/auth/PasswordResetSuccessPage';
import ClientRegisterPage from '../pages/auth/ClientRegisterPage';
import EmailSentPage from '../pages/auth/EmailSentPage';
import VerifyEmailPage from '../pages/auth/VerifyEmailPage';
import VerifyPhonePage from '../pages/auth/VerifyPhonePage';
import ResetSuccessPage from '../pages/auth/ResetSuccessPage';
import BookingPage from '../pages/booking/BookingPage';
import BookingConfirmationPage from '../pages/booking/BookingConfirmationPage';
import PaymentPage from '../pages/payment/PaymentPage';
import PaymentSuccessPage from '../pages/payment/PaymentSuccessPage';
import PaymentFailurePage from '../pages/payment/PaymentFailurePage';

const PublicRoutes = {
  path: '/',
  element: <PublicLayout />,
  children: [
    { index: true, element: <HomePage /> },
    { path: 'coaches', element: <CoachMarketplacePage /> },
    { path: 'coaches/:id', element: <CoachProfilePage /> },
    { path: 'programmes', element: <ProgrammesPage /> },
    { path: 'programmes/:id', element: <ProgrammeDetailPage /> },
    { path: 'programs', element: <ProgramsLandingPage /> },
    { path: 'programs/catalogue', element: <ProgramsPage /> },
    { path: 'programs/catalog', element: <ProgramsCatalogPage /> },
    { path: 'programs/:programId', element: <ProgramDetailsPage /> },
    { path: 'about', element: <AboutPage /> },
    { path: 'contact', element: <ContactPage /> },
    { path: 'faq', element: <FaqPage /> },
    { path: 'booking/:coachId', element: <BookingPage /> },
    { path: 'booking/:coachId/confirmation', element: <BookingConfirmationPage /> },
    { path: 'payment', element: <PaymentPage /> },
    { path: 'payment/success', element: <PaymentSuccessPage /> },
    { path: 'payment/failure', element: <PaymentFailurePage /> },
    {
      element: <GuestRoute />,
      children: [
        { path: 'login', element: <LoginPage /> },
        { path: 'register', element: <RegisterPage /> },
        { path: 'register/client', element: <ClientRegisterPage /> },
        { path: 'register/coach', element: <CoachRegisterPage /> },
        { path: 'forgot-password', element: <ForgotPasswordPage /> },
        { path: 'reset-password', element: <ResetPasswordPage /> },
        { path: 'password-reset-success', element: <PasswordResetSuccessPage /> },
        { path: 'reset-success', element: <ResetSuccessPage /> },
        { path: 'email-sent', element: <EmailSentPage /> },
        { path: 'verify-email', element: <VerifyEmailPage /> },
        { path: 'verify-phone', element: <VerifyPhonePage /> },
      ],
    },
  ],
};

export default PublicRoutes;
