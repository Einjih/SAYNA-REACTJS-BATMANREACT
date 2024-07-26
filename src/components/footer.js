import React from 'react'
import logoSayna from '../assets/Logos/logo_sayna_white.png'
import wb from '../assets/Logos/icon_WB.png'
import x from '../assets/Logos/icon_x.png'
import dc from '../assets/Logos/icon_DC.png'
import fb from '../assets/Logos/icon_facebook.png'
import ig from '../assets/Logos/icon_ig.png'
import tw from '../assets/Logos/icon_tw.png'


function footer() {
  return (
    <>
    <section>
    <footer>
<div className="container">
            <div className="text-footer">
                <img src={wb} alt=""/>
                Ce projet respecte l’univers cinématographique des films Batman récents. Version Nolan & Snyder & Reeves
            </div>
            <div className="social-footer">
                <a href="#" className="social-item"><img src={logoSayna} alt=""/>
                 <img src={x} alt=""/>
                <img src={dc} alt=""/></a>
                <a href="" className="social-item"><img src={fb} alt=""/></a>
                <a href="" className="social-item"><img src={ig} alt=""/></a>
                <a href="" className="social-item"><img src={tw} alt=""/></a>
                   
            </div>
        </div>
</footer>
    </section>

        
    
    </>
    
  )
}

export default footer