export interface Drug {
  id: string;
  name: string;
  description: string;
  category: Category;
  price: number;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
}
