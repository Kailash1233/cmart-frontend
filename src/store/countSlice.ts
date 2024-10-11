import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "countType",
  initialState: 1,
  reducers: {
    addCount(state) {
      return state
    },
  },
});

export const { addCount } = countSlice.actions;
