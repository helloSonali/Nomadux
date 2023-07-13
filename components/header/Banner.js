
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import{AiOutlineArrowRight} from 'react-icons/ai'
import Link from 'next/link';


const PrevArrow = (props) => (
  <div className="arrow-prev" onClick={props.onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = (props) => (
  <div className="arrow-next" onClick={props.onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const Banner = () => {
  const bannerData = [
    {
      image: '/images/1899348.jpg' ,
      caption:  <h2>Do what you do Best and</h2>,
      subhead:<h2> Outsource the Rest</h2>,
      button:<Link class=" banner-btn" href="/" data-text="read more"><span>About us </span> &nbsp;| &nbsp;<AiOutlineArrowRight/><span></span></Link>,
      des: <p>“Yoga is the journey of the self, through the self, to the self.”  </p>
    },
    
    {
      image: '/images/advise-expert.jpg',
       caption: <h2>We Provide Expert To</h2>,
      subhead:<h2> Great Value For Business</h2>,
      button:  <Link class=" banner-btn" href="/" data-text="read more"><span>Our Company </span><span>|<AiOutlineArrowRight/></span></Link>,
      des: <p>“Yoga is the practice of quieting the mind.”   </p>
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
     
    
        {bannerData.map((banner, index) => (
          <div className="slide" key={index}>
            
            <img src={banner.image} alt={banner.caption} />
         
            <div className="slide-content">
            <div className='caption'>{banner.caption}
             <div className="subhead">{banner.subhead}
             
            
              </div>
            
             </div>
             </div>
             <div className="slide-btn">{banner.button}
            
    
             </div>
          </div>
        ))}
      </Slider>
     
           
          
    </div>
  );
};

export default Banner;
// video in slider
// <div className='main'>
// <div className="overlay"></div>
// <video src={video} autoPlay loop muted />
// <div className="content">
// <h5>Welcome Our Handstand</h5>
// <h1>Keep <span>Refresh & Strong</span> Your Body</h1>
// <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum </p>
// <a class="banner-btn1" href="#" data-text="subscribe"><span>Subscribe</span></a>
// </div>

// </div>

// <div className="slide-content">
// <div className='caption'>{banner.caption}
// <div className="subhead">{banner.subhead}

 
//  </div>
//  </div>

// </div>
// <section className="elementor-section elementor-inner-section elementor-element elementor-element-d8e68b9 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d8e68b9" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
// <div className="elementor-background-overlay" />
// <div className="elementor-container elementor-column-gap-no">
//   <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-82e66a5" data-id="82e66a5" data-element_type="column">
//     <div className="elementor-widget-wrap elementor-element-populated">
//       <div className="elementor-element elementor-element-ee5ee7b elementor-widget elementor-widget-image" data-id="ee5ee7b" data-element_type="widget" data-widget_type="image.default">
//         <div className="elementor-widget-container">
//           <a href="#">
//             <img width={300} height={90} src="images/noma.png" className="attachment-large size-large" alt="Nomadux" loading="lazy" />								</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-fe730b0" data-id="fe730b0" data-element_type="column">
//     <div className="elementor-widget-wrap elementor-element-populated">
//       <div className="elementor-element elementor-element-da12100 elementor-widget elementor-widget-image" data-id="da12100" data-element_type="widget" data-widget_type="image.default">
//         <div className="elementor-widget-container">
//           <a href="#">
//             <img width={300} height={90} src="images/nomb.png" className="attachment-large size-large" alt="Nomadux" loading="lazy" />								</a>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e042a9a" data-id="e042a9a" data-element_type="column">
//     <div className="elementor-widget-wrap elementor-element-populated">
//       <div className="elementor-element elementor-element-5ff87cc elementor-widget elementor-widget-image" data-id="5ff87cc" data-element_type="widget" data-widget_type="image.default">
//         <div className="elementor-widget-container">
//           <a href="#">
//             <img width={300} height={90} src="images/nomc.png" className="attachment-large size-large" alt="Nomadux" loading="lazy" />								</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
// </section>