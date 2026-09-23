import CPButton from './CPButton';
import CoachFavorite from './CoachFavorite';
import CoachShare from './CoachShare';
import CoachBookingPreview from './CoachBookingPreview';
import CoachPrice from './CoachPrice';
import { Link } from 'react-router-dom';

export default function CoachSidebar({ coach }) {
  return (
    <aside className="cp-sidebar">
      <div className="cp-sticky">
        <div className="cp-card">
          <div
            className="cp-sidebar-avatar"
            style={{ background: '#16A34A' }}
          >
            <span style={{ color: '#fff', fontWeight: 700, fontSize: 26 }}>
              {coach.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
            </span>
          </div>
          <div className="cp-sidebar-name">{coach.name}</div>
          <div className="cp-sidebar-role">{coach.speciality}</div>
          <CoachPrice price={coach.price} sessionMinutes={coach.sessionMinutes} size="lg" />
          <ul className="cp-sidebar-features">
            <li className="cp-sidebar-feature"><i className="bi bi-shield-check" /> Coach vérifié SmartGym</li>
            <li className="cp-sidebar-feature"><i className="bi bi-clock" /> Sessions de {coach.sessionMinutes} min</li>
            <li className="cp-sidebar-feature"><i className="bi bi-geo-alt" /> {coach.city}, {coach.district}</li>
            <li className="cp-sidebar-feature"><i className="bi bi-chat-dots" /> Réponse sous 24h</li>
          </ul>
          <div className="cp-btn-group">
            <Link to={`/booking/${coach.id}`}>
              <CPButton variant="primary" icon="calendar-check">Réserver une séance</CPButton>
            </Link>
            <CPButton variant="outline" icon="chat-dots">Contacter le coach</CPButton>
          </div>
          <CoachBookingPreview coach={coach} />
          <div className="d-flex gap-2 justify-content-center mt-2">
            <CoachFavorite coach={coach} />
            <CoachShare />
          </div>
        </div>
      </div>
    </aside>
  );
}
