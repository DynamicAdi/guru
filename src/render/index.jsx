import React, { useEffect } from "react";
import "./styles.scss";
import { Canvas } from "@react-three/fiber";
// import { Model } from '../../public/Model'
import { Final } from "./Final";
import { PerspectiveCamera } from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Model } from "../../public/Table";
import FilledCard from "./../components/menu/filledCard"
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Render() {
  const {scrollYProgress} = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 140, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.17], [1, 0]);

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
    <>
      <div className="render">
        <div className="under">
          <h2>Welcome To</h2>
          <h1>
            Guru <span>Catering</span>{" "}
          </h1>
          <p>
            We will make your function{" "}
            <span>
              {" "}
              fabul<motion.span
                 style={{
                  display: "inline-block",
                  scale,
                  opacity,
                  originX: "45%",
                  originY: "30%",
                }}
              >o</motion.span>us
            </span>{" "}
            with our <span>delicious</span> menu
          </p>
          <div className="butns">
            <Link to="/corporate">
              <button className="glow">Corporate Box</button>
            </Link>
            <Link to="/menu">
              <button className="glow green">Look Into Menu</button>
            </Link>
          </div>

          <div className="box"></div>
        </div>
        <div className="threejs">
          <div className="gradient"></div>
          {/* <div className="gradient gradient2"></div> */}
          <Canvas shadows>
            <PerspectiveCamera
              name="Camera"
              makeDefault={true}
              far={800}
              near={0.1}
              fov={22}
              position={[-11, 7, 1.9]}
              rotation={[-0.9, -0.94, -0.88]}
              scale={1.249}
            />
            <ambientLight intensity={0.5} />
            <directionalLight
              intensity={3}
              position={[-10, 8, 10]}
              castShadow
            />
            {/* <OrbitControls /> */}
            <Final />
          </Canvas>
        </div>
      </div>
      <div className="area">
      <div className="gradient"></div>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 1.5}}
className="catogery">
    <Slider {...settings} arrows={false}>
      <FilledCard />
      <FilledCard />
      <FilledCard />
      <FilledCard />
    </Slider>


      </motion.div>
      <Canvas>
      <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={45.747} position={[10.964, 5.96, 0.47]} rotation={[-1.395, 1.337, 1.402]} />
      <Model />
      </Canvas>
      </div>
    </>
  );
}

export default Render;
