function FaqItem({ item, index, parent }) {
  const itemId = `${parent}-${index}`;

  return (
    <div className="fq-item">
      <h3 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${itemId}`}
          aria-expanded="false"
          aria-controls={itemId}
        >
          <span className="fq-item-icon">
            <i className="bi bi-chevron-down" />
          </span>
          <span className="flex-grow-1">{item.question}</span>
        </button>
      </h3>
      <div
        id={itemId}
        className="accordion-collapse collapse"
        data-bs-parent={`#${parent}-accordion`}
      >
        <div className="fq-item-body">
          <p>{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
