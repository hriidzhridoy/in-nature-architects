import axios from "axios";
import { API_URL } from "../config/env";
import { clearAdminToken, getValidAdminToken } from "../utils/auth";

const API = axios.create({
  baseURL: API_URL,
});

const mergeConfig = (config = {}, headers = {}) => ({
  ...config,
  headers: {
    ...config.headers,
    ...headers,
  },
});

export const withAuth = (config = {}) => {
  const token = getValidAdminToken();

  if (!token) {
    return config;
  }

  return mergeConfig(config, {
    Authorization: `Bearer ${token}`,
  });
};

export const withMultipartAuth = (config = {}) =>
  withAuth(
    mergeConfig(config, {
      "Content-Type": "multipart/form-data",
    }),
  );

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearAdminToken();
    }

    return Promise.reject(error);
  },
);

export default API;
