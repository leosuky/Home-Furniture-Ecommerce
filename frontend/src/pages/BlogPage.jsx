import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import InputField from '../components/InputField'
import TopPostCard from '../components/TopPostCard';
import BlogPostCard from '../components/BlogPostCard';

import { top_posts } from '../data';
import {RiSearchLine} from 'react-icons/ri'

function BlogPage() {
  const theme = useTheme()

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

      <Stack direction='row' width='85vw' margin='2.5rem 0'>
        {/* TOP STORIES */}
        <Box flex={0.3} display='flex' flexDirection='column' alignItems='center'>
          <Box margin='1rem' width='70%' mb='1.5rem'>
            <InputField 
              width={350} icon={<RiSearchLine fill='black'/>}
              iconbg={theme.palette.primary.main} paperbg='#fff'
              placeholder='Search...' inputColor='black'
              iconbgHover='#aca7a6' bdColor='#b6b8b8'
            />
          </Box>

          <Box ml='1rem' mt='1rem' width='85%'>
            <Typography fontWeight={700}>Top Posts</Typography>
          </Box>

          <Box margin='1rem' width='80%'>
            {
              top_posts.map(item => (
                <TopPostCard
                  key={item.id} title={item.title}
                  date={item.date} image={item.image}
                />
              ))
            }
          </Box>
          
        </Box>

        {/* BLOG CONTENT */}
        <Box flex={0.7} bgcolor='blue'>
            <BlogPostCard/>
        </Box>
      </Stack>

    </Box>
    
  )
}

export default BlogPage