"use client";

import React from 'react';

// 1. Grid Particles (Static)
export const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 opacity-10 dark:opacity-20" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--accent) 1.5px, transparent 0)`,
          backgroundSize: '48px 48px' 
        }} 
      />
      <div className="absolute inset-0 bg-linear-to-b from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 2. Flowing Curves (Static)
export const FlowBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20">
        <div className="absolute w-[600px] h-[600px] rounded-full rotate-45"
             style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%)', border: '1px solid rgba(var(--accent-rgb), 0.2)' }} />
        <div className="absolute w-[800px] h-[800px] rounded-full rotate-[120deg]"
             style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.05) 0%, transparent 60%)', border: '1px solid rgba(var(--accent-rgb), 0.2)' }} />
      </div>
      <div className="absolute inset-0 bg-linear-to-t from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 3. Interactive Matrix Spark (Static)
export const SparkBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] rounded-full mix-blend-screen"
             style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 bg-linear-to-b from-white dark:from-gray-950 via-transparent to-white dark:to-gray-950" />
    </div>
  );
};

// 4. Gradient Orbs (Static)
export const OrbBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-30">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] rounded-full"
           style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }} />
    </div>
  );
};


