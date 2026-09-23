# SmartGym Design System

Design System centralisé, premium et évolutif pour l'application SmartGym.

---

## Architecture

```
src/design-system/
├── tokens/                  # Design Tokens JS
│   ├── colors.js            # Palette complète (50→900)
│   ├── typography.js        # Font family, sizes, weights, headings
│   ├── spacing.js           # Espacements (0→96)
│   ├── radius.js            # Border radius (none→circle)
│   ├── shadows.js           # Ombres (xs→modal)
│   ├── breakpoints.js       # Breakpoints responsive
│   ├── animations.js        # Keyframes et easings
│   ├── zIndex.js            # Z-index scale
│   ├── transitions.js       # Transitions CSS
│   └── index.js             # Barrel export
├── theme/
│   ├── theme.js             # Thème unifié
│   ├── ds-variables.css     # CSS Custom Properties
│   ├── ds-animations.css    # Animations keyframes
│   ├── ds-keyframes.css     # Keyframes supplémentaires
│   ├── ds-bootstrap.css     # Bootstrap overrides
│   └── index.css            # Point d'entrée CSS
├── components/ui/           # 28 composants React
└── DESIGN_SYSTEM.md         # Documentation
```

---

## Palette

### Primary (Vert Émeraude)
| Token | Valeur |
|-------|--------|
| `--ds-primary` | `#16A34A` |
| `--ds-primary-50` | `#F0FDF4` |
| `--ds-primary-100` | `#DCFCE7` |
| `--ds-primary-200` | `#BBF7D0` |
| `--ds-primary-300` | `#86EFAC` |
| `--ds-primary-400` | `#4ADE80` |
| `--ds-primary-500` | `#22C55E` |
| `--ds-primary-600` | `#16A34A` |
| `--ds-primary-700` | `#15803D` |
| `--ds-primary-800` | `#166534` |
| `--ds-primary-900` | `#14532D` |

### Secondary (Bleu Nuit)
`#0F172A` → `--ds-secondary`, palette complète 50→900.

### Accent (Orange)
`#F97316` → `--ds-accent`, palette complète 50→900.

### Semantic
- `--ds-success` — `#22C55E`
- `--ds-danger` — `#EF4444`
- `--ds-warning` — `#F59E0B`
- `--ds-info` — `#3B82F6`

### Neutral
Palette complète 50→900 (`#FAFAFA` → `#171717`).

---

## Typographie

### Font
- `--ds-font-family`: `'Inter', system-ui, -apple-system, sans-serif`
- `--ds-font-mono`: `'JetBrains Mono', 'Fira Code', monospace`

### Hiérarchie
| Élément | Taille | Weight |
|---------|--------|--------|
| Display | 3rem | 800 |
| H1 | 2.25rem | 700 |
| H2 | 1.875rem | 700 |
| H3 | 1.5rem | 600 |
| H4 | 1.25rem | 600 |
| H5 | 1.125rem | 600 |
| H6 | 1rem | 600 |
| Body | 1rem | 400 |
| Caption | 0.875rem | 400 |
| Small | 0.75rem | 400 |
| Button | 0.875rem | 600 |

---

## Espacements
`--ds-spacing-{0,1,2,3,4,5,6,8,10,12,16,20,24,32,40,48,64,80,96}`

---

## Border Radius
| Token | Valeur |
|-------|--------|
| `--ds-radius-none` | 0 |
| `--ds-radius-xs` | 0.125rem |
| `--ds-radius-sm` | 0.25rem |
| `--ds-radius-md` | 0.5rem |
| `--ds-radius-lg` | 0.75rem |
| `--ds-radius-xl` | 1rem |
| `--ds-radius-2xl` | 1.5rem |
| `--ds-radius-3xl` | 2rem |
| `--ds-radius-pill` | 50rem |
| `--ds-radius-circle` | 50% |

---

## Composants UI

