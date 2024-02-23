import React, { useEffect, useRef, useState } from "react";
import { startMatrixAnimation } from "./matrixAnim.js";

import "../styles/Terminal.css";

const Terminal = ({ onFinished }) => {

    const element = useRef(null);

    const [typingFinished, setTypingFinished] = useState(false);

    const canvasRef = useRef(null);

    const messages = [
       { text: 'initializing system', delay: 500 },
       { text: 'finding the repository', delay: 0 },
       { text: 'connecting to tgsauz\'s server', delay: 0 },
       { text: 'accessing tgsauz\'s memory', delay: 0 },
       { text: 'decrypting cuzco\'s database', delay: 500 },
       { text: 'loading resources...', delay: 250 },
       { text: 'the milky\'s blessing is missing', delay: 0 },
       { text: 'continuing anyways...', delay: 0 },
       { text: 'loading modules', delay: 0 },
       { text: 'starting application', delay: 0 },
       { text: 'waiting for chalo\'s approval', delay: 500 },
       { text: 'chalo\'s approval granted', delay: 0 },
       { text: 'Welcome!', delay: 0 },
    ];

    let index = -1;
    let messageIndex = 0;

    const [text, setText] = useState(""); // Add this state variable to store the entire text

    useEffect(() => {
        if (text.endsWith(messages[messages.length - 1].text + "\n█")) {
            setTypingFinished(true);
            onFinished(); // Call the onFinished prop when typing is finished
        }
    }, [text]);

    const typeNextCharacter = () => {
        if (messageIndex >= messages.length) {
            return;
        }
    
        index++; // Increment index at the start of the function

        const message = messages[messageIndex].text;
        if (index < message.length) {
            setText(prevText => prevText.replace(/█$/, '') + message[index] + '█'); // Append character to text and cursor
        } else {
            setText(prevText => prevText.replace(/█$/, '') + "\n█"); // Append newline to text and cursor
            messageIndex++;
            index = -1; // Reset index to -1
            if (messageIndex < messages.length) { // Add this check
                setTimeout(typeNextCharacter, messages[messageIndex].delay); // Use delay from message
            }
            return; // Return to prevent the next setTimeout call
        }
    
        setTimeout(typeNextCharacter, 0); // 20ms delay
    };

    useEffect(() => {
        typeNextCharacter();
    }, []);

    const stopMatrixAnimationRef = useRef(null);

    useEffect(() => {
        if (typingFinished && canvasRef.current) {
            const container = canvasRef.current;
            if (typeof window !== "undefined"){
                container.width = window.innerWidth;
                container.height = window.innerHeight;
            }
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
                {text}
            </div>
            <canvas ref={canvasRef} id="matrix" className="matrix" />
        </>
    )
    
};
export default Terminal