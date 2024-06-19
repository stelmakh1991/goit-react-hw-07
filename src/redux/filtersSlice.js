import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE_FILTERS = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE_FILTERS,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const filterSelector = (state) => {
  return state.filters.name;
};