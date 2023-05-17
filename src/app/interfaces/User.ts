import { Role } from '../types/roles.types';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
}
