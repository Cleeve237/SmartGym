export default function BookingSummaryCard({ booking }) {
  const fmtDate = booking.date
    ? new Date(booking.date).toLocaleDateString("fr-FR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "—";

  return (
    <div className="pay-booking-summary">
      <div className="pay-booking-row">
        <span className="pay-booking-label">
          <i className="bi bi-person" /> Coach
        </span>
        <span className="pay-booking-value">{booking.coachName || "—"}</span>
      </div>
      <div className="pay-booking-row">
        <span className="pay-booking-label">
          <i className="bi bi-tag" /> Programme
        </span>
        <span className="pay-booking-value">{booking.programName || "—"}</span>
      </div>
      <div className="pay-booking-row">
        <span className="pay-booking-label">
          <i className="bi bi-calendar" /> Date
        </span>
        <span className="pay-booking-value">{fmtDate}</span>
      </div>
      <div className="pay-booking-row">
        <span className="pay-booking-label">
          <i className="bi bi-clock" /> Heure
        </span>
        <span className="pay-booking-value">{booking.time || "—"}</span>
      </div>
      {booking.duration && (
        <div className="pay-booking-row">
          <span className="pay-booking-label">
            <i className="bi bi-hourglass-split" /> Durée
          </span>
          <span className="pay-booking-value">{booking.duration} min</span>
        </div>
      )}
      <div className="pay-booking-row">
        <span className="pay-booking-label">
          <i className="bi bi-cash" /> Prix
        </span>
        <span className="pay-booking-value" style={{ color: "var(--color-primary)", fontWeight: 700 }}>
          {booking.price?.toLocaleString()} FCFA
        </span>
      </div>
    </div>
  );
}