### Button
```jsx
import { Button } from 'src/design-system';

<Button variant="primary" size="md" leftIcon="search" onClick={handleClick}>
  Rechercher
</Button>
```

**Props**: `variant` (primary, secondary, outline, ghost, danger, success, warning, link), `size` (sm, md, lg), `loading`, `fullWidth`, `leftIcon`, `rightIcon`, `disabled`.

### Input
```jsx
import { Input } from 'src/design-system';

<Input
  label="Email"
  leftIcon="envelope"
  placeholder="jean@example.com"
  error={errors.email}
  clearable
/>
```

**Props**: `label`, `error`, `helperText`, `leftIcon`, `rightIcon`, `clearable`, `size` (sm, md, lg), `disabled`.

### Textarea
```jsx
<Textarea label="Description" rows={4} maxLength={500} showCount />
```

### Select
```jsx
<Select
  label="Ville"
  options={[{value:'dla',label:'Douala'},{value:'yde',label:'Yaoundé'}]}
  placeholder="Choisir une ville"
/>
```

### Checkbox / Radio / Switch
```jsx
<Checkbox label="J'accepte les conditions" />
<Radio label="Homme" name="gender" value="male" />
<Switch label="Notifications" checked={notif} onChange={setNotif} />
```

### Badge
```jsx
<Badge variant="success" dot>Vérifié</Badge>
<Badge variant="primary-solid">Nouveau</Badge>
```

### Avatar
```jsx
<Avatar src="/photo.jpg" name="Jean Mbarga" size="xl" status="online" />
<Avatar name="Carine A." color="#F97316" />
```

### Card
```jsx
<Card variant="hover" header={<h3>Titre</h3>} footer={<span>Pied</span>}>
  Contenu de la carte
</Card>
```

**Variants**: `default`, `hover`, `elevated`, `clickable`, `compact`, `no-border`.

### Modal
```jsx
<Modal open={isOpen} onClose={handleClose} title="Confirmation" footer={<Button>OK</Button>}>
  <p>Voulez-vous continuer ?</p>
</Modal>
```

### Drawer
```jsx
<Drawer open={isOpen} onClose={handleClose} title="Filtres" placement="right" size="lg">
  Contenu
</Drawer>
```

### Alert
```jsx
<Alert variant="success" title="Bravo !" dismissible onClose={handleClose}>
  Votre inscription a été confirmée.
</Alert>
```

### Toast
```jsx
<ToastContainer
  toasts={[{id:1, title:'Succès', description:'Action effectuée', variant:'success'}]}
  position="top-right"
  onClose={removeToast}
/>
```

### EmptyState
```jsx
<EmptyState
  icon="bi-inbox"
  title="Aucun résultat"
  description="Essayez de modifier vos filtres."
  action={<Button>Réinitialiser</Button>}
/>
```

### Skeleton
```jsx
<Skeleton variant="text" />
<Skeleton variant="avatar-lg" />
<SkeletonCard lines={3} />
<SkeletonList items={5} />
<SkeletonTable rows={4} cols={3} />
<SkeletonProfile />
```

### LoadingSpinner
```jsx
<LoadingSpinner size="lg" label="Chargement en cours..." />
<LoadingSpinner overlay label="Patientez..." />
<LoadingSpinner inline />
```

### ProgressBar
```jsx
<ProgressBar value={75} variant="success" showValue label="Progression" />
<ProgressBar indeterminate variant="gradient" />
```

### Breadcrumb
```jsx
<Breadcrumb items={[
  {label:'Accueil', href:'/'},
  {label:'Coaches', href:'/coaches'},
  {label:'Jean Mbarga'}
]} />
```

### Pagination
```jsx
<Pagination current={page} total={10} onChange={setPage} size="sm" />
```

### Tabs
```jsx
<Tabs variant="pills" extraContent={<Button size="sm">+ Ajouter</Button>}>
  <Tab label="Profil" icon="person">
    Contenu profil
  </Tab>
  <Tab label="Paramètres" icon="gear" badge={3}>
    Contenu paramètres
  </Tab>
</Tabs>
```

