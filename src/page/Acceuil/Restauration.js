import React from 'react';
import { TbCircle } from "react-icons/tb";
import imgF from '../../assets/imgF.avif'
import img from '../../assets/plat-1.jpg'

const Restaurent = () => {
  return (
    <div className='bg-[#deb887] lg:bg-white  mt-[55%] sm:mt-[39rem] lg:mt-[20%] xl:mt-[20%]  mb-[20%] md:mb-[10%]  '>
      <div className=' bg-[#F0E4D9] max-w-[1400px] pt-14 md:pt-16 sm:pb-16  lg:text-start flex flex-col gap-10 lg:gap-6 lg:flex-row mx-auto'>
      {/* <div className='bg-[#deb887]  text-center lg:text-start md:max-w-[1400px] h-[770px] mx-auto mt-[60%] lg:mt-[25%] md:h-[400px]  lg:mb-[20%] md:mb-[35%] px-4 flex flex-col md:w-full md:flex-row-reverse gap-4'> */}
        <div className=' relative px-4 sm:px-10 md:px-14 lg:w-[50%] lg:my-auto'>
          <h3 className='text-[#3E332E] text-2xl text-center font-bold'>Restauration
          </h3>
          <p className='pt-10'>
            <span className='font-bold text-[#3E332E]' >Beach Rouge :</span>
            <span className='pl-4'> restaurant principal à la fois club de plage et restaurant, Beach Rouge évolue et se métamorphose tout au long de la journée, avec une cuisine méditerranéenne. Ouvert pour le petit-déjeuner, le déjeuner et le dîner </span>
          </p>
          <p className='pt-4'>
            <span className='font-bold text-[#3E332E]' >Bisou :</span>
            <span className='pl-4'>situé sur le rooftop avec piscine à débordement, proposant une cuisine aux influences Indiennes et Arabes. Ouvert pour le petit-déjeuner, le déjeuner et le dîner. Réservé aux adultes</span>
          </p>
          <p className='pt-4'>
            <span className='font-bold text-[#3E332E]' >Ai Kisu :</span>
            <span className='pl-4'> restaurant gastronomique aux saveurs asiatiques. Ouvert pour le dîner </span>
          </p>
          <p className='pt-4 flex items-center'>
          Pour se détendre et se rafraîchir, rendez-vous à la Maison LUX* (café et bar), chez Ici (le glacier artisanal) ou encore au lub Ai Kisu (boîte de nuit et salon privé).
          </p>
        </div>

        <div className='w-full sm:max-w-[540px] mx-auto  lg:w-[50%] my-auto'>
          <img
          className='object-cover w-full h-full'
            // src={imgF}
            src={img}
            alt='/'
          />
        </div>
      </div>
    </div>
   
  );
};

export default Restaurent;