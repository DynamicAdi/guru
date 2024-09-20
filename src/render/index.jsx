import React, { useEffect } from "react";
import "./styles.scss";
import { Canvas } from "@react-three/fiber";
// import { Model } from '../../public/Model'
import { Final } from "./Final";
import { PerspectiveCamera } from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Model } from "../../public/Table";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selection from "./Selection";


function Render({backend}) {
  const {scrollYProgress} = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 140, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.13, 0.15], [1, 0.8, 0]);

  let initialPosition = [10.964, 5.96, 0.47];
  let initialRotation = [-1.395, 1.337, 1.402];

  if (window.innerWidth < 456) {
      initialPosition = [];
      initialPosition = []; 

  }
  return (
    <>
      <div className="render" id="home">
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

            <Final />
          </Canvas>
        </div>
      </div>
      <div className="area">
      <div className="gradient"></div>
      <Selection backend={backend}/>
      <Canvas>
      <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={45.747} position={initialPosition} rotation={initialRotation} />
      <Model />
      </Canvas>
      </div>
    </>
  );
}

export default Render;
