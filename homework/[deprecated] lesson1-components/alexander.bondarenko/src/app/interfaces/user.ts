export interface User {
  id?: string | number;
  firstName: string;
  lastName: string;
  address: string;
  dob: string;
  gender: string;
  email: string
  createdAt?: string;
  updatedAt?: string;
  [propName: string]: any;
}
