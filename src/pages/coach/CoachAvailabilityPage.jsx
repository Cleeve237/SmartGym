import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../components/coach/calendar/Calendar.css';
import AvailabilityForm from '../../components/coach/calendar/AvailabilityForm';
import AvailabilityList from '../../components/coach/calendar/AvailabilityList';
import DeleteAvailabilityModal from '../../components/coach/calendar/DeleteAvailabilityModal';

const MOCK_AVAILABILITIES = [
  { id: 'a1', type: 'available', status: 'available', title: 'Musculation & Strength', date: 'Lundi', time: '08:00 - 12:00', duration: '4h', location: 'Salle A' },
  { id: 'a2', type: 'break', status: 'break', title: 'Pause dejeuner', date: 'Lundi', time: '12:00 - 13:00', duration: '1h', location: '' },
  { id: 'a3', type: 'available', status: 'available', title: 'Cardio & HIIT', date: 'Lundi', time: '13:00 - 18:00', duration: '5h', location: 'Salle B' },
  { id: 'a4', type: 'available', status: 'available', title: 'Coaching Personnel', date: 'Mardi', time: '09:00 - 17:00', duration: '8h', location: 'Salle A' },
  { id: 'a5', type: 'unavailable', status: 'blocked', title: 'Indisponible', date: 'Mercredi', time: 'Toute la journee', duration: '-', location: '' },
  { id: 'a6', type: 'available', status: 'available', title: 'Yoga & Bien-etre', date: 'Jeudi', time: '08:00 - 12:00', duration: '4h', location: 'Studio Yoga' },
  { id: 'a7', type: 'break', status: 'break', title: 'Pause dejeuner', date: 'Jeudi', time: '12:00 - 13:00', duration: '1h', location: '' },
  { id: 'a8', type: 'available', status: 'available', title: 'CrossFit', date: 'Vendredi', time: '14:00 - 19:00', duration: '5h', location: 'Salle C' },
];

function CoachAvailabilityPage() {
  const [availabilities, setAvailabilities] = useState(MOCK_AVAILABILITIES);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const handleDelete = () => {
    if (deleteTarget) {
      setAvailabilities((prev) => prev.filter((a) => a.id !== deleteTarget.id));
      setDeleteTarget(null);
    }
  };

  const available = availabilities.filter((a) => a.type === 'available');
  const other = availabilities.filter((a) => a.type !== 'available');

  return (
    <div>
      <div className="cd-cal-header">
        <div className="cd-cal-header-left">
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="breadcrumb" style={{ fontSize: 'var(--font-size-sm)' }}>
              <li className="breadcrumb-item"><Link to="/coach/calendar">Calendrier</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Disponibilites</li>
            </ol>
          </nav>
          <h1>Gestion des disponibilites</h1>
          <p>Configurez vos horaires et creneaux de travail.</p>
        </div>
        <Link to="/coach/calendar" className="btn btn-outline-primary btn-sm">
          <i className="bi bi-calendar me-1" /> Voir le calendrier
        </Link>
      </div>

      <div className="cd-cal-layout">
        <div>
          <AvailabilityForm />

          <div style={{ marginTop: '1.25rem' }}>
            <h3 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 'var(--font-weight-semibold)', color: 'var(--color-secondary)', marginBottom: '0.85rem' }}>
              <i className="bi bi-clock text-primary me-2" />
              Creneaux configures ({availabilities.length})
            </h3>
            {available.length > 0 && (
              <div style={{ marginBottom: '1rem' }}>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Disponibles
                </p>
                <AvailabilityList availabilities={available} onDelete={setDeleteTarget} />
              </div>
            )}
            {other.length > 0 && (
              <div>
                <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
                  Autres
                </p>
                <AvailabilityList availabilities={other} onDelete={setDeleteTarget} />
              </div>
            )}
          </div>
        </div>

        <aside className="cd-cal-sidebar">
          <div className="cd-cal-widget">
            <div className="cd-cal-widget-header">
              <div className="cd-cal-widget-title">
                <i className="bi bi-bar-chart" />
                Resume
              </div>
            </div>
            <div className="cd-cal-widget-body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-success)' }}>{available.length}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Disponibles</div>
                </div>
                <div>
                  <div style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 700, color: 'var(--color-gray-500)' }}>{other.length}</div>
                  <div style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-gray-500)' }}>Autres</div>
                </div>
              </div>
            </div>
          </div>

          <div className="cd-cal-widget">
            <div className="cd-cal-widget-header">
              <div className="cd-cal-widget-title">
                <i className="bi bi-info-circle" />
                Aide
              </div>
            </div>
            <div className="cd-cal-widget-body" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-gray-600)' }}>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Disponible :</strong> Creneau ouvert pour les reservations clients.
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                <strong>Indisponible :</strong> Periode bloquee, aucune reservation possible.
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Pause :</strong> Pause courte (dejeuner, repos).
              </p>
            </div>
          </div>
        </aside>
      </div>

      <DeleteAvailabilityModal
        show={!!deleteTarget}
        onClose={() => setDeleteTarget(null)}
        onConfirm={handleDelete}
        availability={deleteTarget}
      />
    </div>
  );
}

export default CoachAvailabilityPage;
