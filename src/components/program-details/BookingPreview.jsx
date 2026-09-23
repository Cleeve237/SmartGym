function BookingPreview({ program }) {
  return (
    <div>
      <p style={{fontSize:'.8rem',fontWeight:600,color:'var(--color-gray-500)',marginBottom:'.5rem'}}>Réservation</p>
      <div className="pd-preview">
        <div className="pd-preview-item">
          <span className="pd-preview-label">Programme</span>
          <span className="pd-preview-value">{program.title}</span>
        </div>
        <div className="pd-preview-item">
          <span className="pd-preview-label">Coach</span>
          <span className="pd-preview-value">{program.coachName || program.coach}</span>
        </div>
        <div className="pd-preview-item">
          <span className="pd-preview-label">Durée</span>
          <span className="pd-preview-value">{program.weeks} sem.</span>
        </div>
        <div className="pd-preview-item">
          <span className="pd-preview-label">Séances</span>
          <span className="pd-preview-value">{program.sessionsPerWeek * program.weeks}</span>
        </div>
        <div className="pd-preview-item">
          <span className="pd-preview-label">Total</span>
          <span className="pd-preview-value">{program.price?.toLocaleString()} FCFA</span>
        </div>
      </div>
      <button className="pd-btn pd-btn--primary">
        <i className="bi bi-calendar-check" /> Réserver maintenant
      </button>
    </div>
  );
}
export default BookingPreview;
