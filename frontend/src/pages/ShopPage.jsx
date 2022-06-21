import React from 'react'
import {
  Box, Checkbox, Divider, IconButton, List, ListItemButton, 
  ListItemIcon, ListItemText, Stack, Typography,
} from '@mui/material'

import { useTheme } from '@mui/material/styles';

// images
import shoppage_banner from '../assets/shoppage_banner.png'

// icons
import CircleIcon from '@mui/icons-material/Circle';

// lists
const categories = [
  {id:0, name:'Accessories'},
  {id:1, name:'Bathroom'},
  {id:2, name:'Bedroom'},
  {id:3, name:'Kitchen'},
  {id:4, name:'Living Room'},
  {id:5, name:'Workspace'},
]

const furniture_type = [
  {id:0, name:'Wooden'},
  {id:1, name:'Iron'},
  {id:2, name:'Ceramic'},
  {id:3, name:'Material'},
  {id:4, name:'Glass'},
]

const colors = [
  {id:0, name:'black'},
  {id:1, name:'#828282'},
  {id:2, name:'#bdbdbd'},
  {id:3, name:'#0f2c72'},
  {id:4, name:'#eb5757'},
  {id:5, name:'#f2994a'},
  {id:6, name:'#cdd454'},
  {id:7, name:'#219653'},
  {id:8, name:'#6fcf97'},
  {id:9, name:'brown'},
  {id:10, name:'#2f80ed'},
  {id:10, name:'#bb6bd9'},
]


function ShopPage() {
  // states
  const [checked, setChecked] = React.useState([0,0,0,0,0])
  const [category, setCategory] = React.useState([0,0,0,0,0,0])
  const theme = useTheme()


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
            Shop our newest items, made with love by the worlds by artisans.
          </Typography>
        </Box>
      </Box>

      {/* SHOP CONTENT */}
      <Stack direction='row' mt='2rem' justifyContent='space-between' width='80vw'>

        {/* FILTERS */}
        <Box color='white' flex={.25} display={{xs:'none', md:'block'}}>

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
                    primary={item.name}
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
          
        </Box>

        {/* PRODUCTS */}
        <Box bgcolor='green' color='white' flex={{xs:1, md:.75}}>Green</Box>
      </Stack>

    </Box>
  )
}

export default ShopPage