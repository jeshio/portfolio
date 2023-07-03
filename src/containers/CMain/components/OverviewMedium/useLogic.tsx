import {
  companiesHistory,
  rolesHistory,
  yearsHistory,
} from '@containers/CMain/components/OverviewMedium/constants'
import React, { useMemo } from 'react'
import { SWorkingLine } from '@containers/CMain/components/OverviewMedium/index.styled'

const uniqueCompanyNames = [
  ...new Set(companiesHistory.map(({ companyName }) => companyName)),
]
const historyByCompany = uniqueCompanyNames.reduce(
  (base, companyName) => ({
    ...base,
    [companyName]: companiesHistory.filter(
      company => company.companyName === companyName
    ),
  }),
  {}
)

export const useLogic = () => {
  const workingLinesByCompanies = Object.keys(historyByCompany).reduce(
    (base, rowCompanyName) => ({
      ...base,
      [rowCompanyName]: companiesHistory.reduce(
        (rowBase, columnCompany, index) => {
          const isRowCompany = columnCompany.companyName === rowCompanyName
          const nextCompany = companiesHistory[index + 1]
          const prevCompany = companiesHistory[index - 1]
          const nextIsRowCompany = nextCompany?.companyName === rowCompanyName
          const prevIsRowCompany = prevCompany?.companyName === rowCompanyName
          if (isRowCompany) {
            return [
              ...rowBase,
              // number in array means it current row company length
              [columnCompany.rangeEnd - columnCompany.rangeStart],
            ]
          }
          if (nextIsRowCompany) {
            return [
              ...rowBase,
              nextCompany.rangeStart -
                (prevCompany?.rangeEnd || columnCompany.rangeStart),
            ]
          }
          if (index === 0) {
            return [columnCompany.rangeEnd - columnCompany.rangeStart]
          }

          if (prevIsRowCompany) {
            return [...rowBase, columnCompany.rangeEnd - prevCompany.rangeEnd]
          }

          return [
            ...rowBase.slice(0, -1),
            (rowBase.slice(-1)[0] as number) +
              (columnCompany.rangeEnd - prevCompany.rangeEnd),
          ]
        },
        [] as Array<number | number[]>
      ),
    }),
    {}
  )
  const workingLines = useMemo(
    () =>
      Object.keys(historyByCompany).map(rowCompanyName => (
        <li key={rowCompanyName}>
          {(
            workingLinesByCompanies[
              rowCompanyName as keyof typeof workingLinesByCompanies
            ] as Array<number | number[]>
          ).map(workingLine => {
            const columnIsRowCompany = Array.isArray(workingLine)

            if (columnIsRowCompany) {
              return (
                <div
                  style={{
                    flex: workingLine[0],
                  }}
                >
                  &nbsp;
                  <SWorkingLine />
                </div>
              )
            }

            return (
              <div
                style={{
                  flex: workingLine,
                }}
              />
            )
          })}
        </li>
      )),
    []
  )

  return {
    companiesHistory,
    uniqueCompanyNames,
    historyByCompany,
    rolesHistory,
    yearsHistory,
    workingLines,
  }
}
