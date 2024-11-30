export function intentionallyIgnoreError(error: unknown) {
  console.warn(error);
  return undefined;
}
