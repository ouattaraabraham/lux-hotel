import React from 'react';

const Offers = () => {
  return (
    <div className='text-[#815E46]'>
      {/* mobil */}
      <div className='sm:hidden text-center pt-4 text-2xl font-bold'>Bienvenue Au Lux Hotel  </div>
      {/* destop */}
      <div className='hidden max-w-[900px] m-auto px-4 py-12 sm:flex flex-wrap justify-between'>
      {/* <p className='text-lg font-bold text-gray-700'>Booking Incentives</p> */}
      <p className='text-lg font-bold '>Des Tarifs Compétitifs</p>
      <p className='text-lg font-bold '>Réservez Avec Flexibilité</p>
      <p className='text-lg font-bold'>Sejour Inoubliable</p>
    </div>
    </div>
  
  );
};

export default Offers;
