import { useState } from "react";

export default function MobileMoneyForm({ onChange }) {
  const [phone, setPhone] = useState("");
  const [operator, setOperator] = useState("mtn");

  const handlePhone = (e) => {
    setPhone(e.target.value);
    onChange({ phone: e.target.value, operator });
  };

  const handleOperator = (op) => {
    setOperator(op);
    onChange({ phone, operator: op });
  };

  return (
    <div className="pay-form">
      <div className="pay-form-row">
        <label className="pay-form-label" htmlFor="pay-phone">
          Numéro de téléphone
        </label>
        <div className="pay-form-input-icon">
          <i className="bi bi-phone" />
          <input
            id="pay-phone"
            className="pay-form-input"
            type="tel"
            placeholder="6XX XXX XXX"
            value={phone}
            onChange={handlePhone}
            autoComplete="tel"
            inputMode="numeric"
          />
        </div>
        <span className="pay-form-hint">
          Entrez le numéro associé à votre compte Mobile Money.
        </span>
      </div>

      <div className="pay-form-row">
        <label className="pay-form-label">Opérateur</label>
        <div className="pay-operator-group" role="radiogroup" aria-label="Opérateur mobile">
          <button
            type="button"
            className={`pay-operator-btn ${operator === "mtn" ? "pay-operator-btn--active" : ""}`}
            onClick={() => handleOperator("mtn")}
            aria-pressed={operator === "mtn"}
          >
            <span className="pay-operator-dot pay-operator-dot--mtn" />
            MTN MoMo
          </button>
          <button
            type="button"
            className={`pay-operator-btn ${operator === "orange" ? "pay-operator-btn--active" : ""}`}
            onClick={() => handleOperator("orange")}
            aria-pressed={operator === "orange"}
          >
            <span className="pay-operator-dot pay-operator-dot--orange" />
            Orange Money
          </button>
        </div>
      </div>
    </div>
  );
}
