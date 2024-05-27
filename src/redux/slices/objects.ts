import { createSlice } from "@reduxjs/toolkit";

const objectsSlice = createSlice({
  name: "objects",
  initialState: [],
  reducers: {},
});

export const actions = objectsSlice.actions;
export default objectsSlice.reducer;
