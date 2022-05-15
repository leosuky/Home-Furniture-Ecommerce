import React from 'react'

import {
    Box, Container,
    Grid, Typography,
    IconButton,
    Paper, InputBase,
    useMediaQuery,
} from '@mui/material'

import { useTheme } from '@mui/material/styles';
import home2 from '../assets/HOME2.png'

// Icons
import {
    RiFacebookFill, RiGoogleFill, 
    RiInstagramFill, RiTwitterFill, 
    RiSendPlaneLine 
} from 'react-icons/ri'
import visa from '../assets/svg/visa.svg'
import mastercard from '../assets/svg/mastercard.svg'
import paypal from '../assets/svg/paypal.svg'


function Footer() {
    // states
    const theme = useTheme();
    const screenMD = useMediaQuery(theme.breakpoints.down('1100'))

    // Custom Styles
    const iconBtn = {
        fill: 'white',
        fontSize: '1.2rem',
        '&:hover': {
            fill: theme.palette.secondary.main,
            // this is NOT WORKING
        }
    }

    // fill='white' fontSize='1.2rem'/>
    // Others
    const icons = [
        {id:1, label:'Facebook', icon:<RiFacebookFill style={iconBtn}/>},
        {id:2, label:'Google', icon:<RiGoogleFill style={iconBtn}/>},
        {id:3, label:'Instagram', icon:<RiInstagramFill style={iconBtn}/>},
        {id:4, label:'Twitter', icon:<RiTwitterFill style={iconBtn}/>},
    ]
    
  return (
    <Box bgcolor='black' px={{xl: '7.5%', lg: '5%', md:'2.5%'}} py='2.5%'>
        <Container maxWidth='100%'>
            <Grid container alignItems='center' justifyContent='space-between' direction={screenMD ? 'column':'row'}>
                
                {/* -------------- LEFT --------------- */}
                <Grid  item direction='column' mb='1.5rem'>
                    <Box maxWidth='100px' mb='1rem'>
                        <img src={home2} alt="home2" style={{width:'100%'}}/>
                    </Box>
                    <Typography variant='subtitle2' color='white' mb='1rem'>
                        Address: 20, Kusa Street, Off Pedro Road, Somolu, Lagos.
                    </Typography>
                    <Typography variant='subtitle2' color='white' mb='1rem'>
                        Phone: +234-703-840-6855
                    </Typography>
                    <Typography variant='subtitle2' color='white' mb='1rem'>
                        Email: leosuky99@gmail.com
                    </Typography>
                    <Box >
                        {
                            icons.map(icon => (
                                <IconButton key={icon.id} aria-label={icon.label} sx={{paddingLeft:'0'}}>
                                    {icon.icon}
                                </IconButton>
                            ))
                        }
                    </Box>
                </Grid>

                {/* -------------- MIDDLE --------------- */}
                <Grid  item direction='column' mb='1.5rem'>
                    <Typography variant='h6' color='white' mb='1rem'>Company</Typography>

                    <Grid container direction='column'>

                        <Grid container direction='row' width={screenMD ? '240px':{xl:'240px',xs:'180px'}} justifyContent='space-between'>
                            <Grid item direction='column'>
                                <Typography variant='subtitle2' color='white' mb='1rem'>About Us</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Shop</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Sale</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Contact</Typography>
                            </Grid>

                            <Grid item direction='column'>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Shipping</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Help</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>Privacy Policy</Typography>
                                <Typography variant='subtitle2' color='white' mb='1rem'>FAQs</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

                {/* -------------- RIGHT --------------- */}
                <Grid  item direction='column' maxWidth={{lg:'450px', xs:'380px'}} mb='1.5rem'>
                    <Typography variant='h6' color='white' mb='1rem'>Newsletter</Typography>

                    <Typography variant='subtitle2' color='white' mb='1rem'>
                        Sign up for our Newsletter to get even more events, promotions & news from us
                    </Typography>

                    <Box>
                        <Paper 
                            component='form'
                            sx={{
                                // p: '2px 4px',
                                display: 'flex',
                                alignItems: 'center',
                                maxWidth: 400, mb:'2.4rem',
                                borderRadius: '25px',
                                bgcolor: '#424747',
                            }}
                        >
                            <InputBase
                                sx={{ml:2, flex:1, color:'white'}}
                                placeholder='Enter your email'
                                aria-label='Newsletter'
                            />
                            <IconButton 
                                type="submit" 
                                sx={{
                                    p: '10px', borderRadius:'50%', 
                                    bgcolor:theme.palette.secondary.main, right:'-2', 
                                    '&:hover': {bgcolor:'green'}
                                }} 
                                aria-label="search"
                            >
                                <RiSendPlaneLine fill='white'/>
                            </IconButton>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

            <Grid 
                container alignItems='center' 
                justifyContent='space-between' 
                direction={screenMD ? 'column':'row'}
                mt='2rem'
            >
                <Box mb='2rem'>
                    <Typography variant='subtitle2' color='white'>
                        Copyright &copy; All Rights Reserveed
                    </Typography>
                </Box>
                <Box>
                    <IconButton sx={{width:'50px', bgcolor:'white'}}>
                        <img src={visa} alt="visa" style={{width:'100%'}}/>
                    </IconButton>
                    <IconButton sx={{width:'50px'}}>
                        <img src={mastercard} alt="mastercard" style={{width:'100%'}}/>
                    </IconButton>
                    <IconButton sx={{width:'50px'}}>
                        <img src={paypal} alt="paypal" style={{width:'100%'}}/>
                    </IconButton>
                </Box>
            </Grid>
        </Container>
    </Box>
  )
}

export default Footer