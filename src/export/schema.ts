export interface ExportMetadata {
  version: string;
  source: { filename: string; width: number; height: number };
  processing: { purpose: string; detail: string; background: string };
  heightmap: { format: 'grayscale16'; near_value: number; far_value: number; maximum_height_mm: number };
}
