import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { saveShippingInformation } from '../appStore/slices/CartSlice'

import { StyledTextField } from './ContactUsPage'
import { useNavigate } from 'react-router-dom'

function ShippingPage() {
    const dispatch = useDispatch()
    const {shippingInfo} = useSelector(state => state.cart)
    const navigate = useNavigate()
    // Form States
    const [address, setAddress] = React.useState(shippingInfo.address)
    const [city, setCity] = React.useState(shippingInfo.city)
    const [postalCode, setPostalCode] = React.useState(shippingInfo.postalCode)
    const [country, setCountry] = React.useState(shippingInfo.country)

    // Input Handlers
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handleCity = (event) => {
        setCity(event.target.value)
    }
    const handlePostalCode = (event) => {
        setPostalCode(event.target.value)
    }
    const handleCountry = (event) => {
        setCountry(event.target.value)
    }


    // submit form
    const handleSubmit = () => {
        dispatch(saveShippingInformation({
            address: address,
            city: city,
            postalCode: postalCode,
            country: country
        }))

        navigate('/payment')
    }

  return (
    <Box display='flex' alignItems='center' justifyContent='center' margin='2rem auto'>
        <Box width='45vw'>
            <Typography variant='h4'>Shipping Details</Typography>
            <Box 
                width='100%' display='flex' flexDirection='column' 
                alignItems='center' justifyContent='center'
                margin='1rem auto'
            >
                <Box width='80%' sx={{'&>*':{mb:'2rem'}}}>
                    <Box>
                        <StyledTextField 
                            variant='outlined' placeholder='25, Kusa Street, Pedro Road, Somolu.' 
                            label='Address' color='secondary'
                            fullWidth onChange={handleAddress}
                            defaultValue={address ? address : ''}
                        />
                    </Box>
                    <Box>
                        <StyledTextField 
                            variant='outlined' placeholder='Lagos' 
                            label='City' color='secondary'
                            fullWidth onChange={handleCity}
                            defaultValue={city ? city : ''}
                        />
                    </Box>
                    <Box>
                        <StyledTextField 
                            variant='outlined' placeholder='100234' 
                            label='Postal Code' color='secondary'
                            fullWidth onChange={handlePostalCode}
                            defaultValue={postalCode ? postalCode : ''}
                        />
                    </Box>
                    <Box>
                        <StyledTextField 
                            variant='outlined' placeholder='Nigeria' 
                            label='Country' color='secondary'
                            fullWidth onChange={handleCountry}
                            defaultValue={country ? country : ''}
                        />
                    </Box>
                </Box>

                <Button 
                    onClick={handleSubmit} size='large' variant='contained'
                    sx={{textTransform:'none', borderRadius:'25px', mt:'1rem', width:'200px'}}
                    color='secondary'
                    disabled={!address || !city || !postalCode || !country}
                >
                    Proceed To Payment
                </Button>
            </Box>
        </Box>
    </Box>
  )
}

export default ShippingPage