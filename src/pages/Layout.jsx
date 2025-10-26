import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        <FloatingWhatsApp/>
    </div>
  )
}

export default Layout