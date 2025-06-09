export interface User {
  id: string;
  username: string;
  password: string;
  role: 'ADMIN' | 'USER' | 'ACCOUNTS';
  name: string;
  email: string;
}