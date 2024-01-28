import { ProductsResponse } from "../types/productTypes.ts";
import api from "../apiConfig.ts";

interface ProductService {
  getAllProducts(): Promise<ProductsResponse[]>;
}

export const getAllProducts = async (): Promise<ProductsResponse[]> => {
  const response = await api.get('/products');
  return response.data;
}

export const showProduct = async (id: number): Promise<ProductsResponse> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}
