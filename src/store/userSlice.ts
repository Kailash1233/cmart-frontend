import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, removeItem } from "../Utils/Generals";
import RoutePaths from "../config";


export const userSlice = createSlice({
    
    name : 'user',

    initialState : {},

    reducers : {

        setUser : (state, action) => {

            state = action.payload;

            return state;
        },

        logoutCurrentUser : (state, action) => {

            state = {};
            // console.log('hello')
            return state;
        },
    }

})

export const { setUser, logoutCurrentUser } = userSlice.actions;

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const userApi = createApi({
//   reducerPath: 'userApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
//   endpoints: (builder) => ({
//     getUsers: builder.query({
//       query: () => '/users',
//     }),
//     getUserById: builder.query({
//       query: (id) => `/users/${id}`,
//     }),
//     createUser: builder.mutation({
//       query: (newUser) => ({
//         url: '/users',
//         method: 'POST',
//         body: newUser,
//       }),
//     }),
//     updateUser: builder.mutation({
//       query: ({ id, ...rest }) => ({
//         url: `/users/${id}`,
//         method: 'PUT',
//         body: rest,
//       }),
//     }),
//     deleteUser: builder.mutation({
//       query: (id) => ({
//         url: `/users/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetUsersQuery,
//   useGetUserByIdQuery,
//   useCreateUserMutation,
//   useUpdateUserMutation,
//   useDeleteUserMutation,
// } = userApi;

// export default userApi;
