export default function BookingHeader({ coach }) {
  return (
    <div className="bk-header">
      <div className="bk-header-avatar">
        {coach.photo ? (
          <img src={coach.photo} alt={coach.name} width="56" height="56" style={{ objectFit: "cover", borderRadius: "50%" }} />
        ) : (
          <i className="bi bi-person-fill" />
        )}
      </div>
      <div className="bk-header-info">
        <div className="bk-header-label">Votre coach</div>
        <div className="bk-header-name">{coach.name}</div>
        <div className="bk-header-meta">
          <span className="bk-header-stars">
            {[1, 2, 3, 4, 5].map((s) => (
              <i key={s} className={`bi ${s <= Math.floor(coach.rating) ? "bi-star-fill" : s - 0.5 <= coach.rating ? "bi-star-half" : "bi-star"}`} />
            ))}
          </span>
          <span>{coach.rating?.toFixed(1) || "5.0"}</span>
          <span><i className="bi bi-geo-alt" /> {coach.city}</span>
        </div>
      </div>
    </div>
  );
}
