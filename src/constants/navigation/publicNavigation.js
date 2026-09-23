const publicNavigation = {
  main: [
    { label: 'Accueil', path: '/', icon: 'house-door', exact: true },
    { label: 'Trouver un coach', path: '/coaches', icon: 'person-badge' },
    {
      label: 'Programmes', path: '/programs', icon: 'journal-text',
      megaMenu: true,
      sections: [
        {
          title: 'Populaires',
          links: [
            { label: 'Musculation', path: '/programs/catalog?category=musculation' },
            { label: 'Cardio', path: '/programs/catalog?category=cardio' },
            { label: 'HIIT', path: '/programs/catalog?category=hiit' },
            { label: 'Yoga', path: '/programs/catalog?category=yoga' },
          ],
        },
        {
          title: 'Objectifs',
          links: [
            { label: 'Perte de poids', path: '/programs/catalog?goal=weight-loss' },
            { label: 'Prise de masse', path: '/programs/catalog?goal=mass-gain' },
            { label: 'Bien-être', path: '/programs/catalog?goal=wellness' },
            { label: 'Performance', path: '/programs/catalog?goal=performance' },
          ],
        },
        {
          title: 'Niveaux',
          links: [
            { label: 'Débutant', path: '/programs/catalog?level=beginner' },
            { label: 'Intermédiaire', path: '/programs/catalog?level=intermediate' },
            { label: 'Avancé', path: '/programs/catalog?level=advanced' },
          ],
        },
        {
          title: 'Liens rapides',
          links: [
            { label: 'Tous les programmes', path: '/programs/catalog' },
            { label: 'Programmes populaires', path: '/programs/catalog?sort=popular' },
            { label: 'Nouveautés', path: '/programs/catalog?sort=newest' },
          ],
        },
      ],
    },
    { label: 'À propos', path: '/about', icon: 'info-circle' },
    { label: 'FAQ', path: '/faq', icon: 'question-circle' },
    { label: 'Contact', path: '/contact', icon: 'envelope' },
  ],
  cta: { label: 'Trouver mon coach', path: '/coaches' },
};

export default publicNavigation;
