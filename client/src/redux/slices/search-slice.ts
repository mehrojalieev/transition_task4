import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    search_value: ""
}


const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.search_value = action.payload
        }
    }
})


export const {setSearchValue} = searchSlice.actions
export default searchSlice.reducer