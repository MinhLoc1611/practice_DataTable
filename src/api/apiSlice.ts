import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetUsersType } from "../types/users.type";
import { pageSize } from "../settings/GridSettings";

interface SearchType {
  name: string;
  value: string | null;
  skip: number;
}

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getUsers: builder.query<GetUsersType, SearchType>({
      query: ({name, value, skip}) => `users/${name}?value=${value}&take=${pageSize}&skip=${skip}`,
    }),
  }),
});

export const { useGetUsersQuery } = apiSlice;
