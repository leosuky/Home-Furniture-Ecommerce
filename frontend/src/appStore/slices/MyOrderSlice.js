import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    orders: []
}


const myOrdersSlice = createSlice({
    name:'myorder',
    initialState,
    reducers: {
        myOrdersRequest: (state) => {
            return {
                loading: true,
            }
        },
        myOrdersSuccess: (state, action) => {
            return {
                loading: false,
                orders: action.payload
            }
        },
        myOrdersFail: (state, action) => {
            return {
                loading: false,
                error: action.payload
            }
        },
        myOrdersReset: (state) => {
            return {
                orders: []
            }
        }
    }
})


// ACTION CREATOR FUNCTIONS 
export const getMyOrdersAsync = () => async (dispatch, getState) => {
    dispatch(myOrdersRequest())

    const userdata = getState().user.userInfo
    try {
        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userdata.token}`
            }
        }

        const {data} = await axios.get(
            `/api/orders/myorders/`,
            config
        )

        dispatch(myOrdersSuccess(data))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(myOrdersFail(message))
    }
}


export const {myOrdersFail, myOrdersRequest, myOrdersSuccess, myOrdersReset} = myOrdersSlice.actions;

export default myOrdersSlice.reducer;