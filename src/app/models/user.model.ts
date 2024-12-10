export interface User {
  _id: string;
  balance: number;
  transactions: {
    amount: number;
    to: string;
    toId: string;
    at: Date | number | string;
  }[];
  phone?: string;
  name: string;
  email?: string;
}
