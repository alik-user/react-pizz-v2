import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice:0,
    totalCount:0,
    items:[]
};

const cartSlice = createSlice({
  name: "carts",
  initialState,

  reducers: {
    addItems(state, action) {
        const findPizza = state.items.find(obj => obj.id === action.payload.id)
        if (findPizza) {
            findPizza.count++  
        }else{
             state.items.push({...action.payload,
                count:1,
            }) 
        }
        state.totalPrice = state.items.reduce((acc,obj) => obj.price * obj.count + acc, 0)
        state.totalCount = state.items.reduce((acc,obj) => obj.count + acc, 0)
    },
    minusItems(state, action) {
        const findPizza = state.items.find(obj => obj.id === action.payload)
        if (findPizza.count > 1) {
            findPizza.count-- 
        }
        state.totalPrice = state.items.reduce((acc,obj) => obj.price * obj.count + acc, 0)
        state.totalCount = state.items.reduce((acc,obj) => obj.count + acc, 0)
    },
    removeItems(state, action) {
        state.items = state.items.filter(obj => obj.id !== action.payload)
        state.totalPrice = state.items.reduce((acc,obj) => obj.price * obj.count + acc, 0)
        state.totalCount = state.items.reduce((acc,obj) => obj.count + acc, 0)
    },
    clearItems(state) {
        state.items = []
        state.totalCount = 0
        state.totalPrice = 0
    },
  },
});
export const { addItems, removeItems, clearItems,minusItems } = cartSlice.actions;
export const cartSelector = (state) => state.cartSlice 
export const pizzaItemsSelector = (id) => (state) => state.cartSlice.items.find(obj => obj.id === id)
export default cartSlice.reducer;
