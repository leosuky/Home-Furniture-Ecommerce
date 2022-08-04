import React from 'react'
import { 
  Box, Button, Typography, 
  Stack, Divider, Rating,
  TextField, TextareaAutosize
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Loading, ErrorMessage,SuccessMessage, ErrorPopUp } from '../components/Feedback';
import { getProductDetailAsync } from '../appStore/slices/ProductDetailSlice';
import { createProductReviewAsync } from '../appStore/slices/ReviewSlice';
import { toggleFeedback } from '../appStore/slices/FeedbackSlice';
import { useParams} from 'react-router-dom'

import ProductDetailCard from '../components/ProductDetailCard';
import ReviewCard from '../components/ReviewCard';

function ProductPage() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.productDetail)
    const reviewState = useSelector(state => state.review)
    const {userInfo} = useSelector(state => state.user)
    const {loading, productDetail, error} = product
    const params = useParams()

    // FORM STATES
    const [rating, setRating] = React.useState(0);
    const [comment, setComment] = React.useState('')

    React.useEffect(() => {
      dispatch(getProductDetailAsync(params.productId))

    }, [dispatch,params.productId])

    // CHECK IF THE USER HAS ALREADY COMMENTED
    const userHasCommented = () => {
      if (userInfo) {
        for (let i=0; i<productDetail.reviews.length; i++) {
          if (userInfo._id === productDetail.reviews[i].user) {
            return true
          }
        }
      }
      return false
    }

    // FEEDBACK
    React.useEffect(() => {
      if (reviewState.error) {
        dispatch(toggleFeedback())
      }
    }, [dispatch, reviewState.error, reviewState.sucess])


    // INPUT HANDLERS
    const handleComment = (event) => {
      setComment(event.target.value)
    }
    const handleRating = (event, newValue) => {
      setRating(newValue)
    }

    const handleSubmit = () => {
      dispatch(createProductReviewAsync(
        params.productId,
        {
          rating: rating,
          comment: comment
        }
      ))

      setTimeout(() => {
        window.location.reload()
      }, 700);
    }

  return (
    <Box >
      <Box padding='1.5rem'>
        <Button variant='contained' sx={{color:'white', bgcolor:'black'}}>GO BACK</Button>
      </Box>
      
      <Box display='flex' alignItems='center' justifyContent='center' flexDirection='column'>
        {loading ? <Loading/> : error ? <ErrorMessage error={error}/> : <ProductDetailCard product={productDetail}/>}

        {/* REVIEWS */}
        <Box width='90vw' display={error || loading ? 'none':'block'} mb='2rem'>

          {reviewState.error && <ErrorPopUp message={reviewState.error}/>}
          {reviewState.loading && <Loading/>}

          <Stack direction='row' justifyContent={productDetail.reviews.length ? 'space-between':'flex-end'}>
            <Box flex={.45} display={productDetail.reviews.length ? 'block':'none'}>
              <Typography variant='h4' fontWeight='700'>REVIEWS</Typography>
              <Divider sx={{borderBottomWidth:'medium', borderColor:'black'}}/>
              <Box>
                {
                  productDetail.reviews.map(item => <ReviewCard review={item} key={item._id}/>)
                }
              </Box>
            </Box>

            <Box flex={.45} display={userInfo ? 'block':'none'}>
              <Box display={userHasCommented() ? 'none':'block'}>
                <Typography variant='h4' fontWeight='700'>WRITE A REVIEW</Typography>
                <Divider sx={{borderBottomWidth:'medium', borderColor:'black'}}/>
                <Box
                  width='100%' display='flex' flexDirection='column'
                  mt='1.5rem' alignItems='flex-start'
                  sx={{'&>*':{mb:'1rem'}}}
                >
                  <Rating value={rating} size='large' onChange={handleRating}/>
                  <Box width='80%'>
                    <TextField
                      variant='outlined' label='Review' color='secondary'
                      placeholder='Tell us something...' fullWidth
                      onChange={handleComment}
                      InputProps={{
                        inputComponent: TextareaAutosize,
                      }}
                    />
                  </Box>
                  <Button
                    variant='contained' sx={{width:'10rem'}} color='secondary'
                    onClick={handleSubmit} disabled={!rating || !comment ? true:false}
                  >Submit</Button>
                </Box>
              </Box>

              <Box display={userHasCommented() ? 'block':'none'}>
                <SuccessMessage message='YOU HAVE ALREADY POSTED A REVIEW'/>
              </Box>
            </Box>

          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductPage