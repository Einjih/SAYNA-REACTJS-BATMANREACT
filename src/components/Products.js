import React from 'react'
import ProductItem from '../components/ProductItem'
function Products({products}) {
  return (
    <div className='row'>
      {products.map((product)=>(
        <div className="col-md-4">
            <ProductItem key={product.id} product={product}/>
        </div>
      ))}

    </div>
  )
}

export default Products