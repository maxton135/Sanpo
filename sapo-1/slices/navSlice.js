import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
  waypoints: [],
  travelTimeInformation: null,
  progressStage: 0,
  focusMarker: null,
  foodStops: [],
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
    setProgressStage: (state, action) => {
      state.progressStage = action.payload;
    },
    setFocusMarker: (state, action) => {
      state.focusMarker = action.payload;
    },
    setFoodStops: (state, action) => {
      state.foodStops = action.payload;
    },
    addFoodStop: (state, action) => {
      state.waypoints = [...state.waypoints, action.payload];
    },
  },
});

export const {
  setOrigin,
  setDestination,
  addWaypoint,
  removeWaypoint,
  setTravelTimeInformation,
  setProgressStage,
  setFocusMarker,
  setFoodStops,
} = navSlice.actions;

// Selectors
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectWaypoints = (state) => state.nav.waypoints;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;
export const selectProgressStage = (state) => state.nav.progressStage;
export const selectFocusMarker = (state) => state.nav.focusMarker;
export const selectFoodStops = (state) => state.nav.foodStops;

export default navSlice.reducer;
