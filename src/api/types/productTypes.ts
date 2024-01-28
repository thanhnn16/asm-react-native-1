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

export interface ProductsResponse {
  id: number;
  name: string;
  description: string;
  price: string;
  status: string;
  product_type_id: number;
  product_type: ProductType;
  product_images: ProductImage[];
}
