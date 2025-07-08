import { RootState } from ".";

// Selector to get the full recent search list
export const selectRecentSearches = (state: RootState) =>
  state.citySearch.recentSearches;

// Optional: Get just the last search
export const selectLastSearch = (state: RootState) =>
  state.citySearch.recentSearches[0];
