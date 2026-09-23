import { useParams, Link } from 'react-router-dom';
import '../../../components/coach/programs/ProgramsManagement.css';
import ProgramStatusBadge from '../../../components/coach/programs/ProgramStatusBadge';
import ProgramStatistics from '../../../components/coach/programs/ProgramStatistics';

const MOCK_PROGRAMS = {
  '1': {
    id: '1', title: 'Musculation Fondamentale', category: 'Musculation', difficulty: 'debutant',
    price: 35000, weeks: 8, sessionsPerWeek: 3, sessionDuration: 60, totalSessions: 24,
    status: 'active', bookings: 42, rating: 4.8, reviewCount: 35, createdAt: '15 Jan 2026',
    description: 'Programme complet pour developing la force et la masse musculaire. Ideal pour les debutants souhaitant acquerir de solides bases.',
    mainObjective: 'Developper la force et la masse musculaire',
    objectives: ['Developper la force musculaire globale', 'Apprendre les mouvements fondamentaux', 'Construire une base solide', 'Ameliorer la composition corporelle'],
    results: ['+4kg de masse musculaire en 8 semaines', 'Augmentation de 30% de force sur les mouvements de base', 'Reduction de 5% de masse grasse'],
    exercises: [
      { name: 'Squat barre', duration: '15 min', reps: '4 series de 10', description: 'Exercice polyarticulaire pour les jambes et le fessier' },
      { name: 'Developpe couche', duration: '12 min', reps: '4 series de 12', description: 'Exercice de base pour les pectoraux' },
      { name: 'Souleve de terre', duration: '15 min', reps: '3 series de 8', description: 'Exercice complet pour la chaine postérieure' },
      { name: 'Rowing barre', duration: '10 min', reps: '4 series de 12', description: 'Developpement du dos et des biceps' },
    ],
    schedule: { sessionsPerWeek: 3, sessionDuration: 60, scheduleNote: 'Lundi, Mercredi, Vendredi — 18h a 19h' },
    faqs: [
      { question: 'Faut-il une experience en musculation ?', answer: 'Non, ce programme est concu pour les debutants.' },
      { question: 'Quel materiel est necessaire ?', answer: 'Un acces a une salle de musculation avec barre et haltères.' },
    ],
    images: [],
    stats: { views: 1250, bookings: 42, conversion: 3.4, rating: 4.8 },
  },
};

const DEFAULT = {
  id: '', title: 'Programme', category: 'Musculation', difficulty: 'debutant',
  price: 0, weeks: 8, sessionsPerWeek: 3, sessionDuration: 60, totalSessions: 24,
  status: 'draft', bookings: 0, rating: 0, reviewCount: 0, createdAt: '—',
  description: 'Description du programme.',
  mainObjective: '',
  objectives: [], results: [], exercises: [],
  schedule: { sessionsPerWeek: 3, sessionDuration: 60, scheduleNote: '' },
  faqs: [], images: [],
  stats: { views: 0, bookings: 0, conversion: 0, rating: 0 },
};

