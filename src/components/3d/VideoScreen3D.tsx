"use client";

import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

interface VideoScreen3DProps {
  videoUrl?: string;
  isHovered: boolean;
  setIsHovered: (v: boolean) => void;
  onTogglePlay?: (playing: boolean) => void;
}

export default function VideoScreen3D({
  videoUrl = "/gemini_generated_video_54fc7eb7.mp4",
  isHovered,
  setIsHovered,
}: VideoScreen3DProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [videoTexture, setVideoTexture] = useState<THREE.VideoTexture | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoElementRef = useRef<HTMLVideoElement | null>(null);

  // Initialize and bind HTML5 video into Three.js VideoTexture
  useEffect(() => {
    if (typeof window === "undefined") return;

    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    // Start playback
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        // Autoplay policy fallback: user click will trigger playback
        console.warn("Autoplay deferred until user interaction", err);
      });
    }

    const texture = new THREE.VideoTexture(video);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.generateMipmaps = false;

    videoElementRef.current = video;
    setVideoTexture(texture);

    return () => {
      video.pause();
      video.src = "";
      texture.dispose();
    };
  }, [videoUrl]);

  // Gentle float & hover tilt spring
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const targetScale = isHovered ? 1.05 : 1.0;
    groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 8);

    // Subtle gentle breathing motion
    const t = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(t * 1.5) * 0.08;
  });

  const togglePlayback = (e: any) => {
    e.stopPropagation();
    if (!videoElementRef.current) return;

    if (videoElementRef.current.paused) {
      videoElementRef.current.play();
      setIsPlaying(true);
    } else {
      videoElementRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHovered(true);
        if (typeof document !== "undefined") document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setIsHovered(false);
        if (typeof document !== "undefined") document.body.style.cursor = "auto";
      }}
      onClick={togglePlayback}
    >
      {/* 3D Monitor Outer Beveled Chassis / Frame */}
      <RoundedBox
        args={[3.3, 2.05, 0.16]}
        radius={0.08}
        smoothness={4}
        position={[0, 0, 0]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          color={isHovered ? "#131b2c" : "#0d131f"}
          roughness={0.25}
          metalness={0.9}
          envMapIntensity={1.8}
        />
      </RoundedBox>

      {/* Cybernetic Golden Accent Edge Trim */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[3.18, 1.94]} />
        <meshBasicMaterial color="#FFB800" wireframe transparent opacity={0.35} />
      </mesh>

      {/* Main 3D Video Screen Display Surface */}
      <mesh position={[0, 0, 0.09]}>
        <planeGeometry args={[3.1, 1.86]} />
        {videoTexture ? (
          <meshBasicMaterial
            map={videoTexture}
            toneMapped={false}
          />
        ) : (
          <meshStandardMaterial
            color="#070b14"
            roughness={0.2}
            metalness={0.8}
          />
        )}
      </mesh>

      {/* Front Glass Reflection & Subtle Protective Glaze */}
      <mesh position={[0, 0, 0.095]}>
        <planeGeometry args={[3.1, 1.86]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.08}
          roughness={0.1}
          metalness={0.1}
          transmission={0.6}
          ior={1.4}
        />
      </mesh>

      {/* Top Webcam / Hologram Sensor Node */}
      <mesh position={[0, 0.96, 0.085]}>
        <sphereGeometry args={[0.025, 16, 16]} />
        <meshStandardMaterial
          color="#38BDF8"
          emissive="#38BDF8"
          emissiveIntensity={2}
        />
      </mesh>

      {/* Stand Base Connector Pillar */}
      <mesh position={[0, -1.15, -0.05]} rotation={[0.2, 0, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.45, 16]} />
        <meshStandardMaterial color="#0b0f19" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Stand Circular Holographic Floating Base */}
      <mesh position={[0, -1.35, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.65, 0.75, 0.06, 32]} />
        <meshStandardMaterial color="#0e1524" roughness={0.2} metalness={0.85} />
      </mesh>

      {/* Base Golden Halo Ring */}
      <mesh position={[0, -1.32, 0.05]} rotation={[-Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.68, 0.015, 16, 48]} />
        <meshBasicMaterial color="#FFB800" transparent opacity={0.6} />
      </mesh>

      {/* Emissive Screen Glow Light into 3D Environment */}
      <pointLight
        color="#FFB800"
        distance={3.8}
        intensity={isHovered ? 3.0 : 1.8}
        position={[0, 0, 0.8]}
      />
    </group>
  );
}
