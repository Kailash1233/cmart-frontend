import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { ProductType } from '../../components/ProductCart';
import { BASE_URL, inject_headers } from '../../Utils/Generals';

export const productApiSlice = createApi({
    
    reducerPath : 'api/products',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL, headers : inject_headers()}),
    tagTypes : ['Products'],

    endpoints : (builder) => ({

        getAllProducts : builder.query(({
            query : () => '/product',
            providesTags : ['Products']
        })),

        getProduct : builder.query({
            query : (id : string) => `/product/${id}`,
            providesTags : ['Products']
        }),

        searchProduct : builder.query({
            query : (query : string) => `/product/search/${query}`,
            providesTags : ['Products']
        }),

        getRandomProduct : builder.query({
            query : () => `/product/types/random`,
            providesTags : ['Products']
        }),

        getBestProducts : builder.query({
            query : () => `/product/types/best-sellers`,
            providesTags : ['Products']
        }),

        createProduct: builder.mutation({
            query : (product) => ({
                url : `/product/create`,
                method : 'POST',
                body : product,
            }),
           invalidatesTags : ['Products']
        }),

        updateProduct: builder.mutation({
            query : (data) => ({
                url : 'product/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Products']
        }),

        deleteProduct: builder.mutation({
            query : (id : number) => ({
                url : '/product/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Products']
        })
    })
})


export const {
    useGetAllProductsQuery,
    useGetProductQuery,
    useSearchProductQuery,
    useGetRandomProductQuery,
    useGetBestProductsQuery,
    useUpdateProductMutation,
    useCreateProductMutation,
    useDeleteProductMutation,
 } = productApiSlice;

 
//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL, inject_headers } from '../../Utils/Generals';

// export const productApiSlice = createApi({
//     reducerPath: 'api/products',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//         headers: inject_headers(),
//     }),
//     tagTypes: ['Products'],

//     endpoints: (builder) => ({
//         getAllProducts: builder.query({
//             query: () => '/products', // Updated for Strapi
//             providesTags: ['Products'],
//         }),

//         getProduct: builder.query({
//             query: (id) => `/products/${id}`, // Updated for Strapi
//             providesTags: ['Products'],
//         }),

//         searchProduct: builder.query({
//             query: (query) => `/products?name_contains=${query}`, // Updated for Strapi
//             providesTags: ['Products'],
//         }),

//         getRandomProduct: builder.query({
//             query: () => `/products?random=true`, // Assumed Strapi custom filter
//             providesTags: ['Products'],
//         }),

//         getBestProducts: builder.query({
//             query: () => `/products?best_seller=true`, // Assumed Strapi custom filter
//             providesTags: ['Products'],
//         }),

//         createProduct: builder.mutation({
//             query: (product) => ({
//                 url: '/products', // Updated for Strapi
//                 method: 'POST',
//                 body: product,
//             }),
//             invalidatesTags: ['Products'],
//         }),

//         updateProduct: builder.mutation({
//             query: ({ id, ...data }) => ({
//                 url: `/products/${id}`, // Updated for Strapi
//                 method: 'PUT', // Changed to PUT for Strapi
//                 body: data,
//             }),
//             invalidatesTags: ['Products'],
//         }),

//         deleteProduct: builder.mutation({
//             query: (id) => ({
//                 url: `/products/${id}`, // Updated for Strapi
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Products'],
//         }),
//     }),
// });

// export const {
//     useGetAllProductsQuery,
//     useGetProductQuery,
//     useSearchProductQuery,
//     useGetRandomProductQuery,
//     useGetBestProductsQuery,
//     useCreateProductMutation,
//     useUpdateProductMutation,
//     useDeleteProductMutation,
// } = productApiSlice;
