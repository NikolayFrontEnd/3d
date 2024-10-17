import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Tree(props) {
    const { nodes, materials } = useGLTF("./models/tree/Model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat9} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat20} />
    </group>
  )
}



useGLTF.preload("./models/tree/Model.glb");

