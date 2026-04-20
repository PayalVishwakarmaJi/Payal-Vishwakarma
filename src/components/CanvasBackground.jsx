import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Sphere, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const points = useRef();

  // Create random points for background dust
  const particleCount = 150;
  const positions = useMemo(() => {
    const defaultPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      defaultPositions[i * 3] = (Math.random() - 0.5) * 20; // x
      defaultPositions[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      defaultPositions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
    }
    return defaultPositions;
  }, []);

  useFrame((state) => {
    points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#B59E7D"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const AbstractShapes = () => {
  const group = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 4;
    group.current.position.y = Math.sin(t / 2) / 2;
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[4, 2, -5]}>
          <boxGeometry args={[2, 3, 0.5]} />
          <meshStandardMaterial color="#584738" transparent opacity={0.1} />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-5, -1, -8]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <meshStandardMaterial color="#B59E7D" transparent opacity={0.05} />
        </mesh>
      </Float>
    </group>
  );
};

export default function CanvasBackground() {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#F1EADA']} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#B59E7D" />
        <Particles />
        <AbstractShapes />
        <Environment preset="apartment" />
      </Canvas>
    </div>
  );
}
