import { Participant } from "@/services/secvices.type";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type State = {
  letters: string[];
  numbers: string[];
  participants: Participant[];
};

const participantListSlice = createSlice({
  initialState: {} as State,
  name: "participant",
  reducers: {
    setData: (state, action: PayloadAction<{ data: Participant[] }>) => {
      const sortList = [...action.payload.data].sort((a, b) =>
        a.thirdName.localeCompare(b.thirdName),
      );

      const registered = sortList.filter((el) => el.registered);

      const nonRegistered = sortList.filter((el) => !el.registered);

      state.numbers = [...new Set(sortList.map((el) => el.table))].sort(
        (a, b) => Number(a) - Number(b),
      );
      state.letters = [...new Set(sortList.map((el) => el.thirdName[0]))];
      state.participants = [...nonRegistered, ...registered];
    },
  },
});

export const participantListReducer = participantListSlice.reducer;
export const { setData } = participantListSlice.actions;
