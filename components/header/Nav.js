
import React from 'react';
import styled from 'styled-components';

import * as FaIcons from 'react-icons/fa';

import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


// import { FaBars } from "react-icons/fa"
// import { ImCross } from "react-icons/im"
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
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

const NavIcon = styled(Link)`
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
 
  
  // const [sidebar, setSidebar] = useState(false);

  // const showSidebar = () => setSidebar(!sidebar);
  const [sidebar, setSidebar] = useState(false);
  const [Mobile, setMobile] = useState(false);
  const router = useRouter();

  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <React.Fragment>
     {/* Main Header */}
     <header className="main-header">
      {/* Header Top */}
      
      {/* Header Upper */}
      <div className="header-upper navbar-box">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="logo-box">
              <div className="logo">
                <Link href="/" passHref legacyBehavior>
                  <a title="nomadux">
                    <Image
                      src="/images/nomadux-transparente1.png"
                      alt="logo"
                      width={80}
                      height={80}
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="nav-outer clearfix">
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation clearfix">
                    <li
                      id="menu-item-1516"
                      className={`menu-item menu-item-type-custom menu-item-object-custom ${
                        router.pathname === '/' ? 'current-menu-item current_page_item' : ''
                      } menu-item-1516 active`}>
                    
                      <Link href="/" passHref legacyBehavior>
                        <a
                          title="Home"
                          className="hvr-underline-from-left1"
                          data-scroll
                          data-options="easing:easeOutQuart"
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li
                      id="menu-item-1761"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1761 dropdown"
                    >
                      <Link href="/" passHref legacyBehavior>
                        <a
                          title="About Us"
                          className="hvr-underline-from-left1"
                          aria-expanded="false"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          About Us
                          <i className="fa fa-angle-down" />
                        </a>
                      </Link>
                      <ul role="menu" className="submenu">
                        <li
                          id="menu-item-263"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-263"
                        >
                          <Link  href="/about/ourmission">Our Mission</Link>
                        </li>
                        <li
                          id="menu-item-1782"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1782 dropdown"
                        >
                          <Link href="/about/ourproducts" title="Our Products">
                            Our Products
                          </Link>
                          <ul role="menu" className="submenu">
                            <li
                              id="menu-item-1785"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1785"
                            >
                              <Link href="/about/ourproducts/wholesalingCaller">
                                Wholesaling Caller Solutions
                              </Link>
                            </li>
                            <li
                              id="menu-item-1784"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1784"
                            >
                              <Link href="/about/ourproducts/globalsearchandselection">
                                Global Search and Selection
                              </Link>
                            </li>
                            <li
                              id="menu-item-1783"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1783"
                            >
                              <Link href="/about/ourproducts/outsourcing">Outsourcing</Link>
                            </li>
                            <li
                              id="menu-item-2612"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2612"
                            >
                              <Link href="/about/ourproducts/OutboundColdCalling">
                                Outbound cold calling
                              </Link>
                            </li>
                            <li
                              id="menu-item-2611"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2611"
                            >
                              <Link href="/about/ourproducts/virtualadministrativeassistants">
                                virtual administrative assistants
                              </Link>
                            </li>
                            <li
                              id="menu-item-2610"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2610"
                            >
                              <Link href="/about/ourproducts/acquisitionandcontractmanagement">
                                acquisition and contract management
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-2261"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2261"
                        >
                          <Link href="/about/nomaduxcofounder" title="Nomadux & The Co-Founders">
                            Nomadux &amp; The Co-Founders
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-1829"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1829 dropdown"
                    >
                      <Link href="/" passHref legacyBehavior>
                        <a
                          title="Partners"
                          className="hvr-underline-from-left1"
                          aria-expanded="false"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Partners
                          <i className="fa fa-angle-down" />
                        </a>
                      </Link>
                      <ul role="menu" className="submenu">
                        <li
                          id="menu-item-1851"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1851"
                        >
                          <Link href="/partners/broker">Property Bookers</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-1830"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1830 dropdown"
                    >
                      <Link href="/" passHref legacyBehavior>
                        <a
                          title="Resources"
                          className="hvr-underline-from-left1"
                          aria-expanded="false"
                          data-scroll
                          data-options="easing: easeOutQuart"
                        >
                          Resources
                          <i className="fa fa-angle-down" />
                        </a>
                      </Link>
                      <ul role="menu" className="submenu">
                        <li
                          id="menu-item-1856"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1856"
                        >
                          <Link href="/resources/refer-a-friend">Refer A Friend</Link>
                        </li>
                        <li
                          id="menu-item-1850"
                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1850"
                        >
                          <Link href="/resources/job-board">Job Board</Link>
                        </li>
                        <li
                          id="menu-item-1852"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1852"
                        >
                          <Link href="/resources/agent-login">Agent Login</Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      id="menu-item-852"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-852"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li
                      id="menu-item-2512"
                      className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2512"
                    >
                      <Link
                        href="https://request.plastiq.com/pay-nomadux-llc"
                        title="Make a Payment"
                        className="hvr-underline-from-left1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Make a Payment
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="navbar-right-info1">
                <button type="button" className="theme-btn search-toggler">
                  <i className="fa fa-search" />
                </button>
                <IconContext.Provider value={{ color: '#fff' }}>
                  <div>
                    <div className="mobile-nav-toggler">
                      <FaBars onClick={showSidebar} />
                    </div>
                    <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                      {Mobile ? <FaTimes /> : <FaBars />}
                    </button>
                  </div>
                </IconContext.Provider>
              </div>
              <div className="navbar-right-info">
                <button type="button" className="theme-btn search-toggler">
                  <i className="fa fa-search" />
                </button>
                <IconContext.Provider value={{ color: '#fff' }}>
                  <div>
                    <div className="mobile-nav-toggler">
                      <FaBars onClick={showSidebar} />
                    </div>
                    <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                      {Mobile ? <FaTimes /> : <FaBars />}
                    </button>
                  </div>
                </IconContext.Provider>
              </div>
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
                  <Link href="/" passHref>
                    <a title="nomadux">
                      <Image
                        src="/images/nomadux-transparente1.png"
                        alt="logo"
                        width={80}
                        height={80}
                      />
                    </a>
                  </Link>
                </div>
              </div>
              {/*Nav Box*/}
              <div className="nav-outer clearfix">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <Image src="/images/icon-bar.png" alt="" width={80} height={80} />
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light"></nav>
                {/* Main Menu End*/}
                <div className="navbar-right-info">
                  <button type="button" className="theme-btn search-toggler">
                    <i className="fa fa-search" />
                  </button>
                  {/*Sidemenu Navigation Toggler*/}
                  <IconContext.Provider value={{ color: '#fff' }}>
                    <div>
                      <div className="mobile-nav-toggler">
                        <FaBars onClick={showSidebar} />
                      </div>
                      <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <FaTimes /> : <FaBars />}
                      </button>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn">
          <i className="fa fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" title="nomadux">
              <Image src="/images/nomadux-transparente1.png" alt="logo" width={80} height={80} />
            </Link>
          </div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="https://www.facebook.com/" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)' }}>
                  <span className="fab fa-facebook" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)' }}>
                  <span className="fab fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://www.skype.com/" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)' }}>
                  <span className="fab fa-skype" />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/" style={{ backgroundColor: 'rgba(255, 255, 255, 0)', color: 'rgb(255, 255, 255)' }}>
                  <span className="fab fa-twitter" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div className="nav-overlay">
        <div className="cursor" />
        <div className="cursor-follower" />
      </div>
    </header>
     
    </React.Fragment>
  )
}

export default Navbar

