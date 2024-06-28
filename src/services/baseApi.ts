import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import {
  Participant,
  ParticipantResponse,
  StylesResponse,
} from "./services.type";

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
      getParticipant: builder.query<ParticipantResponse, void>({
        providesTags: ["Participant"],
        query: () => `participant/`,
        transformResponse: (response: Participant[]): ParticipantResponse => {
          const sortedData = response.sort((a, b) =>
            a.thirdName.localeCompare(b.thirdName),
          );

          // const arrivedGuests = sortedData.filter((el) => el.registered);
          // const nonArrivedGuests = sortedData.filter((el) => !el.registered);
          const letters = [
            ...new Set(
              sortedData
                .map((el) => el.thirdName[0])
                .sort((a, b) => a.localeCompare(b)),
            ),
          ];
          const tables = [
            ...new Set(
              sortedData
                .map((el) => el.table)
                .sort((a, b) => Number(a) - Number(b)),
            ),
          ];

          return {
            letters: letters,
            participant: [...sortedData],
            table: tables,
          };
        },
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
