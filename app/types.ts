// types.ts
export interface User {
  id: string;
  email: string;
  password: string; // In real app, never store plain text passwords
  firstName: string;
  lastName: string;
  role: "customer" | "admin";
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  categoryId: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Order {
  id: string;
  userId: string;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  addressId: string;
  paymentId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number; // Price at time of purchase
}

export interface CartItem {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  addedAt: Date;
}

export interface Address {
  id: string;
  userId: string;
  fullName: string;
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}

export interface Payment {
  id: string;
  orderId: string;
  amount: number;
  method: "credit_card" | "paypal" | "bank_transfer";
  status: "pending" | "completed" | "failed" | "refunded";
  transactionId: string;
  createdAt: Date;
}

// Mock Data
export const mockUsers: User[] = [
  {
    id: "u1",
    email: "john.doe@example.com",
    password: "hashed_password_1",
    firstName: "John",
    lastName: "Doe",
    role: "customer",
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-01-15"),
  },
  {
    id: "u2",
    email: "admin@melonshop.com",
    password: "hashed_password_2",
    firstName: "Admin",
    lastName: "User",
    role: "admin",
    createdAt: new Date("2023-01-10"),
    updatedAt: new Date("2023-01-10"),
  },
];

export const mockCategories: Category[] = [
  {
    id: "c1",
    name: "Watermelons",
    description: "Sweet and juicy watermelons perfect for summer",
    imageUrl:
      "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c2",
    name: "Cantaloupes",
    description: "Sweet orange-fleshed melons with a netted skin",
    imageUrl:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "c3",
    name: "Honeydew",
    description: "Smooth, pale green melons with a sweet flavor",
    imageUrl:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Seedless Watermelon",
    description:
      "Sweet and juicy seedless watermelon, perfect for picnics and summer gatherings.",
    price: 5.99,
    imageUrl:
      "https://images.unsplash.com/photo-1563114773-84221bd62daa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 50,
    categoryId: "c1",
    featured: true,
    createdAt: new Date("2023-03-01"),
    updatedAt: new Date("2023-03-01"),
  },
  {
    id: "p2",
    name: "Organic Cantaloupe",
    description:
      "Organically grown cantaloupe with sweet orange flesh and a delightful aroma.",
    price: 4.49,
    imageUrl:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 30,
    categoryId: "c2",
    featured: true,
    createdAt: new Date("2023-03-02"),
    updatedAt: new Date("2023-03-02"),
  },
  {
    id: "p3",
    name: "Honeydew Melon",
    description:
      "Refreshing honeydew melon with pale green flesh and a subtle sweetness.",
    price: 3.99,
    imageUrl:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 25,
    categoryId: "c3",
    featured: false,
    createdAt: new Date("2023-03-03"),
    updatedAt: new Date("2023-03-03"),
  },
  {
    id: "p4",
    name: "Mini Watermelon",
    description:
      "Smaller sized watermelon perfect for small families or individuals.",
    price: 3.49,
    imageUrl:
      "https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 40,
    categoryId: "c1",
    featured: false,
    createdAt: new Date("2023-03-04"),
    updatedAt: new Date("2023-03-04"),
  },
];

export const mockAddresses: Address[] = [
  {
    id: "a1",
    userId: "u1",
    fullName: "John Doe",
    streetAddress: "123 Main St",
    city: "Melonville",
    state: "CA",
    postalCode: "90210",
    country: "USA",
    isDefault: true,
  },
];

export const mockCartItems: CartItem[] = [
  {
    id: "ci1",
    userId: "u1",
    productId: "p1",
    quantity: 2,
    addedAt: new Date("2023-05-10"),
  },
  {
    id: "ci2",
    userId: "u1",
    productId: "p3",
    quantity: 1,
    addedAt: new Date("2023-05-10"),
  },
];

export const mockOrders: Order[] = [
  {
    id: "o1",
    userId: "u1",
    status: "delivered",
    total: 14.47,
    addressId: "a1",
    paymentId: "pay1",
    createdAt: new Date("2023-04-15"),
    updatedAt: new Date("2023-04-18"),
  },
];

export const mockOrderItems: OrderItem[] = [
  {
    id: "oi1",
    orderId: "o1",
    productId: "p1",
    quantity: 2,
    price: 5.99,
  },
  {
    id: "oi2",
    orderId: "o1",
    productId: "p2",
    quantity: 1,
    price: 4.49,
  },
];

export const mockPayments: Payment[] = [
  {
    id: "pay1",
    orderId: "o1",
    amount: 14.47,
    method: "credit_card",
    status: "completed",
    transactionId: "tx_123456789",
    createdAt: new Date("2023-04-15"),
  },
];
