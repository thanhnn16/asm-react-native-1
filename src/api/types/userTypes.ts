export interface UserResponse {
  user: {
    address: string | null;
    avatar: string | null;
    created_at: string;
    dob: string | null;
    email: string | null;
    full_name: string;
    gender: string | null;
    id: number;
    phone_number: string;
    role: string;
    updated_at: string;
  }
}

export interface UserRequest {
  uid: number;
  full_name: string;
  email: string | null;
  dob: string | null;
  address: string | null;
  gender: string | null;
}

export interface UserUpdateResponse {
  message: string;
  status: number;
}