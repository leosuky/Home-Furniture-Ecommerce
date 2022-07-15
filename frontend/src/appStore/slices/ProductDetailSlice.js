import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// INITIAL STATE
const initialState = {
    loading: null,
    productDetail: {
        reviews: []
    },
    error: null
}

// PRODUCT DETAIL SLICE
const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        productDetailRequest: (state) => {
            state.loading = true
        },
        productDetailSuccess: (state, action) => {
            state.loading = false
            state.productDetail = action.payload
        },
        productDetailFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
})

// ACTION CREATOR FUNCTIONS
export const getProductDetailAsync = (id) => async (dispatch) => {
    try {

        dispatch(productDetailRequest())
        const response = await axios.get(`/api/shop/products/${id}`)
        dispatch(productDetailSuccess(response.data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(productDetailFail(message))
    }
}


export const {productDetailRequest, productDetailSuccess, productDetailFail} = productDetailSlice.actions;

export default productDetailSlice.reducer;