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
        // LOGIN
        userLoginRequest: (state) => {
            state.loading = true
            state.error = false
        },
        userLoginSuccess: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        },
        userLoginFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        // REGISTER
        userRegisterRequest: (state) => {
            state.loading = true
            state.error = false
        },
        userRegisterSuccess: (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        },
        userRegisterFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        // UPDATE
        userUpdateRequest: (state) => {
            state.loading = true
            state.error = false
        },
        userUpdateSuccess: (state, action) => {
            state.loading = false
            state.userInfo = {
                ...state.userInfo,
                name: action.payload.name,
                email: action.payload.email
            }
        },
        userUpdateFail: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        // LOGOUT
        userLogout: (state) => {
            return {
                ...state,
                userInfo: null
            }
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

export const registerUserAsync = (name, email, password, confirmPassword) => async (dispatch, getState) => {
    dispatch(userRegisterRequest())

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
        return dispatch(userRegisterFail('Invalid Email Address'))
    } else if (password.length < 8) {
        return dispatch(userRegisterFail('Password must not be less than 8 characters'))
    } else if (password !== confirmPassword) {
        return dispatch(userRegisterFail('Passwords do not match'))
    } else {
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json'
                }
            }
    
            const {data} = await axios.post(
                '/api/users/register/',
                {'name':name,'email':email, 'password':password},
                config
            )
    
            dispatch(userRegisterSuccess(data))
    
            sessionStorage.setItem('userInfo',JSON.stringify(getState().user.userInfo))
    
        } catch (error) {
            const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
            dispatch(userRegisterFail(message))
        }
    } 
}

export const updateUserAsync = (name, email) => async (dispatch, getState) => {
    dispatch(userUpdateRequest())

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
        return dispatch(userUpdateFail('Invalid Email Address'))
    } else {
        const userdata = getState().user.userInfo
        try {
            const config = {
                headers: {
                    'Content-type': 'application/json',
                    Authorization: `Bearer ${userdata.token}`
                }
            }
    
            const {data} = await axios.put(
                '/api/users/profile/update/',
                {'name':name,'email':email},
                config
            )
    
            dispatch(userUpdateSuccess(data))
    
            sessionStorage.setItem('userInfo',JSON.stringify(getState().user.userInfo))
    
        } catch (error) {
            const message = error.response && error.response.data.detail ? error.response.data.detail : error.message
            dispatch(userUpdateFail(message))
        }
    } 
}

export const logoutUserAsync = () => (dispatch) => {
    sessionStorage.removeItem('userInfo')
    dispatch(userLogout())
}

export const opencloseLoginPageAsync = () => (dispatch) => {
    dispatch(toggleLoginPage())
}




export const {
    userLoginRequest, userLoginSuccess, userLoginFail, userLogout, 
    toggleLoginPage, userRegisterFail, userRegisterRequest, userRegisterSuccess,
    userUpdateRequest, userUpdateSuccess, userUpdateFail
} = userSlice.actions;

export default userSlice.reducer;