import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query';
import {USER_URL} from '../../utils/apiUrl.ts';
import {User} from './user.type.ts';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: USER_URL}),
  endpoints: builder => ({
    useGetUser: builder.query<User, void>({
      query: () => '',
    }),
    useUpdateUser: builder.mutation<User, Partial<User>>({
      query: (body: Partial<User>) => ({
        url: '',
        method: 'PUT',
        body,
      }),
    }),
    useDeleteUser: builder.mutation<User, string>({
      query: id => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {useGetUser, useUpdateUser, useDeleteUser} = userApi.endpoints;

export default userApi;
