"use client";

import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Coffee machine locations across Saudi Arabia
const coffeeLocations = [
  { id: 1, name: "Riyadh - King Fahd District", position: [0, 0, 0], city: "Riyadh", status: "active" },
  { id: 2, name: "Riyadh - Al Olaya District", position: [0.3, 0, 0.2], city: "Riyadh", status: "active" },
  { id: 3, name: "Jeddah - Al Hamra District", position: [-2.5, 0, -1.2], city: "Jeddah", status: "active" },
  { id: 4, name: "Dammam - Al Faisaliyah", position: [2.8, 0, 0.8], city: "Dammam", status: "active" },
  { id: 5, name: "Mecca - Al Aziziyah", position: [-2.2, 0, -0.8], city: "Mecca", status: "active" },
  { id: 6, name: "Medina - Al Haram District", position: [-1.8, 0, 1.5], city: "Medina", status: "active" },
  { id: 7, name: "Khobar - Corniche", position: [3.2, 0, 1.2], city: "Khobar", status: "active" },
  { id: 8, name: "Taif - Al Shafa", position: [-1.5, 0, -0.3], city: "Taif", status: "maintenance" },
  { id: 9, name: "Abha - City Center", position: [-2.8, 0, -2.1], city: "Abha", status: "active" },
  { id: 10, name: "Tabuk - Prince Fahd District", position: [-1.2, 0, 2.8], city: "Tabuk", status: "active" },
];

// 3D Coffee Machine Component
function CoffeeMachine({ position, isSelected, onClick, location }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;

      // Rotation when hovered or selected
      if (hovered || isSelected) {
        meshRef.current.rotation.y += 0.02;
      }
    }
  });

  const color = location.status === 'active' ? '#ffd700' : '#ff6b6b';
  const emissiveColor = location.status === 'active' ? '#ffab00' : '#ff3333';

  return (
    <group position={position}>
      {/* Coffee Machine Base */}
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={isSelected ? 1.5 : hovered ? 1.2 : 1}
      >
        {/* Main Body */}
        <boxGeometry args={[0.3, 0.4, 0.2]} />
        <meshStandardMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Coffee Cup on Top */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.08, 0.06, 0.1, 16]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Steam Effect */}
      {(hovered || isSelected) && (
        <mesh position={[0, 0.5, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial
            color="#ffffff"
            transparent
            opacity={0.3}
            emissive="#ffffff"
            emissiveIntensity={0.1}
          />
        </mesh>
      )}

      {/* Status Indicator Light */}
      <mesh position={[0.18, 0.15, 0.12]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshStandardMaterial
          color={location.status === 'active' ? '#00ff00' : '#ff0000'}
          emissive={location.status === 'active' ? '#00ff00' : '#ff0000'}
          emissiveIntensity={0.8}
        />
      </mesh>

      {/* City Label */}
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.08}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {location.city}
      </Text>

      {/* Status Label */}
      <Text
        position={[0, 0.7, 0]}
        fontSize={0.05}
        color={location.status === 'active' ? '#00ff00' : '#ff6b6b'}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        {location.status.toUpperCase()}
      </Text>
    </group>
  );
}

