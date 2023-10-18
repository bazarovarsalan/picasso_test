import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TPost } from "../types/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  tagTypes: ["Posts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<TPost[], number>({
      query: (limit) => ({
        url: `/posts`,
        params: {
          _limit: limit,
        },
      }),
    }),
    getPostDetails: builder.query<TPost, string | undefined>({
      query: (id: string) => ({
        url: `/posts/${id}`,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useGetPostDetailsQuery } = postsApi;
