import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../components/payment/Payment.css";
import PaymentHeader from "../../components/payment/PaymentHeader";
import BookingSummaryCard from "../../components/payment/BookingSummaryCard";
import PaymentMethodSelector from "../../components/payment/PaymentMethodSelector";
import MobileMoneyForm from "../../components/payment/MobileMoneyForm";
import CardPaymentForm from "../../components/payment/CardPaymentForm";
import PaymentSummary from "../../components/payment/PaymentSummary";
import PaymentButton from "../../components/payment/PaymentButton";

const MOCK_BOOKING = {
  coachName: "Marc Bella",
  programName: "Musculation",
  date: "2026-07-28T10:00:00",
  time: "10:00",
  duration: 60,
  price: 5000,
};

export default function PaymentPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState({ method: null, operator: null });
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const subtotal = MOCK_BOOKING.price;
  const fee = Math.round(subtotal * 0.05);
  const total = subtotal + fee;

  const canPay = () => {
    if (!paymentMethod.method) return false;
    if (paymentMethod.method === "momo") {
      return formData.phone && formData.phone.length >= 9;
    }
    if (paymentMethod.method === "card") {
      return (
        formData.number &&
        formData.number.length >= 16 &&
        formData.expiry &&
        formData.cvv &&
        formData.name
      );
    }
    return true;
  };

  const handlePay = () => {
    setLoading(true);
    const success = Math.random() > 0.3;
    setTimeout(() => {
      navigate(success ? "/payment/success" : "/payment/failure");
    }, 1500);
  };

  return (
    <div className="pay-page">
      <div className="pay-container">
        <PaymentHeader />

        <div className="pay-layout">
          <div className="pay-main">
            <div className="pay-widget">
              <div className="pay-widget-header">
                <div className="pay-widget-title">
                  <i className="bi bi-receipt" /> Résumé de la réservation
                </div>
              </div>
              <div className="pay-widget-body">
                <BookingSummaryCard booking={MOCK_BOOKING} />
              </div>
            </div>

            <div className="pay-widget">
              <div className="pay-widget-header">
                <div className="pay-widget-title">
                  <i className="bi bi-wallet2" /> Moyen de paiement
                </div>
              </div>
              <div className="pay-widget-body">
                <PaymentMethodSelector
                  selected={paymentMethod}
                  onSelect={setPaymentMethod}
                />
              </div>
            </div>

            {paymentMethod.method === "momo" && (
              <div className="pay-widget">
                <div className="pay-widget-header">
                  <div className="pay-widget-title">
                    <i className="bi bi-phone" /> Informations Mobile Money
                  </div>
                </div>
                <div className="pay-widget-body">
                  <MobileMoneyForm onChange={setFormData} />
                </div>
              </div>
            )}

            {paymentMethod.method === "card" && (
              <div className="pay-widget">
                <div className="pay-widget-header">
                  <div className="pay-widget-title">
                    <i className="bi bi-credit-card" /> Informations de la carte
                  </div>
                </div>
                <div className="pay-widget-body">
                  <CardPaymentForm onChange={setFormData} />
                </div>
              </div>
            )}

            {paymentMethod.method === "manual" && (
              <div className="pay-widget">
                <div className="pay-widget-header">
                  <div className="pay-widget-title">
                    <i className="bi bi-info-circle" /> Instructions de paiement
                  </div>
                </div>
                <div className="pay-widget-body">
                  <p style={{ fontSize: "var(--font-size-sm)", color: "var(--color-gray-600)", lineHeight: 1.6, margin: 0 }}>
                    Effectuez un virement bancaire ou un paiement en espèces directement à votre coach.
                    Votre réservation sera confirmée manuellement après vérification du paiement.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pay-sidebar">
            <div className="pay-widget" style={{ position: "sticky", top: "calc(var(--navbar-height) + 1rem)" }}>
              <div className="pay-widget-header">
                <div className="pay-widget-title">
                  <i className="bi bi-calculator" /> Récapitulatif du paiement
                </div>
              </div>
              <div className="pay-widget-body">
                <PaymentSummary subtotal={subtotal} fee={fee} total={total} />
                <PaymentButton
                  loading={loading}
                  disabled={!canPay()}
                  onClick={handlePay}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
