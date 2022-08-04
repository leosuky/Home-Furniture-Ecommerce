import React from 'react'
import { 
    Box, Card, CardMedia, CardContent, 
    Typography, CardActions, Rating, 
    Button, Divider, IconButton,
    Tooltip,
} from '@mui/material'
import { SuccessPopUp } from './Feedback';

import { useDispatch, useSelector } from 'react-redux';
import { addCartItemAsync } from '../appStore/slices/CartSlice';
import { toggleFeedback } from '../appStore/slices/FeedbackSlice';

// ICONS
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductDetailCard({product}) {
    const [quantity, setQuantity] = React.useState(0)
    const dispatch = useDispatch()
    const {open} = useSelector(state => state.feedback)
    const {error} = useSelector(state => state.review)

    const changeQuantity = (action) => {
        let value = quantity
        action === 'increase' ? value++ : value--

        setQuantity(value)
    }

    const addToCart = () => {
        dispatch(addCartItemAsync(product._id, quantity))

        dispatch(toggleFeedback())
    }

  return (
    <>
    {open && !error && <SuccessPopUp message='Your Item has been added to cart successfully'/>}
    <Card 
        sx={{
            display:'flex', width:{xs:'80vw',lg:'90vw'}, alignItems:'center', 
            justifyContent:{xs:'center', lg:'space-between'}, boxShadow:'none', 
            flexWrap:'wrap', flexDirection:{xs:'column', lg:'row'},
            mb:'2rem'
        }}
    >
        <Box flex={0.4}>
            <CardMedia
                component='img'
                alt='card_image'
                src={product.image}
                sx={{width:'100%'}}
            />
        </Box>

        <Box flex={0.35}>
            <CardContent sx={{'&>*':{margin:'1.3rem 2rem'}}}>
                <Typography color='black' variant='h3' textAlign={{xs:'center', lg:'left'}}>{product.name}</Typography>
                <Divider sx={{margin:'2rem auto'}}/>
                <Box display='flex' justifyContent='space-between' alignItems='center' width='80%' flexDirection={{xs:'column', sm:'row'}} margin='.7rem auto'>
                    <Rating value={parseFloat(product.rating)} readOnly precision={0.5}/>
                    <Typography>{product.numReviews} reviews</Typography>
                </Box>
                <Divider sx={{margin:'2rem auto'}}/>
                <Typography variant='subtitle2'>
                    DESCRIPTION: {product.description}
                </Typography>

            </CardContent>
        </Box>

        <Box flex={0.2} display='flex' justifyContent='center' alignItems='center' width={{xs:'85%', lg:'auto'}}>
            <Box 
                width='85%' border='1px solid #B6B8B8' 
                display='flex' justifyContent='center' 
                alignItems='center' flexDirection='column'
                sx={{'&>*':{margin:'.5rem 0'}}}
            >
                <Box display='flex' justifyContent='space-between' alignItems='center' width='80%'>
                    <Typography variant='h6'>Price:</Typography>
                    <Typography variant='h6' fontWeight='700'>${product.price}</Typography>
                </Box>

                {/* DIDVIDER COMPONENT DIDN'T WORK HERE FOR SOME REASON */}
                <Box width='100%' border='1px solid #B6B8B8'></Box>

                <Box display='flex' justifyContent='space-between' alignItems='center' width='80%'>
                    <Typography variant='h6'>Status:</Typography>
                    <Typography variant='h6' fontWeight='700'>{product.countInStock > 0 ? 'In Stock':'Out of Stock'}</Typography>
                </Box>

                <Box width='100%' border='1px solid #B6B8B8' display={product.countInStock > 0 ? 'block' : 'none'}></Box>

                {/* QUANTITY */}
                <Box display={product.countInStock > 0 ? 'flex' : 'none'} justifyContent='space-between' alignItems='center' width='80%'>
                    <Typography variant='h6'>Quantity:</Typography>
                    <Box display='flex' borderBottom='1px solid black' alignItems='center'>
                        <Tooltip 
                            title={quantity === product.countInStock ? `Only ${product.countInStock} items left in stock` : ''}
                        >
                            <IconButton onClick={()=>changeQuantity('decrease')} disabled={quantity < 1 ? true:false}>
                                <RemoveIcon color='secondary'/>
                            </IconButton>
                        </Tooltip>

                        <Box fontSize='1.3rem' margin='auto 1rem'>{quantity}</Box>
                        
                        <IconButton 
                            onClick={()=>changeQuantity('increase')}
                            disabled={quantity === product.countInStock ? true:false}
                        >
                            <AddIcon color='secondary'/>
                        </IconButton>
                    </Box>
                </Box>

                <Box width='100%' border='1px solid #B6B8B8'></Box>

                {/* ADD TO CART */}
                <CardActions sx={{justifyContent:'center'}}>
                    <Button 
                        onClick={addToCart}
                        variant='contained' color='secondary' 
                        size='large' sx={{minWidth:'100px'}} 
                        endIcon={<AddShoppingCartIcon/>}
                        disabled={product.countInStock > 0 && quantity > 0 ? false : true}
                    >
                        ADD TO CART
                    </Button>
                </CardActions>
            </Box>
        </Box>
        
    </Card>
    </>
  )
}

export default ProductDetailCard