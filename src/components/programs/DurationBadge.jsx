function DurationBadge({ weeks }) {
  return (
    <span className="pg-badge pg-badge--duration">
      <i className="bi bi-calendar3" />
      {weeks} sem.
    </span>
  );
}

export default DurationBadge;
