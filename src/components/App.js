import React from 'react';
import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Game from '../pages/Game'
import Eshop from '../pages/Eshop'
import Layout from '../pages/Layouts';
import MonCompte from '../pages/MonCompte';
import NotFoundPage from '../pages/NotFoundPage';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import { AuthContextProvider } from '../context/AuthContext';

function App() {
  return (
    <>
    
<BrowserRouter>
<AuthContextProvider>
  <Routes>
    <Route path='/' element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='game' element={<Game/>}/>
    <Route path='eshop' element={<Eshop/>}/>
    <Route path='compte' element={<MonCompte/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signup' element={<Signup/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
    </Route>
  </Routes>
  </AuthContextProvider>
</BrowserRouter>


    
    </>
    
    
    
  );
}

export default App;
