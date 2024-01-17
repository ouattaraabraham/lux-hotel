import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-[#3E332E] text-gray-300 py-2 px-2 md:px-5'>
      <div className='max-w-[540px] md:max-w-[7200px] lg:max-w-[1400px] text-center lg:text-start mx-auto lg:grid lg:grid-cols-2  border-b-2 border-gray-300  py-8 px-4'>
        <div className='lg:max-w-[470px] xl:max-w-[575px]'>
          <div>
            <h1 className='pb-4 font-bold'>Contactez-nous</h1>
            <p className='pb-4'>F Zeen Retreat, Hotel Lux Road, Abidjan, Livathos, 28083, Greece. Obtenir l’itinéraire</p>
            <p className='pb-4'>T: <Link href='/'>05 44 34 44 10</Link>, M: <a href='/'>05 44 34 44 10</a></p>
            <p className='pb-4'><Link href='/'>hotellux@gmail.com</Link></p>
          </div>
          <div className='cursor-pointer flex justify-center lg:justify-start pt-4 text-2xl'>
            <FaFacebook className='mr-4' />
            <FaInstagram className='mr-4'/>
            <FaTwitter className='mr-4'/>
            <TiSocialPinterest size={30} className='mr-4'/>
          </div>
        </div>
        <div className=' py-8 md:pt-2'>
          <p className='font-bold uppercase'>ABONNEZ-VOUS À NOS NEWSLETTERS</p>
          <p className='py-4'>
          Les dernières offres, articles et ressources envoyés dans votre boîte de réception chaque semaine.          </p>
          <form className='flex flex-col sm:flex-row mx-auto lg:mx-0 max-w-[235px] md:max-w-[340px]'>
            <input className='w-full p-2 mr-4 rounded-md mb-4 text-[#3E332E]' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>S’inscrire</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col md:flex-row justify-between  max-w-[540px]  md:max-w-[1400px]  px-2 py-4 mx-auto  text-center text-gray-300 '>
        <p className='py-4'>2024 Experiences, LLC. Tous droits réservés</p>
        <p><a target='blank' href='https://ouattaraabraham.github.io/portfolio-ab'>Créer par  Ouattaraabraham</a></p>
      </div>
    </div>
  );
};

export default Footer;
