import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Async thunk to fetch data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw Error('Error fetching data');
  }
});

// Create a slice for data
export const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    error: null,
    filteredData: [] // Add filteredData in initialState
  },
  reducers: {
    filterDataByCategory(state, action) {
      const { category, value } = action.payload;
      state.filteredData = state.data.filter(product => product[category] === value);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.filteredData = action.payload; // Set filteredData initially with all data
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

// Define selectors
export const { filterDataByCategory } = dataSlice.actions;
export const selectData = (state) => state.data.data;
export const selectError = (state) => state.data.error;
export const selectFilteredData = (state) => state.data.filteredData;

export default dataSlice.reducer;
