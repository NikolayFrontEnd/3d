import { Environment,OrbitControls } from "@react-three/drei";
import {Background} from './backgrounf'
import {Tree} from './tree1';
import {Pine} from './p';
import {Cloud} from './cloud'
import LampPost from "./LampPost";
import Rock from "./Rock";
import React, { useRef } from "react";
import TreeSpruce from "./TreeSpruce";
import Sign from "./s";
import House from "./house";
import Bug from "./bug";
const Background1 = () => {
    const ref = useRef();
  
    return (
      <group position={[0, 0, 0]} ref={ref}>
        <LampPost scale={[0.5, 0.5, 0.5]} position={[0, -1, -1.9]} />
        <LampPost scale={[0.5, 0.5, 0.5]} position={[3, -1, -1.5]} />
        <TreeSpruce scale={[0.1, 0.1, 0.1]} position={[-4, -1, -3.5]} />
  
        <TreeSpruce scale={[0.15, 0.15, 0.15]} position={[1, -1, -6]} /> 
  
        <Rock scale={[0.1, 0.1, 0.1]} position={[0, -1, 0]} />
      </group>
    );
  };



export const Hospital = ()=>{
    return(
        <>

              <OrbitControls/>
              <ambientLight intensity={0.2} />
      <Environment preset="sunset" intensity={0.7} blur={0.8} />

             <Background/>

<Background1/> 
<Sign/>
        <Tree position={[-5,0, -1]}/>
        <Tree position={[-2,0, -2]}/>
        <House scale={[0.01, 0.01, 0.01]} position={[-5,0, -8]}/>
        <Bug scale={[0.2, 0.2, 0.2]} position={[-1,0, -8]}/>
        </>
    )
}
