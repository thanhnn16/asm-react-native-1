import { RegisterResponse, LoginResponse, CheckPhoneNumResponse } from '../types/authTypes';
import api from "../apiConfig.ts";

interface RegisterData {
  phone_number: string;
  password: string;
}

interface LoginData {
  phone_number: string;
  password: string;
}

interface CheckPhoneNumData {
  phone_number: string;
}

export const register = async (data: RegisterData): Promise<RegisterResponse> => {
  const response = await api.post<RegisterResponse>('/register', data);
  return response.data;
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', data);
  return response.data;
}

export const checkPhoneNum = async (data: CheckPhoneNumData): Promise<CheckPhoneNumResponse> => {
  const response = await api.post('/check-phone-number', data);
  return response.data;
}
