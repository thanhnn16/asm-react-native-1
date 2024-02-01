import { ProductResponse } from "../types/productTypes.ts";
import api from "../apiConfig.ts";

interface ProductService {
  getAllProducts(): Promise<ProductResponse[]>;
}

export const getAllProducts = async (page = 1): Promise<ProductResponse[]> => {
  const response = await api.get(`/products?page=${page}`);
  return response.data.products;
}

export const showProduct = async (id: number): Promise<ProductResponse> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
}

export const searchProduct = async (name: string): Promise<ProductResponse[]> => {
  const response = await api.get(`/products/search?s=${name}`);
  return response.data.products;
}
