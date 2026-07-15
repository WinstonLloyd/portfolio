'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

function FloatingShapes() {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 2, -5]} rotation={[0, 0, 0]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[3, -1, -4]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#8b5cf6" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={2.5}>
        <mesh position={[0, 3, -6]} rotation={[0.3, 0.3, 0.3]}>
          <dodecahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#06b6d4" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.9} floatIntensity={1.8}>
        <mesh position={[-2, -2, -3]} rotation={[0.2, 0.8, 0.1]}>
          <tetrahedronGeometry args={[0.9, 0]} />
          <meshStandardMaterial color="#ec4899" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={2.2} rotationIntensity={1.1} floatIntensity={2.2}>
        <mesh position={[4, 1, -5]} rotation={[0.4, 0.6, 0.2]}>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#10b981" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={1.6} rotationIntensity={0.7} floatIntensity={1.6}>
        <mesh position={[2, 2.5, -4.5]} rotation={[0.1, 0.4, 0.6]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#f59e0b" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-4, 0.5, -5.5]} rotation={[0.6, 0.2, 0.4]}>
          <coneGeometry args={[0.5, 1, 4]} />
          <meshStandardMaterial color="#ef4444" metalness={0.5} roughness={0.2} />
        </mesh>
      </Float>
    </>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <Environment preset="city" />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} />
          <FloatingShapes />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
