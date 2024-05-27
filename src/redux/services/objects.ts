import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponseProperties, IPropertyCard } from "@/common/interfaces/object/property";
import { Action, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { RootState } from "../store";

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const objectsApi = createApi({
  reducerPath: "objectsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  tagTypes: ["Objects"],
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getObjectsAll: builder.query<IResponseProperties, { page: number; limit: number } | void>({
      query: (params) => (params ? `properties?_page=${params.page}&_per_page=${params.limit}` : "properties"),
      providesTags: (results) =>
        results
          ? [...results.data?.map(({ id }) => ({ type: "Objects", id } as const)), { type: "Objects", id: "LIST" }]
          : [{ type: "Objects", id: "LIST" }],
    }),
    getPropertyById: builder.query<IPropertyCard, number>({
      query: (queryToId) => `properties/${queryToId}`,
      providesTags: (_, __, id) => [{ type: "Objects", id }],
    }),
  }),
});

export const { useGetObjectsAllQuery, useGetPropertyByIdQuery } = objectsApi;
