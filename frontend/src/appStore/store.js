import { configureStore } from '@reduxjs/toolkit'

// REDUCERS
import productReducer from './slices/ProductSlice'
import productDetailReducer from './slices/ProductDetailSlice'
import cartReducer from './slices/CartSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
    }
})

export {store}