import { Category, Drug } from "./drug";
import { Order, OrderItem } from "./order";
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

// Helper Functions
function getRandomElement<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateRandomQuantity(): number {
  return Math.floor(Math.random() * 10) + 1; // Quantity between 1 and 10
}

function generateRandomAmount(items: OrderItem[]): number {
  let total = 0;
  items.forEach((item) => {
    const drug = drugs.find((d) => d.id === item.drugId);
    if (drug) {
      total += drug.price * item.quantity;
    }
  });
  return total;
}

// Arrays to store Orders and OrderItems
export const orders: Order[] = [];

// Generate 100 orders and corresponding order items
for (let i = 0; i < 100; i++) {
  const randomCustomer = getRandomElement(customers);
  const randomUser = getRandomElement(users);

  // Create random OrderItems
  const randomDrugs = [
    getRandomElement(drugs),
    ...(Math.random() > 0.5 ? [getRandomElement(drugs)] : []), // Randomly select 1 or 2 drugs
  ];

  const orderItems: OrderItem[] = randomDrugs.map((drug, index) => ({
    id: `item_${(i + 1).toString().padStart(3, "0")}_${index + 1}`,
    orderId: `order_${(i + 1).toString().padStart(3, "0")}`,
    drugId: drug.id,
    quantity: generateRandomQuantity(),
  }));

  // Calculate total quantity and amount
  const totalQuantity = orderItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const totalAmount = generateRandomAmount(orderItems);

  // Create the order
  orders.push({
    id: `order_${(i + 1).toString().padStart(3, "0")}`,
    customer: randomCustomer,
    items: orderItems,
    quantity: totalQuantity,
    createdAt: new Date(
      2024,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1,
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60)
    ),
    user: randomUser,
    amount: totalAmount,
  });
}

console.log(orders);
