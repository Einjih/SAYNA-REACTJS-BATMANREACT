import React from 'react';
import logohome from '../assets/Logos/logohome.png';
import { NavLink } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function NavBar() {
  const {user} = UserAuth();
  return (
    <>
    <section>
    <nav className="container">
                    <NavLink to="/" className="logobat" href="index.html"><img src={logohome} alt="logo de Batman"/></NavLink>
                    <ul>
                        <li><NavLink to="home">HOME</NavLink></li>
                        <li><NavLink to="game" >GAME</NavLink></li>
                        <li><NavLink to="eshop">ESHOP</NavLink></li>
                        {
                         user ?  (<li><NavLink to="compte">MON COMPTE</NavLink></li>): ( 
                          <ul>
                          <li><NavLink to="login" >Connexion</NavLink></li>
                          <li><NavLink to="signup">Inscription</NavLink></li>
                          </ul>
                          )
                        }
                        

                    </ul>
                </nav>
    </section>
        
               
    </>
  )
}

export default NavBar