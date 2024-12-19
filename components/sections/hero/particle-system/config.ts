import { ParticleConfig } from "./types";

export const DEFAULT_CONFIG: ParticleConfig = {
  minRadius: 2,
  maxRadius: 4,
  minAlpha: 0.3,
  maxAlpha: 0.7,
  baseHue: 164, // Green
  velocityFactor: 0.1,
  maxConnections: 3,
  connectionDistance: 200,
  colorChangeRadius: 200,
  hueShift: 40, // Amount to shift hue when near mouse (towards blue)
};