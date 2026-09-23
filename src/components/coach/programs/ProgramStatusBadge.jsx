function ProgramStatusBadge({ status }) {
  const map = {
    active: { label: 'Active', className: 'cd-pgm-status--active' },
    draft: { label: 'Brouillon', className: 'cd-pgm-status--draft' },
    inactive: { label: 'Inactive', className: 'cd-pgm-status--inactive' },
  };

  const config = map[status] || map.draft;

  return (
    <span className={`cd-pgm-status ${config.className}`}>
      <span className="cd-pgm-status-dot" aria-hidden="true" />
      {config.label}
    </span>
  );
}

export default ProgramStatusBadge;
