/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 final.glb 
*/

import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { useScroll } from 'framer-motion'

export function Final(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/final.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const { scrollYProgress} = useScroll();


  useEffect(() => {
       actions['mixamo.com.001'].play() 
  }, [scrollYProgress])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Bartending" position={[-0.049, 0, 0]} rotation={[Math.PI, -1.531, Math.PI]}>
          <group name="Bartending_Skeleton">
            <group name="f107fae2-b913-4642-8967-eaaa3c067f6d_Skeleton">
              <primitive object={nodes.Hips} />
              <group name="Mesh_2" />
              <group name="Wolf3D_Avatar" />
              <skinnedMesh castShadow name="Mesh_2001" geometry={nodes.Mesh_2001.geometry} material={materials.Wolf3D_Avatar} skeleton={nodes.Mesh_2001.skeleton} morphTargetDictionary={nodes.Mesh_2001.morphTargetDictionary} morphTargetInfluences={nodes.Mesh_2001.morphTargetInfluences} />
            </group>
          </group>
        </group>
        <group name="Sketchfab_model" position={[-0.221, 0.996, 0.135]} rotation={[-Math.PI / 2, 0, -0.813]} scale={0.188}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Circle001_1">
                <mesh castShadow name="Object_6" geometry={nodes.Object_6.geometry} material={materials['Material.001']} />
                <mesh castShadow name="Object_7" geometry={nodes.Object_7.geometry} material={materials['Material.002']} />
                <mesh castShadow name="Object_8" geometry={nodes.Object_8.geometry} material={materials['Material.003']} />
              </group>
              <group name="Circle002_2">
                <mesh castShadow name="Object_10" geometry={nodes.Object_10.geometry} material={materials['Material.004']} position={[0, 0.044, 0]} rotation={[-0.004, -0.062, -0.084]} />
              </group>
              <group name="Circle003_3">
                <mesh castShadow name="Object_12" geometry={nodes.Object_12.geometry} material={materials['Material.005']} position={[0, 0.044, 0]} rotation={[-0.004, -0.062, -0.084]} />
              </group>
              <group name="Circle_0">
                <mesh castShadow name="Object_4" geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
              </group>
            </group>
          </group>
        </group>
        <pointLight name="Point" intensity={16} decay={1} color="#ffae81" position={[-0.502, 1.994, 1.19]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.417, 0.59, 0.417]} />
        <pointLight name="Point001_1" intensity={0} decay={1} position={[-0.502, 2.388, 0.084]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.417, 0.59, 0.417]} />
        <pointLight name="Point002" intensity={16} decay={2} color="#8fe0ff" position={[-0.502, 1.968, -0.947]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.417, 0.59, 0.417]} />
        <pointLight name="Point003" intensity={2} decay={2} position={[2.108, 1.143, 2.009]} rotation={[-1.302, -1.237, 0.377]} scale={[0.417, 0.59, 0.417]} />
        <pointLight name="Point004" intensity={2} decay={2} position={[-1.905, 0.66, -1.219]} rotation={[-1.302, -1.237, 0.377]} scale={[0.417, 0.59, 0.417]} />
        <pointLight castShadow name="Point005" intensity={2} decay={2} position={[-2.1, -0.7, 1.019]} rotation={[-1.302, -1.237, 0.377]} scale={[0.417, 0.59, 0.417]} />
        <mesh castShadow name="立方体" geometry={nodes.立方体.geometry} material={materials['silver gray.001']} />
        <mesh castShadow name="立方体001" geometry={nodes.立方体001.geometry} material={materials['black gray.1000']} />
        <mesh castShadow name="贝塞尔曲线" geometry={nodes.贝塞尔曲线.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体" geometry={nodes.柱体.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体001" geometry={nodes.柱体001.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体002" geometry={nodes.柱体002.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体003" geometry={nodes.柱体003.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体004" geometry={nodes.柱体004.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体005" geometry={nodes.柱体005.geometry} material={materials['black.001']} />
        <mesh castShadow name="平面" geometry={nodes.平面.geometry} material={materials['silver gray.002']} />
        <mesh castShadow name="柱体006" geometry={nodes.柱体006.geometry} material={materials.copper} />
        <mesh castShadow name="柱体007" geometry={nodes.柱体007.geometry} material={materials.copper} />
        <mesh castShadow name="平面001" geometry={nodes.平面001.geometry} material={materials['black gray']} />
        <mesh castShadow name="立方体002" geometry={nodes.立方体002.geometry} material={materials['silver gray.001']} />
        <mesh castShadow name="立方体003" geometry={nodes.立方体003.geometry} material={materials['black gray.1000']} />
        <mesh castShadow name="贝塞尔曲线001" geometry={nodes.贝塞尔曲线001.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体008" geometry={nodes.柱体008.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体009" geometry={nodes.柱体009.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体010" geometry={nodes.柱体010.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体011" geometry={nodes.柱体011.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体012" geometry={nodes.柱体012.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体013" geometry={nodes.柱体013.geometry} material={materials['black.001']} />
        <mesh castShadow name="立方体004" geometry={nodes.立方体004.geometry} material={materials['silver gray.001']} />
        <mesh castShadow name="立方体005" geometry={nodes.立方体005.geometry} material={materials['black gray.1000']} />
        <mesh castShadow name="贝塞尔曲线002" geometry={nodes.贝塞尔曲线002.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体014" geometry={nodes.柱体014.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体015" geometry={nodes.柱体015.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体016" geometry={nodes.柱体016.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体017" geometry={nodes.柱体017.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体018" geometry={nodes.柱体018.geometry} material={materials['black.001']} />
        <mesh castShadow name="立方体008" geometry={nodes.立方体008.geometry} material={materials['silver gray.001']} />
        <mesh castShadow name="立方体009" geometry={nodes.立方体009.geometry} material={materials['black gray.1000']} />
        <mesh castShadow name="贝塞尔曲线003" geometry={nodes.贝塞尔曲线003.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体019" geometry={nodes.柱体019.geometry} material={materials['black gray']} />
        <mesh castShadow name="柱体020" geometry={nodes.柱体020.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体021" geometry={nodes.柱体021.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体022" geometry={nodes.柱体022.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体023" geometry={nodes.柱体023.geometry} material={materials['black.001']} />
        <mesh castShadow name="柱体024" geometry={nodes.柱体024.geometry} material={materials['black.001']} />
        <mesh castShadow name="平面002" geometry={nodes.平面002.geometry} material={materials['silver gray.002']} />
        <mesh castShadow name="柱体025" geometry={nodes.柱体025.geometry} material={materials.copper} />
        <mesh castShadow name="柱体026" geometry={nodes.柱体026.geometry} material={materials.copper} />
        <mesh castShadow name="平面003" geometry={nodes.平面003.geometry} material={materials['black gray']} />
        <group name="Cube047">
          <mesh castShadow name="Cube097" geometry={nodes.Cube097.geometry} material={materials['Steel bowl outside.002']} />
          <mesh castShadow name="Cube097_1" geometry={nodes.Cube097_1.geometry} material={materials['Steel bowl inside.002']} />
          <mesh castShadow name="Cube097_2" geometry={nodes.Cube097_2.geometry} material={materials['Material.032']} />
          <mesh castShadow name="Cube097_3" geometry={nodes.Cube097_3.geometry} material={materials['Orange.002']} />
        </group>
        <group name="Cube071">
          <mesh castShadow name="Cube058" geometry={nodes.Cube058.geometry} material={materials.ChromePot} />
          <mesh castShadow name="Cube058_1" geometry={nodes.Cube058_1.geometry} material={materials['Red Plastic']} />
          <mesh castShadow name="Cube058_2" geometry={nodes.Cube058_2.geometry} material={materials['Black Plastic']} />
        </group>
        <mesh castShadow name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.009']} position={[-0.502, 3.882, 1.19]} scale={[0.091, 0.091, 0.128]} />
        <mesh castShadow name="Circle004" geometry={nodes.Circle004.geometry} material={materials['Material.009']} position={[-0.502, 3.882, 0.084]} scale={[0.091, 0.091, 0.128]} />
        <mesh castShadow name="Circle005" geometry={nodes.Circle005.geometry} material={materials['Material.009']} position={[-0.502, 3.882, -0.947]} scale={[0.091, 0.091, 0.128]} />
        <mesh castShadow receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} scale={5}>
      {/* PlaneGeometry(width, height) */}
      <planeGeometry args={[10, 10]} />
      {/* MeshStandardMaterial for standard material */}
      <meshStandardMaterial color="#ffffff" />
    </mesh>
        {/* <mesh name="Plane" geometry={nodes.Plane.geometry} scale={12}>
          <meshStandardMaterial color={'#ffffff00'} roughness={1} />
        </mesh> */}
        <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials.Material} position={[-0.236, 0.957, 0.735]} scale={0.197} />
      </group>
    </group>
  )
}

useGLTF.preload('/final.glb')
