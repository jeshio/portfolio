import React, { FC, memo } from 'react'
import {
  SButton,
  SChart,
  SCompaniesList,
  SContent,
  SOverviewMedium,
  SRolesList,
  SWorkingLines,
  SYearsList,
} from '@containers/CMain/components/OverviewMedium/index.styled'
import { Title } from '@components/Title'
import { useLogic } from '@containers/CMain/components/OverviewMedium/useLogic'

const OverviewMedium: FC = () => {
  const { uniqueCompanyNames, yearsHistory, rolesHistory, workingLines } =
    useLogic()

  return (
    <SOverviewMedium>
      <Title level={2}>CAREER OVERVIEW</Title>
      <Title level={3}>without own projects</Title>
      <SContent>
        <SCompaniesList>
          {uniqueCompanyNames.map(companyName => (
            <li key={companyName}>{companyName}</li>
          ))}
        </SCompaniesList>
        <SChart>
          <SRolesList>
            {rolesHistory.map(({ role, rangeStart, rangeEnd }, index) => (
              <li key={index} style={{ flex: rangeEnd - rangeStart }}>
                <div>{role}</div>
              </li>
            ))}
          </SRolesList>
          <SWorkingLines>{workingLines}</SWorkingLines>
          <SYearsList>
            {yearsHistory.map(({ year, rangeStart, rangeEnd }) => (
              <li key={year} style={{ flex: rangeEnd - rangeStart }}>
                <div>{year}</div>
              </li>
            ))}
          </SYearsList>
        </SChart>
      </SContent>
      <SButton>Get contacts</SButton>
    </SOverviewMedium>
  )
}

const memoizedOverviewMedium = memo(OverviewMedium)

export { memoizedOverviewMedium as OverviewMedium }