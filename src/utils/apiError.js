const ERROR_MESSAGES = {
  400: 'Requête invalide. Veuillez vérifier vos données.',
  401: 'Session expirée. Veuillez vous reconnecter.',
  403: 'Accès refusé. Vous n\'avez pas les permissions nécessaires.',
  404: 'Ressource introuvable.',
  409: 'Conflit. La ressource existe déjà.',
  422: 'Données invalides. Veuillez corriger les erreurs.',
  429: 'Trop de requêtes. Veuillez patienter.',
  500: 'Erreur serveur. Veuillez réessayer plus tard.',
  502: 'Service temporairement indisponible.',
  503: 'Service en maintenance. Réessayez bientôt.',
};

export function handleApiError(error) {
  if (!error.response) {
    return {
      message: 'Erreur réseau. Vérifiez votre connexion Internet.',
      status: 0,
      data: null,
      original: error,
    };
  }

  const { status, data } = error.response;

  const message =
    data?.message ||
    data?.error ||
    ERROR_MESSAGES[status] ||
    `Erreur inattendue (${status}).`;

  return {
    message,
    status,
    data: data || null,
    errors: data?.errors || null,
    original: error,
  };
}

export function formatError(error) {
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (error?.errors) {
    const first = Object.values(error.errors)[0];
    return Array.isArray(first) ? first[0] : String(first);
  }
  return 'Une erreur inattendue est survenue.';
}

export function isNetworkError(error) {
  return !error.response && error.status === 0;
}

export function isUnauthorized(error) {
  return error.status === 401;
}

export function isValidationError(error) {
  return error.status === 422;
}
