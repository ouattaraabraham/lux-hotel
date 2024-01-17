import React from 'react';
import { TbCircle } from "react-icons/tb";
import bgBlue from '../../assets/bg-blue1.jpg'
// import imgR1 from '../../assets/imgR1.avif'
// import imgR2 from '../../assets/imgR2.avif'
// import imgR3 from '../../assets/imgR3.avif'
import img1 from '../../assets/slide-4.jpg'
import img2 from '../../assets/slide-1.jpg'
import img3 from '../../assets/slide-5.jpg'


const Rooms = () => {
  const bgImg=`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${bgBlue})`

  return (
    <div className='text-white max-w-[1400px] h-[500px] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'  style={{backgroundImage: bgImg}}>
      <div className='sm:px-10 md:px-14  lg:top-20 relative lg:col-span-1 col-span-2'>
        <div className='text-start flex flex-col items-center'>
         <div>
        <h3 className=' pb-4 text-3xl  font-bold text-center'>Hébergements
       </h3>

        <p className='pt-4 flex items-center'>
        <TbCircle size={18}/>
           <span className='pl-4'>86 Suites Junior LUX* de 65m2 </span>
        </p>

        <p className='pt-4 flex'>
        <TbCircle size={18}/>
           <span className='pl-4'>20 Résidences LUX* avec piscine de 180m2</span>
        </p>
        <p className='pt-4 flex'>
        <TbCircle size={18}/>
           <span className='pl-4'>2 Penthouses LUX* avec piscine de 325m2</span>
        </p>
        <p className='pt-4 flex'>
        <TbCircle size={18}/>
           <span className='pl-4'>7 Villas LUX* avec piscine de 240m2</span>
        </p>
        <p className='pt-4 flex'>
        <TbCircle size={18}/>
           <span className='pl-4'>1 LUX* Grand Beach Villa avec piscine de 600m2</span>
        </p>
        </div>
        </div>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
        src={img1}
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
        src={img2}
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
        src={img3}
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;
