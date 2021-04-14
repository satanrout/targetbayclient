import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useContext } from "react";
import { swapContext } from "../context/swapContext";

export const fetchUsers = createAsyncThunk("user/getUsers", async () => {
  const { setSwap } = useContext(swapContext);
  try {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();
    setSwap(data);
    return data;
  } catch (error) {
    return error;
  }
});

export const userSlice = createSlice({
  name: "getUser",
  initialState: {
    loading: false,
    error: null,
    users: [],
  },
  extraReducers: {
    [fetchUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
