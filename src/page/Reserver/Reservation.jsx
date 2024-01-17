import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/slide-1.jpg'
import img2 from '../../assets/slide-2.jpg'
import img3 from '../../assets/slide-3.jpg'
import img4 from '../../assets/slide-5.jpg'

// import img4 from '../../assets/chambre-1.jpg'


function Reservation() {
 
  return (
    <div>
         <div className='pb-[2rem]'>
           <h1 className=" font-bold  before:content-[''] before:absolute before:bottom-[-12px] before:bg-[#3E332E] before:h-[2px] before:w-[70%] flex justify-center relative text-2xl lg:text-4xl w-fit mx-auto ">NOS CHAMBRES</h1>
         </div>
         {/* card */}
        <div className='px-4 my-10 md:mt-[5rem] md:mb-[10rem] max-w-[530px] md:max-w-[1000px] lg:h-[300px] mx-auto md:grid md:grid-cols-2'>
            <div >
            <img className='w-full h-full object-cover' src={img4} alt="chambre" />
            </div>
            <div className='text-lg md:pl-6 md:w-fit pt-5 sm:text-center md:text-start'>
              <h1 className='pb-2 font-bold'> CHAMBRE STANDARD </h1>
              <h2 className='pb-2'>Chambre avec: 1 Lit double 140*190cm</h2>
              <p className='pb-3'>
                Téléphone | Télévision écran LCD | Coffre-fort
              <br />
                Wifi gratuit | Douche | Sèche-cheveux |
              <br />
                Satellite | TNT
              </p>
              <p className='pb-3'>Check-in à 15h00 | Check-out à 12h00</p>
              <p className='pb-4' >from 104 €</p>
              <div className='flex justify-center'>
                <Link className='bg-[#AD7F58] font-bold text-[#3E332E] hover:bg-[#A07553] border px-10 py-[0.3rem] mx-auto'  to="/Contacter">
                    Reserver
                </Link>
                
              </div>
            </div>
       </div>
       <div className='max-w-[200px]  h-[1px] bg-[#CEA37E] mx-auto'></div>
        {/* card */}
        <div className='px-4 my-10 md:mt-[5rem] md:mb-[10rem]  max-w-[530px] md:max-w-[1000px] lg:h-[300px] mx-auto md:grid md:grid-cols-2'>
            <div >
            <img className='w-full h-full object-cover' src={img1} alt="chambre" />
            </div>
            <div className='text-lg md:pl-6 md:w-fit pt-5 sm:text-center md:text-start'>
              <h1 className='pb-2 font-bold'> CHAMBRE STANDARD </h1>
              <h2 className='pb-2'>Chambre avec: 1 Lit double 140*190cm</h2>
              <p className='pb-3'>
                Téléphone | Télévision écran LCD | Coffre-fort
              <br />
                Wifi gratuit | Douche | Sèche-cheveux |
              <br />
                Satellite | TNT
              </p>
              <p className='pb-3'>Check-in à 15h00 | Check-out à 12h00</p>
              <p className='pb-4' >from 139 €</p>
              <div className='flex justify-center'>
                <Link className='bg-[#AD7F58] font-bold text-[#3E332E] hover:bg-[#A07553] border px-10 py-[0.3rem] mx-auto'  to="/Contacter">
                    Reserver
                </Link>
              </div>
            </div>
       </div>
       <div className='max-w-[200px]  h-[1px] bg-[#CEA37E] mx-auto'></div>
        {/* card */}
        <div className='px-4 my-10 md:mt-[5rem] md:mb-[10rem]  max-w-[530px] md:max-w-[1000px] lg:h-[300px] mx-auto md:grid md:grid-cols-2'>
            <div >
            <img className='w-full h-full object-cover' src={img2} alt="chambre 2" />
            </div>
            <div className='text-lg md:pl-6 md:w-fit pt-5 sm:text-center md:text-start'>
              <h1 className='pb-2 font-bold'> CHAMBRE STANDARD </h1>
              <h2 className='pb-2'>Chambre avec: 1 Lit double 140*190cm</h2>
              <p className='pb-3'>
                Téléphone | Télévision écran LCD | Coffre-fort
              <br />
                Wifi gratuit | Douche | Sèche-cheveux |
              <br />
                Satellite | TNT
              </p>
              <p className='pb-3'>Check-in à 15h00 | Check-out à 12h00</p>
              <p className='pb-4' >from 118 €</p>
              <div className='flex justify-center'>
                <Link className='bg-[#AD7F58] font-bold text-[#3E332E] hover:bg-[#A07553] border px-10 py-[0.3rem] mx-auto'  to="/Contacter">
                    Reserver
                </Link>
              </div>
            </div>
       </div>
       <div className='max-w-[200px]  h-[1px] bg-slate-300 mx-auto'></div>
        {/* card */}
        <div className='px-4 my-10 md:mt-[5rem] md:mb-[10rem]  max-w-[530px] md:max-w-[1000px] lg:h-[300px] mx-auto md:grid md:grid-cols-2'>
            <div >
            <img className='w-full h-full object-cover' src={img3} alt="chambre 3" />
            </div>
            <div className='text-lg md:pl-6 md:w-fit pt-5 sm:text-center md:text-start'>
              <h1 className='pb-2 font-bold'> CHAMBRE STANDARD </h1>
              <h2 className='pb-2'>Chambre avec: 1 Lit double 140*190cm</h2>
              <p className='pb-3'>
                Téléphone | Télévision écran LCD | Coffre-fort
              <br />
                Wifi gratuit | Douche | Sèche-cheveux |
              <br />
                Satellite | TNT
              </p>
              <p className='pb-3'>Check-in à 15h00 | Check-out à 12h00</p>
              <p className='pb-4' >from 154 €</p>
              <div className='flex justify-center'>
              <Link className='bg-[#AD7F58] font-bold text-[#3E332E] hover:bg-[#A07553] border px-10 py-[0.3rem] mx-auto'  to="/Contacter">
                  Reserver
              </Link>
              </div>
            </div>
       </div>
    

    </div>
  )
}

export default Reservation