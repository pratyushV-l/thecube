'use client'

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Cubelet = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Cube = () => {
  const cubeRef = useRef();

  useFrame(() => {
    cubeRef.current.rotation.y += 0.01;
  });

  const colors = ['white', 'yellow', 'blue', 'green', 'red', 'orange'];
  const positions = [
    // Define positions for the 3x3x3 cubelets
    [-1, -1, -1], [0, -1, -1], [1, -1, -1],
    [-1, 0, -1], [0, 0, -1], [1, 0, -1],
    [-1, 1, -1], [0, 1, -1], [1, 1, -1],
    [-1, -1, 0], [0, -1, 0], [1, -1, 0],
    [-1, 0, 0], [0, 0, 0], [1, 0, 0],
    [-1, 1, 0], [0, 1, 0], [1, 1, 0],
    [-1, -1, 1], [0, -1, 1], [1, -1, 1],
    [-1, 0, 1], [0, 0, 1], [1, 0, 1],
    [-1, 1, 1], [0, 1, 1], [1, 1, 1],
  ];

  return (
    <group ref={cubeRef}>
      {positions.map((pos, index) => (
        <Cubelet key={index} position={pos} color={colors[index % 6]} />
      ))}
    </group>
  );
};

const CubeCanvas = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
      <OrbitControls />
    </Canvas>
  );
};

export default CubeCanvas;