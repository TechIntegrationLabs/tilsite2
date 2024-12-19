import { Particle, Point } from "../types";

export function updateParticlePosition(
  particle: Particle,
  bounds: { width: number; height: number }
): Particle {
  const newPosition = {
    x: particle.position.x + particle.velocity.x,
    y: particle.position.y + particle.velocity.y,
  };

  const newVelocity = { ...particle.velocity };

  // Bounce off walls with dampening
  if (newPosition.x < 0 || newPosition.x > bounds.width) {
    newVelocity.x *= -0.5;
    newPosition.x = newPosition.x < 0 ? 0 : bounds.width;
  }

  if (newPosition.y < 0 || newPosition.y > bounds.height) {
    newVelocity.y *= -0.5;
    newPosition.y = newPosition.y < 0 ? 0 : bounds.height;
  }

  return {
    ...particle,
    position: newPosition,
    velocity: newVelocity,
  };
}

export function getParticleColor(
  particle: Particle,
  mousePos: Point,
  colorChangeRadius: number,
  baseHue: number,
  hueShift: number
): string {
  const distance = getDistanceToMouse(particle.position, mousePos);
  
  if (distance < colorChangeRadius) {
    const ratio = 1 - (distance / colorChangeRadius);
    const hue = baseHue + (ratio * hueShift);
    return `hsl(${hue}, 73%, ${50 + Math.random() * 20}%)`;
  }

  return particle.baseColor;
}

function getDistanceToMouse(particlePos: Point, mousePos: Point): number {
  return Math.sqrt(
    Math.pow(mousePos.x - particlePos.x, 2) + 
    Math.pow(mousePos.y - particlePos.y, 2)
  );
}