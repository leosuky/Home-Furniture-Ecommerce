import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    open: false
}


const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        toggleFeedback: (state) => {
            state.open = !state.open
        }  
    }
})


export const {toggleFeedback} = feedbackSlice.actions;

export default feedbackSlice.reducer;