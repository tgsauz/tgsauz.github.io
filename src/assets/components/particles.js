export function createParticles(context, width, height) {
    const particles = [];
    const mouse = { x: null, y: null };
    const damping = 0.91;
    let amount = 100;

    if (width < 768 || height < 768) {
        amount = 50;
    }
    if (width < 400 || height < 400) {
        amount = 25;
    }

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    for (let i = 0; i < amount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            size: Math.random() * 2 + 3,
        });
    }

    return function animate() {
        context.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            for (let j = i; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p2.x - p.x;
                const dy = p2.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                const minDist = p.size + p2.size;

                if (distance < minDist) {
                    const angle = Math.atan2(dy, dx);
                    const targetX = p.x + Math.cos(angle) * minDist;
                    const targetY = p.y + Math.sin(angle) * minDist;
                    const ax = (targetX - p2.x) * 0.2;
                    const ay = (targetY - p2.y) * 0.2;
                    p.speedX -= ax;
                    p.speedY -= ay;
                    p2.speedX += ax;
                    p2.speedY += ay;
                }
                if (distance < 100){
                    context.beginPath();
                    context.strokeStyle = 'hsl(0, 0%, 95%)';
                    context.lineWidth = 1;
                    context.moveTo(p.x, p.y);
                    context.lineTo(p2.x, p2.y);
                    context.stroke();
                }
            }

            context.beginPath();
            context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            context.fillStyle = 'hsl(0, 0%, 95%)';
            context.fill();

            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distanceSquared = dx * dx + dy * dy;

            
            if (distanceSquared < 300 * 300) {
                
                const distance = Math.sqrt(distanceSquared);
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;
                const force = (distance - 300) / distance * 0.20;

                p.speedX += forceDirectionX * force;
                p.speedY += forceDirectionY * force;
            }

            p.speedX *= damping;
            p.speedY *= damping;

            const minSpeed = 0.3;

            if (Math.abs(p.speedX) < minSpeed) p.speedX = p.speedX < 0 ? -minSpeed : minSpeed;

            if (Math.abs(p.speedY) < minSpeed) p.speedY = p.speedY < 0 ? -minSpeed : minSpeed;

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x > width) p.x = 0;
            if (p.y > height) p.y = 0;
            if (p.x < 0) p.x = width;
            if (p.y < 0) p.y = height;
        }

        requestAnimationFrame(animate);
    };
}