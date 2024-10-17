
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Sign(props) {
  const { nodes, materials } = useGLTF('./models/sign/Sign.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.sign_hospital_1.geometry} material={materials._defaultMat}/>
      <mesh geometry={nodes.sign_hospital_1_1.geometry} material={materials.border} />
      <mesh geometry={nodes.sign_hospital_1_2.geometry} material={materials.roof} />
    </group>
  )
}

useGLTF.preload('./models/sign/Sign.glb')

