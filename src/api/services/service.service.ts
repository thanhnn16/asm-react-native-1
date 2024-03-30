import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SERVICE_URL} from '../../utils/apiUrl.ts';
import {Service} from './service.type.ts';

export const serviceApi = createApi({
  reducerPath: 'serviceApi',
  baseQuery: fetchBaseQuery({baseUrl: SERVICE_URL}),
  endpoints: builder => ({
    getServices: builder.query<Service[], void>({
      query: () => ({
        url: 'all',
      }),
    }),
    getService: builder.query<Service, string>({
      query: id => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const {useGetServicesQuery, useGetServiceQuery} = serviceApi;
