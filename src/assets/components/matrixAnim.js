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

    let state = 'running';

    setTimeout(() => {
        state = 'stopping';
    }, 5000);

    setTimeout(() => {
        state = 'fading';
    }, 6500);

    function stopAnimation() {
        console.log('stopAnimation called');
        cancelAnimationFrame(animationFrameId);
        context.clearRect(0, 0, container.width, container.height);
        if (document.body.contains(cover)){
            document.body.removeChild(cover);
        }

        const matrix = document.getElementById('matrix');
        if (matrix && matrix.parentNode) {
            console.log('Matrix found, removing...')
            matrix.parentNode.removeChild(matrix);
        } else {
            console.log('Matrix not found');
        }

        const terminalWrapper = document.getElementById('terminal-wrapper');
        if (terminalWrapper && terminalWrapper.parentNode) {
            console.log('Terminal wrapper found, removing...')
            terminalWrapper.parentNode.removeChild(terminalWrapper);
        } else {
            console.log('Terminal wrapper not found');
        }
    }

    function draw() {
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, container.width, container.height);
        context.fillStyle = cText;
        context.font = '1rem monospace';

        if (state === 'fading' && parseFloat(container.style.opacity) > 0) {
            container.style.opacity = parseFloat(container.style.opacity) - 0.01;
            cover.style.opacity = container.style.opacity;
        } else if (state === 'fading' && parseFloat(container.style.opacity) <= 0) {
            stopAnimation();
            return;
        }

        for (let i = 0; i < drops.length; i++) {
            const text = String.fromCharCode(Math.floor(Math.random() * 128));
            context.fillText(text, i * 10, drops[i] * 10);

            if (state === 'running' && drops[i] * 10 >  container.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }

        animationFrameId = requestAnimationFrame(draw); 
    }

    draw();

    return stopAnimation;
}