import { PaymentMethodEnum, StreamEnum, TermEnum, UserRole } from "../types/db";

export const USER_ROLE: UserRole[] = [
  "Admin",
  "Accountant",
  "Registrar",
  "Teacher",
];

export const TERMS: TermEnum[] = ["First Term", "Second Term", "Third Term"];
export const STREAMS: StreamEnum[] = ["art", "commerce", "science", "standard"];
export const PAYMENT_METHOD: PaymentMethodEnum[] = [
  "Card",
  "Cash",
  "Mobile Money",
  "Transfer",
];
