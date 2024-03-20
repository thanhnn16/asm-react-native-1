import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {AUTH_URL} from '../../../utils/apiUrl.ts';
import type Auth from './auth.type.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: AUTH_URL}),
  endpoints: builder => ({
    login: builder.mutation<Auth, {phone_number: string; password: string}>({
      query: body => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<Auth, {phone_number: string; password: string}>({
      query: body => ({
        url: 'register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = authApi;
