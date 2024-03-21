interface User {
  _id: string;
  phoneNumber: string;
  role: string;
  password: string;
  token: string;
  avatar: string;
  info: {
    fullName: string;
    dob: string;
    gender: number;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type {User};
