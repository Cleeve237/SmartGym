import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../../components/booking/Booking.css";
import BookingStepper from "../../components/booking/BookingStepper";
import BookingHeader from "../../components/booking/BookingHeader";
import ProgramSelector from "../../components/booking/ProgramSelector";
import DateSelector from "../../components/booking/DateSelector";
import TimeSlotSelector from "../../components/booking/TimeSlotSelector";
import BookingSummary from "../../components/booking/BookingSummary";
import BookingPriceCard from "../../components/booking/BookingPriceCard";
import BookingActions from "../../components/booking/BookingActions";

const STEPS = [
  { label: "Programme", icon: "bi-tag" },
  { label: "Date", icon: "bi-calendar" },
  { label: "Heure", icon: "bi-clock" },
  { label: "Résumé", icon: "bi-check-circle" },
];

const MOCK_COACH = {
  id: "coach-1",
  name: "Marc Bella",
  city: "Douala",
  rating: 4.9,
  photo: null,
};

const MOCK_PROGRAMS = [
  { id: "p1", name: "Musculation", description: "Séance de musculation complète ciblant le renforcement musculaire et l'endurance.", duration: 60, price: 5000, level: "Tous niveaux" },
  { id: "p2", name: "Cardio & HIIT", description: "Entraînement cardio intensif pour brûler les graisses et améliorer votre condition.", duration: 45, price: 4000, level: "Intermédiaire" },
  { id: "p3", name: "Yoga & Flexibilité", description: "Séance de yoga pour améliorer la flexibilité, le bien-être et la récupération.", duration: 60, price: 4500, level: "Débutant" },
  { id: "p4", name: "Coaching Personnel", description: "Programme sur mesure adapté à vos objectifs avec un suivi personnalisé.", duration: 90, price: 8000, level: "Tous niveaux" },
];

const TIME_SLOTS = [
  { time: "08:00", label: "Matin" },
  { time: "10:00", label: "Matin" },
  { time: "12:00", label: "Midi" },
  { time: "14:00", label: "Après-midi" },
  { time: "16:00", label: "Après-midi" },
  { time: "18:00", label: "Soir" },
  { time: "09:00", label: "Matin", disabled: true },
  { time: "20:00", label: "Soir", disabled: true },
];

export default function BookingPage() {
  const { coachId } = useParams();
  const [step, setStep] = useState(0);
  const [program, setProgram] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [loading, setLoading] = useState(false);

  const coach = MOCK_COACH;

  const canNext = () => {
    if (step === 0) return !!program;
    if (step === 1) return !!date;
    if (step === 2) return !!time;
    return true;
  };

  const handleNext = () => {
    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        window.location.href = `/booking/${coachId}/confirmation`;
      }, 1200);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="bk-widget">
            <div className="bk-widget-header">
              <div className="bk-widget-title"><i className="bi bi-tag" /> Choisissez votre programme</div>
            </div>
            <div className="bk-widget-body">
              <ProgramSelector programs={MOCK_PROGRAMS} selectedProgram={program} onSelect={setProgram} />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="bk-widget">
            <div className="bk-widget-header">
              <div className="bk-widget-title"><i className="bi bi-calendar3" /> Sélectionnez une date</div>
            </div>
            <div className="bk-widget-body">
              <DateSelector selectedDate={date} onSelect={setDate} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="bk-widget">
            <div className="bk-widget-header">
              <div className="bk-widget-title"><i className="bi bi-clock" /> Choisissez un créneau</div>
            </div>
            <div className="bk-widget-body">
              <TimeSlotSelector slots={TIME_SLOTS} selectedTime={time} onSelect={setTime} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="bk-widget">
            <div className="bk-widget-header">
              <div className="bk-widget-title"><i className="bi bi-clipboard-check" /> Résumé de la réservation</div>
            </div>
            <div className="bk-widget-body">
              <BookingSummary coach={coach} program={program} date={date} time={time} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bk-page">
      <div className="bk-container">
        <BookingStepper steps={STEPS} currentStep={step} />

        <BookingHeader coach={coach} />

        <div className="bk-layout">
          <div className="bk-main">
            {renderStep()}
            <BookingActions
              step={step}
              totalSteps={STEPS.length}
              onBack={handleBack}
              onNext={handleNext}
              canNext={canNext()}
              loading={loading}
            />
          </div>
          <div className="bk-sidebar">
            <BookingPriceCard program={program} />
          </div>
        </div>
      </div>
    </div>
  );
}
