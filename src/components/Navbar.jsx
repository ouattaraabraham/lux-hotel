import React, { useState , useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoClose } from "react-icons/io5";


import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [navBar2,setNavBar2]=useState(false)

  const bgNav=navBar2?"bg-[#F6EEE7] text-[#815E46] ":"text-white"
  const hover=navBar2?"before:bg-[#815E46]": "before:bg-white"
  const bglasLi=navBar2?"bg-[#AD7F58] hover:bg-[#A07553] text-[#3E332E] ":"hover:bg-[#AD7F58]"

  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };
  const iconNavbar=navBar2&&!nav?"text-black":"text-white"

 const scrollToTop=()=>window.scrollTo(0, 0);;

  useEffect(()=>{


    let currentScrollPosition = 0;

    window.addEventListener('scroll', function (e) {

      // Get the new Value
      currentScrollPosition = window.pageYOffset;
      if(window.pageYOffset>50){
        setNavBar2(true);
      }
      if(window.pageYOffset<50){
        setNavBar2(false);
      }

    });

  },[])

  return (
      <div className='fixed z-30  w-full'>
        <div className={`${bgNav} w-full flex justify-between p-4 lg:py-2 lg:px-10 items-center`}>
          <NavLink to="/">
          <h2 onClick={()=>scrollToTop()}  className=' font-bold text-2xl z-20  '>
              LUX HOTEL
            </h2>
          </NavLink>
          
          <ul className='hidden lg:flex font-bold text-2xl'>
            <li onClick={()=>scrollToTop()}  className={`${hover} hover:before:opacity-[1] hover:before:w-[100%] before:content-[''] before:absolute before:opacity-[0.75] before:w-[0%] before:h-[5px] before:bottom-[-12px] before:duration-300 relative m-8 `}><NavLink to="/">Home</NavLink></li>
            <li onClick={()=>scrollToTop()}   className={`${hover} hover:before:opacity-[1] hover:before:w-[100%] before:content-[''] before:absolute before:opacity-[0.75] before:w-[0%] before:h-[5px] before:bg-[#815E46] before:bottom-[-12px] before:duration-300 relative m-8 `}><NavLink to="Contacter" >Contacter</NavLink></li>
            <li onClick={()=>scrollToTop()}  className={`${bglasLi}  px-4 py-2 border w-fit h-fit m-auto`}><NavLink to="Reservation">Reservation</NavLink></li>
          </ul>
      
          {
          nav?
          <IoClose onClick={handleNav} className={`${iconNavbar}  z-20 cursor-pointer lg:hidden`} size={25} />
          :<HiMenuAlt3 onClick={handleNav} className={`${iconNavbar}  z-20 cursor-pointer lg:hidden`} size={25} />
         }
          {/* menu dropdow */}
          <div name='mobile div'
            className={
              nav
                ? 'ease-in duration-300 fixed text-white left-0 top-0 w-full h-screen bg-black px-4 py-7 flex-col z-10'
                : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
            }
          >
            <ul className=' flex flex-col fixed w-full h-full items-center justify-center'>
              <li onClick={handleNav}  className='font-bold text-3xl p-8'><NavLink to="/">Home</NavLink></li>
              <li onClick={handleNav}  className='font-bold text-3xl p-8'><NavLink to="Contacter" >Contacter</NavLink></li>
              <li onClick={handleNav}  className='font-bold text-3xl p-8'><NavLink to="Reservation">Reservation</NavLink></li>
            </ul>
          </div>
        </div>    
      </div>
     
  );
};

export default Navbar;
