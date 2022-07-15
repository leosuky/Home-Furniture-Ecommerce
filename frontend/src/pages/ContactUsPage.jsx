import React from 'react'
import { Box, Stack,Typography, TextField } from '@mui/material'
import Map from '../components/Map'
import styled from '@emotion/styled'
import { StyledButton } from '../components/Buttons'

// ICONS
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import {RiFacebookFill,RiGoogleFill,RiTwitterFill, RiInstagramFill,RiYoutubeFill} from 'react-icons/ri'

// LIST
const icons = [
  {id:1, icon:<RiFacebookFill fill='white'/>},
  {id:2, icon:<RiGoogleFill fill='white'/>},
  {id:3, icon:<RiTwitterFill fill='white'/>},
  {id:4, icon:<RiInstagramFill fill='white'/>},
  {id:5, icon:<RiYoutubeFill fill='white'/>},
]

export const StyledTextField = styled(TextField)(({theme}) => ({
  '& fieldset': {
    borderRadius:'25px'
  }
}))

const Container = ({icon}) => (
  <>
    <Box 
      display='flex' alignItems='center' 
      justifyContent='center' width='30px' 
      bgcolor='#5D5F5F' 
      sx={{
        aspectRatio:'1/1', borderRadius:'50%',
        '&:hover':{
          cursor:'pointer', bgcolor:'#DE5212'
        }
      }}
    >
      {icon}
    </Box>
  </>
)


function ContactUsPage() {
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' mb='2rem'>

      <Stack direction={{xs:'column', md:'row'}} width={{xs:'90vw', lg:'85vw'}} margin='2.5rem 0' alignItems='center' justifyContent='space-evenly'>

        <Box flex={{xs:0.6, lg:0.5}} display='flex' flexDirection='column' mb={{xs:'1.5rem', md:0}} gap={1} sx={{'&>*':{margin:'1rem'}}}>

          <Stack direction='column' textAlign='left' gap={1}>
            <Typography variant='h5' color='black' fontWeight={700}>Contact Us</Typography>
            <Box maxWidth={600}>
              <Typography variant='subtitle2' color='#5D5F5F'>
                We love to hear from you, so if there's anything you'd like to ask us, we're right here and ready to help in every way we can.
              </Typography>
            </Box>
          </Stack>

          <Box display='grid' gridTemplateColumns={{xs:'auto',sm:'repeat(2, 1fr)'}} gap='2rem'>
            <StyledTextField variant='outlined' placeholder='ex: Elon Musk' label='Your Name' color='secondary'/>
            <StyledTextField variant='outlined' placeholder='ex: happy@gmail.com' label='Your Email' color='secondary'/>
            <StyledTextField variant='outlined' placeholder='ex: +234 701 234 5678' label='Your Phone' color='secondary'/>
            <StyledTextField variant='outlined' placeholder='ex: Great Website' label='Subject' color='secondary'/>
            <TextField 
              variant='outlined' label='Message' color='secondary' multiline rows={6}
              placeholder='Write your message here...' sx={{gridColumn:{xs:'span 1', sm:'span 2'}}}
            />
          </Box>

          <Stack direction='row' justifyContent='end'>
            <StyledButton variant='contained' width='10rem'>Submit</StyledButton>
          </Stack>
        </Box>

        <Box flex={0.3} sx={{'&>*':{mb:'2rem'}}} maxWidth='450px'>

          <Box>
            <Typography variant='P' color='black' fontWeight={700} mb='.8rem'>WORKING HOURS</Typography>
            <Typography variant='subtitle2' color='#5D5F5F'>Monday – Friday, 9:00am – 5:00pm PST.</Typography>
          </Box>

          <Box sx={{'&>*':{mb:'.8rem'}}}>
            <Box display='flex' gap={1} alignItems='center'>
              <HomeIcon color='secondary'/>
              <Typography variant='subtitle2' color='#5D5F5F'>20, Kusa Street, Off Pedro Road, Somolu, Lagos.</Typography>
            </Box>
            <Box display='flex' gap={1} alignItems='center'>
              <PhoneIcon color='secondary'/>
              <Typography variant='subtitle2' color='#5D5F5F'>+234 814 708 7668, +234 701 234 5678</Typography>
            </Box>
            <Box display='flex' gap={1} alignItems='center'>
              <MailIcon color='secondary'/>
              <Typography variant='subtitle2' color='#5D5F5F'>info@gmail.com</Typography>
            </Box>
          </Box>

          <Box>
            <Typography variant='P' color='black' fontWeight={700}>JOIN US</Typography>
            <Typography variant='subtitle2' color='#5D5F5F' mt='1.2rem'>
              We are happily open to colloborate. You can ask any questions by phone, email, Instagram or Facebook or visit our FAQ section here.
            </Typography>

            <Box display='flex' gap={1} mt='.5rem'>
              {
                icons.map(item => (
                  <Container key={item.id} icon={item.icon}/>
                ))
              }
            </Box>
          </Box>
        </Box>

      </Stack>

      {/* GOOGLE MAP */}
      <Map/>
    </Box>
  )
}

export default ContactUsPage