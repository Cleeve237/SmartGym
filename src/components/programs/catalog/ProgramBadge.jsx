function ProgramBadge({ type, label }) {
  const map = { success: 'pc-badge--success', warning: 'pc-badge--warning', danger: 'pc-badge--danger', info: 'pc-badge--info' };
  return <span className={`pc-badge ${map[type] || map.success}`}>{label}</span>;
}
export default ProgramBadge;
