import React from 'react'
import { Box, Stack, Typography, Divider, Button, Card, CardMedia, CardContent } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartItems, } from '../appStore/slices/CartSlice'
import { createOrderReset } from '../appStore/slices/OrderSlice'
import { getOrderDetailsAsync } from '../appStore/slices/OrderDetailSlice'
import { Loading, ErrorMessage, SuccessMessage, WarningMessage } from '../components/Feedback'
import { useParams } from 'react-router-dom'



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

function OrderDetailPage() {
  const dispatch = useDispatch()
  const params = useParams()
  const {order, error, loading } = useSelector(state => state.orderDetail)

  //pk_test_51IzQ7hCVo6jJs87fAq6aFGQh2LdSXf3POf2bnuEiEy3tdypI9p5avmOFET2bGoDnGa9aeFrVObPah0QqMBgTYzbq00NksZ6RXw
  // sk_test_51IzQ7hCVo6jJs87f2Kdn1kj8CVRdUyPqQI1DTdApCktyDJo0OjUp3mDQJjDaQ4mU3NcqzKgsCI3L6LOWZ6C1WdLa00npqN68l4

  React.useEffect(() => {
    if (!order || order._id !== Number(params.orderId)) {
      dispatch(getOrderDetailsAsync(params.orderId))
    }
    dispatch(clearCartItems())
    dispatch(createOrderReset())
  }, [dispatch, order, params.orderId])

  return loading ? (<Loading/>) : error ? (<ErrorMessage error={error}/>) : (
    <Box
      display='flex' alignItems='center' 
      justifyContent='center' margin='2rem auto'
      flexDirection='column' 
    >

      <Typography color='black' variant='h4' mb='1rem'>Order: {order._id}</Typography>

      <Stack direction='row' width='85vw' justifyContent='space-between'>
        <Box flex={.6} display='flex' flexDirection='column' alignItems='center'>
          <Box width='90%' m='1rem' sx={{'&>*':{m:'1rem auto'}}}>
            <Box>
                <Typography color='black' variant='h5' fontWeight={700}>Shipping</Typography>
                <Typography color='black' variant='subtitle2'>Name: {order.user.name}</Typography>
                <Typography color='black' variant='subtitle2'>Email: {order.user.email}</Typography>
                <Typography color='black' variant='subtitle2' >
                    Address: {order.shippingAddress.address}, 
                    {order.shippingAddress.postalCode} {order.shippingAddress.city}, 
                    {order.shippingAddress.country} 
                </Typography>
                <Box mt='.5rem'>
                  {
                    order.isDelivered ? 
                    <SuccessMessage message={`Delivered on ${order.deliveredAt}`}/> :
                    <WarningMessage message='Not Delivered'/>
                  }
                </Box>
                <Divider sx={{mt:'.5rem'}}/>
            </Box>
            <Box>
                <Typography color='black' variant='h5' fontWeight={700}>Payment Method</Typography>
                <Typography color='black' variant='subtitle2' >
                    Method: {order.paymentMethod} 
                </Typography>
                <Box mt='.5rem'>
                  {
                    order.isPaid ? 
                    <SuccessMessage message={`Paid on ${order.paidAt}`}/> :
                    <WarningMessage message='Not Paid'/>
                  }
                </Box>
                <Divider sx={{mt:'.5rem'}}/>
            </Box>
            <Box>
                <Typography color='black' variant='h5' fontWeight={700}>Order Items</Typography>
                <Stack direction='column' alignItems='center' mt='.7rem'>
                    {
                        order.orderItems.map(item => (
                            <OrderItemCard
                                key={item._id}
                                name={item.name}
                                quantity={item.qty}
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
                  <Typography color='black' variant='subtitle2' fontWeight={700}>
                    ${order.orderItems.reduce((acc, item) => acc + item.price * item.qty,0).toFixed(2)}
                  </Typography>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <Typography color='black' variant='subtitle2' >Shipping</Typography>
                  <Typography color='black' variant='subtitle2' fontWeight={700}>${order.shippingPrice}</Typography>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <Typography color='black' variant='subtitle2' >Tax</Typography>
                  <Typography color='black' variant='subtitle2' fontWeight={700}>${order.taxPrice}</Typography>
              </Box>
              <Divider/>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                  <Typography color='black' variant='body1' >Total</Typography>
                  <Typography color='green' variant='body1' fontWeight={700}>${order.totalPrice}</Typography>
              </Box>
              <Divider/>
              <Box width='fit-content'>
                  <Button 
                      variant='contained' size='large'
                      sx={{color:'white', bgcolor:'black', width:'200px'}}
                  >PLACE ORDER</Button>
              </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default OrderDetailPage