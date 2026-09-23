import { z } from 'zod';

/**
 * Schémas de validation Zod pour l'authentification SmartGym.
 *
 * Prets pour :
 * - Formulaire de connexion
 * - Formulaire d'inscription
 * - Demande de mot de passe oublie
 * - Reinitialisation de mot de passe
 *
 * Utilisation :
 *   import { LoginSchema } from './authSchemas';
 *   const result = LoginSchema.safeParse(formData);
 *   if (!result.success) { // erreurs }
 */

// ── Communs ──

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const passwordField = z
  .string()
  .min(8, 'Le mot de passe doit contenir au moins 8 caracteres')
  .regex(
    passwordRegex,
    'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
  );

const emailField = z
  .string()
  .email('Adresse email invalide')
  .max(255, 'Adresse email trop longue');

// ── Login ──

export const LoginSchema = z.object({
  email: emailField,
  password: z.string().min(1, 'Le mot de passe est requis'),
});

// ── Register ──

export const RegisterSchema = z
  .object({
    firstName: z
      .string()
      .min(2, 'Le prenom doit contenir au moins 2 caracteres')
      .max(50, 'Le prenom ne doit pas depasser 50 caracteres'),
    lastName: z
      .string()
      .min(2, 'Le nom doit contenir au moins 2 caracteres')
      .max(50, 'Le nom ne doit pas depasser 50 caracteres'),
    email: emailField,
    password: passwordField,
    confirmPassword: z.string().min(1, 'Confirmation du mot de passe requise'),
    role: z.enum(['client', 'coach'], {
      errorMap: () => ({ message: 'Role invalide' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });

// ── Forgot Password ──

export const ForgotPasswordSchema = z.object({
  email: emailField,
});

// ── Reset Password ──

export const ResetPasswordSchema = z
  .object({
    token: z.string().min(1, 'Token requis'),
    password: passwordField,
    confirmPassword: z.string().min(1, 'Confirmation du mot de passe requise'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'],
  });
