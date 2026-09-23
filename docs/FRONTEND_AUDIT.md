# FRONTEND AUDIT — SmartGym

**Date** : 2026-07-30
**Auditeur** : Lead Software Architect
**Scope** : Architecture, UI, UX, Performance, Accessibilité, React Router, Zustand

---

## Résumé Exécutif

Le projet SmartGym est un frontend React ~730+ modules, globalement bien structuré. Il souffre d'un état **d'incomplétude migratoire** : deux architectures auth coexistent, deux systèmes de permissions sont incompatibles, 28 composants Design System existent mais **zéro n'est importé** dans l'application. Les pages utilisent encore l'ancien système de composants.

**Score Global : 6.5/10**

---

## Forces du Projet

1. **Design System complet** : 28 composants UI, tokens centralisés, 9 palettes de couleurs, animations, breakpoints — une fondation solide
2. **Couverture fonctionnelle riche** : landing, auth, 3 dashboards, booking, payment, marketplace, programmes, profil, pages system
3. **Services API bien organisés** : axiosClient avec intercepteurs, refresh token, domain services cohérents
4. **Routes bien protégées** : ProtectedRoute + RoleRoute par dashboard
5. **Zustand stores cohérents** : pattern CRUD + pagination partagé entre 4 stores
6. **Zéro warning build** (hors pre-existing : dynamic import + chunk size)
7. **CSS responsive sur les dashboards** : breakpoints à 1200, 992, 768, 576

---

## Faiblesses

### 1. Duplication Auth (CRITIQUE)

| Système | Store | Context | Hooks | API |
|---------|-------|---------|-------|-----|
| **Ancien** | `stores/authStore.js` | `contexts/AuthContext.jsx` | `hooks/useAuth.js` | `auth.service.js` (axios) |
| **Nouveau** | `stores/auth/` (persist) | `contexts/auth/AuthContext.jsx` | `hooks/auth/useAuth.js` | `fakeAuthService.js` (mock) |

Les deux systèmes sont indépendants et potentiellement conflictuels.

### 2. Deux Systèmes de Permissions

- `utils/permissions.js` : 27 permissions en snake_case
- `constants/auth/permissions.js` : 16 permissions en UPPER_CASE
- Noms et structures complètement différents

### 3. Trois Systèmes de Guards

- `routes/` : `ProtectedRoute.jsx`, `RoleRoute.jsx`, `GuestRoute.jsx` **(utilisé par le router)**
- `routes/guards/` : 8 fichiers **(non utilisé)**
- `components/guards/` : 3 fichiers **(non utilisé par le router)**
- `middlewares/` : 3 fichiers **(non utilisé)**

### 4. Design System Non Utilisé

- 28 composants DS dans `design-system/components/ui/`
- **Aucune page ni composant** n'importe depuis le DS
- Les anciens composants utilisent Bootstrap 5 + variables `--color-*` legacy

### 5. Duplication de Composants UI

| Ancien (components/ui/) | DS (design-system/) | Statut |
|------------------------|---------------------|--------|
| Button.jsx | Button/ | ✅ Utilisé (6 imports) |
| Input.jsx | Input/ | ✅ Utilisé (3 imports) |
| Select.jsx | Select/ | ✅ Utilisé (2 imports) |
| Card.jsx | Card/ | ❌ Inutilisé |
| Badge.jsx | Badge/ | ❌ Inutilisé |
| Textarea.jsx | Textarea/ | ❌ Inutilisé |
| Loader.jsx | LoadingSpinner/ | ❌ Inutilisé |
| EmptyState.jsx | EmptyState/ | ❌ Inutilisé |
| SectionTitle.jsx | SectionTitle/ | ❌ Inutilisé |
| PageHeader.jsx | — (pas de DS) | ❌ Inutilisé |

### 6. Duplication de Pages

- `pages/public/CoachProfilePage.jsx` vs `pages/public/CoachDetailPage.jsx`
- `pages/public/ProgramsCatalogPage.jsx` vs `pages/programs/ProgramsPage.jsx`
- `pages/public/ProgramDetailsPage.jsx` vs `pages/programs/ProgramDetailsPage.jsx`
- `pages/client/EditClientProfilePage.jsx` vs `pages/client/ClientEditProfilePage.jsx`
- `pages/dashboard/bookings/MyBookingsPage.jsx` vs `pages/client/ClientBookingsPage.jsx`

### 7. Deux Systèmes de Validation Zod

- `utils/auth/authValidators.js` : 6 schémas (register client/coach séparés)
- `utils/validators/authSchemas.js` : 4 schémas (register avec rôle enum)
- `ForgotPasswordSchema` et `ResetPasswordSchema` existent dans les deux, avec des champs différents

### 8. Near-Identical Layouts

`PublicLayout`, `ClientLayout`, `CoachLayout`, `AdminLayout` sont identiques à 95% (seul le prop `role` change). `MainLayout` existe déjà et les unifie.

### 9. Route Conflict

`programs/:programId` entrerait en conflit avec `programs/catalog` et `programs/catalogue` si l'ordre dans la config route changeait.

### 10. Inline Styles dans les Dashboards

- CoachDashboard : 5x `style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem", marginBottom: "1.5rem" }}`
- AdminDashboard : 4x même pattern
- Layouts : 5x `style={{ paddingTop: 'var(--ds-navbar-height, 64px)' }}`

