type OmitUndefined<T> = {
  [P in keyof T]: NonNullable<T[P]>
}

export const omitUndefined = <T>(obj: T): OmitUndefined<T> => {
  const newObj = {} as T
  Object.keys(obj || {}).forEach((key) => {
    // @ts-ignore
    if (obj[key] !== undefined) {
      // @ts-ignore
      newObj[key] = obj[key]
    }
  })
  if (Object.keys(newObj as Record<string, any>).length < 1) {
    return undefined as any
  }
  return newObj as OmitUndefined<T>
}
