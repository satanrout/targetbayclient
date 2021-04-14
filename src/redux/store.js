import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import deleteReducer from "./deleteSlice";
import rerenderReducer from "./rerenderSlice";

const reducer = combineReducers({
  user: userReducer,
  delete: deleteReducer,
  changed: rerenderReducer,
});

export const store = configureStore({
  reducer,
});
