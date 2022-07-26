import { Alert, AlertTitle, CircularProgress, Stack, Slide, Snackbar, Grow } from "@mui/material";
import React from "react";

import { toggleFeedback } from '../appStore/slices/FeedbackSlice';
import { useSelector, useDispatch } from 'react-redux'

export const Loading = () => (
    <>
    <CircularProgress color="secondary"/>
    </>
)

export const ErrorMessage = ({error}) => (
    <>
    <Stack width='100%'>
        <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            {error}
        </Alert>
    </Stack>
    
    </>
)

export const SuccessMessage = ({message}) => (
    <>
    <Stack width='100%'>
        <Alert severity="success">
            {message}
        </Alert>
    </Stack>
    
    </>
)

export const WarningMessage = ({message}) => (
    <>
    <Stack width='100%'>
        <Alert severity="warning">
            {message}
        </Alert>
    </Stack>
    
    </>
)

// -----------------------------------------------------------------------

export const ErrorPopUp = ({message}) => {
    const {open} = useSelector(state => state.feedback)
    const dispatch = useDispatch()

    const handleClose =() => {
        dispatch(toggleFeedback())
    }

    return (<>
    <Snackbar 
        open={open} onClose={handleClose}
        anchorOrigin={{vertical:'top', horizontal:'center'}}
        sx={{width:'max-content',}}
        TransitionComponent={Grow}
        autoHideDuration={5000}
    >
        <Alert severity="error" variant='filled' sx={{width:'100%'}} onClose={handleClose}>
        {message}
        </Alert>
    </Snackbar>
    </>)
}

export const SuccessPopUp = ({message}) => {
    const {open} = useSelector(state => state.feedback)
    const dispatch = useDispatch()

    const handleClose =() => {
        dispatch(toggleFeedback())
    }

    return (<>
    <Snackbar 
        open={open} onClose={handleClose}
        anchorOrigin={{vertical:'top', horizontal:'center'}}
        sx={{width:'max-content',}}
        TransitionComponent={Slide}
        autoHideDuration={2500}
    >
        <Alert severity="success" variant='filled' sx={{width:'100%'}} onClose={handleClose}>
        {message}
        </Alert>
    </Snackbar>
    </>)
}

export const InfoPopUp = ({message}) => {
    const {open} = useSelector(state => state.feedback)
    const dispatch = useDispatch()

    const handleClose =() => {
        dispatch(toggleFeedback())
    }

    return (<>
    <Snackbar 
        open={open} onClose={handleClose}
        anchorOrigin={{vertical:'top', horizontal:'center'}}
        sx={{width:'max-content',}}
        TransitionComponent={Slide}
        autoHideDuration={2500}
    >
        <Alert severity="info" variant='filled' sx={{width:'100%'}} onClose={handleClose}>
        {message}
        </Alert>
    </Snackbar>
    </>)
}