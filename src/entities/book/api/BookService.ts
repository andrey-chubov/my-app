import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Book } from "../../../shared/types/Book";

interface ListResponse<T> {
  count: number;
  rows: T[];
}

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.1.60:3000/api/v1" }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBookById: builder.query<Book, number>({
      query: (id) => `/books/${id}`,
      providesTags: (result) => ["Books"],
    }),
    fetchAllBooks: builder.query<ListResponse<Book>, number>({
      query: () => ({
        url: "/books",
      }),
      providesTags: (result) => ["Books"],
    }),
    createBook: builder.mutation<Book, Book>({
      query: (book) => ({
        url: "/books",
        method: "POST",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    updateBook: builder.mutation<Book, Book>({
      query: (book) => ({
        url: `/books/${book.id}`,
        method: "PUT",
        body: book,
      }),
      invalidatesTags: ["Books"],
    }),
    deleteBook: builder.mutation<boolean, Book>({
      query: (book) => ({
        url: `/books/${book.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const { useFetchAllBooksQuery, useGetBookByIdQuery } = bookApi;
