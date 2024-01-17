import React from 'react';
import bg from '../../assets/bg-reservation.jpg'



const Hero = () => {
  return (
    <div className='w-full h-screen mb-[5rem] lg:mb-[6rem]'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src="https://plus.unsplash.com/premium_photo-1682800179180-fb326934d458?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // src='https://plus.unsplash.com/premium_photo-1682800179180-fb326934d458?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // src='https://plus.unsplash.com/premium_photo-1661964225206-fd5d445a6edd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // src='https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='chambre'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className=' absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='w-full text-center m-auto absolute '>
          <h1 className='font-bold text-2xl md:text-4xl '>
         RESERVER CHAMBRE
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
