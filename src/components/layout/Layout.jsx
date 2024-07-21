import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import ScrollTop from '../scrollTop/ScrollTop'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
  return (
    <>  
        <Navbar/>
        <ToastContainer/>
        <div className='main-content min-h-screen pt-12 '>{children}</div>
        <Footer/>
    </>
  ) 
}

export default Layout
