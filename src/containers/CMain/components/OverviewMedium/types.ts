export type RangeObject<T extends string> = {
  [K in T | 'rangeStart' | 'rangeEnd']: K extends T ? string : number
}
