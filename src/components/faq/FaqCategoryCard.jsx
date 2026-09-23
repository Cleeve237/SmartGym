function FaqCategoryCard({ category }) {
  return (
    <a
      href={`#${category.id}`}
      className="fq-category-card"
      aria-label={`${category.name} — ${category.count} questions`}
    >
      <div className="fq-category-icon" style={{ backgroundColor: category.iconBg }}>
        <i className={`bi ${category.icon}`} style={{ color: category.iconColor, fontSize: '1.2rem' }} aria-hidden="true" />
      </div>
      <div className="fq-category-name">{category.name}</div>
      <div className="fq-category-count">{category.count} questions</div>
    </a>
  );
}

export default FaqCategoryCard;
