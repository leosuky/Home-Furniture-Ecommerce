import React from 'react'
import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, ErrorMessage } from '../components/Feedback';
import { getProductDetailAsync } from '../appStore/slices/ProductDetailSlice';
import { useParams} from 'react-router-dom'

import ProductDetailCard from '../components/ProductDetailCard';

function ProductPage() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.productDetail)
    const {loading, productDetail, error} = product
    const params = useParams()

    React.useEffect(() => {
      dispatch(getProductDetailAsync(params.productId))

    }, [dispatch,params.productId])

    console.log(productDetail)

  return (
    <Box >
      <Box padding='1.5rem'>
        <Button variant='contained' sx={{color:'white', bgcolor:'black'}}>GO BACK</Button>
      </Box>
      
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        {loading ? <Loading/> : error ? <ErrorMessage error={error}/> : <ProductDetailCard product={productDetail}/>}
      </Box>
    </Box>
  )
}

export default ProductPage