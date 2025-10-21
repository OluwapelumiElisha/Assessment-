interface Transaction {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}


interface User {
  first_name: string;
  last_name: string;
  email: string;
}