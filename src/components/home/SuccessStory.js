import React from 'react'

function SuccessStory() {
  return (
    <React.Fragment>
    <section className="features-section-two">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-6 pr-5">
          <div className="sec-title style-two">
            <h4><i className="fa fa-infinity" />success story</h4>
            <h2>DO WHAT YOU DO BEST <br />AND OUTSOURCE THE REST</h2>
          </div>
          <div className="content-block">
            <div className="image"><img src="/images/award.png" alt="Awesome Image" /></div>
            <div className="text">
              <p><span style={{color: 'red'}}>Nomad</span>ux has an extensive proven track record of providing the most qualified prospects to our clients in the Real Estate Investment Industry</p>
              <p>Nomadux has significant experience in providing high quality marketing solutions to the Real Estate Investment industry in the United States of America, which is particularly focused on providing high quality leads and highly motivated prospects for our clients.</p>
            </div>
            <div className="link-btn"><a href="#" className="theme-btn btn-style-four"><span className="btn-title">Read More</span></a></div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="row">
            <div className="feature-block-three col-md-6">
              <div className="inner-box">
                <div className="image"><img src="/images/featured-image-1.jpg" alt="Awesome Image" /></div>
                <div className="lower-content">
                  <div className="icon"><img src="/images/Untitled-111.png" /></div>
                  <h4>#1  Outsource Service Provider in  America</h4>
                  <a href="#" className="read-more-link" />
                </div>
                <div className="overlay">
                  <div className="top-content" style={{backgroundImage: 'url(/images/image-50.jpg)'}}>
                    <div className="icon">
                      <img src="/images/Untitled-111.png" />
                      {/* <span class="icon flaticon-support"></span> */}</div>
                    <h4>#1  Outsource Service Provider in  America</h4>
                  </div>
                  <div className="bottom-content">
                    <div className="text">
                      Our Mission is to partner with our clients and work together to increase the effectiveness and profitability of their businesses, and become partners in success. </div>
                    <a href="#" className="read-more-link" />
                  </div>
                </div>
              </div>
            </div>
            <div className="feature-block-three col-md-6">
              <div className="inner-box">
                <div className="image"><img src="/images/featured-image-2.jpg" alt="Awesome Image" /></div>
                <div className="lower-content">
                  <div className="icon">
                    <img src="/images/Untitled-222.png" />
                    {/* <span class="icon flaticon-career-3"></span> */}</div>
                  <h4>More than 5,000 <br />happy clients</h4>
                  <a href="#" className="read-more-link" />
                </div>
                <div className="overlay">
                  <div className="top-content" style={{backgroundImage: 'url(/images/image-50.jpg)'}}>
                    <div className="icon"><img src="/images/Untitled-222.png" /></div>
                    <h4>More than 5,000 <br />happy clients</h4>
                  </div>
                  <div className="bottom-content">
                    <div className="text">Our practical solutions are tailored to each client and are designed to reduce labor costs, while improving the profitability of your business. </div>
                    <a href="#" className="read-more-link" />
                  </div>
                </div>
              </div>
            </div>
          </div>                        
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}

export default SuccessStory