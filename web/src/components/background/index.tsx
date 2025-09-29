import { Canvas, useFrame, box } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import React from "react";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import { useThree } from "@react-three/fiber";

const fragmentShader = `

uniform vec2      iResolution;           // viewport resolution (in pixels)
uniform float     iTime;                 // shader playback time (in seconds)

void main(){

    vec2 uv =  (2.0 * gl_FragCoord.xy - iResolution.xy) / min(iResolution.x, iResolution.y);

    for(float i = 1.0; i < 10.0; i++){
        uv.x += 0.6 / i * cos(i * 2.5* uv.y + iTime);
        uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
    }
    
    gl_FragColor = 1.85 - vec4(vec3(0.02)/abs(sin(iTime-uv.y-uv.x)),1.0);
}`;

const Plane = () => {
    const mesh = React.useRef<THREE.Mesh>(null!);

    const [windowSize, setWindowSize] = React.useState([0, 0]);
    const [delta, setDelta] = React.useState(0);

    const viewport = useThree((state) => state.viewport);

    const uniforms = useMemo(
        () => ({ iResolution: { value: [0, 0] }, iTime: { value: null } }),
        []
    );

    useFrame((state) => {
        // Cleanup function to remove the event listener when the component unmounts
        //setDelta(delta + deltaT)
        //console.log(deltaT);
        if (mesh.current) {
            (mesh.current.material as THREE.ShaderMaterial).uniforms.iResolution.value = windowSize;
            (mesh.current.material as THREE.ShaderMaterial).uniforms.iTime.value = state.clock.elapsedTime * 0.05;
        }   
        
    });

    // First
    React.useEffect(() => {
        setWindowSize([window.innerWidth, window.innerHeight]);
    }, []);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });

    // React.useEffect(() => {
    //     console.log(windowSize);
    //     const newUniforms = {
    //         iResolution: {
    //             value: windowSize,
    //         },
    //         iTime: {
    //             value: 0.0,
    //         },
    //     };
    //     setUniforms({
    //         ...newUniforms,
    //     });
    // }, [windowSize]);

    return (
        <mesh
            ref={mesh}
            scale={[viewport.width, viewport.height, 1]}
            position={[0, 0, 0]}
        >
            <planeGeometry args={[1, 1]} />
            <shaderMaterial fragmentShader={fragmentShader} uniforms={uniforms}/>
        </mesh>
    );
};

const Box = () => {
    const mesh = React.useRef(null);

    return (
        <mesh ref={mesh}>
            <boxGeometry args={[1, 1, 1]} />
        </mesh>
    );
};

const Background: React.FC = () => {
    return (
        <div className="absolute left-0 top-0  w-full h-[100vh]">
            <Canvas>
                <pointLight
                    position={[10, 10, 10]}
                    intensity={1}
                    color="#fff"
                />
                <ambientLight color="#FFE" />
                <Plane />
            </Canvas>
        </div>
    );
};

export default Background;
