import axios from "axios";
import { Platform } from "react-native";

export const API_URL = "http://localhost:8000/api";
const config = {
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    platform: Platform.OS
  }
};

const api = axios.create(config);


export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
    delete axios.defaults.headers.common["Authorization"];
  }
}

export function avatarUrl(avatar: string | null) {
  return `${config.baseURL.slice(0, -3)}storage/avatars/${avatar}`;
}


export default api;
