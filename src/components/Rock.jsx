import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";

export default function Rock(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("./models/rock/model.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.menhir_mini.geometry}
        material={materials["color_main.001"]}
      />
    </group>
  );
}

useGLTF.preload("./models/rock/model.gltf");