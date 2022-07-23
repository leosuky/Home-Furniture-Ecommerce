import { configureStore } from '@reduxjs/toolkit'

// REDUCERS
import productReducer from './slices/ProductSlice'
import productDetailReducer from './slices/ProductDetailSlice'
import cartReducer from './slices/CartSlice'
import userReducer from './slices/UserSlice'
import feedbackReducer from './slices/FeedbackSlice'
import orderReducer from './slices/OrderSlice'

const store = configureStore({
    reducer: {
        product: productReducer,
        productDetail: productDetailReducer,
        cart: cartReducer,
        user: userReducer,
        feedback: feedbackReducer,
        order: orderReducer,
    }
})

export {store}