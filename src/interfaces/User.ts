import { roles } from '../constants/enumdata';

export interface User {
  id: string;
  username: string;
  password: string;
  role: roles;
  name: string;
  email: string;
}
