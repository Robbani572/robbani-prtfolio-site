import { Suspense, useRef, useState } from "react"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, Stage } from "@react-three/drei"
import CanvasLoader from '../Loader'
import Computer from './Computer'


const Computers = () => {

  // const computer = useGLTF('./desktop_pc/scene.gltf')

  return (


    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [40, 6, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computer />
        <mesh>
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={1} />
          
          <Computer scale={0.75} position={[0, -3.25, -1.5]}/>
          
        </mesh>
        </Suspense>
        <Preload all /> */}
        {/* <Stage> */}
          <hemisphereLight intensity={0.15} groundColor="black" />
          <pointLight intensity={1} />
          <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
          <Computer position={[0, -3.25, -1.5]} scale={0.75} rotation={[-0.01, -0.2, -0.1]} />
        {/* </Stage> */}
      </Suspense>
    </Canvas>
  )
}

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameloop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Computers />
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   )
// }

export default Computers