import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import NavbarComponent from './Components/NavbarComponent';
import Layout from './Components/Layout';
import Home from './Components/Home';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import About from './Components/About';
import Notfound from './Components/Notfound';

function App() {
  
let routes = createBrowserRouter ([
  {path:'/',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/portfolio',element:<Portfolio/>},
    {path:'/contact',element:<Contact/>},
    {path:'*',element:<Notfound/>}


  ]}
])

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>

   </>
  )
}

export default App
