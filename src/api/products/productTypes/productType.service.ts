import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ProductType} from './productType.type.ts';
import {PRODUCT_TYPE_URL} from '../../../utils/apiUrl.ts';
import {Product} from '../product.type.ts';

export const productTypeApi = createApi({
  reducerPath: 'productTypeApi',
  baseQuery: fetchBaseQuery({baseUrl: PRODUCT_TYPE_URL}),
  endpoints: builder => ({
    getProductTypes: builder.query<ProductType[], void>({
      query: () => ({
        url: 'all',
      }),
    }),

    getProductByType: builder.query<Product[], string>({
      query: id => ({
        url: `products/${id}`,
      }),
    }),
  }),
});

export const {useGetProductTypesQuery, useGetProductByTypeQuery} =
  productTypeApi;
