import React, { useEffect } from "react";
import "./styles.scss";
import { Canvas } from "@react-three/fiber";
// import { Model } from '../../public/Model'
import { Final } from "./Final";
import { PerspectiveCamera } from "@react-three/drei";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Table } from "./Table";
import Plates from "./Plates";

function Render() {
  const {scrollYProgress} = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
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
      <Canvas>
 <PerspectiveCamera makeDefault={true} far={1000} near={0.1} fov={22.895} position={[-0.177, 5.299, 15]} rotation={[-0.191, 0.018, 0.003]} />
          <Table />
      </Canvas>
      <Plates />
      </div>
    </>
  );
}

export default Render;
