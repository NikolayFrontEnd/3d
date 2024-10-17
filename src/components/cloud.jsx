import { useGLTF } from "@react-three/drei";
import React from "react";

export function Cloud({ opacity, ...props }) {
  const { nodes, materials } = useGLTF("./models/cloud/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Node.geometry}>
        
      </mesh>
    </group>
  );
}

useGLTF.preload("./models/cloud/model.glb");