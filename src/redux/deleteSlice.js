import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUsers = createAsyncThunk("user/deleteUsers", async (id) => {
  try {
    const response = await fetch(`http://localhost:5000/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

export const deleteSlice = createSlice({
  name: "deleteUser",
  initialState: {
    loading: false,
    error: null,
    status: null,
  },
  extraReducers: {
    [deleteUsers.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.status = action.payload;
    },
    [deleteUsers.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default deleteSlice.reducer;
