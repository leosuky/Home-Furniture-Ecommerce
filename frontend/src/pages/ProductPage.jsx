import React from 'react'
import { Box, Button } from '@mui/material';
import axios from 'axios';
import { useParams} from 'react-router-dom'

import ProductDetailCard from '../components/ProductDetailCard';
// import { StyledButton } from '../components/Buttons';

function ProductPage() {
    const [product, setProduct] = React.useState([])
    const params = useParams()

    React.useEffect(() => {
      async function getProduct() {
        const response = await axios.get(`http://127.0.0.1:8000/api/shop/products/${params.productId}`)
        setProduct(response.data)
        console.log(response)
      }
  
      getProduct()
    }, [params.productId])

  return (
    <Box >
      <Box padding='1.5rem'>
        <Button variant='contained' sx={{color:'white', bgcolor:'black'}}>GO BACK</Button>
      </Box>
      
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        <ProductDetailCard product={product}/>
      </Box>
    </Box>
  )
}

export default ProductPage