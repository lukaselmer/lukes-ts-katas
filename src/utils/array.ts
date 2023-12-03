export function truthy<T>(value: T | null | undefined | false | 0 | ''): value is T {
  return !!value
}

export function times(count: number, fn: (index: number) => void) {
  for (let index = 0; index < count; index++) fn(index)
}
