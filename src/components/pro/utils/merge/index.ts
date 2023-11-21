/* eslint-disable prefer-rest-params */

/**
 * 用於合併 n 個對象
 * @param  {any[]} ...rest
 * @returns T
 */
const merge = <T>(...rest: any[]): T => {
  const obj = {}
  const il = rest.length
  let key
  let i = 0
  for (; i < il; i += 1) {
    // eslint-disable-next-line no-restricted-syntax
    for (key in rest[i]) {
      if (rest[i].hasOwnProperty(key)) {
        if (
          // @ts-ignore
          typeof obj[key] === 'object' &&
          typeof rest[i][key] === 'object' &&
          // @ts-ignore
          obj[key] !== undefined &&
          // @ts-ignore
          obj[key] !== null &&
          // @ts-ignore
          !Array.isArray(obj[key]) &&
          !Array.isArray(rest[i][key])
        ) {
          // @ts-ignore
          obj[key] = {
            // @ts-ignore
            ...obj[key],
            ...rest[i][key],
          }
        } else {
          // @ts-ignore
          obj[key] = rest[i][key]
        }
      }
    }
  }
  return obj as T
}

export { merge }
