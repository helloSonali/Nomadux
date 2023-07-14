import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Advertise from '@/components/home/Advertise'
import Feature1 from '@/components/home/Feature1'
import SuccessStory from '@/components/home/SuccessStory'
import Funfact from '@/components/home/Funfact'
import Process from '@/components/home/Process'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonial from '@/components/home/Testimonial'
import News from '@/components/home/News'
import Map from '@/components/home/Map'
import Banner from '@/components/header/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    
    <React.Fragment>
    <Banner/>
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
