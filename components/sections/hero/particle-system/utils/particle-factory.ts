import { Particle, ParticleConfig, Point } from "../types";

export function createParticle(
  id: number,
  bounds: { width: number; height: number },
  config: ParticleConfig
): Particle {
  return {
    id,
    position: {
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height,
    },
    velocity: {
      x: (Math.random() - 0.5) * config.velocityFactor,
      y: (Math.random() - 0.5) * config.velocityFactor,
    },
    radius: config.minRadius + Math.random() * (config.maxRadius - config.minRadius),
    baseColor: `hsl(${config.baseHue}, 73%, ${50 + Math.random() * 20}%)`,
    alpha: config.minAlpha + Math.random() * (config.maxAlpha - config.minAlpha),
    connections: [],
  };
}

export function initializeParticleConnections(
  particles: Particle[],
  config: ParticleConfig
): Particle[] {
  return particles.map(particle => ({
    ...particle,
    connections: findNearestParticles(particle, particles, config.maxConnections)
  }));
}

function findNearestParticles(
  particle: Particle,
  particles: Particle[],
  maxConnections: number
): number[] {
  return particles
    .filter(p => p.id !== particle.id)
    .map(p => ({
      id: p.id,
      distance: getDistance(particle.position, p.position)
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxConnections)
    .map(p => p.id);
}

export function getDistance(p1: Point, p2: Point): number {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}