import React from 'react'
import Header from '../header/Header'
import Feature from './Feature'
import SuccessStory from './SuccessStory'
import Funfact from './Funfact'
import Process from './Process'
import WhyChooseUs from './WhyChooseUs'
import Footer from '../footer/Footer'
import Advertise from './Advertise'
import Feature1 from './Feature1'
import Map from './Map'
import Testimonial from './Testimonial'
import News from './News'

function Home() {
  return (
    <React.Fragment>
    <Header/>
    <Advertise/>
<Feature1/>
    <SuccessStory/>
    <Funfact/>
     <Process/>
     <WhyChooseUs/>
     <Testimonial/>
    <News/>
    <Map/>
      
    </React.Fragment>
  )
}

export default Home;
//     <Feature/>
//    <SuccessStory/>
// <Funfact/>
//   <Process/>
//   <WhyChooseUs/>
//   <Footer/>
