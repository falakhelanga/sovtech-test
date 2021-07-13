import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/pagination";
import detailsReducer from "./slices/details";
const store = configureStore({
  reducer: { paginationReducer, detailsReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