function ProgramDetailsPage() {
  const { programId } = useParams();
  const program = MOCK_PROGRAMS[programId] || { ...DEFAULT, id: programId };

  return (
    <div>
      <div className="cd-programs-header">
        <div className="cd-programs-header-left">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: 'var(--font-size-sm)' }}>
              <li className="breadcrumb-item"><Link to="/coach/programs">Mes Programmes</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{program.title}</li>
            </ol>
          </nav>
          <h1>{program.title}</h1>
        </div>
        <div className="d-flex gap-2">
          <Link to={`/coach/programs/${programId}/edit`} className="btn btn-outline-primary btn-sm">
            <i className="bi bi-pencil me-1" /> Modifier
          </Link>
          <Link to="/coach/programs" className="btn btn-outline-secondary btn-sm">
            <i className="bi bi-arrow-left me-1" /> Retour
          </Link>
        </div>
      </div>

      <ProgramStatistics stats={program.stats} />

      <div className="cd-pgm-detail-grid" style={{ marginTop: '1.25rem' }}>
        <div>
          <div className="cd-pgm-detail-section">
            <div className="cd-pgm-detail-section-header">
              <h2 className="cd-pgm-detail-section-title">
                <i className="bi bi-info-circle" /> Informations
              </h2>
            </div>
            <div className="cd-pgm-detail-section-body">
              <div className="d-flex align-items-center gap-2 mb-3">
                <ProgramStatusBadge status={program.status} />
                <span className="cd-pgm-diff cd-pgm-diff--beginner">
                  <i className="bi bi-heart" /> {program.difficulty}
                </span>
                <span className="cd-pgm-status" style={{ background: 'var(--color-primary-lighter)', color: 'var(--color-primary)' }}>
                  {program.category}
                </span>
              </div>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: 'var(--line-height-relaxed)' }}>
                {program.description}
              </p>
              <div className="row mt-3" style={{ fontSize: 'var(--font-size-sm)' }}>
                <div className="col-6 col-md-3 mb-2"><strong className="d-block text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Prix</strong><span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{program.price?.toLocaleString()} FCFA</span></div>
                <div className="col-6 col-md-3 mb-2"><strong className="d-block text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Duree</strong>{program.weeks} semaines</div>
                <div className="col-6 col-md-3 mb-2"><strong className="d-block text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Seances</strong>{program.totalSessions} seances</div>
                <div className="col-6 col-md-3 mb-2"><strong className="d-block text-muted" style={{ fontSize: 'var(--font-size-xs)' }}>Duree / seance</strong>{program.sessionDuration} min</div>
              </div>
            </div>
          </div>

          {program.objectives.length > 0 && (
            <div className="cd-pgm-detail-section">
              <div className="cd-pgm-detail-section-header">
                <h2 className="cd-pgm-detail-section-title"><i className="bi bi-bullseye" /> Objectifs</h2>
              </div>
              <div className="cd-pgm-detail-section-body">
                <ul className="cd-pgm-detail-obj-list">
                  {program.objectives.map((obj, i) => (
                    <li key={i} className="cd-pgm-detail-obj-item">
                      <div className="cd-pgm-detail-obj-icon"><i className="bi bi-check-lg" /></div>
                      <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-700)' }}>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {program.exercises.length > 0 && (
            <div className="cd-pgm-detail-section">
              <div className="cd-pgm-detail-section-header">
                <h2 className="cd-pgm-detail-section-title"><i className="bi bi-list-check" /> Exercices</h2>
              </div>
              <div className="cd-pgm-detail-section-body">
                {program.exercises.map((ex, i) => (
                  <div key={i} className="cd-pgm-detail-exercise">
                    <div className="cd-pgm-exercise-number">{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-secondary)', fontSize: 'var(--font-size-sm)' }}>{ex.name}</div>
                      <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>
                        {ex.duration} &middot; {ex.reps}
                      </div>
                      {ex.description && <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-600)', marginTop: '0.2rem' }}>{ex.description}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {program.faqs.length > 0 && (
            <div className="cd-pgm-detail-section">
              <div className="cd-pgm-detail-section-header">
                <h2 className="cd-pgm-detail-section-title"><i className="bi bi-question-circle" /> FAQ</h2>
              </div>
              <div className="cd-pgm-detail-section-body">
                {program.faqs.map((faq, i) => (
                  <div key={i} className="mb-3" style={{ borderBottom: i < program.faqs.length - 1 ? '1px solid var(--color-gray-100)' : 'none', paddingBottom: '0.75rem' }}>
                    <div style={{ fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-secondary)', fontSize: 'var(--font-size-sm)', marginBottom: '0.25rem' }}>
                      <i className="bi bi-question-circle text-primary me-1" />{faq.question}
                    </div>
                    <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="cd-pgm-detail-sidebar">
          <div className="cd-pgm-publish">
            <div className="cd-pgm-publish-title"><i className="bi bi-bar-chart" /> Statistiques</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-secondary)' }}>{program.stats.views}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Vues</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-secondary)' }}>{program.stats.bookings}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Reservations</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-secondary)' }}>{program.stats.conversion}%</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Conversion</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, color: 'var(--color-secondary)' }}>{program.stats.rating?.toFixed(1) || '—'}</div>
                <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Note</div>
              </div>
            </div>
          </div>

          <div className="cd-pgm-publish">
            <div className="cd-pgm-publish-title"><i className="bi bi-calendar" /> Planning</div>
            <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
              <div className="mb-2"><strong>Frequence :</strong> {program.sessionsPerWeek}x / semaine</div>
              <div className="mb-2"><strong>Duree :</strong> {program.sessionDuration} min / seance</div>
              <div><strong>Horaires :</strong> {program.schedule.scheduleNote || 'A definir'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgramDetailsPage;
