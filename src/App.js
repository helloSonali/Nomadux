import React from 'react';

import About from './components/about/About'

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import OurMission from './components/about/OurMission';
import OurProducts from './components/about/OurProducts';
import WholesalingCallerSolutions from './components/about/WholesalingCallerSolutions'
import NomaduxTheCoFounders from './components/about/NomaduxTheCoFounders'
import PropertyBookers from './components/patners/PropertyBookers';
import ReferAFriend from './components/resources/ReferAFriend';
import JobBoard from './components/resources/JobBoard';
import AgentLogin from './components/resources/AgentLogin';
import Payments from './components/payments/Payments';
import GlobalSearchAndSelection from './components/about/GlobalSearchAndSelection';
import Outsourcing from './components/about/Outsourcing';
import OutboundColdCalling from './components/about/OutboundColdCalling';
import VirtualAdministrativeAssistants from './components/about/VirtualAdministrativeAssistants';
import AcquisitionAndContractManagement from './components/about/AcquisitionAndContractManagement';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Privacy from './components/extra/Privacy';
import Term from './components/extra/Term';

function App() {
  return (
    <React.Fragment>
    <BrowserRouter basename={'/'} >
    
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/about/ourmission' element={<OurMission/>}/>
    <Route path='/about/ourproducts' element={<OurProducts/>}/>
    <Route path='/about/ourproducts/wholesalingcaller' element={<WholesalingCallerSolutions/>}/>
    
    <Route path='/about/ourproducts/globalsearchandselection' element={< GlobalSearchAndSelection/>}/>
    <Route path='/about/ourproducts/outsourcing' element={<Outsourcing/>}/>
    <Route path='/about/ourproducts/OutboundColdCalling' element={<OutboundColdCalling/>}/>
    <Route path='/about/ourproducts/virtualadministrativeassistants' element={<VirtualAdministrativeAssistants/>}/>
    <Route path='/about/ourproducts/acquisitionandcontractmanagement' element={<AcquisitionAndContractManagement/>}/>
    <Route path='/about/nomaduxcofounder' element={<NomaduxTheCoFounders/>}/>
    <Route path='/partners/broker' element={<PropertyBookers/>}/>
    <Route path='/resources/refer-a-friend' element={<ReferAFriend/>}/>
    <Route path='/resources/job-board' element={<JobBoard/>}/>
    <Route path='/resources/agent-login' element={<AgentLogin/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/makeapayment' element={<Payments/>}/>
    <Route path='/privacy-policy' element={<Privacy/>}/>
    <Route path='/term' element={<Term/>}/>
    
    
   </Routes>
<Footer/>
    </BrowserRouter>
    </React.Fragment>
  )
}

export default App