// Saudi Arabia Map Outline (Simplified)
function MapOutline() {
  const points = useMemo(() => {
    // Simplified Saudi Arabia border points
    const borderPoints = [
      [-3, 0, -2.5], [-2.5, 0, -2.8], [-1.8, 0, -2.5], [-1.2, 0, -2.8],
      [-0.5, 0, -2.5], [0.2, 0, -2.2], [1.5, 0, -1.8], [2.8, 0, -1.2],
      [3.5, 0, -0.5], [3.8, 0, 0.5], [3.5, 0, 1.5], [3.2, 0, 2.2],
      [2.5, 0, 2.8], [1.8, 0, 3.2], [0.8, 0, 3.5], [-0.2, 0, 3.2],
      [-1.2, 0, 2.8], [-2.2, 0, 2.2], [-2.8, 0, 1.5], [-3.2, 0, 0.8],
      [-3.5, 0, -0.2], [-3.2, 0, -1.2], [-3, 0, -2.5]
    ];
    return borderPoints;
  }, []);

  return (
    <group>
      {/* Map Base */}
      <mesh position={[0, -0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[8, 7]} />
        <meshStandardMaterial
          color="#1a1a2e"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Border Lines */}
      {points.map((point, index) => {
        const nextPoint = points[(index + 1) % points.length];
        const midPoint: [number, number, number] = [
          (point[0] + nextPoint[0]) / 2,
          0.01,
          (point[2] + nextPoint[2]) / 2
        ];
        const distance = Math.sqrt(
          Math.pow(nextPoint[0] - point[0], 2) +
          Math.pow(nextPoint[2] - point[2], 2)
        );

        return (
          <mesh key={index} position={midPoint}>
            <boxGeometry args={[distance, 0.02, 0.02]} />
            <meshStandardMaterial
              color="#ffd700"
              emissive="#ffab00"
              emissiveIntensity={0.2}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Main 3D Map Component
function Map3DScene() {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);

  return (
    <Canvas camera={{ position: [0, 8, 8], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight
        position={[0, 10, 0]}
        angle={Math.PI / 4}
        penumbra={1}
        intensity={0.8}
        color="#ffd700"
      />

      <MapOutline />

      {coffeeLocations.map((location) => (
        <CoffeeMachine
          key={location.id}
          position={location.position}
          location={location}
          isSelected={selectedLocation === location.id}
          onClick={() => setSelectedLocation(
            selectedLocation === location.id ? null : location.id
          )}
        />
      ))}

      <OrbitControls
        enableZoom={true}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.5}
      />
    </Canvas>
  );
}

// Location Details Panel
function LocationDetails({ selectedLocation }: { selectedLocation: any }) {
  if (!selectedLocation) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 text-white max-w-xs"
    >
      <h3 className="text-lg font-bold text-amber-300 mb-2">
        {selectedLocation.name}
      </h3>
      <div className="space-y-2 text-sm">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${
            selectedLocation.status === 'active' ? 'bg-green-400' : 'bg-red-400'
          }`}></div>
          <span className="capitalize">{selectedLocation.status}</span>
        </div>
        <p className="text-gray-300">
          City: <span className="text-amber-200">{selectedLocation.city}</span>
        </p>
        <p className="text-gray-300">
          Status: <span className={`font-semibold ${
            selectedLocation.status === 'active' ? 'text-green-400' : 'text-red-400'
          }`}>
            {selectedLocation.status === 'active' ? 'Operational 24/7' : 'Under Maintenance'}
          </span>
        </p>
      </div>
    </motion.div>
  );
}

// Main Interactive Map Component
export default function InteractiveMap3D() {
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const handleLocationSelect = (location: any) => {
    setSelectedLocation(location);
  };

  return (
    <div className="relative w-full h-96 md:h-[450px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 to-black">
      {/* 3D Map */}
      <Map3DScene />

      {/* Location Details */}
      <LocationDetails selectedLocation={selectedLocation} />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4 text-white">
        <h4 className="text-sm font-semibold text-amber-300 mb-2">Legend</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Active (24/7)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-red-400 rounded-full"></div>
            <span>Maintenance</span>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-2">Click machines to view details</p>
      </div>

      {/* Statistics */}
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-amber-500/30 rounded-xl p-4 text-white">
        <h4 className="text-sm font-semibold text-amber-300 mb-2">Network Status</h4>
        <div className="text-xs space-y-1">
          <div>Total Machines: <span className="text-amber-200 font-semibold">{coffeeLocations.length}</span></div>
          <div>Active: <span className="text-green-400 font-semibold">
            {coffeeLocations.filter(l => l.status === 'active').length}
          </span></div>
          <div>Maintenance: <span className="text-red-400 font-semibold">
            {coffeeLocations.filter(l => l.status === 'maintenance').length}
          </span></div>
        </div>
      </div>
    </div>
  );
}