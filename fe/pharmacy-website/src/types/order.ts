import { Customer, User } from "./user";

export enum OrderStatus {}

export interface Order {
  id: string;
  customer: Customer;
  drugId: string[];
  quantity: number;
  createdAt: Date;
  user: User;
  amount: number
}
