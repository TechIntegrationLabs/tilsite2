import { Particle, Point, ParticleConfig } from "../types";
import { getParticleColor } from "../utils/particle-physics";

export function renderParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  mousePos: Point,
  config: ParticleConfig
): void {
  particles.forEach(particle => {
    const color = getParticleColor(
      particle,
      mousePos,
      config.colorChangeRadius,
      config.baseHue,
      config.hueShift
    );

    const gradient = ctx.createRadialGradient(
      particle.position.x,
      particle.position.y,
      0,
      particle.position.x,
      particle.position.y,
      particle.radius * 2
    );

    gradient.addColorStop(0, color.replace('hsl', 'hsla').replace(')', `, ${particle.alpha})`));
    gradient.addColorStop(1, color.replace('hsl', 'hsla').replace(')', ', 0)'));

    ctx.beginPath();
    ctx.arc(
      particle.position.x,
      particle.position.y,
      particle.radius * 2,
      0,
      Math.PI * 2
    );
    ctx.fillStyle = gradient;
    ctx.fill();
  });
}

export function renderConnections(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  mousePos: Point,
  config: ParticleConfig
): void {
  ctx.lineWidth = 1;

  particles.forEach(particle => {
    particle.connections.forEach(connectionId => {
      const connectedParticle = particles[connectionId];
      if (!connectedParticle) return;

      const distance = Math.sqrt(
        Math.pow(connectedParticle.position.x - particle.position.x, 2) +
        Math.pow(connectedParticle.position.y - particle.position.y, 2)
      );

      if (distance < config.connectionDistance) {
        const opacity = 0.5 * (1 - distance / config.connectionDistance);
        const color = getParticleColor(
          particle,
          mousePos,
          config.colorChangeRadius,
          config.baseHue,
          config.hueShift
        );

        ctx.strokeStyle = color.replace('hsl', 'hsla').replace(')', `, ${opacity})`);
        ctx.beginPath();
        ctx.moveTo(particle.position.x, particle.position.y);
        ctx.lineTo(connectedParticle.position.x, connectedParticle.position.y);
        ctx.stroke();
      }
    });
  });
}