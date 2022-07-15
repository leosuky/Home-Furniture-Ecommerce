import React from 'react'
import { 
    Dialog, IconButton, Slide, Typography,
    Box, Stack, Button, useMediaQuery
} from '@mui/material'
import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { toggleLoginPage, getUserAsync } from '../appStore/slices/UserSlice'
import { StyledTextField } from './ContactUsPage'
import { Loading, ErrorMessage } from '../components/Feedback';

// ICONS
import CloseIcon from '@mui/icons-material/Close';
import {FcGoogle} from 'react-icons/fc'

// IMAGES
import login101 from '../assets/login101.png'
import home from '../assets/HOME.png'


// ANIMATION
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} easing='ease' timeout={500} />;
});

const AbsoluteBox = styled(Box)(({theme}) => ({
    position:'absolute',
    top:'50%',
    left:'50%',
    transform:'translate(-50%, -50%)'
}))

function LoginPage() {
    // Global States
    const dispatch = useDispatch()
    const {userLoginPage, loading, userInfo, error} = useSelector(state => state.user)

    // Responsiveness
    const theme = useTheme()
    const screenMD = useMediaQuery(theme.breakpoints.down('1100'))
    
    // View states
    const [viewLogin, setViewLogin] = React.useState('block')
    const [viewRegister, setViewRegister] = React.useState('none')

    // Form States
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    // INPUT HANDLERS
    const handleName = (event) => {
        setName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    // -- CREATE USEEFFECT TO CLOSE DIALOG WHEN USER IS DETECTED

    // SUBMIT HANDLERS
    const loginHandler = () => {
        dispatch(getUserAsync(email, password))
    }

    
  return (
    <Dialog 
        open={userLoginPage} TransitionComponent={Transition}
        PaperProps={{sx:{
            width: screenMD ? '100%' : '950px', 
            maxWidth: screenMD ? '100%' : '950px'
        }}}
        fullScreen={screenMD}
    >
        <Stack direction='row' width='inherit'>
            <IconButton 
                sx={{position:'absolute', right:'0'}}
                onClick={() => dispatch(toggleLoginPage())}
            >
                <CloseIcon color='secondary'/>
            </IconButton>

            {error && <AbsoluteBox><ErrorMessage error={error}/></AbsoluteBox>}
            {loading && <AbsoluteBox><Loading/></AbsoluteBox>}

            {/* IMAGE */}
            <Box flex={.5} display={{xs:'none', sm:'block'}}>
                <img src={login101} alt="loginpage" style={{width:'100%'}}/>
            </Box>

            {/* VIEW LOGIN */}
            <Box flex={{xs:1, sm:.5}} mt='32px' display={viewLogin}>
                <Box width='100%' display='flex' height='100%' flexDirection='column' alignItems='center' justifyContent='space-around'>
                    <Box width='100%' mb={{xs:'1.2rem', sm:'inherit'}}>
                        <Box width={{xs:'4rem',md:'100px'}} ml='1rem'>
                            <img src={home} alt="loginpage" style={{width:'100%'}}/>
                        </Box>
                    </Box>

                    <Box width='100%' mb={{xs:'1.5rem', sm:'inherit'}}>
                        <Typography fontWeight={700} variant={screenMD ? 'body1' : 'h5'} ml='1rem'>Welcome Back</Typography>
                    </Box>

                    <Button 
                        variant='contained' endIcon={<FcGoogle/>} size={screenMD ? 'small' : 'large'}
                        sx={{textTransform:'none', fontWeight:'700', border:'1px solid #c4c4c4', borderRadius:'25px', minWidth:'70%'}}
                    >
                        Sign in with Google
                    </Button>

                    <Typography fontWeight={700} variant='body1'>or</Typography>

                    <Box display='flex' flexDirection='column' width={{xs:'85%', md:'70%'}} sx={{'&>*':{mb:'1rem'}}}>
                        <Box>
                            <StyledTextField 
                                variant='outlined' placeholder='ex: happy@gmail.com' 
                                label='Your Email' color='secondary'
                                onChange={handleEmail} fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTextField 
                                variant='outlined' placeholder='secret_stuff_123$' 
                                label='Password' color='secondary'
                                onChange={handlePassword} fullWidth 
                            />
                        </Box>

                        <Button 
                            variant='contained' color='secondary' 
                            size={screenMD ? 'small' : 'large'}
                            sx={{textTransform:'none', borderRadius:'25px', mt:'1rem'}}
                            onClick={loginHandler}
                        >
                            Sign In
                        </Button>
                    </Box>

                    <Box 
                        display='flex' width='100%' flexWrap='wrap'
                        justifyContent='center'
                    >
                        <Box display='flex' justifyContent='space-between' alignItems='center' ml='1rem' mr='auto'>
                            <Typography variant='body2'>
                                New Member?
                            </Typography>
                            <Button 
                                sx={{textTransform:'none', color:'blue'}} 
                                size={screenMD ? 'small' : 'medium'}
                                onClick={() => {setViewLogin('none');setViewRegister('block')}}
                            >
                                Register Now
                            </Button>
                        </Box>

                        <Button sx={{textTransform:'none', mr:'1rem', ml:'auto'}} color='secondary' size={screenMD ? 'small' : 'medium'}>
                            Forgot Password?
                        </Button>
                        
                    </Box>
                    
                </Box>
            </Box>

            {/* VIEW REGISTER */}
            <Box flex={{xs:1, sm:.5}} mt='32px' display={viewRegister}>
                <Box width='100%' display='flex' height='100%' flexDirection='column' alignItems='center' justifyContent='space-around'>
                    <Box width='100%' mb={{xs:'1.2rem', sm:'inherit'}}>
                        <Box width={{xs:'4rem',md:'100px'}} ml='1rem'>
                            <img src={home} alt="loginpage" style={{width:'100%', objectFit:'cover'}}/>
                        </Box>
                    </Box>

                    <Box width='100%' mb={{xs:'1.5rem', sm:'inherit'}}>
                        <Typography fontWeight={700} variant={screenMD ? 'body1' : 'h5'} ml='1rem'>Hello there...</Typography>
                    </Box>

                    <Button 
                        variant='contained' endIcon={<FcGoogle/>} size={screenMD ? 'small' : 'large'}
                        sx={{textTransform:'none', fontWeight:'700', border:'1px solid #c4c4c4',borderRadius:'25px', minWidth:'70%'}}
                    >
                        Sign up with Google
                    </Button>

                    <Typography fontWeight={700} variant='body1'>or</Typography>

                    <Box display='flex' flexDirection='column' width={{xs:'85%', md:'70%'}} sx={{'&>*':{mb:'1rem'}}}>
                        <Box>
                            <StyledTextField 
                                variant='outlined' placeholder='ex: John Doe' 
                                label='Your Name' color='secondary'
                                onChange={handleName} fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTextField 
                                variant='outlined' placeholder='ex: happy@gmail.com' 
                                label='Your Email' color='secondary'
                                onChange={handleEmail} fullWidth
                            />
                        </Box>
                        <Box>
                            <StyledTextField 
                                variant='outlined' placeholder='secret_stuff_123$' 
                                label='Password' color='secondary'
                                onChange={handlePassword} fullWidth
                            />
                        </Box>

                        <Button 
                            variant='contained' size={screenMD ? 'small' : 'large'}
                            color='secondary' sx={{textTransform:'none', borderRadius:'25px', mt:'1rem'}} 
                        >
                            Create Account
                        </Button>
                        
                    </Box>

                    <Box 
                        display='flex' width='100%' justifyContent='center'
                    >
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Typography variant='body2'>
                                Already a Member?
                            </Typography>
                            <Button 
                                sx={{textTransform:'none', color:'blue'}} 
                                size={screenMD ? 'small' : 'medium'}
                                onClick={() => {setViewLogin('block');setViewRegister('none')}}
                            >
                                Sign In
                            </Button>
                        </Box>
                    </Box>
                    
                </Box>
            </Box>

        </Stack>
        
    </Dialog>
  )
}

export default LoginPage