import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CoachProfileSchema,
  sportOptions,
  cityOptions,
} from '../../utils/validators/profileSchemas';
import ProfileForm from '../../components/profile/ProfileForm';
import AvatarUploader from '../../components/profile/AvatarUploader';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import '../../components/profile/Profile.css';

const MOCK_COACH = {
  firstName: 'Patrick',
  lastName: 'Njoya',
  phone: '+237 677 987 654',
  city: 'Yaounde',
  avatar: null,
  bio: 'Coach sportif certifie avec 8 ans d\'experience en preparation physique. Specialise en musculation, cardio et remise en forme.',
  experience: 8,
  specialties: ['Musculation', 'Cardio & HIIT', 'CrossFit'],
  languages: ['Francais', 'Anglais'],
  pricePerSession: 15000,
  sessionDuration: 60,
};

const LANGUAGE_OPTIONS = [
  { value: 'Francais', label: 'Francais' },
  { value: 'Anglais', label: 'Anglais' },
  { value: 'Ewondo', label: 'Ewondo' },
  { value: 'Duala', label: 'Duala' },
];

const DURATION_OPTIONS = [
  { value: 30, label: '30 min' },
  { value: 45, label: '45 min' },
  { value: 60, label: '60 min' },
  { value: 90, label: '90 min' },
  { value: 120, label: '120 min' },
];

function EditCoachProfilePage() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(MOCK_COACH.avatar);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(CoachProfileSchema),
    defaultValues: {
      firstName: MOCK_COACH.firstName,
      lastName: MOCK_COACH.lastName,
      phone: MOCK_COACH.phone,
      city: MOCK_COACH.city,
      bio: MOCK_COACH.bio,
      experience: MOCK_COACH.experience,
      specialties: MOCK_COACH.specialties,
      languages: MOCK_COACH.languages,
      pricePerSession: MOCK_COACH.pricePerSession,
      sessionDuration: MOCK_COACH.sessionDuration,
    },
  });

  const selectedSpecialties = watch('specialties') || [];
  const selectedLanguages = watch('languages') || [];

  const toggleArrayField = (field, value) => {
    const current = watch(field) || [];
    if (current.includes(value)) {
      setValue(field, current.filter((v) => v !== value), { shouldValidate: true });
    } else {
      setValue(field, [...current, value], { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Coach profile updated:', data);
    navigate('/coach/profile');
  };

  return (
    <div className="prf-page">
      <div className="prf-container">
        <Link to="/coach/profile" className="prf-back">
          <i className="bi bi-arrow-left" />
          Retour au profil
        </Link>

        <h1
          className="mb-4"
          style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 'var(--font-weight-bold)',
            color: 'var(--color-secondary)',
          }}
        >
          Modifier mon profil coach
        </h1>

        <ProfileForm
          onSubmit={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          onCancel={() => navigate('/coach/profile')}
        >
          {/* ── Avatar ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-camera" />
              Photo de profil
            </div>
            <div className="text-center py-3">
              <AvatarUploader
                src={avatar}
                onChange={(file) => setAvatar(URL.createObjectURL(file))}
                firstName={watch('firstName')}
                lastName={watch('lastName')}
              />
            </div>
          </div>

          {/* ── Personal Info ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-person" />
              Informations personnelles
            </div>
            <div className="prf-form-row">
              <Input
                label="Prenom"
                error={errors.firstName?.message}
                {...register('firstName')}
              />
              <Input
                label="Nom"
                error={errors.lastName?.message}
                {...register('lastName')}
              />
            </div>
            <div className="prf-form-row">
              <Input
                label="Telephone"
                icon="bi-telephone"
                error={errors.phone?.message}
                {...register('phone')}
              />
              <Select
                label="Ville"
                options={cityOptions}
                placeholder="Selectionnez une ville"
                error={errors.city?.message}
                {...register('city')}
              />
            </div>
          </div>

          {/* ── Bio ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-person-lines-fill" />
              Biographie
            </div>
            <div className="mb-3">
              <label htmlFor="coach-bio" className="form-label">
                Decrivez-vous en quelques lignes
              </label>
              <textarea
                id="coach-bio"
                className={`form-control ${errors.bio ? 'is-invalid' : ''}`}
                rows={4}
                placeholder="Coach sportif certifie, specialise en..."
                maxLength={1000}
                {...register('bio')}
              />
              {errors.bio && (
                <div className="invalid-feedback d-block">{errors.bio.message}</div>
              )}
              <div className="form-text">
                {(watch('bio') || '').length}/1000 caracteres
              </div>
            </div>
          </div>

          {/* ── Experience ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-compass" />
              Experience & parcours
            </div>
            <div className="prf-form-row">
              <Input
                label="Annees d'experience"
                type="number"
                min={0}
                max={50}
                icon="bi-clock-history"
                error={errors.experience?.message}
                {...register('experience', { valueAsNumber: true })}
              />
              <div className="mb-3">
                <label className="form-label">Langues</label>
                <div className="prf-tags">
                  {LANGUAGE_OPTIONS.map((lang) => (
                    <button
                      key={lang.value}
                      type="button"
                      className={`prf-tag ${selectedLanguages.includes(lang.value) ? 'prf-tag--active' : ''}`}
                      onClick={() => toggleArrayField('languages', lang.value)}
                      aria-pressed={selectedLanguages.includes(lang.value)}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Specialties ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-stars" />
              Specialites
            </div>
            <div className="prf-tags">
              {sportOptions.map((sport) => (
                <button
                  key={sport.value}
                  type="button"
                  className={`prf-tag ${selectedSpecialties.includes(sport.value) ? 'prf-tag--active' : ''}`}
                  onClick={() => toggleArrayField('specialties', sport.value)}
                  aria-pressed={selectedSpecialties.includes(sport.value)}
                >
                  {sport.label}
                </button>
              ))}
            </div>
            {errors.specialties && (
              <div className="text-danger mt-2" style={{ fontSize: 'var(--font-size-sm)' }}>
                {errors.specialties.message}
              </div>
            )}
          </div>

          {/* ── Pricing ── */}
          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-cash-stack" />
              Tarification
            </div>
            <div className="prf-form-row">
              <Input
                label="Prix par seance (FCFA)"
                type="number"
                min={0}
                icon="bi-cash"
                error={errors.pricePerSession?.message}
                {...register('pricePerSession', { valueAsNumber: true })}
              />
              <Select
                label="Duree de la seance"
                options={DURATION_OPTIONS}
                error={errors.sessionDuration?.message}
                {...register('sessionDuration', { valueAsNumber: true })}
              />
            </div>
          </div>
        </ProfileForm>
      </div>
    </div>
  );
}

export default EditCoachProfilePage;
