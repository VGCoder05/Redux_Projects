import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      // console.log(action);
      state.value += 1;
    },
    decrement: (state, action) => {
      // console.log(action);
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
