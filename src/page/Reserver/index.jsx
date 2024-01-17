import React from 'react'
import Hero from './Hero'
import ScrollToTop from '../../components/scrollToTop'
import Reservation from './Reservation'

function index() {
  return (
    <div >
      <ScrollToTop/>
      <Hero/>
      <Reservation/>   
    </div>
  )
}

export default index