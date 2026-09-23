const clientNavigation = {
  main: [
    { label: 'Accueil', path: '/', icon: 'house-door', exact: true },
    { label: 'Trouver un coach', path: '/coaches', icon: 'person-badge' },
    { label: 'Programmes', path: '/programs', icon: 'journal-text' },
  ],
  dashboard: {
    label: 'Dashboard', path: '/client/dashboard', icon: 'grid-fill',
  },
  quickActions: [
    { label: 'Réserver une séance', path: '/coaches', icon: 'calendar-check' },
    { label: 'Voir mes programmes', path: '/client/bookings', icon: 'journal-text' },
  ],
};

export default clientNavigation;
