import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, CardActions } from '@mui/material'
import { StyledButton } from './Buttons'

function ProductDetailCard({product}) {
  return (
    <Card sx={{display:'flex', width:'900px', alignItems:'center', justifyContent:'space-between', boxShadow:'none'}}>
        <Box width='450px' mr='15px'>
            <CardMedia
                component='img'
                alt='card_image'
                src={product.image}
                sx={{width:'450px'}}
            />
        </Box>

        <Box maxWidth='400px'>
            <CardContent>
                <Typography color='black'>Bucklo Wrop Wooden Chair</Typography>
                {/* rating component */}
                <Typography>
                    Est diam debitis an, error recusabo id pro, quo eripuit civibus ut. Mel ut tamquam erroribus, ad nonumy vituperata mei. Et qui falli latine consequuntur. In appellantur concludaturque pro. Est diam debitis an, error recusabo id pro, quo eripuit civibus ut.
                </Typography>
            </CardContent>
            
            <CardActions sx={{justifyContent:'center'}}>
                <StyledButton>Add To Cart</StyledButton>
            </CardActions>
        </Box>
        
    </Card>
  )
}

export default ProductDetailCard