import React from 'react'
import { Box, Stack, Typography, Divider, Button, Card, CardMedia, CardContent } from '@mui/material'
import { ErrorPopUp } from '../components/Feedback'
import { useSelector, useDispatch } from 'react-redux'
import { createOrderAsync, } from '../appStore/slices/OrderSlice'
import { toggleFeedback } from '../appStore/slices/FeedbackSlice'
import { useNavigate } from 'react-router-dom'



// smaller components
const OrderItemCard = ({name, image, quantity, price}) => (
    <>
        <Card sx={{display:'flex', boxShadow:'none', width:'80%', justifyContent:'space-between'}}>
            {/* IMAGE & PRODUCT NAME */}
            <Box 
                display='flex' alignItems='center'
                justifyContent='space-around'
            >
                <Box width='40px'>
                    <CardMedia
                        component='img'
                        alt='card_content'
                        src={image}
                        sx={{width:'40px'}}
                    />
                </Box>

                <Box>
                    <CardContent sx={{padding:'8px', '&:last-child':{paddingBottom:'8px'}}}>
                        <Typography color='black' fontSize={{xs:'.9rem',sm:'1.1rem'}}>{name}</Typography>
                    </CardContent>
                </Box>
            </Box>

            <Box>
                <CardContent sx={{padding:'8px', '&:last-child':{paddingBottom:'8px'}}}>
                    <Typography color='black' fontSize={{xs:'.9rem',sm:'1.1rem'}}>
                        {quantity} x ${price} = ${(Number(quantity)*Number(price)).toFixed(2)}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
        <Divider sx={{m:'.7rem', width:'100%'}}/>
    </>
)

function OrderSummary() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {success, error, order } = useSelector(state => state.order)
    const {
        totalPrice, shippingPrice, tax,
        shippingInfo, paymentMethod,
        cartItems,
    } = useSelector(state => state.cart)

    const allTotal = (Number(totalPrice)+Number(shippingPrice)+Number(tax)).toFixed(2)

    // Callback Handlers
    const placeOrder = () => {
        dispatch(createOrderAsync({
            orderItems: cartItems,
            shippingAddress: shippingInfo,
            paymentMethod: paymentMethod,
            itemsPrice: totalPrice,
            shippingPrice: shippingPrice,
            taxPrice: tax,
            totalPrice: allTotal,
        }))

    }
    

    React.useEffect(() => {
        if (success) {
            console.log('it got here')
            setTimeout(() => {
                navigate(`/order-detail/${order._id}`)
            }, 500);
            
        } else if (error) {
            dispatch(toggleFeedback())
        }
    }, [success, navigate, dispatch, error, order._id])

  return (
    <Box display='flex' alignItems='center' justifyContent='center' margin='2rem auto'>
        {error && <ErrorPopUp message={error}/>}

        <Stack direction='row' width='85vw' justifyContent='space-between'>
            <Box flex={.6} display='flex' flexDirection='column' alignItems='center'>
                <Box width='90%' m='1rem' sx={{'&>*':{m:'1rem auto'}}}>
                    <Box>
                        <Typography color='black' variant='h5' fontWeight={700}>Shipping</Typography>
                        <Typography color='black' variant='subtitle2' >
                            Address: {shippingInfo.address}, {shippingInfo.postalCode} {shippingInfo.city}, {shippingInfo.country} 
                        </Typography>
                        <Divider sx={{mt:'.5rem'}}/>
                    </Box>
                    <Box>
                        <Typography color='black' variant='h5' fontWeight={700}>Payment Method</Typography>
                        <Typography color='black' variant='subtitle2' >
                            Method: {paymentMethod} 
                        </Typography>
                        <Divider sx={{mt:'.5rem'}}/>
                    </Box>
                    <Box>
                        <Typography color='black' variant='h5' fontWeight={700}>Order Items</Typography>
                        <Stack direction='column' alignItems='center' mt='.7rem'>
                            {
                                cartItems.map(item => (
                                    <OrderItemCard
                                        key={item.productId}
                                        name={item.name}
                                        quantity={item.quantity}
                                        image={item.image}
                                        price={item.price}
                                    />  
                                ))
                            }
                        </Stack>
                    </Box>
                </Box>
            </Box>

            <Box flex={.35} border='1px solid #B6B8A8' display='flex' justifyContent='center' height='fit-content'>
                <Box width='90%' m='1rem' sx={{'&>*':{m:'1rem auto'}}}>
                    <Typography color='black' variant='h5' fontWeight={700}>Order Summary</Typography>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography color='black' variant='subtitle2' >Items</Typography>
                        <Typography color='black' variant='subtitle2' fontWeight={700}>${totalPrice}</Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography color='black' variant='subtitle2' >Shipping</Typography>
                        <Typography color='black' variant='subtitle2' fontWeight={700}>${shippingPrice}</Typography>
                    </Box>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography color='black' variant='subtitle2' >Tax</Typography>
                        <Typography color='black' variant='subtitle2' fontWeight={700}>${tax}</Typography>
                    </Box>
                    <Divider/>
                    <Box display='flex' justifyContent='space-between' alignItems='center'>
                        <Typography color='black' variant='body1' >Total</Typography>
                        <Typography color='green' variant='body1' fontWeight={700}>${allTotal}</Typography>
                    </Box>
                    <Divider/>
                    <Box width='fit-content'>
                        <Button 
                            variant='contained' size='large'
                            sx={{color:'white', bgcolor:'black', width:'200px'}}
                            onClick={placeOrder}
                        >PLACE ORDER</Button>
                    </Box>
                </Box>
            </Box>
        </Stack>
    </Box>
  )
}

export default OrderSummary