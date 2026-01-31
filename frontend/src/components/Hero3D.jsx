import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, ContactShadows, PresentationControls } from '@react-three/drei';

const Bottle = (props) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        meshRef.current.rotation.y = Math.sin(t / 4) / 4;
        meshRef.current.rotation.z = Math.sin(t / 4) / 8;
    });

    return (
        <group {...props} ref={meshRef}>
            {/* Bottle Body */}
            <mesh position={[0, 0, 0]}>
                <cylinderGeometry args={[0.8, 0.8, 2.5, 32]} />
                <meshPhysicalMaterial
                    color="#e0f2f1"
                    roughness={0.2}
                    metalness={0.1}
                    transmission={0.1}
                    thickness={2}
                    clearcoat={1}
                />
            </mesh>
            {/* Cap */}
            <mesh position={[0, 1.4, 0]}>
                <cylinderGeometry args={[0.5, 0.5, 0.4, 32]} />
                <meshStandardMaterial color="#0f3c3b" roughness={0.4} />
            </mesh>
            {/* Label */}
            <mesh position={[0, 0, 0.81]}>
                <planeGeometry args={[1, 1.5]} />
                <meshBasicMaterial color="#ffffff" />
            </mesh>
        </group>
    );
};

const Hero3D = () => {
    return (
        <div className="h-[400px] md:h-[600px] w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

                <PresentationControls global config={{ mass: 2, tension: 500 }} snap={{ mass: 4, tension: 1500 }} rotation={[0, 0, 0]} polar={[-Math.PI / 4, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                    <Float rotationIntensity={0.4} floatIntensity={0.6} floatingRange={[-0.1, 0.1]}>
                        <Bottle />
                    </Float>
                </PresentationControls>

                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default Hero3D;
