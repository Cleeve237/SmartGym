/**
 * Utilitaires de gestion des tokens JWT.
 *
 * Gere le stockage local des tokens d'authentification.
 * Pret pour migration vers HttpOnly cookies (cote serveur).
 *
 * Cle de stockage :
 *   - smartgym_access_token  : JWT access token
 *   - smartgym_refresh_token : JWT refresh token
 *
 * A connecter ulterieurement :
 * - Interceptor Axios pour injecter le Bearer token
 * - Refresh token automatique sur 401
 * - Nettoyage au logout
 */

const ACCESS_TOKEN_KEY = 'smartgym_access_token';
const REFRESH_TOKEN_KEY = 'smartgym_refresh_token';

// ── Access Token ──

/**
 * Sauvegarde l'access token dans localStorage.
 * @param {string} token
 */
export function saveToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

/**
 * Recupere l'access token depuis localStorage.
 * @returns {string|null}
 */
export function getToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

/**
 * Supprime l'access token du localStorage.
 */
export function removeToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

// ── Refresh Token ──

/**
 * Sauvegarde le refresh token dans localStorage.
 * @param {string} token
 */
export function saveRefreshToken(token) {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

/**
 * Recupere le refresh token depuis localStorage.
 * @returns {string|null}
 */
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

/**
 * Supprime le refresh token du localStorage.
 */
export function removeRefreshToken() {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

// ── Nettoyage ──

/**
 * Supprime tous les tokens du localStorage.
 * Utile lors du logout complet.
 */
export function clearAllTokens() {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}

// ── Parsing ──

/**
 * Decode le payload d'un JWT sans verification cryptographique.
 * Utile pour lire le role, l'expiration, etc.
 *
 * @param {string} token
 * @returns {Object|null} payload decode ou null si invalide
 */
export function decodeToken(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

/**
 * Verifie si un token est expire.
 * @param {string} token
 * @returns {boolean} true si expire ou invalide
 */
export function isTokenExpired(token) {
  const payload = decodeToken(token);
  if (!payload || !payload.exp) return true;
  return Date.now() >= payload.exp * 1000;
}
