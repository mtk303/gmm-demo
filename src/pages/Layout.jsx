import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Home/Navbar'
import Footer from '../components/Home/Footer'
import '../assets/css/home.css'
import Sidebar from '../components/Home/Sidebar'
const Layout = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Outlet/>
      <Sidebar/>
      
    </div>
  )
}

export default Layout
