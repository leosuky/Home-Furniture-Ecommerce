import React from 'react'
import { Box, Typography } from '@mui/material'

function Map() {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' sx={{'& iframe':{width:'85vw', height:'50vh', border:'1px solid #DE5212'}}} >
        <Typography variant='h5' color='black' fontWeight={700} mb='1rem'>Visit Us</Typography>
        <iframe title='Location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8380712148955!2d3.37973261458215!3d6.5421224952681785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d0bb3a52fc3%3A0x7e204ce0aa74ee98!2s20%20Kusa%20St%2C%20Bariga%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1648120882676!5m2!1sen!2sng"  allowfullscreen="" loading="lazy"></iframe>
    </Box>
  )
}

export default Map