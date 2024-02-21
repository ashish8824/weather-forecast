import { configureStore } from "@reduxjs/toolkit";
import apiCallSliceReducer from "./slices/apiCallSlice";
import toogleSliceReducer from "./slices/toogleSlice";

const appStore = configureStore({
  reducer: {
    weatherAPi: apiCallSliceReducer,
    toggle: toogleSliceReducer,
  },
});

export default appStore;
