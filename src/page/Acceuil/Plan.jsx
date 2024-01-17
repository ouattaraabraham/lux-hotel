import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../assets/plan-1.jpg'
import img6 from '../../assets/plan-4.jpg'
import img7 from '../../assets/plan-2.jpg'
import img8 from '../../assets/plan-7.jpg'
import img9 from '../../assets/plan-6.jpg'
import img10 from '../../assets/plan-5.jpg'
import img11 from '../../assets/plan-9.jpg'


const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='px-4  grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={img6}
          alt='bord de picine'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={img8}
          alt='bord de picine'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={img7}
          alt='picine'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={img}
          alt='bord de picine'
        />
        <img
          className='object-bottom row-span-2 object-cover w-full h-full p-2'
          // src={img5}
          src={img10}
          alt='bord de picine'
        />
      </div>
      {/* Right Side */}
      <div className='px-4 sm:px-10 md:px-14 flex flex-col h-full justify-center'>
        <h3 className='text-4xl md:text-6xl font-bold text-[#3E332E]	'>Hotel Lux Un Paradis</h3>
        {/* <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          nam?
        </p> */}
        <p className='py-6'>
          Situé sur une île  Lux Hôtel offre à ses convives un cadre luxueux et bienveillant  
          de vie traditionnel en plein air, la beauté pure, la spiritualité et les souvenirs anciens de cette île vivante préservée avec les amoureux de la nature.
        </p>
        <div className='relative  w-fit'>
          <NavLink to="Reservation">
           <button className="font-bold text-[#3E332E]	before:content-[''] before:absolute before:h-[5px] before:w-[0%] before:bottom-[-12px] hover:before:w-[100%] before:bg-[#3E332E] before:duration-300">EXPLORE</button>
          </NavLink>
          {/* <button className="font-bold hover:before:opacity-[1] hover:before:w-full before:content-[''] before:absolute before:opacity-[0.75] before:w-0 before:h-[5px] before:bg-[#deb887] before:bottom-[-12px] before:duration-300">EXPLORE</button> */}
        </div>
      </div>
    </div>
  );
};

export default Plan;
