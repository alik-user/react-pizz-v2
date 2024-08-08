import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store";


export enum SortValueEnum {
    RATING_DESC = 'rating',
    RATING_ASC = "-rating",
    TITLE_DESC = 'title',
    TITLE_ASC = "-title",
    PRICE_DESC = 'price',
    PRICE_ASC = "-price",
}
  
export type Sort = {
    name: string;
    value: SortValueEnum;
}

interface FilterSliceState {
    searchValue:string;
    categoryIndex:number;
    currentPage:number;
    sort:Sort;
}

const initialState:FilterSliceState = {
    searchValue:'',
    categoryIndex:0,
    currentPage:1,
    sort:{
        name: "популярности ↑",
        value: SortValueEnum.RATING_DESC,
    }
}

const filterSlice = createSlice({
    name:'filters',
    initialState,

    reducers:{
        setCategoryIndex(state,action:PayloadAction<number>){
            state.categoryIndex = action.payload;
        },
        setSearchValue(state,action:PayloadAction<string>){
            state.searchValue = action.payload;
        },
        setSortValue(state,action:PayloadAction<Sort>){
            state.sort = action.payload
        },
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage = action.payload
        }
    }
})
export const {setCategoryIndex,setSortValue,setCurrentPage,setSearchValue} = filterSlice.actions

export const categoryIndexSelect = (state:RootState) => state.filterSlice.categoryIndex
export const filterSliceSelect = (state:RootState) => state.filterSlice
export const sortSelect = (state:RootState) => state.filterSlice.sort 

export default filterSlice.reducer