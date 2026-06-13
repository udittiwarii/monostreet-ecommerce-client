import React from 'react'
import Navbar from './../components/layout/Navbar';
import Footer from './../components/layout/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <Navbar />


      <Outlet />

      <Footer />
    </div>
  )
}

export default MainLayout