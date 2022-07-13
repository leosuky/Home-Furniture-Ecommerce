import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Tooltip, IconButton } from '@mui/material'
import { useDispatch } from 'react-redux';
import { addCartItemAsync, removeCartItemAsync } from '../appStore/slices/CartSlice';

// ICONS
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

function CartItemCard({productId, name, image, quantity, price, countInStock}) {
  const dispatch = useDispatch()
  const [total, setTotal] = React.useState((Number(price) * quantity).toFixed(2))


  const changeQuantity = (action) => {
    let value = quantity

    action === 'increase' ? value++ : value--

    setTotal((Number(price) * value).toFixed(2))
    dispatch(addCartItemAsync(productId, value))
  }

  const deleteItem = (id) => {
    dispatch(removeCartItemAsync(id))
  }

  return (
    <Card sx={{
      display:'flex', mb:{xs:'1.8rem',sm:'1rem'}, alignItems:'center', 
      boxShadow:'none', justifyContent:'space-between',
      borderBottom:'2px solid #B6B8B8', 
      flexDirection:{xs:'column', sm:'row'}
    }}>

      {/* IMAGE & PRODUCT NAME */}
      <Box 
        display='flex' alignItems='center' 
        ml={{xs:'0', sm:'1rem'}} width={{xs:'100%', sm:'auto'}}
        justifyContent='space-around' mb={{xs:'.7rem', sm:'0'}}
      >
        <Box width='100px'>
            <CardMedia
                component='img'
                alt='card_content'
                src={image}
                sx={{width:'100px'}}
            />
        </Box>

        <Box width='220px'>
            <CardContent sx={{padding:'8px', '&:last-child':{paddingBottom:'8px'}}}>
                <Typography color='black' fontSize={{xs:'.9rem',sm:'1.1rem'}} fontWeight={700}>{name}</Typography>
                <Box display='flex' alignItems='center' justifyContent='space-between'>
                  <Typography variant='subtitle2'>Price:</Typography>
                  <Typography variant='subtitle2'>${price}</Typography>
                </Box>
            </CardContent>
        </Box>
      </Box>
      

      {/* QUANTITY */}
      <Box 
        display={{xs:'none', sm:'flex'}} alignItems='center' 
        borderBottom='1px solid black' 
      >
        <Tooltip 
            title={quantity === countInStock ? `Only ${countInStock} items left in stock` : ''}
        >
            <IconButton onClick={()=>changeQuantity('decrease')} disabled={quantity < 1 ? true:false}>
                <RemoveIcon color='secondary'/>
            </IconButton>
        </Tooltip>

        <Box fontSize='1.3rem' margin='auto 1rem'>{quantity}</Box>
        
        <IconButton 
            onClick={()=>changeQuantity('increase')}
            disabled={quantity === countInStock ? true:false}
        >
            <AddIcon color='secondary'/>
        </IconButton>
      </Box>

      {/* TOTAL PRICE */}
      <Box textAlign='center' width='150px' display={{xs:'none', sm:'block'}}>
        <Typography color='#B6B8B8' fontSize='.6rem' fontWeight={700}>Sub Total</Typography>
        <Typography variant='h5'>${total}</Typography>
      </Box>

      {/* REMOVE BUTTON */}
      <Box mr='1rem' display={{xs:'none', sm:'flex'}}>
        <IconButton sx={{color:'red'}} onClick={()=>deleteItem(productId)}>
          <DeleteIcon sx={{color:'red'}}/>
        </IconButton>
      </Box>


      {/* FOR < 600PX SCREENS */}
      <Box 
        display={{xs:'flex', sm:'none'}} mb='.5rem' 
        justifyContent='space-between' width='90%'
      >
        {/* QUANTITY  < 600PX */}
        <Box 
          display='flex' alignItems='center' 
          borderBottom='1px solid black' 
        >
          <Tooltip 
              title={quantity === countInStock ? `Only ${countInStock} items left in stock` : ''}
          >
              <IconButton onClick={()=>changeQuantity('decrease')} disabled={quantity < 1 ? true:false}>
                  <RemoveIcon color='secondary' fontSize='small'/>
              </IconButton>
          </Tooltip>

          <Box fontSize='.8rem' margin='auto .7rem'>{quantity}</Box>
          
          <IconButton 
              onClick={()=>changeQuantity('increase')}
              disabled={quantity === countInStock ? true:false}
          >
              <AddIcon color='secondary' fontSize='small'/>
          </IconButton>
        </Box>

        {/* TOTAL PRICE < 600PX */}
        <Box textAlign='center' width='100px'>
          <Typography color='#B6B8B8' fontSize='.6rem' fontWeight={700}>Sub Total</Typography>
          <Typography variant='body1'>${total}</Typography>
        </Box>

        {/* REMOVE BUTTON < 600PX */}
        <Box>
          <IconButton sx={{color:'red'}} onClick={()=>deleteItem(productId)}>
            <DeleteIcon sx={{color:'red'}}/>
          </IconButton>
        </Box>
      </Box>

    </Card>
  )
}

export default CartItemCard