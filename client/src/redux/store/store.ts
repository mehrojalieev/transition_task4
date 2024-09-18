import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { useDispatch } from "react-redux";
import CartReducer from "../slices/cart-slice"
import SearchReducer from "../slices/search-slice"
import LikedReducer from "../slices/liked-slice"

const rootReducer = combineReducers({
    cart_data: CartReducer,
    search: SearchReducer,
    liked_data: LikedReducer
});


const persistConfig = {
    key: "root",
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer
});

const persistor = persistStore(store);


export { store, persistor }


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();