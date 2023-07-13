import Footer from '@/components/footer/Footer';
import Banner from '@/components/header/Banner';
// import Header from '@/components/header/Header';
// import Navbar from '@/components/header/Navbar';
import TopNav from '@/components/header/TopNav';
import Nav from '@/components/header/Nav';
import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
    <TopNav/>
    <Nav/> 
  <Banner/>
    <Component {...pageProps} />
    <Footer/>
    </React.Fragment>);
}
//   <Navbar/> <Nav/>