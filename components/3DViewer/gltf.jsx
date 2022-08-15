import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale = 40, position = [0, 0, 0], rotation = [0, 0, 0], rotateAnimation = [0, 0.003, 0] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);
    //scale={hovered ? scale * 1.2 : scale}
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (ref.current.rotation.y += rotateAnimation[1]));
    return (
        <>
            <primitive
                ref={ref}
                object={gltf.scene}
                position={position}
                rotation={rotation}
                scale={hovered ? scale * 1 : scale}
                onPointerOver={(event) => hover(true)}
                onPointerOut={(event) => hover(false)}
            />
        </>
    );
};

export default GltfModel;