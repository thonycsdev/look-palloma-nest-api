import { User } from './User';

export default interface Despesa {
  id: string;
  name: string;
  price: number;
  description: string;
  purchaseDate: Date;
  user?: User;
  userId?: string;
}
