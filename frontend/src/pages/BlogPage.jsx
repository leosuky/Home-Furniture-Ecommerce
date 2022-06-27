import React from 'react'
import { Box, Stack, Typography, Pagination } from '@mui/material'
import { useTheme } from '@mui/material/styles';

import InputField from '../components/InputField'
import TopPostCard from '../components/TopPostCard';
import BlogPostCard from '../components/BlogPostCard';

import { top_posts, blog_posts } from '../data';
import {RiSearchLine} from 'react-icons/ri'

function BlogPage() {
  // STATES
  const theme = useTheme()
  const [blogs, setBlogs] = React.useState([])
  const [paginationCount, setPaginationCount] = React.useState()

  React.useEffect(() => {
    const first_blog = blog_posts.slice(0,9)
    const countPagination = Math.ceil((blog_posts.length) / 9)
    setPaginationCount(countPagination)
    setBlogs(first_blog)
  }, [])

  const switchBlogs = (event, value) => {
    const start = (value-1) * 9

    const next = blog_posts.slice(start, (9+start))
    setBlogs(next)
  }

  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>

      <Stack direction={{xs:'column-reverse', lg:'row'}} width='85vw' margin='2.5rem 0'>
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
        <Box flex={0.7} display='flex' alignItems='center' flexDirection='column'>
          <Box display='flex' flexWrap='wrap' alignItems='flex-start' justifyContent='center'>
            {
              blogs.map(item => (
                <Box m='1rem'>
                  <BlogPostCard
                      title={item.title}
                      author={item.author}
                      date={item.date}
                      image={item.image}
                      key={item.id}
                    />
                </Box>
              ))
            }
          </Box>
            
          <Box mt='1.5rem' mb='2rem'>
            <Pagination 
              count={paginationCount}
              shape='rounded'
              color='secondary'
              onChange={switchBlogs}
            />
          </Box>
        </Box>
      </Stack>

    </Box>
    
  )
}

export default BlogPage