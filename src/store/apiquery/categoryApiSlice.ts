import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL, inject_headers } from '../../Utils/Generals';

export const categoryApiSlice = createApi({
    
    reducerPath : 'api/categories',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL, headers : inject_headers()}),
    tagTypes : ['Categories'],

    endpoints : (builder) => ({

        getAllCategories : builder.query(({
            query : () => '/category',
            providesTags : ['Categories']
        })),

        getCategory : builder.query({
            query : (category) => `/category/${category.id}`,
            providesTags : ['Categories']
        }),

        createCategory: builder.mutation({
            query : (category) => ({
                url : `/category/create`,
                method : 'POST',
                body : category,
            }),
           invalidatesTags : ['Categories']
        }),

        updateCategory: builder.mutation({
            query : (data) => ({
                url : 'category/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Categories']
        }),

        deleteCategory: builder.mutation({
            query : (id : number) => ({
                url : '/category/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Categories']
        })
    })
})


export const {
    useGetAllCategoriesQuery,
    useGetCategoryQuery,
    useUpdateCategoryMutation,
    useCreateCategoryMutation,
    useDeleteCategoryMutation,
 } = categoryApiSlice;


//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const categoryApi = createApi({
//   reducerPath: 'categoryApi',
//   baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:1337/api' }),
//   endpoints: (builder) => ({
//     getCategories: builder.query({
//       query: () => '/categories',
//     }),
//     getCategoryById: builder.query({
//       query: (id) => `/categories/${id}`,
//     }),
//     createCategory: builder.mutation({
//       query: (newCategory) => ({
//         url: '/categories',
//         method: 'POST',
//         body: newCategory,
//       }),
//     }),
//     updateCategory: builder.mutation({
//       query: ({ id, ...rest }) => ({
//         url: `/categories/${id}`,
//         method: 'PUT',
//         body: rest,
//       }),
//     }),
//     deleteCategory: builder.mutation({
//       query: (id) => ({
//         url: `/categories/${id}`,
//         method: 'DELETE',
//       }),
//     }),
//   }),
// });

// export const {
//   useGetCategoriesQuery,
//   useGetCategoryByIdQuery,
//   useCreateCategoryMutation,
//   useUpdateCategoryMutation,
//   useDeleteCategoryMutation,
// } = categoryApi;

// export default categoryApi;
