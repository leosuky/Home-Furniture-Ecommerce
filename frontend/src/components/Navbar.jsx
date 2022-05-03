import React, {useState} from 'react'
import { AppBar, Toolbar, Tabs, Tab, Box, IconButton } from '@mui/material'

import { useTheme } from '@mui/material/styles';
import home from '../assets/HOME.png'
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';



function Navbar() {
  const [tab, setTab] = useState(0);
  const theme = useTheme();

  const handleTabs = (e, value) => {
    setTab(value)
  }

  // Icon Button Hover
  const iconBtn = {
    '&:hover':{
      color: theme.palette.secondary.main
    }
  }

  console.log(theme)
  return (
    <React.Fragment>
        <AppBar position='static'>
            <Toolbar disableGutters>
                <Box 
                  sx={{
                    ml:'5%',
                  }}
                >
                  <img src={home} alt="home" />
                </Box>

                <Tabs 
                  value={tab} 
                  centered
                  onChange={handleTabs} 
                  sx={{marginLeft: 'auto', marginRight:'auto'}}
                  indicatorColor='secondary'
                  textColor='secondary'
                >
                  <Tab label="Home"/>
                  <Tab label="Shop"/>
                  <Tab label="Blog"/>
                  <Tab label="Contact"/>
                  <Tab label="About Us"/>
                </Tabs>

                <Box sx={{mr:'5%'}}>
                  <IconButton sx={iconBtn} aria-label='search'>
                    <SearchOutlined/>
                  </IconButton>

                  <IconButton sx={iconBtn} aria-label='favourites'>
                    <FavoriteBorderOutlined/>
                  </IconButton>

                  <IconButton sx={iconBtn} aria-label='User'>
                    <AccountCircleOutlined/>
                  </IconButton>

                  <IconButton sx={iconBtn} aria-label='Cart'>
                    <ShoppingCartOutlined/>
                  </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar