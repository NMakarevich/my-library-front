import { Author } from './author';
import { User } from './user';

export interface Book {
  id: string;
  title: string;
  publishedYear: number;
  coverURL?: string;
  status: ReadStatus;
  createdUserId: string;
  authors: Author[];
  users: User[];
}

export enum ReadStatus {
  'NOT_READ' = 'notRead',
  'IN_READ' = 'inRead',
  'WILL_READ' = 'willRead',
  'DONE' = 'done',
}
