const APP_URL = import.meta.env.VITE_API_URL || "";

export const MEDIA_URL = APP_URL.replace(/\/api\/?$/, "");
export const API_URL = `${MEDIA_URL}/api`;
