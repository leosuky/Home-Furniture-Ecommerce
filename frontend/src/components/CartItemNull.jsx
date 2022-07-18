import React from 'react'
import { Box, Typography } from '@mui/material'
import empty_cart from '../assets/empty_cart.png'
import { StyledButton } from './Buttons'

function CartItemNull() {
  return (
    <Box 
      display='flex' justifyContent='center' 
      alignItems='center' flexDirection='column'
      sx={{'&>*':{marginBottom:'1.5rem'}}}
    >
      <Box width='180px'>
        <img src={empty_cart} alt="empty cart" style={{width:'100%'}}/>
      </Box>
      <Box>
        <Typography variant='h5'>Your Shopping Cart is Empty</Typography>
      </Box>
      <Box>
        <StyledButton size='large' sx={{width:'250px'}}>Continue Shopping</StyledButton>
      </Box>
    </Box>
  )
}

export default CartItemNull