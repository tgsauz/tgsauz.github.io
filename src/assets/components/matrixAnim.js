import * as THREE from 'three';

export function startMatrixAnimation(container) {
    console.log('startMatrixAnimation called');
    let animationFrameId;
    const columns = container.width / 10;
    console.log('columns: ', columns);
    const drops = [];
    const context = container.getContext('2d');

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const cBg = getComputedStyle(document.documentElement).getPropertyValue('--c-bg').trim();
    const cText = getComputedStyle(document.documentElement).getPropertyValue('--c-text').trim();

    let stopCreatingNewDrops = false;
    let fading = false;
    container.style.opacity = 1;

    const cover = document.createElement('div');
    cover.style.position = 'fixed';
    cover.style.top = 0;
    cover.style.left = 0;
    cover.style.width = '100%';
    cover.style.height = '100%';
    cover.style.backgroundColor = cBg;
    cover.style.zIndex = 10;
    document.body.appendChild(cover);


    setTimeout(() => {
        stopCreatingNewDrops = true;
    }, 5000);

    setTimeout(() => {
        fading = true;
    }, 6500);

    function draw() {
        
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, container.width, container.height);
        context.fillStyle = cText;
        context.font = '1rem monospace';
        
        if (fading && container.style.opacity > 0) {
            container.style.opacity = parseFloat(container.style.opacity) - 0.01;
            cover.style.opacity = container.style.opacity;
        }

        // console.log(drops);
        // Draw each drop
        for (let i = 0; i < drops.length; i++) {
            // console.log('inside each drop')
            const text = String.fromCharCode(Math.floor(Math.random() * 128));

            // console.log(i * 10, drops[i] * 10)
            // console.log(context.fillStyle)
            context.fillText(text, i * 10, drops[i] * 10);

            // Randomly reset drop back to the top
            if (!stopCreatingNewDrops && drops[i] * 10 >  container.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            // Increment y coordinate
            drops[i]++;
        }

        animationFrameId = requestAnimationFrame(draw); 
    }

    draw();


    return () => {
        console.log('stopMatrixAnimation called');
        cancelAnimationFrame(animationFrameId);
        context.clearRect(0, 0, container.width, container.height);
        document.body.removeChild(cover);

        const terminal = document.querySelector('.terminal-wrapper');
        const matrix = document.querySelector('.matrix');

        if (terminal) terminal.parentNode.removeChild(terminal);
        if (matrix) matrix.parentNode.removeChild(matrix);
    }
}