import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {USER_URL} from '../../utils/apiUrl.ts';
import {User} from './user.type.ts';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: USER_URL}),
  endpoints: builder => ({
    getUser: builder.query<User, string>({
      query: id => `/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: (body: Partial<User>) => ({
        url: '',
        method: 'PUT',
        body,
      }),
    }),
    deleteUser: builder.mutation<User, string>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useGetUserQuery, useUpdateUserMutation, useDeleteUserMutation} =
  userApi;
