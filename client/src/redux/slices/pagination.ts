import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initial {
  page: number;
}

const initialState: initial = {
  page: 1,
};
const paginationReducer = createSlice({
  name: "paginationReducer",
  initialState: initialState,
  reducers: {
    nextPage: (state, action) => {
      state.page = state.page + 1;
    },
    prevState: (state, action) => {
      state.page = state.page - 1;
    },
    specificPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export default paginationReducer.reducer;
export const paginationActions = paginationReducer.actions;
