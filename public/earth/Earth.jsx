

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Earth() {
  const { nodes, materials } = useGLTF("/earth/earth.gltf");

  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            
            geometry={nodes.Sphere_Material002_0.geometry}
            material={materials["Material.002"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/earth/earth.gltf");
