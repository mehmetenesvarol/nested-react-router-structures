import React from 'react'
import Product from '../components/Product'
import productData from '../data/productData.json'


function Products() {
    const products = productData.products
  return (
    <div>
        Products
        {
            products && products.map((product)=>(
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default Products