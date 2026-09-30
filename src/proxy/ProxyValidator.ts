export interface ProxyValidationResult {
  status: 'pass' | 'warning' | 'error';
  issues: Array<{ type: string; severity: 'low' | 'medium' | 'high'; detail: string }>;
}

export function validateProxy(_source: unknown, _proxy: unknown): ProxyValidationResult {
  return { status: 'pass', issues: [] };
}
