import React, {useRef} from 'react'
import { Box, IconButton, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import styled from '@emotion/styled'
import ProductCard from './ProductCard'

// images
import bucklo_wrop_wood_table from '../assets/products/bucklo_wrop_wood_table.png'
import bucklo_exotic_lamp from '../assets/products/bucklo_exotic_lamp.png'
import bucklo_wrop_bulbs from '../assets/products/bucklo_wrop_bulbs.png'
import bucklo_wrop_crepe_tables from '../assets/products/bucklo_wrop_crepe_tables.png'
import bucklo_wrop_table_metal from '../assets/products/bucklo_wrop_table_metal.png'
import bucklo_wrop_work_table from '../assets/products/bucklo_wrop_work_table.png'

// ICONS
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



// _________________________________________________________________________________

// ITEMS
const products = [
  {id:1, image:bucklo_wrop_wood_table},
  {id:2, image:bucklo_exotic_lamp},
  {id:3, image:bucklo_wrop_bulbs},
  {id:4, image:bucklo_wrop_crepe_tables},
  {id:5, image:bucklo_wrop_table_metal},
  {id:6, image:bucklo_wrop_work_table},
]

function ProductSlider() {
  // STATES
  const scrollRef = useRef(null)
  const theme = useTheme();
  const screenMD = useMediaQuery(theme.breakpoints.down('lg'))
  const screenSM = useMediaQuery(theme.breakpoints.down('md'))
  const screenXS = useMediaQuery(theme.breakpoints.down('sm'))

  const elementWidth = screenXS ? 212 : screenSM ? 420 : screenMD ? 630 : 1050


  // Styled Component
  const SliderBox = styled(Box)(({theme}) => ({
    display:'flex',
    alignItems:'center',
    justifyContent:'start',
    gap:10,
    width:`${elementWidth}px`,
    transition:'.9s ease',
    scrollBehavior:'smooth',
    overflowX:'scroll',
    '&::-webkit-scrollbar':{
      width:0
    }
  }))


  // CALLBACKS
  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 210;
    } else {
      current.scrollLeft += 210;
    }
  };

  return (
    <Box position='relative' display='flex' flexDirection='column' alignItems='center'>
      <SliderBox ref={scrollRef}>
        {
          products.map(item => (
            <ProductCard image={item.image} key={item.id}/>
          ))
        }
      </SliderBox>
      <Box 
        position='absolute' display='flex' width={`${elementWidth+95}px`}
        alignItems='center' justifyContent='space-between'
        sx={{top:'50%', transform:'translateY(-50%)'}}
      >
        <IconButton color='secondary' onClick={() => scroll('left')}>
          <ChevronLeftIcon/>
        </IconButton>

        <IconButton color='secondary' onClick={() => scroll('right')}>
          <ChevronRightIcon/>
        </IconButton>
      </Box>
    </Box>
  )
}

export default ProductSlider