import React from 'react'
import Navbar from '../header/Navbar'

function JobBoard() {
  return (
    <React.Fragment>
 <Navbar/>
    <section className="page-title" style={{backgroundImage: 'url("")'}}>
    <div className="auto-container">
      <div className="content-box">
        <div className="content-wrapper">
          <div className="title">
            <h1>Job Board</h1>
          </div>
          <ul className="bread-crumb clearfix">
            <li className="breadcrumb-item"><a href="https://nomadux.com/">Home &nbsp;</a></li><li className="breadcrumb-item">Job Board</li>                  </ul>
        </div>                    
      </div>
    </div>
  </section>
    </React.Fragment>
  
  )
}

export default JobBoard