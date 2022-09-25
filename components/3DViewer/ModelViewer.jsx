import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./gltf";

const ModelViewer = ({ modelPath, style = {}, scale = 1, position = [0, 0, 0], lights = {}, orbitControls = true, rotateAnimation = [0, 0.003, 0], rotation = [0, 0, 0] }) => {
    return (
        <div style={style}>
            <Canvas>
                <ambientLight intensity={lights.ambientLight.intensity} />
                <spotLight position={lights.spotLight.position} angle={lights.spotLight.angle} penumbra={lights.spotLight.penumbra} />
                <pointLight position={lights.pointLight.position} />
                <Suspense fallback={null}>
                    <GltfModel modelPath={modelPath} scale={scale} position={position} rotation={rotation} rotateAnimation={rotateAnimation} />
                    {orbitControls && (
                        <>
                            <OrbitControls enableZoom={false} />
                        </>
                    )}
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;