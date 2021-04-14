import { createSlice } from "@reduxjs/toolkit";

export const rerenderSlice = createSlice({
  name: "rerenderData",
  initialState: {
    changed: false,
  },
  reducers: {
    changedState: (state) => {
      state.changed = !state.changed;
    },
  },
});

export const { changedState } = rerenderSlice.actions;
export default rerenderSlice.reducer;
