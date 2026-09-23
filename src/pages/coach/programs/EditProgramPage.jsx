import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../../../components/coach/programs/ProgramsManagement.css';
import ProgramForm from '../../../components/coach/programs/ProgramForm';
import PublishProgramCard from '../../../components/coach/programs/PublishProgramCard';

const MOCK_PROGRAMS = {
  '1': {
    id: '1', title: 'Musculation Fondamentale', category: 'Musculation', difficulty: 'debutant',
    shortDescription: 'Programme complet pour developing la force et la masse musculaire.',
    description: 'Programme complet pour developing la force et la masse musculaire. Ideal pour les debutants.',
    price: 35000, weeks: 8, sessionsPerWeek: 3, sessionDuration: 60, totalSessions: 24,
    currency: 'FCFA', mainObjective: 'Developper la force et la masse musculaire',
    objectives: ['Developper la force musculaire globale', 'Apprendre les mouvements fondamentaux', 'Construire une base solide'],
    results: ['+4kg de masse musculaire', 'Augmentation de 30% de force'],
    exercises: [
      { name: 'Squat barre', duration: '15 min', reps: '4 series de 10', description: 'Exercice polyarticulaire' },
      { name: 'Developpe couche', duration: '12 min', reps: '4 series de 12', description: 'Exercice de base pectoraux' },
      { name: 'Souleve de terre', duration: '15 min', reps: '3 series de 8', description: 'Chaine posterieure' },
    ],
    scheduleNote: 'Lundi, Mercredi, Vendredi — 18h a 19h',
    faqs: [{ question: 'Faut-il de l\'experience ?', answer: 'Non, programme pour debutants.' }],
    images: [], visible: true,
  },
};

function EditProgramPage() {
  const { programId } = useParams();
  const program = MOCK_PROGRAMS[programId] || {
    id: programId, title: '', category: '', difficulty: '', shortDescription: '', description: '',
    price: 0, weeks: 8, sessionsPerWeek: 3, sessionDuration: 60, totalSessions: 24, currency: 'FCFA',
    mainObjective: '', objectives: [], results: [], exercises: [],
    scheduleNote: '', faqs: [], images: [], visible: false,
  };

  const [visible, setVisible] = useState(program.visible || false);
  const [images, setImages] = useState(program.images || []);

  const handleImageAdd = () => {
    setImages((prev) => [...prev, { name: `Image ${prev.length + 1}`, url: null }]);
  };

  const handleImageRemove = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="cd-programs-header">
        <div className="cd-programs-header-left">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: 'var(--font-size-sm)' }}>
              <li className="breadcrumb-item"><Link to="/coach/programs">Mes Programmes</Link></li>
              <li className="breadcrumb-item"><Link to={`/coach/programs/${programId}`}>{program.title || 'Programme'}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Modifier</li>
            </ol>
          </nav>
          <h1>Modifier le programme</h1>
          <p>Mettez a jour les informations de votre programme.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.25rem', alignItems: 'start' }}>
        <form onSubmit={handleSubmit}>
          <ProgramForm
            errors={{}}
            images={images}
            onImageAdd={handleImageAdd}
            onImageRemove={handleImageRemove}
            visible={visible}
            onVisibleToggle={setVisible}
          />
          <div className="cd-pgm-form-actions">
            <Link to={`/coach/programs/${programId}`} className="btn btn-outline-secondary">
              Annuler
            </Link>
            <button type="submit" className="btn btn-primary">
              <i className="bi bi-check-lg me-2" />
              Enregistrer les modifications
            </button>
          </div>
        </form>

        <div className="cd-pgm-detail-sidebar">
          <PublishProgramCard visible={visible} onToggle={setVisible} />
        </div>
      </div>
    </div>
  );
}

export default EditProgramPage;
