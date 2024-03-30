import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {SERVICE_TYPE_URL} from '../../../utils/apiUrl.ts';
import {ServiceType} from './serviceType.type.ts';
import {Service} from '../service.type.ts';

export const serviceTypeApi = createApi({
  reducerPath: 'serviceTypeApi',
  baseQuery: fetchBaseQuery({baseUrl: SERVICE_TYPE_URL}),
  endpoints: builder => ({
    getServiceTypes: builder.query<ServiceType[], void>({
      query: () => ({
        url: 'all',
      }),
    }),
    getServicesByType: builder.query<Service[], string | null>({
      query: id => ({
        url: `/services/${id}`,
      }),
    }),
  }),
});

export const {useGetServiceTypesQuery, useGetServicesByTypeQuery} =
  serviceTypeApi;
