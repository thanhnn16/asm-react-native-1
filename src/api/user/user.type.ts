interface User {
  _id: string;
  phoneNumber: string;
  role: string;
  password: string;
  token: string;
  avatar: string;
  email: string;
  info: {
    fullName: string;
    dob: string;
    gender: number;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type AvatarResponse = {
  avatar: string;
  message: string;
  status: string;
};

export type {User};
