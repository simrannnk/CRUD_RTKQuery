import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'jsonServerApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => `products`,
      providesTags: ['Products'],
    }),

    addProduct: builder.mutation({
      query: (title) => ({
        url: 'products',
        method: 'POST',
        body: { title },
      }),
      invalidatesTags: ['Products'],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Products'],
    }),

    editProduct: builder.mutation({
      query : (id, data) => ({
        url: `products/${id}`,
        method: 'PATCH',
        body : data
      }),
      invalidatesTags: ['Products'],
    })
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useEditProductMutation
} = api;
