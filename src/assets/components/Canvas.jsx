import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../styles/Canvas.css';

const Canvas = () => {
    const containerRef = useRef();
    const particles = [];
    let mouseX = 100;
    let mouseY = 100;
    let camera, scene, renderer;
    const colorBgB = 0xD0D0D;
    const colorTextW = 0xF2F2F2;

    const maxDistance = 100;
    const maxReturnDistance = 50;
    const attractFactor = 0.1;
    const returnFactor = 0.1;
    const scaleFactor = 575; // IMPORTANTE

    const handleWindowResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();

        particles.forEach((particle) => {
            scene.remove(particle);
        });
        particles.length = 0;

        createParticles();
    };
    
    const onMouseMove = (event) => {
        const canvasRect = containerRef.current.getBoundingClientRect();
        mouseX = (event.clientX - canvasRect.left - canvasRect.width / 2) / (canvasRect.width / 2) * scaleFactor;
        mouseY = -(event.clientY - canvasRect.top - canvasRect.height / 2) / (canvasRect.height / 2) * scaleFactor;

        console.log(mouseX, mouseY);
    };
    
    const animate = () => {
        particles.forEach((particle) => {
            const distanceX = mouseX - particle.position.x;
            const distanceY = mouseY - particle.position.y;
            const attractionRadius = 200;

            let alejamientoX = (particle.position.x - particle.initialPosition.x);
            
            let alejamientoY = (particle.position.y - particle.initialPosition.y);

            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (distance < attractionRadius) {
                let normalDistanceX = distanceX / distance;
                let normalDistanceY = distanceY / distance;

                // Atracción hacia el área alrededor del mouse
                let force = attractFactor * (attractionRadius - distance);
                particle.position.x += normalDistanceX * force;
                particle.position.y += normalDistanceY * force;
            } else {
                // Retorno a la posición inicial
                particle.position.x += (particle.initialPosition.x - particle.position.x) * returnFactor;
                particle.position.y += (particle.initialPosition.y - particle.position.y) * returnFactor;
            }
        });
    
        renderer.setClearColor(colorBgB);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };  

    const createParticles = () => {
        const particleCount = 300;
        const particleGeometry = new THREE.CircleGeometry(2, 32);
        const particleColor = colorTextW;

        particles.lenght = 0;

        for (let i = 0; i < particleCount; i++) {
            const material = new THREE.MeshBasicMaterial({ color: particleColor });
            const particle = new THREE.Mesh(particleGeometry, material);
            particle.position.x = Math.random() * containerRef.current.clientWidth - containerRef.current.clientWidth / 2;
            particle.position.y = Math.random() * containerRef.current.clientHeight - containerRef.current.clientHeight / 2;
            particle.position.z = 0
            particle.initialPosition = { x: particle.position.x, y: particle.position.y };
            particles.push(particle);
            scene.add(particle);
        }
        //console.log(particles);
    };

    const init = () => {
        scene = new THREE.Scene();

        const container = containerRef.current;
        const { clientWidth, clientHeight } = container;
        const aspect = clientWidth / clientHeight;

        console.log("Container dimensions: ", clientWidth, clientHeight);

        camera = new THREE.PerspectiveCamera(75, aspect, 1, 10000);
        camera.position.z = 750;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(clientWidth, clientHeight);
        containerRef.current.appendChild(renderer.domElement);

        createParticles();
        animate();
    };

    useEffect(() => {
        init();
        window.addEventListener('resize', handleWindowResize);
        document.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);    

    return (
        <section className="canvas-container">
            <div ref={containerRef}></div>
        </section>
    );
};

export default Canvas;