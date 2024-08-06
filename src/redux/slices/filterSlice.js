import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchValue:'',
    categoryIndex:0,
    currentPage:1,
    sort:{
        name: "популярности ↑",
        value: "rating",
    }
}

const filterSlice = createSlice({
    name:'filters',
    initialState,

    reducers:{
        setCategoryIndex(state,action){
            state.categoryIndex = action.payload;
        },
        setSearchValue(state,action){
            state.searchValue = action.payload;
        },
        setSortValue(state,action){
            state.sort = action.payload
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload
        }
    }
})
export const {setCategoryIndex,setSortValue,setCurrentPage,setSearchValue} = filterSlice.actions

export const categoryIndexSelect = (state) => state.filterSlice.categoryIndex
export const filterSliceSelect = (state) => state.filterSlice
export const sortSelect = state => state.filterSlice.sort 

export default filterSlice.reducer