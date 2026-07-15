'use client';

import { Canvas } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Text, Html } from '@react-three/drei';
import { Suspense, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SkillSphere({ position, color, skill }: { position: [number, number, number], color: string, skill: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.6, 32, 32]} />
          <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} />
        </mesh>
      </Float>
      <Html position={[0, 1, 0]} center distanceFactor={8}>
        <div className="bg-black/30 text-white px-4 py-2 rounded-lg text-base font-medium whitespace-nowrap backdrop-blur-sm border border-white/20">
          {skill}
        </div>
      </Html>
    </group>
  );
}

export default function Skills3D({ skills }: { skills: string[] }) {
  const colors = ['#3b82f6', '#8b5cf6', '#06b6d4', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#6366f1'];
  
  const positions: [number, number, number][] = [
    [-2, 1, -3], [0, 2, -4], [2, 1, -3],
    [-2.5, -0.5, -2.5], [0, -1, -3], [2.5, -0.5, -2.5],
    [-1.5, -2, -2], [1.5, -2, -2]
  ];

  return (
    <div className="w-full h-64">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          {skills.slice(0, 8).map((skill, index) => (
            <SkillSphere
              key={skill}
              position={positions[index]}
              color={colors[index % colors.length]}
              skill={skill}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
