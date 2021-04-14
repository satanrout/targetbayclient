import { configureStore, combineReducers } from "@reduxjs/toolkit";
import deleteReducer from "./deleteSlice";
import rerenderReducer from "./rerenderSlice";

const reducer = combineReducers({
  delete: deleteReducer,
  changed: rerenderReducer,
});

export const store = configureStore({
  reducer,
});
