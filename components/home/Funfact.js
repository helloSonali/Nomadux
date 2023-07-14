import React from 'react'
import Image from 'next/image'
function Funfact() {
  return (
    <React.Fragment>
    <div>
  <section className="elementor-section elementor-top-section elementor-element elementor-element-3e2445c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="3e2445c" data-element_type="section">
    <div className="elementor-container elementor-column-gap-no ">
      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-53beb1a" data-id="53beb1a" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <section className="funfact-c elementor-section elementor-inner-section elementor-element elementor-element-7013d23 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7013d23" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-container elementor-column-gap-no auto-container">
              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e2262f8" data-id="e2262f8" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-cedd4bd elementor-widget elementor-widget-text-editor" data-id="cedd4bd" data-element_type="widget" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container funfact-text ">
                      We help take your small business to the next level.<br /> Don’t hesitate to contact us.						</div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c2729aa" data-id="c2729aa" data-element_type="column">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-2bd4686 elementor-align-justify elementor-widget elementor-widget-button" data-id="2bd4686" data-element_type="widget" data-widget_type="button.default">
                    <div className="elementor-widget-container">
                      <div className="elementor-button-wrapper">
                        <a href="tel:(506)%202203-5951" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                          <span className="elementor-button-content-wrapper">
                            <span className="elementor-button-text fun-btn">Give Us A Call</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
  <section className="elementor-section elementor-top-section elementor-element elementor-element-64cb19a elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="64cb19a" data-element_type="section">
    <div className="elementor-container elementor-column-gap-default">
      <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-bb67720" data-id="bb67720" data-element_type="column">
        <div className="elementor-widget-wrap elementor-element-populated">
          <div className="elementor-element elementor-element-7652515 elementor-widget elementor-widget-envolve_funfacts" data-id={7652515} data-element_type="widget" data-widget_type="envolve_funfacts.default">
            <div className="elementor-widget-container">
            </div></div></div></div></div></section></div>
    <section className="funfacts-section">
    <div className="pattern" style={{backgroundImage: 'url(images/pattern-14.png)'}} />
    <div className="auto-container">
      {/* Fact Counter */}
      <div className="fact-counter">
        <div className="row">
          {/*Column*/}
          <div className="column counter-column col-lg-4">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="icon-box">
                  <div className="icon">
                    <Image width={80} height={80} src="/images/Untitled-11.png" />
                    {/* <span class="d-icons flaticon-up"></span> */}
                  </div>
                  <div className="counter-title">Outsource<br />with 100% satisfaction</div>
                </div>                                    
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={3000} data-stop="2.5">2.5</span><span>K</span>
                </div>
                <div className="text">Our practical solutions are tailored to each client and are designed to reduce labor costs, while improving the profitability of your business.</div>
              </div>
            </div>
          </div>
          {/*Column*/}
          {/*Column*/}
          <div className="column counter-column col-lg-4">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="icon-box">
                  <div className="icon">
                    <Image  width={80} height={80} src="/images/Untitled-12.png" />
                    {/* <span class="d-icons flaticon-agreement"></span> */}
                  </div>
                  <div className="counter-title">Experienced &amp; <br /> Professional Team</div>
                </div>                                    
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={3000} data-stop={138}>138</span><span>+</span>
                </div>
                <div className="text">We have team of experienced and professional agents and staff to help you in your specific need.</div>
              </div>
            </div>
          </div>
          {/*Column*/}
          {/*Column*/}
          <div className="column counter-column col-lg-4">
            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
              <div className="content">
                <div className="icon-box">
                  <div className="icon">
                    <Image width={80} height={80} src="/images/Untitled-13.png" />
                    {/* <span class="d-icons flaticon-business-and-finance"></span> */}
                  </div>
                  <div className="counter-title">Profit Growth after <br />using <span style={{color: 'red'}}>nomad</span>ux services</div>
                </div>                                    
                <div className="count-outer count-box">
                  <span className="count-text" data-speed={3000} data-stop="79.8">79.8</span><span>%</span>
                </div>
                <div className="text">After using nomadux services it is seen that the rise in company profit is increased upto 80%. This is huge. </div>
              </div>
            </div>
          </div>
          {/*Column*/}
        </div>
      </div>
    </div>
  </section>
 
    </React.Fragment>
  )
}

export default Funfact
// <div>
// <section className="elementor-section elementor-top-section elementor-element elementor-element-174175e elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="174175e" data-element_type="section">
//   <div className="elementor-container elementor-column-gap-default">
//     <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c2a1635" data-id="c2a1635" data-element_type="column">
//       <div className="elementor-widget-wrap">
//       </div>
//     </div>
//   </div>
// </section>
// <section className="elementor-section elementor-top-section elementor-element elementor-element-e7771df elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="e7771df" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
//   <div className="elementor-container elementor-column-gap-default">
//     <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-0909613" data-id={0909613} data-element_type="column">
//       <div className="elementor-widget-wrap elementor-element-populated">
//         <div className="elementor-element elementor-element-26c9ed9 elementor-widget elementor-widget-envolve_our_work_process" data-id="26c9ed9" data-element_type="widget" data-widget_type="envolve_our_work_process.default">
//           <div className="elementor-widget-container">
//           </div></div></div></div></div></section></div>