import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: true,
    orderItems: [],
    shippingAddress: {},
}


const orderDetailSlice = createSlice({
    name:'orderDetail',
    initialState,
    reducers: {
        orderDetailRequest: (state) => {
            return {
                ...state,
                loading: true,
            }
        },
        orderDetailSuccess: (state, action) => {
            return {
                loading: false,
                order: action.payload
            }
        },
        orderDetailFail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        }
    }
})


// ACTION CREATOR FUNCTIONS 
export const getOrderDetailsAsync = (id) => async (dispatch, getState) => {
    dispatch(orderDetailRequest())

    const userdata = getState().user.userInfo
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userdata.token}`
            }
        }

        const {data} = await axios.get(
            `/api/orders/${id}/`,
            config
        )

        dispatch(orderDetailSuccess(data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(orderDetailFail(message))
    }
}


export const {orderDetailFail, orderDetailRequest, orderDetailSuccess} = orderDetailSlice.actions;

export default orderDetailSlice.reducer;