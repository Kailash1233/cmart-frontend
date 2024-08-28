import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, inject_headers } from "../../Utils/Generals";

export const usersApiSlice = createApi({
  reducerPath: "api/users",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL, headers: inject_headers() }),
  tagTypes: ["Users"],

  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/user",
      providesTags: ["Users"],
    }),

    getUser: builder.query({
      query: (user) => `/user/${user}`,
      providesTags: ["Users"],
    }),

    getStartistics: builder.query({
      query: () => "/statistics",
    }),

    createUser: builder.mutation({
      query: (user) => ({
        url: `/user/create`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: "user/edit",
        method: "POST",
        body: { _method: "patch", ...data },
      }),
      invalidatesTags: ["Users"],
    }),

    deleteUser: builder.mutation({
      query: (id: number) => ({
        url: "/user/delete",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
  useDeleteUserMutation,
  useGetStartisticsQuery,
} = usersApiSlice;

//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL, inject_headers } from '../../Utils/Generals';

// export const usersApiSlice = createApi({
//     reducerPath: 'api/users',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//         headers: inject_headers(),
//     }),
//     tagTypes: ['Users'],

//     endpoints: (builder) => ({
//         getAllUsers: builder.query({
//             query: () => '/users', // Updated for Strapi
//             providesTags: ['Users'],
//         }),

//         getUser: builder.query({
//             query: (id) => `/users/${id}`, // Updated for Strapi
//             providesTags: ['Users'],
//         }),

//         getStatistics: builder.query({
//             query: () => '/statistics', // Assuming this is a custom Strapi endpoint
//         }),

//         createUser: builder.mutation({
//             query: (user) => ({
//                 url: '/users', // Updated for Strapi
//                 method: 'POST',
//                 body: user,
//             }),
//             invalidatesTags: ['Users'],
//         }),

//         updateUser: builder.mutation({
//             query: ({ id, ...data }) => ({
//                 url: `/users/${id}`, // Updated for Strapi
//                 method: 'PUT', // Changed to PUT for Strapi
//                 body: data,
//             }),
//             invalidatesTags: ['Users'],
//         }),

//         deleteUser: builder.mutation({
//             query: (id) => ({
//                 url: `/users/${id}`, // Updated for Strapi
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Users'],
//         }),
//     }),
// });

// export const {
//     useGetAllUsersQuery,
//     useGetUserQuery,
//     useCreateUserMutation,
//     useUpdateUserMutation,
//     useDeleteUserMutation,
//     useGetStatisticsQuery,
// } = usersApiSlice;
