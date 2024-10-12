import { Category, Drug } from "./drug";
import { Order } from "./order";
import { Customer, Gender, User } from "./user";

// List of Categories
export const categories: Category[] = [
  { id: "cat_001", name: "Antibiotics" },
  { id: "cat_002", name: "Painkillers" },
];

// List of Drugs
export const drugs: Drug[] = [
  {
    id: "drug_001",
    name: "Amoxicillin",
    description: "Broad-spectrum antibiotic",
    category: categories[0],
    price: 15000,
  },
  {
    id: "drug_002",
    name: "Ibuprofen",
    description: "Pain reliever",
    category: categories[1],
    price: 10000,
  },
  {
    id: "drug_003",
    name: "Paracetamol",
    description: "Common pain reliever and fever reducer",
    category: categories[1],
    price: 8000,
  },
  {
    id: "drug_004",
    name: "Azithromycin",
    description: "Antibiotic for bacterial infections",
    category: categories[0],
    price: 20000,
  },
  {
    id: "drug_005",
    name: "Aspirin",
    description: "Pain reliever, reduces fever",
    category: categories[1],
    price: 12000,
  },
];

// List of Customers
export const customers: Customer[] = [
  {
    id: "cust_001",
    name: "John Doe",
    gender: Gender.MALE,
    phone: "0901234567",
    address: "123 Main Street",
  },
  {
    id: "cust_002",
    name: "Jane Roe",
    gender: Gender.FEMALE,
    phone: "0909876543",
    address: "456 Elm Street",
  },
  {
    id: "cust_003",
    name: "Sam Wilson",
    gender: Gender.OTHER,
    phone: "0932123456",
    address: "789 Oak Avenue",
  },
];

// List of Users (Doctors/Pharmacists)
export const users: User[] = [
  {
    id: "user_001",
    name: "Dr. Smith",
    phone: "0987654321",
    address: "456 Clinic Road",
    gender: Gender.MALE,
    isActive: true,
  },
  {
    id: "user_002",
    name: "Dr. Thompson",
    phone: "0912345678",
    address: "789 Medical Plaza",
    gender: Gender.FEMALE,
    isActive: true,
  },
  {
    id: "user_003",
    name: "Dr. Nguyen",
    phone: "0976543210",
    gender: Gender.FEMALE,
    isActive: true,
  },
];

// Combining them into Orders
export const orders: Order[] = [
  {
    id: "order_001",
    customer: customers[0],
    drugId: [drugs[0].id, drugs[1].id], // Amoxicillin and Ibuprofen
    quantity: 2,
    createdAt: new Date("2024-10-12T10:15:00"),
    user: users[0], // Dr. Smith
    amount: 123000,
  },
  {
    id: "order_002",
    customer: customers[1],
    drugId: [drugs[2].id], // Paracetamol
    quantity: 1,
    createdAt: new Date("2024-10-11T14:30:00"),
    user: users[1], // Dr. Thompson
    amount: 123000,
  },
  {
    id: "order_003",
    customer: customers[2],
    drugId: [drugs[3].id, drugs[4].id], // Azithromycin and Aspirin
    quantity: 3,
    createdAt: new Date("2024-10-10T09:45:00"),
    user: users[2], // Dr. Nguyen
    amount: 123000,
  },
  {
    id: "order_004",
    customer: customers[0],
    drugId: [drugs[0].id, drugs[1].id], // Amoxicillin and Ibuprofen
    quantity: 2,
    createdAt: new Date("2024-10-12T10:15:00"),
    user: users[0], // Dr. Smith
    amount: 123000,
  },
  {
    id: "order_005",
    customer: customers[1],
    drugId: [drugs[2].id], // Paracetamol
    quantity: 1,
    createdAt: new Date("2024-10-11T14:30:00"),
    user: users[1], // Dr. Thompson
    amount: 123000,
  },
  {
    id: "order_007",
    customer: customers[2],
    drugId: [drugs[3].id, drugs[4].id], // Azithromycin and Aspirin
    quantity: 3,
    createdAt: new Date("2024-10-10T09:45:00"),
    user: users[2], // Dr. Nguyen
    amount: 123000,
  },
];
