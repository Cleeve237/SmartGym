const coachNavigation = {
  main: [],
  dashboard: {
    label: 'Tableau de bord', path: '/coach/dashboard', icon: 'speedometer2',
  },
  links: [
    { label: 'Dashboard', path: '/coach/dashboard', icon: 'speedometer2' },
    { label: 'Calendrier', path: '/coach/calendar', icon: 'calendar-week' },
    { label: 'Disponibilités', path: '/coach/availability', icon: 'clock' },
    { label: 'Programmes', path: '/coach/programs', icon: 'journal-text' },
    { label: 'Clients', path: '/coach/clients', icon: 'people' },
    { label: 'Messages', path: '/coach/messages', icon: 'chat-dots' },
  ],
  quickActions: [
    { label: 'Nouveau programme', path: '/coach/programs/create', icon: 'plus-circle' },
    { label: 'Définir disponibilités', path: '/coach/availability', icon: 'clock' },
  ],
};

export default coachNavigation;
