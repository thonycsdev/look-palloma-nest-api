import { User } from './User';

export default interface Despesa {
  id: number;
  name: string;
  price: number;
  description: string;
  purchaseDate: Date;
  user: User;
}
