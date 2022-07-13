import React from 'react'
import { useSelector } from 'react-redux'

import { Box, Stack, Typography, Divider, Button } from '@mui/material'

import CartItemCard from '../components/CartItemCard'
import CartItemNull from '../components/CartItemNull'

function CartPage() {
    const cart = useSelector(state => state.cart)
    const {cartItems, totalPrice} = cart

    // COMMA SEPERATED NUMBERS
    const price = totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // CHECKOUT HANDLER
    const checkoutHandler = () => {
        console.log('redirect to shipping')
    }


  return (
    <Box display='flex' alignItems='center' justifyContent='center' margin='2rem auto'>
        {
            cartItems ?

            <Box sx={{'&>*':{margin:'1rem auto'}}}>
                <Typography variant='h4' fontWeight={700} color='#333333'>Shopping Cart ({cartItems.length})</Typography>
                <Stack direction={{xs:'column', lg:'row'}} width={{xs:'90vw',sm:'95vw',md:'85vw',lg:'90vw',xl:'85vw'}} justifyContent='space-between'>
                    <Box flex={0.6}>
                        {cartItems.map(item => (
                            <CartItemCard
                                key={item.productId}
                                productId={item.productId}
                                name={item.name}
                                price={item.price}
                                image={item.image}
                                quantity={item.quantity}
                                countInStock={item.countInStock}
                            />
                        ))}
                    </Box>
                    <Box flex={0.35} border='1px solid #B6B8A8' display='flex' justifyContent='center' height='fit-content'>
                        <Box width='90%' m='1rem' sx={{'&>*':{m:'1rem auto'}}}>
                            <Typography color='black' variant='h5' fontWeight={700}>Summary</Typography>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography color='black' variant='subtitle2' >Shipping</Typography>
                                <Typography color='black' variant='subtitle2' fontWeight={700}>Free</Typography>
                            </Box>
                            <Box display='flex' justifyContent='space-between' alignItems='center'>
                                <Typography color='black' variant='subtitle2' >Total</Typography>
                                <Typography color='black' variant='subtitle2' fontWeight={700}>${price}</Typography>
                            </Box>
                            <Divider/>
                            <Box width='fit-content'>
                                <Button 
                                    variant='contained' onClick={checkoutHandler} 
                                    sx={{color:'white', bgcolor:'black'}}

                                >PROCEED TO CHECKOUT</Button>
                            </Box>
                        </Box>
                        
                    </Box>
                </Stack>
            </Box>

            :

            <CartItemNull/>
        }
    </Box>
  )
}

export default CartPage