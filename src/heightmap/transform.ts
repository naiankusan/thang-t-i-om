export interface HeightmapTransformOptions {
  maximumHeightMm: number;
  nearIsWhite: boolean;
}

export function mapNormalizedDepthToHeight(value: number, options: HeightmapTransformOptions): number {
  const v = Math.min(1, Math.max(0, value));
  const normalized = options.nearIsWhite ? v : 1 - v;
  return normalized * options.maximumHeightMm;
}
