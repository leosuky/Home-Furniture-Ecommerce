import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}


const reviewSlice = createSlice({
    name:'review',
    initialState,
    reducers: {
        reviewCreateRequest: (state) => {
            return {
                loading: true,
            }
        },
        reviewCreateSuccess: (state) => {
            return {
                loading: false,
                success: true
            }
        },
        reviewCreateFail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


// ACTION CREATOR FUNCTIONS 
export const createProductReviewAsync = (productId, review) => async (dispatch, getState) => {
    dispatch(reviewCreateRequest())

    const userdata = getState().user.userInfo

    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userdata.token}`
            }
        }

        const {data} = await axios.post(
            `/api/shop/products/${productId}/reviews/`,
            review,
            config
        )

        dispatch(reviewCreateSuccess(data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(reviewCreateFail(message))
    }
}


export const {reviewCreateFail, reviewCreateRequest, reviewCreateSuccess} = reviewSlice.actions;

export default reviewSlice.reducer;