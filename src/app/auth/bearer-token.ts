export const TOKEN_KEY = 'bearer_token';

export function getBearerToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setBearerToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeBearerToken() {
  localStorage.removeItem(TOKEN_KEY);
}
