export type WorkflowStep = 'upload' | 'criteria' | 'result' | 'export';
export type WorkflowStatus = 'idle' | 'processing' | 'ready' | 'error';

export interface Criteria {
  purpose: '3d-relief' | 'cnc' | 'image-blender';
  detail: 'standard' | 'high' | 'maximum';
  nearIsWhite: boolean;
  maximumReliefDepthMm: number;
  background: 'preserve' | 'flatten' | 'remove';
}

export interface ProcessingArtifacts {
  normalizedImage?: unknown;
  subjectMask?: unknown;
  structureAnalysis?: unknown;
  sculptProxy?: unknown;
  rawDepth?: unknown;
  refinedDepth?: unknown;
  heightmap16?: unknown;
  validation?: unknown;
}
