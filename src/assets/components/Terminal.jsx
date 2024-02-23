import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { startMatrixAnimation } from "./matrixAnim.js";

import "../styles/Terminal.css";

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

    const [currentText, setCurrentText] = useState("");
    let index = 0;
    let messageIndex = 0;

    const typeNextCharacter = () => {
        if (messageIndex === messages.length) return;

        const message = messages[messageIndex];
        if (index < message.length) {
            setCurrentText(prev => prev + message[index]);
            index++;
        } else {
            messageIndex++;
            index = 0;
        }

        setTimeout(typeNextCharacter, 100); // 100ms delay

    };

    useEffect(() => {
        typeNextCharacter();
    }, []);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: [messages.join("\n")],
            typeSpeed: 10,
            showCursor: false,
            fadeOut: false,
            loop: false,
            onComplete: () => {
                console.log("onComplete");
                onFinished();
                setTimeout(() => setTypingFinished(true), 100);
            },
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const stopMatrixAnimationRef = useRef(null);

    useEffect(() => {
        if (typingFinished && canvasRef.current) {
            console.log("canvasRef.current: ", canvasRef.current)
            const container = canvasRef.current;
            container.width = window.innerWidth;
            container.height = window.innerHeight;
            stopMatrixAnimationRef.current = startMatrixAnimation(container);
        }
    }, [typingFinished]);

    useEffect(() => {
        return () => {
            if (stopMatrixAnimationRef.current) {
                stopMatrixAnimationRef.current();
            }
        };
    }, []);
    
    return (
        <>
            <div id="terminal-wrapper" className={`terminal-wrapper  ${typingFinished ? "hidden" : ""}`}
            style={{
                backgroundColor: "black",
                color: "white",
                padding: "0.25rem",
                fontFamily: "monospace",
            }} ref={element}>
            </div>
            <canvas ref={canvasRef} id="matrix" className="matrix" />
        </>
    )
    
};
export default Terminal