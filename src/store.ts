import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import products from "./products/ProductsSlice"
import cart from "./cart/cartSlice"

const store =configureStore({
    reducer:{
        products,
        cart
    }
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default store