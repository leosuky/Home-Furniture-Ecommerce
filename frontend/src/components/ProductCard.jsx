import React from 'react'

import { 
    CardMedia, Card,
    CardActions, CardContent,
    Box, Typography, Button
} from '@mui/material'

import { Link } from 'react-router-dom';


// ICONS & IMAGES
import CircleIcon from '@mui/icons-material/Circle';


function ProductCard({id, image, productName, price}) {
  return (
    <Box display='flex' alignItems='center' justifyContent='center'>
      <Card sx={{width:'200px',height:'326px', border:'1px solid #e0e0e0'}}>
        <Link to={`/shop/product/${id}`}>
          <CardMedia
            component='img'
            alt='bucklo_wrop_wood_table'
            image={image}
            sx={{width:'200px', aspectRatio:'1/1'}}
          />
        </Link>
        {/* <Outlet/> */}

        <Box display='flex' alignItems='center' justifyContent='center'>
          <CircleIcon fontSize='small' color='black'/>
          <CircleIcon fontSize='small' color='error'/>
          <CircleIcon fontSize='small' color='warning'/>
          <CircleIcon fontSize='small' color='disabled'/>
          <CircleIcon fontSize='small' color='success'/>
        </Box>
        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography fontSize='.7rem' textAlign='center'>
            {productName}
          </Typography>
          <Typography color='secondary' fontWeight={700}>${price}</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button size='small' color='secondary'>Add to Cart</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ProductCard