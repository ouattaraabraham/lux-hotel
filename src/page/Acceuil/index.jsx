import React from 'react'
import Hero from './Hero'
import Offers from './Offers'
import Plan from './Plan'
import Rooms from './Rooms'
import Restauration from './Restauration'
import Experiance from './Esperience'
import ImageSlider from './ImageSlider'
import ScrollToTop from '../../components/scrollToTop'

function index() {
  return (
  <div>
    <Hero />
    <ScrollToTop/>
    <Offers />
    <Plan />
    <Rooms />
    <Restauration/>
    <Experiance/>
    <ImageSlider />
</div>
  )
}

export default index