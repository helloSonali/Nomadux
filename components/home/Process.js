import React from 'react'
import Image from 'next/Image'
function Process() {
  return (
    <React.Fragment>
    <div>
    <section className="process-section">
      <div className="pattern" style={{backgroundImage: 'url(/images/pattern-5.png)'}} />
      <div className="auto-container">
        <div className="sec-top row m-0 justify-content-md-between">
          <div className="sec-title">
            <h2>Our Basic Work Process</h2>
            <div className="text-decoration">
              <span className="left" />
              <span className="right" />
            </div>
          </div>
          <div className="text">We provide convenient and high quality legal advice on labor, tax, and <br />corporate regulations to the client and their outsourced contractors.</div>
        </div>
        <div className="row">
          <div className="col-lg-4 process-block-one">
            <div className="inner-box">
              <div className="icon">
                <Image width={80} height={80} src="/images/Untitled-1.png" />
                {/* <i class="fa fa-group"></i> */}
              </div>
              <h5><span className="count">Step : 01.</span></h5>
              <h4>Plan for work</h4>
              <div className="text">Through plans, you break down a process into small and identify the things you accomplish..</div>
            </div>
          </div>
          <div className="col-lg-4 process-block-one">
            <div className="inner-box">
              <div className="icon">
                <Image  width={80} height={80} src="/images/Untitled-2.png" />
                {/* <i class="fa fa-business-and-finance"></i> */}
              </div>
              <h5><span className="count">Step : 02.</span></h5>
              <h4>Implementation</h4>
              <div className="text">To carry out put into action performto implement a plan. archaic to complete, satisfy , fulfil..</div>
            </div>
          </div>
          <div className="col-lg-4 process-block-one">
            <div className="inner-box">
              <div className="icon">
                <Image width={80} height={80} src="/images/Untitled-3.png" />
                {/* <i class="fa fa-gear"></i> */}
              </div>
              <h5><span className="count">Step : 03.</span></h5>
              <h4>Project Closure</h4>
              <div className="text">It involves handing over to customer, passing the documentation to the business contracts.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="elementor-element elementor-element-d6251a7 elementor-widget elementor-widget-envolve_reason_for_choosing" data-id="d6251a7" data-element_type="widget" id="totals" data-widget_type="envolve_reason_for_choosing.default">
      <div className="elementor-widget-container">
      </div></div></div>
    </React.Fragment>
  )
}

export default Process