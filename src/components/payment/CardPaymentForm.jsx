import { useState } from "react";

export default function CardPaymentForm({ onChange }) {
  const [form, setForm] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const update = (field, value) => {
    const next = { ...form, [field]: value };
    setForm(next);
    onChange(next);
  };

  return (
    <div className="pay-form">
      <div className="pay-card-grid">
        <div className="pay-form-row pay-form-row--full">
          <label className="pay-form-label" htmlFor="pay-card-number">
            Numéro de carte
          </label>
          <div className="pay-form-input-icon">
            <i className="bi bi-credit-card" />
            <input
              id="pay-card-number"
              className="pay-form-input"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={form.number}
              onChange={(e) => update("number", e.target.value)}
              maxLength={19}
              inputMode="numeric"
              autoComplete="cc-number"
            />
          </div>
        </div>

        <div className="pay-form-row">
          <label className="pay-form-label" htmlFor="pay-card-expiry">
            Date d&apos;expiration
          </label>
          <input
            id="pay-card-expiry"
            className="pay-form-input"
            type="text"
            placeholder="MM/AA"
            value={form.expiry}
            onChange={(e) => update("expiry", e.target.value)}
            maxLength={5}
            inputMode="numeric"
            autoComplete="cc-exp"
          />
        </div>

        <div className="pay-form-row">
          <label className="pay-form-label" htmlFor="pay-card-cvv">
            CVV
          </label>
          <div className="pay-form-input-icon">
            <i className="bi bi-lock" />
            <input
              id="pay-card-cvv"
              className="pay-form-input"
              type="password"
              placeholder="•••"
              value={form.cvv}
              onChange={(e) => update("cvv", e.target.value)}
              maxLength={4}
              inputMode="numeric"
              autoComplete="cc-csc"
            />
          </div>
        </div>

        <div className="pay-form-row pay-form-row--full">
          <label className="pay-form-label" htmlFor="pay-card-name">
            Nom du titulaire
          </label>
          <input
            id="pay-card-name"
            className="pay-form-input"
            type="text"
            placeholder="Prénom et Nom"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            autoComplete="cc-name"
          />
        </div>
      </div>
    </div>
  );
}
