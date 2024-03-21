export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  productTypeId: string;
};

export type ProductsResponse = {
  current: number;
  pages: number;
  products: Product[];
  total: number;
};
