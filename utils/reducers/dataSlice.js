import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const PAGE_SIZE = 6; // Define the initial page size

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
    currentPage: 1, // Track the current page
    itemsPerPage: PAGE_SIZE, // Track the number of items per page
  },
  reducers: {
    filterDataByCategory(state, action) {
      const { category, value } = action.payload;
      state.filteredData = state.data.filter(
        (product) => product[category] === value
      );
      state.currentPage = 1; // Reset current page when applying filters
    },
    setPage(state, action) {
      state.currentPage = action.payload;
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

export const { filterDataByCategory, setPage } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectError = (state) => state.data.error;
export const selectFilteredData = (state) => state.data.filteredData;
export const selectLoading = (state) => state.data.loading;
export const selectCurrentPage = (state) => state.data.currentPage;
export const selectItemsPerPage = (state) => state.data.itemsPerPage;

export default dataSlice.reducer;
