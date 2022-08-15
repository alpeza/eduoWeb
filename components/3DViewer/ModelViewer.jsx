import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf";

const ModelViewer = ({ modelPath, scale = 1, position = [0, 0, 0], orbitControls = true, rotation = [0, 0, 0] }) => {
    return (
        <div style={{ height: "100vh", "background-image": "url('tierra.png')", "background-repeat": "no-repeat", "background-size": "100%" }}>
            <Canvas>
                <ambientLight intensity={0.3} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                    <GltfModel modelPath={modelPath} scale={scale} position={position} rotation={rotation} />
                    {orbitControls && (
                        <>
                            <OrbitControls />
                        </>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;