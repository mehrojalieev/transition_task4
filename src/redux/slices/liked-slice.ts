import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    liked_data: []
}

const cartDataSlice = createSlice({
    name: "liked-data",
    initialState,
    reducers: {
        SetLikedData: (state: any, action) => {
                    state.liked_data = [...state.liked_data, action.payload]
              
        },
        RemoveLikedData: (state: any, action) => {
            state.liked_data = state.liked_data.filter((f: any) => f.id !== action.payload.id)
        }
    }
})


export const { SetLikedData, RemoveLikedData } = cartDataSlice.actions

export default cartDataSlice.reducer