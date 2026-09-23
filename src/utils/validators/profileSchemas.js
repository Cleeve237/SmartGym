import { z } from 'zod';

const CITIES = [
  'Douala', 'Yaounde', 'Bafoussam', 'Bamenda', 'Garoua',
  'Maroua', 'Kribi', 'Limbe', 'Buea', 'Ebolowa',
];

const DISCIPLINES = [
  'Musculation', 'Cardio & HIIT', 'Yoga', 'Pilates', 'CrossFit',
  'Boxe', 'Danse', 'Natation', 'Football', 'Basketball',
  'Tennis', 'Athletisme',
];

// ── Client Profile ──

export const ClientProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prenom doit contenir au moins 2 caracteres')
    .max(50, 'Le prenom ne doit pas depasser 50 caracteres'),
  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caracteres')
    .max(50, 'Le nom ne doit pas depasser 50 caracteres'),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-]{8,20}$/, 'Numero de telephone invalide')
    .optional()
    .or(z.literal('')),
  city: z.enum(CITIES, {
    errorMap: () => ({ message: 'Veuillez selectionner une ville valide' }),
  }).optional().or(z.literal('')),
  objective: z.string().max(200, 'Objectif trop long').optional().or(z.literal('')),
  fitnessLevel: z.enum(['Debutant', 'Intermediaire', 'Avance'], {
    errorMap: () => ({ message: 'Niveau invalide' }),
  }).optional().or(z.literal('')),
  sports: z.array(z.string()).optional().default([]),
  availability: z.array(z.string()).optional().default([]),
});

// ── Coach Profile ──

export const CoachProfileSchema = z.object({
  firstName: z
    .string()
    .min(2, 'Le prenom doit contenir au moins 2 caracteres')
    .max(50, 'Le prenom ne doit pas depasser 50 caracteres'),
  lastName: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caracteres')
    .max(50, 'Le nom ne doit pas depasser 50 caracteres'),
  phone: z
    .string()
    .regex(/^\+?[0-9\s\-]{8,20}$/, 'Numero de telephone invalide')
    .optional()
    .or(z.literal('')),
  city: z.enum(CITIES, {
    errorMap: () => ({ message: 'Veuillez selectionner une ville valide' }),
  }).optional().or(z.literal('')),
  bio: z
    .string()
    .max(1000, 'La biographie ne doit pas depasser 1000 caracteres')
    .optional()
    .or(z.literal('')),
  experience: z
    .number()
    .min(0, 'L\'experience ne peut pas etre negative')
    .max(50, 'Valeur invalide')
    .optional()
    .default(0),
  specialties: z.array(z.string()).optional().default([]),
  languages: z.array(z.string()).optional().default([]),
  pricePerSession: z
    .number()
    .min(0, 'Le prix ne peut pas etre negatif')
    .optional()
    .default(0),
  sessionDuration: z
    .number()
    .min(15, 'Duree minimale: 15 minutes')
    .max(240, 'Duree maximale: 240 minutes')
    .optional()
    .default(60),
});

// ── Password Change ──

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export const PasswordChangeSchema = z
  .object({
    currentPassword: z.string().min(1, 'Le mot de passe actuel est requis'),
    newPassword: z
      .string()
      .min(8, 'Le mot de passe doit contenir au moins 8 caracteres')
      .regex(
        passwordRegex,
        'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
      ),
    confirmPassword: z.string().min(1, 'Confirmation requise'),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

// ── Sport options builder ──

export const sportOptions = DISCIPLINES.map((d) => ({ value: d, label: d }));
export const cityOptions = CITIES.map((c) => ({ value: c, label: c }));
export const fitnessLevels = [
  { value: 'Debutant', label: 'Debutant' },
  { value: 'Intermediaire', label: 'Intermediaire' },
  { value: 'Avance', label: 'Avance' },
];
