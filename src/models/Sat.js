/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from 'react-three-fiber'

export default function Sat(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/gokturk0.4.gltf')

  const factor = 0.25 + Math.random();

  useFrame((state, delta) => {
    //groupRef.current.rotation.y -= 0.07
    //groupRef.current.position.x -= 0.02
    //console.log(state, delta)
    //groupRef.current.position.x -= delta


    //group.current.rotation.y += Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5
    //mixer.update(delta * speed)
    group.current.rotation.y +=  0.05

  })
  console.log("groupRef.current on sat:", group.current)

  return (
    <group ref={group} {...props} dispose={null} scale={[0.03, 0.03, 0.03]} >
      <scene name="Scene" position={[100, 0, 0]}>
        <mesh material={materials.Material} geometry={nodes.Cube.geometry} position={[0.05, -0.01, -0.03]} />
        <mesh material={materials['Material.025']} geometry={nodes.Cylinder.geometry} position={[0.05, -0.61, -0.01]} />
        <mesh
          material={materials['Material.010']}
          geometry={nodes.Cube004.geometry}
          position={[2.25, -0.06, -1.04]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.022']}
          geometry={nodes.Sphere.geometry}
          position={[0.07, -1.46, 1.75]}
          rotation={[-0.65, 0, 0]}
        />
        <mesh
          material={materials['Material.023']}
          geometry={nodes.Sphere001.geometry}
          position={[1.26, -1.19, -1.83]}
          rotation={[0.97, -0.25, 0.35]}
        />
        <mesh
          material={materials['Material.024']}
          geometry={nodes.Sphere002.geometry}
          position={[-1.07, -1.22, -1.84]}
          rotation={[0.96, 0.36, -0.46]}
        />
        <mesh
          material={materials['Material.021']}
          geometry={nodes.Cylinder001.geometry}
          position={[0.01, 0.2, -0.17]}
          rotation={[-1.53, 0, -1.57]}
          scale={[-0.1, 9.34, -0.1]}
        />
        <mesh
          material={nodes.Cylinder002.material}
          geometry={nodes.Cylinder002.geometry}
          position={[1.19, -1.51, -1.67]}
          rotation={[1.42, -0.16, 0.43]}
          scale={[-0.01, 0.84, -0.01]}
        />
        <mesh
          material={materials['Material.013']}
          geometry={nodes.Cube001.geometry}
          position={[4.34, -0.06, -1.04]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.014']}
          geometry={nodes.Cube002.geometry}
          position={[6.41, -0.06, -1.04]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.015']}
          geometry={nodes.Cube003.geometry}
          position={[8.49, -0.06, -1.04]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.019']}
          geometry={nodes.Cube008.geometry}
          position={[-6.3, -0.06, -1.1]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.018']}
          geometry={nodes.Cube007.geometry}
          position={[-4.22, -0.06, -1.1]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.017']}
          geometry={nodes.Cube006.geometry}
          position={[-2.15, -0.06, -1.1]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={materials['Material.016']}
          geometry={nodes.Cube005.geometry}
          position={[-8.39, -0.06, -1.1]}
          rotation={[-0.26, 1.57, 0]}
        />
        <mesh
          material={nodes.Cylinder003.material}
          geometry={nodes.Cylinder003.geometry}
          position={[-1.14, -1.54, -1.76]}
          rotation={[-1.42, -0.08, 0.46]}
          scale={[-0.01, 0.84, -0.01]}
        />
        <mesh
          material={nodes.Cylinder004.material}
          geometry={nodes.Cylinder004.geometry}
          position={[0.09, -1.76, 1.58]}
          rotation={[-1.1, -0.28, 0.2]}
          scale={[-0.01, 0.84, -0.01]}
        />
        <mesh
          material={nodes.Sphere003.material}
          geometry={nodes.Sphere003.geometry}
          position={[-1.02, 0.88, -1.14]}
          rotation={[1.04, 0.39, -0.58]}
          scale={[0.05, 0.17, 0.04]}
        />
        <mesh
          material={nodes.Sphere004.material}
          geometry={nodes.Sphere004.geometry}
          position={[1.09, 0.85, -1.14]}
          rotation={[0.97, -0.25, 0.35]}
          scale={[0.05, 0.17, 0.04]}
        />
        <mesh
          material={nodes.Sphere005.material}
          geometry={nodes.Sphere005.geometry}
          position={[1.12, 0.86, 1.05]}
          rotation={[2.11, -0.37, 2.6]}
          scale={[0.05, 0.17, 0.04]}
        />
        <mesh
          material={nodes.Sphere006.material}
          geometry={nodes.Sphere006.geometry}
          position={[-1.02, 0.85, 1.05]}
          rotation={[2.08, 0.42, -2.51]}
          scale={[0.05, 0.17, 0.04]}
        />
        <mesh
          material={materials['Material.026']}
          geometry={nodes.Suzanne.geometry}
          position={[0.07, 0.25, -1.72]}
          rotation={[-Math.PI, -0.06, -Math.PI]}
        />
        <mesh
          material={materials['Material.027']}
          geometry={nodes.Torus.geometry}
          position={[0.03, 0.99, -0.02]}
          scale={[0.59, 0.24, 0.59]}
        />
      </scene>
    </group>
  )
}

useGLTF.preload('/gokturk0.4.gltf')
