// react
import React, { useEffect, useRef } from 'react';

// three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const PanoramaViewer: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    // remove scrollbar width from window width
    const scrollBarWidth = /*  window.innerWidth - document.body.clientWidth */ 8;
    const width = window.innerWidth - scrollBarWidth;
    const height = 600;

    useEffect(() => {
        const container = containerRef.current!;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            // fov, aspect, near, far
            90,
            width / height,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(width, height);
        container.appendChild(renderer.domElement);

        const loader = new THREE.TextureLoader();
        // load the panorama image
        const texture = loader.load('/panorama.jpg');

        // create a sphere geometry
        const geometry = new THREE.SphereGeometry(500, 40, 40);

        geometry.scale(-1, 1, 1);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.set(0, 0, 10);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.1;

        const onWindowResize = () => {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        const onScroll = () => {
            const currentScrollPosition = window.scrollY;
            const scrollDirectionMultiplier =
                currentScrollPosition > previousScrollPosition ? 1 : -1;
            scrollOffset = currentScrollPosition / 100000;
            sphere.rotation.y += scrollOffset * scrollDirectionMultiplier;

            previousScrollPosition = currentScrollPosition;
        };

        window.addEventListener('scroll', onScroll);
        window.addEventListener('resize', onWindowResize, false);

        let lastTime = 0;
        let scrollOffset = 0;
        let previousScrollPosition = 0;
        const rotationSpeed = 0.00004;

        const animate = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;
            requestAnimationFrame(animate);
            sphere.rotation.y += rotationSpeed * delta;

            controls.update();
            renderer.render(scene, camera);
        };

        animate(0);

        return () => {
            window.removeEventListener('resize', onWindowResize);
            window.removeEventListener('scroll', onScroll);
            container.removeChild(renderer.domElement);
            renderer.dispose();
            material.dispose();
            geometry.dispose();
        };
    }, []);

    return <div ref={containerRef} />;
};

export default PanoramaViewer;
