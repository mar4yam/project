import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Fotter from './Fotter'

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  )
}
