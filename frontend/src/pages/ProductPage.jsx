import React from 'react'
import { useParams} from 'react-router-dom'

import { data } from '../data'

function ProductPage() {
    const params = useParams()

    const product = data.filter((item) => {
        return item.id === parseInt(params.productId)
    })

    console.log(product)
  return (
    <div>
        this product: {product[0].name}
    </div>
  )
}

export default ProductPage