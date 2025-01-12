import React from 'react'
// import Main from './Main'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout