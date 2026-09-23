const COACHES = [
  {
    id: 1, name: 'Jean-Pierre Mbarga', speciality: 'Musculation & Coaching personnel',
    city: 'Douala', district: 'Bonanjo', price: 8000, sessionMinutes: 60,
    rating: 4.9, reviewsCount: 128, clientsCount: 210, sessionsCount: 1580,
    yearsExp: 8, verified: true, bio: 'Coach sportif certifié depuis 8 ans, je me spécialise dans l\'accompagnement personnalisé en musculation et en remise en forme. Diplômé en STAPS de l\'Université de Yaoundé I, j\'ai eu l\'opportunité de travailler avec des centaines de clients aux objectifs variés : perte de poids, prise de masse, préparation physique ou bien-être général. Ma philosophie : chaque individu est unique et mérite un programme adapté à son mode de vie, ses capacités et ses ambitions.',
    specialties: ['Musculation', 'Fitness', 'Perte de poids', 'Cardio', 'Préparation physique', 'CrossFit', 'Nutrition'],
    certifications: [
      { name: 'Coach Sportif Professionnel', org: 'FFE', year: 2018 },
      { name: 'Certification CrossFit Level 1', org: 'CrossFit', year: 2019 },
      { name: 'Nutrition du Sportif', org: 'INSEP', year: 2020 },
      { name: 'Préparateur Physique', org: 'Université de Lyon', year: 2021 },
    ],
    experience: [
      { title: 'Coach indépendant SmartGym', sub: 'Création et gestion de programmes', date: '2022 - Présent' },
      { title: 'Coach salle de sport', sub: 'Neo Gym Douala', date: '2019 - 2022' },
      { title: 'Préparateur physique', sub: 'Club de football de Douala', date: '2017 - 2019' },
    ],
    education: [
      { title: 'Master STAPS', sub: 'Université de Yaoundé I' },
      { title: 'BPJEPS Activités de la Forme', sub: 'CREPS Bordeaux' },
      { title: 'Certification CrossFit Level 2', sub: 'CrossFit Africa' },
    ],
    languages: ['Français (natif)', 'Anglais (courant)', 'Duala (courant)'],
    availability: [
      { day: 'Lundi', slots: ['08:00', '09:00', '10:00', '14:00', '15:00'] },
      { day: 'Mardi', slots: ['09:00', '10:00', '16:00', '17:00'] },
      { day: 'Mercredi', slots: ['08:00', '10:00', '14:00', '17:00'] },
      { day: 'Jeudi', slots: ['09:00', '14:00', '15:00'] },
      { day: 'Vendredi', slots: ['08:00', '09:00', '16:00', '17:00', '18:00'] },
      { day: 'Samedi', slots: ['09:00', '10:00'] },
      { day: 'Dimanche', slots: [] },
    ],
    programs: [
      { id: 'p1', name: 'Musculation Fondamentale', desc: 'Programme complet 8 semaines pour débuter la musculation.', weeks: 8, sessions: '3x/sem', price: 35000 },
      { id: 'p2', name: 'Prise de Masse Intensive', desc: 'Programme 12 semaines pour maximiser la prise de masse musculaire.', weeks: 12, sessions: '4x/sem', price: 55000 },
      { id: 'p3', name: 'Perte de Poids Accélérée', desc: 'Programme HIIT 10 semaines pour brûler les graisses efficacement.', weeks: 10, sessions: '4x/sem', price: 40000 },
      { id: 'p4', name: 'Fitness & Bien-être', desc: 'Programme 6 semaines pour retrouver la forme en douceur.', weeks: 6, sessions: '3x/sem', price: 25000 },
    ],
    achievements: ['200+ clients satisfaits', '8 ans d\'expérience', 'Coach certifié FFHM', 'Expert en nutrition', 'Préparateur mental'],
    social: { facebook: '#', instagram: '#', linkedin: '#', tiktok: '#', youtube: '#', website: '#' },
    phone: '+237 677 123 456', email: 'jean.mbarga@smartgym.cm',
    reviews: [
      { id: 1, author: 'Clarisse Noubissi', city: 'Douala', rating: 5, date: 'Juin 2026', text: 'Jean est un coach exceptionnel. Grâce à ses conseils, j\'ai perdu 12 kilos en 3 mois. Je recommande vivement.' },
      { id: 2, author: 'Franck Fotso', city: 'Yaoundé', rating: 5, date: 'Mai 2026', text: 'Très professionnel et à l\'écoute. Programmes bien structurés. J\'ai gagné 5 kg de masse musculaire en 2 mois.' },
      { id: 3, author: 'Amina Bello', city: 'Douala', rating: 4, date: 'Avril 2026', text: 'Enfin un coach qui comprend mes objectifs. Séances variées, jamais ennuyeuses.' },
      { id: 4, author: 'Paul Tchinda', city: 'Bafoussam', rating: 5, date: 'Mars 2026', text: 'Je recommande pour sa patience et sa pédagogie. Même débutant, je me suis senti à l\'aise.' },
      { id: 5, author: 'Sarah Djomo', city: 'Douala', rating: 5, date: 'Février 2026', text: 'Excellent suivi nutritionnel. Il prend le temps d\'expliquer chaque mouvement.' },
      { id: 6, author: 'Marc Eyanga', city: 'Yaoundé', rating: 5, date: 'Janvier 2026', text: 'Coach hors pair. Résultats visibles dès les premières semaines. Très motivant.' },
      { id: 7, author: 'Nathalie Bikon', city: 'Douala', rating: 4, date: 'Décembre 2025', text: 'Très bon coach, séances adaptées à mon rythme. Je progresse chaque semaine.' },
      { id: 8, author: 'Joseph Mvondo', city: 'Yaoundé', rating: 5, date: 'Novembre 2025', text: 'Jean a changé ma vision du sport. Aujourd\'hui je suis accro. Merci coach !' },
    ],
    color: '#16A34A',
  },
  {
    id: 2, name: 'Carine Atangana', speciality: 'Cardio & HIIT',
    city: 'Yaoundé', district: 'Mvog-Mbi', price: 7000, sessionMinutes: 45,
    rating: 4.8, reviewsCount: 98, clientsCount: 175, sessionsCount: 1200,
    yearsExp: 6, verified: true, color: '#F97316',
    bio: 'Coach spécialisée en cardio-training et HIIT. Je vous aide à brûler des calories et améliorer votre endurance.',
    specialties: ['Cardio', 'HIIT', 'Step', 'Boxe', 'Danse fitness', 'Zumba'],
    certifications: [
      { name: 'Instructeur Fitness', org: 'ACE', year: 2019 },
      { name: 'HIIT Specialist', org: 'NASM', year: 2020 },
      { name: 'Nutrition du Sportif', org: 'INSEP', year: 2021 },
    ],
    experience: [
      { title: 'Coach SmartGym', sub: 'Création de programmes cardio', date: '2021 - Présent' },
      { title: 'Instructeur fitness', sub: 'Fitness Park Douala', date: '2019 - 2021' },
    ],
    education: [
      { title: 'Licence STAPS', sub: 'Université de Douala' },
      { title: 'BPJEPS Forme', sub: 'CREPS Lyon' },
    ],
    languages: ['Français (natif)', 'Anglais (courant)'],
    availability: [
      { day: 'Lundi', slots: ['09:00', '10:00', '14:00'] },
      { day: 'Mardi', slots: ['08:00', '09:00', '16:00'] },
      { day: 'Mercredi', slots: ['10:00', '14:00', '17:00'] },
      { day: 'Jeudi', slots: ['09:00', '15:00'] },
      { day: 'Vendredi', slots: ['08:00', '10:00', '16:00'] },
      { day: 'Samedi', slots: ['09:00', '11:00'] },
      { day: 'Dimanche', slots: [] },
    ],
    programs: [
      { id: 'p5', name: 'Cardio Intensif', desc: 'Programme 6 semaines HIIT pour brûler les graisses.', weeks: 6, sessions: '4x/sem', price: 28000 },
      { id: 'p6', name: 'Cardio Doux', desc: 'Programme 4 semaines pour débuter en cardio.', weeks: 4, sessions: '3x/sem', price: 15000 },
    ],
    achievements: ['150+ clients satisfaits', '6 ans d\'expérience', 'Spécialiste HIIT', 'Formatrice certifiée'],
    social: { facebook: '#', instagram: '#', linkedin: '#', tiktok: '#', youtube: '#', website: '#' },
    phone: '+237 698 765 432', email: 'carine.atangana@smartgym.cm',
    reviews: [
      { id: 9, author: 'David Kamga', city: 'Yaoundé', rating: 5, date: 'Avril 2026', text: 'Carine est incroyable ! J\'ai perdu 6kg en 6 semaines. Ses séances sont intensives mais efficaces.' },
      { id: 10, author: 'Aimée Tchidjui', city: 'Douala', rating: 4, date: 'Mars 2026', text: 'Excellente coach, très motivée. Les séances sont variées et jamais ennuyeuses.' },
    ],
  },
];

const COACH_FAQ = [
  { q: 'Comment réserver une séance ?', a: 'Vous pouvez réserver directement via la sidebar en choisissant votre créneau. Le coach confirme votre réservation sous 24h. Vous recevrez une confirmation par email et SMS.' },
  { q: 'Le coach se déplace-t-il à domicile ?', a: 'Cela dépend du coach et de vos besoins. Certains coaches proposent des séances à domicile, d\'autres travaillent en salle. Contactez le coach pour discuter des modalités.' },
  { q: 'Puis-je annuler une séance ?', a: 'Oui, vous pouvez annuler gratuitement jusqu\'à 24h avant la séance. Passé ce délai, la séance sera facturée. Les annulations se font depuis votre tableau de bord.' },
  { q: 'Quels moyens de paiement sont acceptés ?', a: 'Nous acceptons MTN Mobile Money, Orange Money et les cartes bancaires (Visa, Mastercard). Le paiement est sécurisé et validé après confirmation de la réservation.' },
];

function getCoachAvatar(name) {
  const initials = name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&size=128&background=16A34A&color=fff`;
}

export { COACHES, COACH_FAQ, getCoachAvatar };
