import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCartItems, } from '../appStore/slices/CartSlice'
import { createOrderReset } from '../appStore/slices/OrderSlice'

function OrderSuccess() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(clearCartItems())
    dispatch(createOrderReset())
  }, [dispatch])

  return (
    <div>OrderSuccess</div>
  )
}

export default OrderSuccess