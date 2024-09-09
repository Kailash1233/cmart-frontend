import { AUTH_TOKEN } from "./constant";

// Get token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem(AUTH_TOKEN);
};

// Set token in localStorage
export const setToken = (token: string | null): void => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }
};

// Remove token from localStorage
export const removeToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN);
};
