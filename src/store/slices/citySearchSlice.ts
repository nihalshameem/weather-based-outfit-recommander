import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CityInterface } from "../../utils/commonTypes";

interface CitySearchState {
  recentSearches: CityInterface[];
}

const initialState: CitySearchState = {
  recentSearches: [],
};

const citySearchSlice = createSlice({
  name: "citySearch",
  initialState,
  reducers: {
    addRecentSearch: (state, action: PayloadAction<CityInterface>) => {
      const existing = state.recentSearches.filter(
        (city) => city.name !== action.payload.name
      );
      state.recentSearches = [action.payload, ...existing].slice(0, 5);
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
    },
  },
});

export const { addRecentSearch, clearRecentSearches } = citySearchSlice.actions;
export default citySearchSlice.reducer;
