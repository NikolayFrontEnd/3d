
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pine(props) {
  const { nodes, materials } = useGLTF("./models/tree/Pine.glb")
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.PineTree_mesh.geometry} material={materials.blinn3SG} />
    </group>
  )
}

useGLTF.preload("./models/tree/Pine.glb");