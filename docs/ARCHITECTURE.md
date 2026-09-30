# Architecture

UI is a four-step state machine over a hidden deterministic processing pipeline.

```text
Upload → Criteria → Result → Export
              │
              └→ Normalize → Structure Analysis → Structure-Locked Proxy → Proxy Validation → Depth → Refinement → Heightmap → Validation
```

## Modules
- `src/pipeline`: orchestration
- `src/models`: model adapters
- `src/proxy`: structure-lock proxy + validation
- `src/heightmap`: deterministic depth-to-height transforms
- `src/validation`: fabrication checks
- `src/export`: PNG16/JSON
- `src/ui`: four-step presentation
