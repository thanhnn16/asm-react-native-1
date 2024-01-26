export interface RegisterResponse {
  token: string;
  userId: number;
}

export interface LoginResponse {
  message: string;
  token: string;
  userId: number;
}

export interface CheckPhoneNumResponse {
  message: string;
}
