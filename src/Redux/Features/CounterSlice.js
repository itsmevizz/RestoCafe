import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const increaseValue = createAsyncThunk("increase", async (data) => {
  return data;
});

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    total: 0,
    loading: false,
  },

  extraReducers: {
    [increaseValue.pending]: (state, action) => {
      state.loading = true;
    },
    [increaseValue.fulfilled]: (state, action) => {
      state.loading = false;
      state.total = state.total + action.payload;
    },
    [increaseValue.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default counterSlice.reducer;
