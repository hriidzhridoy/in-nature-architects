import axios from "axios";
import { API_URL } from "../config/env";

const API = axios.create({
  baseURL: API_URL,
});

const getAdminToken = () => localStorage.getItem("adminToken");

const mergeConfig = (config = {}, headers = {}) => ({
  ...config,
  headers: {
    ...config.headers,
    ...headers,
  },
});

export const withAuth = (config = {}) => {
  const token = getAdminToken();

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

export default API;
