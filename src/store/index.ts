import { configureStore } from "@reduxjs/toolkit";
import citySearchReducer from "./slices/citySearchSlice";

export const store = configureStore({
  reducer: {
    citySearch: citySearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
