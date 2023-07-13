import React from 'react'
import Image from 'next/Image'
function Feature1() {
  return (
    <React.Fragment>
   
    <div className='product-sec'>
    <section className="features-section ">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2>OUR PRODUCTS</h2>
          <div className="text-decoration">
            <span className="left" />
            <span className="right" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image">
                <div className="icon">
                  {/* <Image src="/images/Untitled-1111.png" alt="img"/> */}
                   <span class=" flaticon-customer-service"></span> 
                   </div>
                <Image width={80} height={80} className="lazy-image owl-lazy" src="/images/caller1.jpg" data-src="/images/caller1.jpg" alt="Awesome Image" />
              </div>
              <div className="content">
                <h5>Our Services</h5>
                <h4>Wholesaling Caller Solutions</h4>
              </div>
              <div className="overlay">
              <div className="content">
              <h5>Our Services</h5>
              <h4>Wholesaling Caller Solutions</h4>
            </div>
                <div className="text" style={{backgroundImage: 'url(../images/caller1.jpg)'}} >
                  <p>We provide nearshore marketing solutions for our client’s businesses including outbound and inbound cold calling ...</p>
                  <div className="link-btn"><a href="#"><i className="fa fa-angle-right" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image">
                <div className="icon">
                  {/* <Image src="images/Untitled-2222.png" /> */}
                   <span class=" flaticon-question"></span>
                  </div>
                <Image width={80} height={80} className="lazy-image owl-lazy" src="/images/recu.jpg" data-src="/images/recu.jpg" alt="Awesome Image" />
              </div>
              <div className="content">
              <h5>Our Services</h5>
              <h4>Global Search and Selection</h4>
              </div>
              <div className="overlay">
                <div className="content">
                  <h5>Our Services</h5>
                  <h4>Global Search and Selection</h4>
                </div>
                <div className="text" style={{backgroundImage: 'url(/images/recu.jpg)'}}>
                  <p>Our vision and key objective is to be the leading ‘Recruitment, Search and Selection Provider’ ...</p>
                  <div className="link-btn"><a href="#"><i className="fa fa-angle-right" /></a></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 feature-block-one wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
            <div className="inner-box">
              <div className="image">
                <div className="icon">
                  {/* <Image src="images/Untitled-3333.png" /> */}
                   <span class=" flaticon-career"></span> </div>
                <Image width={80} height={80} className="lazy-image owl-lazy" src="/images/outsourcing.jpg" data-src="images/outsourcing.jpg" alt="Awesome Image" />
              </div>
              <div className="content">
                <h5>Our Services</h5>
                <h4>Outsourcing</h4>
              </div>
              <div className="overlay">
                <div className="content">
                  <h5>Our Services</h5>
                  <h4>Outsourcing</h4>
                </div>
                <div className="text" style={{backgroundImage: 'url(../images/outsourcing.jpg)'}}>
                  <p>The key function of the Nomadux organization is to provide various outsourced business services ( ...</p>
                  <div className="link-btn"><a href="#"><i className="fa fa-angle-right" /></a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-content text-center">
          <div className="f-text">We help take your small business to the next level. Don’t hesitate to contact us.</div>
          <h3>30 Minutes Free Consultation</h3>
          <div className="link-btn"><a href="#" className="theme-btn btn-style-two"><span className="btn-title">Send request</span></a></div>
        </div>
      </div>

    </section>
    
  </div>
         
    
    </React.Fragment>
  )
}

export default Feature1
// <section className="elementor-section elementor-top-section elementor-element elementor-element-e7d3c5b elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e7d3c5b" data-element_type="section">
//       <div className="elementor-container elementor-column-gap-default">
//         <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5e9eccb" data-id="5e9eccb" data-element_type="column">
//           <div className="elementor-widget-wrap elementor-element-populated">
//             <div className="elementor-element elementor-element-60a459b elementor-widget elementor-widget-envolve_developing_leaders" data-id="60a459b" data-element_type="widget" data-widget_type="envolve_developing_leaders.default">
//               <div className="elementor-widget-container">
//                 {/* Features Section Two */}
                
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>