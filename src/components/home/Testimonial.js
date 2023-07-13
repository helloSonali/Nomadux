import React from 'react'
import './test.css'
function Testimonial() {
  return (
    <React.Fragment>
    <div className="testimonial">
    <div className="container ">
    <div className="row">
    <div className="col-md-12 test-heading">
    <h2>Client Testimonials</h2>
    </div>
    
    </div>
    <div className="row">
    <div className="col-md-12 test-para">
    <p>
    

“ Please watch the videos below to see more satisfied Nomadux clients. See what they have to say about our service and how much value we have added to their business”
    </p>
    </div>
    </div>
    <div className="row">
    <div className="col-md-4 test-video">
    {/*<video class="elementor-video" src="/images/video1.mp4" controls="" controlsList="nodownload" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project-1.png"></video>*/}
    <video controls muted autoplay width="300" height="300"  className="t-vid">
        <source src="images/video1.mp4" type="video/mp4" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project.png"/>
     </video>
     {/* <video class="elementor-video" src="https://nomadux.com/wp-content/uploads/2021/12/Aaron_Keener-_Urban_Dwell_Homes_AdobeCreativeCloudExpress.mp4" controls="" controlslist="nodownload" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project.png"></video>*/}
   
    <div className="test-caption">
    <h5>AARON KEENER</h5>
    
    <p>- Urban Dwell Homes</p>
    </div>
    </div>
    <div className="col-md-4  test-video">
    <video controls muted autoplay width="300" height="300" className="t-vid">
        <source src="/images/video2.mp4" type="video/mp4" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project.png"/>
     </video>
    {/*<video class="elementor-video" src="/images/video2.mp4" controls="" controlsList="nodownload" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project.png"></video>*/}
    <div className="test-caption">
    <h5>AARON KEENER</h5>
   
    <p>- Urban Dwell Homes</p>
    </div>
    </div>
    <div className="col-md-4  test-video">
    <video controls muted autoplay width="300" height="300" className="t-vid">
        <source src="/images/video4.mp4" type="video/mp4" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project.png"/>
     </video>
      {/*<video class="elementor-video" src="/images/video4.mp4" controls="" controlslist="nodownload" poster="https://nomadux.com/wp-content/uploads/2021/12/New-Project-2.png"></video>*/}
    
    <div className="test-caption">
    <h5>AARON KEENER</h5>
   
    <p>- Urban Dwell Homes</p>
    </div>
    </div>
    </div>
    </div>
    </div>
   
    </React.Fragment>
  )
}

export default Testimonial