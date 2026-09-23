/**
 * @module authModel
 * @description JSDoc type definitions for the SmartGym Auth domain.
 * These types document the shape of data used throughout the auth store.
 */

/**
 * @typedef {Object} User
 * @property {string} id - Unique user identifier
 * @property {string} email - User email address
 * @property {string} firstName - User first name
 * @property {string} lastName - User last name
 * @property {'client'|'coach'|'admin'|'super_admin'} role - User role
 * @property {string} [phone] - User phone number
 * @property {string|null} [avatar] - Avatar URL
 * @property {string} [speciality] - Coach speciality
 * @property {string} [city] - Coach city
 */

/**
 * @typedef {'client'|'coach'|'admin'|'super_admin'} Role
 */

/**
 * @typedef {Object} AuthTokens
 * @property {string} accessToken - JWT-like access token
 * @property {string} refreshToken - JWT-like refresh token
 * @property {number} expiresAt - Token expiry timestamp (ms)
 */

/**
 * @typedef {Object} AuthSession
 * @property {string} id - Session identifier
 * @property {number} startedAt - Session start timestamp
 * @property {number} expiresAt - Session expiry timestamp
 * @property {number} remainingTime - Remaining time in ms
 */

/**
 * @typedef {Object} AuthOtp
 * @property {string|null} email - Email verification code
 * @property {string|null} phone - Phone verification code
 * @property {boolean} emailVerified - Email verified flag
 * @property {boolean} phoneVerified - Phone verified flag
 */

/**
 * @typedef {'VIEW_PROFILE'|'EDIT_PROFILE'|'CREATE_PROGRAM'|'EDIT_PROGRAM'|
 *   'DELETE_PROGRAM'|'BOOK_SESSION'|'PAY_SESSION'|'VIEW_DASHBOARD'|
 *   'MANAGE_USERS'|'MANAGE_COACHES'|'MANAGE_PROGRAMS'|'MANAGE_BOOKINGS'|
 *   'MANAGE_PAYMENTS'|'VIEW_REPORTS'|'SYSTEM_SETTINGS'} Permission
 */

/**
 * @typedef {'idle'|'loading'|'authenticated'|'unauthenticated'|'expired'|'error'} AuthStatus
 */

/**
 * @typedef {Object} AuthState
 * @property {User|null} user - Current authenticated user
 * @property {Role|null} role - Current user role
 * @property {string[]} permissions - Current user permissions
 * @property {string|null} accessToken - Access token
 * @property {string|null} refreshToken - Refresh token
 * @property {number|null} expiresAt - Token expiry timestamp
 * @property {boolean} rememberMe - Remember me flag
 * @property {boolean} isAuthenticated - Authentication status
 * @property {boolean} isLoading - Loading status
 * @property {boolean} isInitialized - Store initialization status
 * @property {string|null} error - Current error message
 * @property {AuthSession|null} session - Current session
 * @property {AuthOtp} otp - OTP verification state
 * @property {boolean} emailVerified - Email verified
 * @property {boolean} phoneVerified - Phone verified
 */

/**
 * @typedef {Object} AuthActions
 * @property {(credentials: {email:string, password:string, rememberMe?:boolean}) => Promise<User>} login
 * @property {() => Promise<void>} logout
 * @property {(data: {firstName:string, lastName:string, email:string, password:string, role?:string}) => Promise<User>} register
 * @property {() => Promise<void>} refreshSession
 * @property {(userData: Partial<User>) => void} updateUser
 * @property {(avatarUrl: string) => void} updateAvatar
 * @property {(role: Role) => void} changeRole
 * @property {(permissions: string[]) => void} setPermissions
 * @property {(code: string) => Promise<boolean>} verifyEmail
 * @property {(code: string) => Promise<boolean>} verifyPhone
 * @property {() => void} startLoading
 * @property {() => void} stopLoading
 * @property {() => void} clearError
 * @property {() => void} resetStore
 * @property {() => AuthSession} startSession
 * @property {() => void} endSession
 * @property {() => void} refresh
 * @property {() => number} getRemainingTime
 */

/**
 * @typedef {AuthState & AuthActions} AuthStore
 */

export {};
