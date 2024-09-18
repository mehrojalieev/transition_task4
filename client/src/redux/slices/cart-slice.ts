import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart_data: []
}

const cartDataSlice = createSlice({
    name: "cart-data",
    initialState,
    reducers: {
        SetCartData: (state: any, action) => {
                const ProductExict = state.cart_data.findIndex((f: any) => f.id === action.payload.id)
                if(ProductExict === -1){
                    state.cart_data = [...state.cart_data, action.payload]
                }
                else{
                    state.cart_data[ProductExict].count += 1
                }
        },
        RemoveCartData: (state: any, action) => {
            const ProductExict = state.cart_data.findIndex((f: any) => f.id === action.payload.id)
                state.cart_data[ProductExict].count -= 1
            if(state.cart_data[ProductExict].count === 0){
                state.cart_data.splice(ProductExict, 1)
            }
        }
    }
})


export const { SetCartData, RemoveCartData } = cartDataSlice.actions

export default cartDataSlice.reducer