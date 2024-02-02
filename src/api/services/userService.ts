import {  UserRequest, UserResponse, UserUpdateResponse } from "../types/userTypes.ts";
import api from "../apiConfig.ts";

export const getUser = async (userId: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`/user/${userId}`);
  return response.data;
}

export const updateUser = async (data: UserRequest): Promise<UserUpdateResponse> => {
  const response = await api.put<UserUpdateResponse>(`/user/update`, data);
  return response.data;
}
