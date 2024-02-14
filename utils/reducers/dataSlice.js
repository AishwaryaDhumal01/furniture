import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw Error("Error fetching data");
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    error: null,
    loading: false,
    filteredData: [],
  },
  reducers: {
    filterDataByCategory(state, action) {
      const { category, value } = action.payload;
      state.filteredData = state.data.filter(
        (product) => product[category] === value
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.filteredData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { filterDataByCategory } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectError = (state) => state.data.error;
export const selectFilteredData = (state) => state.data.filteredData;
export const selectLoading = (state) => state.data.loading;

export default dataSlice.reducer;
