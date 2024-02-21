import { createSlice } from "@reduxjs/toolkit";

const apiCallSlice = createSlice({
  name: "weatherAPi",
  initialState: {
    weatherData: null,
  },
  reducers: {
    addAPIData: (state, action) => {
      state.weatherData = action.payload;
    },
  },
});

export const { addAPIData } = apiCallSlice.actions;
export default apiCallSlice.reducer;
