import { OrbitControls } from "@react-three/drei";
export default function Sphere() {
    return (
      <mesh position={[0, 0, -2]}>
              <OrbitControls />
        <sphereGeometry args={[2, 32]} />
        <meshStandardMaterial color={0x00ff00} />
      </mesh>
    );
  }
  