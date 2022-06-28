import React from 'react'
import { Box } from '@mui/material'

// images
import basket_logo from '../assets/basket_logo.png'
import breakfast_logo from '../assets/breakfast_logo.png'
import linkedvoice_logo from '../assets/linkedvoice_logo.png'
import ln_logo from '../assets/ln_logo.png'
import logo3 from '../assets/logo3.png'
import sensei_logo from '../assets/sensei_logo.png'
import wavin_logo from '../assets/wavin_logo.png'

// list
const logos = [
    {id:0, image:basket_logo},
    {id:1, image:breakfast_logo},
    {id:2, image:linkedvoice_logo},
    {id:3, image:ln_logo},
    {id:4, image:logo3},
    {id:5, image:sensei_logo},
    {id:6, image:wavin_logo},
  ]

function Partners() {
  return (
    <>
        <Box margin={{xs:'2rem .3rem', sm:'2rem 4rem'}} display='flex' flexWrap='wrap' justifyContent='center'>
            {
            logos.map(item => ((
                <Box key={item.id} m='10px'>
                <img src={item.image} alt={`sponsor${item.id}`} />
                </Box>
            )))
            }
      </Box>
    </>
  )
}

export default Partners