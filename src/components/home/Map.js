import React from 'react'
function Map() {
  return (
    <React.Fragment>
   <section
  className="elementor-section elementor-top-section elementor-element elementor-element-ade52d2 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default"
  data-id="ade52d2"
  data-element_type="section"
  data-settings='{"stretch_section":"section-stretched"}'
>
  <div className="elementor-container elementor-column-gap-no">
    <div
      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5b23f3f"
      data-id="5b23f3f"
      data-element_type="column"
    >
      <div className="elementor-widget-wrap elementor-element-populated">
        <div
          className="elementor-element elementor-element-b848489 elementor-widget elementor-widget-envolve_google_map"
          data-id="b848489"
          data-element_type="widget"
          data-widget_type="envolve_google_map.default"
        >
          <div className="elementor-widget-container">
            {/* Map Section */}
            <section className="map-section">
              {/*Map Outer*/}
              <div className="map-outer">
                <div className="google-map">
                  <iframe
                    loading="lazy"
                    width="100%"
                    height={600}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Torres%20Paseo%20Col%C3%B3n+(nomadux)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  />{" "}
                </div>
              </div>
              <div className="auto-container   ">
                <div className="contact-info ">
                  <div
                    className=""
                     >
                    <div className="inner-box">
                      <div className="icon-box ">
                        <div className="icon">
                          <span className="icon flaticon-discussion" />
                        </div>
                        {/* <div class="icon"><i class="fa fa-bullseye"></i></div> */}
                        <h4>nomadux</h4>
                        <h5>Main Office</h5>
                      </div>
                      <h3 />
                      <ul className="map-meta">
                        <li>
                          <span className="icon fa fa-location-circle">
                            <i className="fa fa-home" />
                          </span>
                          Nomad Capital Corporation
                          <br />
                          Cédula Jurídica [RUC]: 2401815-1-804937
                          <br />
                          Edificio Credicorp Bank, Apt. #26
                          <br />
                          Calle 50 - Bella Vista, Panama
                        </li>
                        <li>
                          <span className="icon fa fa-clock">
                            <i className="fa fa-clock-o" />
                          </span>
                          Mon - Sat: 09.00 to 05.00 Sun:Closed
                        </li>
                        <li>
                          <span className="icon fa fa-phone" />
                          <a href="tel:9044144625">904 414 4625</a>
                        </li>
                        <li>
                          <span className="icon fa fa-phone" />
                          <a href="tel:(516)%20570-9241">(516) 570-9241</a>
                        </li>
                        <li>
                          <span className="icon fa fa-envelope" />
                          <a href="mailto:info@nomadux.com">info@nomadux.com</a>
                        </li>
                      </ul>
                      <a href="" className="link-btn" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </React.Fragment>
  )
}

export default Map