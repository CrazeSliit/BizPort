'use client';

import React from 'react';

interface ProjectsProps {
  theme: 'light' | 'dark';
}

export default function Projects({ theme }: ProjectsProps) {
  return (
    <section id="projects">
      <div className="py-20 text-center">
        <h2>Projects Section - Coming Soon</h2>
      </div>
    </section>
  );
}
