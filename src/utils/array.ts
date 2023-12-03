export function truthy<T>(value: T | null | undefined | false | 0 | ''): value is T {
  return !!value
}
