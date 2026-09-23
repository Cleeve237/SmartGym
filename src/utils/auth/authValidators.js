import { z } from 'zod';

const passwordField = z
  .string()
  .min(8, '8 caract\u00e8res minimum')
  .regex(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
  );

const emailField = z
  .string()
  .email('Adresse e-mail invalide')
  .max(255, 'Adresse e-mail trop longue');

const phoneField = z
  .string()
  .min(8, 'Num\u00e9ro de t\u00e9l\u00e9phone invalide')
  .max(20, 'Num\u00e9ro de t\u00e9l\u00e9phone trop long');

export const ClientRegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'Le pr\u00e9nom doit contenir au moins 2 caract\u00e8res')
      .max(50, 'Le pr\u00e9nom ne doit pas d\u00e9passer 50 caract\u00e8res'),
    lastName: z
      .string()
      .min(2, 'Le nom doit contenir au moins 2 caract\u00e8res')
      .max(50, 'Le nom ne doit pas d\u00e9passer 50 caract\u00e8res'),
    phone: phoneField,
    email: emailField,
    password: passwordField,
    confirmPassword: z.string().min(1, 'La confirmation du mot de passe est requise'),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: 'Vous devez accepter les conditions d\'utilisation' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export const CoachRegisterSimpleSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'Le pr\u00e9nom doit contenir au moins 2 caract\u00e8res')
      .max(50),
    lastName: z
      .string()
      .min(2, 'Le nom doit contenir au moins 2 caract\u00e8res')
      .max(50),
    phone: phoneField,
    email: emailField,
    city: z.string().min(1, 'La ville est requise'),
    speciality: z.string().min(1, 'La sp\u00e9cialit\u00e9 est requise'),
    experience: z.string().min(1, 'L\'exp\u00e9rience est requise'),
    password: passwordField,
    confirmPassword: z.string().min(1, 'La confirmation du mot de passe est requise'),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: 'Vous devez accepter les conditions d\'utilisation' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export const ForgotPasswordSchema = z.object({
  email: emailField,
});

export const ResetPasswordSchema = z
  .object({
    password: passwordField,
    confirmPassword: z.string().min(1, 'La confirmation du mot de passe est requise'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

export const VerifyEmailSchema = z.object({
  code: z
    .string()
    .length(6, 'Le code doit contenir 6 chiffres')
    .regex(/^\d{6}$/, 'Le code doit contenir uniquement des chiffres'),
});

export const VerifyPhoneSchema = z.object({
  code: z
    .string()
    .length(6, 'Le code doit contenir 6 chiffres')
    .regex(/^\d{6}$/, 'Le code doit contenir uniquement des chiffres'),
});
