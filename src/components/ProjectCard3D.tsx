'use client';

import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingCube({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1.5, 1.5, 1.5]} />
        <meshStandardMaterial color={color} metalness={0.6} roughness={0.2} />
      </mesh>
    </Float>
  );
}

export default function ProjectCard3D({ color = '#3b82f6' }: { color?: string }) {
  return (
    <div className="w-full h-48">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <RotatingCube color={color} />
        </Suspense>
      </Canvas>
    </div>
  );
}
