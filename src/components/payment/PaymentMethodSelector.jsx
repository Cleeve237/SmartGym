import PaymentMethodCard from "./PaymentMethodCard";

const METHODS = [
  {
    id: "momo",
    name: "Mobile Money",
    description: "Payez avec MTN MoMo ou Orange Money",
    icon: "bi-phone",
    suboptions: [
      { id: "mtn", label: "MTN MoMo" },
      { id: "orange", label: "Orange Money" },
    ],
  },
  {
    id: "card",
    name: "Carte bancaire",
    description: "Visa, Mastercard ou carte de débit",
    icon: "bi-credit-card",
  },
  {
    id: "manual",
    name: "Paiement manuel",
    description: "Virement bancaire ou paiement en espèces (UI uniquement)",
    icon: "bi-wallet2",
  },
];

export default function PaymentMethodSelector({ selected, onSelect }) {
  return (
    <div className="pay-methods" role="radiogroup" aria-label="Moyen de paiement">
      {METHODS.map((m) => (
        <PaymentMethodCard
          key={m.id}
          method={{
            ...m,
            activeSub: selected?.operator || null,
          }}
          selected={selected?.method === m.id}
          onSelect={(methodId, subId) => onSelect({ method: methodId, operator: subId || null })}
        />
      ))}
    </div>
  );
}
