import { Role } from '../types/roles.types';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  roles: Role[];
}


export interface Vigilante {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  DNI: string;
}