import React, {useState, useEffect} from 'react'
import { AppBar, Toolbar, 
  Tabs, Tab, 
  Box, IconButton, 
  useMediaQuery, SwipeableDrawer,
  List, ListItemButton, ListItemText,
  ListItemIcon, Divider,
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
import ShopIcon from '@mui/icons-material/Shop';
import HomeIcon from '@mui/icons-material/Home';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import InfoIcon from '@mui/icons-material/Info';


// Navigation Options
const navOptions = [
  {id:0, path:'/', label:'HOME', icon: <HomeIcon/>},
  {id:1, path:'/shop', label:'SHOP', icon: <ShopIcon/>},
  {id:2, path:'/blog', label:'BLOG', icon: <NewspaperIcon/>},
  {id:3, path:'/contactus', label:'CONTACT', icon: <PermContactCalendarIcon/>},
  {id:4, path:'/aboutus', label:'ABOUT US', icon: <InfoIcon/>},
]



function Navbar() {
  // states
  const [tab, setTab] = useState(parseInt(sessionStorage.getItem('tab')) || 0);
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme();
  const screenMD = useMediaQuery(theme.breakpoints.down('1100'))

  // for iOS swipeable drawer
  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  // side effects
  useEffect(() => {
    sessionStorage.setItem('tab', JSON.stringify(tab));
  }, [tab]);


  // Custom Styles _______________________________________________________________________
  const iconBtn = {
    '&:hover':{
      color: theme.palette.secondary.main
    },
  }


  // Callback Handlers_____________________________________________________________________
  const handleTabs = (e, value) => {
    setTab(value)
  }
  

  // Smaller Components____________________________________________________________________
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
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
      >
        <Box sx={{marginBottom: '5.5em'}}/>
        <Box sx={{minWidth: '150px'}}>
          <List>
            
            <Divider/>
            { navOptions.map((item) => (
              <ListItemButton 
                key={item.id}
                component={Link} to={item.path}
                divider alignItems='center'
                onClick={() => {setOpenDrawer(false); setTab(item.id)}}
                selected={tab === item.id}
                sx={{
                  backgroundColor: tab === item.id ? `${theme.palette.secondary.main} !important`:'inherit',
                  color: tab === item.id ? `${theme.palette.primary.main} !important`:'inherit'
                }}
              >
                <ListItemIcon sx={{
                  minWidth:'35px', ml: '1em', 
                  color:tab === item.id?'white':'inherit'
                }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label}/>
              </ListItemButton>
            ))}

          </List>
        </Box>
      </SwipeableDrawer>
    </React.Fragment>
  )


  return (
    <React.Fragment>
        <AppBar position='sticky' sx={{zIndex: theme.zIndex.drawer+1}}>
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