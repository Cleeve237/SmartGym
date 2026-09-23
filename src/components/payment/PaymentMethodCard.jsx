export default function PaymentMethodCard({ method, selected, onSelect }) {
  return (
    <div
      className={`pay-method ${selected ? "pay-method--selected" : ""}`}
      onClick={() => onSelect(method.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onSelect(method.id)}
      aria-pressed={selected}
    >
      <div className="pay-method-check">
        <i className="bi bi-check-lg" />
      </div>
      <div className="pay-method-icon">
        <i className={method.icon} />
      </div>
      <div className="pay-method-info">
        <div className="pay-method-name">{method.name}</div>
        <div className="pay-method-desc">{method.description}</div>
        {method.suboptions && (
          <div className="pay-method-suboptions">
            {method.suboptions.map((sub) => (
              <button
                key={sub.id}
                className={`pay-suboption ${method.activeSub === sub.id ? "pay-suboption--active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(method.id, sub.id);
                }}
                type="button"
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
