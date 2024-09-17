/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 Model.glb 
*/

import React, { useRef } from "react";
import { useFrame, useGraph } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

import { motion } from "framer-motion-3d";

export function Table(props) {
  const { scene } = useGLTF("/Model.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  return (
    <group {...props} dispose={null}>
      <directionalLight  castShadow receiveShadow intensity={2} position={[-1.701, 7.049, -1.602]} rotation={[-1.806, -0.308, -2.24]} target={nodes['TriLamp-Back001'].target}>
        <primitive object={nodes['TriLamp-Back001'].target} position={[0, 0, -1]} />
      </directionalLight>
      <directionalLight castShadow receiveShadow intensity={1} position={[-7.233, 7.207, 4.936]} rotation={[-0.868, -0.723, -0.663]} target={nodes['TriLamp-Back002'].target}>
        <primitive object={nodes['TriLamp-Back002'].target} position={[0, 0, -1]} />
      </directionalLight>
      <pointLight castShadow receiveShadow intensity={2} decay={0} position={[4.171, 2.808, -0.496]} rotation={[-2.25, 0.727, 2.453]} />
      <pointLight castShadow receiveShadow intensity={2} decay={0} position={[-0.486, 3.889, -0.576]} rotation={[-2.25, 0.727, 2.453]} />
      <pointLight castShadow receiveShadow intensity={1.5} decay={0} position={[2.811, 0.701, 2.45]} rotation={[-0.388, 0.413, 0.162]} />
      <pointLight castShadow receiveShadow intensity={1} decay={0} position={[-1.672, 0.701, 2.45]} rotation={[-0.388, -0.734, -0.267]} />
      <pointLight castShadow receiveShadow intensity={4} decay={2} color="#ff9d00" position={[4.454, 3.717, -3.401]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow receiveShadow intensity={4} decay={2} color="#ff9d00" position={[4.997, 3.717, -3.401]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow receiveShadow intensity={4} decay={2} color="#ff9d00" position={[-5.577, 3.717, -3.401]} rotation={[-Math.PI / 2, 0, 0]} />
      <pointLight castShadow receiveShadow intensity={4} decay={2} color="#ff9d00" position={[-5.234, 3.717, -3.401]} rotation={[-Math.PI / 2, 0, 0]} />
      
    <motion.group
     initial={{ rotate: 180, scale: 0, y: 10 }}
     animate={{ rotate: 0, scale: 1, y: 0 }}
     transition={{ duration: 1.3, delay: 0.7, damping: 0.3 }}
    >
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.dull_mat} position={[-0.464, 1.233, -0.016]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials['Material.001']} position={[-0.464, 1.271, -3.954]} />
      <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials.golden} position={[-0.463, 1.359, -0.017]} />
    </motion.group>
      
      <group position={[-0.418, 0.694, 0.001]} scale={[0.683, 0.594, 0.6]}>
        <motion.mesh 
        castShadow receiveShadow
         initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        geometry={nodes.Cylinder004.geometry} material={materials.golden} />
        <motion.mesh 
        castShadow receiveShadow
         initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          geometry={nodes.Cylinder004_1.geometry}
          material={materials.dull_mat}
        />
      </group>
      <mesh
        geometry={nodes.Plane.geometry}
        receiveShadow
        material={materials.bg}
        position={[-0.6, -0.5, -2]}
        scale={[-9, -8.614, -1.223]}
      />

      <group position={[2.329, 0.013, -0.831]} scale={0.018}>
        <motion.mesh

castShadow receiveShadow
initial={{ rotate: 360, y: -300, opacity: 0 }}
         animate={{ rotate: 0, y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.9, damping: 0.5 }}
        geometry={nodes.meshChair.geometry} material={materials.dull_mat} />
        <motion.mesh

castShadow receiveShadow
initial={{ rotate: 360, y: -300, opacity: 0 }}
         animate={{ rotate: 0, y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.9, damping: 0.5 }}
        geometry={nodes.meshChair_1.geometry} material={materials['Material.003']} />
        <motion.mesh

castShadow receiveShadow
initial={{ rotate: 360, y: -300, opacity: 0 }}
         animate={{ rotate: 0, y: 0, opacity: 1 }}
         transition={{ duration: 1, delay: 0.9, damping: 0.5 }}
        geometry={nodes.meshChair_2.geometry} material={materials['Material.001']} />
      </group>

      <group position={[3.746, 0.013, 0.012]} rotation={[0, -1.571, 0]} scale={0.018}>
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
        geometry={nodes.meshChair002.geometry} material={materials.dull_mat} />
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
        geometry={nodes.meshChair002_1.geometry} material={materials['Material.003']} />
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
          geometry={nodes.meshChair002_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <group position={[-4.642, 0.013, 0.012]} rotation={[0, 1.571, 0]} scale={0.018}>
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
        geometry={nodes.meshChair001.geometry} material={materials.dull_mat} />
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
        geometry={nodes.meshChair001_1.geometry} material={materials['Material.003']} />
        <motion.mesh 
        castShadow receiveShadow
         initial={{ rotate: 360, z: -300, opacity: 0 }}
          animate={{ rotate: 0, z: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5, damping: 0.5 }}
          geometry={nodes.meshChair001_2.geometry}
          material={materials["Material.001"]}
        />
      </group>

      <group position={[-0.472, 1.368, 0]} scale={0.026}>
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh002.geometry} material={materials['Material.002']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh002_1.geometry} material={materials.candle_holder} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          geometry={nodes.Mesh002_2.geometry}
          material={materials.dull_mat}
        />
      </group>
      <group position={[0.953, 1.368, 0]} scale={0.026}>
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh003.geometry} material={materials['Material.002']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh003_1.geometry} material={materials.candle_holder} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          geometry={nodes.Mesh003_2.geometry}
          material={materials.dull_mat}
        />
      </group>
      <group position={[-1.907, 1.368, 0]} scale={0.026}>
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh004.geometry} material={materials['Material.002']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.Mesh004_1.geometry} material={materials.candle_holder} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          geometry={nodes.Mesh004_2.geometry}
          material={materials.dull_mat}
        />
      </group>
      <mesh receiveShadow geometry={nodes.Plane001.geometry} material={materials.bg} position={[-1, -0.5, 0.269]} scale={[-9, -5.979, -2.552]} />
      <group position={[-0.289, 3.774, -3.656]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.035, 0.035, 0.044]}>
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.lamp_1.geometry} material={materials.glass} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.lamp_2.geometry} material={materials['black metal']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.lamp_3.geometry} material={materials['GOld metal']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        geometry={nodes.lamp_4.geometry} material={materials['Material.006']} />
        <motion.mesh 
        castShadow receiveShadow
        initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
          geometry={nodes.lamp_5.geometry}
          material={materials.clearMarble}
        />
      </group>
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.dull_mat}
        position={[-1, -0.43, 0]}
        scale={[-2, 1, 1]}
      />
      <motion.mesh 
       initial={{ y: 100 }}
       animate={{ y: 0.009 }}
       transition={{
         duration: 1.3,
         delay: 0.8,
       }}
      name="Plane002" geometry={nodes.Plane002.geometry} position={[0, 0.009, 0]} material={materials['Material.004']} morphTargetDictionary={nodes.Plane002.morphTargetDictionary} morphTargetInfluences={nodes.Plane002.morphTargetInfluences} />
    </group>
  );
}

useGLTF.preload("/Model.glb");
