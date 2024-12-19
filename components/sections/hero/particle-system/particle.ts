export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseColor: string;
  alpha: number;
  connections: number[];
}

export function createParticle(id: number, width: number, height: number): Particle {
  return {
    id,
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.1,
    vy: (Math.random() - 0.5) * 0.1,
    radius: Math.random() * 3 + 2,
    baseColor: `hsl(164, 73%, ${50 + Math.random() * 20}%)`,
    alpha: 0.3 + Math.random() * 0.5,
    connections: [],
  };
}

export function updateParticle(
  particle: Particle, 
  width: number, 
  height: number
) {
  // Simple floating movement
  particle.x += particle.vx;
  particle.y += particle.vy;

  // Bounce off walls with dampening
  if (particle.x < 0) {
    particle.x = 0;
    particle.vx *= -0.5;
  } else if (particle.x > width) {
    particle.x = width;
    particle.vx *= -0.5;
  }
  
  if (particle.y < 0) {
    particle.y = 0;
    particle.vy *= -0.5;
  } else if (particle.y > height) {
    particle.y = height;
    particle.vy *= -0.5;
  }

  return particle;
}

export function getParticleColor(
  particle: Particle,
  mouseX: number,
  mouseY: number
): string {
  const dx = mouseX - particle.x;
  const dy = mouseY - particle.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const maxDistance = 200; // Influence radius

  if (distance < maxDistance) {
    // Smoothly interpolate between green and blue based on distance
    const ratio = 1 - (distance / maxDistance);
    const hue = 164 + (ratio * 40); // Shift from 164 (green) towards 204 (blue)
    return `hsl(${hue}, 73%, ${50 + Math.random() * 20}%)`;
  }

  return particle.baseColor;
}