export default function CoachBookingPreview({ coach }) {
  return (
    <div className="cp-booking-summary">
      <p className="fw-semibold mb-2" style={{ fontSize: '.8rem' }}>Récapitulatif</p>
      <div className="cp-booking-row">
        <span className="cp-booking-label">Durée séance</span>
        <span className="cp-booking-value">{coach.sessionMinutes} min</span>
      </div>
      <div className="cp-booking-row">
        <span className="cp-booking-label">Prix séance</span>
        <span className="cp-booking-value">{coach.price.toLocaleString()} FCFA</span>
      </div>
      <div className="cp-booking-row">
        <span className="cp-booking-label">Coach</span>
        <span className="cp-booking-value">{coach.name}</span>
      </div>
    </div>
  );
}
