import React from 'react'

import { 
    CardMedia, Card,
    CardActions, CardContent,
    Box, Typography, Button
} from '@mui/material'


// ICONS & IMAGES
import CircleIcon from '@mui/icons-material/Circle';
// import bucklo_wrop_wood_table from '../assets/products/bucklo_wrop_wood_table.png'


// bucklo_wrop_wood_table

function ProductCard({image}) {
  return (
    <Box>
      <Card sx={{width:'200px', border:'1px solid #e0e0e0'}}>
        <CardMedia
          component='img'
          alt='bucklo_wrop_wood_table'
          image={image}
        />
        <Box display='flex' alignItems='center' justifyContent='center'>
          <CircleIcon fontSize='small' color='black'/>
          <CircleIcon fontSize='small' color='error'/>
          <CircleIcon fontSize='small' color='warning'/>
          <CircleIcon fontSize='small' color='disabled'/>
          <CircleIcon fontSize='small' color='success'/>
        </Box>
        <CardContent sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
          <Typography fontSize='.8rem'>
            Bucklo Wrap Wooden Table
          </Typography>
          <Typography color='secondary' fontWeight={700}>$56.12</Typography>
        </CardContent>
        <CardActions sx={{justifyContent:'center'}}>
          <Button size='small' color='secondary'>Add to Cart</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default ProductCard