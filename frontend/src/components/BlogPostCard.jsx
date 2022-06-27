import React from 'react'

import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material'

function BlogPostCard({title, date, author, image}) {
  return (
    <Card sx={{display:'flex', mb:'1rem', flexDirection:'column', width:'330px', justifyContent:'flex-start', boxShadow:'none'}}>
        <Box width='330px'>
            <CardMedia
                component='img'
                alt='card_content'
                src={image}
                sx={{width:'330px', height:'245px'}}
            />
        </Box>

        <Box>
            <CardContent sx={{padding:'8px 8px 0 0', '&:last-child':{paddingBottom:'0'}}}>
                <Typography color='#B6B8B8' fontSize='.8rem'>By {author}- {date}</Typography>
                <Typography color='black' fontSize='.8rem' fontWeight={700}>{title}</Typography>
            </CardContent>
        </Box>
    </Card>
  )
}

export default BlogPostCard