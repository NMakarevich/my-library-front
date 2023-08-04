import { Book } from './book';

export interface User {
  id: string;
  firstName: string;
  lastName?: string;
  username: string;
  birthDate?: string;
  photoUrl?: string;
  books: Book[];
}

export interface Auth {
  username: string;
  password: string;
}

export interface LogIn {
  userId: string;
  token: string;
}
