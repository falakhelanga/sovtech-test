import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  mass: "",
  height: "",
  gender: "",
  homeworld: "",
};

const details = createSlice({
  name: "details",
  initialState,
  reducers: {
    goToPage: (state, action) => {
      state.name = action.payload.name;
      state.mass = action.payload.mass;
      state.gender = action.payload.gender;
      state.homeworld = action.payload.homeworld;
    },
  },
});

export default details.reducer;
export const detailasAction = details.actions;
