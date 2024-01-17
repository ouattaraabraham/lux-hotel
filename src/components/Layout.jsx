import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx'



function Layout() {
    return (
      <div className='bg-[#FCF9F6] text-[#815E46]'>
        <Navbar />
        <div>
         <Outlet/>
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Layout;