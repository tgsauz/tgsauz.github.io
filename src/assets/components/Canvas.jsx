import React, { useEffect, useRef } from "react";
import { createParticles } from './particles';
import * as THREE from "three";

import "../styles/Canvas.css";

const Canvas = () => {
    
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let previousWidth = window.innerWidth;
        let previousHeight = window.innerHeight;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const animate = createParticles(ctx, window.innerWidth, window.innerHeight);
        animationFrameId = animate();
        
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            if (Math.abs(width - previousWidth) > 10 || Math.abs(height - previousHeight) > 10) {
                cancelAnimationFrame(animationFrameId);
                canvas.width = width;
                canvas.height = height;
                const animate = createParticles(ctx, width, height);
                animationFrameId = animate();
                previousWidth = width;
                previousHeight = height;
            }
        }
        
        let resizeTimeout;
        const throttledHandleResize = () => {
            if (!resizeTimeout) {
                resizeTimeout = setTimeout(() => {
                    resizeTimeout = null;
                    handleResize();
                }, 500);
            }
        }
        
        cancelAnimationFrame(animationFrameId);
        handleResize();

        window.addEventListener('resize', throttledHandleResize);

            return () => {
                window.removeEventListener('resize', throttledHandleResize);
                cancelAnimationFrame(animationFrameId);

            };
    }, []);

    return (
        <section className="canvas-container">
            <canvas ref={canvasRef} />
        </section>
        );
    };
    
    export default Canvas;