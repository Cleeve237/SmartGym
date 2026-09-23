# FRONTEND BEST PRACTICES — SmartGym

## Architecture

### 1. Single Source of Truth

Chaque concept (auth, permissions, rôles) doit avoir UNE seule source de vérité :

```jsx
// ✅ Bon : une seule store, un seul context
import useAuthStore from './stores/auth/authStore';

// ❌ Mauvais : deux systèmes coexistants
import useAuthStore from './stores/authStore';
import useAuth from './contexts/auth/AuthContext';
```

### 2. Feature-First Organization

Organiser par fonctionnalité, pas par type technique :

```text
// ✅ Bon
features/auth/
features/dashboard/
features/booking/

// ❌ Mauvais
components/AuthLogin.jsx
components/AuthRegister.jsx
pages/AuthLoginPage.jsx
```

### 3. Barrel Exports

Chaque module exporte un index.js barrel :

```jsx
// components/booking/index.js
export { default as BookingCalendar } from './BookingCalendar';
export { default as BookingForm } from './BookingForm';
```

---

## Composants

### 1. Toujours utiliser le Design System

```jsx
// ✅ Bon
import { Button, Card, Badge } from '../../design-system';

// ❌ Mauvais
import Button from '../ui/Button';
import Card from '../ui/Card';
```

### 2. Props Consistantes

```jsx
// ✅ Bon — nommage cohérent avec le DS
<Button variant="primary" size="md" leftIcon="bi-plus" />

// ❌ Mauvais — mélange de conventions
<Button variant="primary" size="medium" icon="plus" iconPosition="left" />
```

### 3. Pas d'Inline Styles pour le Layout

```jsx
// ✅ Bon
<main className="layout-main">
// CSS : .layout-main { padding-top: var(--ds-navbar-height); }

// ❌ Mauvais
<main style={{ paddingTop: 'var(--ds-navbar-height, 64px)' }}>
```

### 4. États : Loading → Empty → Error → Success

```jsx
function ProgramList() {
  if (isLoading) return <ProgramSkeleton count={6} />;
  if (error) return <ErrorState message={error} onRetry={refetch} />;
  if (!programs.length) return <EmptyState icon="journal" title="Aucun programme" />;
  return <ProgramGrid programs={programs} />;
}
```

---

## Performance

### 1. Lazy Loading des Routes

```jsx
import { lazy } from 'react';
const CoachProfilePage = lazy(() => import('../pages/coach/CoachProfilePage'));
```

### 2. React.memo sur les Listes

```jsx
export default React.memo(ProgramCard);
export default React.memo(CoachCard);
export default React.memo(ReviewCard);
```

### 3. useMemo pour les Données Calculées

```jsx
const filteredPrograms = useMemo(() => {
  return programs.filter(p => p.category === filter).sort(sortFn);
}, [programs, filter, sortBy]);
```

### 4. useCallback pour les Handlers

```jsx
const handleFilterChange = useCallback((newFilters) => {
  setFilters(newFilters);
  setCurrentPage(1);
}, []);
```

---

## React Router

### 1. Route Guards Composables

```jsx
// ✅ Bon : composition de guards
<ProtectedRoute>
  <RoleRoute allowedRoles={['coach']}>
    <CoachLayout />
  </RoleRoute>
</ProtectedRoute>
```

### 2. Routes Statiques Avant les Paramètres

```jsx
// ✅ Bon : les routes statiques passent avant les paramètres
{ path: 'programs/catalog', element: <Catalog /> }
{ path: 'programs/:id', element: <ProgramDetail /> }

// ❌ Mauvais : :id matcherait "catalog"
{ path: 'programs/:id', element: <ProgramDetail /> }
{ path: 'programs/catalog', element: <Catalog /> }
```

### 3. Gérer 404, 403, Maintenance

```jsx
// Dans le router
{ path: '/access-denied', element: <ForbiddenPage /> }
{ path: '/maintenance', element: <MaintenancePage /> }
{ path: '*', element: <NotFoundPage /> }
```

---

## Zustand

### 1. Selectors Granulaires

```jsx
// ✅ Bon : selector atomique
const isAuthenticated = useAuthStore(s => s.isAuthenticated);
const user = useAuthStore(s => s.user);

// ❌ Mauvais : objet qui cause des re-renders
const { isAuthenticated, user } = useAuthStore();
```

### 2. Actions Séparées du State

```jsx
// ✅ Bon : actions dans un fichier séparé
// stores/auth/authActions.js
export const createAuthActions = (set, get) => ({
  login: async (credentials) => { ... },
  logout: () => { ... },
});
```

### 3. Persist Config Minimal

```jsx
persist(authStore, {
  name: 'smartgym-auth',
  version: 1,
  whitelist: ['user', 'role', 'rememberMe', 'isAuthenticated'],
  migrate: (persistedState, version) => { ... },
});
```

### 4. Préparer le Backend

```jsx
// Les stores appellent des services mock pour le développement
// Pour basculer vers le vrai backend, changer l'import du service
// import { authService } from '../services/auth.service'; // réel
import { mockAuthApi } from '../services/auth/mockAuthApi'; // mock
```

---

## Accessibilité

### 1. Labels et ARIA

```jsx
// ✅ Bon
<button aria-label="Fermer" onClick={onClose}>
  <i className="bi bi-x-lg" />
</button>

// ❌ Mauvais
<button onClick={onClose}>
  <i className="bi bi-x-lg" />
</button>
```

### 2. Navigation au Clavier

```jsx
// ✅ Bon
<div role="tablist" aria-label="Onglets programmes">
  <button role="tab" aria-selected={active} tabIndex={active ? 0 : -1}>
    Tous
  </button>
</div>
```

### 3. Messages Dynamiques

```jsx
// ✅ Bon
<div role="alert" aria-live="polite">
  {error && <Alert variant="danger">{error}</Alert>}
</div>
```

---

## CSS

### 1. Variables Design System

```css
/* ✅ Bon */
.card {
  background: var(--ds-bg-card);
  border: 1px solid var(--ds-border);
  border-radius: var(--ds-radius-lg);
  padding: var(--ds-spacing-4);
}

/* ❌ Mauvais */
.card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px;
}
```

### 2. Prefixes par Module

```css
.dash-*    /* Client dashboard */
.cd-*      /* Coach dashboard */
.adm-*     /* Admin dashboard */
.bk-*      /* Booking */
.pay-*     /* Payment */
.prf-*     /* Profile */
.mp-*      /* Marketplace */
.pd-*      /* Program details */
.sys-*     /* System pages */
```

### 3. Responsive Design

```css
/* Breakpoints du Design System */
@media (max-width: 575px)  /* Mobile */
@media (max-width: 767px)  /* Tablet small */
@media (max-width: 991px)  /* Tablet large */
@media (max-width: 1199px) /* Laptop */
```

---

## Validation des Données (Zod)

### 1. Schémas Partagés

```jsx
// ✅ Bon : un seul fichier de schémas
// utils/validators/authSchemas.js
export const LoginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, '8 caractères minimum'),
});
```

### 2. Messages d'Erreur en Français

```jsx
z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères')
z.string().email('Veuillez entrer une adresse email valide')
```
