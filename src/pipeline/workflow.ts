import type { Criteria, ProcessingArtifacts } from './types';

export interface PipelineContext {
  input: File;
  criteria: Criteria;
  artifacts: ProcessingArtifacts;
}

export async function runPipeline(ctx: PipelineContext): Promise<ProcessingArtifacts> {
  // Implementation intentionally staged so every transform is independently testable.
  // Never overwrite rawDepth after model inference.
  return ctx.artifacts;
}
