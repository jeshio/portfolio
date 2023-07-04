import React, { FC, memo } from 'react'
import {
  SBirdsImageWrapper,
  SButton,
  SChart,
  SCompaniesList,
  SContent,
  SOverviewMedium,
  SRolesList,
  STitlesWrapper,
  SWorkingLines,
  SYearsList,
} from '@containers/CMain/components/OverviewMedium/index.styled'
import { Title } from '@components/Title'
import { useLogic } from '@containers/CMain/components/OverviewMedium/useLogic'
import { StaticImage } from 'gatsby-plugin-image'

const OverviewMedium: FC = () => {
  const { uniqueCompanyNames, yearsHistory, rolesHistory, workingLines } =
    useLogic()

  return (
    <SOverviewMedium>
      <SBirdsImageWrapper>
        <StaticImage
          src="../../images/birds.png"
          alt="Birds"
          placeholder="blurred"
          breakpoints={[358]}
          quality={90}
        />
      </SBirdsImageWrapper>
      <STitlesWrapper>
        <Title level={2}>CAREER OVERVIEW</Title>
        <Title level={3}>without own projects</Title>
      </STitlesWrapper>
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
      <SButton to="#contacts">Get contacts</SButton>
    </SOverviewMedium>
  )
}

const memoizedOverviewMedium = memo(OverviewMedium)

export { memoizedOverviewMedium as OverviewMedium }
