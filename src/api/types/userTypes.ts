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
