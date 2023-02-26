import React, { FC } from 'react'
import { WelcomeBlock } from '@containers/CMain/components/WelcomeBlock'
import { SCMain } from '@containers/CMain/index.styled'
import { AboutAndSkills } from '@containers/CMain/components/AboutAndSkills'
import { Overview } from '@containers/CMain/components/Overview'

export const CMain: FC = () => (
  <SCMain>
    <WelcomeBlock />
    <AboutAndSkills />
    <Overview />
  </SCMain>
)
