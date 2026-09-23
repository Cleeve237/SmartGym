import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import StepNavigation from './StepNavigation';
import PersonalInfoStep from './PersonalInfoStep';
import ProfessionalInfoStep from './ProfessionalInfoStep';
import DisciplinesStep from './DisciplinesStep';
import PricingStep from './PricingStep';
import AvailabilityStep from './AvailabilityStep';
import BiographyStep from './BiographyStep';
import ProfilePhotoStep from './ProfilePhotoStep';
import ReviewStep from './ReviewStep';
import './CoachRegister.css';

const TOTAL_STEPS = 8;

const initialData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  password: '',
  confirmPassword: '',
  experience: '',
  qualification: '',
  certifications: '',
  workLocation: '',
  disciplines: [],
  priceMin: '',
  priceMax: '',
  sessionDuration: '',
  availability: {
    lundi: [],
    mardi: [],
    mercredi: [],
    jeudi: [],
    vendredi: [],
    samedi: [],
    dimanche: [],
  },
  biography: '',
  photoPreview: null,
  photoName: null,
};

const initialErrors = {};

function CoachRegisterWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (prev[field]) {
        const next = { ...prev };
        delete next[field];
        return next;
      }
      return prev;
    });
  }, []);

  const validateCurrentStep = useCallback(() => {
    const newErrors = {};

    if (currentStep === 0) {
      if (!data.firstName.trim()) newErrors.firstName = 'Le prenom est requis';
      if (!data.lastName.trim()) newErrors.lastName = 'Le nom est requis';
      if (!data.email.trim()) newErrors.email = "L'email est requis";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Email invalide';
      if (!data.phone.trim()) newErrors.phone = 'Le telephone est requis';
      if (!data.city.trim()) newErrors.city = 'La ville est requise';
      if (!data.password) newErrors.password = 'Le mot de passe est requis';
      else if (data.password.length < 8) newErrors.password = '8 caracteres minimum';
      if (data.password !== data.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    if (currentStep === 1) {
      if (!data.experience) newErrors.experience = "L'experience est requise";
      if (!data.qualification.trim()) newErrors.qualification = 'La qualification est requise';
    }

    if (currentStep === 2) {
      if (!data.disciplines || data.disciplines.length === 0) {
        newErrors.disciplines = 'Selectionnez au moins une discipline';
      }
    }

    if (currentStep === 3) {
      if (!data.priceMin) newErrors.priceMin = 'Le prix minimum est requis';
      else if (isNaN(Number(data.priceMin))) newErrors.priceMin = 'Doit etre un nombre';
      if (!data.priceMax) newErrors.priceMax = 'Le prix maximum est requis';
      else if (isNaN(Number(data.priceMax))) newErrors.priceMax = 'Doit etre un nombre';
      if (data.priceMin && data.priceMax && Number(data.priceMin) > Number(data.priceMax)) {
        newErrors.priceMax = 'Le prix max doit etre superieur au prix min';
      }
      if (!data.sessionDuration) newErrors.sessionDuration = 'La duree est requise';
    }

    if (currentStep === 4) {
      const hasAny = Object.values(data.availability).some((slots) => slots.length > 0);
      if (!hasAny) newErrors.availability = 'Indiquez vos disponibilites';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [currentStep, data]);

  const handleNext = useCallback(() => {
    if (!validateCurrentStep()) return;
    if (currentStep === TOTAL_STEPS - 1) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000);
      return;
    }
    setCurrentStep((prev) => prev + 1);
  }, [currentStep, validateCurrentStep]);

  const handlePrev = useCallback(() => {
    setCurrentStep((prev) => prev - 1);
  }, []);

  const goToStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  const stepProps = { data, errors, onChange: handleChange };

  return (
    <div className="cr-page">
      <div className="cr-topbar">
        <div className="cr-topbar-inner">
          <Link to="/" className="cr-logo">
            <div className="cr-logo-icon">
              <i className="bi bi-lightning-charge-fill" />
            </div>
            <span className="cr-logo-text">SmartGym</span>
          </Link>
          <Link to="/" className="cr-quit">
            <i className="bi bi-x-lg" />
            Quitter
          </Link>
        </div>
      </div>

      <div className="cr-wizard">
        <div className="cr-wizard-card">
          <StepIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />

          <div className="cr-step-content">
            {currentStep === 0 && <PersonalInfoStep {...stepProps} />}
            {currentStep === 1 && <ProfessionalInfoStep {...stepProps} />}
            {currentStep === 2 && <DisciplinesStep {...stepProps} />}
            {currentStep === 3 && <PricingStep {...stepProps} />}
            {currentStep === 4 && <AvailabilityStep {...stepProps} />}
            {currentStep === 5 && <BiographyStep {...stepProps} />}
            {currentStep === 6 && <ProfilePhotoStep {...stepProps} />}
            {currentStep === 7 && <ReviewStep data={data} goToStep={goToStep} />}
          </div>

          <StepNavigation
            currentStep={currentStep}
            totalSteps={TOTAL_STEPS}
            onPrev={handlePrev}
            onNext={handleNext}
            isSubmitting={isSubmitting}
          />
        </div>
      </div>
    </div>
  );
}

export default CoachRegisterWizard;
