import { Customer, User } from "./user";

export enum OrderStatus {}

export interface Order {
  id: string;
  customer: Customer;
  items: OrderItem[];
  quantity: number;
  createdAt: Date;
  user: User;
  amount: number;
}

export interface OrderItem {
  id: string;
  orderId: string;
  drugId: string;
  quantity: number;
}
