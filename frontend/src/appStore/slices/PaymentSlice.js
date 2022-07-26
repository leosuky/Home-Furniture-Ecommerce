import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {}


const paymentSlice = createSlice({
    name:'payment',
    initialState,
    reducers: {
        paymentRequest: (state) => {
            return {
                loading: true,
            }
        },
        paymentSuccess: (state) => {
            return {
                loading: false,
                success: true
            }
        },
        paymentFail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        },
        paymentReset: (state) => {
            return {}
        }
    }
})


// ACTION CREATOR FUNCTIONS 
export const payOrderAsync = (id, paymentResult) => async (dispatch, getState) => {
    dispatch(paymentRequest())

    const userdata = getState().user.userInfo
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userdata.token}`
            }
        }

        const {data} = await axios.put(
            `/api/orders/${id}/pay/`,
            paymentResult,
            config
        )

        dispatch(paymentSuccess(data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(paymentFail(message))
    }
}


export const {paymentFail, paymentRequest, paymentSuccess} = paymentSlice.actions;

export default paymentSlice.reducer;