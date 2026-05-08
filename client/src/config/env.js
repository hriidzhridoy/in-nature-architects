const resolveApiUrl = () => {
  const configuredUrl = import.meta.env.VITE_API_URL || "";

  if (typeof window === "undefined" || !configuredUrl) {
    return configuredUrl;
  }

  try {
    const parsedUrl = new URL(configuredUrl);
    const isLocalhostTarget =
      parsedUrl.hostname === "localhost" || parsedUrl.hostname === "127.0.0.1";
    const isRemoteViewer =
      window.location.hostname !== "localhost" &&
      window.location.hostname !== "127.0.0.1";

    if (isLocalhostTarget && isRemoteViewer) {
      parsedUrl.hostname = window.location.hostname;
      return parsedUrl.toString().replace(/\/$/, "");
    }

    return configuredUrl;
  } catch {
    return configuredUrl;
  }
};

const APP_URL = resolveApiUrl();

export const MEDIA_URL = APP_URL.replace(/\/api\/?$/, "");
export const API_URL = `${MEDIA_URL}/api`;
