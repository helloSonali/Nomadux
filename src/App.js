import React from 'react';



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter basename={'/'} >
    
    <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>

    </BrowserRouter>
    </React.Fragment>
  )
}

export default App