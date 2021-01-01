import { Role } from '../enums/role';

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
}
