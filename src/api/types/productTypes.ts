export interface ProductImage {
  id: number;
  product_id: number;
  images: string;
}

export interface ProductType {
  id: number;
  name: string;
  description: string | null;
}

export interface Product{
  id: number;
  name: string;
  description: string;
  price: string;
  status: string;
  product_type_id: number;
  product_type: ProductType;
  product_images: ProductImage[];
}

export interface ProductResponse {
  current_page: number;
  data: Product[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  next_page_url: string | null;
  path: string;
  prev_page_url: string | null;
  to: number;
  total: number;
}
