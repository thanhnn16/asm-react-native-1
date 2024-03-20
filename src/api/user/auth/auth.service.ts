import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AUTH_URL} from '../../../utils/apiUrl.ts';
import type {Auth} from './auth.type.ts';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({baseUrl: AUTH_URL}),
  tagTypes: ['Auth'],
  endpoints: builder => ({
    userLogin: builder.mutation<Auth, {phoneNumber: string; password: string}>({
      query: body => ({
        url: 'login',
        method: 'POST',
        body,
      }),
    }),
    userRegister: builder.mutation<
      Auth,
      {phoneNumber: string; password: string}
    >({
      query: body => ({
        url: 'register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {useUserLoginMutation, useUserRegisterMutation} = authApi;
