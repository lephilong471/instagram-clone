export const JWT = 'accessToken';
export const SPJWT = 'sAccessToken';
export const SPTENANTID = 'sp-tenant-id';
export const SPUSERGUID = 'sp-user-guid';
export const REFRESHTOKEN = 'sRefreshToken';
export const LOGIN_USER_EMAIL = 'login-user-email';
export const TOKEN_EXPIRY = 'token_expiry';
export const LANG = 'lang';
export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const USER_ACCOUNT =
  typeof window !== 'undefined' ? localStorage.getItem('user') || '' : null;
