import React from 'react'
import {
  Box, Checkbox, Divider, IconButton, List, ListItemButton, 
  ListItemIcon, ListItemText, Stack, Typography, useMediaQuery
} from '@mui/material'

import { useTheme } from '@mui/material/styles';
import PriceSlider from '../components/PriceSlider';
import ProductsView from '../components/ProductsView';
import { StyledButtonAlt } from '../components/Buttons';

// lists
import { categories, colors, furniture_type, data } from '../data';

// images
import shoppage_banner from '../assets/shoppage_banner.png'
import chair_silver from '../assets/chair_silver.png'

// icons
import CircleIcon from '@mui/icons-material/Circle';



function ShopPage() {
  // states
  const [checked, setChecked] = React.useState([0,0,0,0,0])
  const [category, setCategory] = React.useState([0,0,0,0,0,0])
  const theme = useTheme()
  const xyxy = useMediaQuery(theme.breakpoints.down('1100'))


  const handleCheck = (value, name) => {

    if (name === 'checkbox') {
      let new_check = [...checked]
      new_check[value] ? new_check[value] = 0 : new_check[value] = 1

      setChecked(new_check)
    } else {
      let new_check = [...category]
      new_check[value] ? new_check[value] = 0 : new_check[value] = 1

      setCategory(new_check)
    }
    
  }
  


  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

      {/* SHOP PAGE BANNER */}
      <Box position='relative'>

        <Box display="flex" alignItems="center" justifyContent="center" maxWidth="100vw">
          <img src={shoppage_banner} alt="shop" style={{width:'100%'}}/>
        </Box>

        <Box position='absolute' sx={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}} textAlign='center'>
          <Typography variant='body1' color='#5d5f5f' fontWeight='700' fontSize={{xs:'.7rem', sm:'1rem'}}>
            Shop our newest items, made with love by the worlds best artisans.
          </Typography>
        </Box>
      </Box>

      {/* SHOP CONTENT */}
      <Stack direction='row' mt='2rem' mb='3rem' justifyContent='space-between' width={{xs:'90vw', md:'85vw', lg:'80vw'}}>

        {/* FILTERS */}
        <Box color='white' flex={.30} display={{xs:'none', md:'block'}}>

          {/* CATEGORIES */}
          <Divider sx={{mb:'1rem'}} />
          <Typography color='black' fontWeight='700'>Categories</Typography>

          <List>
            {
              categories.map((item) => ((
                <ListItemButton key={item.id} onClick={()=>handleCheck(item.id, 'category')}>
                  <ListItemIcon
                    sx={{
                      minWidth:'25px', color:theme.palette.secondary.main,
                      display: category[item.id] === 1 ? 'block':'none'
                    }}
                  >
                    <CircleIcon fontSize='small'/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.title}
                    sx={{
                        '&>span':{
                          fontWeight: category[item.id] === 1?'700':'auto'
                        },
                        color: category[item.id] === 1 ? 
                              theme.palette.secondary.main :
                              theme.palette.common.black,
                    }}
                  />
                </ListItemButton>
              )))
            }
            
          </List>

          {/* TYPES */}
          <Divider sx={{m:'1rem 0'}} />
          <Typography color='black' fontWeight='700'>Types</Typography>

          <List>
            {
              furniture_type.map((item) => ((
                <ListItemButton key={item.id} dense onClick={()=>handleCheck(item.id, 'checkbox')}>
                  <ListItemIcon sx={{minWidth:'auto'}}>
                    <Checkbox edge='start' disableRipple color='secondary' checked={checked[item.id] === 1}/>
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.name} 
                    sx={{
                      '&>span':{
                        fontWeight: checked[item.id] === 1?'700':'auto'
                      },
                      color: checked[item.id] === 1 ? 
                            theme.palette.secondary.main :
                            theme.palette.common.black,
                    }}
                  />
                </ListItemButton>
              )))
            }
            
          </List>

          {/* COLORS */}
          <Divider sx={{m:'1rem 0'}} />
          <Typography color='black' fontWeight='700'>Colors</Typography>
          <Box display='flex' alignItems='center' flexWrap='wrap'>
            {
              colors.map((item) => ((
                <IconButton
                  sx={{color:item.name}}
                  key={item.id}
                >
                  <CircleIcon />
                </IconButton>
              )))
            }
          </Box>

          {/* PRICE SLIDER */}
          <Divider sx={{m:'1rem 0'}} />
          <Typography color='black' fontWeight='700'>Price Range</Typography>
          <PriceSlider/>

          {/* OFFER */}
          <Divider sx={{m:'1rem 0'}} />
          <Box position='relative' marginTop={{xs:'1rem', md:'0'}}  display={xyxy?'none':'block'}>
            <Box bgcolor='#e8e8e8' height='4.8rem' mb='0' display='flex' alignItems={{xs:'center', sm:'end'}} justifyContent='center'>
              <Typography variant='h4' fontWeight='700' color='secondary' fontSize={{xs:'1rem', sm:'1.5rem',}}>Special Offer</Typography>
            </Box>
            <Box position='relative'>
              <img src={chair_silver} alt="chair_silver" style={{width:'100%'}}/>
              <Box 
                position='absolute' width={{xs:'2.5rem', sm:'4rem'}} 
                height={{xs:'2.5rem', sm:'4rem'}} bgcolor={theme.palette.secondary.main}
                sx={{textAlign:'center', borderRadius:50, right:'25%', top:'15%'}}
              >
                <Typography 
                  variant='p' color='primary' 
                  position='absolute' fontSize={{xs:'.6rem', sm:'1rem'}}
                  sx={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}
                >from $39.99</Typography>
              </Box>
              <Box position='absolute' sx={{bottom:'2.5%', left:'50%', transform:'translateX(-50%)'}}>
                <StyledButtonAlt variant='contained' sx={{fontSize:'.5rem'}}>Shop Now</StyledButtonAlt>
              </Box>
            </Box>
          </Box>
          
        </Box>

        {/* PRODUCTS */}
        <Box color='white' flex={{xs:1, md:.65}}>
          <ProductsView data={data}/>
        </Box>
      </Stack>

    </Box>
  )
}

export default ShopPage