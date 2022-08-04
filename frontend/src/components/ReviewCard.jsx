import React from 'react'
import { Box, Typography, Rating, Divider } from '@mui/material'

function ReviewCard({review}) {
  return (
    <Box mt='1.15rem'>
        <Typography variant='h6' fontWeight='700'>{review.name}</Typography>
        <Rating value={parseFloat(review.rating)} readOnly size='small'/>
        <Typography variant='subtitle2' color='#9f9f9f'>
            Reviewed on {`${new Date(review.createdAt.split('.')[0])}`}
        </Typography>
        <Typography variant='body1' margin='.35rem auto'>{review.comment}</Typography>
        <Divider/>
    </Box>
  )
}

export default ReviewCard