### 11. États Loading/Empty/Error Manquants

- 8 pages sur 12 auditées n'ont **aucun état** loading, empty, ou error
- Seules `ProgramsCatalogPage`, `ProgramDetailsPage`, `CoachProfilePage` en ont

### 12. Anciennes Pages d'Erreur

- `pages/errors/` : 6 fichiers non touchés
- `pages/system/` : 6 fichiers nouveaux (les routes pointent vers ceux-ci)

---

## Corrections Prioritaires

### P1 — Clean Architecture Auth
- Choisir UN système d'auth (recommandé : `stores/auth/` + `useAuthStore`)
- Supprimer l'ancien `stores/authStore.js`
- Supprimer l'ancien `contexts/AuthContext.jsx`
- Unifier les hooks auth

### P2 — Unifier les Permissions
- Choisir UN système (recommandé : `constants/auth/permissions.js`)
- Supprimer `utils/permissions.js` et `utils/roles.js`

### P3 — Nettoyer les Guards Morts
- Supprimer `routes/guards/` (8 fichiers)
- Supprimer `middlewares/` (3 fichiers)
- Supprimer `components/guards/` (3 fichiers)

### P4 — Adopter le Design System
- Remplacer les imports de `components/ui/Button` → `design-system/components/ui/Button`
- Migrer `Input`, `Select` vers DS
- Supprimer les anciens composants UI inutilisés (7 fichiers)

### P5 — Supprimer les Pages Dupliquées
- Nettoyer les pages orphelines après vérification des routes

### P6 — CSS : Extraire les Inline Styles
- Ajouter `.layout-main` pour remplacer le `paddingTop` inline
- Ajouter `.cd-grid-2`, `.adm-grid-2` pour les grilles dashboard

---

## Corrections Recommandées

### R1 — États Loading/Empty/Error
- Ajouter des états loading (skeleton DS) sur toutes les pages
- Ajouter des états empty (EmptyState DS) sur les listes vides
- Ajouter des états error avec ErrorActions DS

### R2 — Responsive
- Ajouter des tests responsive pour 320px, 375px, 425px
- Vérifier les grilles dashboards à ces breakpoints
- Ajouter `overflow-x: hidden` sur les conteneurs problématiques

### R3 — Accessibilité
- Ajouter `aria-label` sur tous les boutons icon-only
- Ajouter `role="status"` sur les alerts
- Ajouter `aria-live="polite"` sur les zones de chargement
- Ajouter `alt` text sur toutes les images

### R4 — Performance
- Ajouter `React.lazy()` sur les routes des pages lourdes (catalog, coach profile)
- Ajouter `React.memo` sur les composants de liste (`ProgramCard`, `CoachCard`)
- Ajouter `useMemo` sur les filtres complexes (déjà fait dans ProgramsCatalogPage)
- Code-splitting des pages par rôle (client/coach/admin)

### R5 — Unifier les Validateurs Zod
- Conserver `utils/validators/authSchemas.js` comme source unique
- Supprimer `utils/auth/authValidators.js`
- Supprimer `utils/auth/authMessages.js`
- Ajouter `specialCharacter` au pattern regex password

### R6 — Unifier les Layouts
- Remplacer les 4 layouts par `MainLayout` avec prop `role`

---

## Optimisations Futures

1. **Migration complète vers le Design System** : remplacer tous les anciens composants
2. **Tests unitaires** : couvrir stores, services, guards, composants DS
3. **i18n** : le projet est en français, structure prête pour i18n avec extraction des chaînes
4. **PWA** : service worker, offline support, manifest
5. **Monitoring** : ajouter error boundary + logging
6. **CI/CD** : lint + test + build en pipeline
7. **Storybook** : cataloguer les composants DS
8. **Bundle Analysis** : réduire le chunk de 1066kB

---

## Score Global

| Domaine | Note (/10) | Commentaire |
|---------|-----------|-------------|
| Architecture | 5 | Duplications auth, guards, permissions, pages |
| Performance | 6 | Pas de lazy loading, pas de memo, mais filtres useMemo |
| UX | 5 | États loading/empty/error manquants sur 8/12 pages |
| UI | 5 | DS non utilisé, inline styles, 2 systèmes de composants |
| Responsive | 7 | Dashboards ok, autres pages non vérifiées |
| Accessibilité | 4 | Labels ARIA manquants, focus visible partiel |
| Maintenabilité | 6 | Structure claire mais duplications |
| Lisibilité | 7 | Code propre, conventions de nommage suivies |
| Scalabilité | 6 | Architecture extensible mais dette technique auth |
| **Total** | **5.7** | Projet solide mais en pleine migration |

---

## Annexes

### Fichiers Morts Identifiés

```text
src/components/ui/Card.jsx          # Non importé
src/components/ui/Badge.jsx         # Non importé
src/components/ui/Textarea.jsx      # Non importé
src/components/ui/Loader.jsx        # Non importé
src/components/ui/EmptyState.jsx    # Non importé
src/components/ui/SectionTitle.jsx  # Non importé
src/components/ui/PageHeader.jsx    # Non importé
src/routes/guards/*                 # 8 fichiers, non utilisés
src/middlewares/*                   # 3 fichiers, non utilisés
src/utils/roles.js                  # Remplacé par constants/auth/roles.js
src/utils/permissions.js            # Remplacé par constants/auth/permissions.js
src/utils/constants.js              # En partie dupliqué
```
