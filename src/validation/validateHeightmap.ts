export interface HeightmapValidationResult {
  status: 'pass' | 'warning' | 'error';
  issues: string[];
}

export function validateHeightmap(_heightmap: unknown): HeightmapValidationResult {
  return { status: 'pass', issues: [] };
}
