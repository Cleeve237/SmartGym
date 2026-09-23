# FRONTEND CHECKLIST — SmartGym

## Architecture

- [ ] Un seul système d'authentification (choisir stores/auth/ ou stores/authStore.js)
- [ ] Un seul système de permissions (choisir constants/auth/permissions.js)
- [ ] Un seul jeu de guards (supprimer routes/guards/, middlewares/, components/guards/)
- [ ] Un seul jeu de validateurs Zod (choisir utils/validators/authSchemas.js)
- [ ] Layouts unifiés (MainLayout remplace les 4 layouts)
- [ ] Pages dupliquées nettoyées

## Composants

- [ ] Tous les composants utilisent le Design System
- [ ] Pas d'anciens composants UI (components/ui/) importés
- [ ] Pas d'inline styles pour le layout (padding-top, grid)
- [ ] Pas de couleurs en dur (MTN yellow, Orange orange)
- [ ] Tous les composants ont des props typées (Zod ou PropTypes)

## Pages

- [ ] Loading state (skeleton) présent
- [ ] Empty state présent
- [ ] Error state présent
- [ ] Responsive testé (320px → 1400px)
- [ ] Aucun scroll horizontal
- [ ] Titre de page (react-helmet ou MetaTags)

## Accessibilité

- [ ] `aria-label` sur tous les boutons icon-only
- [ ] `aria-current="page"` sur la navigation active
- [ ] `role="alert"` ou `role="status"` sur les messages
- [ ] `aria-live="polite"` sur les zones de mise à jour
- [ ] `alt` text sur toutes les images
- [ ] `:focus-visible` styles présents
- [ ] Skip link présent
- [ ] Contraste WCAG AA minimum (4.5:1 texte normal, 3:1 grand texte)

## Performance

- [ ] `React.lazy()` sur les routes lourdes
- [ ] `React.memo` sur les composants de liste
- [ ] `useMemo` sur les filtres et tris
- [ ] `useCallback` sur les event handlers passés en props
- [ ] Pas de re-renders inutiles
- [ ] Code-splitting par rôle (client/coach/admin)
- [ ] Bundle size < 500kB par chunk

## React Router

- [ ] Route 404 (catch-all `*`)
- [ ] Route 403 (/access-denied)
- [ ] Route maintenance (/maintenance)
- [ ] Route coming-soon (/coming-soon)
- [ ] Route offline (/offline)
- [ ] Protected routes avec redirect
- [ ] Role-based routes avec redirect
- [ ] Guest routes avec redirect
- [ ] Pas de conflit de routes (param vs path fixe)
- [ ] Lazy loading des pages

## Zustand

- [ ] Stores avec selectors uniquement
- [ ] Persist config correcte (whitelist, version, migrate)
- [ ] Pas d'accès direct au state (toujours via selector)
- [ ] Actions async avec try/catch
- [ ] États loading/error dans chaque store
- [ ] Prêt pour backend (services mock → services réels)
- [ ] Pas de store dupliqué

## UX

- [ ] Feedback visuel immédiat (click → loading)
- [ ] Toasts pour succès/erreur
- [ ] Confirmation avant actions destructrices
- [ ] Skeleton loading (pas de spinner pour les listes)
- [ ] Transitions fluides (fadeIn, slideUp)
- [ ] Pagination ou infinite scroll
- [ ] Search avec debounce
- [ ] Empty states utiles (pas juste "rien")

## CSS

- [ ] Utilise les variables `--ds-*` du Design System
- [ ] Pas de variables `--color-*` legacy
- [ ] Pas d'inline styles (sauf dynamique inévitable)
- [ ] Media queries aux breakpoints du DS
- [ ] Classes CSS préfixées par module (dash-, cd-, adm-, bk-, pay-)

## Préparation Express.js

- [ ] Les services appellent `axiosClient.js` (intercepteurs token + refresh)
- [ ] Les stores utilisent les services
- [ ] Les pages utilisent les stores (ou hooks custom)
- [ ] Les constantes d'endpoints sont dans `apiEndpoints.js`
- [ ] Le mock peut être basculé via variable d'environnement
- [ ] Les tokens JWT sont gérés (storage, refresh, expiration)
- [ ] Les erreurs API sont traduites en messages utilisateur
