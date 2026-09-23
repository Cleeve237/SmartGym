const adminNavigation = {
  main: [],
  dashboard: {
    label: 'Dashboard', path: '/admin/dashboard', icon: 'speedometer2',
  },
  links: [
    { label: 'Dashboard', path: '/admin/dashboard', icon: 'speedometer2' },
    { label: 'Utilisateurs', path: '/admin/users', icon: 'people' },
    { label: 'Coachs', path: '/admin/coaches', icon: 'person-badge' },
    { label: 'Programmes', path: '/admin/programs', icon: 'journal-text' },
    { label: 'Réservations', path: '/admin/bookings', icon: 'calendar-check' },
    { label: 'Paiements', path: '/admin/payments', icon: 'credit-card' },
    { label: 'Rapports', path: '/admin/reports', icon: 'graph-up' },
    { label: 'Paramètres', path: '/admin/settings', icon: 'gear' },
  ],
  quickActions: [
    { label: 'Ajouter un coach', path: '/admin/coaches/create', icon: 'person-plus' },
    { label: 'Nouveau programme', path: '/admin/programs/create', icon: 'plus-circle' },
  ],
};

export default adminNavigation;
