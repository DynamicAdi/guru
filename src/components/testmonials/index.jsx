import React from "react";
import Slider from "react-slick";

import './styles.scss'
import TestmonialsCard from './card';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testmonials() {
  const tabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    lazyLoad: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='testmonials'>
        <h1>What our <span>customers</span> are saying</h1>

    <div className="mid">
      <Slider {...settings}>
        {tabs.map((tab, index) => (
          <TestmonialsCard index={index} key={index} />
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Testmonials