import React from 'react'
import ProductItem from '../components/ProductItem'
function Products({products, search, addToCart}) {
  return (
    <div className='row'>
      {products.filter((val=>{
        if(search === ''){
          return val;
        }
        else{
          return val.title.toLowerCase().includes(search.toLowerCase());
        }
      })).map((product)=>(
        <div className="col-md-4">
            <ProductItem key={product.id} product={product} addToCart={addToCart}/>
        </div>
      ))}

    </div>
  )
}

export default Products