import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";


const Test = () => {
    return (
        <div className="w-full h-screen">
            <Canvas>
                <OrbitControls enableZoom={false} />
                <mesh>
                    <boxGeometry args={[1, 1, 1]}/>
                </mesh>
            </Canvas>
        </div>
    );
};

export default Test;