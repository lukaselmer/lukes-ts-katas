export function truthy<T>(value: T | null | undefined | false | 0 | ''): value is T {
  return !!value
}

export function times(count: number, fn: (index: number) => void) {
  const array = Array.from({ length: count })
  return array.map((_, index) => fn(index))
}
