export interface Point {
  x: number;
  y: number;
}

export interface Particle {
  id: number;
  position: Point;
  velocity: Point;
  radius: number;
  baseColor: string;
  alpha: number;
  connections: number[];
}

export interface ParticleConfig {
  minRadius: number;
  maxRadius: number;
  minAlpha: number;
  maxAlpha: number;
  baseHue: number;
  velocityFactor: number;
  maxConnections: number;
  connectionDistance: number;
  colorChangeRadius: number;
  hueShift: number;
}