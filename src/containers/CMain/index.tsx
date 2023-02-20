import React, { FC } from 'react'
import { WelcomeBlock } from '@containers/CMain/components/WelcomeBlock'
import { SCMain } from '@containers/CMain/index.styled'
import { AboutAndSkills } from '@containers/CMain/components/AboutAndSkills'

export const CMain: FC = () => (
  <SCMain>
    <WelcomeBlock />
    <AboutAndSkills />
  </SCMain>
)
