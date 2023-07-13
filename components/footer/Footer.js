
import React from 'react'
// import { Link } from 'react-router-dom'
import Link from 'next/link'
import Image from 'next/Image'
function Footer() {
  return (
    <React.Fragment>
      {/* Main Footer */}
      <footer className="main-footer sp-two">
        <div className="auto-container">
          {/*Widgets Section*/}
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 footer-column"><div id="envolve_about_company-1" className="footer-widget widget_envolve_about_company">      		
                  {/*Footer Column*/}
                  <div className="logo-widget">
                    <div className="widget-content">
                      <div className="footer-logo">
                        <Link href="/"><Image width={80} height={80} className="lazy-image" src="https://i.imgur.com/MhLmYPz.png" data-src="https://i.imgur.com/MhLmYPz.png" alt="Awesome Image" /></Link>
                      </div>
                      <h3>What will <br />be the next step? </h3>
                      <div className="link-btn"><Link href="/" className="theme-btn"><i className="fa fa-arrow-right" />Experts advice</Link></div>
                    </div>
                  </div>
                </div></div><div className="col-lg-3 col-md-6 col-sm-12 footer-column"><div id="nav_menu-1" className="footer-widget widget_nav_menu"><h3 className="widget-title">Quick Links</h3><div className="menu-footer-container"><ul id="menu-footer" className="menu"><li id="menu-item-2087" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2087"><Link href="/partners/broker">Property Bookers</Link></li>
                      <li id="menu-item-2088" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2088"><Link href="/about/ourproducts/outsourcing">Outsourcing</Link></li>
                      <li id="menu-item-2089" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2089"><Link href="/about/ourproducts/globalsearchandselection">Global Search and Selection</Link></li>
                      <li id="menu-item-2090" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2090"><Link href="/about/ourproducts/wholesalingcaller">Wholesaling Caller Solutions</Link></li>
                      <li id="menu-item-3141" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-3141"><a href="/blog">Blogs</a></li>
                    </ul></div></div></div><div className="col-lg-3 col-md-6 col-sm-12 footer-column"><div id="envolve_contact_details-3" className="footer-widget widget_envolve_contact_details">      		
                  {/*Footer Column*/}
                  <div className="contact-widget">
                    <h3 className="widget-title">Contact Details</h3>                <div className="widget-content">
                      <div className="text">Nomad Capital Corporation<br />
                        Cédula Jurídica [RUC]: 2401815-1-804937<br />
                        Edificio Credicorp Bank, Apt. #26<br />
                        Calle 50 - Bella Vista,Panama<br /><ul className="list1">
                          <li>Call Us :  <Link href="/"> (516) 570-9241</Link></li>
                          <li>Call Us : <Link href="/"> 904 414 4625</Link></li>
                        </ul></div>
                      <ul className="list">
                        <li>Call Us :  <Link href="tel:" /></li>
                        <li>Mail us :  <Link href="mailto:http://info@nomadux.com">info@nomadux.com</Link></li>
                      </ul>
                      <ul className="social-links clearfix">
                      </ul>
                    </div> 
                  </div>
                </div></div>              </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="auto-container">
          <div className="footer-bottom">
            <div className="row m-0 justify-content-between">
              <ul className="menu">
             
                <li><Link href="/privacy-policy">Privacy Policy </Link></li>
                <li><Link href="/term">Terms &amp; Conditions</Link></li>                  </ul>
              {/*Scroll to top Two*/}
              <div className="scroll-to-top-two scroll-to-target" data-target="html"><i className="fa fa-reply" />Get back to home</div>
            </div>
            <ul className="social-links clearfix">
              <li><Link href="https://www.facebook.com/NomadUX-381937795334591/" style={{backgroundColor: 'rgba(240, 31, 31, 0.09)', color: 'rgb(255, 255, 255)'}}><i className="fa fa-facebook" /></Link></li>
              <li><Link href="https://cr.linkedin.com/company/nomadux/" style={{backgroundColor: 'rgba(255,+255,+255,+0.2)', color: 'rgb(255,+255,+255)'}}><i className="fa fa-linkedin" /></Link></li>
              <li><Link href="https://twitter.com/davidyoungblack" style={{backgroundColor: 'rgba(167, 82, 82, 0.04)', color: 'rgb(255,+255,+255)'}}><i className="fa fa-twitter" /></Link></li>
            </ul>
            <div className="copyright">© 2023 <Link href="/">Nomadux</Link>  All Rights Reserved.  <span style={{float: 'right'}}>Developed by &nbsp;<a href="/" style={{float: 'right', color: '#808080'}} target="_blank">Digitalvate</a></span></div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer