import React, { useState } from 'react'
import HeroShop from '../components/HeroShop'
import ProductList from '../components/ProductList'
import Products from '../data/Product';

function Eshop() {
  const [data, setData] =useState(Products);

  return (
    <>
    <section>
    <HeroShop />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>Filter by category</h1>            
          </div>
          <div className="col-md-9">
           {/*<ProductList Products = {data} />*/}
           <div className="row">
            {
              data.map((values)=> {
                const {id, title, price, description, imageUrl} =values;
                return(
                  <div className="col-md-4 mb-4" key={id}>
                  <div className="card" >
  <img src={imageUrl}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{
      color:'black',
      fontSize:30
      }}>{title}</h5>
    <p style={{
      color:'black',
      fontSize:30
      }}>Price: {price}</p>
    <p className="card-text">{description}</p>
    <a href="#" className="btn btn-primary">Ajouter au panier</a>
  </div>
</div>
</div>
                )
              } )
            }
           </div>
           
          </div>
        </div>
      </div>
    </section>
      
    </>
  )
}

export default Eshop