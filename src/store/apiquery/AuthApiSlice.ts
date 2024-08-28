import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL, inject_headers } from '../../Utils/Generals';

export const authApiSlice = createApi({
    
    reducerPath : 'api/auth',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL, headers : inject_headers()}),
    tagTypes : ['Auth'],

    endpoints : (builder) => ({

        refresh : builder.query(({
            query : () => '/user/refresh',
            providesTags : ['Auth']
        })),

        login: builder.mutation({
            query : (category) => ({
                url : `/user/login`,
                method : 'POST',
                body : category,
            }),
           invalidatesTags : ['Auth']
        }),

        register: builder.mutation({
            query : (data) => ({
                url : 'user/create',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Auth']
        })
    })
})


export const {
    useRefreshQuery,
    useLoginMutation,
    useRegisterMutation
 } = authApiSlice;


//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const AuthApiSlice = createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: '/auth/local',
//         method: 'POST',
//         body: credentials,
//       }),
//     }),
//     register: builder.mutation({
//       query: (userData) => ({
//         url: '/auth/local/register',
//         method: 'POST',
//         body: userData,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useRegisterMutation } = AuthApiSlice;
// export default AuthApiSlice;
