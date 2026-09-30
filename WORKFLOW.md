# Master Workflow

## Visible UI
1. Upload
2. Criteria
3. Result
4. Export

## Hidden pipeline
1. Normalize input
2. Analyze subject/silhouette
3. Generate structure-locked sculpt proxy
4. Validate proxy against source
5. Estimate depth
6. Refine depth without inventing geometry
7. Convert depth to physical heightmap
8. Validate fabrication constraints
9. Render result
10. Export PNG16 + JSON

## Core invariants
- Raw depth is never overwritten.
- Refinement must not invent structural landmarks.
- Upscaling does not create geometric information.
- Invert is a value-direction transform, not a fabrication-mode shortcut.
- Height mapping is deterministic.
- Export is blocked on fatal validation errors.
