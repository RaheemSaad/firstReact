import React from 'react'
// import { Navbar } from 'react-bootstrap/Navbar';
import Footer from './Footer';
import NavbarComponent from './NavbarComponent';
import {Outlet} from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <NavbarComponent/>
    <Outlet/>
    <Footer/>
    </>
  )
}
