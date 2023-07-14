import React from 'react'

function TopNav() {
  return (
    <React.Fragment>
    <div className="header-top">
    <div className="auto-container">
      <div className="inner">
        <div className="top-left">
        <div className="text"><span>Your <b> partner </b>in Success!</span> <a href="#" target="_blank"> Agent Login </a> </div>
        
           
        </div>
        <div className="top-right">
          <ul className="contact-info">
            <li>Office Hrs: Today 9.00am to 5.00pm</li>                            <li><a href="tel:http://(516)%20570-9241"> (516) 570-9241</a></li>                      </ul>
        </div>
      </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default TopNav
// <i className="fa fa-clock-o" />
// <i className="fa fa-phone" />
// <p className="para-btn mx-2  text-center">Your Patner in Success!<NavLink className="banner-btn bg-btn" to="/freetrail" data-text=""><span> Agent login</span></NavLink></p>