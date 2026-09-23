import { useState } from "react";
import "../../../components/booking/Booking.css";
import BookingCard from "../../../components/booking/BookingCard";
import EmptyBookings from "../../../components/booking/EmptyBookings";
import BookingStatusBadge from "../../../components/booking/BookingStatusBadge";

const MOCK_BOOKINGS = [
  {
    id: "b1",
    coachName: "Marc Bella",
    coachPhoto: null,
    programName: "Musculation",
    date: "2026-07-28T10:00:00",
    time: "10:00",
    price: 5000,
    status: "confirmed",
  },
  {
    id: "b2",
    coachName: "Sophie Kamga",
    coachPhoto: null,
    programName: "Yoga & Flexibilité",
    date: "2026-08-02T16:00:00",
    time: "16:00",
    price: 4500,
    status: "pending",
  },
  {
    id: "b3",
    coachName: "Jean Mbarga",
    coachPhoto: null,
    programName: "Cardio & HIIT",
    date: "2026-07-15T08:00:00",
    time: "08:00",
    price: 4000,
    status: "completed",
  },
  {
    id: "b4",
    coachName: "Marc Bella",
    coachPhoto: null,
    programName: "Coaching Personnel",
    date: "2026-07-10T14:00:00",
    time: "14:00",
    price: 8000,
    status: "cancelled",
  },
];

const TABS = [
  { key: "all", label: "Toutes" },
  { key: "confirmed", label: "Confirmées" },
  { key: "pending", label: "En attente" },
  { key: "completed", label: "Terminées" },
  { key: "cancelled", label: "Annulées" },
];

export default function MyBookingsPage() {
  const [tab, setTab] = useState("all");

  const filtered = tab === "all" ? MOCK_BOOKINGS : MOCK_BOOKINGS.filter((b) => b.status === tab);

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h5 style={{ fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.25rem" }}>
          <i className="bi bi-calendar-check me-2" style={{ color: "var(--color-primary)" }} />
          Mes réservations
        </h5>
        <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-gray-500)", marginBottom: "1rem" }}>
          Gérez vos séances passées et à venir
        </p>

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
                  {MOCK_BOOKINGS.filter((b) => b.status === t.key).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <EmptyBookings />
      ) : (
        <div>
          {filtered.map((b) => (
            <BookingCard key={b.id} booking={b} />
          ))}
        </div>
      )}
    </div>
  );
}
