import { Participant, StylesResponse } from "@/services/secvices.type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reception.w4e.ru/test",
    prepareHeaders: (headers) => {
      headers.set("x-api-key", "d71767e608461e82846dd72b8bd7be9d");

      return headers;
    },
  }),
  endpoints: (builder) => {
    return {
      getParticipant: builder.query<Participant[], void>({
        providesTags: ["Participant"],
        query: () => `participant/`,
      }),
      getStyles: builder.query<StylesResponse, void>({
        query: () => `styles.php`,
      }),
      updateParticipant: builder.mutation<
        Participant,
        { id: number; registered: boolean }
      >({
        invalidatesTags: ["Participant"],
        query: ({ id, registered }) => ({
          body: { registred: registered },
          method: "PATCH",
          url: `participant/${id}/`,
        }),
      }),
    };
  },
  tagTypes: ["Participant"],
});

export const {
  useGetParticipantQuery,
  useGetStylesQuery,
  useUpdateParticipantMutation,
} = baseApi;
