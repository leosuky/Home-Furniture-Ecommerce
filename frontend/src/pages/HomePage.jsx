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
import banner_01 from '../assets/banner01.png'
import banner_02 from '../assets/banner02.png'
import banner_03 from '../assets/banner03.png'
import banner_04 from '../assets/banner04.png'
import banner_05 from '../assets/banner05.png'
// __products_images
import products from '../assets/products';

// ICONS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// COMPONENTS
import ProductSlider from '../components/ProductSlider';


// CUSTOM COMPONENTS
const StyledButton = styled(Button)(({theme, width}) => ({
  width: width,
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  padding: '8px, 20px',
  borderRadius: 50,
  textTransform:'capitalize',
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,}
}))

const StyledButtonAlt = styled(Button)(({theme}) => ({
  backgroundColor : theme.palette.primary.main,
  color: theme.palette.secondary.main,
  borderRadius: 50,
  textTransform:'capitalize',
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

const BannerA = (
  <>
    <Box display='flex' alignItems='center' flexDirection='column' position='relative'>
      <Box>
        <img src={banner_01} alt="banner01" style={{width:'100%', objectFit:'cover'}}/>
      </Box>
      <Box position='absolute' sx={{bottom:'27.5%', left:'50%', transform:'translateX(-50%)'}}>
        <StyledButton variant='contained' width='9rem' sx={{fontSize:'.7rem'}}>Explore Now</StyledButton>
      </Box>
    </Box>
  </>
)

const BannerB = (
  <>
    <Box display='flex' alignItems='center' flexDirection='column'>
      <Box display='flex' alignItems='center' gap={2}>
        <Box>
          <img src={banner_02} alt="banner02" style={{width:'100%', objectFit:'cover'}}/>
        </Box>
        <Box>
          <img src={banner_03} alt="banner03" style={{width:'100%', objectFit:'cover'}}/>
        </Box>
      </Box>
      <StyledButton variant='contained' width='9rem' sx={{fontSize:'.55rem', mt:'.7rem'}}>Explore Now</StyledButton>
    </Box>
  </>
)

const BannerC = (
  <>
    <Box display='flex' alignItems='center' flexDirection='column' position='relative'>
      <Box>
        <img src={banner_04} alt="banner01" style={{width:'100%', objectFit:'cover'}}/>
      </Box>
      <Box position='absolute' sx={{bottom:'15%', left:'50%', transform:'translateX(-50%)'}}>
        <StyledButton variant='contained' width='9rem' sx={{fontSize:'.7rem'}}>Explore Now</StyledButton>
      </Box>
    </Box>
  </>
)

const BannerD = (
  <>
    <Box display='flex' alignItems='center' flexDirection='column' position='relative'>
      <Box>
        <img src={banner_05} alt="banner01" style={{width:'100%', objectFit:'cover'}}/>
      </Box>
      <Box position='absolute' sx={{bottom:'15%', left:'50%', transform:'translateX(-50%)'}}>
        <StyledButton variant='contained' width='9rem' sx={{fontSize:'.7rem'}}>Explore Now</StyledButton>
      </Box>
    </Box>
  </>
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

const bestSelling = [
  {id:1, name:'Leosuky Rose Bar Stool', image:products.leosuky_rose_bar_stool},
  {id:2, name:'Leosuky Bronze Outdoor Stools', image:products.leosuky_bronze_outdoor_stools},
  {id:3, name:'Leosuky Wood Cabinet Table', image:products.leosuky_wood_cabinet_table},
  {id:4, name:'Leosuky Exotic Lamp', image:products.leosuky_exotic_lamp},
  {id:5, name:'Pierre Montblanc Ceiling Lamp', image:products.pierre_montblanc_ceil_lamp},
  {id:6, name:'Leosuky Wood High Stool', image:products.leosuky_wood_high_stool},
]

const hotPrice = [
  {id:1, name:'Leosuky Exotic Lamp', image:products.leosuky_exotic_lamp},
  {id:2, name:'Jermaine Swiss Vase', image:products.Jermaine_swiss_vase},
  {id:3, name:'Etienne Corduroy Cushion', image:products.Etienne_corduroy_cushion},
  {id:4, name:'Kurosawa Luxury Armchair', image:products.kurosawa_luxury_armchair},
  {id:5, name:'Leosuky Exotic Vase', image:products.leosuky_exotic_vase},
  {id:6, name:'Leosuky Round Dining Table', image:products.leosuky_round_dining_table},
]

const exploreProducts = [
  {id:1, name:'Monclaire Picture Frame', image:products.monclaire_picture_frame},
  {id:2, name:'Nikari April Tables', image:products.Nikari_april_tables},
  {id:3, name:'Etienne Wool Cushion', image:products.Etienne_wool_cushions},
  {id:4, name:'Pavo Champagne Brass Lamp', image:products.Pavo_champng_brass_lamp},
]

const topTrends = [
  {id:1, name:'Brass Hexagon Mirror Panel', image:products.Brass_Hexagon_Mirror_Panel},
  {id:2, name:'Jensen Wallframes', image:products.Jensen_Wallframes},
  {id:3, name:'Pavo Champagne Sinzu Lamp', image:products.Pavo_champng_sinzu_lamp},
  {id:4, name:'Montclair Ceiling Lamp', image:products.montclair_ceil_lamps},
  {id:4, name:'Leosuky Grande Bookshelf', image:products.leosuky_grand_bookshelf},
]

function HomePage() {
  // states
  const theme = useTheme();
  const screenSM = useMediaQuery(theme.breakpoints.down('sm'))
  const screenMD = useMediaQuery(theme.breakpoints.down('md'))


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
          <StyledButton variant='contained' width='10rem'>Take A Look</StyledButton>
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
      <Box display='flex' flexDirection={{xs:'column', md:'row'}} alignItems='center' justifyContent='space-between' margin={{xs:'1rem 2rem', sm:'2rem 4rem'}}>

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
      <Box margin={{xs:'2rem, 1.2rem', sm:'2rem 4rem'}} bgcolor='#fbf4f3' padding={{xs:'1.5rem 2.3rem', sm:'1.5rem 4rem'}} border='2px solid #DA3E31'>
        <Box display='flex' flexDirection='column' alignItems='center' mt='1.5rem'>
          <Typography fontWeight={700} mb='1rem'>Best Selling</Typography>
          <ProductSlider products={bestSelling}/>
          <Button variant='text' color='secondary' endIcon={<ChevronRightIcon/>}>View All</Button>
        </Box>

        <Box display='flex' flexDirection='column' alignItems='center' mt='2.5rem'>
          <Typography fontWeight={700} mb='1rem'>Hot Price</Typography>
          <ProductSlider products={hotPrice}/>
          <Button variant='text' color='secondary' endIcon={<ChevronRightIcon/>}>View All</Button>
        </Box>
      </Box>

      {/* BANNER 01 */}
      <Box margin={{xs:'2rem 1.5rem', sm:'2rem 4rem'}}>
        {
          screenMD ? BannerB : BannerA
        }
      </Box>

      {/* EXPLORE PRODUCTS */}
      <Box display='flex' flexDirection='column' alignItems='center' mt='2.5rem'>
        <Typography fontWeight={700} mb='1rem'>Explore Our Products</Typography>
        <ProductSlider products={exploreProducts.concat(hotPrice)}/>
      </Box>

      {/* BANNER 02 */}
      <Box margin={{xs:'2rem 1.5rem', sm:'2rem 4rem'}}>
        {
          screenMD ? BannerD : BannerC
        }
      </Box>

      {/* TOP TRENDING PRODUCTS */}
      <Box display='flex' flexDirection='column' alignItems='center' mt='2.5rem'>
        <Typography fontWeight={700} mb='1rem'>Top Trending Products</Typography>
        <ProductSlider products={topTrends.concat(exploreProducts)}/>
      </Box>

    </Box>
  )
}

export default HomePage