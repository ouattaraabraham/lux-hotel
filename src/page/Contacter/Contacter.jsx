import React from 'react'
import { IoDesktopOutline } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { ImWhatsapp } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";

function Contacter() {
  return (
    <div name="Contacter" id='Contacter'  className='relative  lg:h-fit pt-[6rem] lg:pt-[7rem] lg:pb-[1rem]'>
         <div className='relative'>
          <h1 className="cursor-pointer text-[#3E332E] hover:before:opacity-[1] text-nowrap	 hover:before:w-[100%] before:content-[''] before:absolute before:opacity-[0.75] before:w-[0%] before:h-[5px] before:bg-[#3E332E] before:bottom-[-12px] before:duration-300 w-fit  mx-auto mb-10 lg:mb-14 relative text-lg lg:text-2xl font-bold">CONTACTEZ-NOUS</h1>
         </div>
       <div className=' lg:max-w-[900px] flex flex-col lg:flex-row items-center justify-between m-auto lg:w-full  '>   
           <div className=' cursor-pointer hover:scale-[1.2] my-auto flex flex-col items-center'>
             <IoDesktopOutline size={50}/>
             <p className='text-xl'>brief en ligne.</p>
           </div>

           <div className='cursor-pointer hover:scale-[1.2] my-auto flex flex-col items-center pt-11 lg:pt-0 '>
             <MdOutlineMail size={53}/>
             <p className='text-xl'>téléphone.</p>
           </div>

           <div className='cursor-pointer hover:scale-[1.2] my-auto flex flex-col items-center pt-11 lg:pt-0'>
             <LuPhoneCall size={47}/>
             <p className='text-xl'>email.</p>
           </div>

           <div className='cursor-pointer hover:scale-[1.2] my-auto flex flex-col items-center pt-11 lg:pt-0'>
             <ImWhatsapp size={46}/>
             <p className='text-xl'>whatssap.sms.</p>
           </div>
       </div>
    </div>
  )
}

export default Contacter