import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { Sort } from "./filterSlice";



type Pizza = {
  id: string;
  imageUrl: string;
  title:string;
  types:number[];
  sizes:number[];
  price:number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = "success",
  ERROR = "error",
}

interface PizzaSliceState {
  items: Pizza[],
  status:Status
};



const initialState:PizzaSliceState = {
  items: [],
  status: Status.LOADING,
};
export type SearchPizzaParams =  { 
  currentPage:string
  category:string 
  sorts:string
  order:string 
  search:string 
}

export const fetchPizzas = createAsyncThunk<Pizza[],SearchPizzaParams>(
  "pizza/fetchPizzasStatus",
  async (params) => {
    const { currentPage, category, sorts, order, search } = params;
    const { data } = await axios.get<Pizza[]>(`https://6687fb7d0bc7155dc01a0423.mockapi.io/items?page=${currentPage}&limit=4${category}&sortBy=${sorts}&order=${order}&search=${search}`);
    return data ;
  }
);

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,

  reducers: {
    setItems(state, action:PayloadAction<[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPizzas.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchPizzas.fulfilled, (state, action:PayloadAction<Pizza[]>) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.status = Status.ERROR;
        state.items = [];
      });
  },
});
export const { setItems } = pizzaSlice.actions;
export const pizzaSliceSelector = (state:RootState) => state.pizzaSlice;

export default pizzaSlice.reducer;
