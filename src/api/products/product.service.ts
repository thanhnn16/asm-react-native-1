import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {PRODUCT_URL} from '../../utils/apiUrl.ts';
import {Product, ProductsResponse} from './product.type.ts';

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({baseUrl: PRODUCT_URL}),
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, number>({
      query: (page = 1) => ({
        url: `all?page=${page}`,
      }),
    }),
    getProduct: builder.query<Product, string>({
      query: id => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const {useGetProductsQuery, useGetProductQuery} = productApi;
