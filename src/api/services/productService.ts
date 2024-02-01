import { Product, ProductResponse, ProductType } from "../types/productTypes.ts";
import api from "../apiConfig.ts";

interface ProductService {
  getAllProducts(): Promise<ProductResponse[]>;
}

export const getAllProducts = async (page = 1): Promise<ProductResponse[]> => {
  const response = await api.get(`/products?page=${page}`);
  return response.data.products;
}

export const showProduct = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
}

export const searchProduct = async (name: string): Promise<ProductResponse[]> => {
  const response = await api.get(`/products/search?s=${name}`);
  return response.data.products;
}

export const getProductsByCategory = async (type: string): Promise<ProductResponse[]> => {
  const response = await api.get(`/products/category/${type}`);
  return response.data.products;
}

export const getProductTypes = async (): Promise<ProductType[]> => {
  const response = await api.get(`/product-types`);
  return response.data.data;
}
