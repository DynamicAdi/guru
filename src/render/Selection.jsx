import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import "./styles.scss";
import axios from 'axios';
import Slider from 'react-slick';
import FilledCard from '../components/menu/filledCard';

function Selection({backend}) {
    const [categories, setCategories] = useState([]);

    const getCategories = async () => {
      try {
        const response = await axios.get(`${backend}/catogery`);
        if (response.status === 200) {
          setCategories(response.data);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    useEffect(() => {
      getCategories();
    }, []);
    
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
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
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.6, delay: 1.5}}
className="catogery">
    <Slider {...settings} arrows={false}>
      {categories.map((category, index) => (
        <FilledCard key={index} to={`/menu/${category.name}`} image={category.image} title={category.name} />
      ))}
    </Slider>
    </motion.div>
  )
}

export default Selection