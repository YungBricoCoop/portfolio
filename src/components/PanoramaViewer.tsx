// react
import React, { useState, useEffect, useRef } from 'react';

// three.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// functions
const calculateViewerHeight = (width: number) => {
    const maxWidth = 1440;
    const minHeight = 400;
    const maxHeight = 700;

    if (width > maxWidth) return maxHeight;
    const scale = (width - minHeight) / (maxWidth - minHeight);
    return Math.round(scale * (maxHeight - minHeight) + minHeight);
};

const PanoramaViewer: React.FC = () => {
    const images = [
        'panorama/panorama2.png',
        'panorama/panorama1.png',
        'panorama/panorama3.png',
    ];

    const width = window.innerWidth;
    const height = calculateViewerHeight(width);

    //  refs
    const containerRef = useRef<HTMLDivElement>(null);

    // states
    const [currentImage, setCurrentImage] = useState(0);

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
        const texture = loader.load(images[currentImage]);

        // add lightnings
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 1).normalize();
        scene.add(directionalLight);

        // create a sphere geometry
        const geometry = new THREE.SphereGeometry(500, 40, 40);

        geometry.scale(-1, 1, 1);

        const material = new THREE.MeshBasicMaterial({
            map: texture,
        });

        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        camera.position.set(0, 0, 1);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.rotateSpeed = 0.1;

        const onWindowResize = () => {
            const newWidth = window.innerWidth;
            const newHeight = calculateViewerHeight(newWidth);

            // update camera and renderer with new width and height
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
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
    }, [currentImage]);

    return (
        <div className='relative my-16'>
            <div ref={containerRef} />
            <div
                className='absolute top-0 left-0 right-0 text-center px-8 py-2 text-white border-t-2 border-white border-opacity-5 bg-white bg-opacity-5 backdrop-blur-sm cursor-pointer'
                onClick={() =>
                    setCurrentImage((currentImage + 1) % images.length)
                }
            >
                <h1 className='font-bold text-xl md:text-3xl cursor-pointer'>
                    Explore my mind
                </h1>
                <h2 className='md:hidden font-medium text-xl italic'>
                    Use your finger to move around
                </h2>
                <h2 className='hidden md:block font-medium text-xl italic'>
                    Use your mouse to move around
                </h2>
                <div className='absolute right-0 top-0 p-2'>
                    <span className='text-white text-sm text-opacity-50 font-bold'>
                        {currentImage + 1}/{images.length}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PanoramaViewer;
