interface Address {
  street?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export default interface User {
  _id: string;
  username: string;
  email: string;
  role: 'admin' | 'user';
  firstName: string;
  lastName: string;
  address?: Address;
  phone?: string;
  wishlist: any[];
  orderHistory: any[];
}
