"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ScrollJewelScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(36, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.setAttribute("aria-label", "Animated 3D crystal jewelry scene");
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const crystalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transmission: 0.62,
      thickness: 0.9,
      roughness: 0.04,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
      ior: 1.9,
      transparent: true,
      opacity: 0.5,
    });
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xd6ad5a,
      metalness: 0.88,
      roughness: 0.18,
    });
    const emeraldMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x0d6752,
      transmission: 0.25,
      roughness: 0.08,
      metalness: 0.05,
      transparent: true,
      opacity: 0.55,
    });

    const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(1.55, 2), crystalMaterial);
    diamond.scale.set(1.2, 1.2, 0.84);
    group.add(diamond);

    const halo = new THREE.Mesh(new THREE.TorusGeometry(2.38, 0.035, 18, 128), goldMaterial);
    halo.rotation.x = Math.PI / 2.35;
    group.add(halo);

    const secondHalo = new THREE.Mesh(new THREE.TorusGeometry(1.82, 0.022, 18, 128), goldMaterial);
    secondHalo.rotation.x = Math.PI / 2.8;
    secondHalo.rotation.y = Math.PI / 7;
    group.add(secondHalo);

    const gemGeometry = new THREE.OctahedronGeometry(0.16, 1);
    for (let i = 0; i < 18; i += 1) {
      const gem = new THREE.Mesh(gemGeometry, i % 4 === 0 ? emeraldMaterial : crystalMaterial);
      const angle = (i / 18) * Math.PI * 2;
      gem.position.set(Math.cos(angle) * 2.36, Math.sin(angle) * 0.42, Math.sin(angle) * 0.9);
      gem.scale.setScalar(i % 4 === 0 ? 0.82 : 0.62);
      group.add(gem);
    }

    scene.add(new THREE.AmbientLight(0xffffff, 2.4));
    const key = new THREE.DirectionalLight(0xfff0cf, 3.2);
    key.position.set(4, 4, 7);
    scene.add(key);
    const rim = new THREE.PointLight(0x0d6752, 1.25, 16);
    rim.position.set(-4, -2, 4);
    scene.add(rim);

    let scrollProgress = 0;
    const setScroll = () => {
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      scrollProgress = window.scrollY / maxScroll;
      document.documentElement.style.setProperty("--scroll-spin", `${scrollProgress * 180}deg`);
      document.documentElement.style.setProperty("--scroll-tilt", `${scrollProgress * 70}deg`);
      document.documentElement.style.setProperty("--diamond-fall", `${scrollProgress * 420}px`);
    };

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      group.position.x = window.innerWidth < 760 ? 0.85 : 2.55;
      group.position.y = window.innerWidth < 760 ? -0.25 : 0.08;
      group.scale.setScalar(window.innerWidth < 760 ? 0.62 : 0.92);
    };

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = performance.now() * 0.001;
      group.rotation.x = 0.28 + scrollProgress * 1.25 + Math.sin(t * 0.45) * 0.04;
      group.rotation.y = -0.44 + scrollProgress * 4.15 + Math.cos(t * 0.35) * 0.06;
      group.rotation.z = scrollProgress * 0.82;
      group.position.z = -0.35 - scrollProgress * 1.5;
      diamond.rotation.y = t * 0.22 + scrollProgress * 1.8;
      halo.rotation.z = t * 0.12 + scrollProgress * 2.8;
      secondHalo.rotation.z = -t * 0.16 - scrollProgress * 2.1;
      renderer.render(scene, camera);
    };

    setScroll();
    resize();
    animate();

    window.addEventListener("scroll", setScroll, { passive: true });
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("scroll", setScroll);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
      renderer.dispose();
      diamond.geometry.dispose();
      halo.geometry.dispose();
      secondHalo.geometry.dispose();
      gemGeometry.dispose();
      crystalMaterial.dispose();
      goldMaterial.dispose();
      emeraldMaterial.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} className="jewel-scene" aria-hidden="true">
      <div className="css-jewel">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="diamond-rain">
        {Array.from({ length: 10 }).map((_, index) => (
          <i key={index} />
        ))}
      </div>
    </div>
  );
}
