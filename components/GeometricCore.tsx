import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const GeometricCore: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Geometries
    const group = new THREE.Group();
    scene.add(group);

    // Brand Colors
    const blueColor = 0x0055FF;
    const whiteColor = 0xFFFFFF;

    // Outer Icosahedron
    const geo1 = new THREE.IcosahedronGeometry(2, 0);
    const edges1 = new THREE.EdgesGeometry(geo1);
    const mat1 = new THREE.LineBasicMaterial({ color: whiteColor, transparent: true, opacity: 0.1 });
    const mesh1 = new THREE.LineSegments(edges1, mat1);
    group.add(mesh1);

    // Inner Icosahedron (Denser) - TINTED BLUE
    const geo2 = new THREE.IcosahedronGeometry(1.4, 1);
    const edges2 = new THREE.EdgesGeometry(geo2);
    const mat2 = new THREE.LineBasicMaterial({ color: blueColor, transparent: true, opacity: 0.4 });
    const mesh2 = new THREE.LineSegments(edges2, mat2);
    group.add(mesh2);

    // Core Sphere - BLUE GLOW
    const geo3 = new THREE.IcosahedronGeometry(0.8, 2);
    const mat3 = new THREE.MeshBasicMaterial({ color: blueColor, wireframe: true, transparent: true, opacity: 0.2 });
    const mesh3 = new THREE.Mesh(geo3, mat3);
    group.add(mesh3);
    
    // Floating Particles
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);
    
    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 8;
    }
    
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.03,
        color: whiteColor,
        transparent: true,
        opacity: 0.4
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    group.add(particlesMesh);

    camera.position.z = 5;

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
        mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotations
      mesh1.rotation.x += 0.001;
      mesh1.rotation.y += 0.001;

      mesh2.rotation.x -= 0.002;
      mesh2.rotation.y -= 0.002;

      mesh3.rotation.x += 0.004;
      mesh3.rotation.y += 0.004;

      particlesMesh.rotation.y += 0.0005;

      // Mouse Parallax with damping
      group.rotation.y += (mouseX * 0.5 - group.rotation.y) * 0.05;
      group.rotation.x += (-mouseY * 0.5 - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geo1.dispose(); edges1.dispose(); mat1.dispose();
      geo2.dispose(); edges2.dispose(); mat2.dispose();
      geo3.dispose(); mat3.dispose();
      particlesGeo.dispose(); particlesMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" />;
};

export default GeometricCore;