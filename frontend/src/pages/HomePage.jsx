import React from 'react'
import { 
  Box, Typography, Button, IconButton,
  useMediaQuery, ImageList, ImageListItem
} from '@mui/material'

import { useTheme } from '@mui/material/styles';

// images
import home_furniture from '../assets/home_furniture.png'
import living_room from '../assets/living_room.png'
import bedroom from '../assets/bedroom.png'
import kitchen from '../assets/kitchen.png'
import bathroom from '../assets/bathroom.png'
import workspace from '../assets/workspace.png'
import accessories from '../assets/accessories.png'
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
import basket_logo from '../assets/basket_logo.png'
import breakfast_logo from '../assets/breakfast_logo.png'
import linkedvoice_logo from '../assets/linkedvoice_logo.png'
import ln_logo from '../assets/ln_logo.png'
import logo3 from '../assets/logo3.png'
import sensei_logo from '../assets/sensei_logo.png'
import wavin_logo from '../assets/wavin_logo.png'

// __products_images
import products from '../assets/products';

// ICONS
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// COMPONENTS
import ProductSlider from '../components/ProductSlider';
import { StyledButton, StyledButtonAlt } from '../components/Buttons';


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
const categories = [
  {id:1, title:'Living room', image:living_room},
  {id:2, title:'Bedroom', image:bedroom},
  {id:3, title:'Kitchen', image:kitchen},
  {id:4, title:'Bathroom', image:bathroom},
  {id:5, title:'Workspace', image:workspace},
  {id:6, title:'Accessories', image:accessories},
]

const instagram = [
  {id:1, image:insta01},
  {id:2, image:insta02},
  {id:3, image:insta03},
  {id:4, image:insta04},
  {id:5, image:insta05},
]

const logos = [
  {id:0, image:basket_logo},
  {id:1, image:breakfast_logo},
  {id:2, image:linkedvoice_logo},
  {id:3, image:ln_logo},
  {id:4, image:logo3},
  {id:5, image:sensei_logo},
  {id:6, image:wavin_logo},
]

const specialZ = [
  {id:7, color:'#DA3E31', image:pinkChair, topText:'Accent', bottomText:'Arm Chair', percent:'-30%'},
  {id:8, color:'#F4F4F5', image:rootCeramic, topText:'Rivet Geometric', bottomText:'Ceramic Planter', percent:'-40%'},
  {id:9, color:'#CDD454', image:japanLamp, topText:'Ceramic', bottomText:'Japanese Lamp', percent:'-50%'},
]

const bestSelling = [
  {id:10, name:'Leosuky Wood High Stool', image:products.leosuky_wood_high_stool},
  {id:11, name:'Leosuky Rose Bar Stool', image:products.leosuky_rose_bar_stool},
  {id:12, name:'Leosuky Bronze Outdoor Stools', image:products.leosuky_bronze_outdoor_stools},
  {id:13, name:'Leosuky Wood Cabinet Table', image:products.leosuky_wood_cabinet_table},
  {id:14, name:'Leosuky Exotic Lamp', image:products.leosuky_exotic_lamp},
  {id:15, name:'Pierre Montblanc Ceiling Lamp', image:products.pierre_montblanc_ceil_lamp},
]

const hotPrice = [
  {id:16, name:'Leosuky Round Dining Table', image:products.leosuky_round_dining_table},
  {id:17, name:'Leosuky Exotic Lamp', image:products.leosuky_exotic_lamp},
  {id:18, name:'Jermaine Swiss Vase', image:products.Jermaine_swiss_vase},
  {id:19, name:'Etienne Corduroy Cushion', image:products.Etienne_corduroy_cushion},
  {id:20, name:'Kurosawa Luxury Armchair', image:products.kurosawa_luxury_armchair},
  {id:21, name:'Leosuky Exotic Vase', image:products.leosuky_exotic_vase},
]

const exploreProducts = [
  {id:22, name:'Pavo Champagne Brass Lamp', image:products.Pavo_champng_brass_lamp},
  {id:23, name:'Monclaire Picture Frame', image:products.monclaire_picture_frame},
  {id:24, name:'Nikari April Tables', image:products.Nikari_april_tables},
  {id:25, name:'Etienne Wool Cushion', image:products.Etienne_wool_cushions},
]

const topTrends = [
  {id:26, name:'Brass Hexagon Mirror Panel', image:products.Brass_Hexagon_Mirror_Panel},
  {id:27, name:'Jensen Wallframes', image:products.Jensen_Wallframes},
  {id:28, name:'Pavo Champagne Sinzu Lamp', image:products.Pavo_champng_sinzu_lamp},
  {id:29, name:'Montclair Ceiling Lamp', image:products.montclair_ceil_lamps},
  {id:30, name:'Leosuky Grande Bookshelf', image:products.leosuky_grand_bookshelf},
]

const newArrivals = [
  {id:31, name:'Carlo Colombo Chloe Bed', image:products.Carlo_Colombo_chloe_bed},
  {id:32, name:'Leosuky Silver Cabinet', image:products.Leosuky_silver_cabinet},
  {id:33, name:'Time by Olivier de Chrome', image:products.Time_Olivier_de_chrome},
  {id:34, name:'Leosuky M1 Lounge Chair', image:products.leosuky_m1_lounge_chair},
  {id:35, name:'Furniture Supreme la Javascript', image:products.furniture_supreme},
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
            />
          )))
        }
      </Box>

      {/* NEW ARRIVALS */}
      <Box display='flex' flexDirection='column' alignItems='center' mt='2.5rem'>
        <Typography fontWeight={700} mb='1rem'>New Arrivals</Typography>
        <ProductSlider products={newArrivals.concat(exploreProducts)}/>
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
      <Box margin={{xs:'2rem .3rem', sm:'2rem 4rem'}} display='flex' flexWrap='wrap' justifyContent='center'>
        {
          logos.map(item => ((
            <Box key={item.id} m='10px'>
              <img src={item.image} alt={`insta${item.id}`} />
            </Box>
          )))
        }
      </Box>


    </Box>
  )
}

export default HomePage