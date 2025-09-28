export type CategoryNode = {
  id: string;
  name: string;
  slug: string;
  children: CategoryNode[];
};

export type Product = {
  id: string;
  category: string[]; // [level1, level2, level3]
  slug: string;
  title: string;
  price: number; // in KZT
  popularity: number; // 0-100
  isNew: boolean; // deprecated, use createdAt
  createdAt?: string; // ISO date string
  image: string;
};


