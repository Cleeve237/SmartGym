export function isAuthenticated(user) {
  return !!user && !!user.id;
}

export function isSessionExpired(error) {
  if (!error) return false;
  const message = typeof error === 'string' ? error : error.message || '';
  return (
    message.includes('expir') ||
    message.includes('token') ||
    message.includes('401') ||
    error?.status === 401
  );
}

export function isSessionForbidden(error) {
  if (!error) return false;
  const message = typeof error === 'string' ? error : error.message || '';
  return (
    message.includes('interdit') ||
    message.includes('forbidden') ||
    message.includes('403') ||
    error?.status === 403
  );
}
