import React, { FC } from 'react'
import { WelcomeBlock } from '@containers/CMain/components/WelcomeBlock'
import { SCMain } from '@containers/CMain/index.styled'
import { AboutAndSkills } from '@containers/CMain/components/AboutAndSkills'
import { Overview } from '@containers/CMain/components/Overview'
import { Contacts } from '@containers/CMain/components/Contacts'
import { OverviewMedium } from '@containers/CMain/components/OverviewMedium'

export const CMain: FC = () => (
  <SCMain>
    <WelcomeBlock />
    <AboutAndSkills />
    <div id="overview">
      <Overview />
      <OverviewMedium />
    </div>
    <Contacts />
  </SCMain>
)
