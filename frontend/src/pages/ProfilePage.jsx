import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import { StyledTextField } from './ContactUsPage'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserAsync } from '../appStore/slices/UserSlice'
import { toggleFeedback } from '../appStore/slices/FeedbackSlice'
import { Loading, ErrorPopUp, SuccessPopUp } from '../components/Feedback'

function ProfilePage() {
    const [edit, setEdit] = React.useState(0)
    const dispatch = useDispatch()
    const {userInfo, loading, error} = useSelector(state => state.user)
    const [name, setName] = React.useState(userInfo.name)
    const [email, setEmail] = React.useState(userInfo.email)
   
    // Input Handlers
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleReset = () => {
        window.location.reload()
    }


    const updateUserData = () => {
        dispatch(updateUserAsync(name, email))
        
        dispatch(toggleFeedback())
        setTimeout(() => {
            handleReset()
        }, 3000);
    }
  return (
    <Box display='flex' flexDirection='center' alignItems='center' justifyContent='center'>
        <Stack direction='row' width='85vw' justifyContent='space-between' m='1.5rem auto'>
            <Box 
                flex={.3} display='flex' flexDirection='column' 
                alignItems='center'
            >
                {error && <><ErrorPopUp message={error}/></>}
                {loading && <><Loading/></>}
                {!error && <><SuccessPopUp message='Update Successful!'/></>}
                <Box width='100%' m='1rem auto'>
                    <Typography variant='h4'>User Profile</Typography>
                </Box>
                <Box width='80%' sx={{'&>*':{mb:'1rem'}}}>
                    <Box>
                        <StyledTextField 
                            variant='outlined' fullWidth
                            label='Your Name' color='secondary'
                            defaultValue={name} onChange={handleName}
                            InputProps={{readOnly: edit === 0,}}
                        />
                    </Box>
                    <Box>
                        <StyledTextField 
                            variant='outlined' fullWidth
                            label='Your Email' color='secondary'
                            defaultValue={email} onChange={handleEmail}
                            InputProps={{readOnly: edit === 0,}}
                        />
                    </Box>
                </Box>
                <Box width='80%' alignItems='center' justifyContent='space-between' display='flex'>
                <Button 
                    variant='contained' onClick={()=>setEdit(1)}
                    sx={{
                        bgcolor:'blue',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 0 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    EDIT
                </Button>
                <Button 
                    variant='contained' onClick={updateUserData}
                    sx={{
                        bgcolor:'green',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 1 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    UPDATE
                </Button>
                <Button 
                    variant='contained' onClick={handleReset}
                    sx={{
                        bgcolor:'red',color:'white', mt:'1rem',
                        borderRadius:'25px', width:'100px', 
                        display: edit === 1 ? 'block' : 'none',
                        '&:hover':{color:'black', bgcolor:'white'}
                    }}
                >
                    CANCEL
                </Button>
                </Box>
            </Box>
            <Box flex={.65} bgcolor='rebeccapurple'>
                <Box>
                    <Typography variant='h4'>My Orders</Typography>
                </Box>
            </Box>
        </Stack>
    </Box>
  )
}

export default ProfilePage