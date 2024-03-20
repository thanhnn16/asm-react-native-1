import {User} from '../user.type.ts';

export type Auth = {
  status: string;
  message: string;
  user: User;
};
