"use client";

import dynamic from 'next/dynamic';
import React from 'react';

// Create the actual 3D scene component that will only run on client
const Scene3D = dynamic(
  () => {
    return import('./Scene3DClient');
  },
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center text-white bg-black">
        Loading 3D Scene...
      </div>
    ),
  }
);

export default function ThreeScene(props: any) {
  return <Scene3D {...props} />;
}