export default interface Product {
  _id: string;
  category: string;
  color: string[];
  createdAt: string;
  description: string;
  imageUrls?: string[];
  imageKeys: string[];
  manufacturer: string;
  name: string;
  price: number;
  ratings: number;
  sale?: boolean;
  salePrice?: number | null;
  soldCount?: number;
  stock: number;
  updatedAt: string;
}
