import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { BASE_URL, inject_headers } from '../../Utils/Generals';

export const slideApiSlice = createApi({
    
    reducerPath : 'api/slides',
    baseQuery : fetchBaseQuery({baseUrl : BASE_URL, headers : inject_headers()}),
    tagTypes : ['Slides'],

    endpoints : (builder) => ({

        getAllSlides : builder.query(({
            query : () => '/slide',
            providesTags : ['Slides']
        })),

        getSlide : builder.query({
            query : (slide) => `/slide/${slide.id}`,
            providesTags : ['Slides']
        }),

        createSlide: builder.mutation({
            query : (slide) => ({
                url : `/slide/create`,
                method : 'POST',
                body : slide,
            }),
           invalidatesTags : ['Slides']
        }),

        updateSlide: builder.mutation({
            query : (data) => ({
                url : 'slide/edit',
                method : 'POST',
                body : data,
            }),
            invalidatesTags : ['Slides']
        }),

        deleteSlide: builder.mutation({
            query : (id : number) => ({
                url : '/slide/delete',
                method : 'DELETE',
                body : {id}
            }),
            invalidatesTags : ['Slides']
        })
    })
})


export const {
    useGetAllSlidesQuery,
    useGetSlideQuery,
    useUpdateSlideMutation,
    useCreateSlideMutation,
    useDeleteSlideMutation,
 } = slideApiSlice;


//  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { BASE_URL, inject_headers } from '../../Utils/Generals';

// export const slideApiSlice = createApi({
//     reducerPath: 'api/slides',
//     baseQuery: fetchBaseQuery({
//         baseUrl: BASE_URL,
//         headers: inject_headers(),
//     }),
//     tagTypes: ['Slides'],

//     endpoints: (builder) => ({
//         getAllSlides: builder.query({
//             query: () => '/slides', // Updated for Strapi
//             providesTags: ['Slides'],
//         }),

//         getSlide: builder.query({
//             query: (id) => `/slides/${id}`, // Updated for Strapi
//             providesTags: ['Slides'],
//         }),

//         createSlide: builder.mutation({
//             query: (slide) => ({
//                 url: '/slides', // Updated for Strapi
//                 method: 'POST',
//                 body: slide,
//             }),
//             invalidatesTags: ['Slides'],
//         }),

//         updateSlide: builder.mutation({
//             query: ({ id, ...data }) => ({
//                 url: `/slides/${id}`, // Updated for Strapi
//                 method: 'PUT', // Changed to PUT for Strapi
//                 body: data,
//             }),
//             invalidatesTags: ['Slides'],
//         }),

//         deleteSlide: builder.mutation({
//             query: (id) => ({
//                 url: `/slides/${id}`, // Updated for Strapi
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Slides'],
//         }),
//     }),
// });

// export const {
//     useGetAllSlidesQuery,
//     useGetSlideQuery,
//     useCreateSlideMutation,
//     useUpdateSlideMutation,
//     useDeleteSlideMutation,
// } = slideApiSlice;
