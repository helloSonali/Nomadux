'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import './Nav.css'
// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"
const Nav = styled.div`

  background: rgb(206,34,34);
  height: 60px;
  width: 60px;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  border-radius: 50%;
  padding-right: 12px;
  margin-left: 15px;
  @media only screen and (max-width: 767px){
    /* background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center; */
  background: rgb(206,34,34);
  height: 50px;
  width: 50px;
  display: flex;
  justify-content:flex-end;
  align-items: center;
  border-radius: 50%;
  padding-right: 12px;
  margin-left: 15px;
  margin-top: 10px;

}
`;

const NavIcon = styled(NavLink)`
  margin-left: 3rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media only screen and (max-width: 767px){
    margin-left: 2rem;
  font-size: 1.5rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

}
`;

const SidebarNav = styled.nav`
  background: white;
  width: 600px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '50' : '-100%')};
  transition: 350ms;
  z-index: 10;
  right: 0px;
  @media only screen and (max-width: 767px){
    /* background: #15171c; */
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;

}

`;

const SidebarWrap = styled.div`
  width: 100%;
`;




function Navbar() {
 
  
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <React.Fragment>
     {/* Main Header */}
     <header className="main-header">
     {/* Header Top */}
     <div className="header-top">
       <div className="auto-container">
         <div className="inner">
           <div className="top-left">
             <div className="text"><span>Your <b> partner </b>in Success!</span> <a href="#" target="_blank"> Agent Login </a> </div>
           </div>
           <div className="top-right">
             <ul className="contact-info">
               <li><i className="fa fa-clock-o" />Office Hrs: Today 9.00am to 5.00pm</li>                            <li><a href="tel:http://(516)%20570-9241"><i className="fa fa-phone" /> (516) 570-9241</a></li>                      </ul>
           </div>
         </div>
       </div>
     </div>
     {/* Header Upper */}
     <div className="header-upper navbar-box">
       <div className="auto-container">
         <div className="inner-container clearfix">
           {/*Logo*/}
           <div className="logo-box">
             <div className="logo"><a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a></div>
           </div>
           {/*Nav Box*/}

           <div className="nav-outer clearfix">
             {/*Mobile Navigation Toggler*/}
              {/*<div className="mobile-nav-toggler"><img src="images/icon-bar.png" alt="" /></div>
             <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <ImCross /> : <FaBars />}
            </button>
            */}
           
            
          
           
             {/* Main Menu */}
             <nav className="main-menu navbar-expand-md navbar-light">
               <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                 <ul  className="navigation clearfix">
                   <li id="menu-item-1516" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-1516 active"><NavLink title="Home" to="/" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Home</NavLink></li>
                   <li id="menu-item-1761" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1761 dropdown"><NavLink title="About Us" to=" " data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">About Us<i className="fa fa-angle-down" /></NavLink>
                     <ul role="menu" className="submenu">
                       <li id="menu-item-263" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"><NavLink title="Our Mission" to="/about/ourmission">Our Mission</NavLink></li>
                       <li id="menu-item-1782" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1782 dropdown"><NavLink title="Our Products" to="/about/ourproducts">Our Products</NavLink>
                         <ul role="menu" className="submenu">
                           <li id="menu-item-1785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1785"><NavLink title="Wholesaling Caller Solutions" to="/about/ourproducts/wholesalingCaller">Wholesaling Caller Solutions</NavLink></li>
                           <li id="menu-item-1784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1784"><NavLink title="Global Search and Selection" to="/about/ourproducts/globalsearchandselection">Global Search and Selection</NavLink></li>
                           <li id="menu-item-1783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1783"><NavLink title="Outsourcing" to="/about/ourproducts/outsourcing">Outsourcing</NavLink></li>
                           <li id="menu-item-2612" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2612"><NavLink title="Outbound cold calling" to="/about/ourproducts/OutboundColdCalling">Outbound cold calling</NavLink></li>
                           <li id="menu-item-2611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2611"><NavLink title="virtual administrative assistants" to="/about/ourproducts/virtualadministrativeassistants">virtual administrative assistants</NavLink></li>
                           <li id="menu-item-2610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2610"><NavLink title="acquisition and contract management" to="/about/ourproducts/acquisitionandcontractmanagement">acquisition and contract management</NavLink></li>
                         </ul>
                       </li>
                       <li id="menu-item-2261" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2261"><NavLink title="Nomadux & The Co-Founders" to="/about/nomaduxcofounder">Nomadux &amp; The Co-Founders</NavLink></li>
                     </ul>
                   </li>
                   <li id="menu-item-1829" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1829 dropdown"><NavLink title="Partners" to="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Partners<i className="fa fa-angle-down" /></NavLink>
                     <ul role="menu" className="submenu">
                       <li id="menu-item-1851" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"><NavLink title="Property Bookers" to="/partners/broker">Property Bookers</NavLink></li>
                     </ul>
                   </li>
                   <li id="menu-item-1830" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1830 dropdown"><a title="Resources" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Resources<i className="fa fa-angle-down" /></a>
                     <ul role="menu" className="submenu">
                       <li id="menu-item-1856" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1856"><NavLink title="Refer A Friend" to="/resources/refer-a-friend">Refer A Friend</NavLink></li>
                       <li id="menu-item-1850" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1850"><NavLink title="Job Board" to="/resources/job-board">Job Board</NavLink></li>
                       <li id="menu-item-1852" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852"><NavLink title="Agent Login" to="/resources/agent-login">Agent Login</NavLink></li>
                     </ul>
                   </li>
                   <li id="menu-item-852" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-852"><NavLink title="Contact Us" to="/contact" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Contact Us</NavLink></li>
                   <li id="menu-item-2512" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2512"><NavLink title="Make a Payment" target="_blank" to="https://request.plastiq.com/pay-nomadux-llc" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Make a Payment</NavLink></li>
                 </ul>
               </div>
             </nav>
             {/* Main Menu End*/}
             <div className="navbar-right-info1">
             <button type="button" className="theme-btn search-toggler"><i className="fa fa-search" /></button>   
                                       {/*Sidemenu Navigation Toggler*/}
               <IconContext.Provider value={{ color: '#fff' }}>
               <Nav>
                 <NavIcon to='#'>
                   <FaIcons.FaBars onClick={showSidebar} />
                 </NavIcon>
               </Nav>
               <SidebarNav sidebar={sidebar}>
                 <SidebarWrap>
                   <NavIcon to='#'>
                   <div className="logo1"><a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a></div>
                     <AiIcons.AiOutlineClose className='close-btn' onClick={showSidebar} />
                   <hr />
                   </NavIcon>
                  {/*here is map method */}
                  
                  {SidebarData.map((item, index) => {
                      return <SubMenu item={item} key={index} />;
                    })}
                 
                 </SidebarWrap>
               </SidebarNav>
             </IconContext.Provider>                  </div>
           
             <div className="navbar-right-info">
             <button type="button" className="theme-btn search-toggler"><i className="fa fa-search" /></button>   
                                       {/*Sidemenu Navigation Toggler*/}
               <IconContext.Provider value={{ color: '#fff' }}>
               <Nav>
                 <NavIcon to='#'>
                   <FaIcons.FaBars onClick={showSidebar} />
                 </NavIcon>
               </Nav>
               <SidebarNav sidebar={sidebar}>
                 <SidebarWrap>
                   <NavIcon to='#'>
                   <div className="logo1"><a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a></div>
                     <AiIcons.AiOutlineClose className='close-btn' onClick={showSidebar} />
                   <hr />
                   </NavIcon>
                  {/*here is map method */}
                  <div className="container">
                  <div className="row">
                  <div className="col-md-12">
                  <h3 className='side-text'>Your partner in Success!</h3>
                  </div>
                  <div className="col-md-12">
                  <p className='side-para'>
                  Nomadux has an extensive proven track record of providing the most qualified prospects to our clients in the Real Estate Investment Industry.
                  </p>
                  </div>
                  <div className="col-md-12">
                  <h3  className='side-text' >Contact Info</h3>
                  </div>
                
               <div className="col-md-12">
               
                <p className='side-para1'><span>   <HomeIcon className='side-icon' /></span>NOMADUX Office 901,   Torres Paseo Colón, Avenida Central, San José, Costa Rica</p>
                </div>
                
                <div className="col-md-12">
                <p className='side-para1'><span>  <LocalPhoneIcon className='side-icon'/> </span>(516) 570-9241</p>
                </div>
                
                  
               
                <div className="col-md-12">
                <p className='side-para1'><span>  <EmailIcon className='side-icon'/> </span>info@nomadux.com</p>
                </div>
                
                <div className="col-md-10">
                <p className='side-para1'><span>  <AccessTimeIcon  className='side-icon'/> </span>Office Hrs: Today 9.00am to 5.00pm</p>
                </div>
                  </div>
                  </div>

                 
                 </SidebarWrap>
               </SidebarNav>
             </IconContext.Provider>                  </div>
           </div>
         </div>
       </div>
     </div>
     {/*End Header Upper*/}
     {/* Sticky Header  */}
     {/* Sticky Header  */}
     <div className="sticky-header">
       <div className="header-upper">
         <div className="auto-container">
           <div className="inner-container clearfix">
             {/*Logo*/}
             <div className="logo-box">
               <div className="logo">
                 <a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a>                          </div>
             </div>
             {/*Nav Box*/}
             <div className="nav-outer clearfix">
               {/*Mobile Navigation Toggler*/}
               <div className="mobile-nav-toggler"><img src="/images/icon-bar.png" alt="Awesome Image" /></div>
               {/* Main Menu */}
               <nav className="main-menu navbar-expand-md navbar-light">
               </nav>
               {/* Main Menu End*/}
               <div className="navbar-right-info">
                 <button type="button" className="theme-btn search-toggler"><i className="fa fa-search" /></button>                                {/*Sidemenu Navigation Toggler*/}
                 <div className="sidemenu-nav-toggler"><img src="/images/icon-bar.png" alt="Awesome Image" /></div>                          </div>
             </div>
           </div>
         </div>
       </div>
     </div>
     {/* End Sticky Menu */}
     {/* Mobile Menu  */}
     <div className="mobile-menu">
       <div className="menu-backdrop" />
       <div className="close-btn"><i className="fa fa-times" /></div>
       <nav className="menu-box">
         <div className="nav-logo"><a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a></div>
         <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
         {/*Social Links*/}
         <div className="social-links">
           <ul className="clearfix">
             <li><a href="https://www.facebook.com/" style={{backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)'}}><span className="fab fa-facebook" /></a></li>
             <li><a href="https://www.linkedin.com/" style={{backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)'}}><span className="fab fa-linkedin" /></a></li>
             <li><a href="https://www.skype.com/" style={{backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)'}}><span className="fab fa-skype" /></a></li>
             <li><a href="https://www.twitter.com/" style={{backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)'}}><span className="fab fa-twitter" /></a></li>
           </ul>
         </div>
       </nav>
     </div>{/* End Mobile Menu */}
     <div className="nav-overlay">
       <div className="cursor" />
       <div className="cursor-follower" />
     </div>
   </header>
   {/* End Main Header */}
  
        <div>
          <div id="search-popup" className="search-popup">
            <div className="close-search theme-btn"><i className="fa fa-times" /></div>
            <div className="popup-inner">
              <div className="overlay-layer" />
              <div className="search-form">
                <form action="#" method="get">
                  <div className="form-group">
                    <fieldset>
                      <input type="search" className="form-control" name="s" defaultValue placeholder="Search here" required />
                      <input type="submit" defaultValue="Search Now!" className="theme-btn" />
                    </fieldset>
                  </div>
                </form>
              </div>
            </div>
          </div>			
          <div data-elementor-type="wp-page" data-elementor-id={1517} className="elementor elementor-1517">
            <section className="elementor-section elementor-top-section elementor-element elementor-element-41c25f1 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default" data-id="41c25f1" data-element_type="section" data-settings="{&quot;stretch_section&quot;:&quot;section-stretched&quot;}">
              <div className="elementor-container elementor-column-gap-no">
                <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e11a441" data-id="e11a441" data-element_type="column">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-e673fa9 elementor-widget elementor-widget-envolve_home_slider_v3" data-id="e673fa9" data-element_type="widget" data-widget_type="envolve_home_slider_v3.default">
                      <div className="elementor-widget-container">
                      </div></div></div></div></div></section></div></div>
     
    </React.Fragment>
  )
}

export default Navbar

// 