const MOCK_REVIEWS = [
  { id: 1, author: 'Marie Ngo', city: 'Douala', rating: 5, date: '15 Mars 2026', text: 'Programme très bien structuré. Le coach est excellent, très pédagogue. J\'ai vu des résultats dès la 3e semaine. Je recommande vivement à tous les débutants.' },
  { id: 2, author: 'Paul Nkomo', city: 'Yaoundé', rating: 4, date: '28 Février 2026', text: 'Bon programme pour débuter. Les explications sont claires et le coach est toujours disponible pour répondre aux questions. Le suivi est personnalisé.' },
  { id: 3, author: 'Sandrine Fotsing', city: 'Douala', rating: 5, date: '10 Janvier 2026', text: 'J\'ai gagné 4kg de masse musculaire en 8 semaines. Le plan nutritionnel est un vrai plus. Coach au top !' },
  { id: 4, author: 'David Kamga', city: 'Bafoussam', rating: 5, date: '1 Avril 2026', text: 'Programme très intense mais très efficace. J\'ai perdu 6kg en 6 semaines. Le coaching est exceptionnel.' },
  { id: 5, author: 'Aimée Tchidjui', city: 'Douala', rating: 4, date: '20 Mars 2026', text: 'Excellente coach, très motivée. Les séances sont variées et jamais ennuyeuses. On progresse sans s\'en rendre compte.' },
  { id: 6, author: 'Hélène Mbida', city: 'Yaoundé', rating: 5, date: '10 Avril 2026', text: 'Une expérience incroyable. Les cours sont apaisants et très bien guidés. Je recommande à 100%.' },
  { id: 7, author: 'Thierry Bella', city: 'Douala', rating: 5, date: '5 Mars 2026', text: 'J\'avais des douleurs chroniques au dos. Après 8 semaines, c\'est beaucoup mieux. Le programme a changé ma vie.' },
  { id: 8, author: 'Olivier Ngoumou', city: 'Yaoundé', rating: 5, date: '14 Février 2026', text: 'Le meilleur programme que j\'ai suivi. Le coach connaît son métier. J\'ai battu tous mes records personnels.' },
  { id: 9, author: 'Franck Messi', city: 'Douala', rating: 4, date: '28 Mars 2026', text: 'Très bon cours. Le coach est très patient. Le sport est addictif ! Les séances sont bien rythmées.' },
  { id: 10, author: 'Cynthia Bella', city: 'Yaoundé', rating: 5, date: '5 Avril 2026', text: 'Le meilleur cours de danse de Douala ! Le coach est incroyable, on s\'amuse tout en brûlant des calories.' },
];

const MOCK_FAQ = [
  { q: 'Combien de séances par semaine ?', a: 'Le programme propose 3 à 5 séances par semaine selon le niveau. Chaque séance dure entre 45 et 90 minutes. Vous pouvez adapter le rythme selon vos disponibilités.' },
  { q: 'Puis-je arrêter le programme en cours de route ?', a: 'Oui, vous pouvez annuler à tout moment. Nous offrons une garantie satisfait ou remboursé sous 7 jours. Passé ce délai, vous pouvez suspendre votre programme à tout moment.' },
  { q: 'Quel matériel est nécessaire ?', a: 'Le matériel dépend du programme choisi. Pour la musculation : des haltères et un banc sont recommandés. Pour le yoga : un tapis suffit. La liste complète est fournie avant le début.' },
  { q: 'Y a-t-il une garantie remboursement ?', a: 'Oui, nous proposons une garantie satisfait ou remboursé intégralement sous 7 jours. Si le programme ne vous convient pas, contactez notre support pour un remboursement sans frais.' },
  { q: 'L\'accès au programme est-il à vie ?', a: 'L\'accès au programme est valable pendant toute la durée définie (généralement 8 à 12 semaines). Vous conservez l\'accès aux contenus PDF et vidéos après la fin du programme.' },
  { q: 'Puis-je changer de coach en cours de programme ?', a: 'Oui, si vous le souhaitez, vous pouvez demander un changement de coach. Nous vous trouverons un coach adapté à vos besoins dans les plus brefs délais.' },
];

function getCoachImage(name) {
  const initials = name.split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase();
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&size=128&background=16A34A&color=fff`;
}

function getProgramColor(id) {
  const colors = ['#16A34A','#F97316','#8B5CF6','#DC2626','#2563EB','#EC4899','#06B6D4','#F43F5E','#7C3AED','#0EA5E9'];
  return colors[(id - 1) % colors.length];
}

export { MOCK_REVIEWS, MOCK_FAQ, getCoachImage, getProgramColor };
