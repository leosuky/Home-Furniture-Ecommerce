import React from 'react'

import {
    Box, Container,
    Grid, Typography,
    IconButton,
    Paper, InputBase
} from '@mui/material'

import { useTheme } from '@mui/material/styles';
import home2 from '../assets/HOME2.png'

// Icons
import {
    RiFacebookFill, RiGoogleFill, 
    RiInstagramFill, RiTwitterFill, 
    RiSendPlaneLine 
} from 'react-icons/ri'


function Footer() {
    // states
    const theme = useTheme();

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
    <Box bgcolor='black' px='7.5%' py='2.5%'>
        <Container maxWidth='100%'>
            <Grid container alignItems='center' justifyContent='space-between' spacing={2}>
                
                {/* -------------- LEFT --------------- */}
                <Grid  item direction='column'>
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
                <Grid  item direction='column'>
                    <Typography variant='h6' color='white' mb='1rem'>Company</Typography>

                    <Grid container direction='column'>

                        <Grid container direction='row' minWidth='250px' justifyContent='space-between'>
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
                <Grid  item direction='column' maxWidth='450px'>
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
                                width: 400, mb:'2.4rem',
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
                                    '&:hover': {bgcolor:'black', color:'green'}
                                }} 
                                aria-label="search"
                            >
                                <RiSendPlaneLine fill='white'/>
                            </IconButton>
                        </Paper>
                    </Box>
                </Grid>

            </Grid>

            <Grid container></Grid>
        </Container>
    </Box>
  )
}

export default Footer