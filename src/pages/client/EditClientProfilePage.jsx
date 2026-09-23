import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  ClientProfileSchema,
  sportOptions,
  cityOptions,
  fitnessLevels,
} from '../../utils/validators/profileSchemas';
import ProfileForm from '../../components/profile/ProfileForm';
import AvatarUploader from '../../components/profile/AvatarUploader';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import '../../components/profile/Profile.css';

const MOCK_CLIENT = {
  firstName: 'Jean',
  lastName: 'Kamga',
  email: 'jean.kamga@email.com',
  phone: '+237 699 123 456',
  city: 'Douala',
  avatar: null,
  objective: 'Perte de poids',
  fitnessLevel: 'Intermediaire',
  sports: ['Musculation', 'Cardio & HIIT', 'Boxe'],
  availability: ['Lundi matin', 'Mercredi soir'],
};

function EditClientProfilePage() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(MOCK_CLIENT.avatar);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(ClientProfileSchema),
    defaultValues: {
      firstName: MOCK_CLIENT.firstName,
      lastName: MOCK_CLIENT.lastName,
      phone: MOCK_CLIENT.phone,
      city: MOCK_CLIENT.city,
      objective: MOCK_CLIENT.objective,
      fitnessLevel: MOCK_CLIENT.fitnessLevel,
      sports: MOCK_CLIENT.sports,
      availability: MOCK_CLIENT.availability,
    },
  });

  const selectedSports = watch('sports') || [];

  const toggleSport = (sport) => {
    const current = selectedSports;
    if (current.includes(sport)) {
      setValue('sports', current.filter((s) => s !== sport), { shouldValidate: true });
    } else {
      setValue('sports', [...current, sport], { shouldValidate: true });
    }
  };

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Client profile updated:', data);
    navigate('/client/profile');
  };

  return (
    <div className="prf-page">
      <div className="prf-container">
        <Link to="/client/profile" className="prf-back">
          <i className="bi bi-arrow-left" />
          Retour au profil
        </Link>

        <h1 className="mb-4" style={{ fontSize: 'var(--font-size-2xl)', fontWeight: 'var(--font-weight-bold)', color: 'var(--color-secondary)' }}>
          Modifier mon profil
        </h1>

        <ProfileForm
          onSubmit={handleSubmit(onSubmit)}
          isSubmitting={isSubmitting}
          onCancel={() => navigate('/client/profile')}
        >
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

          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-bullseye" />
              Objectifs sportifs
            </div>
            <div className="prf-form-row">
              <Input
                label="Objectif sportif"
                placeholder="Ex: Perte de poids, Prise de muscle..."
                error={errors.objective?.message}
                {...register('objective')}
              />
              <Select
                label="Niveau de forme"
                options={fitnessLevels}
                placeholder="Selectionnez votre niveau"
                error={errors.fitnessLevel?.message}
                {...register('fitnessLevel')}
              />
            </div>
          </div>

          <div className="prf-form-section">
            <div className="prf-form-section-title">
              <i className="bi bi-heart" />
              Sports preferes
            </div>
            <div className="prf-tags">
              {sportOptions.map((sport) => (
                <button
                  key={sport.value}
                  type="button"
                  className={`prf-tag ${selectedSports.includes(sport.value) ? 'prf-tag--active' : ''}`}
                  onClick={() => toggleSport(sport.value)}
                  aria-pressed={selectedSports.includes(sport.value)}
                >
                  {sport.label}
                </button>
              ))}
            </div>
            {errors.sports && (
              <div className="text-danger mt-2" style={{ fontSize: 'var(--font-size-sm)' }}>
                {errors.sports.message}
              </div>
            )}
          </div>
        </ProfileForm>
      </div>
    </div>
  );
}

export default EditClientProfilePage;
