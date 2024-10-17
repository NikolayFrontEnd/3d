import logo from './logo.svg';
import './App.css';
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Sphere from './components/Sphere';
import {Counter} from './features/counter/Counter';
import {Pow} from './features/pow/pow';
import {ProductList} from'./Magazine';
import Earth from "./components/Earth"
import { Experience } from "./components/ex";
import {Hospital} from './components/hospital';

function App() {

  return (
    <div className="App">

{/*  <Canvas>
        <color attach="background" args={["white"]} />
<Hospital />

      </Canvas> */}

{/* <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 2],
        }}
      >
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />

          <Sphere/> 



      </Canvas>  */} 

<Canvas>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={100} damping={1}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;

{/*  <Canvas
        camera={{
          fov: 90,
          position: [0, 0, 2],
        }}
      >
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={0.8} />

          <Sphere/> 



      </Canvas>  
 */}
{/* <ProductList/> */}


{/*         <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls> */}