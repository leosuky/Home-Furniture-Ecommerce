import React from 'react'

import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'
import mbjkh from '../assets/mbjkh.png'

function BlogPostCard() {
  return (
    <Card sx={{display:'flex', mb:'1rem', flexDirection:'column', width:'330px', justifyContent:'flex-start'}}>
        <Box width='330px'>
            <CardMedia
                component='img'
                alt='card_content'
                src={mbjkh}
                width='330px !important'
            />
        </Box>

        <Box>
            <CardContent sx={{padding:'8px 8px 0 0', '&:last-child':{paddingBottom:'0'}}}>
                <Typography color='#B6B8B8' fontSize='.8rem'>By Dorathy Bell- Nov 05, 2019</Typography>
                <Typography color='black' fontSize='.8rem' fontWeight={700}>How To Care For Wool Furniture</Typography>
            </CardContent>
        </Box>
    </Card>
  )
}

export default BlogPostCard