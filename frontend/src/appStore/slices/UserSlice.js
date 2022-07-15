import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const user = sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : null

const initialState = {
    userLoginPage: false,
    loading: null,
    userInfo: user,
    error: null,
}


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleLoginPage: (state) => {
            state.userLoginPage = !state.userLoginPage
        },
        userLoginRequest: (state) => {
            state.loading = true
        },
        userLoginSuccess: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        },
        userLoginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        userLogout: (state, action) => {
            // state.loading = false
            // state.error = action.payload
        }
        
    }
})


// ACTION CREATOR FUNCTIONS
export const getUserAsync = (email, password) => async (dispatch, getState) => {
    try {

        dispatch(userLoginRequest())

        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        const {data} = await axios.post(
            '/api/users/login/',
            {'username':email, 'password':password},
            config
        )

        dispatch(userLoginSuccess(data))

        sessionStorage.setItem('userInfo',JSON.stringify(getState().user.userInfo))

    } catch (error) {
        const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
        dispatch(userLoginFail(message))
    }
}

export const opencloseLoginPageAsync = () => (dispatch) => {
    dispatch(toggleLoginPage())
}




export const {userLoginRequest, userLoginSuccess, userLoginFail, userLogout, toggleLoginPage} = userSlice.actions;

export default userSlice.reducer;