export const MENUS = {
  client: [
    { label: 'Accueil', path: '/', icon: 'bi-house' },
    { label: 'Marketplace', path: '/coaches', icon: 'bi-people' },
    { label: 'Programmes', path: '/programs', icon: 'bi-trophy' },
    { label: 'Mes r\u00e9servations', path: '/client/bookings', icon: 'bi-calendar-check', auth: true },
    { label: 'Mes paiements', path: '/client/payments', icon: 'bi-credit-card', auth: true },
    { label: 'Mon profil', path: '/client/profile', icon: 'bi-person', auth: true },
    { label: 'Tableau de bord', path: '/client/dashboard', icon: 'bi-grid', auth: true },
  ],
  coach: [
    { label: 'Tableau de bord', path: '/coach/dashboard', icon: 'bi-grid', auth: true },
    { label: 'Mes programmes', path: '/coach/programs', icon: 'bi-trophy', auth: true },
    { label: 'Calendrier', path: '/coach/calendar', icon: 'bi-calendar-week', auth: true },
    { label: 'Disponibilit\u00e9s', path: '/coach/availability', icon: 'bi-clock', auth: true },
    { label: 'Mes clients', path: '/coach/dashboard', icon: 'bi-people', auth: true },
    { label: 'Avis', path: '/coach/dashboard', icon: 'bi-star', auth: true },
    { label: 'Revenus', path: '/coach/dashboard', icon: 'bi-currency-exchange', auth: true },
    { label: 'Mon profil', path: '/coach/profile', icon: 'bi-person', auth: true },
  ],
  admin: [
    { label: 'Tableau de bord', path: '/admin/dashboard', icon: 'bi-grid', auth: true },
    { label: 'Utilisateurs', path: '/admin/users', icon: 'bi-people', auth: true },
    { label: 'Coachs', path: '/admin/coaches', icon: 'bi-person-badge', auth: true },
    { label: 'Programmes', path: '/admin/dashboard', icon: 'bi-trophy', auth: true },
    { label: 'R\u00e9servations', path: '/admin/dashboard', icon: 'bi-calendar-check', auth: true },
    { label: 'Paiements', path: '/admin/dashboard', icon: 'bi-credit-card', auth: true },
    { label: 'Rapports', path: '/admin/reports', icon: 'bi-graph-up', auth: true },
    { label: 'Param\u00e8tres', path: '/admin/dashboard', icon: 'bi-gear', auth: true },
  ],
  super_admin: [
    { label: 'Tableau de bord', path: '/admin/dashboard', icon: 'bi-grid', auth: true },
    { label: 'Utilisateurs', path: '/admin/users', icon: 'bi-people', auth: true },
    { label: 'Coachs', path: '/admin/coaches', icon: 'bi-person-badge', auth: true },
    { label: 'Rapports', path: '/admin/reports', icon: 'bi-graph-up', auth: true },
    { label: 'Param\u00e8tres syst\u00e8me', path: '/admin/dashboard', icon: 'bi-gear-wide', auth: true },
  ],
};

export function getMenuForRole(role, isAuthenticated = false) {
  const menu = MENUS[role] || MENUS.client;
  if (isAuthenticated) return menu;
  return menu.filter((item) => !item.auth);
}

export const PUBLIC_MENU = [
  { label: 'Accueil', path: '/', icon: 'bi-house' },
  { label: 'Coachs', path: '/coaches', icon: 'bi-people' },
  { label: 'Programmes', path: '/programs', icon: 'bi-trophy' },
  { label: '\u00c0 propos', path: '/about', icon: 'bi-info-circle' },
  { label: 'Contact', path: '/contact', icon: 'bi-envelope' },
  { label: 'FAQ', path: '/faq', icon: 'bi-question-circle' },
];
