export default function BookingSummary({ coach, program, date, time }) {
  const fmtDate = date
    ? new Date(date).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "—";

  return (
    <div className="bk-summary">
      <div className="bk-summary-row">
        <span className="bk-summary-label"><i className="bi bi-person" /> Coach</span>
        <span className="bk-summary-value">{coach?.name || "—"}</span>
      </div>
      <div className="bk-summary-row">
        <span className="bk-summary-label"><i className="bi bi-tag" /> Programme</span>
        <span className="bk-summary-value">{program?.name || "—"}</span>
      </div>
      <div className="bk-summary-row">
        <span className="bk-summary-label"><i className="bi bi-calendar" /> Date</span>
        <span className="bk-summary-value">{fmtDate}</span>
      </div>
      <div className="bk-summary-row">
        <span className="bk-summary-label"><i className="bi bi-clock" /> Heure</span>
        <span className="bk-summary-value">{time || "—"}</span>
      </div>
      {program?.duration && (
        <div className="bk-summary-row">
          <span className="bk-summary-label"><i className="bi bi-hourglass-split" /> Durée</span>
          <span className="bk-summary-value">{program.duration} min</span>
        </div>
      )}
    </div>
  );
}
