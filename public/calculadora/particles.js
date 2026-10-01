const Particles = (function() {
  const canvas = document.getElementById('particles');
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: -1000, y: -1000 };
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle(x, y, type) {
    const angle = Math.random() * Math.PI * 2;
    const speed = type === 'burst' ? (Math.random() * 4 + 2) : (Math.random() * 0.5 + 0.1);
    return {
      x: x || Math.random() * canvas.width,
      y: y || Math.random() * canvas.height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      size: type === 'burst' ? (Math.random() * 3 + 1) : (Math.random() * 2 + 0.5),
      alpha: type === 'burst' ? 1 : (Math.random() * 0.5 + 0.1),
      life: type === 'burst' ? 1 : 0,
      type: type || 'ambient'
    };
  }

  function init(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(createParticle(null, null, 'ambient'));
    }
  }

  function burst(x, y, count, color) {
    for (let i = 0; i < count; i++) {
      const p = createParticle(x, y, 'burst');
      p.color = color || '#00d4ff';
      particles.push(p);
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles = particles.filter(p => {
      if (p.type === 'burst') {
        p.life -= 0.02;
        p.alpha = p.life;
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.98;
        p.vy *= 0.98;

        if (p.life <= 0) return false;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', `, ${p.alpha})`).replace('rgb', 'rgba');
        ctx.fill();
        return true;
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 150) {
        const force = (150 - dist) / 150;
        p.vx -= dx * force * 0.0003;
        p.vy -= dy * force * 0.0003;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(100, 100, 150, ${p.alpha * 0.5})`;
      ctx.fill();

      return true;
    });

    animationId = requestAnimationFrame(draw);
  }

  function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

  function start() {
    resize();
    init(60);
    draw();
    window.addEventListener('resize', () => {
      resize();
    });
    document.addEventListener('mousemove', onMouseMove);
  }

  function stop() {
    cancelAnimationFrame(animationId);
    document.removeEventListener('mousemove', onMouseMove);
  }

  return { start, stop, burst };
})();

Particles.start();
