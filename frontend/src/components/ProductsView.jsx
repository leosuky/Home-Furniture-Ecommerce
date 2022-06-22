import React from 'react'
import { Box, Pagination } from '@mui/material'
import ProductCard from './ProductCard'

function ProductsView({data}) {

    const products = data.slice(0, 20)
  return (
    <Box >
        <Box display='grid' gap='1rem' gridTemplateColumns='repeat(auto-fill, 200px)' justifyContent='center'>
            {
                products.map((item) => (
                    <ProductCard image={item.image} key={item.id} productName={item.name} price={item.price}/>
                ))
            }
        </Box>

        {/* PAGINATION */}
        <Box display='flex' justifyContent='center' mt='3rem'>
            <Pagination 
                count={5} 
                shape='rounded'
                color='secondary'
            />
        </Box>
    </Box>
    
  )
}

export default ProductsView