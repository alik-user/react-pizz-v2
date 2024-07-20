import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
        setSortValue(state,action){
            state.sort = action.payload
        },
        setCurrentPage(state,action){
            state.currentPage = action.payload
        }
    }
})
export const {setCategoryIndex,setSortValue,setCurrentPage} = filterSlice.actions


export default filterSlice.reducer