import BookingStatusBadge from "./BookingStatusBadge";

export default function BookingCard({ booking }) {
  const fmtDate = new Date(booking.date).toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="bk-card">
      <div className="bk-card-avatar">
        {booking.coachPhoto ? (
          <img src={booking.coachPhoto} alt="" width="48" height="48" style={{ borderRadius: "var(--radius-lg)", objectFit: "cover" }} />
        ) : (
          <i className="bi bi-person-fill" />
        )}
      </div>
      <div className="bk-card-info">
        <div className="bk-card-top">
          <span className="bk-card-coach">{booking.coachName}</span>
          <BookingStatusBadge status={booking.status} />
        </div>
        <div className="bk-card-details">
          <span><i className="bi bi-tag" /> {booking.programName}</span>
          <span><i className="bi bi-calendar3" /> {fmtDate}</span>
          <span><i className="bi bi-clock" /> {booking.time}</span>
        </div>
      </div>
      <div className="bk-card-price">{booking.price?.toLocaleString()} FCFA</div>
    </div>
  );
}
