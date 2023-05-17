import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  waypoints: [],
  travelTimeInformation: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    addWaypoint: (state, action) => {
      state.waypoints = [...state.waypoints, action.payload];
      console.log(state.waypoints);
    },
    removeWaypoint: (state, action) => {
      state.waypoints = [
        ...state.waypoints.slice(0, action.payload),
        ...state.waypoints.slice(action.payload + 1),
      ];
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const {
  setOrigin,
  setDestination,
  addWaypoint,
  removeWaypoint,
  setTravelTimeInformation,
} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectWaypoints = (state) => state.nav.waypoints;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
