import React from 'react'
import Contacter from './Contacter'
import ScrollToTop from '../../components/scrollToTop'

function index() {
  return (
    <div className=' z-50'>
      <ScrollToTop/>
      {/* <Navbar/> */}
      <div >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254236.51213213825!2d-4.144484104092473!3d5.348769976568187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1ea5311959121%3A0x3fe70ddce19221a6!2sAbidjan!5e0!3m2!1sen!2sci!4v1703362698378!5m2!1sen!2sci" className='w-full h-[400px] ' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <Contacter/>
    </div>
  )
}

export default index