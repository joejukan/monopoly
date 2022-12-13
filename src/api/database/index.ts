export * from './getDatabase';
export * from './updateDatabase';
export * from './versions';

export function $<V = any>(input: Record<string, V>, prefix = '$') {
  const output: Record<string, V> = {};
  Object.keys(input).forEach((key) => (output[prefix + key] = input[key]));
  return output;
}
