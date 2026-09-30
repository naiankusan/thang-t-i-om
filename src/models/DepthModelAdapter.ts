export interface DepthModelAdapter<Input = unknown, Output = unknown> {
  readonly id: string;
  estimate(input: Input): Promise<Output>;
}
