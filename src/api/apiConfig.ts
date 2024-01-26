import axios from "axios";
import { Platform } from "react-native";

const config = {
  baseURL: "http://10.0.1.128:8000/api",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    platform: Platform.OS
  },
};

export function setAuthToken(token: string | null) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

const api = axios.create(config);

export default api;
