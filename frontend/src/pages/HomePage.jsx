import React from 'react'
import { 
  Box, Typography, Button, IconButton,
  useMediaQuery
} from '@mui/material'

import styled from '@emotion/styled'
import { useTheme } from '@mui/material/styles';

// images
import home_furniture from '../assets/home_furniture.png'
import living_room from '../assets/living_room.png'
import bedroom from '../assets/bedroom.png'
import kitchen from '../assets/kitchen.png'
import bathroom from '../assets/bathroom.png'
import workspace from '../assets/workspace.png'
import accessories from '../assets/accessories.png'
import chair_silver from '../assets/chair_silver.png'
import stocktake from '../assets/stocktake.png'

// ICONS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// COMPONENTS
// import ProductCard from '../components/ProductCard';
import ProductSlider from '../components/ProductSlider';


// CUSTOM COMPONENTS
const StyledButton = styled(Button)(({theme}) => ({
  width: '12rem',
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  padding: '8px, 20px',
  borderRadius: 50,
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,}
}))

const StyledButtonAlt = styled(Button)(({theme}) => ({
  backgroundColor : theme.palette.primary.main,
  color: theme.palette.secondary.main,
  borderRadius: 50,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,}
}))

const Category = ({image, title}) => (
  <React.Fragment>
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between' height='115px' margin='15px'>
      <Box width='80px' height='80px' borderRadius='50%' bgcolor='#FBF8F5' display='flex' alignItems='center' justifyContent='center'>
        <Box width='50px'>
          <img src={image} alt={title} style={{width:'100%'}}/>
        </Box>
      </Box>
      <Typography variant='subtitle2' color='secondary'>{title}</Typography>
    </Box>
  </React.Fragment>
)

// LISTS
const categories = [
  {id:1, title:'Living room', image:living_room},
  {id:2, title:'Bedroom', image:bedroom},
  {id:3, title:'Kitchen', image:kitchen},
  {id:4, title:'Bathroom', image:bathroom},
  {id:5, title:'Workspace', image:workspace},
  {id:6, title:'Accessories', image:accessories},
]

function HomePage() {
  // states
  const theme = useTheme();
  const screenSM = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>

      {/* TOP SECTION */}
      <Box position='relative'>
        <Box display="flex" alignItems="center" justifyContent="center" maxWidth="100vw">
          <img src={home_furniture} alt="home_furniture" style={{width:'100%'}}/>
        </Box>

        <Box 
          position='absolute' display='flex'
          flexDirection='column' height='30vw'
          alignItems='center' justifyContent='space-between'
          sx={{top:'50%', left:'50%', transform:'translate(-50%, -50%)', width:'fit-content'}}
        >
          <Typography variant='h2' fontWeight='700' fontSize={{xs:'1.3rem', sm:'2.5rem', md:'4rem'}} lineHeight={{xs:'1'}}>AWESOME FURNITURES</Typography>
          <StyledButton variant='contained'>Take A Look</StyledButton>
        </Box>
      </Box>

      {/* CATEGORIES SECTION */}
      <Box display='flex' alignItems='center' justifyContent='space-around' margin={{xs:'2.5rem 3rem', sm:'3rem 7rem'}} flexWrap='wrap'>
        {
          categories.map((item) => (
            <Category key={item.id} image={item.image} title={item.title}/>
          ))
        }
      </Box>

      {/* OFFER SECTION */}
      <Box display='flex' flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-between' margin={{xs:'.3rem 2rem', sm:'2rem 4rem'}}>

        <Box position='relative' flex={0.65}>
          <Box>
            <img src={stocktake} alt="stocktake" style={{width:'100%'}}/>
          </Box>

          <Box 
            position='absolute' display='flex'
            flexDirection='column'
            alignItems='center' justifyContent='space-between'
            sx={{top:'20%', left:'50%', transform:'translateX(-50%)', width:'fit-content'}}
          >
            <Typography variant='h4' fontWeight='700' fontSize={{xs:'1rem', sm:'1.5rem', md:'2rem'}} textAlign='center'>Stocktake</Typography>
            <Typography 
              variant='h4' fontWeight='700' 
              fontSize={{xs:'1rem', sm:'1.5rem', md:'2rem'}} 
              textAlign='center' mt={{xs:'.4rem', sm:'1rem'}}
            >up to 60% off</Typography>
            <IconButton aria-label='forward' sx={{mt:screenSM?'.35rem':'2rem','&:hover':{color: 'red'}}}>
              <ArrowForwardIcon color='secondary' fontSize={screenSM ? 'small':'large'} />
            </IconButton>
          </Box>
        </Box>
        
        <Box position='relative' flex={0.325} marginTop={{xs:'1rem', md:'0'}}>
          <Box bgcolor='#e8e8e8' height='4.8rem' mb='0' display='flex' alignItems={{xs:'center', sm:'end'}} justifyContent='center'>
            <Typography variant='h4' fontWeight='700' color='secondary' fontSize={{xs:'1rem', sm:'1.5rem', md:'2rem'}}>Special Offer</Typography>
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

      {/* TOP PRODUCTS */}
      <Box margin={{xs:'.3rem 2rem', sm:'2rem 4rem'}}>
        <ProductSlider/>
      </Box>

    </Box>
  )
}

export default HomePage