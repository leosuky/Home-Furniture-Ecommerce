import { configureStore } from '@reduxjs/toolkit'

// REDUCERS
import productReducer from './slices/ProductSlice'
import productDetailReducer from './slices/ProductDetailSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        productDetail: productDetailReducer,
    }
})

export {store}