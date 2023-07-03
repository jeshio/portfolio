import { RangeObject } from '@containers/CMain/components/OverviewMedium/types'

export const createRange = <T extends string>(
  rangeStart: number,
  rangeEnd: number,
  extraFieldName: T,
  extraFieldValue: string
): RangeObject<T> => {
  return {
    [extraFieldName]: extraFieldValue,
    rangeStart,
    rangeEnd,
  } as RangeObject<T>
}
