import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "loading",
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sorts, order, search } = params;
    const { data } = await axios.get(`https://6687fb7d0bc7155dc01a0423.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sorts}&order=${order}&search=${search}`);
    return data;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,

  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "success";
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = "error";
        state.items = [];
      });
  },
});
export const { setItems } = pizzaSlice.actions;
export const pizzaSliceSelector = (state) => state.pizzaSlice;

export default pizzaSlice.reducer;
