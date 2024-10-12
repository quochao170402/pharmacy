import { Customer, Gender } from "../../types/user";

export const customers: Customer[] = [
  {
    id: "1",
    name: "Alice Smith",
    gender: Gender.FEMALE,
    phone: "123-456-7890",
    address: "123 Main St, Springfield, USA",
  },
  {
    id: "2",
    name: "Bob Johnson",
    gender: Gender.MALE,
    phone: "234-567-8901",
    address: "456 Elm St, Springfield, USA",
  },
  {
    id: "3",
    name: "Charlie Brown",
    gender: Gender.MALE,
    phone: "345-678-9012",
  },
  {
    id: "4",
    name: "Diana Prince",
    gender: Gender.FEMALE,
    phone: "456-789-0123",
    address: "789 Maple St, Springfield, USA",
  },
  {
    id: "5",
    name: "Eve Adams",
    gender: Gender.FEMALE,
    phone: "567-890-1234",
  },
  {
    id: "6",
    name: "Frank Castle",
    gender: Gender.MALE,
    phone: "678-901-2345",
    address: "321 Oak St, Springfield, USA",
  },
  {
    id: "7",
    name: "Grace Hopper",
    gender: Gender.OTHER,
    phone: "789-012-3456",
  },
  {
    id: "8",
    name: "Hank Pym",
    gender: Gender.MALE,
    phone: "890-123-4567",
    address: "654 Pine St, Springfield, USA",
  },
  {
    id: "9",
    name: "Ivy League",
    gender: Gender.FEMALE,
    phone: "901-234-5678",
    address: "987 Birch St, Springfield, USA",
  },
  {
    id: "10",
    name: "Jack Sparrow",
    gender: Gender.OTHER,
    phone: "012-345-6789",
  },
];
