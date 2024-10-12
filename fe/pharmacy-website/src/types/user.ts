

export interface User {
  id: string;
  name: string;
  phone: string;
  address?: string;
  gender?: Gender;
  isActive?: boolean;
}

export interface Customer {
  id: string;
  name: string;
  gender: Gender;
  phone: string;
  address?: string;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER",
}
