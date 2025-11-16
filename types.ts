
export type Category = 'Home Decor' | 'Fashion' | 'Art' | 'Accessories';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: Category;
}
