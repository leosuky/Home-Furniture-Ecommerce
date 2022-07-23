import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: null,
    success: null,
    order: {},
    error: null
}


const orderSlice = createSlice({
    name:'orders',
    initialState,
    reducers: {
        createOrderRequest: (state) => {
            return {
                loading: true,
                success: null,
                error: null
            }
        },
        createOrderSuccess: (state, action) => {
            return {
                loading: false,
                success: true,
                order: action.payload
            }
        },
        createOrderFail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        },
        createOrderReset: (state) => {
            return {
                loading: null,
                success: null,
                order: {},
                error: null
            }
        },
    }
})


// ACTION CREATOR FUNCTIONS 
export const createOrderAsync = (order) => async (dispatch, getState) => {
    dispatch(createOrderRequest())

    const userdata = getState().user.userInfo
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userdata.token}`
            }
        }

        const {data} = await axios.post(
            '/api/orders/add/',
            order,
            config
        )

        dispatch(createOrderSuccess(data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(createOrderFail(message))
    }
}


export const {
    createOrderFail, createOrderRequest, createOrderReset, 
    createOrderSuccess
} = orderSlice.actions;

export default orderSlice.reducer;