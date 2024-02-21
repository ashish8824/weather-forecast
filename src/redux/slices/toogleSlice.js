import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleButton: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleButton } = toggleSlice.actions;
export default toggleSlice.reducer;
