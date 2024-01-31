import { UserResponse } from "../types/userTypes.ts";
import api from "../apiConfig.ts";

export const getUser = async (userId: string): Promise<UserResponse> => {
  const response = await api.get<UserResponse>(`/user/${userId}`);
  return response.data;
}
