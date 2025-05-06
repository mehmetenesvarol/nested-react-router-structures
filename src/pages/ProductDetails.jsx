import React from 'react'
import { useParams } from 'react-router-dom'
import productData from '../data/productData.json'
import DetailProduct from '../components/DetailProduct' 

function ProductDetails() {
  const params = useParams()
  const product = productData.products[params.id-1]
  return (
    <div>
      <DetailProduct product={product}/>
    </div>
  )
}

export default ProductDetails