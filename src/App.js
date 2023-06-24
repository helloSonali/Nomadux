import React from 'react';

import About from './components/about/About'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter basename={'/'} >
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>

    </BrowserRouter>
    </React.Fragment>
  )
}

export default App