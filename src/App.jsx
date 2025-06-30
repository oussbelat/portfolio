import React from 'react'
import Navbar from './coponent/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import  { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
    useEffect(() => {
    document.body.classList.add('bg-black', 'text-white', 'm-0', 'p-0');
    document.documentElement.classList.add('bg-black', 'text-white', 'm-0', 'p-0');
  }, []);
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
           <Home/>
          
          </>
        } />
        <Route path="/Projects" element={<Projects />} /> 
        <Route path="/About" element={<About />} />  
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      
    </Router>
  )
}