### Accordion
```jsx
<Accordion variant="bordered">
  <AccordionItem title="Section 1" defaultOpen>
    Contenu section 1
  </AccordionItem>
  <AccordionItem title="Section 2">
    Contenu section 2
  </AccordionItem>
</Accordion>
```

### StatCard
```jsx
<StatCard
  value="1 580"
  label="Sessions"
  icon="lightning"
  variant="primary"
  trend={12}
  trendLabel="vs mois dernier"
/>
```

### SearchInput
```jsx
<SearchInput
  placeholder="Rechercher un coach..."
  onSearch={handleSearch}
  debounce={400}
/>
```

---

## États

Chaque composant gère les états suivants :

| État | Description |
|------|-------------|
| Normal | État par défaut |
| Focus | Focus visible (outline 2px `--ds-primary`) |
| Disabled | Désactivé, opacité 0.5, `cursor: not-allowed` |
| Error | `aria-invalid`, bordure rouge, message d'erreur |
| Loading | Spinner intégré (Button), overlay (LoadingSpinner) |
| Empty | EmptyState (aucune donnée) |
| Success | Bordure verte (Input), feedback visuel |

---

## Animations

### Keyframes disponibles
- `ds-fade-in` — Opacité 0 → 1
- `ds-fade-up` — Opacité 0 + translateY(12px) → visible
- `ds-scale` — Scale(0.95) → 1
- `ds-slide-up/down/left/right` — Slide directionnel
- `ds-shimmer` — Skeleton loading
- `ds-pulse` — Opacité pulsée

### Classes utilitaires
- `ds-animate-fade-in`
- `ds-animate-fade-up`
- `ds-animate-scale`
- `ds-hover-lift` — TranslateY(-4px) + shadow
- `ds-hover-shadow`
- `ds-focus-ring`
- `ds-sr-only` — Screen reader only

---

## Responsive

| Breakpoint | Min-width |
|-----------|-----------|
| Mobile | `576px` |
| Tablet | `768px` |
| Laptop | `992px` |
| Desktop | `1200px` |
| Wide | `1400px` |

Utilisation en JS :
```js
import { mediaQueries } from 'src/design-system/tokens';
// mediaQueries.tablet → '(min-width: 768px)'
```

---

## Accessibilité

- Rôles ARIA : `role="button"`, `role="dialog"`, `role="tablist"`, `role="progressbar"`, etc.
- `aria-label`, `aria-labelledby`, `aria-describedby`
- `aria-modal="true"` sur Modals et Drawers
- `aria-current="page"` sur Breadcrumb/Pagination
- Focus visible : `outline: 2px solid --ds-primary`
- Gestion clavier : Escape pour fermer Modal/Drawer, Enter/Space pour cards cliquables, Tab navigation
- Contraste WCAG AA respecté

---

## Performance

- Tree-shaking : chaque composant est importable individuellement
- CSS modularisé par composant
- Pas de dépendances additionnelles
- Bundle optimisé pour Vite

---

## Utilisation

### Import individuel (recommandé)
```jsx
import { Button, Card, Badge } from 'src/design-system';
```

### Import depuis tokens
```js
import { colors, spacing, shadows } from 'src/design-system/tokens';
import { mediaQueries } from 'src/design-system/tokens/breakpoints';
```

### Utilisation des CSS variables
```css
.my-class {
  color: var(--ds-primary);
  padding: var(--ds-spacing-4);
  border-radius: var(--ds-radius-lg);
  box-shadow: var(--ds-shadow-md);
}
```

---

## Compatibilité

- ✅ Bootstrap 5 (overrides dans `ds-bootstrap.css`)
- ✅ React JavaScript (pas de TypeScript requis)
- ✅ Express.js futur
- ✅ Tous les composants existants restent inchangés
- ✅ Rétrocompatibilité totale
