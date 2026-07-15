'use client';

import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, OrbitControls } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Avatar3D() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={groupRef}>
        {/* Head */}
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial color="#fcd9b6" metalness={0.1} roughness={0.8} />
        </mesh>
        
        {/* Eyes */}
        <mesh position={[-0.25, 0.6, 0.65]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
        </mesh>
        <mesh position={[0.25, 0.6, 0.65]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.1} />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.25, 0.6, 0.75]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.1} />
        </mesh>
        <mesh position={[0.25, 0.6, 0.75]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.1} roughness={0.1} />
        </mesh>
        
        {/* Nose */}
        <mesh position={[0, 0.45, 0.7]}>
          <coneGeometry args={[0.1, 0.2, 8]} />
          <meshStandardMaterial color="#f0c4a0" metalness={0.1} roughness={0.8} />
        </mesh>
        
        {/* Mouth */}
        <mesh position={[0, 0.25, 0.65]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.2, 0.05, 8, 16, Math.PI]} />
          <meshStandardMaterial color="#e8a090" metalness={0.1} roughness={0.8} />
        </mesh>
        
        {/* Hair */}
        <mesh position={[0, 1.1, 0]}>
          <sphereGeometry args={[0.75, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#2d1b0e" metalness={0.3} roughness={0.6} />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, -0.8, 0]}>
          <cylinderGeometry args={[0.6, 0.8, 1.5, 32]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        
        {/* Shoulders */}
        <mesh position={[-0.5, -0.6, 0]} rotation={[0, 0, 0.3]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
        <mesh position={[0.5, -0.6, 0]} rotation={[0, 0, -0.3]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.3} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  );
}

export default function Profile3D() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <Avatar3D />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
