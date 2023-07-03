import React, { FC } from 'react'
import {
  SButton,
  SCompaniesList,
  SCompanyLine,
  SDiagram,
  SOverview,
  SRolesList,
  SYearsList,
} from '@containers/CMain/components/Overview/index.styled'
import { Title } from '@components/Title'

export const Overview: FC = () => {
  return (
    <SOverview>
      <Title level={2}>CAREER OVERVIEW</Title>
      <Title level={3}>without own projects</Title>
      <SDiagram>
        <SYearsList>
          <li>2014</li>
          <li>2016</li>
          <li>2017</li>
          <li>2018</li>
          <li>2019</li>
          <li>2022</li>
        </SYearsList>
        <SRolesList>
          <li>
            <div>
              <div>Web Developer</div>
            </div>
            <hr />
          </li>
          <li>
            <div>
              <div>Junior Frontend</div>
            </div>
            <hr />
          </li>
          <li>
            <div>
              <div>Middle Frontend</div>
            </div>
            <hr />
          </li>
          <li>
            <div>
              <div>Senior Frontend</div>
            </div>
            <hr />
          </li>
          <li>
            <div>
              <div>Lead Frontend</div>
            </div>
            <hr />
          </li>
        </SRolesList>
        <SCompaniesList>
          <li>
            University Job
            <SCompanyLine />
          </li>
          <li>
            E-promo
            <SCompanyLine />
            <SCompanyLine />
          </li>
          <li>
            EnjoyBook
            <SCompanyLine />
          </li>
          <li>
            Dasreda
            <SCompanyLine />
          </li>
        </SCompaniesList>
      </SDiagram>
      <SButton>Get contacts</SButton>
    </SOverview>
  )
}
