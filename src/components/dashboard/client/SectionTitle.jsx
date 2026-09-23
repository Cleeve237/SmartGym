function SectionTitle({ icon, title, subtitle, action }) {
  return (
    <div className="dash-section-title">
      <div>
        <h2>
          {icon && <i className={`bi ${icon}`} />}
          {title}
        </h2>
        {subtitle && <p>{subtitle}</p>}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}

export default SectionTitle;
