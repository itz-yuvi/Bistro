'use client';
import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';
import * as THREE from 'three';

const images = [
  { url: '/assets/restro4.jpeg', label: 'Ocean View Dining' },
  { url: '/assets/restro1.jpeg', label: 'Signature Dish' },
  { url: '/assets/restro2.jpeg', label: 'Interior Ambience' },
  { url: '/assets/restro6.jpeg', label: 'Private Lounge' },
  { url: '/assets/restro5.jpeg', label: 'Dessert Art' },
  { url: '/assets/restro9.jpeg', label: 'Wine Selection' },
  { url: '/assets/restro7.jpeg', label: 'Private Lounge' },
  { url: '/assets/restro8.jpeg', label: 'Dessert Art' },
];

const ImagePlane = ({ url, position }) => {
  const texture = useTexture(url);
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 2 : 1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <planeGeometry args={[3, 2]} />
        <meshStandardMaterial map={texture} toneMapped={false} />
      </mesh>
    </group>
  );
};

const CameraRig = () => {
  const { camera } = useThree();
  useFrame(() => {
    camera.position.lerp(new THREE.Vector3(0, 0, 15), 0.05);
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const Gallery = () => {
  const radius = 10;
  const angleStep = (2 * Math.PI) / images.length;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-gray-900 text-white py-16 px-4">
      <h2 className="text-center text-3xl text-pink-400 font-semibold mb-8">
        Explore Our Space in 3D
      </h2>
      <div className="h-[600px] w-full relative pointer-events-none">
        <Canvas
          className="pointer-events-auto"
          camera={{ position: [0, 0, 15], fov: 60 }}
          dpr={[1, 2]}
        >
          {/* Match Testimonials background inside 3D canvas */}
          <color attach="background" args={['#111827']} />
          <ambientLight intensity={1} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <Suspense fallback={<Html center>Loading...</Html>}>
            {images.map((img, index) => {
              const angle = index * angleStep;
              const x = radius * Math.cos(angle);
              const z = radius * Math.sin(angle);
              const y = 2 * Math.sin(angle);
              return (
                <ImagePlane
                  key={index}
                  url={img.url}
                  position={[x, y, z]}
                />
              );
            })}
          </Suspense>
          <OrbitControls
            enableZoom={true}
            enableRotate={true}
            maxDistance={20}
            minDistance={5}
            zoomSpeed={1.2}
          />
          <CameraRig />
        </Canvas>
      </div>
    </section>
  );
};

export default Gallery;
