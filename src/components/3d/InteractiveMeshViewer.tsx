"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface InteractiveMeshViewerProps {
  shadingMode: "textured" | "wireframe" | "clay";
  polyLevel: "low" | "mid" | "high";
}

function Stylized3DAsset({
  shadingMode,
}: {
  shadingMode: "textured" | "wireframe" | "clay";
}) {
  const meshGroup = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!meshGroup.current) return;
    // Gentle ambient turntable rotation
    meshGroup.current.rotation.y += delta * 0.45;
  });

  const isWireframe = shadingMode === "wireframe";
  const isClay = shadingMode === "clay";

  return (
    <group ref={meshGroup} position={[0, 0, 0]}>
      {/* Central Geometric Core / Helmet Crown */}
      <mesh castShadow receiveShadow position={[0, 0.2, 0]}>
        <octahedronGeometry args={[1.3, 2]} />
        {isClay ? (
          <meshStandardMaterial color="#e2e8f0" roughness={0.7} metalness={0.05} />
        ) : isWireframe ? (
          <meshStandardMaterial color="#9333ea" wireframe />
        ) : (
          <meshStandardMaterial
            color="#1e1b2e"
            roughness={0.25}
            metalness={0.85}
          />
        )}
      </mesh>

      {/* Cybernetic Visor Plate */}
      <mesh position={[0, 0.25, 0.85]} rotation={[-0.2, 0, 0]}>
        <boxGeometry args={[1.2, 0.45, 0.3]} />
        {isClay ? (
          <meshStandardMaterial color="#cbd5e1" roughness={0.8} />
        ) : isWireframe ? (
          <meshStandardMaterial color="#f59e0b" wireframe />
        ) : (
          <meshStandardMaterial
            color="#FFB800"
            emissive="#FFB800"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
          />
        )}
      </mesh>

      {/* Side Intake Cowlings */}
      <group position={[-1.0, 0.1, 0]}>
        <RoundedBox args={[0.35, 0.9, 0.8]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color={isClay ? "#94a3b8" : isWireframe ? "#6366f1" : "#0f172a"}
            wireframe={isWireframe}
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>
      </group>
      <group position={[1.0, 0.1, 0]}>
        <RoundedBox args={[0.35, 0.9, 0.8]} radius={0.08} smoothness={4}>
          <meshStandardMaterial
            color={isClay ? "#94a3b8" : isWireframe ? "#6366f1" : "#0f172a"}
            wireframe={isWireframe}
            roughness={0.3}
            metalness={0.8}
          />
        </RoundedBox>
      </group>

      {/* Orbiting Halo Ring */}
      <mesh rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[1.8, 0.03, 16, 64]} />
        <meshStandardMaterial
          color={isClay ? "#94a3b8" : "#9333ea"}
          wireframe={isWireframe}
          emissive={isClay ? "#000000" : "#a855f7"}
          emissiveIntensity={isClay ? 0 : 1.2}
        />
      </mesh>
    </group>
  );
}

export default function InteractiveMeshViewer({
  shadingMode,
  polyLevel,
}: InteractiveMeshViewerProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1.2, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="w-full h-full cursor-grab active:cursor-grabbing"
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 6, 4]} intensity={2.2} castShadow />
      <directionalLight position={[-4, 3, -3]} intensity={1.2} color="#c084fc" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <Stylized3DAsset shadingMode={shadingMode} />
      </Float>

      <ContactShadows
        position={[0, -1.6, 0]}
        opacity={0.35}
        scale={7}
        blur={2}
        far={3.5}
        color="#334155"
      />

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2.5}
        maxDistance={6.5}
        autoRotate={false}
        dampingFactor={0.05}
      />
    </Canvas>
  );
}
