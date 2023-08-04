import { Book } from './book';

export interface Author {
  id: string;
  firstName: string;
  lastName?: string;
  photoURL?: string;
  createdUserId: string;
  books: Book[];
}
