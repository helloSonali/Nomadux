import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Banner.css'; // Add your custom CSS file for styling
// import { img_url } from '../Auth';

// import video from '../assets/videos/banner/video.mp4'


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
      image: '/images/3.jpg' ,
      caption:  <h2>"Do what you do Best and</h2>,
      subhead:<h2> Outsource the Rest"</h2>,
      button:  <a class="home-btn banner-btn" href="#" data-text="read more"><span>read more</span></a>,
      des: <p>“Yoga is the journey of the self, through the self, to the self.”  </p>
    },
    
    {
      image: '/images/advise-expert.jpg',
       caption:  <h5>Welcome Our Handstand</h5>,
      subhead:<h1>Keep <span>Refresh & Strong</span> Your Body</h1>,
      button:  <a class="home-btn banner-btn" href="#" data-text="read more"><span>read more</span></a>,
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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
     
    
        {bannerData.map((banner, index) => (
          <div className="slide" key={index}>
       
            <img src={banner.image} alt={banner.caption} />
         
            
           
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