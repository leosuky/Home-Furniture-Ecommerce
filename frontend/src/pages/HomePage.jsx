import React from 'react'
import { 
  Box, Typography, Button, IconButton,
  useMediaQuery, ImageList, ImageListItem
} from '@mui/material';
import axios from 'axios';

import { useTheme } from '@mui/material/styles';

// images
import home_furniture from '../assets/home_furniture.png'
import pinkChair from '../assets/pinkChair.png'
import japanLamp from '../assets/japanLamp.png'
import rootCeramic from '../assets/rootCeramic.png'
import chair_silver from '../assets/chair_silver.png'
import stocktake from '../assets/stocktake.png'
import banner_01 from '../assets/banner01.png'
import banner_02 from '../assets/banner02.png'
import banner_03 from '../assets/banner03.png'
import banner_04 from '../assets/banner04.png'
import banner_05 from '../assets/banner05.png'
import insta01 from '../assets/insta01.png'
import insta02 from '../assets/insta02.png'
import insta03 from '../assets/insta03.png'
import insta04 from '../assets/insta04.png'
import insta05 from '../assets/insta05.png'


// ICONS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// COMPONENTS
import ProductSlider from '../components/ProductSlider';
import { StyledButton, StyledButtonAlt } from '../components/Buttons';
import Partners from '../components/Partners';

// LISTS
import { categories } from '../data';


// SMALLER COMPONENTS
const Specials = ({color, topText, bottomText, image, percent}) => (
  <>
    <Box display='flex' width={{xs:'290px', sm:'450px'}} height={{xs:'190px', sm:'295px'}} alignItems='end' bgcolor={color} borderRadius={2} m={{xs:'1rem 0', sm:'2rem'}}>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' height='85%' m='10px' ml='30px'>
        <Typography color={color === '#DA3E31' && 'primary'}>{topText} <br/> {bottomText}</Typography>
        <Typography color={color ==='#CDD454' ? 'secondary' : (color !== '#F4F4F5' && 'primary')} fontWeight='700' variant='h3'>{percent}</Typography>
        <StyledButtonAlt variant='contained' sx={{fontSize:'.8rem'}}>Shop Now</StyledButtonAlt>
      </Box>
      <Box m='10px' mb={0}>
        <img src={image} alt="banner01" style={{width:'100%', objectFit:'cover'}}/>
      </Box>
    </Box>
  </>
)

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
const instagram = [
  {id:1, image:insta01},
  {id:2, image:insta02},
  {id:3, image:insta03},
  {id:4, image:insta04},
  {id:5, image:insta05},
]

const specialZ = [
  {id:7, color:'#DA3E31', image:pinkChair, topText:'Accent', bottomText:'Arm Chair', percent:'-30%'},
  {id:8, color:'#F4F4F5', image:rootCeramic, topText:'Rivet Geometric', bottomText:'Ceramic Planter', percent:'-40%'},
  {id:9, color:'#CDD454', image:japanLamp, topText:'Ceramic', bottomText:'Japanese Lamp', percent:'-50%'},
]
// --------------------------------------------------------------------------



function HomePage() {
  // states
  const [data, setData] = React.useState([])
  const theme = useTheme();
  const screenSM = useMediaQuery(theme.breakpoints.down('sm'))
  const screenMD = useMediaQuery(theme.breakpoints.down('md'))

  // Get random elements from an array.
  function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  }
  
  React.useEffect(() => {

    async function getProducts() {
      const response = await axios.get('api/shop/products/')
      setData(response.data)
    }

    getProducts()
  },[])

  // PRODUCT SELECTIONS
  const bestSelling = getMultipleRandom(data, 8)
  const hotPrice = getMultipleRandom(data, 8)
  const exploreProducts = getMultipleRandom(data, 8)
  const topTrends = getMultipleRandom(data, 8)
  const newArrivals = getMultipleRandom(data, 8)
  


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
      <Box 
        display='flex' alignItems='center' width='60vw'
        justifyContent='space-around' 
        margin={{xs:'2.5rem 3rem', sm:'3rem 7rem'}} flexWrap='wrap'
      >
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
        <ProductSlider products={exploreProducts}/>
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
        <ProductSlider products={topTrends}/>
      </Box>

      {/* SPECIALS */}
      <Box margin={{xs:'2rem .3rem', sm:'2rem 4rem'}} display='flex' flexWrap='wrap' justifyContent='center'>
        {
          specialZ.map(item => ((
            <Specials 
              color={item.color}
              topText={item.topText}
              bottomText={item.bottomText}
              image={item.image}
              percent={item.percent}
              key={item.id}
            />
          )))
        }
      </Box>

      {/* NEW ARRIVALS */}
      <Box display='flex' flexDirection='column' alignItems='center' mt='2.5rem'>
        <Typography fontWeight={700} mb='1rem'>New Arrivals</Typography>
        <ProductSlider products={newArrivals}/>
      </Box>

      {/* INSTAGRAM */}
      <Box display='flex' flexDirection='column' alignItems='center' m={{xs:'1.5rem', sm:'2rem'}}>
        <Typography fontWeight={700} mb={{xs:'.3rem', md:'1rem'}} sx={{textDecoration:'underline'}}>Follow Us On Instagram</Typography>

        <ImageList cols={5}>
          {
            instagram.map(item => ((
              <ImageListItem key={item.id}>
                <img src={item.image} alt={`insta${item.id}`} loading='lazy' />
              </ImageListItem>
            )))
          }
        </ImageList>
      </Box>

      {/* PARTNERS */}
      <Partners/>


    </Box>
  )
}

export default HomePage