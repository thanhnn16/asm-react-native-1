import axios from "axios";
import { Platform } from "react-native";

const config = {
  baseURL: "http://localhost:8000/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    platform: Platform.OS
  },
};

const api = axios.create(config);


export function setAuthToken(token: string | null) {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
}

export default api;
