import { Link } from 'react-router-dom';

const DISCIPLINE_LABELS = {
  musculation: 'Musculation',
  fitness: 'Fitness',
  yoga: 'Yoga',
  crossfit: 'CrossFit',
  cardio: 'Cardio',
  boxe: 'Boxe',
  pilates: 'Pilates',
  'perte-de-poids': 'Perte de poids',
};

const DAY_LABELS = {
  lundi: 'Lundi',
  mardi: 'Mardi',
  mercredi: 'Mercredi',
  jeudi: 'Jeudi',
  vendredi: 'Vendredi',
  samedi: 'Samedi',
  dimanche: 'Dimanche',
};

function ReviewStep({ data, goToStep }) {
  const hasDisciplines = data.disciplines && data.disciplines.length > 0;
  const availabilityEntries = data.availability
    ? Object.entries(data.availability).filter(([, slots]) => slots.length > 0)
    : [];

  return (
    <div>
      <div className="cr-step-header">
        <h2 className="cr-step-title">Verifiez votre profil</h2>
        <p className="cr-step-subtitle">
          Assurez-vous que toutes les informations sont correctes avant de creer votre profil.
        </p>
      </div>

      {/* Photo */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Photo de profil</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(6)}>
            Modifier
          </button>
        </div>
        {data.photoPreview ? (
          <img src={data.photoPreview} alt="Photo de profil" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover' }} />
        ) : (
          <span className="cr-review-value--empty">Aucune photo</span>
        )}
      </div>

      {/* Infos personnelles */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Informations personnelles</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(0)}>
            Modifier
          </button>
        </div>
        <div className="cr-review-grid">
          <div className="cr-review-item">
            <span className="cr-review-label">Prenom</span>
            <span className="cr-review-value">{data.firstName || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Nom</span>
            <span className="cr-review-value">{data.lastName || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Email</span>
            <span className="cr-review-value">{data.email || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Ville</span>
            <span className="cr-review-value">{data.city || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
        </div>
      </div>

      {/* Infos pro */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Parcours professionnel</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(1)}>
            Modifier
          </button>
        </div>
        <div className="cr-review-grid">
          <div className="cr-review-item">
            <span className="cr-review-label">Experience</span>
            <span className="cr-review-value">{data.experience || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Qualification</span>
            <span className="cr-review-value">{data.qualification || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Certifications</span>
            <span className="cr-review-value">{data.certifications || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Lieu d&apos;exercice</span>
            <span className="cr-review-value">{data.workLocation || <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
        </div>
      </div>

      {/* Disciplines */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Disciplines</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(2)}>
            Modifier
          </button>
        </div>
        {hasDisciplines ? (
          <div className="cr-review-tags">
            {data.disciplines.map((d) => (
              <span key={d} className="cr-review-tag">{DISCIPLINE_LABELS[d] || d}</span>
            ))}
          </div>
        ) : (
          <span className="cr-review-value--empty">Aucune discipline selectionnee</span>
        )}
      </div>

      {/* Tarification */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Tarification</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(3)}>
            Modifier
          </button>
        </div>
        <div className="cr-review-grid">
          <div className="cr-review-item">
            <span className="cr-review-label">Prix min</span>
            <span className="cr-review-value">{data.priceMin ? `${data.priceMin} FCFA` : <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Prix max</span>
            <span className="cr-review-value">{data.priceMax ? `${data.priceMax} FCFA` : <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
          <div className="cr-review-item">
            <span className="cr-review-label">Duree seance</span>
            <span className="cr-review-value">{data.sessionDuration ? `${data.sessionDuration} min` : <span className="cr-review-value--empty">Non renseigne</span>}</span>
          </div>
        </div>
      </div>

      {/* Disponibilites */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Disponibilites</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(4)}>
            Modifier
          </button>
        </div>
        {availabilityEntries.length > 0 ? (
          <div className="cr-review-availability">
            {availabilityEntries.map(([day, slots]) => (
              <span key={day} className="cr-review-avail-tag">
                {DAY_LABELS[day] || day} : {slots.join(', ')}
              </span>
            ))}
          </div>
        ) : (
          <span className="cr-review-value--empty">Aucune disponibilite renseignee</span>
        )}
      </div>

      {/* Bio */}
      <div className="cr-review-section">
        <div className="cr-review-section-header">
          <h3 className="cr-review-section-title">Presentation</h3>
          <button type="button" className="cr-review-edit-btn" onClick={() => goToStep(5)}>
            Modifier
          </button>
        </div>
        {data.biography ? (
          <div className="cr-review-bio">{data.biography}</div>
        ) : (
          <span className="cr-review-value--empty">Aucune presentation</span>
        )}
      </div>

      <div style={{ marginTop: '1.5rem', padding: '0.75rem', background: 'var(--color-primary-lighter)', borderRadius: 'var(--radius-md)', fontSize: 'var(--font-size-sm)', color: 'var(--color-primary)' }}>
        <i className="bi bi-info-circle" /> En cliquant sur &quot;Creer mon profil de coach&quot;, vous acceptez les{' '}
        <Link to="/conditions" style={{ color: 'var(--color-primary)', fontWeight: 'var(--font-weight-semibold)' }}>
          conditions d&apos;utilisation
        </Link>.
      </div>
    </div>
  );
}

export default ReviewStep;
