import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// INITIAL STATE
const initialState = {
    loading: null,
    productList: [],
    error: null
}

// PRODUCT SLICE
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productListRequest: (state) => {
            state.loading = true
        },
        productListSuccess: (state, action) => {
            state.loading = false
            state.productList = action.payload
        },
        productListFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

// ACTION CREATOR FUNCTIONS
export const getProductsAsync = () => async (dispatch) => {
    try {

        dispatch(productListRequest())
        const response = await axios.get('/api/shop/products/')
        dispatch(productListSuccess(response.data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(productListFail(message))
    }
}

export const {productListRequest, productListSuccess, productListFail} = productSlice.actions;

export default productSlice.reducer;