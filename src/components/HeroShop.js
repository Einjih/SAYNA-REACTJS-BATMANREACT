import React from 'react'
import '../styles/heroShop.css';

const HeroShop = (props) =>{
  const titre = props.titre;
  const name = props.name;
  return (
    <section id='hero'>
     <div className='hero-image1'>
     <div className='container'>
      <h1 className='hero-title text-uppercase'>
        
      Recuperez le flow de <br/> {titre} avec notre {name}</h1>
     </div>
     </div>

    </section>
  )
}

export default HeroShop