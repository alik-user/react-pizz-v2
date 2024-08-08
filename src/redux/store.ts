import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filterSlice';
import cartSlice from './slices/cartSlice';
import pizzaSlice from './slices/pizzaSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    pizzaSlice,
    cartSlice,
    filterSlice:filterSlice
  }
});


export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const UseAppDispatch = () => useDispatch<AppDispatch>()