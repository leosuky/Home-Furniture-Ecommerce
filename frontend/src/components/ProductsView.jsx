import React from 'react'
import { Box, Pagination, } from '@mui/material'
import ProductCard from './ProductCard'

function ProductsView({data}) {
    const gridRef = React.useRef()
    const [products, setProducts] = React.useState([])
    const [pageCount, setPageCount] = React.useState()
    const [paginationCount, setPaginationCount] = React.useState()

    React.useEffect(() => {
        const productSize = gridRef.current.clientWidth > 2045 ? 25: gridRef.current.clientWidth > 845? 20:gridRef.current.clientWidth > 630? 15:gridRef.current.clientWidth > 415? 10:5
        const newProducts = data.slice(0, productSize)
        const countPagination = Math.ceil((data.length) / productSize)
        setProducts(newProducts)
        setPageCount(productSize)
        setPaginationCount(countPagination)
    }, [data])

    const switchPage = (event, value) => {
        const start = (value-1) * pageCount
        console.log(pageCount)
        const newProducts = data.slice(start, (pageCount+start))
        setProducts(newProducts)
    }
    
  return (
    <Box >
        <Box 
            display='grid' gap='1rem' ref={gridRef}
            gridTemplateColumns='repeat(auto-fill, 200px)' 
            justifyContent='center'
        >
            {
                products.map((item) => (
                    <ProductCard id={item._id} image={item.image} key={item._id} productName={item.name} price={item.price}/>
                ))
            }
        </Box>

        {/* PAGINATION */}
        <Box display='flex' justifyContent='center' mt='3rem'>
            <Pagination 
                count={paginationCount}
                shape='rounded'
                color='secondary'
                onChange={switchPage}
                siblingCount={0}
            />
        </Box>
    </Box>
    
  )
}

export default ProductsView