import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  focusMarker: null,
};

export const mapFocusSlice = createSlice({
  name: "mapFocus",
  initialState,
  reducers: {
    setFocusMarker: (state, action) => {
      state.focusMarker = action.payload;
    },
  },
});

export const { setFocusMarker } = mapFocusSlice.actions;

// Selectors
export const selectFocusMarker = (state) => state.mapFocus.focusMarker;

export default mapFocusSlice.reducer;
