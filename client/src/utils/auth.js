const ADMIN_TOKEN_KEY = "adminToken";

export const getAdminToken = () => localStorage.getItem(ADMIN_TOKEN_KEY);

export const clearAdminToken = () => {
  localStorage.removeItem(ADMIN_TOKEN_KEY);
};

const parseJwtPayload = (token) => {
  try {
    const [, payload] = token.split(".");

    if (!payload) {
      return null;
    }

    const normalizedPayload = payload.replace(/-/g, "+").replace(/_/g, "/");
    const decodedPayload = atob(normalizedPayload);

    return JSON.parse(decodedPayload);
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token) => {
  if (!token) {
    return true;
  }

  const payload = parseJwtPayload(token);

  if (!payload?.exp) {
    return true;
  }

  return payload.exp * 1000 <= Date.now();
};

export const getValidAdminToken = () => {
  const token = getAdminToken();

  if (!token || isTokenExpired(token)) {
    clearAdminToken();
    return null;
  }

  return token;
};

export const setAdminToken = (token) => {
  localStorage.setItem(ADMIN_TOKEN_KEY, token);
};
