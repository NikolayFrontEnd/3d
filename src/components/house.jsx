import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function House(props) {
  const { nodes, materials } = useGLTF('./models/house/Hospital.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry} material={materials.Cube} />
    </group>
  )
}

useGLTF.preload('./models/house/Hospital.glb')