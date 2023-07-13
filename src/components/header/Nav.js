// import React from 'react'
import { NavLink } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import React, { useState, useEffect } from "react"

function Nav() {
  const [Mobile, setMobile] = useState(false)
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
     <div className="header-upper">
     <div className="auto-container">
       <div className="inner-container clearfix">
         {/*Logo*/}
         <div className="logo-box">
           <div className="logo"><a href="#" title="nomadux"><img src="/images/nomadux-transparente1.png" alt="logo" /></a></div>
         </div>
         {/*Nav Box*/}
         <div className="nav-outer clearfix">
           {/*Mobile Navigation Toggler*/}
           <div className="mobile-nav-toggler"><img src="/images/icon-bar.png" alt="" /></div>
           {/* Main Menu */}
           <nav className="main-menu navbar-expand-md navbar-light">
             <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
               <ul className="navigation clearfix">
                 <li id="menu-item-1516" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-1516 active"><NavLink title="Home" to="/" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Home</NavLink></li>
                 <li id="menu-item-1761" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1761 dropdown"><NavLink title="About Us" href="/about" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">About Us<i className="fa fa-angle-down" /></NavLink>
                   <ul role="menu" className="submenu">
                     <li id="menu-item-263" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"><NavLink title="Our Mission" to="/about">Our Mission</NavLink></li>
                     <li id="menu-item-1782" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1782 dropdown"><a title="Our Products" href="https://nomadux.com/our-products/">Our Products</a>
                       <ul role="menu" className="submenu">
                         <li id="menu-item-1785" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1785"><a title="Wholesaling Caller Solutions" href="#">Wholesaling Caller Solutions</a></li>
                         <li id="menu-item-1784" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1784"><a title="Global Search and Selection" href="#">Global Search and Selection</a></li>
                         <li id="menu-item-1783" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1783"><a title="Outsourcing" href="#">Outsourcing</a></li>
                         <li id="menu-item-2612" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2612"><a title="Outbound cold calling" href="#">Outbound cold calling</a></li>
                         <li id="menu-item-2611" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2611"><a title="virtual administrative assistants" href="#">virtual administrative assistants</a></li>
                         <li id="menu-item-2610" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2610"><a title="acquisition and contract management" href="#">acquisition and contract management</a></li>
                       </ul>
                     </li>
                     <li id="menu-item-2261" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2261"><a title="Nomadux & The Co-Founders" href="#">Nomadux &amp; The Co-Founders</a></li>
                   </ul>
                 </li>
                 <li id="menu-item-1829" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1829 dropdown"><a title="Partners" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Partners<i className="fa fa-angle-down" /></a>
                   <ul role="menu" className="submenu">
                     <li id="menu-item-1851" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"><a title="Property Bookers" href="https://nomadux.com/property-bookers/">Property Bookers</a></li>
                   </ul>
                 </li>
                 <li id="menu-item-1830" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1830 dropdown"><a title="Resources" href="#" data-toggle="dropdown1" className="hvr-underline-from-left1" aria-expanded="false" data-scroll data-options="easing: easeOutQuart">Resources<i className="fa fa-angle-down" /></a>
                   <ul role="menu" className="submenu">
                     <li id="menu-item-1856" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1856"><a title="Refer A Friend" href="#">Refer A Friend</a></li>
                     <li id="menu-item-1850" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1850"><a title="Job Board" href="#">Job Board</a></li>
                     <li id="menu-item-1852" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852"><a title="Agent Login" href="#">Agent Login</a></li>
                   </ul>
                 </li>
                 <li id="menu-item-852" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-852"><NavLink title="Contact Us" to="/contact" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Contact Us</NavLink></li>
                 <li id="menu-item-2512" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2512"><a title="Make a Payment" target="_blank" href="#" className="hvr-underline-from-left1" data-scroll data-options="easing: easeOutQuart">Make a Payment</a></li>
               </ul>
             </div>
           </nav>
           {/* Main Menu End*/}
           <div className="navbar-right-info">
           <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
           {Mobile ? <ImCross /> : <FaBars />}
         </button>                          {/*Sidemenu Navigation Toggler*/}
                                  </div>
         </div>
       </div>
     </div>
     </div>
    
   </header>
  
  
      
     
    </React.Fragment>
  )
}

export default Nav
