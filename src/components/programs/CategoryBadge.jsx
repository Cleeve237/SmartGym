function CategoryBadge({ category }) {
  return (
    <span className="pg-badge pg-badge--category">
      <i className="bi bi-tag" />
      {category}
    </span>
  );
}

export default CategoryBadge;
