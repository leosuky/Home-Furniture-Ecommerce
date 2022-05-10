import React, {useState, useEffect} from 'react'
import { AppBar, Toolbar, 
  Tabs, Tab, 
  Box, IconButton, 
  useMediaQuery, SwipeableDrawer,
} from '@mui/material'
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import home from '../assets/HOME.png'

// Icons
import SearchOutlined from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlined from '@mui/icons-material/FavoriteBorderOutlined';
import AccountCircleOutlined from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



function Navbar() {
  // states
  const [tab, setTab] = useState(parseInt(localStorage.getItem('tab')) || 0);
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme();
  const screenMD = useMediaQuery(theme.breakpoints.down('1100'))

  useEffect(() => {
    localStorage.setItem('tab', JSON.stringify(tab));
  }, [tab]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('tab'));
  //   if (items) {
  //     setTab(items);
  //   }
  // }, []);

  // Custom Styles
  const iconBtn = {
    '&:hover':{
      color: theme.palette.secondary.main
    },
  }

  // Callback Handlers
  const handleTabs = (e, value) => {
    setTab(value)
  }

  // Smaller Components
  const tabs = (
    <React.Fragment>
      <Tabs 
        value={tab} 
        centered
        onChange={handleTabs} 
        sx={{marginLeft: 'auto', marginRight:'auto'}}
        indicatorColor='secondary'
        textColor='secondary'
      >
        <Tab label="Home" component={Link} to='/'/>
        <Tab label="Shop" component={Link} to='/shop'/>
        <Tab label="Blog" component={Link} to='/blog'/>
        <Tab label="Contact" component={Link} to='/contactus'/>
        <Tab label="About Us" component={Link} to='/aboutus'/>
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
    </React.Fragment>
  )

  const menu = (
    <React.Fragment>
      <Box sx={{ml:'auto', mr:'5%'}}>
        <IconButton aria-label='menu' onClick={() => setOpenDrawer(!openDrawer)}>
          {openDrawer ? <CloseIcon/> : <MenuIcon/> }
        </IconButton>
      </Box>
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        anchor='right'
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
      >
        <div style={{marginTop: '90px'}}>
          <h1>Hello</h1>
        </div>
      </SwipeableDrawer>
    </React.Fragment>
  )


  return (
    <React.Fragment>
        <AppBar position='relative' sx={{zIndex: theme.zIndex.drawer+1}}>
            <Toolbar disableGutters>
                <Box 
                  sx={{
                    ml:'5%',
                    maxWidth: '150px'
                  }}
                >
                  <img src={home} style={{width:'100%'}} alt="home" />
                </Box>

                {screenMD ? menu : tabs}
                {drawer}
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar