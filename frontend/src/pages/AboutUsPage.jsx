import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Partners from '../components/Partners'

// IMAGES
import aboutUs1 from '../assets/aboutUs1.png'
import aboutUs2 from '../assets/aboutUs2.png'
import aboutUs3 from '../assets/aboutUs3.png'

// ICONS
import {IoIosAirplane} from 'react-icons/io'
import {HiCurrencyDollar} from 'react-icons/hi'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {AiFillGift} from 'react-icons/ai'


// list
const service = [
  {id:1, topText:'Free World Delivery', subText:'Orders over $200', icon:<IoIosAirplane fill='#DE5212' style={{fontSize:'1.5rem'}}/>},
  {id:2, topText:'Money Back Guarantee', subText:'Within 30 days', icon:<HiCurrencyDollar fill='#DE5212' style={{fontSize:'1.5rem'}}/>},
  {id:3, topText:'Online Support', subText:'Free support system 24/7', icon:<BsFillTelephoneFill fill='#DE5212' style={{fontSize:'1.5rem'}}/>},
  {id:4, topText:'Member Gift', subText:'Coupon on weekends', icon:<AiFillGift fill='#DE5212' style={{fontSize:'1.5rem'}}/>},
]

// smaller component
const Services = ({icon, topText, subText}) => (
  <>
    <Box display='flex' alignItems='center'>
      <Box display='flex' alignItems='center' justifyContent='center' sx={{border:'1px solid #DE5212', width:'45px', borderRadius:'50%', aspectRatio:'1/1'}}>
        {icon}
      </Box>
      <Box display='flex' flexDirection='column' ml='.7rem'>
        <Typography variant='subtitle2' color='black' fontWeight={700}>{topText}</Typography>
        <Typography variant='subtitle2' color='#5D5F5F'>{subText}</Typography>
      </Box>
    </Box>
  </>
)

function AboutUsPage() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

      {/* SECTION 1 */}
      <Stack direction={{xs:'column-reverse', lg:'row'}} width='85vw' margin='2.5rem 0' alignItems='center' justifyContent='space-evenly'>
        <Box flex={0.4} mt={{xs:'3rem', lg:'auto'}}>
          <img src={aboutUs1} alt="brown couch" style={{width:'100%'}}/>
        </Box>

        <Box flex={0.4} display='flex' flexDirection='column' maxWidth='653px' sx={{'& > *':{mt:'2rem'}}}>
          <Stack direction='column' mt='0'>
            <Typography variant='subtitle1' color='secondary'>ABOUT US</Typography>
            <Typography variant='h5' color='black' fontWeight={700}>Just Stay Home & Enjoy <br/> Your Shopping Time</Typography>
          </Stack>

          <Typography variant='p' color='black'>The Expression Agenda is our global human rights strategy. Through it, we target the best means of protecting rights and freedoms on the ground, while enhancing international instruments that protect freedom of expression and the right to information around the world.</Typography>
          <Typography variant='p' color='black'>Our annual report on the state of freedom of expression tracks global trends across major issues of freedom of expression and information, and how they are experienced in various countries.</Typography>

          <Box display='grid' gridTemplateColumns='repeat(2, 1fr)' gap='1.5rem'>
             {
              service.map(item => (
                <Services 
                  key={item.id}
                  topText={item.topText}
                  subText={item.subText}
                  icon={item.icon}
                />
              ))
             }
          </Box>
        </Box>
      </Stack>

      {/* SECTION 2 */}
      <Box textAlign='center' maxWidth='600px' m='2rem 2rem'>
        <Typography variant='h5' color='black' fontWeight={700} mb='.8rem'>Makes Everything So Much Easier <br/> Guaranteed Value for Money </Typography>
        <Typography variant='p' color='#5D5F5F'>We believe that when we take care of our home, it takes care of us. Thats why we make premium quality sheets, towels, robes, rugs and all things soft and wonderful.</Typography>
      </Box>

      {/* SECTION 3 */}
      <Stack direction='row' width='85vw' margin='2.5rem 0' alignItems='center' justifyContent='space-evenly'>
        <Box flex={0.4}>
          <img src={aboutUs2} alt="workspace 01" style={{width:'100%'}}/>
        </Box>
        <Box flex={0.3}>
          <img src={aboutUs3} alt="workspace 02" style={{width:'100%'}}/>
        </Box>
      </Stack>

      {/* SECTION 4 */}
      <Stack direction='column' width='65vw' margin='1.5rem 0' gap={2} justifyContent='center' textAlign='center'>
        <Typography variant='p' color='#5D5F5F'>
          Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus. Aliquam sed volutpat turpis. Phasellus nisl arcu, pretium eu faucibus sed, aliquet in lacus. Pellentesque sed lacus et ipsum rutrum dignissim. Praesent ultrices posuere eros ac tristique.
        </Typography>
        <Typography variant='p' color='#5D5F5F'>
          Lorem ipsum dolor sit amet isse potenti. Vesquam ante aliquet lacusemper elit. Cras neque nulla, convallis non commodo et, euismod nonsese. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.
        </Typography>
        <Typography variant='p' color='#5D5F5F'>
          Sed vulputate elit vitae magna lacinia, vel bibendum neque faucibus. Aliquam sed volutpat turpis. Phasellus nisl arcu, pretium eu faucibus sed, aliquet in lacus. Pellentesque sed lacus et ipsum rutrum dignissim. Praesent ultrices posuere eros ac tristique.
        </Typography>
      </Stack>

      {/* SECTION 5 */}
      <Partners/>


    </Box>
  )
}

export default AboutUsPage