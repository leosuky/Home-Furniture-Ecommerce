import React from 'react'

import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'


function TopPostCard({title, date, image}) {
  return (
    <Card sx={{display:'flex', mb:'1rem', alignItems:'center', boxShadow:'none'}}>
        <Box width='90px' mr='15px'>
            <CardMedia
                component='img'
                alt='card_content'
                src={image}
                sx={{width:'90px'}}
            />
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <CardContent sx={{padding:'8px', '&:last-child':{paddingBottom:'8px'}}}>
                <Typography color='black' fontSize='.9rem' fontWeight={700}>{title}</Typography>
                <Typography color='#B6B8B8' fontSize='.6rem'>{date}</Typography>
            </CardContent>
        </Box>
    </Card>
  )
}

export default TopPostCard