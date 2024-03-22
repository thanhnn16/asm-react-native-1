import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {USER_URL} from '../../utils/apiUrl.ts';
import {AvatarResponse, User} from './user.type.ts';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({baseUrl: USER_URL}),
  endpoints: builder => ({
    getUser: builder.query<User, string>({
      query: id => `/${id}`,
    }),
    updateUser: builder.mutation<User, Partial<User>>({
      query: ({id, ...body}: Partial<User> & {id: string}) => ({
        url: `/${id}`,
        method: 'PUT',
        body,
      }),
    }),
    uploadAvatar: builder.mutation<AvatarResponse, FormData>({
      query: body => ({
        url: '/upload-avatar',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
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

export const {
  useGetUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useUploadAvatarMutation,
} = userApi;
