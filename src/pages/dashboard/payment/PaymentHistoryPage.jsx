import { useState } from "react";
import "../../../components/payment/Payment.css";
import PaymentHistoryCard from "../../../components/payment/PaymentHistoryCard";
import EmptyPayments from "../../../components/payment/EmptyPayments";

const MOCK_PAYMENTS = [
  {
    id: "pay-1",
    method: "MTN MoMo",
    amount: 5250,
    date: "2026-07-28T10:30:00",
    ref: "TX-7K3M9P",
    status: "success",
  },
  {
    id: "pay-2",
    method: "Orange Money",
    amount: 4725,
    date: "2026-07-20T14:15:00",
    ref: "TX-2H8N4Q",
    status: "success",
  },
  {
    id: "pay-3",
    method: "Carte bancaire",
    amount: 8400,
    date: "2026-07-12T09:00:00",
    ref: "TX-5R1W6T",
    status: "pending",
  },
  {
    id: "pay-4",
    method: "MTN MoMo",
    amount: 4200,
    date: "2026-07-05T16:45:00",
    ref: "TX-9P2L7K",
    status: "failed",
  },
  {
    id: "pay-5",
    method: "Orange Money",
    amount: 5250,
    date: "2026-06-28T11:20:00",
    ref: "TX-3M6N1R",
    status: "refunded",
  },
];

const TABS = [
  { key: "all", label: "Toutes" },
  { key: "success", label: "Réussis" },
  { key: "pending", label: "En attente" },
  { key: "failed", label: "Échoués" },
  { key: "refunded", label: "Remboursés" },
];

export default function PaymentHistoryPage() {
  const [tab, setTab] = useState("all");

  const filtered = tab === "all" ? MOCK_PAYMENTS : MOCK_PAYMENTS.filter((p) => p.status === tab);

  const totalPaid = MOCK_PAYMENTS
    .filter((p) => p.status === "success")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h5 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.25rem" }}>
          <i className="bi bi-wallet2 me-2" style={{ color: "var(--color-primary)" }} />
          Mes paiements
        </h5>
        <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-gray-500)", marginBottom: "1rem" }}>
          Consultez l&apos;historique de vos transactions
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            padding: "0.85rem 1.25rem",
            background: "var(--color-primary-lighter)",
            borderRadius: "var(--radius-xl)",
            marginBottom: "1rem",
          }}
        >
          <i className="bi bi-piggy-bank" style={{ fontSize: "1.5rem", color: "var(--color-primary)" }} />
          <div>
            <div style={{ fontSize: "var(--font-size-xs)", color: "var(--color-gray-500)" }}>
              Total payé
            </div>
            <div style={{ fontSize: "var(--font-size-xl)", fontWeight: 700, color: "var(--color-primary)" }}>
              {totalPaid.toLocaleString()} FCFA
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 flex-wrap" style={{ marginBottom: "0.5rem" }}>
          {TABS.map((t) => (
            <button
              key={t.key}
              className={`btn btn-sm ${tab === t.key ? "btn-primary" : "btn-outline-secondary"}`}
              style={{ borderRadius: "var(--radius-pill)", fontSize: "var(--font-size-xs)" }}
              onClick={() => setTab(t.key)}
            >
              {t.label}
              {t.key !== "all" && (
                <span className="ms-1 badge bg-white text-dark" style={{ fontSize: "0.65rem" }}>
                  {MOCK_PAYMENTS.filter((p) => p.status === t.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyPayments />
      ) : (
        <div>
          {filtered.map((p) => (
            <PaymentHistoryCard key={p.id} payment={p} />
          ))}
        </div>
      )}
    </div>
  );
}
