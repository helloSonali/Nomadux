import React from 'react'
import Header from '../header/Header'
import Feature from './Feature'
import SuccessStory from './SuccessStory'
import Funfact from './Funfact'
import Process from './Process'
import WhyChooseUs from './WhyChooseUs'
import Footer from '../footer/Footer'

function Home() {
  return (
    <React.Fragment>
    <Header/>
  
      <SuccessStory/>
       <Funfact/>
         <Process/>
         <WhyChooseUs/>
         <Footer/>
    </React.Fragment>
    
  )
}

export default Home
// <Feature/>
//     <SuccessStory/>
//     <Funfact/>
//     <Process/>
//     <WhyChooseUs/>
//     <Footer/>