

import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
export default function LampPost(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/lamp-post/model.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Cylinder096.geometry}
        material={materials["Black.012"]}
      />
      <mesh
        geometry={nodes.Cylinder096_1.geometry}
        material={materials["Yellow.007"]}
      />
    </group>
  );
}

useGLTF.preload("./models/lamp-post/model.gltf");