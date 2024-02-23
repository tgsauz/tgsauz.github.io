import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { startMatrixAnimation } from "./matrixAnim.js";

import "../styles/typewriter.css";

const Terminal = ({ onFinished }) => {

    const element = useRef(null);

    const [typingFinished, setTypingFinished] = useState(false);

    const canvasRef = useRef(null);

    const messages = [
        'initializing system^250',
        'entering the kernel^200.^200.^200.',
        'accessing mainframe^500',
        'decrypting data files^500.^500.^500.',
        'loading modules^200.^200.^200.',
        'starting application^150',
        'Welcome!^500',
    ];

    const terminalWrapper = document.querySelector('.terminal-wrapper');

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: [messages.join("\n")],
            typeSpeed: 10,
            showCursor: true,
            cursorChar: "|",
            fadeOut: false,
            loop: false,
            onComplete: () => {
                onFinished();
                setTimeout(() => setTypingFinished(true), 100);
            },
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        if (typingFinished && canvasRef.current) {
            console.log("canvasRef.current: ", canvasRef.current)
            const container = canvasRef.current;
            container.width = window.innerWidth;
            container.height = window.innerHeight;
            const stopMatrixAnimation = startMatrixAnimation(container);
    
            setTimeout(stopMatrixAnimation, 7500);
        }
    }, [typingFinished]);

    useEffect(() => {
        if (typingFinished) {
            const container = canvasRef.current;
            if (!container) return;
    
            let animationFrameId;
            let previousWidth = window.innerWidth;
            let previousHeight = window.innerHeight;
            container.width = window.innerWidth;
            container.height = window.innerHeight;
            const ctx = container.getContext('2d');
            
            const handleResize = () => {
                const width = window.innerWidth;
                const height = window.innerHeight;
    
                if (Math.abs(width - previousWidth) > 10 || Math.abs(height - previousHeight) > 10) {
                    cancelAnimationFrame(animationFrameId);
                    container.width = width;
                    container.height = height;
                    const animate = startMatrixAnimation(container);
                    animationFrameId = animate();
                    previousWidth = width;
                    previousHeight = height;
                }
            };

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
        }
    
        return () => {
            window.removeEventListener('resize', throttledHandleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);
    
    return (
        <>
            <div className={`terminal-wrapper  ${typingFinished ? "hidden" : ""}`}
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.25rem",
                fontFamily: "monospace",
            }} ref={element}>
            </div>
            <canvas ref={canvasRef} className="matrix" />
        </>
    )
    
};
export default Terminal