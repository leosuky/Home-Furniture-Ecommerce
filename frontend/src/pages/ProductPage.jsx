import React from 'react'
import { Box } from '@mui/material';
import axios from 'axios';
import { useParams} from 'react-router-dom'

// import ProductDetailCard from '../components/ProductDetailCard';

function ProductPage() {
    const [product, setProduct] = React.useState()
    const params = useParams()

    React.useEffect(() => {
      async function getProducts() {
        const response = await axios.get(`api/shop/products/${params.productId}`)
        setProduct(response.data)
        console.log(response)
      }
  
      getProducts()
    },)

    console.log(params.productId)

  return (
    <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        this product: {product}
        {/* <ProductDetailCard product={product}/> */}
    </Box>
  )
}

export default ProductPage