"use client";

import React, { useRef, useState, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import VideoScreen3D from "./VideoScreen3D";

// Orbiting Quantum Ring with glowing nodes
function OrbitingRing({
  radius,
  speed,
  tilt,
  color,
}: {
  radius: number;
  speed: number;
  tilt: [number, number, number];
  color: string;
}) {
  const ringRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ringRef.current) return;
    const t = state.clock.getElapsedTime() * speed;
    ringRef.current.rotation.z = t;
  });

  return (
    <group rotation={tilt}>
      <group ref={ringRef}>
        {/* Fine Orbit Track */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.012, 16, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.35} />
        </mesh>
        {/* Orbiting Satellite Sphere */}
        <mesh position={[radius, 0, 0]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2.5}
            roughness={0.1}
          />
        </mesh>
      </group>
    </group>
  );
}

// Cybernetic Floating Particles Cloud
function ParticleDust({ count = 45 }: { count?: number }) {
  const points = useMemo(() => {
    const coords = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      coords[i * 3] = (Math.random() - 0.5) * 8;
      coords[i * 3 + 1] = (Math.random() - 0.5) * 5;
      coords[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return coords;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[points, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#F59E0B"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Parallax Controller with smooth lerp
function SceneParallaxRig({ children }: { children: React.ReactNode }) {
  const rigRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state, delta) => {
    if (!rigRef.current) return;
    // Lerp rotation smoothly based on cursor coordinates
    const targetX = mouse.y * 0.28;
    const targetY = mouse.x * 0.45;

    rigRef.current.rotation.x = THREE.MathUtils.lerp(
      rigRef.current.rotation.x,
      targetX,
      delta * 3.5
    );
    rigRef.current.rotation.y = THREE.MathUtils.lerp(
      rigRef.current.rotation.y,
      targetY,
      delta * 3.5
    );
  });

  return <group ref={rigRef}>{children}</group>;
}

export default function HeroScene() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {/* Dynamic Lighting Setup */}
      <ambientLight intensity={0.6} />
      {/* Warm Golden Key Light */}
      <directionalLight
        position={[4, 6, 5]}
        intensity={2.2}
        color="#FFE5A3"
        castShadow
      />
      {/* Obsidian Cool Rim Light */}
      <directionalLight
        position={[-5, 3, -4]}
        intensity={1.8}
        color="#38BDF8"
      />
      {/* Warm Bottom Fill Light */}
      <pointLight position={[0, -2, 2]} intensity={1.2} color="#FFB800" />

      {/* Main Parallax Rig */}
      <SceneParallaxRig>
        <Float
          speed={1.8}
          rotationIntensity={0.2}
          floatIntensity={0.4}
          floatingRange={[-0.08, 0.08]}
        >
          {/* Main 3D Video Cyber Screen Stage */}
          <group position={[0, 0.2, 0]} rotation={[0.08, -0.15, 0.02]}>
            <VideoScreen3D
              videoUrl="/gemini_generated_video_54fc7eb7.mp4"
              isHovered={isHovered}
              setIsHovered={setIsHovered}
            />

            {/* Orbiting Quantum Rings */}
            <OrbitingRing
              radius={2.3}
              speed={0.6}
              tilt={[0.3, 0.2, 0.4]}
              color="#FFB800"
            />
            <OrbitingRing
              radius={2.7}
              speed={-0.45}
              tilt={[-0.4, 0.3, -0.3]}
              color="#38BDF8"
            />
          </group>
        </Float>
      </SceneParallaxRig>

      {/* Ambient Cyber Dust */}
      <ParticleDust count={50} />

      {/* Ground Shadows */}
      <ContactShadows
        position={[0, -1.9, 0]}
        opacity={0.65}
        scale={8.5}
        blur={2.5}
        far={4.5}
        color="#030712"
      />
    </>
  );
}
