import React from 'react'
import Navbar from './Pages/Navbar'
import { Outlet } from 'react-router'
import Footer from './Pages/Footer'

const Layout = () => {
  return (
  <>
 <Navbar/>
 <Outlet/>
 <Footer/>
  </>
  )
}

export default Layout
