import React from 'react'

function ProductItem({product}) {
    const {title, imageUrl, description, category, price, id} = product;
  return (
    <>
        <div className="product m-2 text-center">
<div className="wrapper">
    <div className="product-img">
        <img src={imageUrl} alt={title} />
    </div>
    <div className="product title text-uppercase fs-4">{title}</div>
    <div className="product-price">
        <span>Price : {price} $</span> <span><del>{price -15} $</del></span>
    </div>

</div>
<button className='add-to-cart mt-3 w-100'>Add to cart</button>
        </div>
    </>
  )
}

export default ProductItem