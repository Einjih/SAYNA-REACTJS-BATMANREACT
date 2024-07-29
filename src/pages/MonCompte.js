import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const MonCompte= () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();
  const deconnecter = async () =>{

    try {
      await logout();
      navigate('/login')
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <>
    <section>
    <h1>Batman mon compte</h1>
    <p style={{color: 'white'}}>Email utilisateur: {user && user.email}</p>
    <button className='text-uppercase' onClick={deconnecter}>Deconnecter</button>
    </section>
     
    </>
  )
}

export default MonCompte