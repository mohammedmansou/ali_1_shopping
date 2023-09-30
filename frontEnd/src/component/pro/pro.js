// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const proApi = createApi({
  reducerPath: 'proApi',
  // @ts-ignore
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_URL_MAIN}/api` }),
  endpoints: (builder) => ({
    getproByName: builder.query({
      query: (name) => `${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetproByNameQuery } = proApi